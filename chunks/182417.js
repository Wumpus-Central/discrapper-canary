n.d(t, {
    Aq: () => _,
    Ay: () => h,
    pt: () => p,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(432022),
    l = n(615300),
    c = n(397927),
    u = n(475743),
    d = n(532294),
    f = n(415813);
let p = {
        duration: 800,
        easing: l.A.Easing.bezier(0.4, 0, 0, 1),
    },
    _ = i.createContext(null);
function h(e) {
    let { activeSlide: t, children: n, className: a, slideClassName: l } = e,
        h = (0, u.A)(t),
        m = i.useMemo(() => {
            let e = {};
            return (
                i.Children.forEach(n, (t) => {
                    e[t.props.id] = t.props.children;
                }),
                e
            );
        }, [...n]),
        g = t === d.P7.WELCOME && (null == h || h === d.P7.WELCOME),
        E = (0, c.pnh)(t, {
            from: g
                ? {
                      transform: "translate3d(0, 0px, 0)",
                      opacity: 1,
                      backgroundScale: 1,
                      backgroundY: 0,
                  }
                : {
                      transform: "translate3d(0, 200px, 0)",
                      opacity: -1,
                      backgroundScale: 0.5,
                      backgroundY: 0,
                  },
            enter: {
                transform: "translate3d(0, 0px, 0)",
                opacity: 1,
                backgroundScale: 1,
                backgroundY: 0,
            },
            leave: {
                transform: "translate3d(0, -400px, 0)",
                opacity: -1,
                backgroundScale: 1,
                backgroundY: -400,
            },
            config: p,
        });
    return (0, r.jsx)(_.Provider, {
        value: E,
        children: (0, r.jsx)("div", {
            className: a,
            children: E((e, t, n) => {
                let { key: i } = n;
                return (0, r.jsx)(
                    o.animated.div,
                    {
                        className: s()(f.M, l),
                        style: e,
                        children: m[t],
                    },
                    i,
                );
            }),
        }),
    });
}
