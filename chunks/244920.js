n.d(t, { A: () => F }), n(134528), n(947204);
var r = n(627968),
    a = n(64700),
    i = n(735438),
    l = n.n(i),
    s = n(311907),
    o = n(397927),
    d = n(235986),
    c = n(383501),
    u = n(412780),
    m = n(967198),
    p = n(162605),
    y = n(351906),
    h = n(287809),
    g = n(562153),
    A = n(917592),
    f = n(828904),
    v = n(522278),
    b = n(974175),
    C = n(731854),
    E = n(985018),
    x = n(518959),
    D = n(473169);
class R extends a.PureComponent {
    render() {
        var e, t;
        let { transport: n, mediaSessionId: a, hidePersonalInformation: i, hostname: s } = this.props;
        if (null == n) return (0, r.jsx)(o.y$y, { type: o.y$y.Type.SPINNING_CIRCLE });
        let c =
                ((e = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, n)),
                (t = t = { hostname: s }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(t)).forEach(function (n) {
                          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                      }),
                e),
            u = l().map(c, (e, t) => {
                if ("receiverReports" !== t && (!i || "localAddress" !== t))
                    return (0, r.jsx)(
                        b.q7,
                        {
                            label: t,
                            value: e,
                        },
                        t,
                    );
            }),
            p = l().map(c.receiverReports, (e) => {
                let t = Array.isArray(e.bitrate) ? (null == (r = e.bitrate.at(-1)) ? void 0 : r.value) : e.bitrate,
                    n = h.default.getUser(e.id);
                var r,
                    a = g.Ay.getNickname(m.A.getGuildId(), void 0, n);
                return (
                    null == a && (a = null != n ? n.username : e.id),
                    {
                        displayName: a,
                        bitrate: t / 1000,
                        lost: (100 * e.fractionLost) / 256,
                    }
                );
            }),
            y = l().sortBy(p, (e) => e.displayName),
            A = l().map(y, (e) => {
                var t, n, a;
                let i, l;
                return (
                    (t = e.displayName),
                    (n = e.bitrate),
                    (a = e.lost),
                    (i = (0, r.jsxs)(d.A, {
                        id: "bitrate-".concat(t),
                        justify: d.A.Justify.BETWEEN,
                        children: [
                            (0, r.jsx)("span", { children: "Bitrate:" }),
                            (0, r.jsxs)("span", {
                                children: [n.toFixed(2), " Kbps"],
                            }),
                        ],
                    })),
                    (l = (0, r.jsxs)(d.A, {
                        id: "lost-".concat(t),
                        justify: d.A.Justify.BETWEEN,
                        children: [
                            (0, r.jsx)("span", { children: "Packet Loss:" }),
                            (0, r.jsxs)("span", {
                                children: [a.toFixed(0), "%"],
                            }),
                        ],
                    })),
                    (0, r.jsx)(
                        v.A,
                        {
                            label: t,
                            valueRendered: [i, l],
                            children: t,
                        },
                        t,
                    )
                );
            });
        return (0, r.jsxs)(o.BJc, {
            className: x._8,
            children: [
                (0, r.jsx)(o.Heading, {
                    variant: "heading-md/medium",
                    children: E.intl.string(E.t.wU9IN2) + (null != a ? " - " + a : ""),
                }),
                (0, f.C6)(u),
                0 === A.length ? null : (0, r.jsx)(o.cGx, { className: D.SX }),
                (0, f.C6)(A),
            ],
        });
    }
}
let F = s.Ay.connectStores([u.Ay, c.A, y.A, p.A], (e) => {
    var t;
    let { context: n, index: r } = e,
        a = u.Ay.getAllStats(n)[r],
        i =
            n === C.x.STREAM
                ? Object.values(p.A.getRTCConnections()).find(
                      (e) => e.getMediaEngineConnectionId() === a.mediaEngineConnectionId,
                  )
                : null,
        l = null != (t = null == i ? void 0 : i.hostname) ? t : "";
    return {
        hidePersonalInformation: y.A.hidePersonalInformation,
        transport: null != a ? a.transport : null,
        mediaSessionId: c.A.getMediaSessionId(),
        hostname: A.A.getShortHostname(l),
    };
})(R);
