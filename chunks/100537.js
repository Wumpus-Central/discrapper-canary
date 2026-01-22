n.d(t, { A: () => L }), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(311907),
    o = n(827734),
    c = n(421380),
    u = n(397927),
    d = n(942857),
    p = n(795816),
    f = n(216418),
    h = n(47294),
    A = n(16961),
    g = n(58149),
    m = n(429913),
    b = n(313961),
    _ = n(964404),
    E = n(709562),
    O = n(520006),
    y = n(128286),
    I = n(309010),
    v = n(625180),
    S = n(898879),
    C = n(293495),
    N = n(165610),
    T = n(652215),
    j = n(5867),
    x = n(985018),
    P = n(598449);
let w = {
    [j.E8.NO_CHAT]: P.Oo,
    [j.E8.RESIZABLE]: P.Ig,
};
function L(e) {
    let { frame: t } = e,
        n = (0, m.h)(t.applicationId),
        l = (0, d.A)(),
        { selectedChannelId: L, selectedVoiceChannelId: R } = (0, s.cf)([I.A], () => ({
            selectedChannelId: I.A.getChannelId(),
            selectedVoiceChannelId: I.A.getVoiceChannelId(),
        })),
        D = (0, s.bG)([b.A], () => null != R && L === R && b.A.getChatOpen(R), [L, R]),
        M = (0, s.bG)([_.Ay], () => _.Ay.callChatSidebarWidth),
        k = (0, u.rdh)(o.A.modules.chat.RESIZE_HANDLE_WIDTH),
        U = i.useRef(null),
        G = i.useRef(null),
        [V, B] = i.useState({
            width: 0,
            height: 0,
        }),
        H = i.useCallback(() => {
            v.A.updateFrameLayoutMode({
                applicationId: t.applicationId,
                layoutMode: N.y.PIP,
            });
        }, [t.applicationId]),
        F = i.useCallback(() => {
            v.A.stopFrame({ applicationId: t.applicationId });
        }, [t.applicationId]);
    i.useLayoutEffect(() => {
        if (null == G.current) return;
        let e = new ResizeObserver(() => {
            var e, t, n, r;
            B({
                width: null != (e = null == (n = G.current) ? void 0 : n.clientWidth) ? e : 0,
                height: null != (t = null == (r = G.current) ? void 0 : r.clientHeight) ? t : 0,
            });
        });
        return e.observe(G.current), () => e.disconnect();
    }, []),
        i.useEffect(() => {
            let e = (e) => {
                null == U.current ||
                    U.current.contains(e.target) ||
                    l ||
                    v.A.updateFrameLayoutMode({
                        applicationId: t.applicationId,
                        layoutMode: N.y.PIP,
                    });
            };
            return (
                document.addEventListener("mousedown", e),
                () => {
                    document.removeEventListener("mousedown", e);
                }
            );
        }, [t.applicationId, l]);
    let Y = V.width / Math.max(V.height, 1) < j.B5,
        K = 0,
        z = 0,
        W = (0, f.A)(null == n ? void 0 : n.id);
    if (!W) {
        let e = V.width,
            t = V.height;
        Y
            ? ((t = V.width / j.B5) > V.height && (e = (t = V.height) * j.B5), (z = (V.height - t) / 2))
            : ((e = Math.min(V.height * j.B5, V.width)) > V.width && (t = (e = V.width) / j.B5),
              (K = (V.width - e) / 2));
    }
    let q = j.E8.NO_CHAT,
        Q = (0, A.G)();
    if (null == n) return null;
    let X = (null != M ? M : T.da6) + k,
        Z = (0, C.YY)(t);
    return (0, r.jsx)(u.NPJ, {
        theme: T.NJ8.DARK,
        children: (e) =>
            (0, r.jsxs)("div", {
                className: a()(P.iE, w[q], e),
                ref: U,
                style: { right: D && !Number.isNaN(X) ? X : 0 },
                children: [
                    (0, r.jsx)("div", {
                        className: P.lq,
                        children: (0, r.jsx)("div", {
                            className: a()(P.ht, { [P.kK]: W }),
                            style: {
                                paddingLeft: K,
                                paddingRight: K,
                                paddingTop: z,
                                paddingBottom: z,
                            },
                            ref: G,
                            children: (0, r.jsx)(S.A, {
                                className: P.pU,
                                embedId: Z,
                            }),
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: P.qr,
                        children: [
                            (0, r.jsx)(O.A, {
                                appContext: T.BRT.APP,
                                applicationId: n.id,
                                shouldPrioritizeGroupPlusIcon: !0,
                                isRichPresenceInvite: !0,
                                iconClassName: P.NS,
                                size: c.$n.Sizes.MEDIUM,
                                look: c.$n.Looks.FILLED,
                                buttonText: x.intl.string(x.t["6F9ivu"]),
                                color: c.$n.Colors.TRANSPARENT,
                            }),
                            (0, r.jsxs)("div", {
                                className: P.Hq,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: P.qi,
                                        children: (0, r.jsx)(E.l, {
                                            isTrayButton: !0,
                                            label: x.intl.string(x.t.brPQ5U),
                                            onClick: H,
                                            iconComponent: u.gR,
                                            themeable: !0,
                                        }),
                                    }),
                                    (0, r.jsx)(E.l, {
                                        isTrayButton: !1,
                                        label: x.intl.string(x.t["R/FK4A"]),
                                        onClick: F,
                                        iconComponent: u.oLl,
                                        color: "disconnect",
                                    }),
                                ],
                            }),
                            Q
                                ? (0, r.jsx)(y.A, {
                                      popoutOpen: !1,
                                      onOpenPopout: () => {
                                          (0, g.zV)(T.HAw.ACTIVITY_POPOUT_POP_OUT_BUTTON_CLICKED),
                                              (0, h.A)({
                                                  onConfirm: async () => {
                                                      (null == n ? void 0 : n.id) != null &&
                                                          (await v.A.refreshProxyTicket({ applicationId: n.id })),
                                                          (0, p.jp)();
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
