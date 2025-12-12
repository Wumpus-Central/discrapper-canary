n.d(t, { Z: () => f }), n(388685);
var r = n(54381),
    i = n(473749),
    o = n(481060),
    a = n(911969),
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
        { type: n, style: u, label: f, placeholder: p, minLength: _, maxLength: m, required: h, value: g } = e,
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
        S = (0, l.hz)(e.id);
    i.useEffect(() => {
        (null == y ? void 0 : y.type) === n && b(y.value);
    }, [n, y]);
    let I = {
        value: E,
        placeholder: p,
        minLength: _,
        maxLength: m,
        required: h,
        onChange: (e) => {
            b(e),
                O({
                    type: n,
                    value: e,
                });
        },
        autoFocus: S,
    };
    switch (u) {
        case a.PT.SMALL:
            t = (0, r.jsx)(o.oil, d({}, I));
            break;
        case a.PT.PARAGRAPH:
            t = (0, r.jsx)(o.Kx8, d({ autosize: !0 }, I));
    }
    return null != f
        ? (0, r.jsx)(o.xJW, {
              title: f,
              required: h,
              className: c.formItem,
              error: v,
              children: t,
          })
        : t;
}
