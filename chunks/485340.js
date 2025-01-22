var r;
function i(e) {
    for (let n = 0; n < e.length; n++) e[n] = o(e[n]);
    return !0;
}
function a(e) {
    let [n, a, o, s, l] = e;
    for (let e in o) i(o[e]), (o[e] = { value: o[e] });
    return n === r.Plural
        ? {
              type: n,
              value: a,
              options: o,
              offset: s,
              pluralType: l
          }
        : {
              type: n,
              value: a,
              options: o,
              offset: s
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
        case r.Argument:
            return {
                type: o,
                value: e[1]
            };
        case r.Number:
        case r.Date:
        case r.Time:
            return {
                type: o,
                value: e[1],
                style: e[2]
            };
        case r.Select:
        case r.Plural:
            return a(e);
        case r.Pound:
            return n.FORMAT_JS_POUND;
        case r.Tag: {
            let [n, r, a, o] = e;
            return (
                i(a),
                null != o && i(o),
                {
                    type: n,
                    value: r,
                    children: a,
                    control: o
                }
            );
        }
        default:
            throw Error(`FormatJS keyless JSON encountered an unknown type: ${o}`);
    }
}
function s(e) {
    return 'string' == typeof e ? o(e) : 'string' == typeof e[0] ? (i(e), e) : 0 === e.length ? e : Array.isArray(e[0]) ? (i(e), e) : o(e);
}
function l(e) {
    if (Array.isArray(e)) return e.map((e) => l(e));
    switch (e.type) {
        case r.Literal:
            return e.value;
        case r.Argument:
            return [e.type, e.value];
        case r.Number:
        case r.Date:
        case r.Time:
            return [e.type, e.value, e.style];
        case r.Select: {
            let n = {};
            for (let [r, i] of Object.entries(e.options)) n[r] = l(i.value);
            return [e.type, e.value, n];
        }
        case r.Plural: {
            let n = {};
            for (let [r, i] of Object.entries(e.options)) n[r] = l(i.value);
            return [e.type, e.value, n, e.offset, e.pluralType];
        }
        case r.Pound:
            return [e.type];
        case r.Tag:
            return [e.type, e.value, l(e.children), l(e.control)];
    }
}
function u(e) {
    return 'string' == typeof e || (!!Array.isArray(e) && (Array.isArray(e[0]) || 'string' == typeof e[0]));
}
Object.defineProperty(n, '__esModule', { value: !0 }),
    (n.FORMAT_JS_POUND = n.FormatJsNodeType = void 0),
    (n.hydrateFormatJsAst = s),
    (n.compressFormatJsToAst = l),
    (n.isCompressedAst = u),
    !(function (e) {
        (e[(e.Literal = 0)] = 'Literal'), (e[(e.Argument = 1)] = 'Argument'), (e[(e.Number = 2)] = 'Number'), (e[(e.Date = 3)] = 'Date'), (e[(e.Time = 4)] = 'Time'), (e[(e.Select = 5)] = 'Select'), (e[(e.Plural = 6)] = 'Plural'), (e[(e.Pound = 7)] = 'Pound'), (e[(e.Tag = 8)] = 'Tag');
    })(r || (n.FormatJsNodeType = r = {})),
    (n.FORMAT_JS_POUND = Object.freeze({ type: 7 }));
