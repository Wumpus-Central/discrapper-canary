"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.FormatBuilder = void 0),
    (t.bindFormatValuesWithBuilder = a),
    (t.bindFormatValues = o);
let r = n(450678),
    i = n(725354);
t.FormatBuilder = class {
    constructor(e) {
        this.context = e;
    }
};
class s extends Error {
    constructor(e, t, n) {
        super(`No value for variable '${e}' was provided for the localized message '${t}'`),
            (this.variableName = e),
            (this.originalMessage = t),
            (this.nodeType = n);
    }
}
function a(e) {
    var t;
    let {
        builder: n,
        originalMessage: l,
        nodes: u,
        locales: d,
        values: c,
        dataFormatters: _,
        formatConfig: f,
        currentPluralValue: E,
        keyPrefix: h,
    } = e;
    if (1 === u.length && "string" == typeof u[0]) return void n.pushLiteralText(u[0]);
    for (let e = 0; e < u.length; e++) {
        let p = u[e];
        if ("string" == typeof p) {
            n.pushLiteralText(p);
            continue;
        }
        let m = p[0];
        if (m === i.FormatJsNodeType.Pound) {
            if ("number" == typeof E) {
                let e = _.formatNumber(E);
                n.pushLiteralText(e);
            }
            continue;
        }
        let g = p[1];
        if (!(g in c) && "$" !== g[0]) throw new s(g, l, m);
        let A = c[g];
        switch (m) {
            case i.FormatJsNodeType.Argument:
                "object" == typeof A || "function" == typeof A ? n.pushObject(A) : n.pushLiteralText(String(A));
                break;
            case i.FormatJsNodeType.Date: {
                let e = p[2],
                    t = e in f.date ? f.date[e] : null != e ? (0, r.parseDateTimeSkeleton)(e) : void 0;
                n.pushLiteralText(_.formatDate(A, t));
                break;
            }
            case i.FormatJsNodeType.Time: {
                let e = p[2],
                    t = e in f.time ? f.time[e] : null != e ? (0, r.parseDateTimeSkeleton)(e) : void 0;
                n.pushLiteralText(_.formatTime(A, t));
                break;
            }
            case i.FormatJsNodeType.Number: {
                let e = p[2],
                    i =
                        e in f.number
                            ? f.number[e]
                            : null != e
                              ? (0, r.parseNumberSkeleton)((0, r.parseNumberSkeletonFromString)(e))
                              : void 0,
                    s = "number" != typeof A ? A : A * (null != (t = null == i ? void 0 : i.scale) ? t : 1);
                n.pushLiteralText(_.formatNumber(s, i));
                break;
            }
            case i.FormatJsNodeType.Tag: {
                let t = p[2],
                    r = p[3],
                    i = o({
                        Builder: n.constructor,
                        nodes: t,
                        locales: d,
                        dataFormatters: _,
                        formatConfig: f,
                        values: c,
                        currentPluralValue: E,
                        keyPrefix: `${h}.${e}`,
                    }),
                    s =
                        null != r
                            ? o({
                                  Builder: n.constructor,
                                  nodes: r,
                                  locales: d,
                                  dataFormatters: _,
                                  formatConfig: f,
                                  values: c,
                                  currentPluralValue: E,
                                  keyPrefix: `${h}.${e}-control`,
                              })
                            : [];
                if ("$" === g[0]) n.pushRichTextTag(g, i, s);
                else {
                    if ("function" != typeof A)
                        throw `expected a function type for a Tag formatting value, ${g}. got ${typeof A}: ${A}`;
                    let t = A(i, `${h}.${e}`);
                    for (let e of (t = Array.isArray(t) ? t : [t]))
                        "string" == typeof e ? n.pushLiteralText(e) : n.pushObject(e);
                }
                break;
            }
            case i.FormatJsNodeType.Select: {
                let t = p[2],
                    r = A in t ? t[A] : t.other;
                if (null == r)
                    throw `${A} is not a known option for select value ${g}. Valid options are ${Object.keys(t).join(", ")}`;
                a({
                    builder: n,
                    nodes: r,
                    locales: d,
                    dataFormatters: _,
                    formatConfig: f,
                    values: c,
                    keyPrefix: `${h}.${e}`,
                });
                break;
            }
            case i.FormatJsNodeType.Plural: {
                let t = p[2],
                    r = p[3],
                    i = p[4],
                    s = (() => {
                        var e;
                        let n = `=${A}`;
                        return n in t
                            ? t[n]
                            : null != (e = t[_.getPluralRules({ type: i }).select(A - (null != r ? r : 0))])
                              ? e
                              : t.other;
                    })();
                if (null == s)
                    throw `${A} is not a known option for plural value ${g}. Valid options are ${Object.keys(t).join(", ")}`;
                a({
                    builder: n,
                    nodes: s,
                    locales: d,
                    dataFormatters: _,
                    formatConfig: f,
                    values: c,
                    currentPluralValue: A - (null != r ? r : 0),
                    keyPrefix: `${h}.${e}`,
                });
            }
        }
    }
}
function o(e) {
    let {
            Builder: t,
            originalMessage: n,
            nodes: r,
            locales: i,
            dataFormatters: s,
            formatConfig: o,
            values: l,
            currentPluralValue: u,
            keyPrefix: d,
        } = e,
        c = new t({ keyPrefix: d });
    return (
        "string" == typeof r
            ? c.pushLiteralText(r)
            : a({
                  builder: c,
                  originalMessage: n,
                  nodes: r,
                  locales: i,
                  dataFormatters: s,
                  formatConfig: o,
                  values: l,
                  currentPluralValue: u,
                  keyPrefix: d,
              }),
        c.finish()
    );
}
