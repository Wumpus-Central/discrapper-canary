n.d(t, { A: () => S }), n(896048);
var l = n(627968),
    r = n(64700),
    i = n(311907),
    a = n(397927),
    s = n(915089),
    o = n(383501),
    c = n(977997),
    u = n(572487),
    d = n(798286),
    f = n(83942),
    p = n(259374),
    b = n(763845),
    g = n(857341),
    m = n(603266),
    h = n(985018),
    A = n(78875);
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e) {
    let { lobbyId: t, connectionTypeText: n, closePopout: r } = e,
        a = (0, i.cf)([u.A], () => ({
            connectionState: u.A.getConnectionState(t),
            hostname: u.A.getHostname(t),
            averagePing: u.A.getAveragePing(t),
            lastPing: u.A.getLastPing(t),
            pings: u.A.getPings(),
            outboundLossRate: u.A.getOutboundLossRate(t),
        }));
    return (0, l.jsx)(
        b.A,
        _(y({}, a), {
            closePopout: r,
            connectionTypeText: n,
        }),
    );
}
function v(e) {
    let { closePopout: t, connectionTypeText: n } = e,
        r = (0, i.cf)([o.A], () => ({
            connectionState: o.A.getState(),
            hostname: o.A.getHostname(),
            averagePing: o.A.getAveragePing(),
            lastPing: o.A.getLastPing(),
            outboundLossRate: o.A.getOutboundLossRate(),
            pings: o.A.getPings(),
        }));
    return (0, l.jsx)(
        b.A,
        _(y({}, r), {
            closePopout: t,
            connectionTypeText: n,
        }),
    );
}
function O(e) {
    let { channelId: t, isOverlay: n, lobbyId: r, closePopout: i } = e,
        a = (0, p.k)({ channelId: t }) ? h.intl.string(h.t["3BogKe"]) : h.intl.string(h.t.ETIVvg);
    return n
        ? (0, l.jsx)(E, {
              lobbyId: r,
              closePopout: i,
              connectionTypeText: a,
          })
        : (0, l.jsx)(v, {
              closePopout: i,
              connectionTypeText: a,
          });
}
function x(e) {
    let t = (0, i.bG)([c.A], () => c.A.hasVideo(e.channelId)),
        [n, o] = r.useState(m.Rj.RTC_DEBUG_PANEL),
        u = (0, s.GV)(),
        p = r.useMemo(() => {
            switch (n) {
                case m.Rj.RTC_DEBUG_PANEL:
                    return (0, l.jsx)(O, y({}, e));
                case m.Rj.RTC_SECURE_FRAMES:
                    return (0, l.jsx)(g.A, { channelId: e.channelId });
            }
        }, [e, n]);
    r.useEffect(() => {
        (0, d.Hg)({
            channelId: e.channelId,
            selectedTab: n,
        });
    }, [e.channelId, n]);
    let b = (0, f.c)();
    return (
        r.useEffect(() => {
            b && o(m.Rj.RTC_DEBUG_PANEL);
        }, [b]),
        (0, l.jsxs)("div", {
            className: A.kL,
            children: [
                (0, l.jsx)(a.Heading, {
                    className: A.DD,
                    variant: "heading-lg/bold",
                    color: "text-strong",
                    children: t ? h.intl.string(h.t.IlHdW8) : h.intl.string(h.t.WsOisp),
                }),
                (0, l.jsxs)(a.VQ0, {
                    className: A.vR,
                    selectedItem: n,
                    type: "top",
                    look: "brand",
                    onItemSelect: o,
                    children: [
                        (0, l.jsx)(a.VQ0.Item, {
                            id: m.Rj.RTC_DEBUG_PANEL,
                            className: A.YU,
                            children: h.intl.string(h.t.MBY1Pm),
                        }),
                        b
                            ? null
                            : (0, l.jsx)(a.VQ0.Item, {
                                  id: m.Rj.RTC_SECURE_FRAMES,
                                  className: A.YU,
                                  children: h.intl.string(h.t.zC6o3s),
                              }),
                    ],
                }),
                (0, l.jsx)(a.VQ0.Panel, {
                    id: n,
                    "aria-labelledby": u,
                    children: p,
                }),
            ],
        })
    );
}
function S(e) {
    return (0, p.k)({ channelId: e.channelId })
        ? (0, l.jsx)(x, y({}, e))
        : (0, l.jsx)("div", {
              className: A.L3,
              children: (0, l.jsx)("section", {
                  className: A.J8,
                  children: (0, l.jsx)(O, y({}, e)),
              }),
          });
}
