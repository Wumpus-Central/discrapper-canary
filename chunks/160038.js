(n.d(t, { Z: () => m }), n(388685), n(49124));
var r = n(255367),
    l = n(73800),
    i = n(120356),
    o = n.n(i),
    s = n(46973),
    a = n(481060),
    c = n(304680),
    u = n(706619),
    d = n(695346),
    h = n(131951),
    f = n(626135),
    p = n(572004),
    g = n(63063),
    O = n(476221),
    N = n(981631),
    y = n(65154),
    b = n(388032),
    x = n(684680);
let E = () => {
        h.Z.getMediaEngine().once(s.aB.ConnectionStats, (e) => {
            let t = JSON.stringify(
                Object.values(y.Yn)
                    .map((t) => {
                        let n = e
                            .filter((e) => {
                                let { connection: n } = e;
                                return n.context === t;
                            })
                            .map((e, n) => {
                                let r = e.stats;
                                return ((r.context = t), (r.index = n), r);
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
            (0, p.JG)(t, () => (0, a.showToast)((0, a.createToast)(b.intl.string(b.t['t5VZ8/']), a.ToastType.SUCCESS)));
        });
    },
    m = function (e) {
        (0, l.useEffect)(() => {
            f.default.track(N.rMx.OPEN_POPOUT, { type: 'RTC Connection' });
        }, []);
        let t = (0, l.useCallback)(() => {
                let { closePopout: t } = e;
                (null != t && t(), c.bA());
            }, [e]),
            n = (0, l.useCallback)(() => {
                let { hostname: t, averagePing: n, lastPing: i, outboundLossRate: s } = e,
                    a = d.Sb.getSetting();
                return (0, r.jsxs)(l.Fragment, {
                    children: [
                        a &&
                            (0, r.jsxs)('div', {
                                children: [
                                    (0, r.jsx)('div', {
                                        className: x.graphContainer,
                                        children: (0, r.jsx)(u.Z, {
                                            dataPoints: e.pings,
                                            width: 258,
                                            height: 80
                                        })
                                    }),
                                    (0, r.jsx)('div', {
                                        className: x.popoutText,
                                        children: (0, r.jsx)('strong', { children: O.Z.getShortHostname(t) })
                                    })
                                ]
                            }),
                        (0, r.jsx)('div', {
                            className: x.popoutText,
                            children: b.intl.format(b.t['X58/lJ'], { averagePing: n.toFixed(0) })
                        }),
                        null != i
                            ? (0, r.jsx)('div', {
                                  className: x.popoutText,
                                  children: b.intl.format(b.t['6iv2TE'], { lastPing: i.toFixed(0) })
                              })
                            : null,
                        null != s
                            ? (0, r.jsx)('div', {
                                  className: x.popoutText,
                                  children: b.intl.format(b.t.VIBJMz, { outboundLossRate: s.toFixed(1) })
                              })
                            : null,
                        (0, r.jsxs)('div', {
                            className: o()(x.popoutText, x.popoutTextDetails),
                            children: [
                                null == s ? b.intl.formatToPlainString(b.t.vggaMj, { badPing: 250 }) : null,
                                null != s
                                    ? b.intl.formatToPlainString(b.t['3pFz1N'], {
                                          badPing: 250,
                                          badLossRate: 10
                                      })
                                    : null
                            ]
                        })
                    ]
                });
            }, [e]),
            { connectionState: i, connectionTypeText: s } = e,
            p = d.Sb.getSetting(),
            m = {
                [N.hes.AWAITING_ENDPOINT]: b.intl.format(b.t.Eu2vUV, { url: N.yXt.STATUS }),
                [N.hes.CONNECTING]: b.intl.string(b.t['y+E8aG']),
                [N.hes.AUTHENTICATING]: b.intl.string(b.t['5lGIZG']),
                [N.hes.DISCONNECTED]: b.intl.string(b.t.fOX25O),
                [N.hes.RTC_CONNECTING]: b.intl.string(b.t.b5Ubd3),
                [N.hes.ICE_CHECKING]: b.intl.format(b.t.SyoYUV, { url: g.Z.getArticleURL(N.BhN.VOICE_CONNECTION_ERRORS) }),
                [N.hes.DTLS_CONNECTING]: b.intl.format(b.t.SyoYUV, { url: g.Z.getArticleURL(N.BhN.VOICE_CONNECTION_ERRORS) }),
                [N.hes.RTC_CONNECTED]: n,
                [N.hes.NO_ROUTE]: b.intl.format(b.t['2tgQnp'], { url: g.Z.getArticleURL(N.BhN.VOICE_CONNECTION_ERRORS) }),
                [N.hes.RTC_DISCONNECTED]: b.intl.string(b.t.fOX25O)
            }[i];
        return (0, r.jsxs)(r.Fragment, {
            children: [
                'function' == typeof m
                    ? m()
                    : (0, r.jsx)('p', {
                          className: o()(x.popoutText, x.popoutTextDetails),
                          children: m
                      }),
                (0, r.jsx)('hr', { className: x.separator }),
                (0, r.jsxs)('div', {
                    className: x.popoutBottom,
                    children: [
                        (0, r.jsxs)('span', {
                            className: o()(x.secured, x.textWithIcon),
                            children: [
                                (0, r.jsx)(a.mBM, {
                                    size: 'xxs',
                                    color: a.TVs.colors.TEXT_FEEDBACK_POSITIVE.css,
                                    className: x.__invalid_icon
                                }),
                                s
                            ]
                        }),
                        p &&
                            h.Z.supports(y.AN.DIAGNOSTICS) &&
                            !__OVERLAY__ &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsxs)(a.eee, {
                                        className: o()(x.debugButton, x.textWithIcon),
                                        onClick: t,
                                        children: [
                                            b.intl.string(b.t.KBoWg4),
                                            (0, r.jsx)(a.rgF, {
                                                size: 'xxs',
                                                color: 'currentColor',
                                                className: x.__invalid_icon
                                            })
                                        ]
                                    }),
                                    (0, r.jsxs)(a.eee, {
                                        className: o()(x.copyStatsButton, x.textWithIcon),
                                        onClick: E,
                                        title: 'Copy to clipboard',
                                        children: [
                                            b.intl.string(b.t['XEb+Sk']),
                                            (0, r.jsx)(a.TIy, {
                                                size: 'xxs',
                                                color: 'currentColor',
                                                className: x.__invalid_icon
                                            })
                                        ]
                                    })
                                ]
                            }),
                        !p &&
                            !__OVERLAY__ &&
                            (0, r.jsx)(a.eee, {
                                className: x.debugButton,
                                href: g.Z.getArticleURL(N.BhN.VOICE_VIDEO_TROUBLESHOOTING),
                                children: b.intl.string(b.t.hvVgAQ)
                            })
                    ]
                })
            ]
        });
    };
