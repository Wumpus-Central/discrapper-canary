n.d(t, { Z: () => j }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(692547),
    c = n(755721),
    u = n(481060),
    d = n(350810),
    p = n(988980),
    f = n(835473),
    h = n(358221),
    m = n(740492),
    g = n(871499),
    _ = n(786915),
    b = n(944486),
    E = n(48131),
    O = n(214143),
    I = n(610278),
    v = n(408491),
    y = n(981631),
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
        x = (0, s.e7)([h.Z], () => null != P && j === P && h.Z.getChatOpen(P), [j, P]),
        A = (0, s.e7)([m.ZP], () => m.ZP.callChatSidebarWidth),
        Z = (0, u.dQu)(o.Z.modules.chat.RESIZE_HANDLE_WIDTH),
        w = i.useRef(null),
        L = i.useRef(null),
        [D, R] = i.useState({
            width: 0,
            height: 0,
        }),
        M = i.useCallback(() => {
            E.Z.updateFrameLayoutMode({
                applicationId: t.applicationId,
                layoutMode: v.U.PIP,
            });
        }, [t.applicationId]),
        k = i.useCallback(() => {
            E.Z.stopFrame({ applicationId: t.applicationId });
        }, [t.applicationId]);
    i.useLayoutEffect(() => {
        if (null == L.current) return;
        let e = new ResizeObserver(() => {
            var e, t, n, r;
            R({
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
    let U = D.width / Math.max(D.height, 1) < C.I0,
        G = 0,
        B = 0,
        H = (0, p.Z)(null == n ? void 0 : n.id);
    if (!H) {
        let e = D.width,
            t = D.height;
        U
            ? ((t = D.width / C.I0) > D.height && (e = (t = D.height) * C.I0), (B = (D.height - t) / 2))
            : ((e = Math.min(D.height * C.I0)) > D.width && (t = (e = D.width) / C.I0), (G = (D.width - e) / 2));
    }
    let V = C.MI.NO_CHAT;
    if (null == n) return null;
    let F = (null != A ? A : y.$Y6) + Z,
        z = (0, I.ro)(t);
    return (0, r.jsx)(u.f6W, {
        theme: y.BRd.DARK,
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
                                appContext: y.IlC.APP,
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
                                        children: (0, r.jsx)(g.d, {
                                            isTrayButton: !0,
                                            label: S.intl.string(S.t.brPQ5U),
                                            onClick: M,
                                            iconComponent: u.dOc,
                                            themeable: !0,
                                        }),
                                    }),
                                    (0, r.jsx)(g.d, {
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
