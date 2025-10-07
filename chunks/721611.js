n.d(t, { Z: () => f }), n(388685);
var r = n(951288),
    l = n(647438),
    o = n(120356),
    i = n.n(o),
    a = n(137317),
    s = n(481060),
    c = n(59662),
    u = n(910557);
function d(e) {
    var t;
    let { category: n, onClick: l, active: o } = e,
        { useTitle: a, useNavigationTitle: c, key: d } = n,
        f = null == a ? void 0 : a(),
        m = null != (t = null == c ? void 0 : c()) ? t : f;
    return null == m
        ? null
        : (0, r.jsx)(
              s.P3F,
              {
                  onClick: l,
                  tag: "li",
                  className: i()({ [u.active]: o }),
                  children: m,
              },
              d,
          );
}
function f(e) {
    let { categories: t } = e,
        [n, o] = l.useState(t[0].key),
        { setShowNavigationMobile: i, navigateTo: f } = (0, c.t)(),
        [m, b] = (0, s.q_F)(() => ({
            y: 0,
            config: {
                mass: 0.1,
                friction: 20,
                tension: 300,
            },
        }));
    return (
        l.useEffect(() => {
            b({
                y:
                    36 *
                    Math.max(
                        t.findIndex((e) => e.key === n),
                        0,
                    ),
            });
        }, [t, n, b]),
        (0, r.jsxs)("div", {
            className: u.subnav,
            children: [
                (0, r.jsx)("div", {
                    className: u.track,
                    children: (0, r.jsx)(a.animated.div, {
                        className: u.thumb,
                        style: m,
                    }),
                }),
                (0, r.jsx)("ul", {
                    children: t.map((e) =>
                        (0, r.jsx)(
                            d,
                            {
                                onClick: () => {
                                    var t;
                                    o((t = e.key)), i(!1), f(t);
                                },
                                active: e.key === n,
                                category: e,
                            },
                            e.key,
                        ),
                    ),
                }),
            ],
        })
    );
}
