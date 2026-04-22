r.d(t, { A: () => j }), r(134528), r(947204);
var n = r(627968),
    i = r(64700),
    a = r(735438),
    o = r.n(a),
    l = r(311907),
    s = r(289873),
    d = r(331322),
    c = r(534514),
    u = r(404778),
    m = r(235986),
    p = r(383501),
    h = r(412780),
    y = r(967198),
    b = r(162605),
    g = r(351906),
    f = r(287809),
    A = r(562153),
    C = r(917592),
    v = r(828904),
    F = r(522278),
    x = r(974175),
    D = r(731854),
    E = r(985018),
    S = r(178116),
    R = r(373378);
class _ extends i.PureComponent {
    render() {
        let { transport: e, mediaSessionId: t, hidePersonalInformation: r, hostname: i } = this.props;
        if (null == e) return (0, n.jsx)(s.y, { type: s.y.Type.SPINNING_CIRCLE });
        let a = { ...e, hostname: i },
            l = o().map(a, (e, t) => {
                if ("receiverReports" !== t && (!r || "localAddress" !== t))
                    return (0, n.jsx)(x.q7, { label: t, value: e }, t);
            }),
            p = o().map(a.receiverReports, (e) => {
                let t = Array.isArray(e.bitrate) ? e.bitrate.at(-1)?.value : e.bitrate,
                    r = f.default.getUser(e.id);
                var n = A.Ay.getNickname(y.A.getGuildId(), void 0, r);
                return (
                    null == n && (n = null != r ? r.username : e.id),
                    { displayName: n, bitrate: t / 1e3, lost: (100 * e.fractionLost) / 256 }
                );
            }),
            h = o().sortBy(p, (e) => e.displayName),
            b = o().map(h, (e) => {
                var t, r, i;
                let a, o;
                return (
                    (t = e.displayName),
                    (r = e.bitrate),
                    (i = e.lost),
                    (a = (0, n.jsxs)(m.A, {
                        id: `bitrate-${t}`,
                        justify: m.A.Justify.BETWEEN,
                        children: [
                            (0, n.jsx)("span", { children: "Bitrate:" }),
                            (0, n.jsxs)("span", { children: [r.toFixed(2), " Kbps"] }),
                        ],
                    })),
                    (o = (0, n.jsxs)(m.A, {
                        id: `lost-${t}`,
                        justify: m.A.Justify.BETWEEN,
                        children: [
                            (0, n.jsx)("span", { children: "Packet Loss:" }),
                            (0, n.jsxs)("span", { children: [i.toFixed(0), "%"] }),
                        ],
                    })),
                    (0, n.jsx)(F.A, { label: t, valueRendered: [a, o], children: t }, t)
                );
            });
        return (0, n.jsxs)(d.B, {
            className: S._8,
            children: [
                (0, n.jsx)(c.D, {
                    variant: "heading-md/medium",
                    children: E.intl.string(E.t.wU9IN2) + (null != t ? " - " + t : ""),
                }),
                (0, v.C6)(l),
                0 === b.length ? null : (0, n.jsx)(u.c, { className: R.SX }),
                (0, v.C6)(b),
            ],
        });
    }
}
let j = l.Ay.connectStores([h.Ay, p.A, g.A, b.A], (e) => {
    let { context: t, index: r } = e,
        n = h.Ay.getAllStats(t)[r],
        i =
            t === D.x.STREAM
                ? Object.values(b.A.getRTCConnections()).find(
                      (e) => e.getMediaEngineConnectionId() === n.mediaEngineConnectionId,
                  )
                : null,
        a = i?.hostname ?? "";
    return {
        hidePersonalInformation: g.A.hidePersonalInformation,
        transport: null != n ? n.transport : null,
        mediaSessionId: p.A.getMediaSessionId(),
        hostname: C.A.getShortHostname(a),
    };
})(_);
