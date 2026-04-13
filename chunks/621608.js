"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.FormatBuilder = void 0),
    (t.bindFormatValuesWithBuilder = l),
    (t.bindFormatValues = u);
let r = n(450678),
    i = n(725354);
function s(e) {
    return "$" === e[0];
}
class a {
    constructor(e) {
        this.context = e;
    }
}
t.FormatBuilder = a;
class o extends Error {
    constructor(e, t, n) {
        super(`No value for variable '${e}' was provided for the localized message '${t}'`),
            (this.variableName = e),
            (this.originalMessage = t),
            (this.nodeType = n);
    }
}
function l(e) {
    var t;
    let {
        builder: n,
        originalMessage: a,
        nodes: c,
        locales: d,
        values: _,
        dataFormatters: f,
        formatConfig: p,
        currentPluralValue: h,
        keyPrefix: m,
    } = e;
    if (1 === c.length && "string" == typeof c[0]) return void n.pushLiteralText(c[0]);
    for (let e = 0; e < c.length; e++) {
        let E = c[e];
        if ("string" == typeof E) {
            n.pushLiteralText(E);
            continue;
        }
        let g = E[0];
        if (g === i.FormatJsNodeType.Pound) {
            if ("number" == typeof h) {
                let e = f.formatNumber(h);
                n.pushLiteralText(e);
            }
            continue;
        }
        let A = E[1];
        if (!(A in _) && !s(A)) throw new o(A, a, g);
        let I = _[A];
        switch (g) {
            case i.FormatJsNodeType.Argument:
                "object" == typeof I || "function" == typeof I ? n.pushObject(I) : n.pushLiteralText(String(I));
                break;
            case i.FormatJsNodeType.Date: {
                let e = E[2],
                    t = e in p.date ? p.date[e] : null != e ? (0, r.parseDateTimeSkeleton)(e) : void 0;
                n.pushLiteralText(f.formatDate(I, t));
                break;
            }
            case i.FormatJsNodeType.Time: {
                let e = E[2],
                    t = e in p.time ? p.time[e] : null != e ? (0, r.parseDateTimeSkeleton)(e) : void 0;
                n.pushLiteralText(f.formatTime(I, t));
                break;
            }
            case i.FormatJsNodeType.Number: {
                let e = E[2],
                    i =
                        e in p.number
                            ? p.number[e]
                            : null != e
                              ? (0, r.parseNumberSkeleton)((0, r.parseNumberSkeletonFromString)(e))
                              : void 0,
                    s = "number" != typeof I ? I : I * (null != (t = null == i ? void 0 : i.scale) ? t : 1);
                n.pushLiteralText(f.formatNumber(s, i));
                break;
            }
            case i.FormatJsNodeType.Tag: {
                let t = E[2],
                    r = E[3],
                    i = u({
                        Builder: n.constructor,
                        nodes: t,
                        locales: d,
                        dataFormatters: f,
                        formatConfig: p,
                        values: _,
                        currentPluralValue: h,
                        keyPrefix: `${m}.${e}`,
                    }),
                    a =
                        null != r
                            ? u({
                                  Builder: n.constructor,
                                  nodes: r,
                                  locales: d,
                                  dataFormatters: f,
                                  formatConfig: p,
                                  values: _,
                                  currentPluralValue: h,
                                  keyPrefix: `${m}.${e}-control`,
                              })
                            : [];
                if (s(A)) n.pushRichTextTag(A, i, a);
                else {
                    if ("function" != typeof I)
                        throw `expected a function type for a Tag formatting value, ${A}. got ${typeof I}: ${I}`;
                    let t = I(i, `${m}.${e}`);
                    for (let e of (t = Array.isArray(t) ? t : [t]))
                        "string" == typeof e ? n.pushLiteralText(e) : n.pushObject(e);
                }
                break;
            }
            case i.FormatJsNodeType.Select: {
                let t = I,
                    r = E[2],
                    i = t in r ? r[t] : r.other;
                if (null == i)
                    throw `${t} is not a known option for select value ${A}. Valid options are ${Object.keys(r).join(", ")}`;
                l({
                    builder: n,
                    nodes: i,
                    locales: d,
                    dataFormatters: f,
                    formatConfig: p,
                    values: _,
                    keyPrefix: `${m}.${e}`,
                });
                break;
            }
            case i.FormatJsNodeType.Plural: {
                let t = E[2],
                    r = E[3],
                    i = E[4],
                    s = (() => {
                        var e;
                        let n = `=${I}`;
                        return n in t
                            ? t[n]
                            : null != (e = t[f.getPluralRules({ type: i }).select(I - (null != r ? r : 0))])
                              ? e
                              : t.other;
                    })();
                if (null == s)
                    throw `${I} is not a known option for plural value ${A}. Valid options are ${Object.keys(t).join(", ")}`;
                l({
                    builder: n,
                    nodes: s,
                    locales: d,
                    dataFormatters: f,
                    formatConfig: p,
                    values: _,
                    currentPluralValue: I - (null != r ? r : 0),
                    keyPrefix: `${m}.${e}`,
                });
            }
        }
    }
}
function u(e) {
    let {
            Builder: t,
            originalMessage: n,
            nodes: r,
            locales: i,
            dataFormatters: s,
            formatConfig: a,
            values: o,
            currentPluralValue: u,
            keyPrefix: c,
        } = e,
        d = new t({ keyPrefix: c });
    return (
        "string" == typeof r
            ? d.pushLiteralText(r)
            : l({
                  builder: d,
                  originalMessage: n,
                  nodes: r,
                  locales: i,
                  dataFormatters: s,
                  formatConfig: a,
                  values: o,
                  currentPluralValue: u,
                  keyPrefix: c,
              }),
        d.finish()
    );
}
