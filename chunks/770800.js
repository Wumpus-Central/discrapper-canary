r.d(t, { Z: () => x }), r(571269), r(298267);
var n = r(200651),
    a = r(192379),
    i = r(392711),
    l = r.n(i),
    s = r(442837),
    o = r(481060),
    d = r(600164),
    c = r(19780),
    u = r(226961),
    m = r(914010),
    p = r(959457),
    h = r(246946),
    y = r(594174),
    g = r(5192),
    f = r(476221),
    v = r(481250),
    D = r(206314),
    E = r(513547),
    C = r(65154),
    Z = r(388032),
    N = r(378481),
    R = r(232186);
class j extends a.PureComponent {
    render() {
        let { transport: e, mediaSessionId: t, hidePersonalInformation: r, hostname: a } = this.props;
        if (null == e) return (0, n.jsx)(o.$jN, { type: o.$jN.Type.SPINNING_CIRCLE });
        let i = {
                ...e,
                hostname: a
            },
            s = l().map(i, (e, t) => {
                if ('receiverReports' !== t && (!r || 'localAddress' !== t))
                    return (0, n.jsx)(
                        E.ck,
                        {
                            label: t,
                            value: e
                        },
                        t
                    );
            }),
            c = l().map(i.receiverReports, (e) => {
                let t = Array.isArray(e.bitrate) ? (null === (n = e.bitrate.at(-1)) || void 0 === n ? void 0 : n.value) : e.bitrate,
                    r = y.default.getUser(e.id);
                var n,
                    a = g.ZP.getNickname(m.Z.getGuildId(), void 0, r);
                return (
                    null == a && (a = null != r ? r.username : e.id),
                    {
                        displayName: a,
                        bitrate: t / 1000,
                        lost: (100 * e.fractionLost) / 256
                    }
                );
            }),
            u = l().sortBy(c, (e) => e.displayName),
            p = l().map(u, (e) =>
                (function (e, t, r) {
                    let a = (0, n.jsxs)(d.Z, {
                            id: 'bitrate-'.concat(e),
                            justify: d.Z.Justify.BETWEEN,
                            children: [
                                (0, n.jsx)('span', { children: 'Bitrate:' }),
                                (0, n.jsxs)('span', {
                                    children: [t.toFixed(2), ' Kbps']
                                })
                            ]
                        }),
                        i = (0, n.jsxs)(d.Z, {
                            id: 'lost-'.concat(e),
                            justify: d.Z.Justify.BETWEEN,
                            children: [
                                (0, n.jsx)('span', { children: 'Packet Loss:' }),
                                (0, n.jsxs)('span', {
                                    children: [r.toFixed(0), '%']
                                })
                            ]
                        });
                    return (0, n.jsx)(
                        D.Z,
                        {
                            label: e,
                            valueRendered: [a, i],
                            children: e
                        },
                        e
                    );
                })(e.displayName, e.bitrate, e.lost)
            );
        return (0, n.jsxs)(o.hjN, {
            tag: o.RB0.H2,
            title: Z.intl.string(Z.t.wU9INz) + (null != t ? ' - ' + t : ''),
            className: N.allowSelection,
            children: [(0, v.a)(s), 0 === p.length ? null : (0, n.jsx)(o.$i$, { className: R.marginBottom20 }), (0, v.a)(p)]
        });
    }
}
let x = s.ZP.connectStores([u.ZP, c.Z, h.Z, p.Z], (e) => {
    let { context: t, index: r } = e,
        n = u.ZP.getAllStats(t)[r],
        a = t === C.Yn.STREAM ? p.Z.getHostname(p.Z.getActiveStreamKey()) : c.Z.getHostname();
    return {
        hidePersonalInformation: h.Z.hidePersonalInformation,
        transport: null != n ? n.transport : null,
        mediaSessionId: c.Z.getMediaSessionId(),
        hostname: f.Z.getShortHostname(a)
    };
})(j);
