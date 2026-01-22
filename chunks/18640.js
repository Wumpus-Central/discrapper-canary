i.d(e, { X: () => E }), i(65821), i(457529);
var n = i(627968),
    l = i(64700),
    s = i(397927),
    r = i(890138),
    u = i(954571),
    a = i(728458),
    o = i(156186),
    T = i(602450),
    A = i(557571),
    S = i(652215);
let E = () => {
    let { connectionStatus: t, setConnectionStatus: e, connect: i, disconnect: E } = (0, A.lV)(),
        d = [T.l7.CONNECTED, T.l7.INITIALIZING].includes(t),
        _ = (0, l.useCallback)(
            () =>
                d
                    ? (e(T.l7.DISCONNECTED), (0, r.u)(S.HAw.NITRO_WARP_TOGGLED, { is_connecting: !1 }), E())
                    : ((0, r.u)(S.HAw.NITRO_WARP_TOGGLED, { is_connecting: !0 }),
                      e(T.l7.INITIALIZING),
                      i()
                          .then((t) => {
                              t || e(T.l7.DISCONNECTED);
                          })
                          .catch((t) => {
                              a.A.captureException(t, { tags: { source: o.q.PRIVATE_BROWSING_PERK_CONNECT } }),
                                  u.default.track(S.HAw.PREMIUM_FEATURE_ERROR, {
                                      error_message: t instanceof Error ? t.message : JSON.stringify(t),
                                      error_source: o.q.PRIVATE_BROWSING_PERK_CONNECT,
                                  }),
                                  e(T.l7.DISCONNECTED);
                          })),
            [d, E, i, e],
        );
    return (0, n.jsx)("div", {
        children: (0, n.jsx)(s.dOG, {
            onChange: _,
            checked: d,
        }),
    });
};
