n.d(t, { Z: () => f }), n(388685);
var r = n(255367),
    l = n(73800),
    i = n(268146),
    s = n(922770),
    o = n(481060),
    a = n(855403),
    c = n(59468),
    d = n(615161),
    u = n(134933);
function f(e) {
    let { hideBackButton: t = !1 } = e,
        [{ selectedSource: n }, f] = (0, d.E_)(),
        [m, h] = l.useState(null);
    return (
        l.useEffect(() => {
            var e;
            if (null != n) {
                if (null == (e = n.id) ? void 0 : e.startsWith(i.vA.CAMERA)) {
                    'url' in n && h(n.url);
                    return;
                }
                (0, c.t)({
                    width: 800,
                    height: 451,
                    types: [i.vA.SCREEN, i.vA.WINDOW]
                }).then((e) => {
                    var t;
                    let { screenSources: r, windowSources: l } = e,
                        i = null != (t = l.find((e) => ('windowHandle' in n ? (0, a.Z)(e.id, n.windowHandle) : e.id === n.id))) ? t : r.find((e) => n.id === e.id);
                    null != i && h(i.url);
                });
            }
        }, [n]),
        (0, r.jsxs)('div', {
            className: u.root,
            children: [
                null == m
                    ? (0, r.jsx)(s.$, {})
                    : (0, r.jsx)('img', {
                          src: m,
                          alt: '',
                          className: u.largePreview
                      }),
                !t &&
                    (0, r.jsx)(o.zxk, {
                        look: o.zxk.Looks.FILLED,
                        color: o.zxk.Colors.CUSTOM,
                        size: o.zxk.Sizes.ICON,
                        onClick: () => {
                            f({
                                type: 'set_selected_source',
                                source: null
                            }),
                                f({
                                    type: 'set_step',
                                    step: 'source_select'
                                });
                        },
                        className: u.backButton,
                        children: (0, r.jsx)(o.j9r, {
                            color: o.TVs.colors.WHITE,
                            size: 'xs'
                        })
                    })
            ]
        })
    );
}
