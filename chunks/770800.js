n.d(t, { Z: () => N }), n(571269), n(298267);
var r = n(200651),
    a = n(192379),
    i = n(392711),
    o = n.n(i),
    l = n(442837),
    s = n(481060),
    d = n(600164),
    c = n(19780),
    u = n(226961),
    m = n(914010),
    p = n(959457),
    h = n(246946),
    g = n(594174),
    b = n(5192),
    y = n(476221),
    f = n(481250),
    v = n(206314),
    C = n(513547),
    R = n(65154),
    D = n(388032),
    S = n(316095),
    E = n(483938);
class Z extends a.PureComponent {
    render() {
        let { transport: e, mediaSessionId: t, hidePersonalInformation: n, hostname: a } = this.props;
        if (null == e) return (0, r.jsx)(s.$jN, { type: s.$jN.Type.SPINNING_CIRCLE });
        let i = {
                ...e,
                hostname: a
            },
            l = o().map(i, (e, t) => {
                if ('receiverReports' !== t && (!n || 'localAddress' !== t))
                    return (0, r.jsx)(
                        C.ck,
                        {
                            label: t,
                            value: e
                        },
                        t
                    );
            }),
            c = o().map(i.receiverReports, (e) => {
                let t = Array.isArray(e.bitrate) ? (null === (r = e.bitrate.at(-1)) || void 0 === r ? void 0 : r.value) : e.bitrate,
                    n = g.default.getUser(e.id);
                var r,
                    a = b.ZP.getNickname(m.Z.getGuildId(), void 0, n);
                return (
                    null == a && (a = null != n ? n.username : e.id),
                    {
                        displayName: a,
                        bitrate: t / 1000,
                        lost: (100 * e.fractionLost) / 256
                    }
                );
            }),
            u = o().sortBy(c, (e) => e.displayName),
            p = o().map(u, (e) =>
                (function (e, t, n) {
                    let a = (0, r.jsxs)(d.Z, {
                            id: 'bitrate-'.concat(e),
                            justify: d.Z.Justify.BETWEEN,
                            children: [
                                (0, r.jsx)('span', { children: 'Bitrate:' }),
                                (0, r.jsxs)('span', {
                                    children: [t.toFixed(2), ' Kbps']
                                })
                            ]
                        }),
                        i = (0, r.jsxs)(d.Z, {
                            id: 'lost-'.concat(e),
                            justify: d.Z.Justify.BETWEEN,
                            children: [
                                (0, r.jsx)('span', { children: 'Packet Loss:' }),
                                (0, r.jsxs)('span', {
                                    children: [n.toFixed(0), '%']
                                })
                            ]
                        });
                    return (0, r.jsx)(
                        v.Z,
                        {
                            label: e,
                            valueRendered: [a, i],
                            children: e
                        },
                        e
                    );
                })(e.displayName, e.bitrate, e.lost)
            );
        return (0, r.jsxs)(s.hjN, {
            tag: s.RB0.H2,
            title: D.intl.string(D.t.wU9INz) + (null != t ? ' - ' + t : ''),
            className: S.allowSelection,
            children: [(0, f.a)(l), 0 === p.length ? null : (0, r.jsx)(s.$i$, { className: E.marginBottom20 }), (0, f.a)(p)]
        });
    }
}
let N = l.ZP.connectStores([u.ZP, c.Z, h.Z, p.Z], (e) => {
    let { context: t, index: n } = e,
        r = u.ZP.getAllStats(t)[n],
        a = t === R.Yn.STREAM ? p.Z.getHostname(p.Z.getActiveStreamKey()) : c.Z.getHostname();
    return {
        hidePersonalInformation: h.Z.hidePersonalInformation,
        transport: null != r ? r.transport : null,
        mediaSessionId: c.Z.getMediaSessionId(),
        hostname: y.Z.getShortHostname(a)
    };
})(Z);
