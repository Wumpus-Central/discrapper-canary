(n.d(t, { Z: () => O }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    s = n(988980),
    c = n(835473),
    u = n(871499),
    d = n(510839),
    p = n(214143),
    h = n(610278),
    f = n(408491),
    g = n(981631),
    m = n(918559),
    b = n(388032),
    _ = n(574682);
let E = {
    [m.MI.NO_CHAT]: _.noChat,
    [m.MI.RESIZABLE]: _.resizable
};
function O(e) {
    let { frame: t } = e,
        n = (0, c.q)(t.applicationId),
        l = i.useRef(null),
        O = i.useRef(null),
        [y, I] = i.useState({
            width: 0,
            height: 0
        }),
        v = i.useCallback(() => {
            (0, d.eU)({
                applicationId: t.applicationId,
                layoutMode: f.U.PIP
            });
        }, [t.applicationId]),
        C = i.useCallback(() => {
            (0, d.xT)({ applicationId: t.applicationId });
        }, [t.applicationId]);
    (i.useLayoutEffect(() => {
        if (null == O.current) return;
        let e = new ResizeObserver(() => {
            var e, t, n, r;
            I({
                width: null != (n = null == (e = O.current) ? void 0 : e.clientWidth) ? n : 0,
                height: null != (r = null == (t = O.current) ? void 0 : t.clientHeight) ? r : 0
            });
        });
        return (e.observe(O.current), () => e.disconnect());
    }, []),
        i.useEffect(() => {
            let e = (e) => {
                null == l.current ||
                    l.current.contains(e.target) ||
                    (0, d.eU)({
                        applicationId: t.applicationId,
                        layoutMode: f.U.PIP
                    });
            };
            return (
                document.addEventListener('mousedown', e),
                () => {
                    document.removeEventListener('mousedown', e);
                }
            );
        }, [t.applicationId]));
    let S = y.width / Math.max(y.height, 1) < m.I0,
        N = 0,
        T = 0,
        P = (0, s.Z)(null == n ? void 0 : n.id);
    if (!P) {
        let e = y.width,
            t = y.height;
        S ? ((t = y.width / m.I0) > y.height && (e = (t = y.height) * m.I0), (T = (y.height - t) / 2)) : ((e = Math.min(y.height * m.I0)) > y.width && (t = (e = y.width) / m.I0), (N = (y.width - e) / 2));
    }
    let j = m.MI.NO_CHAT;
    if (null == n) return null;
    let A = (0, h.ro)(t);
    return (0, r.jsx)(o.f6W, {
        theme: g.BRd.DARK,
        children: (e) =>
            (0, r.jsxs)('div', {
                className: a()(_.wrapper, E[j], e),
                ref: l,
                style: {},
                children: [
                    (0, r.jsx)('div', {
                        className: _.contextlessHeader,
                        children: (0, r.jsxs)('div', {
                            className: _.buttonSection,
                            children: [
                                (0, r.jsx)(u.d, {
                                    isTrayButton: !0,
                                    label: b.intl.string(b.t.brPQ5e),
                                    onClick: v,
                                    iconComponent: o.dOc,
                                    themeable: !0
                                }),
                                (0, r.jsx)(u.d, {
                                    isTrayButton: !0,
                                    label: b.intl.string(b.t.cpT0Cg),
                                    onClick: C,
                                    iconComponent: o.Dio,
                                    themeable: !0
                                })
                            ]
                        })
                    }),
                    (0, r.jsx)('div', {
                        className: _.activityPanelContainer,
                        children: (0, r.jsx)('div', {
                            className: a()(_.activityContainer, { [_.activityContainerNoMargin]: P }),
                            style: {
                                paddingLeft: N,
                                paddingRight: N,
                                paddingTop: T,
                                paddingBottom: T
                            },
                            ref: O,
                            children: (0, r.jsx)(p.Z, {
                                className: _.iframe,
                                embedId: A
                            })
                        })
                    })
                ]
            })
    });
}
