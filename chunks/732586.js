r.d(t, { Z: () => d }), r(388685);
var n = r(255367),
    l = r(73800),
    i = r(481060),
    o = r(911969),
    a = r(970184),
    c = r(293979),
    s = r(290829);
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function d(e) {
    let t,
        { type: r, style: d, label: p, placeholder: f, minLength: b, maxLength: O, required: m, value: y } = e,
        [j, g] = l.useState(null != y ? y : ''),
        {
            state: h,
            executeStateUpdate: v,
            error: P
        } = (0, a.Ee)(
            e,
            null != y
                ? {
                      type: r,
                      value: y
                  }
                : void 0
        ),
        x = (0, c.hz)(e.id);
    l.useEffect(() => {
        (null == h ? void 0 : h.type) === r && g(h.value);
    }, [r, h]);
    let S = {
        name: p,
        value: j,
        placeholder: f,
        minLength: b,
        maxLength: O,
        required: m,
        onChange: (e) => {
            g(e),
                v({
                    type: r,
                    value: e
                });
        },
        autoFocus: x
    };
    switch (d) {
        case o.PT.SMALL:
            t = (0, n.jsx)(i.oil, u({}, S));
            break;
        case o.PT.PARAGRAPH:
            t = (0, n.jsx)(i.Kx8, u({ autosize: !0 }, S));
    }
    return (0, n.jsx)(i.xJW, {
        title: p,
        required: m,
        className: s.formItem,
        error: P,
        children: t
    });
}
