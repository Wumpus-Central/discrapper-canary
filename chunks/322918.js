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
    p = n(58149),
    g = n(429913),
    E = n(313961),
    I = n(964404),
    f = n(709562),
    C = n(520006),
    T = n(128286),
    N = n(309010),
    S = n(625180),
    x = n(898879),
    v = n(293495),
    y = n(165610),
    b = n(652215),
    O = n(5867),
    L = n(985018),
    R = n(90103);
let P = { [O.E8.NO_CHAT]: R.Oo, [O.E8.RESIZABLE]: R.Ig };
function j(e) {
    let { frame: t } = e,
        n = (0, g.h)(t.applicationId),
        l = (0, u.A)(),
        { selectedChannelId: j, selectedVoiceChannelId: D } = (0, s.cf)([N.A], () => ({
            selectedChannelId: N.A.getChannelId(),
            selectedVoiceChannelId: N.A.getVoiceChannelId(),
        })),
        M = (0, s.bG)([E.A], () => null != D && j === D && E.A.getChatOpen(D), [j, D]),
        w = (0, s.bG)([I.Ay], () => I.Ay.callChatSidebarWidth),
        U = (0, c.rdh)(o.A.modules.chat.RESIZE_HANDLE_WIDTH),
        G = r.useRef(null),
        k = r.useRef(null),
        [V, B] = r.useState({ width: 0, height: 0 }),
        H = r.useCallback(() => {
            S.A.updateFrameLayoutMode({ applicationId: t.applicationId, layoutMode: y.y.PIP });
        }, [t.applicationId]),
        F = r.useCallback(() => {
            S.A.stopFrame({ applicationId: t.applicationId });
        }, [t.applicationId]);
    r.useLayoutEffect(() => {
        if (null == k.current) return;
        let e = new ResizeObserver(() => {
            B({ width: k.current?.clientWidth ?? 0, height: k.current?.clientHeight ?? 0 });
        });
        return e.observe(k.current), () => e.disconnect();
    }, []),
        r.useEffect(() => {
            let e = (e) => {
                null == G.current ||
                    G.current.contains(e.target) ||
                    l ||
                    S.A.updateFrameLayoutMode({ applicationId: t.applicationId, layoutMode: y.y.PIP });
            };
            return (
                document.addEventListener("mousedown", e),
                () => {
                    document.removeEventListener("mousedown", e);
                }
            );
        }, [t.applicationId, l]);
    let Y = V.width / Math.max(V.height, 1) < O.B5,
        W = 0,
        q = 0,
        K = (0, h.A)(n?.id);
    if (!K) {
        let e = V.width,
            t = V.height;
        Y
            ? ((t = V.width / O.B5) > V.height && (e = (t = V.height) * O.B5), (q = (V.height - t) / 2))
            : ((e = Math.min(V.height * O.B5, V.width)) > V.width && (t = (e = V.width) / O.B5),
              (W = (V.width - e) / 2));
    }
    let z = O.E8.NO_CHAT,
        $ = (0, m.G)();
    if (null == n) return null;
    let Q = (w ?? b.da6) + U,
        X = (0, v.YY)(t);
    return (0, i.jsx)(c.NPJ, {
        theme: b.NJ8.DARK,
        children: (e) =>
            (0, i.jsxs)("div", {
                className: a()(R.iE, P[z], e),
                ref: G,
                style: { right: M && !Number.isNaN(Q) ? Q : 0 },
                children: [
                    (0, i.jsx)("div", {
                        className: R.lq,
                        children: (0, i.jsx)("div", {
                            className: a()(R.ht, { [R.kK]: K }),
                            style: { paddingLeft: W, paddingRight: W, paddingTop: q, paddingBottom: q },
                            ref: k,
                            children: (0, i.jsx)(x.A, { className: R.pU, embedId: X }),
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        className: R.qr,
                        children: [
                            (0, i.jsx)(C.A, {
                                appContext: b.BRT.APP,
                                applicationId: n.id,
                                shouldPrioritizeGroupPlusIcon: !0,
                                isRichPresenceInvite: !0,
                                iconClassName: R.NS,
                                size: d.$n.Sizes.MEDIUM,
                                look: d.$n.Looks.FILLED,
                                buttonText: L.intl.string(L.t["6F9ivu"]),
                                color: d.$n.Colors.TRANSPARENT,
                            }),
                            (0, i.jsxs)("div", {
                                className: R.Hq,
                                children: [
                                    (0, i.jsx)("div", {
                                        className: R.qi,
                                        children: (0, i.jsx)(f.l, {
                                            isTrayButton: !0,
                                            label: L.intl.string(L.t.brPQ5U),
                                            onClick: H,
                                            iconComponent: c.gR,
                                            themeable: !0,
                                        }),
                                    }),
                                    (0, i.jsx)(f.l, {
                                        isTrayButton: !1,
                                        label: L.intl.string(L.t["R/FK4A"]),
                                        onClick: F,
                                        iconComponent: c.oLl,
                                        color: "disconnect",
                                    }),
                                ],
                            }),
                            $
                                ? (0, i.jsx)(T.A, {
                                      popoutOpen: !1,
                                      onOpenPopout: () => {
                                          (0, p.zV)(b.HAw.ACTIVITY_POPOUT_POP_OUT_BUTTON_CLICKED),
                                              (0, _.A)({
                                                  onConfirm: async () => {
                                                      n?.id != null &&
                                                          (await S.A.refreshProxyTicket({ applicationId: n.id })),
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
