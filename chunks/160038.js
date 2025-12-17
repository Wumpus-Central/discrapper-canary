n.d(t, { Z: () => _ }), n(388685), n(49124);
var l = n(54381),
    i = n(473749),
    r = n(120356),
    a = n.n(r),
    o = n(46973),
    s = n(481060),
    u = n(304680),
    c = n(706619),
    d = n(695346),
    f = n(131951),
    g = n(626135),
    h = n(572004),
    p = n(63063),
    E = n(476221),
    N = n(981631),
    O = n(65154),
    y = n(388032),
    C = n(297686);
let T = () => {
        f.Z.getMediaEngine().once(o.aB.ConnectionStats, (e) => {
            let t = JSON.stringify(
                Object.values(O.Yn)
                    .map((t) => {
                        let n = e
                            .filter((e) => {
                                let { connection: n } = e;
                                return n.context === t;
                            })
                            .map((e, n) => {
                                let l = e.stats;
                                return (l.context = t), (l.index = n), l;
                            });
                        for (let e of n) {
                            var l;
                            (null == e || null == (l = e.transport) ? void 0 : l.localAddress) != null &&
                                (e.transport.localAddress = "(redacted)");
                        }
                        return n;
                    })
                    .filter((e) => e.length > 0),
                null,
                2,
            );
            (0, h.JG)(t, () => (0, s.showToast)((0, s.createToast)(y.intl.string(y.t.t5VZ88), s.ToastType.SUCCESS)));
        });
    },
    _ = function (e) {
        (0, i.useEffect)(() => {
            g.default.track(N.rMx.OPEN_POPOUT, { type: "RTC Connection" });
        }, []);
        let t = (0, i.useCallback)(() => {
                let { closePopout: t } = e;
                null != t && t(), u.bA();
            }, [e]),
            n = (0, i.useCallback)(() => {
                let { hostname: t, averagePing: n, lastPing: r, outboundLossRate: o } = e,
                    s = d.Sb.getSetting();
                return (0, l.jsxs)(i.Fragment, {
                    children: [
                        s &&
                            (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsx)("div", {
                                        className: C.graphContainer,
                                        children: (0, l.jsx)(c.Z, {
                                            dataPoints: e.pings,
                                            width: 258,
                                            height: 80,
                                        }),
                                    }),
                                    (0, l.jsx)("div", {
                                        className: C.popoutText,
                                        children: (0, l.jsx)("strong", { children: E.Z.getShortHostname(t) }),
                                    }),
                                ],
                            }),
                        (0, l.jsx)("div", {
                            className: C.popoutText,
                            children: y.intl.format(y.t["X58/lN"], { averagePing: n.toFixed(0) }),
                        }),
                        null != r
                            ? (0, l.jsx)("div", {
                                  className: C.popoutText,
                                  children: y.intl.format(y.t["6iv2TF"], { lastPing: r.toFixed(0) }),
                              })
                            : null,
                        null != o
                            ? (0, l.jsx)("div", {
                                  className: C.popoutText,
                                  children: y.intl.format(y.t["VIBJM+"], { outboundLossRate: o.toFixed(1) }),
                              })
                            : null,
                        (0, l.jsxs)("div", {
                            className: a()(C.popoutText, C.popoutTextDetails),
                            children: [
                                null == o ? y.intl.formatToPlainString(y.t.vggaMt, { badPing: 250 }) : null,
                                null != o
                                    ? y.intl.formatToPlainString(y.t["3pFz1P"], {
                                          badPing: 250,
                                          badLossRate: 10,
                                      })
                                    : null,
                            ],
                        }),
                    ],
                });
            }, [e]),
            { connectionState: r, connectionTypeText: o } = e,
            h = d.Sb.getSetting(),
            _ = {
                [N.hes.AWAITING_ENDPOINT]: y.intl.format(y.t.Eu2vUR, { url: N.yXt.STATUS }),
                [N.hes.CONNECTING]: y.intl.string(y.t["y+E8aD"]),
                [N.hes.AUTHENTICATING]: y.intl.string(y.t["5lGIZH"]),
                [N.hes.DISCONNECTED]: y.intl.string(y.t.fOX25I),
                [N.hes.RTC_CONNECTING]: y.intl.string(y.t.b5Ubd5),
                [N.hes.ICE_CHECKING]: y.intl.format(y.t.SyoYUb, {
                    url: p.Z.getArticleURL(N.BhN.VOICE_CONNECTION_ERRORS),
                }),
                [N.hes.DTLS_CONNECTING]: y.intl.format(y.t.SyoYUb, {
                    url: p.Z.getArticleURL(N.BhN.VOICE_CONNECTION_ERRORS),
                }),
                [N.hes.RTC_CONNECTED]: n,
                [N.hes.NO_ROUTE]: y.intl.format(y.t["2tgQnk"], {
                    url: p.Z.getArticleURL(N.BhN.VOICE_CONNECTION_ERRORS),
                }),
                [N.hes.RTC_DISCONNECTED]: y.intl.string(y.t.fOX25I),
            }[r];
        return (0, l.jsxs)(l.Fragment, {
            children: [
                "function" == typeof _
                    ? _()
                    : (0, l.jsx)("p", {
                          className: a()(C.popoutText, C.popoutTextDetails),
                          children: _,
                      }),
                (0, l.jsx)("hr", { className: C.separator }),
                (0, l.jsxs)("div", {
                    className: C.popoutBottom,
                    children: [
                        (0, l.jsxs)("span", {
                            className: a()(C.secured, C.textWithIcon),
                            children: [
                                (0, l.jsx)(s.mBM, {
                                    size: "xxs",
                                    color: s.TVs.colors.TEXT_FEEDBACK_POSITIVE.css,
                                    className: C.__invalid_icon,
                                }),
                                o,
                            ],
                        }),
                        h &&
                            f.Z.supports(O.AN.DIAGNOSTICS) &&
                            !__OVERLAY__ &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsxs)(s.Anchor, {
                                        className: a()(C.debugButton, C.textWithIcon),
                                        onClick: t,
                                        children: [
                                            y.intl.string(y.t.KBoWg9),
                                            (0, l.jsx)(s.rgF, {
                                                size: "xxs",
                                                color: "currentColor",
                                                className: C.__invalid_icon,
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)(s.Anchor, {
                                        className: a()(C.copyStatsButton, C.textWithIcon),
                                        onClick: T,
                                        title: "Copy to clipboard",
                                        children: [
                                            y.intl.string(y.t["XEb+Sj"]),
                                            (0, l.jsx)(s.TIy, {
                                                size: "xxs",
                                                color: "currentColor",
                                                className: C.__invalid_icon,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        !h &&
                            !__OVERLAY__ &&
                            (0, l.jsx)(s.Anchor, {
                                className: C.debugButton,
                                href: p.Z.getArticleURL(N.BhN.VOICE_VIDEO_TROUBLESHOOTING),
                                children: y.intl.string(y.t.hvVgAZ),
                            }),
                    ],
                }),
            ],
        });
    };
