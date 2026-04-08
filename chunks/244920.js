r.d(t, { A: () => R }), r(134528), r(947204);
var n = r(627968),
    a = r(64700),
    i = r(735438),
    s = r.n(i),
    l = r(311907),
    o = r(397927),
    d = r(235986),
    u = r(383501),
    c = r(412780),
    m = r(967198),
    p = r(162605),
    h = r(351906),
    y = r(287809),
    f = r(562153),
    A = r(917592),
    g = r(828904),
    F = r(522278),
    v = r(974175),
    C = r(731854),
    b = r(985018),
    E = r(653297),
    x = r(153335);
class D extends a.PureComponent {
    render() {
        let { transport: e, mediaSessionId: t, hidePersonalInformation: r, hostname: a } = this.props;
        if (null == e) return (0, n.jsx)(o.y$y, { type: o.y$y.Type.SPINNING_CIRCLE });
        let i = { ...e, hostname: a },
            l = s().map(i, (e, t) => {
                if ("receiverReports" !== t && (!r || "localAddress" !== t))
                    return (0, n.jsx)(v.q7, { label: t, value: e }, t);
            }),
            u = s().map(i.receiverReports, (e) => {
                let t = Array.isArray(e.bitrate) ? e.bitrate.at(-1)?.value : e.bitrate,
                    r = y.default.getUser(e.id);
                var n = f.Ay.getNickname(m.A.getGuildId(), void 0, r);
                return (
                    null == n && (n = null != r ? r.username : e.id),
                    { displayName: n, bitrate: t / 1e3, lost: (100 * e.fractionLost) / 256 }
                );
            }),
            c = s().sortBy(u, (e) => e.displayName),
            p = s().map(c, (e) => {
                var t, r, a;
                let i, s;
                return (
                    (t = e.displayName),
                    (r = e.bitrate),
                    (a = e.lost),
                    (i = (0, n.jsxs)(d.A, {
                        id: `bitrate-${t}`,
                        justify: d.A.Justify.BETWEEN,
                        children: [
                            (0, n.jsx)("span", { children: "Bitrate:" }),
                            (0, n.jsxs)("span", { children: [r.toFixed(2), " Kbps"] }),
                        ],
                    })),
                    (s = (0, n.jsxs)(d.A, {
                        id: `lost-${t}`,
                        justify: d.A.Justify.BETWEEN,
                        children: [
                            (0, n.jsx)("span", { children: "Packet Loss:" }),
                            (0, n.jsxs)("span", { children: [a.toFixed(0), "%"] }),
                        ],
                    })),
                    (0, n.jsx)(F.A, { label: t, valueRendered: [i, s], children: t }, t)
                );
            });
        return (0, n.jsxs)(o.BJc, {
            className: E._8,
            children: [
                (0, n.jsx)(o.Heading, {
                    variant: "heading-md/medium",
                    children: b.intl.string(b.t.wU9IN2) + (null != t ? " - " + t : ""),
                }),
                (0, g.C6)(l),
                0 === p.length ? null : (0, n.jsx)(o.cGx, { className: x.SX }),
                (0, g.C6)(p),
            ],
        });
    }
}
let R = l.Ay.connectStores([c.Ay, u.A, h.A, p.A], (e) => {
    let { context: t, index: r } = e,
        n = c.Ay.getAllStats(t)[r],
        a =
            t === C.x.STREAM
                ? Object.values(p.A.getRTCConnections()).find(
                      (e) => e.getMediaEngineConnectionId() === n.mediaEngineConnectionId,
                  )
                : null,
        i = a?.hostname ?? "";
    return {
        hidePersonalInformation: h.A.hidePersonalInformation,
        transport: null != n ? n.transport : null,
        mediaSessionId: u.A.getMediaSessionId(),
        hostname: A.A.getShortHostname(i),
    };
})(D);
