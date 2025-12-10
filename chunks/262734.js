n.d(t, { Z: () => j }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(692547),
    c = n(755721),
    u = n(481060),
    d = n(350810),
    p = n(988980),
    f = n(835473),
    g = n(358221),
    h = n(740492),
    m = n(871499),
    _ = n(786915),
    b = n(944486),
    E = n(48131),
    O = n(214143),
    v = n(610278),
    y = n(408491),
    I = n(981631),
    C = n(918559),
    S = n(388032),
    T = n(909357);
let N = {
    [C.MI.NO_CHAT]: T.noChat,
    [C.MI.RESIZABLE]: T.resizable,
};
function j(e) {
    let { frame: t } = e,
        n = (0, f.q)(t.applicationId),
        l = (0, d.Z)(),
        { selectedChannelId: j, selectedVoiceChannelId: P } = (0, s.cj)([b.Z], () => ({
            selectedChannelId: b.Z.getChannelId(),
            selectedVoiceChannelId: b.Z.getVoiceChannelId(),
        })),
        x = (0, s.e7)([g.Z], () => null != P && j === P && g.Z.getChatOpen(P), [j, P]),
        A = (0, s.e7)([h.ZP], () => h.ZP.callChatSidebarWidth),
        Z = (0, u.dQu)(o.Z.modules.chat.RESIZE_HANDLE_WIDTH),
        w = i.useRef(null),
        L = i.useRef(null),
        [R, D] = i.useState({
            width: 0,
            height: 0,
        }),
        M = i.useCallback(() => {
            E.Z.updateFrameLayoutMode({
                applicationId: t.applicationId,
                layoutMode: y.U.PIP,
            });
        }, [t.applicationId]),
        k = i.useCallback(() => {
            E.Z.stopFrame({ applicationId: t.applicationId });
        }, [t.applicationId]);
    i.useLayoutEffect(() => {
        if (null == L.current) return;
        let e = new ResizeObserver(() => {
            var e, t, n, r;
            D({
                width: null != (n = null == (e = L.current) ? void 0 : e.clientWidth) ? n : 0,
                height: null != (r = null == (t = L.current) ? void 0 : t.clientHeight) ? r : 0,
            });
        });
        return e.observe(L.current), () => e.disconnect();
    }, []),
        i.useEffect(() => {
            let e = (e) => {
                null == w.current ||
                    w.current.contains(e.target) ||
                    l ||
                    E.Z.updateFrameLayoutMode({
                        applicationId: t.applicationId,
                        layoutMode: y.U.PIP,
                    });
            };
            return (
                document.addEventListener("mousedown", e),
                () => {
                    document.removeEventListener("mousedown", e);
                }
            );
        }, [t.applicationId, l]);
    let U = R.width / Math.max(R.height, 1) < C.I0,
        G = 0,
        B = 0,
        H = (0, p.Z)(null == n ? void 0 : n.id);
    if (!H) {
        let e = R.width,
            t = R.height;
        U
            ? ((t = R.width / C.I0) > R.height && (e = (t = R.height) * C.I0), (B = (R.height - t) / 2))
            : ((e = Math.min(R.height * C.I0)) > R.width && (t = (e = R.width) / C.I0), (G = (R.width - e) / 2));
    }
    let V = C.MI.NO_CHAT;
    if (null == n) return null;
    let F = (null != A ? A : I.$Y6) + Z,
        z = (0, v.ro)(t);
    return (0, r.jsx)(u.f6W, {
        theme: I.BRd.DARK,
        children: (e) =>
            (0, r.jsxs)("div", {
                className: a()(T.wrapper, N[V], e),
                ref: w,
                style: { right: x && !Number.isNaN(F) ? F : 0 },
                children: [
                    (0, r.jsx)("div", {
                        className: T.activityPanelContainer,
                        children: (0, r.jsx)("div", {
                            className: a()(T.activityContainer, { [T.activityContainerNoMargin]: H }),
                            style: {
                                paddingLeft: G,
                                paddingRight: G,
                                paddingTop: B,
                                paddingBottom: B,
                            },
                            ref: L,
                            children: (0, r.jsx)(O.Z, {
                                className: T.iframe,
                                embedId: z,
                            }),
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: T.footer,
                        children: [
                            (0, r.jsx)(_.Z, {
                                appContext: I.IlC.APP,
                                applicationId: n.id,
                                shouldPrioritizeGroupPlusIcon: !0,
                                isRichPresenceInvite: !0,
                                iconClassName: T.inviteButtonIcon,
                                size: c.zx.Sizes.MEDIUM,
                                look: c.zx.Looks.FILLED,
                                buttonText: S.intl.string(S.t["6F9ivu"]),
                                color: c.zx.Colors.TRANSPARENT,
                            }),
                            (0, r.jsxs)("div", {
                                className: T.footerButtons,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: T.buttonSection,
                                        children: (0, r.jsx)(m.d, {
                                            isTrayButton: !0,
                                            label: S.intl.string(S.t.brPQ5U),
                                            onClick: M,
                                            iconComponent: u.dOc,
                                            themeable: !0,
                                        }),
                                    }),
                                    (0, r.jsx)(m.d, {
                                        isTrayButton: !1,
                                        label: S.intl.string(S.t["R/FK4A"]),
                                        onClick: k,
                                        iconComponent: u.PBZ,
                                        color: "disconnect",
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
    });
}
