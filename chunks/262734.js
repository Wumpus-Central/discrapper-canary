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
    O = n(48131),
    E = n(214143),
    y = n(610278),
    v = n(408491),
    I = n(981631),
    C = n(918559),
    S = n(388032),
    T = n(909357);
let N = {
    [C.MI.NO_CHAT]: T.noChat,
    [C.MI.RESIZABLE]: T.resizable,
};
function P(e) {
    let { frame: t } = e,
        n = (0, f.q)(t.applicationId),
        l = (0, d.Z)(),
        { selectedChannelId: P, selectedVoiceChannelId: j } = (0, o.cj)([_.Z], () => ({
            selectedChannelId: _.Z.getChannelId(),
            selectedVoiceChannelId: _.Z.getVoiceChannelId(),
        })),
        x = (0, o.e7)([h.Z], () => null != j && P === j && h.Z.getChatOpen(j), [P, j]),
        A = (0, o.e7)([g.ZP], () => g.ZP.callChatSidebarWidth),
        Z = (0, u.dQu)(s.Z.modules.chat.RESIZE_HANDLE_WIDTH),
        w = i.useRef(null),
        L = i.useRef(null),
        [R, D] = i.useState({
            width: 0,
            height: 0,
        }),
        k = i.useCallback(() => {
            O.Z.updateFrameLayoutMode({
                applicationId: t.applicationId,
                layoutMode: v.U.PIP,
            });
        }, [t.applicationId]),
        M = i.useCallback(() => {
            O.Z.stopFrame({ applicationId: t.applicationId });
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
                    O.Z.updateFrameLayoutMode({
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
    let U = R.width / Math.max(R.height, 1) < C.I0,
        G = 0,
        B = 0,
        V = (0, p.Z)(null == n ? void 0 : n.id);
    if (!V) {
        let e = R.width,
            t = R.height;
        U
            ? ((t = R.width / C.I0) > R.height && (e = (t = R.height) * C.I0), (B = (R.height - t) / 2))
            : ((e = Math.min(R.height * C.I0)) > R.width && (t = (e = R.width) / C.I0), (G = (R.width - e) / 2));
    }
    let H = C.MI.NO_CHAT;
    if (null == n) return null;
    let F = (null != A ? A : I.$Y6) + Z,
        z = (0, y.ro)(t);
    return (0, r.jsx)(u.f6W, {
        theme: I.BRd.DARK,
        children: (e) =>
            (0, r.jsxs)("div", {
                className: a()(T.wrapper, N[H], e),
                ref: w,
                style: { right: x && !Number.isNaN(F) ? F : 0 },
                children: [
                    (0, r.jsx)("div", {
                        className: T.activityPanelContainer,
                        children: (0, r.jsx)("div", {
                            className: a()(T.activityContainer, { [T.activityContainerNoMargin]: V }),
                            style: {
                                paddingLeft: G,
                                paddingRight: G,
                                paddingTop: B,
                                paddingBottom: B,
                            },
                            ref: L,
                            children: (0, r.jsx)(E.Z, {
                                className: T.iframe,
                                embedId: z,
                            }),
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: T.footer,
                        children: [
                            (0, r.jsx)(b.Z, {
                                appContext: I.IlC.APP,
                                applicationId: n.id,
                                shouldPrioritizeGroupPlusIcon: !0,
                                isRichPresenceInvite: !0,
                                iconClassName: T.inviteButtonIcon,
                                size: c.zx.Sizes.MEDIUM,
                                look: c.zx.Looks.FILLED,
                                buttonText: S.intl.string(S.t["6F9ivr"]),
                                color: c.zx.Colors.TRANSPARENT,
                            }),
                            (0, r.jsxs)("div", {
                                className: T.footerButtons,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: T.buttonSection,
                                        children: (0, r.jsx)(m.d, {
                                            isTrayButton: !0,
                                            label: S.intl.string(S.t.brPQ5e),
                                            onClick: k,
                                            iconComponent: u.dOc,
                                            themeable: !0,
                                        }),
                                    }),
                                    (0, r.jsx)(m.d, {
                                        isTrayButton: !1,
                                        label: S.intl.string(S.t["R/FK4O"]),
                                        onClick: M,
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
