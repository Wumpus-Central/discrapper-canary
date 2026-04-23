n.d(t, { A: () => G });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(311907),
    o = n(761508),
    c = n(534514),
    d = n(915089),
    u = n(383501),
    h = n(977997),
    m = n(572487),
    A = n(798286),
    g = n(83942),
    _ = n(259374),
    p = n(730986),
    f = n(786840),
    E = n(763845),
    C = n(857341),
    x = n(843057),
    S = n(603266),
    I = n(985018),
    v = n(172115),
    N = n(9934),
    T = n(824078);
function y() {
    return (0, r.cf)([u.A], () => ({
        connectionState: u.A.getState(),
        hostname: u.A.getHostname(),
        averagePing: u.A.getAveragePing(),
        lastPing: u.A.getLastPing(),
        outboundLossRate: u.A.getOutboundLossRate(),
        pings: u.A.getPings(),
    }));
}
function b(e) {
    return (0, r.cf)([m.A], () => ({
        connectionState: m.A.getConnectionState(e),
        hostname: m.A.getHostname(e),
        averagePing: m.A.getAveragePing(e),
        lastPing: m.A.getLastPing(e),
        pings: m.A.getPings(),
        outboundLossRate: m.A.getOutboundLossRate(e),
    }));
}
function j(e) {
    let { lobbyId: t, connectionTypeText: n, closePopout: l } = e,
        a = b(t);
    return (0, i.jsx)(E.A, { ...a, closePopout: l, connectionTypeText: n });
}
function R(e) {
    let { lobbyId: t, connectionTypeText: n, closePopout: l } = e,
        a = b(t);
    return (0, i.jsx)(p.Q, { ...a, closePopout: l, connectionTypeText: n });
}
function M(e) {
    let { closePopout: t, connectionTypeText: n } = e,
        l = y();
    return (0, i.jsx)(E.A, { ...l, closePopout: t, connectionTypeText: n });
}
function L(e) {
    let { closePopout: t, connectionTypeText: n } = e,
        l = y();
    return (0, i.jsx)(p.Q, { ...l, closePopout: t, connectionTypeText: n });
}
function D(e) {
    let { channelId: t, isOverlay: n, lobbyId: l, closePopout: a } = e,
        s = (0, _.k)({ channelId: t }) ? I.intl.string(I.t["3BogKe"]) : I.intl.string(I.t.ETIVvg);
    return n
        ? (0, i.jsx)(j, { lobbyId: l, closePopout: a, connectionTypeText: s })
        : (0, i.jsx)(M, { closePopout: a, connectionTypeText: s });
}
function P(e) {
    let { channelId: t, isOverlay: n, lobbyId: l, closePopout: a } = e,
        s = (0, _.k)({ channelId: t }) ? I.intl.string(I.t["3BogKe"]) : I.intl.string(I.t.ETIVvg);
    return n
        ? (0, i.jsx)(R, { lobbyId: l, closePopout: a, connectionTypeText: s })
        : (0, i.jsx)(L, { closePopout: a, connectionTypeText: s });
}
function O(e) {
    let [t, n] = l.useState(S.Rj.RTC_DEBUG_PANEL),
        a = (0, d.GV)(),
        r = [
            { id: S.Rj.RTC_DEBUG_PANEL, content: (0, i.jsx)(D, { ...e }) },
            { id: S.Rj.RTC_SECURE_FRAMES, content: (0, i.jsx)(C.A, { channelId: e.channelId }) },
        ];
    l.useEffect(() => {
        (0, A.Hg)({ channelId: e.channelId, selectedTab: t });
    }, [e.channelId, t]);
    let c = (0, g.c)();
    return (
        l.useEffect(() => {
            c && n(S.Rj.RTC_DEBUG_PANEL);
        }, [c]),
        (0, i.jsxs)("div", {
            className: s()(T.popover, N.kL),
            children: [
                (0, i.jsxs)(o.V, {
                    className: N.vR,
                    selectedItem: t,
                    type: "top",
                    look: "brand",
                    onItemSelect: n,
                    children: [
                        (0, i.jsx)(o.V.Item, {
                            id: S.Rj.RTC_DEBUG_PANEL,
                            className: N.YU,
                            children: I.intl.string(I.t.MBY1Pm),
                        }),
                        c
                            ? null
                            : (0, i.jsx)(o.V.Item, {
                                  id: S.Rj.RTC_SECURE_FRAMES,
                                  className: N.YU,
                                  children: I.intl.string(I.t.zC6o3s),
                              }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: N.SZ,
                    children: r.map((e) => {
                        let { id: n, content: l } = e;
                        return (0, i.jsx)(
                            o.V.Panel,
                            { id: n, "aria-labelledby": a, className: n !== t ? N._t : void 0, children: l },
                            n,
                        );
                    }),
                }),
            ],
        })
    );
}
function w(e) {
    let t = (0, r.bG)([h.A], () => h.A.hasVideo(e.channelId)),
        [n, a] = l.useState(S.Rj.RTC_DEBUG_PANEL),
        s = (0, d.GV)(),
        u = l.useMemo(() => {
            switch (n) {
                case S.Rj.RTC_DEBUG_PANEL:
                    return (0, i.jsx)(P, { ...e });
                case S.Rj.RTC_SECURE_FRAMES:
                    return (0, i.jsx)(f.A, { channelId: e.channelId });
            }
        }, [e, n]);
    l.useEffect(() => {
        (0, A.Hg)({ channelId: e.channelId, selectedTab: n });
    }, [e.channelId, n]);
    let m = (0, g.c)();
    return (
        l.useEffect(() => {
            m && a(S.Rj.RTC_DEBUG_PANEL);
        }, [m]),
        (0, i.jsxs)("div", {
            className: v.kL,
            children: [
                (0, i.jsx)(c.D, {
                    className: v.DD,
                    variant: "heading-lg/bold",
                    color: "text-strong",
                    children: t ? I.intl.string(I.t.IlHdW8) : I.intl.string(I.t.WsOisp),
                }),
                (0, i.jsxs)(o.V, {
                    className: v.vR,
                    selectedItem: n,
                    type: "top",
                    look: "brand",
                    onItemSelect: a,
                    children: [
                        (0, i.jsx)(o.V.Item, {
                            id: S.Rj.RTC_DEBUG_PANEL,
                            className: v.YU,
                            children: I.intl.string(I.t.MBY1Pm),
                        }),
                        m
                            ? null
                            : (0, i.jsx)(o.V.Item, {
                                  id: S.Rj.RTC_SECURE_FRAMES,
                                  className: v.YU,
                                  children: I.intl.string(I.t.zC6o3s),
                              }),
                    ],
                }),
                (0, i.jsx)(o.V.Panel, { id: n, "aria-labelledby": s, children: u }),
            ],
        })
    );
}
function U(e) {
    return (0, _.k)({ channelId: e.channelId })
        ? (0, i.jsx)(w, { ...e })
        : (0, i.jsx)("div", {
              className: v.L3,
              children: (0, i.jsx)("section", { className: v.J8, children: (0, i.jsx)(P, { ...e }) }),
          });
}
function k(e) {
    return (0, _.k)({ channelId: e.channelId })
        ? (0, i.jsx)(O, { ...e })
        : (0, i.jsx)("div", { className: s()(T.popover, N.L3), children: (0, i.jsx)(D, { ...e }) });
}
function G(e) {
    return (0, x.p)("RTCConnectionPopout") ? (0, i.jsx)(k, { ...e }) : (0, i.jsx)(U, { ...e });
}
