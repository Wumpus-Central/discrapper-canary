(n.d(t, { Z: () => I }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(755721),
    s = n(481060),
    c = n(350810),
    u = n(988980),
    d = n(835473),
    p = n(871499),
    h = n(786915),
    f = n(510839),
    g = n(214143),
    m = n(610278),
    b = n(408491),
    _ = n(981631),
    O = n(918559),
    E = n(388032),
    y = n(574682);
let v = {
    [O.MI.NO_CHAT]: y.noChat,
    [O.MI.RESIZABLE]: y.resizable
};
function I(e) {
    let { frame: t } = e,
        n = (0, d.q)(t.applicationId),
        l = (0, c.Z)(),
        I = i.useRef(null),
        C = i.useRef(null),
        [S, N] = i.useState({
            width: 0,
            height: 0
        }),
        T = i.useCallback(() => {
            (0, f.eU)({
                applicationId: t.applicationId,
                layoutMode: b.U.PIP
            });
        }, [t.applicationId]),
        P = i.useCallback(() => {
            (0, f.xT)({ applicationId: t.applicationId });
        }, [t.applicationId]);
    (i.useLayoutEffect(() => {
        if (null == C.current) return;
        let e = new ResizeObserver(() => {
            var e, t, n, r;
            N({
                width: null != (n = null == (e = C.current) ? void 0 : e.clientWidth) ? n : 0,
                height: null != (r = null == (t = C.current) ? void 0 : t.clientHeight) ? r : 0
            });
        });
        return (e.observe(C.current), () => e.disconnect());
    }, []),
        i.useEffect(() => {
            let e = (e) => {
                null == I.current ||
                    I.current.contains(e.target) ||
                    l ||
                    (0, f.eU)({
                        applicationId: t.applicationId,
                        layoutMode: b.U.PIP
                    });
            };
            return (
                document.addEventListener('mousedown', e),
                () => {
                    document.removeEventListener('mousedown', e);
                }
            );
        }, [t.applicationId, l]));
    let j = S.width / Math.max(S.height, 1) < O.I0,
        A = 0,
        x = 0,
        Z = (0, u.Z)(null == n ? void 0 : n.id);
    if (!Z) {
        let e = S.width,
            t = S.height;
        j ? ((t = S.width / O.I0) > S.height && (e = (t = S.height) * O.I0), (x = (S.height - t) / 2)) : ((e = Math.min(S.height * O.I0)) > S.width && (t = (e = S.width) / O.I0), (A = (S.width - e) / 2));
    }
    let w = O.MI.NO_CHAT;
    if (null == n) return null;
    let L = (0, m.ro)(t);
    return (0, r.jsx)(s.f6W, {
        theme: _.BRd.DARK,
        children: (e) =>
            (0, r.jsxs)('div', {
                className: a()(y.wrapper, v[w], e),
                ref: I,
                style: {},
                children: [
                    (0, r.jsx)('div', {
                        className: y.contextlessHeader,
                        children: (0, r.jsxs)('div', {
                            className: y.buttonSection,
                            children: [
                                (0, r.jsx)(p.d, {
                                    isTrayButton: !0,
                                    label: E.intl.string(E.t.brPQ5e),
                                    onClick: T,
                                    iconComponent: s.dOc,
                                    themeable: !0
                                }),
                                (0, r.jsx)(h.Z, {
                                    appContext: _.IlC.APP,
                                    applicationId: n.id,
                                    shouldPrioritizeGroupPlusIcon: !0,
                                    iconClassName: y.contextlessInviteButtonIcon,
                                    isRichPresenceInvite: !0,
                                    size: o.zx.Sizes.SMALL,
                                    look: o.zx.Looks.FILLED,
                                    buttonText: E.intl.string(E.t['6F9ivr']),
                                    color: o.zx.Colors.PRIMARY
                                }),
                                (0, r.jsx)(p.d, {
                                    isTrayButton: !0,
                                    label: E.intl.string(E.t.cpT0Cg),
                                    onClick: P,
                                    iconComponent: s.Dio,
                                    themeable: !0
                                })
                            ]
                        })
                    }),
                    (0, r.jsx)('div', {
                        className: y.activityPanelContainer,
                        children: (0, r.jsx)('div', {
                            className: a()(y.activityContainer, { [y.activityContainerNoMargin]: Z }),
                            style: {
                                paddingLeft: A,
                                paddingRight: A,
                                paddingTop: x,
                                paddingBottom: x
                            },
                            ref: C,
                            children: (0, r.jsx)(g.Z, {
                                className: y.iframe,
                                embedId: L
                            })
                        })
                    })
                ]
            })
    });
}
