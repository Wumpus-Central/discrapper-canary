n.d(t, { Z: () => f }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(268146),
    s = n(755721),
    o = n(481060),
    a = n(855403),
    c = n(59468),
    d = n(615161),
    u = n(157707);
function f(e) {
    let { hideBackButton: t = !1 } = e,
        [{ selectedSource: n }, f] = (0, d.E_)(),
        [p, h] = i.useState(null);
    return (
        i.useEffect(() => {
            var e;
            if (null != n) {
                if (null == (e = n.id) ? void 0 : e.startsWith(l.vA.CAMERA)) {
                    "url" in n && h(n.url);
                    return;
                }
                (0, c.t)({
                    width: 800,
                    height: 451,
                    types: [l.vA.SCREEN, l.vA.WINDOW],
                }).then((e) => {
                    var t;
                    let { screenSources: r, windowSources: i } = e,
                        l =
                            null !=
                            (t = i.find((e) => ("windowHandle" in n ? (0, a.Z)(e.id, n.windowHandle) : e.id === n.id)))
                                ? t
                                : r.find((e) => n.id === e.id);
                    null != l && h(l.url);
                });
            }
        }, [n]),
        (0, r.jsxs)("div", {
            className: u.root,
            children: [
                null == p
                    ? (0, r.jsx)(o.$jN, {})
                    : (0, r.jsx)("img", {
                          src: p,
                          alt: "",
                          className: u.largePreview,
                      }),
                !t &&
                    (0, r.jsx)(s.zx, {
                        look: s.zx.Looks.FILLED,
                        color: s.zx.Colors.CUSTOM,
                        size: s.zx.Sizes.ICON,
                        onClick: () => {
                            f({
                                type: "set_selected_source",
                                source: null,
                            }),
                                f({
                                    type: "set_step",
                                    step: "source_select",
                                });
                        },
                        className: u.backButton,
                        children: (0, r.jsx)(o.j9r, {
                            color: o.TVs.colors.WHITE,
                            size: "xs",
                        }),
                    }),
            ],
        })
    );
}
