var n;
function i(e) {
    for (let t = 0; t < e.length; t++) e[t] = a(e[t]);
    return !0;
}
function r(e) {
    let [t, r, a, s, o] = e;
    for (let e in a) i(a[e]), (a[e] = { value: a[e] });
    return t === n.Plural
        ? {
              type: t,
              value: r,
              options: a,
              offset: s,
              pluralType: o
          }
        : {
              type: t,
              value: r,
              options: a,
              offset: s
          };
}
function a(e) {
    if ('string' == typeof e)
        return {
            type: 0,
            value: e
        };
    let [a] = e;
    switch (a) {
        case n.Argument:
            return {
                type: a,
                value: e[1]
            };
        case n.Number:
        case n.Date:
        case n.Time:
            return {
                type: a,
                value: e[1],
                style: e[2]
            };
        case n.Select:
        case n.Plural:
            return r(e);
        case n.Pound:
            return t.FORMAT_JS_POUND;
        case n.Tag: {
            let [t, n, r, a] = e;
            return (
                i(r),
                null != a && i(a),
                {
                    type: t,
                    value: n,
                    children: r,
                    control: a
                }
            );
        }
        default:
            throw Error(`FormatJS keyless JSON encountered an unknown type: ${a}`);
    }
}
function s(e) {
    return 'string' == typeof e ? a(e) : 'string' == typeof e[0] ? (i(e), e) : 0 === e.length ? e : Array.isArray(e[0]) ? (i(e), e) : a(e);
}
function o(e) {
    if (Array.isArray(e)) return e.map((e) => o(e));
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
            for (let [n, i] of Object.entries(e.options)) t[n] = o(i.value);
            return [e.type, e.value, t];
        }
        case n.Plural: {
            let t = {};
            for (let [n, i] of Object.entries(e.options)) t[n] = o(i.value);
            return [e.type, e.value, t, e.offset, e.pluralType];
        }
        case n.Pound:
            return [e.type];
        case n.Tag:
            return [e.type, e.value, o(e.children), o(e.control)];
    }
}
function l(e) {
    return 'string' == typeof e || (!!Array.isArray(e) && (Array.isArray(e[0]) || 'string' == typeof e[0]));
}
Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.FORMAT_JS_POUND = t.FormatJsNodeType = void 0),
    (t.hydrateFormatJsAst = s),
    (t.compressFormatJsToAst = o),
    (t.isCompressedAst = l),
    (function (e) {
        (e[(e.Literal = 0)] = 'Literal'), (e[(e.Argument = 1)] = 'Argument'), (e[(e.Number = 2)] = 'Number'), (e[(e.Date = 3)] = 'Date'), (e[(e.Time = 4)] = 'Time'), (e[(e.Select = 5)] = 'Select'), (e[(e.Plural = 6)] = 'Plural'), (e[(e.Pound = 7)] = 'Pound'), (e[(e.Tag = 8)] = 'Tag');
    })(n || (t.FormatJsNodeType = n = {})),
    (t.FORMAT_JS_POUND = Object.freeze({ type: 7 }));
