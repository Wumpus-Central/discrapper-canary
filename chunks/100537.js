n.d(t, { A: () => M });
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
    p = n(58149),
    g = n(429913),
    E = n(313961),
    I = n(473553),
    f = n(201805),
    C = n(964404),
    T = n(709562),
    N = n(520006),
    S = n(128286),
    x = n(309010),
    v = n(625180),
    y = n(898879),
    b = n(293495),
    O = n(165610),
    L = n(652215),
    R = n(5867),
    P = n(985018),
    j = n(598449);
let D = { [R.E8.NO_CHAT]: j.Oo, [R.E8.RESIZABLE]: j.Ig };
function M(e) {
    let { frame: t } = e,
        n = (0, g.h)(t.applicationId),
        l = (0, u.A)(),
        { selectedChannelId: M, selectedVoiceChannelId: w } = (0, s.cf)([x.A], () => ({
            selectedChannelId: x.A.getChannelId(),
            selectedVoiceChannelId: x.A.getVoiceChannelId(),
        })),
        U = (0, s.bG)([E.A], () => null != w && M === w && E.A.getChatOpen(w), [M, w]),
        G = (0, s.bG)([C.Ay], () => C.Ay.callChatSidebarWidth),
        k = (0, c.rdh)(o.A.modules.chat.RESIZE_HANDLE_WIDTH),
        V = r.useRef(null),
        B = r.useRef(null),
        [H, F] = r.useState({ width: 0, height: 0 }),
        Y = r.useCallback(() => {
            v.A.updateFrameLayoutMode({ applicationId: t.applicationId, layoutMode: O.y.PIP });
        }, [t.applicationId]),
        q = r.useCallback(() => {
            v.A.stopFrame({ applicationId: t.applicationId });
        }, [t.applicationId]);
    r.useLayoutEffect(() => {
        if (null == B.current) return;
        let e = new ResizeObserver(() => {
            F({ width: B.current?.clientWidth ?? 0, height: B.current?.clientHeight ?? 0 });
        });
        return e.observe(B.current), () => e.disconnect();
    }, []),
        r.useEffect(() => {
            let e = (e) => {
                null == V.current ||
                    V.current.contains(e.target) ||
                    l ||
                    v.A.updateFrameLayoutMode({ applicationId: t.applicationId, layoutMode: O.y.PIP });
            };
            return (
                document.addEventListener("mousedown", e),
                () => {
                    document.removeEventListener("mousedown", e);
                }
            );
        }, [t.applicationId, l]);
    let W = H.width / Math.max(H.height, 1) < R.B5,
        K = 0,
        z = 0,
        $ = (0, h.A)(n?.id);
    if (!$) {
        let e = H.width,
            t = H.height;
        W
            ? ((t = H.width / R.B5) > H.height && (e = (t = H.height) * R.B5), (z = (H.height - t) / 2))
            : ((e = Math.min(H.height * R.B5, H.width)) > H.width && (t = (e = H.width) / R.B5),
              (K = (H.width - e) / 2));
    }
    (0, f.ns)(t.applicationId);
    let Q = R.E8.NO_CHAT,
        X = (0, m.G)();
    if (null == n) return null;
    let Z = (G ?? L.da6) + k,
        J = (0, b.YY)(t);
    return (0, i.jsx)(c.NPJ, {
        theme: L.NJ8.DARK,
        children: (e) =>
            (0, i.jsxs)("div", {
                className: a()(j.iE, D[Q], e),
                ref: V,
                style: { right: U && !Number.isNaN(Z) ? Z : 0 },
                children: [
                    (0, i.jsx)(I.A, { applicationId: t.applicationId }),
                    (0, i.jsx)("div", {
                        className: j.lq,
                        children: (0, i.jsx)("div", {
                            className: a()(j.ht, { [j.kK]: $ }),
                            style: { paddingLeft: K, paddingRight: K, paddingTop: z, paddingBottom: z },
                            ref: B,
                            children: (0, i.jsx)(y.A, { className: j.pU, embedId: J }),
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        className: j.qr,
                        children: [
                            (0, i.jsx)(N.A, {
                                appContext: L.BRT.APP,
                                applicationId: n.id,
                                shouldPrioritizeGroupPlusIcon: !0,
                                isRichPresenceInvite: !0,
                                iconClassName: j.NS,
                                size: d.$n.Sizes.MEDIUM,
                                look: d.$n.Looks.FILLED,
                                buttonText: P.intl.string(P.t["6F9ivu"]),
                                color: d.$n.Colors.TRANSPARENT,
                            }),
                            (0, i.jsxs)("div", {
                                className: j.Hq,
                                children: [
                                    (0, i.jsx)("div", {
                                        className: j.qi,
                                        children: (0, i.jsx)(T.l, {
                                            isTrayButton: !0,
                                            label: P.intl.string(P.t.brPQ5U),
                                            onClick: Y,
                                            iconComponent: c.gR,
                                            themeable: !0,
                                        }),
                                    }),
                                    (0, i.jsx)(T.l, {
                                        isTrayButton: !1,
                                        label: P.intl.string(P.t["R/FK4A"]),
                                        onClick: q,
                                        iconComponent: c.oLl,
                                        color: "disconnect",
                                    }),
                                ],
                            }),
                            X
                                ? (0, i.jsx)(S.A, {
                                      popoutOpen: !1,
                                      onOpenPopout: () => {
                                          (0, p.zV)(L.HAw.ACTIVITY_POPOUT_POP_OUT_BUTTON_CLICKED),
                                              (0, _.A)({
                                                  onConfirm: async () => {
                                                      n?.id != null &&
                                                          (await v.A.refreshProxyTicket({ applicationId: n.id })),
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
