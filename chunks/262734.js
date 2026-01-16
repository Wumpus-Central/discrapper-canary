n.d(t, { Z: () => w }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(692547),
    c = n(755721),
    u = n(481060),
    d = n(350810),
    p = n(566620),
    f = n(988980),
    g = n(617552),
    h = n(225639),
    m = n(367907),
    b = n(835473),
    _ = n(358221),
    E = n(740492),
    O = n(871499),
    v = n(786915),
    I = n(800965),
    y = n(944486),
    C = n(48131),
    S = n(214143),
    T = n(610278),
    N = n(408491),
    j = n(981631),
    x = n(918559),
    P = n(388032),
    A = n(2266);
let Z = {
    [x.MI.NO_CHAT]: A.noChat,
    [x.MI.RESIZABLE]: A.resizable,
};
function w(e) {
    let { frame: t } = e,
        n = (0, b.q)(t.applicationId),
        l = (0, d.Z)(),
        { selectedChannelId: w, selectedVoiceChannelId: L } = (0, o.cj)([y.Z], () => ({
            selectedChannelId: y.Z.getChannelId(),
            selectedVoiceChannelId: y.Z.getVoiceChannelId(),
        })),
        R = (0, o.e7)([_.Z], () => null != L && w === L && _.Z.getChatOpen(L), [w, L]),
        D = (0, o.e7)([E.ZP], () => E.ZP.callChatSidebarWidth),
        M = (0, u.dQu)(s.Z.modules.chat.RESIZE_HANDLE_WIDTH),
        k = i.useRef(null),
        U = i.useRef(null),
        [G, H] = i.useState({
            width: 0,
            height: 0,
        }),
        B = i.useCallback(() => {
            C.Z.updateFrameLayoutMode({
                applicationId: t.applicationId,
                layoutMode: N.U.PIP,
            });
        }, [t.applicationId]),
        V = i.useCallback(() => {
            C.Z.stopFrame({ applicationId: t.applicationId });
        }, [t.applicationId]);
    i.useLayoutEffect(() => {
        if (null == U.current) return;
        let e = new ResizeObserver(() => {
            var e, t, n, r;
            H({
                width: null != (n = null == (e = U.current) ? void 0 : e.clientWidth) ? n : 0,
                height: null != (r = null == (t = U.current) ? void 0 : t.clientHeight) ? r : 0,
            });
        });
        return e.observe(U.current), () => e.disconnect();
    }, []),
        i.useEffect(() => {
            let e = (e) => {
                null == k.current ||
                    k.current.contains(e.target) ||
                    l ||
                    C.Z.updateFrameLayoutMode({
                        applicationId: t.applicationId,
                        layoutMode: N.U.PIP,
                    });
            };
            return (
                document.addEventListener("mousedown", e),
                () => {
                    document.removeEventListener("mousedown", e);
                }
            );
        }, [t.applicationId, l]);
    let F = G.width / Math.max(G.height, 1) < x.I0,
        z = 0,
        Y = 0,
        W = (0, f.Z)(null == n ? void 0 : n.id);
    if (!W) {
        let e = G.width,
            t = G.height;
        F
            ? ((t = G.width / x.I0) > G.height && (e = (t = G.height) * x.I0), (Y = (G.height - t) / 2))
            : ((e = Math.min(G.height * x.I0, G.width)) > G.width && (t = (e = G.width) / x.I0),
              (z = (G.width - e) / 2));
    }
    let K = x.MI.NO_CHAT,
        q = (0, h.y)();
    if (null == n) return null;
    let Q = (null != D ? D : j.$Y6) + M,
        J = (0, T.ro)(t);
    return (0, r.jsx)(u.f6W, {
        theme: j.BRd.DARK,
        children: (e) =>
            (0, r.jsxs)("div", {
                className: a()(A.wrapper, Z[K], e),
                ref: k,
                style: { right: R && !Number.isNaN(Q) ? Q : 0 },
                children: [
                    (0, r.jsx)("div", {
                        className: A.activityPanelContainer,
                        children: (0, r.jsx)("div", {
                            className: a()(A.activityContainer, { [A.activityContainerNoMargin]: W }),
                            style: {
                                paddingLeft: z,
                                paddingRight: z,
                                paddingTop: Y,
                                paddingBottom: Y,
                            },
                            ref: U,
                            children: (0, r.jsx)(S.Z, {
                                className: A.iframe,
                                embedId: J,
                            }),
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: A.footer,
                        children: [
                            (0, r.jsx)(v.Z, {
                                appContext: j.IlC.APP,
                                applicationId: n.id,
                                shouldPrioritizeGroupPlusIcon: !0,
                                isRichPresenceInvite: !0,
                                iconClassName: A.inviteButtonIcon,
                                size: c.zx.Sizes.MEDIUM,
                                look: c.zx.Looks.FILLED,
                                buttonText: P.intl.string(P.t["6F9ivu"]),
                                color: c.zx.Colors.TRANSPARENT,
                            }),
                            (0, r.jsxs)("div", {
                                className: A.footerButtons,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: A.buttonSection,
                                        children: (0, r.jsx)(O.d, {
                                            isTrayButton: !0,
                                            label: P.intl.string(P.t.brPQ5U),
                                            onClick: B,
                                            iconComponent: u.dOc,
                                            themeable: !0,
                                        }),
                                    }),
                                    (0, r.jsx)(O.d, {
                                        isTrayButton: !1,
                                        label: P.intl.string(P.t["R/FK4A"]),
                                        onClick: V,
                                        iconComponent: u.PBZ,
                                        color: "disconnect",
                                    }),
                                ],
                            }),
                            q
                                ? (0, r.jsx)(I.Z, {
                                      popoutOpen: !1,
                                      onOpenPopout: () => {
                                          (0, m.yw)(j.rMx.ACTIVITY_POPOUT_POP_OUT_BUTTON_CLICKED),
                                              (0, g.Z)({
                                                  onConfirm: async () => {
                                                      (null == n ? void 0 : n.id) != null &&
                                                          (await C.Z.refreshProxyTicket({ applicationId: n.id })),
                                                          (0, p.Gj)();
                                                  },
                                              });
                                      },
                                      onClosePopout: () => {},
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
    });
}
