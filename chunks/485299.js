(n.d(t, { Z: () => m }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(268146),
    s = n(922770),
    o = n(755721),
    a = n(481060),
    c = n(855403),
    d = n(59468),
    u = n(615161),
    f = n(134933);
function m(e) {
    let { hideBackButton: t = !1 } = e,
        [{ selectedSource: n }, m] = (0, u.E_)(),
        [h, p] = i.useState(null);
    return (
        i.useEffect(() => {
            var e;
            if (null != n) {
                if (null == (e = n.id) ? void 0 : e.startsWith(l.vA.CAMERA)) {
                    'url' in n && p(n.url);
                    return;
                }
                (0, d.t)({
                    width: 800,
                    height: 451,
                    types: [l.vA.SCREEN, l.vA.WINDOW]
                }).then((e) => {
                    var t;
                    let { screenSources: r, windowSources: i } = e,
                        l = null != (t = i.find((e) => ('windowHandle' in n ? (0, c.Z)(e.id, n.windowHandle) : e.id === n.id))) ? t : r.find((e) => n.id === e.id);
                    null != l && p(l.url);
                });
            }
        }, [n]),
        (0, r.jsxs)('div', {
            className: f.root,
            children: [
                null == h
                    ? (0, r.jsx)(s.$, {})
                    : (0, r.jsx)('img', {
                          src: h,
                          alt: '',
                          className: f.largePreview
                      }),
                !t &&
                    (0, r.jsx)(o.zx, {
                        look: o.zx.Looks.FILLED,
                        color: o.zx.Colors.CUSTOM,
                        size: o.zx.Sizes.ICON,
                        onClick: () => {
                            (m({
                                type: 'set_selected_source',
                                source: null
                            }),
                                m({
                                    type: 'set_step',
                                    step: 'source_select'
                                }));
                        },
                        className: f.backButton,
                        children: (0, r.jsx)(a.j9r, {
                            color: a.TVs.colors.WHITE,
                            size: 'xs'
                        })
                    })
            ]
        })
    );
}
