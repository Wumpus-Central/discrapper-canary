n.d(t, { Z: () => x }), n(388685), n(49124);
var r = n(255367),
    l = n(73800),
    i = n(120356),
    o = n.n(i),
    a = n(46973),
    s = n(481060),
    u = n(304680),
    c = n(706619),
    d = n(695346),
    f = n(131951),
    h = n(626135),
    p = n(572004),
    g = n(63063),
    O = n(476221),
    y = n(981631),
    b = n(65154),
    N = n(388032),
    m = n(684680);
let v = () => {
        f.Z.getMediaEngine().once(a.aB.ConnectionStats, (e) => {
            let t = JSON.stringify(
                Object.values(b.Yn)
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
                            (null == e || null == (r = e.transport) ? void 0 : r.localAddress) != null && (e.transport.localAddress = '(redacted)');
                        }
                        return n;
                    })
                    .filter((e) => e.length > 0),
                null,
                2
            );
            (0, p.JG)(t, () => (0, s.showToast)((0, s.createToast)(N.intl.string(N.t['t5VZ8/']), s.ToastType.SUCCESS)));
        });
    },
    x = function (e) {
        (0, l.useEffect)(() => {
            h.default.track(y.rMx.OPEN_POPOUT, { type: 'RTC Connection' });
        }, []);
        let t = (0, l.useCallback)(() => {
                let { closePopout: t } = e;
                null != t && t(), u.bA();
            }, [e]),
            n = (0, l.useCallback)(() => {
                let { hostname: t, averagePing: n, lastPing: i, outboundLossRate: a } = e,
                    s = d.Sb.getSetting();
                return (0, r.jsxs)(l.Fragment, {
                    children: [
                        s &&
                            (0, r.jsxs)('div', {
                                children: [
                                    (0, r.jsx)('div', {
                                        className: m.graphContainer,
                                        children: (0, r.jsx)(c.Z, {
                                            dataPoints: e.pings,
                                            width: 258,
                                            height: 80
                                        })
                                    }),
                                    (0, r.jsx)('div', {
                                        className: m.popoutText,
                                        children: (0, r.jsx)('strong', { children: O.Z.getShortHostname(t) })
                                    })
                                ]
                            }),
                        (0, r.jsx)('div', {
                            className: m.popoutText,
                            children: N.intl.format(N.t['X58/lJ'], { averagePing: n.toFixed(0) })
                        }),
                        null != i
                            ? (0, r.jsx)('div', {
                                  className: m.popoutText,
                                  children: N.intl.format(N.t['6iv2TE'], { lastPing: i.toFixed(0) })
                              })
                            : null,
                        null != a
                            ? (0, r.jsx)('div', {
                                  className: m.popoutText,
                                  children: N.intl.format(N.t.VIBJMz, { outboundLossRate: a.toFixed(1) })
                              })
                            : null,
                        (0, r.jsxs)('div', {
                            className: o()(m.popoutText, m.popoutTextDetails),
                            children: [
                                null == a ? N.intl.formatToPlainString(N.t.vggaMj, { badPing: 250 }) : null,
                                null != a
                                    ? N.intl.formatToPlainString(N.t['3pFz1N'], {
                                          badPing: 250,
                                          badLossRate: 10
                                      })
                                    : null
                            ]
                        })
                    ]
                });
            }, [e]),
            { connectionState: i, connectionTypeText: a } = e,
            p = d.Sb.getSetting(),
            x = {
                [y.hes.AWAITING_ENDPOINT]: N.intl.format(N.t.Eu2vUV, { url: y.yXt.STATUS }),
                [y.hes.CONNECTING]: N.intl.string(N.t['y+E8aG']),
                [y.hes.AUTHENTICATING]: N.intl.string(N.t['5lGIZG']),
                [y.hes.DISCONNECTED]: N.intl.string(N.t.fOX25O),
                [y.hes.RTC_CONNECTING]: N.intl.string(N.t.b5Ubd3),
                [y.hes.ICE_CHECKING]: N.intl.format(N.t.SyoYUV, { url: g.Z.getArticleURL(y.BhN.VOICE_CONNECTION_ERRORS) }),
                [y.hes.DTLS_CONNECTING]: N.intl.format(N.t.SyoYUV, { url: g.Z.getArticleURL(y.BhN.VOICE_CONNECTION_ERRORS) }),
                [y.hes.RTC_CONNECTED]: n,
                [y.hes.NO_ROUTE]: N.intl.format(N.t['2tgQnp'], { url: g.Z.getArticleURL(y.BhN.VOICE_CONNECTION_ERRORS) }),
                [y.hes.RTC_DISCONNECTED]: N.intl.string(N.t.fOX25O)
            }[i];
        return (0, r.jsxs)(r.Fragment, {
            children: [
                'function' == typeof x
                    ? x()
                    : (0, r.jsx)('p', {
                          className: o()(m.popoutText, m.popoutTextDetails),
                          children: x
                      }),
                (0, r.jsx)('hr', { className: m.separator }),
                (0, r.jsxs)('div', {
                    className: m.popoutBottom,
                    children: [
                        (0, r.jsxs)('span', {
                            className: o()(m.secured, m.textWithIcon),
                            children: [
                                (0, r.jsx)(s.mBM, {
                                    size: 'xxs',
                                    color: s.TVs.colors.TEXT_FEEDBACK_POSITIVE.css,
                                    className: m.__invalid_icon
                                }),
                                a
                            ]
                        }),
                        p &&
                            f.Z.supports(b.AN.DIAGNOSTICS) &&
                            !__OVERLAY__ &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsxs)(s.eee, {
                                        className: o()(m.debugButton, m.textWithIcon),
                                        onClick: t,
                                        children: [
                                            N.intl.string(N.t.KBoWg4),
                                            (0, r.jsx)(s.rgF, {
                                                size: 'xxs',
                                                color: 'currentColor',
                                                className: m.__invalid_icon
                                            })
                                        ]
                                    }),
                                    (0, r.jsxs)(s.eee, {
                                        className: o()(m.copyStatsButton, m.textWithIcon),
                                        onClick: v,
                                        title: 'Copy to clipboard',
                                        children: [
                                            N.intl.string(N.t['XEb+Sk']),
                                            (0, r.jsx)(s.TIy, {
                                                size: 'xxs',
                                                color: 'currentColor',
                                                className: m.__invalid_icon
                                            })
                                        ]
                                    })
                                ]
                            }),
                        !p &&
                            !__OVERLAY__ &&
                            (0, r.jsx)(s.eee, {
                                className: m.debugButton,
                                href: g.Z.getArticleURL(y.BhN.VOICE_VIDEO_TROUBLESHOOTING),
                                children: N.intl.string(N.t.hvVgAQ)
                            })
                    ]
                })
            ]
        });
    };
