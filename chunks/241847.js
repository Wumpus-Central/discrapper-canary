n.d(t, { A: () => U });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(311907),
    o = n(397927),
    c = n(915089),
    d = n(383501),
    u = n(977997),
    h = n(572487),
    m = n(798286),
    A = n(83942),
    g = n(259374),
    _ = n(730986),
    p = n(786840),
    f = n(763845),
    E = n(857341),
    C = n(843057),
    x = n(603266),
    S = n(985018),
    I = n(172115),
    T = n(9934),
    v = n(824078);
function N() {
    return (0, r.cf)([d.A], () => ({
        connectionState: d.A.getState(),
        hostname: d.A.getHostname(),
        averagePing: d.A.getAveragePing(),
        lastPing: d.A.getLastPing(),
        outboundLossRate: d.A.getOutboundLossRate(),
        pings: d.A.getPings(),
    }));
}
function y(e) {
    return (0, r.cf)([h.A], () => ({
        connectionState: h.A.getConnectionState(e),
        hostname: h.A.getHostname(e),
        averagePing: h.A.getAveragePing(e),
        lastPing: h.A.getLastPing(e),
        pings: h.A.getPings(),
        outboundLossRate: h.A.getOutboundLossRate(e),
    }));
}
function b(e) {
    let { lobbyId: t, connectionTypeText: n, closePopout: l } = e,
        a = y(t);
    return (0, i.jsx)(f.A, { ...a, closePopout: l, connectionTypeText: n });
}
function j(e) {
    let { lobbyId: t, connectionTypeText: n, closePopout: l } = e,
        a = y(t);
    return (0, i.jsx)(_.Q, { ...a, closePopout: l, connectionTypeText: n });
}
function R(e) {
    let { closePopout: t, connectionTypeText: n } = e,
        l = N();
    return (0, i.jsx)(f.A, { ...l, closePopout: t, connectionTypeText: n });
}
function M(e) {
    let { closePopout: t, connectionTypeText: n } = e,
        l = N();
    return (0, i.jsx)(_.Q, { ...l, closePopout: t, connectionTypeText: n });
}
function L(e) {
    let { channelId: t, isOverlay: n, lobbyId: l, closePopout: a } = e,
        s = (0, g.k)({ channelId: t }) ? S.intl.string(S.t["3BogKe"]) : S.intl.string(S.t.ETIVvg);
    return n
        ? (0, i.jsx)(b, { lobbyId: l, closePopout: a, connectionTypeText: s })
        : (0, i.jsx)(R, { closePopout: a, connectionTypeText: s });
}
function O(e) {
    let { channelId: t, isOverlay: n, lobbyId: l, closePopout: a } = e,
        s = (0, g.k)({ channelId: t }) ? S.intl.string(S.t["3BogKe"]) : S.intl.string(S.t.ETIVvg);
    return n
        ? (0, i.jsx)(j, { lobbyId: l, closePopout: a, connectionTypeText: s })
        : (0, i.jsx)(M, { closePopout: a, connectionTypeText: s });
}
function D(e) {
    let [t, n] = l.useState(x.Rj.RTC_DEBUG_PANEL),
        a = (0, c.GV)(),
        r = [
            { id: x.Rj.RTC_DEBUG_PANEL, content: (0, i.jsx)(L, { ...e }) },
            { id: x.Rj.RTC_SECURE_FRAMES, content: (0, i.jsx)(E.A, { channelId: e.channelId }) },
        ];
    l.useEffect(() => {
        (0, m.Hg)({ channelId: e.channelId, selectedTab: t });
    }, [e.channelId, t]);
    let d = (0, A.c)();
    return (
        l.useEffect(() => {
            d && n(x.Rj.RTC_DEBUG_PANEL);
        }, [d]),
        (0, i.jsxs)("div", {
            className: s()(v.popover, T.kL),
            children: [
                (0, i.jsxs)(o.VQ0, {
                    className: T.vR,
                    selectedItem: t,
                    type: "top",
                    look: "brand",
                    onItemSelect: n,
                    children: [
                        (0, i.jsx)(o.VQ0.Item, {
                            id: x.Rj.RTC_DEBUG_PANEL,
                            className: T.YU,
                            children: S.intl.string(S.t.MBY1Pm),
                        }),
                        d
                            ? null
                            : (0, i.jsx)(o.VQ0.Item, {
                                  id: x.Rj.RTC_SECURE_FRAMES,
                                  className: T.YU,
                                  children: S.intl.string(S.t.zC6o3s),
                              }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: T.SZ,
                    children: r.map((e) => {
                        let { id: n, content: l } = e;
                        return (0, i.jsx)(
                            o.VQ0.Panel,
                            { id: n, "aria-labelledby": a, className: n !== t ? T._t : void 0, children: l },
                            n,
                        );
                    }),
                }),
            ],
        })
    );
}
function P(e) {
    let t = (0, r.bG)([u.A], () => u.A.hasVideo(e.channelId)),
        [n, a] = l.useState(x.Rj.RTC_DEBUG_PANEL),
        s = (0, c.GV)(),
        d = l.useMemo(() => {
            switch (n) {
                case x.Rj.RTC_DEBUG_PANEL:
                    return (0, i.jsx)(O, { ...e });
                case x.Rj.RTC_SECURE_FRAMES:
                    return (0, i.jsx)(p.A, { channelId: e.channelId });
            }
        }, [e, n]);
    l.useEffect(() => {
        (0, m.Hg)({ channelId: e.channelId, selectedTab: n });
    }, [e.channelId, n]);
    let h = (0, A.c)();
    return (
        l.useEffect(() => {
            h && a(x.Rj.RTC_DEBUG_PANEL);
        }, [h]),
        (0, i.jsxs)("div", {
            className: I.kL,
            children: [
                (0, i.jsx)(o.Heading, {
                    className: I.DD,
                    variant: "heading-lg/bold",
                    color: "text-strong",
                    children: t ? S.intl.string(S.t.IlHdW8) : S.intl.string(S.t.WsOisp),
                }),
                (0, i.jsxs)(o.VQ0, {
                    className: I.vR,
                    selectedItem: n,
                    type: "top",
                    look: "brand",
                    onItemSelect: a,
                    children: [
                        (0, i.jsx)(o.VQ0.Item, {
                            id: x.Rj.RTC_DEBUG_PANEL,
                            className: I.YU,
                            children: S.intl.string(S.t.MBY1Pm),
                        }),
                        h
                            ? null
                            : (0, i.jsx)(o.VQ0.Item, {
                                  id: x.Rj.RTC_SECURE_FRAMES,
                                  className: I.YU,
                                  children: S.intl.string(S.t.zC6o3s),
                              }),
                    ],
                }),
                (0, i.jsx)(o.VQ0.Panel, { id: n, "aria-labelledby": s, children: d }),
            ],
        })
    );
}
function k(e) {
    return (0, g.k)({ channelId: e.channelId })
        ? (0, i.jsx)(P, { ...e })
        : (0, i.jsx)("div", {
              className: I.L3,
              children: (0, i.jsx)("section", { className: I.J8, children: (0, i.jsx)(O, { ...e }) }),
          });
}
function w(e) {
    return (0, g.k)({ channelId: e.channelId })
        ? (0, i.jsx)(D, { ...e })
        : (0, i.jsx)("div", { className: s()(v.popover, T.L3), children: (0, i.jsx)(L, { ...e }) });
}
function U(e) {
    return (0, C.p)("RTCConnectionPopout") ? (0, i.jsx)(w, { ...e }) : (0, i.jsx)(k, { ...e });
}
