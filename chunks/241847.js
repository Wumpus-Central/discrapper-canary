n.d(t, { A: () => I });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(397927),
    r = n(915089),
    o = n(383501),
    c = n(977997),
    d = n(572487),
    u = n(798286),
    h = n(83942),
    m = n(259374),
    A = n(763845),
    g = n(857341),
    p = n(603266),
    f = n(985018),
    _ = n(855945);
function E(e) {
    let { lobbyId: t, connectionTypeText: n, closePopout: l } = e,
        a = (0, s.cf)([d.A], () => ({
            connectionState: d.A.getConnectionState(t),
            hostname: d.A.getHostname(t),
            averagePing: d.A.getAveragePing(t),
            lastPing: d.A.getLastPing(t),
            pings: d.A.getPings(),
            outboundLossRate: d.A.getOutboundLossRate(t),
        }));
    return (0, i.jsx)(A.A, { ...a, closePopout: l, connectionTypeText: n });
}
function x(e) {
    let { closePopout: t, connectionTypeText: n } = e,
        l = (0, s.cf)([o.A], () => ({
            connectionState: o.A.getState(),
            hostname: o.A.getHostname(),
            averagePing: o.A.getAveragePing(),
            lastPing: o.A.getLastPing(),
            outboundLossRate: o.A.getOutboundLossRate(),
            pings: o.A.getPings(),
        }));
    return (0, i.jsx)(A.A, { ...l, closePopout: t, connectionTypeText: n });
}
function C(e) {
    let { channelId: t, isOverlay: n, lobbyId: l, closePopout: s } = e,
        a = (0, m.k)({ channelId: t }) ? f.intl.string(f.t["3BogKe"]) : f.intl.string(f.t.ETIVvg);
    return n
        ? (0, i.jsx)(E, { lobbyId: l, closePopout: s, connectionTypeText: a })
        : (0, i.jsx)(x, { closePopout: s, connectionTypeText: a });
}
function S(e) {
    let t = (0, s.bG)([c.A], () => c.A.hasVideo(e.channelId)),
        [n, o] = l.useState(p.Rj.RTC_DEBUG_PANEL),
        d = (0, r.GV)(),
        m = l.useMemo(() => {
            switch (n) {
                case p.Rj.RTC_DEBUG_PANEL:
                    return (0, i.jsx)(C, { ...e });
                case p.Rj.RTC_SECURE_FRAMES:
                    return (0, i.jsx)(g.A, { channelId: e.channelId });
            }
        }, [e, n]);
    l.useEffect(() => {
        (0, u.Hg)({ channelId: e.channelId, selectedTab: n });
    }, [e.channelId, n]);
    let A = (0, h.c)();
    return (
        l.useEffect(() => {
            A && o(p.Rj.RTC_DEBUG_PANEL);
        }, [A]),
        (0, i.jsxs)("div", {
            className: _.kL,
            children: [
                (0, i.jsx)(a.Heading, {
                    className: _.DD,
                    variant: "heading-lg/bold",
                    color: "text-strong",
                    children: t ? f.intl.string(f.t.IlHdW8) : f.intl.string(f.t.WsOisp),
                }),
                (0, i.jsxs)(a.VQ0, {
                    className: _.vR,
                    selectedItem: n,
                    type: "top",
                    look: "brand",
                    onItemSelect: o,
                    children: [
                        (0, i.jsx)(a.VQ0.Item, {
                            id: p.Rj.RTC_DEBUG_PANEL,
                            className: _.YU,
                            children: f.intl.string(f.t.MBY1Pm),
                        }),
                        A
                            ? null
                            : (0, i.jsx)(a.VQ0.Item, {
                                  id: p.Rj.RTC_SECURE_FRAMES,
                                  className: _.YU,
                                  children: f.intl.string(f.t.zC6o3s),
                              }),
                    ],
                }),
                (0, i.jsx)(a.VQ0.Panel, { id: n, "aria-labelledby": d, children: m }),
            ],
        })
    );
}
function I(e) {
    return (0, m.k)({ channelId: e.channelId })
        ? (0, i.jsx)(S, { ...e })
        : (0, i.jsx)("div", {
              className: _.L3,
              children: (0, i.jsx)("section", { className: _.J8, children: (0, i.jsx)(C, { ...e }) }),
          });
}
