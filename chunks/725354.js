"use strict";
var n, r;
function i(e) {
    for (let t = 0; t < e.length; t++) e[t] = s(e[t]);
    return !0;
}
function s(e) {
    if ("string" == typeof e) return { type: 0, value: e };
    let [r] = e;
    switch (r) {
        case n.Argument:
            return { type: r, value: e[1] };
        case n.Number:
        case n.Date:
        case n.Time:
            return { type: r, value: e[1], style: e[2] };
        case n.Select:
        case n.Plural:
            return (function (e) {
                let [t, r, s, a, o] = e;
                for (let e in s) i(s[e]), (s[e] = { value: s[e] });
                return t === n.Plural
                    ? { type: t, value: r, options: s, offset: a, pluralType: o }
                    : { type: t, value: r, options: s, offset: a };
            })(e);
        case n.Pound:
            return t.FORMAT_JS_POUND;
        case n.Tag: {
            let [t, n, r, s] = e;
            return i(r), null != s && i(s), { type: t, value: n, children: r, control: s };
        }
        default:
            throw Error(`FormatJS keyless JSON encountered an unknown type: ${r}`);
    }
}
Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.FORMAT_JS_POUND = t.FormatJsNodeType = void 0),
    (t.hydrateFormatJsAst = function (e) {
        return "string" == typeof e
            ? s(e)
            : "string" == typeof e[0]
              ? (i(e), e)
              : 0 === e.length
                ? e
                : Array.isArray(e[0])
                  ? (i(e), e)
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
                for (let [r, i] of Object.entries(t.options)) n[r] = e(i.value);
                return [t.type, t.value, n];
            }
            case n.Plural: {
                let n = {};
                for (let [r, i] of Object.entries(t.options)) n[r] = e(i.value);
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
    ((r = n || (t.FormatJsNodeType = n = {}))[(r.Literal = 0)] = "Literal"),
    (r[(r.Argument = 1)] = "Argument"),
    (r[(r.Number = 2)] = "Number"),
    (r[(r.Date = 3)] = "Date"),
    (r[(r.Time = 4)] = "Time"),
    (r[(r.Select = 5)] = "Select"),
    (r[(r.Plural = 6)] = "Plural"),
    (r[(r.Pound = 7)] = "Pound"),
    (r[(r.Tag = 8)] = "Tag"),
    (t.FORMAT_JS_POUND = Object.freeze({ type: 7 }));
