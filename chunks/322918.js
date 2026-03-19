n.d(t, { A: () => M });
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(311907),
    o = n(827734),
    d = n(421380),
    c = n(397927),
    u = n(942857),
    A = n(795816),
    h = n(216418),
    _ = n(47294),
    m = n(16961),
    g = n(58149),
    p = n(429913),
    E = n(313961),
    I = n(473553),
    f = n(964404),
    C = n(709562),
    T = n(520006),
    N = n(128286),
    S = n(309010),
    x = n(625180),
    v = n(898879),
    y = n(293495),
    b = n(165610),
    O = n(652215),
    L = n(5867),
    R = n(985018),
    P = n(90103);
let D = { [L.E8.NO_CHAT]: P.Oo, [L.E8.RESIZABLE]: P.Ig };
function M(e) {
    let { frame: t } = e,
        n = (0, p.h)(t.applicationId),
        r = (0, u.A)(),
        { selectedChannelId: M, selectedVoiceChannelId: j } = (0, s.cf)([S.A], () => ({
            selectedChannelId: S.A.getChannelId(),
            selectedVoiceChannelId: S.A.getVoiceChannelId(),
        })),
        w = (0, s.bG)([E.A], () => null != j && M === j && E.A.getChatOpen(j), [M, j]),
        U = (0, s.bG)([f.Ay], () => f.Ay.callChatSidebarWidth),
        G = (0, c.rdh)(o.A.modules.chat.RESIZE_HANDLE_WIDTH),
        k = a.useRef(null),
        V = a.useRef(null),
        [B, H] = a.useState({ width: 0, height: 0 }),
        F = a.useCallback(() => {
            x.A.updateFrameLayoutMode({ applicationId: t.applicationId, layoutMode: b.y.PIP });
        }, [t.applicationId]),
        Y = a.useCallback(() => {
            x.A.stopFrame({ applicationId: t.applicationId });
        }, [t.applicationId]);
    a.useLayoutEffect(() => {
        if (null == V.current) return;
        let e = new ResizeObserver(() => {
            H({ width: V.current?.clientWidth ?? 0, height: V.current?.clientHeight ?? 0 });
        });
        return e.observe(V.current), () => e.disconnect();
    }, []),
        a.useEffect(() => {
            let e = (e) => {
                null == k.current ||
                    (0, c.HG$)(k.current, e.target) ||
                    r ||
                    x.A.updateFrameLayoutMode({ applicationId: t.applicationId, layoutMode: b.y.PIP });
            };
            return (
                document.addEventListener("mousedown", e),
                () => {
                    document.removeEventListener("mousedown", e);
                }
            );
        }, [t.applicationId, r]);
    let W = B.width / Math.max(B.height, 1) < L.B5,
        K = 0,
        q = 0,
        z = (0, h.A)(n?.id);
    if (!z) {
        let e = B.width,
            t = B.height;
        W
            ? ((t = B.width / L.B5) > B.height && (e = (t = B.height) * L.B5), (q = (B.height - t) / 2))
            : ((e = Math.min(B.height * L.B5, B.width)) > B.width && (t = (e = B.width) / L.B5),
              (K = (B.width - e) / 2));
    }
    let $ = L.E8.NO_CHAT,
        Q = (0, m.G)();
    if (null == n) return null;
    let X = (U ?? O.da6) + G,
        Z = (0, y.YY)(t);
    return (0, i.jsx)(c.NPJ, {
        theme: O.NJ8.DARK,
        children: (e) =>
            (0, i.jsxs)("div", {
                className: l()(P.iE, D[$], e),
                ref: k,
                style: { right: w && !Number.isNaN(X) ? X : 0 },
                children: [
                    (0, i.jsx)(I.A, { applicationId: t.applicationId }),
                    (0, i.jsx)("div", {
                        className: P.lq,
                        children: (0, i.jsx)("div", {
                            className: l()(P.ht, { [P.kK]: z }),
                            style: { paddingLeft: K, paddingRight: K, paddingTop: q, paddingBottom: q },
                            ref: V,
                            children: (0, i.jsx)(v.A, { className: P.pU, embedId: Z }),
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        className: P.qr,
                        children: [
                            (0, i.jsx)(T.A, {
                                appContext: O.BRT.APP,
                                applicationId: n.id,
                                shouldPrioritizeGroupPlusIcon: !0,
                                isRichPresenceInvite: !0,
                                iconClassName: P.NS,
                                size: d.$n.Sizes.MEDIUM,
                                look: d.$n.Looks.FILLED,
                                buttonText: R.intl.string(R.t["6F9ivu"]),
                                color: d.$n.Colors.TRANSPARENT,
                            }),
                            (0, i.jsxs)("div", {
                                className: P.Hq,
                                children: [
                                    (0, i.jsx)("div", {
                                        className: P.qi,
                                        children: (0, i.jsx)(C.l, {
                                            isTrayButton: !0,
                                            label: R.intl.string(R.t.brPQ5U),
                                            onClick: F,
                                            iconComponent: c.gR,
                                            themeable: !0,
                                        }),
                                    }),
                                    (0, i.jsx)(C.l, {
                                        isTrayButton: !1,
                                        label: R.intl.string(R.t["R/FK4A"]),
                                        onClick: Y,
                                        iconComponent: c.oLl,
                                        color: "disconnect",
                                    }),
                                ],
                            }),
                            Q
                                ? (0, i.jsx)(N.A, {
                                      popoutOpen: !1,
                                      onOpenPopout: () => {
                                          (0, g.zV)(O.HAw.ACTIVITY_POPOUT_POP_OUT_BUTTON_CLICKED),
                                              (0, _.A)({
                                                  onConfirm: async () => {
                                                      n?.id != null &&
                                                          (await x.A.refreshProxyTicket({ applicationId: n.id })),
                                                          (0, A.jp)();
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
