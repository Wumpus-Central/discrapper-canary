(n.d(t, { Z: () => y }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    s = n(350810),
    c = n(988980),
    u = n(835473),
    d = n(871499),
    p = n(510839),
    h = n(214143),
    f = n(610278),
    g = n(408491),
    m = n(981631),
    b = n(918559),
    _ = n(388032),
    O = n(574682);
let E = {
    [b.MI.NO_CHAT]: O.noChat,
    [b.MI.RESIZABLE]: O.resizable
};
function y(e) {
    let { frame: t } = e,
        n = (0, u.q)(t.applicationId),
        l = (0, s.Z)(),
        y = i.useRef(null),
        v = i.useRef(null),
        [I, C] = i.useState({
            width: 0,
            height: 0
        }),
        S = i.useCallback(() => {
            (0, p.eU)({
                applicationId: t.applicationId,
                layoutMode: g.U.PIP
            });
        }, [t.applicationId]),
        N = i.useCallback(() => {
            (0, p.xT)({ applicationId: t.applicationId });
        }, [t.applicationId]);
    (i.useLayoutEffect(() => {
        if (null == v.current) return;
        let e = new ResizeObserver(() => {
            var e, t, n, r;
            C({
                width: null != (n = null == (e = v.current) ? void 0 : e.clientWidth) ? n : 0,
                height: null != (r = null == (t = v.current) ? void 0 : t.clientHeight) ? r : 0
            });
        });
        return (e.observe(v.current), () => e.disconnect());
    }, []),
        i.useEffect(() => {
            let e = (e) => {
                null == y.current ||
                    y.current.contains(e.target) ||
                    l ||
                    (0, p.eU)({
                        applicationId: t.applicationId,
                        layoutMode: g.U.PIP
                    });
            };
            return (
                document.addEventListener('mousedown', e),
                () => {
                    document.removeEventListener('mousedown', e);
                }
            );
        }, [t.applicationId, l]));
    let T = I.width / Math.max(I.height, 1) < b.I0,
        P = 0,
        j = 0,
        A = (0, c.Z)(null == n ? void 0 : n.id);
    if (!A) {
        let e = I.width,
            t = I.height;
        T ? ((t = I.width / b.I0) > I.height && (e = (t = I.height) * b.I0), (j = (I.height - t) / 2)) : ((e = Math.min(I.height * b.I0)) > I.width && (t = (e = I.width) / b.I0), (P = (I.width - e) / 2));
    }
    let x = b.MI.NO_CHAT;
    if (null == n) return null;
    let Z = (0, f.ro)(t);
    return (0, r.jsx)(o.f6W, {
        theme: m.BRd.DARK,
        children: (e) =>
            (0, r.jsxs)('div', {
                className: a()(O.wrapper, E[x], e),
                ref: y,
                style: {},
                children: [
                    (0, r.jsx)('div', {
                        className: O.contextlessHeader,
                        children: (0, r.jsxs)('div', {
                            className: O.buttonSection,
                            children: [
                                (0, r.jsx)(d.d, {
                                    isTrayButton: !0,
                                    label: _.intl.string(_.t.brPQ5e),
                                    onClick: S,
                                    iconComponent: o.dOc,
                                    themeable: !0
                                }),
                                (0, r.jsx)(d.d, {
                                    isTrayButton: !0,
                                    label: _.intl.string(_.t.cpT0Cg),
                                    onClick: N,
                                    iconComponent: o.Dio,
                                    themeable: !0
                                })
                            ]
                        })
                    }),
                    (0, r.jsx)('div', {
                        className: O.activityPanelContainer,
                        children: (0, r.jsx)('div', {
                            className: a()(O.activityContainer, { [O.activityContainerNoMargin]: A }),
                            style: {
                                paddingLeft: P,
                                paddingRight: P,
                                paddingTop: j,
                                paddingBottom: j
                            },
                            ref: v,
                            children: (0, r.jsx)(h.Z, {
                                className: O.iframe,
                                embedId: Z
                            })
                        })
                    })
                ]
            })
    });
}
