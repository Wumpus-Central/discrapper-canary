r.d(t, { Z: () => P }), r(571269), r(298267);
var n = r(200651),
    a = r(192379),
    i = r(392711),
    s = r.n(i),
    l = r(442837),
    o = r(481060),
    c = r(600164),
    d = r(19780),
    u = r(226961),
    m = r(914010),
    p = r(959457),
    h = r(246946),
    y = r(594174),
    g = r(5192),
    f = r(476221),
    v = r(481250),
    D = r(206314),
    N = r(513547),
    b = r(65154),
    E = r(388032),
    j = r(687366),
    C = r(455812);
class Z extends a.PureComponent {
    render() {
        var e, t;
        let { transport: r, mediaSessionId: a, hidePersonalInformation: i, hostname: l } = this.props;
        if (null == r) return (0, n.jsx)(o.$jN, { type: o.$jN.Type.SPINNING_CIRCLE });
        let d =
                ((e = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (n = n.concat(
                                Object.getOwnPropertySymbols(r).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                })
                            )),
                            n.forEach(function (t) {
                                var n;
                                (n = r[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: n,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = n);
                            });
                    }
                    return e;
                })({}, r)),
                (t = t = { hostname: l }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                    : (function (e, t) {
                          var r = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var n = Object.getOwnPropertySymbols(e);
                              r.push.apply(r, n);
                          }
                          return r;
                      })(Object(t)).forEach(function (r) {
                          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                      }),
                e),
            u = s().map(d, (e, t) => {
                if ('receiverReports' !== t && (!i || 'localAddress' !== t))
                    return (0, n.jsx)(
                        N.ck,
                        {
                            label: t,
                            value: e
                        },
                        t
                    );
            }),
            p = s().map(d.receiverReports, (e) => {
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
            h = s().sortBy(p, (e) => e.displayName),
            f = s().map(h, (e) =>
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
        return (0, n.jsxs)(o.hjN, {
            tag: o.RB0.H2,
            title: E.NW.string(E.t.wU9INz) + (null != a ? ' - ' + a : ''),
            className: j.allowSelection,
            children: [(0, v.a)(u), 0 === f.length ? null : (0, n.jsx)(o.$i$, { className: C.marginBottom20 }), (0, v.a)(f)]
        });
    }
}
let P = l.ZP.connectStores([u.ZP, d.Z, h.Z, p.Z], (e) => {
    let { context: t, index: r } = e,
        n = u.ZP.getAllStats(t)[r],
        a = t === b.Yn.STREAM ? p.Z.getHostname(p.Z.getActiveStreamKey()) : d.Z.getHostname();
    return {
        hidePersonalInformation: h.Z.hidePersonalInformation,
        transport: null != n ? n.transport : null,
        mediaSessionId: d.Z.getMediaSessionId(),
        hostname: f.Z.getShortHostname(a)
    };
})(Z);
