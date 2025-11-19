n.d(t, { Z: () => f }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(911969),
    s = n(970184),
    l = n(293979),
    c = n(59718);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e) {
    let t,
        { type: n, style: u, label: f, placeholder: _, minLength: p, maxLength: h, required: m, value: g } = e,
        [E, b] = i.useState(null != g ? g : ""),
        {
            state: y,
            executeStateUpdate: O,
            error: v,
        } = (0, s.Ee)(
            e,
            null != g
                ? {
                      type: n,
                      value: g,
                  }
                : void 0,
        ),
        I = (0, l.hz)(e.id);
    i.useEffect(() => {
        (null == y ? void 0 : y.type) === n && b(y.value);
    }, [n, y]);
    let T = {
        value: E,
        placeholder: _,
        minLength: p,
        maxLength: h,
        required: m,
        onChange: (e) => {
            b(e),
                O({
                    type: n,
                    value: e,
                });
        },
        autoFocus: I,
    };
    switch (u) {
        case o.PT.SMALL:
            t = (0, r.jsx)(a.oil, d({}, T));
            break;
        case o.PT.PARAGRAPH:
            t = (0, r.jsx)(a.Kx8, d({ autosize: !0 }, T));
    }
    return null != f
        ? (0, r.jsx)(a.xJW, {
              title: f,
              required: m,
              className: c.formItem,
              error: v,
              children: t,
          })
        : t;
}
