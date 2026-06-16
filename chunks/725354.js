"use strict";
var n, i;
function r(e) {
    for (let t = 0; t < e.length; t++) e[t] = s(e[t]);
    return !0;
}
function s(e) {
    if ("string" == typeof e) return { type: 0, value: e };
    let [i] = e;
    switch (i) {
        case n.Argument:
            return { type: i, value: e[1] };
        case n.Number:
        case n.Date:
        case n.Time:
            return { type: i, value: e[1], style: e[2] };
        case n.Select:
        case n.Plural:
            return (function (e) {
                let [t, i, s, a, o] = e;
                for (let e in s) r(s[e]), (s[e] = { value: s[e] });
                return t === n.Plural
                    ? { type: t, value: i, options: s, offset: a, pluralType: o }
                    : { type: t, value: i, options: s, offset: a };
            })(e);
        case n.Pound:
            return t.FORMAT_JS_POUND;
        case n.Tag: {
            let [t, n, i, s] = e;
            return r(i), null != s && r(s), { type: t, value: n, children: i, control: s };
        }
        default:
            throw Error(`FormatJS keyless JSON encountered an unknown type: ${i}`);
    }
}
Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.FORMAT_JS_POUND = t.FormatJsNodeType = void 0),
    (t.hydrateFormatJsAst = function (e) {
        return "string" == typeof e
            ? s(e)
            : "string" == typeof e[0]
              ? (r(e), e)
              : 0 === e.length
                ? e
                : Array.isArray(e[0])
                  ? (r(e), e)
                  : s(e);
    }),
    (t.compressFormatJsToAst = function e(t) {
        if (Array.isArray(t)) return t.map((t) => e(t));
        switch (t.type) {
            case n.Literal:
                return t.value;
            case n.Argument:
                return [t.type, t.value];
            case n.Number:
            case n.Date:
            case n.Time:
                return [t.type, t.value, t.style];
            case n.Select: {
                let n = {};
                for (let [i, r] of Object.entries(t.options)) n[i] = e(r.value);
                return [t.type, t.value, n];
            }
            case n.Plural: {
                let n = {};
                for (let [i, r] of Object.entries(t.options)) n[i] = e(r.value);
                return [t.type, t.value, n, t.offset, t.pluralType];
            }
            case n.Pound:
                return [t.type];
            case n.Tag:
                return [t.type, t.value, e(t.children), e(t.control)];
        }
    }),
    (t.isCompressedAst = function (e) {
        return "string" == typeof e || (!!Array.isArray(e) && (Array.isArray(e[0]) || "string" == typeof e[0]));
    }),
    ((i = n || (t.FormatJsNodeType = n = {}))[(i.Literal = 0)] = "Literal"),
    (i[(i.Argument = 1)] = "Argument"),
    (i[(i.Number = 2)] = "Number"),
    (i[(i.Date = 3)] = "Date"),
    (i[(i.Time = 4)] = "Time"),
    (i[(i.Select = 5)] = "Select"),
    (i[(i.Plural = 6)] = "Plural"),
    (i[(i.Pound = 7)] = "Pound"),
    (i[(i.Tag = 8)] = "Tag"),
    (t.FORMAT_JS_POUND = Object.freeze({ type: 7 }));
