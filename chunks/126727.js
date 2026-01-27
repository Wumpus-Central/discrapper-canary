n.d(t, {
    A: () => d,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    a = n(397927),
    i = n(155718),
    s = n(207963),
    o = n(969508),
    c = n(717820);

function u(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function d(e) {
    let t,
        { type: n, style: d, label: m, placeholder: f, minLength: p, maxLength: h, required: b, value: g } = e,
        [x, y] = l.useState(null != g ? g : ""),
        {
            state: v,
            executeStateUpdate: j,
            error: C,
        } = (0, s.At)(
            e,
            null != g
                ? {
                      type: n,
                      value: g,
                  }
                : void 0,
        ),
        _ = (0, o.FG)(e.id);
    l.useEffect(() => {
        (null == v ? void 0 : v.type) === n && y(v.value);
    }, [n, v]);
    let A = {
        value: x,
        placeholder: f,
        minLength: p,
        maxLength: h,
        required: b,
        onChange: (e) => {
            y(e),
                j({
                    type: n,
                    value: e,
                });
        },
        autoFocus: _,
    };
    switch (d) {
        case i.qz.SMALL:
            t = (0, r.jsx)(a.ksK, u({}, A));
            break;
        case i.qz.PARAGRAPH:
            t = (0, r.jsx)(
                a.fs1,
                u(
                    {
                        autosize: !0,
                    },
                    A,
                ),
            );
    }
    return null != m
        ? (0, r.jsx)(a.eIh, {
              title: m,
              required: b,
              className: c.k,
              error: C,
              children: t,
          })
        : t;
}
