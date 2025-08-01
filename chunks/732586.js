(r.d(t, { Z: () => p }), r(388685));
var n = r(255367),
    l = r(73800),
    i = r(755721),
    o = r(481060),
    a = r(911969),
    c = r(970184),
    s = r(293979),
    u = r(290829);
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                ((n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n));
            }));
    }
    return e;
}
function p(e) {
    let t,
        { type: r, style: p, label: f, placeholder: b, minLength: m, maxLength: O, required: y, value: j } = e,
        [g, h] = l.useState(null != j ? j : ''),
        {
            state: v,
            executeStateUpdate: P,
            error: x
        } = (0, c.Ee)(
            e,
            null != j
                ? {
                      type: r,
                      value: j
                  }
                : void 0
        ),
        S = (0, s.hz)(e.id);
    l.useEffect(() => {
        (null == v ? void 0 : v.type) === r && h(v.value);
    }, [r, v]);
    let w = {
        name: f,
        value: g,
        placeholder: b,
        minLength: m,
        maxLength: O,
        required: y,
        onChange: (e) => {
            (h(e),
                P({
                    type: r,
                    value: e
                }));
        },
        autoFocus: S
    };
    switch (p) {
        case a.PT.SMALL:
            t = (0, n.jsx)(o.oil, d({}, w));
            break;
        case a.PT.PARAGRAPH:
            t = (0, n.jsx)(i.iS, d({ autosize: !0 }, w));
    }
    return (0, n.jsx)(o.xJW, {
        title: f,
        required: y,
        className: u.formItem,
        error: x,
        children: t
    });
}
