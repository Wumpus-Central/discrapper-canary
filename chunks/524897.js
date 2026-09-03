var r, n;
function i(e) {
    for (let t = 0; t < e.length; t++) e[t] = o(e[t]);
    return !0;
}
function o(e) {
    if ("string" == typeof e) return { type: 0, value: e };
    let [n] = e;
    switch (n) {
        case r.Argument:
            return { type: n, value: e[1] };
        case r.Number:
        case r.Date:
        case r.Time:
            return { type: n, value: e[1], style: e[2] };
        case r.Select:
        case r.Plural:
            return (function (e) {
                let [t, n, o, a, s] = e;
                for (let e in o) i(o[e]), (o[e] = { value: o[e] });
                return t === r.Plural
                    ? { type: t, value: n, options: o, offset: a, pluralType: s }
                    : { type: t, value: n, options: o, offset: a };
            })(e);
        case r.Pound:
            return t.FORMAT_JS_POUND;
        case r.Tag: {
            let [t, r, n, o] = e;
            return i(n), null != o && i(o), { type: t, value: r, children: n, control: o };
        }
        default:
            throw Error(`FormatJS keyless JSON encountered an unknown type: ${n}`);
    }
}
Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.FORMAT_JS_POUND = t.FormatJsNodeType = void 0),
    (t.hydrateFormatJsAst = function (e) {
        return "string" == typeof e
            ? o(e)
            : "string" == typeof e[0]
              ? (i(e), e)
              : 0 === e.length
                ? e
                : Array.isArray(e[0])
                  ? (i(e), e)
                  : o(e);
    }),
    (t.compressFormatJsToAst = function e(t) {
        if (Array.isArray(t)) return t.map((t) => e(t));
        switch (t.type) {
            case r.Literal:
                return t.value;
            case r.Argument:
                return [t.type, t.value];
            case r.Number:
            case r.Date:
            case r.Time:
                return [t.type, t.value, t.style];
            case r.Select: {
                let r = {};
                for (let [n, i] of Object.entries(t.options)) r[n] = e(i.value);
                return [t.type, t.value, r];
            }
            case r.Plural: {
                let r = {};
                for (let [n, i] of Object.entries(t.options)) r[n] = e(i.value);
                return [t.type, t.value, r, t.offset, t.pluralType];
            }
            case r.Pound:
                return [t.type];
            case r.Tag:
                return [t.type, t.value, e(t.children), e(t.control)];
        }
    }),
    (t.isCompressedAst = function (e) {
        return "string" == typeof e || (!!Array.isArray(e) && (Array.isArray(e[0]) || "string" == typeof e[0]));
    }),
    ((n = r || (t.FormatJsNodeType = r = {}))[(n.Literal = 0)] = "Literal"),
    (n[(n.Argument = 1)] = "Argument"),
    (n[(n.Number = 2)] = "Number"),
    (n[(n.Date = 3)] = "Date"),
    (n[(n.Time = 4)] = "Time"),
    (n[(n.Select = 5)] = "Select"),
    (n[(n.Plural = 6)] = "Plural"),
    (n[(n.Pound = 7)] = "Pound"),
    (n[(n.Tag = 8)] = "Tag"),
    (t.FORMAT_JS_POUND = Object.freeze({ type: 7 }));
