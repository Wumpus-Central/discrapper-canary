n.d(t, { A: () => k });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(311907),
    o = n(827734),
    d = n(862482),
    u = n(602853),
    c = n(623646),
    A = n(43990),
    h = n(446576),
    _ = n(70688),
    E = n(942857),
    p = n(795816),
    m = n(216418),
    g = n(47294),
    I = n(16961),
    C = n(58149),
    f = n(429913),
    T = n(313961),
    S = n(473553),
    N = n(964404),
    O = n(709562),
    L = n(520006),
    y = n(128286),
    v = n(309010),
    b = n(625180),
    D = n(898879),
    R = n(293495),
    P = n(165610),
    w = n(652215),
    M = n(5867),
    U = n(985018),
    x = n(492466);
let G = { [M.E8.NO_CHAT]: x.Oo, [M.E8.RESIZABLE]: x.Ig };
function k(e) {
    let { frame: t } = e,
        n = (0, f.h)(t.applicationId),
        a = (0, E.A)(),
        { selectedChannelId: k, selectedVoiceChannelId: j } = (0, s.cf)([v.A], () => ({
            selectedChannelId: v.A.getChannelId(),
            selectedVoiceChannelId: v.A.getVoiceChannelId(),
        })),
        V = (0, s.bG)([T.A], () => null != j && k === j && T.A.getChatOpen(j), [k, j]),
        H = (0, s.bG)([N.Ay], () => N.Ay.callChatSidebarWidth),
        B = (0, u.r)(o.A.modules.chat.RESIZE_HANDLE_WIDTH),
        F = r.useRef(null),
        Y = r.useRef(null),
        [K, z] = r.useState({ width: 0, height: 0 }),
        W = r.useCallback(() => {
            b.A.updateFrameLayoutMode({ applicationId: t.applicationId, layoutMode: P.y.PIP });
        }, [t.applicationId]),
        $ = r.useCallback(() => {
            b.A.stopFrame({ applicationId: t.applicationId });
        }, [t.applicationId]);
    r.useLayoutEffect(() => {
        if (null == Y.current) return;
        let e = new ResizeObserver(() => {
            z({ width: Y.current?.clientWidth ?? 0, height: Y.current?.clientHeight ?? 0 });
        });
        return e.observe(Y.current), () => e.disconnect();
    }, []),
        r.useEffect(() => {
            let e = (e) => {
                null == F.current ||
                    (0, c.H)(F.current, e.target) ||
                    a ||
                    b.A.updateFrameLayoutMode({ applicationId: t.applicationId, layoutMode: P.y.PIP });
            };
            return (
                document.addEventListener("mousedown", e),
                () => {
                    document.removeEventListener("mousedown", e);
                }
            );
        }, [t.applicationId, a]);
    let q = K.width / Math.max(K.height, 1) < M.B5,
        X = 0,
        Q = 0,
        Z = (0, m.A)(n?.id);
    if (!Z) {
        let e = K.width,
            t = K.height;
        q
            ? ((t = K.width / M.B5) > K.height && (e = (t = K.height) * M.B5), (Q = (K.height - t) / 2))
            : ((e = Math.min(K.height * M.B5, K.width)) > K.width && (t = (e = K.width) / M.B5),
              (X = (K.width - e) / 2));
    }
    let J = M.E8.NO_CHAT,
        ee = (0, I.G)();
    if (null == n) return null;
    let et = (H ?? w.da6) + B,
        en = (0, R.YY)(t);
    return (0, i.jsx)(A.N, {
        theme: w.NJ8.DARK,
        children: (e) =>
            (0, i.jsxs)("div", {
                className: l()(x.iE, G[J], e),
                ref: F,
                style: { right: V && !Number.isNaN(et) ? et : 0 },
                children: [
                    (0, i.jsx)(S.A, { applicationId: t.applicationId }),
                    (0, i.jsx)("div", {
                        className: x.lq,
                        children: (0, i.jsx)("div", {
                            className: l()(x.ht, { [x.kK]: Z }),
                            style: { paddingLeft: X, paddingRight: X, paddingTop: Q, paddingBottom: Q },
                            ref: Y,
                            children: (0, i.jsx)(D.A, { className: x.pU, embedId: en }),
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        className: x.qr,
                        children: [
                            (0, i.jsx)(L.A, {
                                appContext: w.BRT.APP,
                                applicationId: n.id,
                                shouldPrioritizeGroupPlusIcon: !0,
                                isRichPresenceInvite: !0,
                                iconClassName: x.NS,
                                size: d.$n.Sizes.MEDIUM,
                                look: d.$n.Looks.FILLED,
                                buttonText: U.intl.string(U.t["6F9ivu"]),
                                color: d.$n.Colors.TRANSPARENT,
                            }),
                            (0, i.jsxs)("div", {
                                className: x.Hq,
                                children: [
                                    (0, i.jsx)("div", {
                                        className: x.qi,
                                        children: (0, i.jsx)(O.l, {
                                            isTrayButton: !0,
                                            label: U.intl.string(U.t.brPQ5U),
                                            onClick: W,
                                            iconComponent: h.g,
                                            themeable: !0,
                                        }),
                                    }),
                                    (0, i.jsx)(O.l, {
                                        isTrayButton: !1,
                                        label: U.intl.string(U.t["R/FK4A"]),
                                        onClick: $,
                                        iconComponent: _.o,
                                        color: "disconnect",
                                    }),
                                ],
                            }),
                            ee
                                ? (0, i.jsx)(y.A, {
                                      popoutOpen: !1,
                                      onOpenPopout: () => {
                                          (0, C.zV)(w.HAw.ACTIVITY_POPOUT_POP_OUT_BUTTON_CLICKED),
                                              (0, g.A)({
                                                  onConfirm: async () => {
                                                      n?.id != null &&
                                                          (await b.A.refreshProxyTicket({ applicationId: n.id })),
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
