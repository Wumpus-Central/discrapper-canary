n.d(t, { A: () => U });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(397927),
    c = n(915089),
    d = n(383501),
    u = n(977997),
    h = n(572487),
    m = n(798286),
    A = n(83942),
    g = n(259374),
    p = n(730986),
    f = n(786840),
    _ = n(763845),
    E = n(857341),
    x = n(843057),
    C = n(603266),
    S = n(985018),
    T = n(298979),
    N = n(451070),
    I = n(442078);
function v() {
    return (0, r.cf)([d.A], () => ({
        connectionState: d.A.getState(),
        hostname: d.A.getHostname(),
        averagePing: d.A.getAveragePing(),
        lastPing: d.A.getLastPing(),
        outboundLossRate: d.A.getOutboundLossRate(),
        pings: d.A.getPings(),
    }));
}
function b(e) {
    return (0, r.cf)([h.A], () => ({
        connectionState: h.A.getConnectionState(e),
        hostname: h.A.getHostname(e),
        averagePing: h.A.getAveragePing(e),
        lastPing: h.A.getLastPing(e),
        pings: h.A.getPings(),
        outboundLossRate: h.A.getOutboundLossRate(e),
    }));
}
function y(e) {
    let { lobbyId: t, connectionTypeText: n, closePopout: l } = e,
        s = b(t);
    return (0, i.jsx)(_.A, { ...s, closePopout: l, connectionTypeText: n });
}
function j(e) {
    let { lobbyId: t, connectionTypeText: n, closePopout: l } = e,
        s = b(t);
    return (0, i.jsx)(p.Q, { ...s, closePopout: l, connectionTypeText: n });
}
function R(e) {
    let { closePopout: t, connectionTypeText: n } = e,
        l = v();
    return (0, i.jsx)(_.A, { ...l, closePopout: t, connectionTypeText: n });
}
function M(e) {
    let { closePopout: t, connectionTypeText: n } = e,
        l = v();
    return (0, i.jsx)(p.Q, { ...l, closePopout: t, connectionTypeText: n });
}
function D(e) {
    let { channelId: t, isOverlay: n, lobbyId: l, closePopout: s } = e,
        a = (0, g.k)({ channelId: t }) ? S.intl.string(S.t["3BogKe"]) : S.intl.string(S.t.ETIVvg);
    return n
        ? (0, i.jsx)(y, { lobbyId: l, closePopout: s, connectionTypeText: a })
        : (0, i.jsx)(R, { closePopout: s, connectionTypeText: a });
}
function O(e) {
    let { channelId: t, isOverlay: n, lobbyId: l, closePopout: s } = e,
        a = (0, g.k)({ channelId: t }) ? S.intl.string(S.t["3BogKe"]) : S.intl.string(S.t.ETIVvg);
    return n
        ? (0, i.jsx)(j, { lobbyId: l, closePopout: s, connectionTypeText: a })
        : (0, i.jsx)(M, { closePopout: s, connectionTypeText: a });
}
function L(e) {
    let [t, n] = l.useState(C.Rj.RTC_DEBUG_PANEL),
        s = (0, c.GV)(),
        r = [
            { id: C.Rj.RTC_DEBUG_PANEL, content: (0, i.jsx)(D, { ...e }) },
            { id: C.Rj.RTC_SECURE_FRAMES, content: (0, i.jsx)(E.A, { channelId: e.channelId }) },
        ];
    l.useEffect(() => {
        (0, m.Hg)({ channelId: e.channelId, selectedTab: t });
    }, [e.channelId, t]);
    let d = (0, A.c)();
    return (
        l.useEffect(() => {
            d && n(C.Rj.RTC_DEBUG_PANEL);
        }, [d]),
        (0, i.jsxs)("div", {
            className: a()(I.popover, N.kL),
            children: [
                (0, i.jsxs)(o.VQ0, {
                    className: N.vR,
                    selectedItem: t,
                    type: "top",
                    look: "brand",
                    onItemSelect: n,
                    children: [
                        (0, i.jsx)(o.VQ0.Item, {
                            id: C.Rj.RTC_DEBUG_PANEL,
                            className: N.YU,
                            children: S.intl.string(S.t.MBY1Pm),
                        }),
                        d
                            ? null
                            : (0, i.jsx)(o.VQ0.Item, {
                                  id: C.Rj.RTC_SECURE_FRAMES,
                                  className: N.YU,
                                  children: S.intl.string(S.t.zC6o3s),
                              }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: N.SZ,
                    children: r.map((e) => {
                        let { id: n, content: l } = e;
                        return (0, i.jsx)(
                            o.VQ0.Panel,
                            { id: n, "aria-labelledby": s, className: n !== t ? N._t : void 0, children: l },
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
        [n, s] = l.useState(C.Rj.RTC_DEBUG_PANEL),
        a = (0, c.GV)(),
        d = l.useMemo(() => {
            switch (n) {
                case C.Rj.RTC_DEBUG_PANEL:
                    return (0, i.jsx)(O, { ...e });
                case C.Rj.RTC_SECURE_FRAMES:
                    return (0, i.jsx)(f.A, { channelId: e.channelId });
            }
        }, [e, n]);
    l.useEffect(() => {
        (0, m.Hg)({ channelId: e.channelId, selectedTab: n });
    }, [e.channelId, n]);
    let h = (0, A.c)();
    return (
        l.useEffect(() => {
            h && s(C.Rj.RTC_DEBUG_PANEL);
        }, [h]),
        (0, i.jsxs)("div", {
            className: T.kL,
            children: [
                (0, i.jsx)(o.Heading, {
                    className: T.DD,
                    variant: "heading-lg/bold",
                    color: "text-strong",
                    children: t ? S.intl.string(S.t.IlHdW8) : S.intl.string(S.t.WsOisp),
                }),
                (0, i.jsxs)(o.VQ0, {
                    className: T.vR,
                    selectedItem: n,
                    type: "top",
                    look: "brand",
                    onItemSelect: s,
                    children: [
                        (0, i.jsx)(o.VQ0.Item, {
                            id: C.Rj.RTC_DEBUG_PANEL,
                            className: T.YU,
                            children: S.intl.string(S.t.MBY1Pm),
                        }),
                        h
                            ? null
                            : (0, i.jsx)(o.VQ0.Item, {
                                  id: C.Rj.RTC_SECURE_FRAMES,
                                  className: T.YU,
                                  children: S.intl.string(S.t.zC6o3s),
                              }),
                    ],
                }),
                (0, i.jsx)(o.VQ0.Panel, { id: n, "aria-labelledby": a, children: d }),
            ],
        })
    );
}
function k(e) {
    return (0, g.k)({ channelId: e.channelId })
        ? (0, i.jsx)(P, { ...e })
        : (0, i.jsx)("div", {
              className: T.L3,
              children: (0, i.jsx)("section", { className: T.J8, children: (0, i.jsx)(O, { ...e }) }),
          });
}
function w(e) {
    return (0, g.k)({ channelId: e.channelId })
        ? (0, i.jsx)(L, { ...e })
        : (0, i.jsx)("div", { className: a()(I.popover, N.L3), children: (0, i.jsx)(D, { ...e }) });
}
function U(e) {
    return (0, x.p)("RTCConnectionPopout") ? (0, i.jsx)(w, { ...e }) : (0, i.jsx)(k, { ...e });
}
