r(571269), r(298267);
var n = r(200651),
    a = r(192379),
    i = r(392711),
    l = r.n(i),
    s = r(442837),
    o = r(481060),
    c = r(600164),
    d = r(19780),
    u = r(226961),
    m = r(914010),
    p = r(959457),
    h = r(246946),
    g = r(594174),
    f = r(5192),
    y = r(476221),
    v = r(481250),
    D = r(206314),
    F = r(513547),
    S = r(65154),
    C = r(388032),
    E = r(378481),
    Z = r(232186);
class R extends a.PureComponent {
    render() {
        let { transport: e, mediaSessionId: t, hidePersonalInformation: r, hostname: a } = this.props;
        if (null == e) return (0, n.jsx)(o.Spinner, { type: o.Spinner.Type.SPINNING_CIRCLE });
        let i = {
                ...e,
                hostname: a
            },
            s = l().map(i, (e, t) => {
                if ('receiverReports' !== t && (!r || 'localAddress' !== t))
                    return (0, n.jsx)(
                        F.ck,
                        {
                            label: t,
                            value: e
                        },
                        t
                    );
            }),
            d = l().map(i.receiverReports, (e) => {
                let t = Array.isArray(e.bitrate) ? (null === (n = e.bitrate.at(-1)) || void 0 === n ? void 0 : n.value) : e.bitrate,
                    r = g.default.getUser(e.id);
                var n,
                    a = f.ZP.getNickname(m.Z.getGuildId(), void 0, r);
                return (
                    null == a && (a = null != r ? r.username : e.id),
                    {
                        displayName: a,
                        bitrate: t / 1000,
                        lost: (100 * e.fractionLost) / 256
                    }
                );
            }),
            u = l().sortBy(d, (e) => e.displayName),
            p = l().map(u, (e) =>
                (function (e, t, r) {
                    let a = (0, n.jsxs)(c.Z, {
                            id: 'bitrate-'.concat(e),
                            justify: c.Z.Justify.BETWEEN,
                            children: [
                                (0, n.jsx)('span', { children: 'Bitrate:' }),
                                (0, n.jsxs)('span', {
                                    children: [t.toFixed(2), ' Kbps']
                                })
                            ]
                        }),
                        i = (0, n.jsxs)(c.Z, {
                            id: 'lost-'.concat(e),
                            justify: c.Z.Justify.BETWEEN,
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
        return (0, n.jsxs)(o.FormSection, {
            tag: o.FormTitleTags.H2,
            title: C.intl.string(C.t.wU9INz) + (null != t ? ' - ' + t : ''),
            className: E.allowSelection,
            children: [(0, v.a)(s), 0 === p.length ? null : (0, n.jsx)(o.FormDivider, { className: Z.marginBottom20 }), (0, v.a)(p)]
        });
    }
}
t.Z = s.ZP.connectStores([u.ZP, d.Z, h.Z, p.Z], (e) => {
    let { context: t, index: r } = e,
        n = u.ZP.getAllStats(t)[r],
        a = t === S.Yn.STREAM ? p.Z.getHostname(p.Z.getActiveStreamKey()) : d.Z.getHostname();
    return {
        hidePersonalInformation: h.Z.hidePersonalInformation,
        transport: null != n ? n.transport : null,
        mediaSessionId: d.Z.getMediaSessionId(),
        hostname: y.Z.getShortHostname(a)
    };
})(R);
