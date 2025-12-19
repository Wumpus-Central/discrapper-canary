n.d(t, {
    ZP: () => m,
    sc: () => p,
    xS: () => _,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(620792),
    l = n(748780),
    c = n(481060),
    u = n(110924),
    d = n(612776),
    f = n(903612);
let p = {
        duration: 800,
        easing: l.Z.Easing.bezier(0.4, 0, 0, 1),
    },
    _ = i.createContext(null);
function m(e) {
    let { activeSlide: t, children: n, className: a, slideClassName: l } = e,
        m = (0, u.Z)(t),
        h = i.useMemo(() => {
            let e = {};
            return (
                i.Children.forEach(n, (t) => {
                    e[t.props.id] = t.props.children;
                }),
                e
            );
        }, [...n]),
        g = t === d.yD.WELCOME && (null == m || m === d.yD.WELCOME),
        E = (0, c.Yzy)(t, {
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
                    s.animated.div,
                    {
                        className: o()(f.slide, l),
                        style: e,
                        children: h[t],
                    },
                    i,
                );
            }),
        }),
    });
}
