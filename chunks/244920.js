r.d(t, { A: () => F }), r(134528), r(947204);
var n = r(627968),
    a = r(64700),
    i = r(735438),
    s = r.n(i),
    l = r(311907),
    o = r(397927),
    d = r(235986),
    c = r(383501),
    u = r(412780),
    m = r(967198),
    p = r(162605),
    y = r(351906),
    h = r(287809),
    A = r(562153),
    g = r(917592),
    f = r(828904),
    v = r(522278),
    C = r(974175),
    x = r(731854),
    E = r(985018),
    D = r(518959),
    b = r(473169);
class R extends a.PureComponent {
    render() {
        let { transport: e, mediaSessionId: t, hidePersonalInformation: r, hostname: a } = this.props;
        if (null == e) return (0, n.jsx)(o.y$y, { type: o.y$y.Type.SPINNING_CIRCLE });
        let i = { ...e, hostname: a },
            l = s().map(i, (e, t) => {
                if ("receiverReports" !== t && (!r || "localAddress" !== t))
                    return (0, n.jsx)(C.q7, { label: t, value: e }, t);
            }),
            c = s().map(i.receiverReports, (e) => {
                let t = Array.isArray(e.bitrate) ? e.bitrate.at(-1)?.value : e.bitrate,
                    r = h.default.getUser(e.id);
                var n = A.Ay.getNickname(m.A.getGuildId(), void 0, r);
                return (
                    null == n && (n = null != r ? r.username : e.id),
                    { displayName: n, bitrate: t / 1e3, lost: (100 * e.fractionLost) / 256 }
                );
            }),
            u = s().sortBy(c, (e) => e.displayName),
            p = s().map(u, (e) => {
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
                    (0, n.jsx)(v.A, { label: t, valueRendered: [i, s], children: t }, t)
                );
            });
        return (0, n.jsxs)(o.BJc, {
            className: D._8,
            children: [
                (0, n.jsx)(o.Heading, {
                    variant: "heading-md/medium",
                    children: E.intl.string(E.t.wU9IN2) + (null != t ? " - " + t : ""),
                }),
                (0, f.C6)(l),
                0 === p.length ? null : (0, n.jsx)(o.cGx, { className: b.SX }),
                (0, f.C6)(p),
            ],
        });
    }
}
let F = l.Ay.connectStores([u.Ay, c.A, y.A, p.A], (e) => {
    let { context: t, index: r } = e,
        n = u.Ay.getAllStats(t)[r],
        a =
            t === x.x.STREAM
                ? Object.values(p.A.getRTCConnections()).find(
                      (e) => e.getMediaEngineConnectionId() === n.mediaEngineConnectionId,
                  )
                : null,
        i = a?.hostname ?? "";
    return {
        hidePersonalInformation: y.A.hidePersonalInformation,
        transport: null != n ? n.transport : null,
        mediaSessionId: c.A.getMediaSessionId(),
        hostname: g.A.getShortHostname(i),
    };
})(R);
