n.d(t, { A: () => j });
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
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
    P = n(598449);
let D = { [L.E8.NO_CHAT]: P.Oo, [L.E8.RESIZABLE]: P.Ig };
function j(e) {
    let { frame: t } = e,
        n = (0, p.h)(t.applicationId),
        l = (0, u.A)(),
        { selectedChannelId: j, selectedVoiceChannelId: M } = (0, s.cf)([S.A], () => ({
            selectedChannelId: S.A.getChannelId(),
            selectedVoiceChannelId: S.A.getVoiceChannelId(),
        })),
        w = (0, s.bG)([E.A], () => null != M && j === M && E.A.getChatOpen(M), [j, M]),
        U = (0, s.bG)([f.Ay], () => f.Ay.callChatSidebarWidth),
        G = (0, c.rdh)(o.A.modules.chat.RESIZE_HANDLE_WIDTH),
        k = r.useRef(null),
        V = r.useRef(null),
        [B, H] = r.useState({ width: 0, height: 0 }),
        F = r.useCallback(() => {
            x.A.updateFrameLayoutMode({ applicationId: t.applicationId, layoutMode: b.y.PIP });
        }, [t.applicationId]),
        Y = r.useCallback(() => {
            x.A.stopFrame({ applicationId: t.applicationId });
        }, [t.applicationId]);
    r.useLayoutEffect(() => {
        if (null == V.current) return;
        let e = new ResizeObserver(() => {
            H({ width: V.current?.clientWidth ?? 0, height: V.current?.clientHeight ?? 0 });
        });
        return e.observe(V.current), () => e.disconnect();
    }, []),
        r.useEffect(() => {
            let e = (e) => {
                null == k.current ||
                    (0, c.HG$)(k.current, e.target) ||
                    l ||
                    x.A.updateFrameLayoutMode({ applicationId: t.applicationId, layoutMode: b.y.PIP });
            };
            return (
                document.addEventListener("mousedown", e),
                () => {
                    document.removeEventListener("mousedown", e);
                }
            );
        }, [t.applicationId, l]);
    let W = B.width / Math.max(B.height, 1) < L.B5,
        q = 0,
        z = 0,
        K = (0, h.A)(n?.id);
    if (!K) {
        let e = B.width,
            t = B.height;
        W
            ? ((t = B.width / L.B5) > B.height && (e = (t = B.height) * L.B5), (z = (B.height - t) / 2))
            : ((e = Math.min(B.height * L.B5, B.width)) > B.width && (t = (e = B.width) / L.B5),
              (q = (B.width - e) / 2));
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
                className: a()(P.iE, D[$], e),
                ref: k,
                style: { right: w && !Number.isNaN(X) ? X : 0 },
                children: [
                    (0, i.jsx)(I.A, { applicationId: t.applicationId }),
                    (0, i.jsx)("div", {
                        className: P.lq,
                        children: (0, i.jsx)("div", {
                            className: a()(P.ht, { [P.kK]: K }),
                            style: { paddingLeft: q, paddingRight: q, paddingTop: z, paddingBottom: z },
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
