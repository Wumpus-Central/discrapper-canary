n.d(t, { Z: () => E }), n(388685), n(49124);
var r = n(951288),
    l = n(647438),
    s = n(120356),
    i = n.n(s),
    a = n(46973),
    o = n(481060),
    c = n(304680),
    u = n(706619),
    d = n(695346),
    h = n(131951),
    f = n(626135),
    g = n(572004),
    p = n(63063),
    O = n(476221),
    y = n(981631),
    x = n(65154),
    b = n(388032),
    N = n(827297);
let m = () => {
        h.Z.getMediaEngine().once(a.aB.ConnectionStats, (e) => {
            let t = JSON.stringify(
                Object.values(x.Yn)
                    .map((t) => {
                        let n = e
                            .filter((e) => {
                                let { connection: n } = e;
                                return n.context === t;
                            })
                            .map((e, n) => {
                                let r = e.stats;
                                return (r.context = t), (r.index = n), r;
                            });
                        for (let e of n) {
                            var r;
                            (null == e || null == (r = e.transport) ? void 0 : r.localAddress) != null &&
                                (e.transport.localAddress = "(redacted)");
                        }
                        return n;
                    })
                    .filter((e) => e.length > 0),
                null,
                2,
            );
            (0, g.JG)(t, () => (0, o.showToast)((0, o.createToast)(b.intl.string(b.t["t5VZ8/"]), o.ToastType.SUCCESS)));
        });
    },
    E = function (e) {
        (0, l.useEffect)(() => {
            f.default.track(y.rMx.OPEN_POPOUT, { type: "RTC Connection" });
        }, []);
        let t = (0, l.useCallback)(() => {
                let { closePopout: t } = e;
                null != t && t(), c.bA();
            }, [e]),
            n = (0, l.useCallback)(() => {
                let { hostname: t, averagePing: n, lastPing: s, outboundLossRate: a } = e,
                    o = d.Sb.getSetting();
                return (0, r.jsxs)(l.Fragment, {
                    children: [
                        o &&
                            (0, r.jsxs)("div", {
                                children: [
                                    (0, r.jsx)("div", {
                                        className: N.graphContainer,
                                        children: (0, r.jsx)(u.Z, {
                                            dataPoints: e.pings,
                                            width: 258,
                                            height: 80,
                                        }),
                                    }),
                                    (0, r.jsx)("div", {
                                        className: N.popoutText,
                                        children: (0, r.jsx)("strong", { children: O.Z.getShortHostname(t) }),
                                    }),
                                ],
                            }),
                        (0, r.jsx)("div", {
                            className: N.popoutText,
                            children: b.intl.format(b.t["X58/lJ"], { averagePing: n.toFixed(0) }),
                        }),
                        null != s
                            ? (0, r.jsx)("div", {
                                  className: N.popoutText,
                                  children: b.intl.format(b.t["6iv2TE"], { lastPing: s.toFixed(0) }),
                              })
                            : null,
                        null != a
                            ? (0, r.jsx)("div", {
                                  className: N.popoutText,
                                  children: b.intl.format(b.t.VIBJMz, { outboundLossRate: a.toFixed(1) }),
                              })
                            : null,
                        (0, r.jsxs)("div", {
                            className: i()(N.popoutText, N.popoutTextDetails),
                            children: [
                                null == a ? b.intl.formatToPlainString(b.t.vggaMj, { badPing: 250 }) : null,
                                null != a
                                    ? b.intl.formatToPlainString(b.t["3pFz1N"], {
                                          badPing: 250,
                                          badLossRate: 10,
                                      })
                                    : null,
                            ],
                        }),
                    ],
                });
            }, [e]),
            { connectionState: s, connectionTypeText: a } = e,
            g = d.Sb.getSetting(),
            E = {
                [y.hes.AWAITING_ENDPOINT]: b.intl.format(b.t.Eu2vUV, { url: y.yXt.STATUS }),
                [y.hes.CONNECTING]: b.intl.string(b.t["y+E8aG"]),
                [y.hes.AUTHENTICATING]: b.intl.string(b.t["5lGIZG"]),
                [y.hes.DISCONNECTED]: b.intl.string(b.t.fOX25O),
                [y.hes.RTC_CONNECTING]: b.intl.string(b.t.b5Ubd3),
                [y.hes.ICE_CHECKING]: b.intl.format(b.t.SyoYUV, {
                    url: p.Z.getArticleURL(y.BhN.VOICE_CONNECTION_ERRORS),
                }),
                [y.hes.DTLS_CONNECTING]: b.intl.format(b.t.SyoYUV, {
                    url: p.Z.getArticleURL(y.BhN.VOICE_CONNECTION_ERRORS),
                }),
                [y.hes.RTC_CONNECTED]: n,
                [y.hes.NO_ROUTE]: b.intl.format(b.t["2tgQnp"], {
                    url: p.Z.getArticleURL(y.BhN.VOICE_CONNECTION_ERRORS),
                }),
                [y.hes.RTC_DISCONNECTED]: b.intl.string(b.t.fOX25O),
            }[s];
        return (0, r.jsxs)(r.Fragment, {
            children: [
                "function" == typeof E
                    ? E()
                    : (0, r.jsx)("p", {
                          className: i()(N.popoutText, N.popoutTextDetails),
                          children: E,
                      }),
                (0, r.jsx)("hr", { className: N.separator }),
                (0, r.jsxs)("div", {
                    className: N.popoutBottom,
                    children: [
                        (0, r.jsxs)("span", {
                            className: i()(N.secured, N.textWithIcon),
                            children: [
                                (0, r.jsx)(o.mBM, {
                                    size: "xxs",
                                    color: o.TVs.colors.TEXT_FEEDBACK_POSITIVE.css,
                                    className: N.__invalid_icon,
                                }),
                                a,
                            ],
                        }),
                        g &&
                            h.Z.supports(x.AN.DIAGNOSTICS) &&
                            !__OVERLAY__ &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsxs)(o.eee, {
                                        className: i()(N.debugButton, N.textWithIcon),
                                        onClick: t,
                                        children: [
                                            b.intl.string(b.t.KBoWg4),
                                            (0, r.jsx)(o.rgF, {
                                                size: "xxs",
                                                color: "currentColor",
                                                className: N.__invalid_icon,
                                            }),
                                        ],
                                    }),
                                    (0, r.jsxs)(o.eee, {
                                        className: i()(N.copyStatsButton, N.textWithIcon),
                                        onClick: m,
                                        title: "Copy to clipboard",
                                        children: [
                                            b.intl.string(b.t["XEb+Sk"]),
                                            (0, r.jsx)(o.TIy, {
                                                size: "xxs",
                                                color: "currentColor",
                                                className: N.__invalid_icon,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        !g &&
                            !__OVERLAY__ &&
                            (0, r.jsx)(o.eee, {
                                className: N.debugButton,
                                href: p.Z.getArticleURL(y.BhN.VOICE_VIDEO_TROUBLESHOOTING),
                                children: b.intl.string(b.t.hvVgAQ),
                            }),
                    ],
                }),
            ],
        });
    };
