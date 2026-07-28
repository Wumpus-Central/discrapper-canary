"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.FormatBuilder = void 0),
    (t.bindFormatValuesWithBuilder = o),
    (t.bindFormatValues = s);
let r = n(315507),
    i = n(725354);
t.FormatBuilder = class {
    constructor(e) {
        this.context = e;
    }
};
class a extends Error {
    constructor(e, t, n) {
        super(`No value for variable '${e}' was provided for the localized message '${t}'`),
            (this.variableName = e),
            (this.originalMessage = t),
            (this.nodeType = n);
    }
}
function o(e) {
    var t;
    let {
        builder: n,
        originalMessage: l,
        nodes: u,
        locales: c,
        values: d,
        dataFormatters: f,
        formatConfig: p,
        currentPluralValue: h,
        keyPrefix: m,
    } = e;
    if (1 === u.length && "string" == typeof u[0]) return void n.pushLiteralText(u[0]);
    for (let e = 0; e < u.length; e++) {
        let g = u[e];
        if ("string" == typeof g) {
            n.pushLiteralText(g);
            continue;
        }
        let v = g[0];
        if (v === i.FormatJsNodeType.Pound) {
            if ("number" == typeof h) {
                let e = f.formatNumber(h);
                n.pushLiteralText(e);
            }
            continue;
        }
        let y = g[1];
        if (!(y in d) && "$" !== y[0]) throw new a(y, l, v);
        let b = d[y];
        switch (v) {
            case i.FormatJsNodeType.Argument:
                "object" == typeof b || "function" == typeof b ? n.pushObject(b) : n.pushLiteralText(String(b));
                break;
            case i.FormatJsNodeType.Date: {
                let e = g[2],
                    t = e in p.date ? p.date[e] : null != e ? (0, r.parseDateTimeSkeleton)(e) : void 0;
                n.pushLiteralText(f.formatDate(b, t));
                break;
            }
            case i.FormatJsNodeType.Time: {
                let e = g[2],
                    t = e in p.time ? p.time[e] : null != e ? (0, r.parseDateTimeSkeleton)(e) : void 0;
                n.pushLiteralText(f.formatTime(b, t));
                break;
            }
            case i.FormatJsNodeType.Number: {
                let e = g[2],
                    i =
                        e in p.number
                            ? p.number[e]
                            : null != e
                              ? (0, r.parseNumberSkeleton)((0, r.parseNumberSkeletonFromString)(e))
                              : void 0,
                    a = "number" != typeof b ? b : b * (null != (t = null == i ? void 0 : i.scale) ? t : 1);
                n.pushLiteralText(f.formatNumber(a, i));
                break;
            }
            case i.FormatJsNodeType.Tag: {
                let t = g[2],
                    r = g[3],
                    i = s({
                        Builder: n.constructor,
                        nodes: t,
                        locales: c,
                        dataFormatters: f,
                        formatConfig: p,
                        values: d,
                        currentPluralValue: h,
                        keyPrefix: `${m}.${e}`,
                    }),
                    a =
                        null != r
                            ? s({
                                  Builder: n.constructor,
                                  nodes: r,
                                  locales: c,
                                  dataFormatters: f,
                                  formatConfig: p,
                                  values: d,
                                  currentPluralValue: h,
                                  keyPrefix: `${m}.${e}-control`,
                              })
                            : [];
                if ("$" === y[0]) n.pushRichTextTag(y, i, a);
                else {
                    if ("function" != typeof b)
                        throw `expected a function type for a Tag formatting value, ${y}. got ${typeof b}: ${b}`;
                    let t = b(i, `${m}.${e}`);
                    for (let e of (t = Array.isArray(t) ? t : [t]))
                        "string" == typeof e ? n.pushLiteralText(e) : n.pushObject(e);
                }
                break;
            }
            case i.FormatJsNodeType.Select: {
                let t = g[2],
                    r = b in t ? t[b] : t.other;
                if (null == r)
                    throw `${b} is not a known option for select value ${y}. Valid options are ${Object.keys(t).join(", ")}`;
                o({
                    builder: n,
                    nodes: r,
                    locales: c,
                    dataFormatters: f,
                    formatConfig: p,
                    values: d,
                    keyPrefix: `${m}.${e}`,
                });
                break;
            }
            case i.FormatJsNodeType.Plural: {
                let t = g[2],
                    r = g[3],
                    i = g[4],
                    a = (() => {
                        var e;
                        let n = `=${b}`;
                        return n in t
                            ? t[n]
                            : null != (e = t[f.getPluralRules({ type: i }).select(b - (null != r ? r : 0))])
                              ? e
                              : t.other;
                    })();
                if (null == a)
                    throw `${b} is not a known option for plural value ${y}. Valid options are ${Object.keys(t).join(", ")}`;
                o({
                    builder: n,
                    nodes: a,
                    locales: c,
                    dataFormatters: f,
                    formatConfig: p,
                    values: d,
                    currentPluralValue: b - (null != r ? r : 0),
                    keyPrefix: `${m}.${e}`,
                });
            }
        }
    }
}
function s(e) {
    let {
            Builder: t,
            originalMessage: n,
            nodes: r,
            locales: i,
            dataFormatters: a,
            formatConfig: s,
            values: l,
            currentPluralValue: u,
            keyPrefix: c,
        } = e,
        d = new t({ keyPrefix: c });
    return (
        "string" == typeof r
            ? d.pushLiteralText(r)
            : o({
                  builder: d,
                  originalMessage: n,
                  nodes: r,
                  locales: i,
                  dataFormatters: a,
                  formatConfig: s,
                  values: l,
                  currentPluralValue: u,
                  keyPrefix: c,
              }),
        d.finish()
    );
}
