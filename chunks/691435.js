var n;
function r(e) {
    for (let t = 0; t < e.length; t++) e[t] = o(e[t]);
    return !0;
}
function i(e) {
    let [t, i, o, a, s] = e;
    for (let e in o) r(o[e]), (o[e] = { value: o[e] });
    return t === n.Plural
        ? {
              type: t,
              value: i,
              options: o,
              offset: a,
              pluralType: s
          }
        : {
              type: t,
              value: i,
              options: o,
              offset: a
          };
}
function o(e) {
    if ('string' == typeof e)
        return {
            type: 0,
            value: e
        };
    let [o] = e;
    switch (o) {
        case n.Argument:
            return {
                type: o,
                value: e[1]
            };
        case n.Number:
        case n.Date:
        case n.Time:
            return {
                type: o,
                value: e[1],
                style: e[2]
            };
        case n.Select:
        case n.Plural:
            return i(e);
        case n.Pound:
            return t.FORMAT_JS_POUND;
        case n.Tag: {
            let [t, n, i, o] = e;
            return (
                r(i),
                null != o && r(o),
                {
                    type: t,
                    value: n,
                    children: i,
                    control: o
                }
            );
        }
        default:
            throw Error(`FormatJS keyless JSON encountered an unknown type: ${o}`);
    }
}
function a(e) {
    return 'string' == typeof e ? o(e) : 'string' == typeof e[0] ? (r(e), e) : 0 === e.length ? e : Array.isArray(e[0]) ? (r(e), e) : o(e);
}
function s(e) {
    if (Array.isArray(e)) return e.map((e) => s(e));
    switch (e.type) {
        case n.Literal:
            return e.value;
        case n.Argument:
            return [e.type, e.value];
        case n.Number:
        case n.Date:
        case n.Time:
            return [e.type, e.value, e.style];
        case n.Select: {
            let t = {};
            for (let [n, r] of Object.entries(e.options)) t[n] = s(r.value);
            return [e.type, e.value, t];
        }
        case n.Plural: {
            let t = {};
            for (let [n, r] of Object.entries(e.options)) t[n] = s(r.value);
            return [e.type, e.value, t, e.offset, e.pluralType];
        }
        case n.Pound:
            return [e.type];
        case n.Tag:
            return [e.type, e.value, s(e.children), s(e.control)];
    }
}
function l(e) {
    return 'string' == typeof e || (!!Array.isArray(e) && (Array.isArray(e[0]) || 'string' == typeof e[0]));
}
Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.FORMAT_JS_POUND = t.FormatJsNodeType = void 0),
    (t.hydrateFormatJsAst = a),
    (t.compressFormatJsToAst = s),
    (t.isCompressedAst = l),
    (function (e) {
        (e[(e.Literal = 0)] = 'Literal'), (e[(e.Argument = 1)] = 'Argument'), (e[(e.Number = 2)] = 'Number'), (e[(e.Date = 3)] = 'Date'), (e[(e.Time = 4)] = 'Time'), (e[(e.Select = 5)] = 'Select'), (e[(e.Plural = 6)] = 'Plural'), (e[(e.Pound = 7)] = 'Pound'), (e[(e.Tag = 8)] = 'Tag');
    })(n || (t.FormatJsNodeType = n = {})),
    (t.FORMAT_JS_POUND = Object.freeze({ type: 7 }));
