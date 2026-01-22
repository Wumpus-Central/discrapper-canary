n.d(t, { A: () => f }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(155718),
    o = n(207963),
    l = n(969508),
    c = n(717820);
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
        { type: n, style: u, label: f, placeholder: p, minLength: _, maxLength: h, required: m, value: g } = e,
        [E, b] = i.useState(null != g ? g : ""),
        {
            state: y,
            executeStateUpdate: O,
            error: A,
        } = (0, o.At)(
            e,
            null != g
                ? {
                      type: n,
                      value: g,
                  }
                : void 0,
        ),
        v = (0, l.FG)(e.id);
    i.useEffect(() => {
        (null == y ? void 0 : y.type) === n && b(y.value);
    }, [n, y]);
    let S = {
        value: E,
        placeholder: p,
        minLength: _,
        maxLength: h,
        required: m,
        onChange: (e) => {
            b(e),
                O({
                    type: n,
                    value: e,
                });
        },
        autoFocus: v,
    };
    switch (u) {
        case s.qz.SMALL:
            t = (0, r.jsx)(a.ksK, d({}, S));
            break;
        case s.qz.PARAGRAPH:
            t = (0, r.jsx)(a.fs1, d({ autosize: !0 }, S));
    }
    return null != f
        ? (0, r.jsx)(a.eIh, {
              title: f,
              required: m,
              className: c.k,
              error: A,
              children: t,
          })
        : t;
}
