n.d(t, { Z: () => P }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(692547),
    c = n(755721),
    u = n(481060),
    d = n(350810),
    p = n(988980),
    f = n(835473),
    h = n(358221),
    g = n(740492),
    m = n(871499),
    b = n(786915),
    _ = n(944486),
    O = n(510839),
    E = n(214143),
    y = n(610278),
    v = n(408491),
    I = n(981631),
    C = n(918559),
    S = n(388032),
    N = n(909357);
let T = {
    [C.MI.NO_CHAT]: N.noChat,
    [C.MI.RESIZABLE]: N.resizable,
};
function P(e) {
    let { frame: t } = e,
        n = (0, f.q)(t.applicationId),
        l = (0, d.Z)(),
        P = (0, o.e7)([_.Z], () => _.Z.getVoiceChannelId()),
        j = (0, o.e7)([h.Z], () => null != P && h.Z.getChatOpen(P), [P]),
        x = (0, o.e7)([g.ZP], () => g.ZP.callChatSidebarWidth),
        A = (0, u.dQu)(s.Z.modules.chat.RESIZE_HANDLE_WIDTH),
        Z = i.useRef(null),
        w = i.useRef(null),
        [L, R] = i.useState({
            width: 0,
            height: 0,
        }),
        D = i.useCallback(() => {
            (0, O.eU)({
                applicationId: t.applicationId,
                layoutMode: v.U.PIP,
            });
        }, [t.applicationId]),
        k = i.useCallback(() => {
            (0, O.xT)({ applicationId: t.applicationId });
        }, [t.applicationId]);
    i.useLayoutEffect(() => {
        if (null == w.current) return;
        let e = new ResizeObserver(() => {
            var e, t, n, r;
            R({
                width: null != (n = null == (e = w.current) ? void 0 : e.clientWidth) ? n : 0,
                height: null != (r = null == (t = w.current) ? void 0 : t.clientHeight) ? r : 0,
            });
        });
        return e.observe(w.current), () => e.disconnect();
    }, []),
        i.useEffect(() => {
            let e = (e) => {
                null == Z.current ||
                    Z.current.contains(e.target) ||
                    l ||
                    (0, O.eU)({
                        applicationId: t.applicationId,
                        layoutMode: v.U.PIP,
                    });
            };
            return (
                document.addEventListener("mousedown", e),
                () => {
                    document.removeEventListener("mousedown", e);
                }
            );
        }, [t.applicationId, l]);
    let M = L.width / Math.max(L.height, 1) < C.I0,
        U = 0,
        G = 0,
        B = (0, p.Z)(null == n ? void 0 : n.id);
    if (!B) {
        let e = L.width,
            t = L.height;
        M
            ? ((t = L.width / C.I0) > L.height && (e = (t = L.height) * C.I0), (G = (L.height - t) / 2))
            : ((e = Math.min(L.height * C.I0)) > L.width && (t = (e = L.width) / C.I0), (U = (L.width - e) / 2));
    }
    let V = C.MI.NO_CHAT;
    if (null == n) return null;
    let H = (null != x ? x : I.$Y6) + A,
        F = (0, y.ro)(t);
    return (0, r.jsx)(u.f6W, {
        theme: I.BRd.DARK,
        children: (e) =>
            (0, r.jsxs)("div", {
                className: a()(N.wrapper, T[V], e),
                ref: Z,
                style: { right: j && !Number.isNaN(H) ? H : 0 },
                children: [
                    (0, r.jsx)("div", {
                        className: N.contextlessHeader,
                        children: (0, r.jsxs)("div", {
                            className: N.buttonSection,
                            children: [
                                (0, r.jsx)(m.d, {
                                    isTrayButton: !0,
                                    label: S.intl.string(S.t.brPQ5e),
                                    onClick: D,
                                    iconComponent: u.dOc,
                                    themeable: !0,
                                }),
                                (0, r.jsx)(b.Z, {
                                    appContext: I.IlC.APP,
                                    applicationId: n.id,
                                    shouldPrioritizeGroupPlusIcon: !0,
                                    iconClassName: N.contextlessInviteButtonIcon,
                                    isRichPresenceInvite: !0,
                                    size: c.zx.Sizes.SMALL,
                                    look: c.zx.Looks.FILLED,
                                    buttonText: S.intl.string(S.t["6F9ivr"]),
                                    color: c.zx.Colors.PRIMARY,
                                }),
                                (0, r.jsx)(m.d, {
                                    isTrayButton: !0,
                                    label: S.intl.string(S.t.cpT0Cg),
                                    onClick: k,
                                    iconComponent: u.Dio,
                                    themeable: !0,
                                }),
                            ],
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: N.activityPanelContainer,
                        children: (0, r.jsx)("div", {
                            className: a()(N.activityContainer, { [N.activityContainerNoMargin]: B }),
                            style: {
                                paddingLeft: U,
                                paddingRight: U,
                                paddingTop: G,
                                paddingBottom: G,
                            },
                            ref: w,
                            children: (0, r.jsx)(E.Z, {
                                className: N.iframe,
                                embedId: F,
                            }),
                        }),
                    }),
                ],
            }),
    });
}
