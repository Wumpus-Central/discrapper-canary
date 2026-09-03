Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.FormatBuilder = void 0),
    (t.bindFormatValuesWithBuilder = a),
    (t.bindFormatValues = s);
let n = r(315507),
    i = r(524897);
t.FormatBuilder = class {
    constructor(e) {
        this.context = e;
    }
};
class o extends Error {
    constructor(e, t, r) {
        super(`No value for variable '${e}' was provided for the localized message '${t}'`),
            (this.variableName = e),
            (this.originalMessage = t),
            (this.nodeType = r);
    }
}
function a(e) {
    var t;
    let {
        builder: r,
        originalMessage: l,
        nodes: u,
        locales: c,
        values: f,
        dataFormatters: d,
        formatConfig: p,
        currentPluralValue: h,
        keyPrefix: m,
    } = e;
    if (1 === u.length && "string" == typeof u[0]) return void r.pushLiteralText(u[0]);
    for (let e = 0; e < u.length; e++) {
        let v = u[e];
        if ("string" == typeof v) {
            r.pushLiteralText(v);
            continue;
        }
        let y = v[0];
        if (y === i.FormatJsNodeType.Pound) {
            if ("number" == typeof h) {
                let e = d.formatNumber(h);
                r.pushLiteralText(e);
            }
            continue;
        }
        let g = v[1];
        if (!(g in f) && "$" !== g[0]) throw new o(g, l, y);
        let b = f[g];
        switch (y) {
            case i.FormatJsNodeType.Argument:
                "object" == typeof b || "function" == typeof b ? r.pushObject(b) : r.pushLiteralText(String(b));
                break;
            case i.FormatJsNodeType.Date: {
                let e = v[2],
                    t = e in p.date ? p.date[e] : null != e ? (0, n.parseDateTimeSkeleton)(e) : void 0;
                r.pushLiteralText(d.formatDate(b, t));
                break;
            }
            case i.FormatJsNodeType.Time: {
                let e = v[2],
                    t = e in p.time ? p.time[e] : null != e ? (0, n.parseDateTimeSkeleton)(e) : void 0;
                r.pushLiteralText(d.formatTime(b, t));
                break;
            }
            case i.FormatJsNodeType.Number: {
                let e = v[2],
                    i =
                        e in p.number
                            ? p.number[e]
                            : null != e
                              ? (0, n.parseNumberSkeleton)((0, n.parseNumberSkeletonFromString)(e))
                              : void 0,
                    o = "number" != typeof b ? b : b * (null != (t = null == i ? void 0 : i.scale) ? t : 1);
                r.pushLiteralText(d.formatNumber(o, i));
                break;
            }
            case i.FormatJsNodeType.Tag: {
                let t = v[2],
                    n = v[3],
                    i = s({
                        Builder: r.constructor,
                        nodes: t,
                        locales: c,
                        dataFormatters: d,
                        formatConfig: p,
                        values: f,
                        currentPluralValue: h,
                        keyPrefix: `${m}.${e}`,
                    }),
                    o =
                        null != n
                            ? s({
                                  Builder: r.constructor,
                                  nodes: n,
                                  locales: c,
                                  dataFormatters: d,
                                  formatConfig: p,
                                  values: f,
                                  currentPluralValue: h,
                                  keyPrefix: `${m}.${e}-control`,
                              })
                            : [];
                if ("$" === g[0]) r.pushRichTextTag(g, i, o);
                else {
                    if ("function" != typeof b)
                        throw `expected a function type for a Tag formatting value, ${g}. got ${typeof b}: ${b}`;
                    let t = b(i, `${m}.${e}`);
                    for (let e of (t = Array.isArray(t) ? t : [t]))
                        "string" == typeof e ? r.pushLiteralText(e) : r.pushObject(e);
                }
                break;
            }
            case i.FormatJsNodeType.Select: {
                let t = v[2],
                    n = b in t ? t[b] : t.other;
                if (null == n)
                    throw `${b} is not a known option for select value ${g}. Valid options are ${Object.keys(t).join(", ")}`;
                a({
                    builder: r,
                    nodes: n,
                    locales: c,
                    dataFormatters: d,
                    formatConfig: p,
                    values: f,
                    keyPrefix: `${m}.${e}`,
                });
                break;
            }
            case i.FormatJsNodeType.Plural: {
                let t = v[2],
                    n = v[3],
                    i = v[4],
                    o = (() => {
                        var e;
                        let r = `=${b}`;
                        return r in t
                            ? t[r]
                            : null != (e = t[d.getPluralRules({ type: i }).select(b - (null != n ? n : 0))])
                              ? e
                              : t.other;
                    })();
                if (null == o)
                    throw `${b} is not a known option for plural value ${g}. Valid options are ${Object.keys(t).join(", ")}`;
                a({
                    builder: r,
                    nodes: o,
                    locales: c,
                    dataFormatters: d,
                    formatConfig: p,
                    values: f,
                    currentPluralValue: b - (null != n ? n : 0),
                    keyPrefix: `${m}.${e}`,
                });
            }
        }
    }
}
function s(e) {
    let {
            Builder: t,
            originalMessage: r,
            nodes: n,
            locales: i,
            dataFormatters: o,
            formatConfig: s,
            values: l,
            currentPluralValue: u,
            keyPrefix: c,
        } = e,
        f = new t({ keyPrefix: c });
    return (
        "string" == typeof n
            ? f.pushLiteralText(n)
            : a({
                  builder: f,
                  originalMessage: r,
                  nodes: n,
                  locales: i,
                  dataFormatters: o,
                  formatConfig: s,
                  values: l,
                  currentPluralValue: u,
                  keyPrefix: c,
              }),
        f.finish()
    );
}
