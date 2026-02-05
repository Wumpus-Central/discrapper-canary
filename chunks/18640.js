i.d(e, { X: () => S });
var n = i(627968),
    l = i(64700),
    s = i(397927),
    r = i(890138),
    a = i(954571),
    u = i(728458),
    o = i(156186),
    d = i(602450),
    T = i(557571),
    A = i(652215);
let S = () => {
    let { connectionStatus: t, setConnectionStatus: e, connect: i, disconnect: S } = (0, T.lV)(),
        E = [d.l7.CONNECTED, d.l7.INITIALIZING].includes(t),
        g = (0, l.useCallback)(
            () =>
                E
                    ? (e(d.l7.DISCONNECTED), (0, r.u)(A.HAw.NITRO_WARP_TOGGLED, { is_connecting: !1 }), S())
                    : ((0, r.u)(A.HAw.NITRO_WARP_TOGGLED, { is_connecting: !0 }),
                      e(d.l7.INITIALIZING),
                      i()
                          .then((t) => {
                              t || e(d.l7.DISCONNECTED);
                          })
                          .catch((t) => {
                              u.A.captureException(t, { tags: { source: o.q.PRIVATE_BROWSING_PERK_CONNECT } }),
                                  a.default.track(A.HAw.PREMIUM_FEATURE_ERROR, {
                                      error_message: t instanceof Error ? t.message : JSON.stringify(t),
                                      error_source: o.q.PRIVATE_BROWSING_PERK_CONNECT,
                                  }),
                                  e(d.l7.DISCONNECTED);
                          })),
            [E, S, i, e],
        );
    return (0, n.jsx)("div", { children: (0, n.jsx)(s.dOG, { onChange: g, checked: E }) });
};
