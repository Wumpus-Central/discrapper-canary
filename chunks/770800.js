n.d(t, { Z: () => Z }), n(784620), n(973216);
var r = n(951288),
    a = n(647438),
    i = n(392711),
    l = n.n(i),
    o = n(442837),
    s = n(481060),
    c = n(600164),
    d = n(19780),
    u = n(226961),
    m = n(914010),
    p = n(959457),
    h = n(246946),
    f = n(594174),
    y = n(5192),
    g = n(476221),
    v = n(481250),
    E = n(206314),
    b = n(513547),
    D = n(65154),
    P = n(388032),
    j = n(966117),
    x = n(197571);
class C extends a.PureComponent {
    render() {
        var e, t;
        let { transport: n, mediaSessionId: a, hidePersonalInformation: i, hostname: o } = this.props;
        if (null == n) return (0, r.jsx)(s.$jN, { type: s.$jN.Type.SPINNING_CIRCLE });
        let d =
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
                (t = t = { hostname: o }),
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
            u = l().map(d, (e, t) => {
                if ("receiverReports" !== t && (!i || "localAddress" !== t))
                    return (0, r.jsx)(
                        b.ck,
                        {
                            label: t,
                            value: e,
                        },
                        t,
                    );
            }),
            p = l().map(d.receiverReports, (e) => {
                let t = Array.isArray(e.bitrate) ? (null == (r = e.bitrate.at(-1)) ? void 0 : r.value) : e.bitrate,
                    n = f.default.getUser(e.id);
                var r,
                    a = y.ZP.getNickname(m.Z.getGuildId(), void 0, n);
                return (
                    null == a && (a = null != n ? n.username : e.id),
                    {
                        displayName: a,
                        bitrate: t / 1000,
                        lost: (100 * e.fractionLost) / 256,
                    }
                );
            }),
            h = l().sortBy(p, (e) => e.displayName),
            g = l().map(h, (e) =>
                (function (e, t, n) {
                    let a = (0, r.jsxs)(c.Z, {
                            id: "bitrate-".concat(e),
                            justify: c.Z.Justify.BETWEEN,
                            children: [
                                (0, r.jsx)("span", { children: "Bitrate:" }),
                                (0, r.jsxs)("span", {
                                    children: [t.toFixed(2), " Kbps"],
                                }),
                            ],
                        }),
                        i = (0, r.jsxs)(c.Z, {
                            id: "lost-".concat(e),
                            justify: c.Z.Justify.BETWEEN,
                            children: [
                                (0, r.jsx)("span", { children: "Packet Loss:" }),
                                (0, r.jsxs)("span", {
                                    children: [n.toFixed(0), "%"],
                                }),
                            ],
                        });
                    return (0, r.jsx)(
                        E.Z,
                        {
                            label: e,
                            valueRendered: [a, i],
                            children: e,
                        },
                        e,
                    );
                })(e.displayName, e.bitrate, e.lost),
            );
        return (0, r.jsxs)(s.Kqy, {
            className: j.allowSelection,
            children: [
                (0, r.jsx)(s.Heading, {
                    variant: "heading-md/medium",
                    children: P.intl.string(P.t.wU9IN2) + (null != a ? " - " + a : ""),
                }),
                (0, v.VE)(u),
                0 === g.length ? null : (0, r.jsx)(s.izJ, { className: x.marginBottom20 }),
                (0, v.VE)(g),
            ],
        });
    }
}
let Z = o.ZP.connectStores([u.ZP, d.Z, h.Z, p.Z], (e) => {
    var t;
    let { context: n, index: r } = e,
        a = u.ZP.getAllStats(n)[r],
        i =
            n === D.Yn.STREAM
                ? Object.values(p.Z.getRTCConnections()).find(
                      (e) => e.getMediaEngineConnectionId() === a.mediaEngineConnectionId,
                  )
                : null,
        l = null != (t = null == i ? void 0 : i.hostname) ? t : "";
    return {
        hidePersonalInformation: h.Z.hidePersonalInformation,
        transport: null != a ? a.transport : null,
        mediaSessionId: d.Z.getMediaSessionId(),
        hostname: g.Z.getShortHostname(l),
    };
})(C);
