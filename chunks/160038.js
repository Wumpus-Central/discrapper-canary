n.d(t, { Z: () => N }), n(388685), n(49124);
var l = n(200651),
    r = n(192379),
    i = n(120356),
    a = n.n(i),
    o = n(46973),
    s = n(481060),
    u = n(304680),
    c = n(706619),
    d = n(695346),
    f = n(131951),
    h = n(626135),
    g = n(572004),
    p = n(63063),
    y = n(476221),
    O = n(981631),
    m = n(65154),
    v = n(388032),
    E = n(684680);
let b = () => {
        f.Z.getMediaEngine().once(o.aB.ConnectionStats, (e) => {
            let t = JSON.stringify(
                Object.values(m.Yn)
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
                            (null == e || null == (l = e.transport) ? void 0 : l.localAddress) != null && (e.transport.localAddress = '(redacted)');
                        }
                        return n;
                    })
                    .filter((e) => e.length > 0),
                null,
                2
            );
            (0, g.JG)(t, () => (0, s.showToast)((0, s.createToast)(v.intl.string(v.t['t5VZ8/']), s.ToastType.SUCCESS)));
        });
    },
    N = function (e) {
        (0, r.useEffect)(() => {
            h.default.track(O.rMx.OPEN_POPOUT, { type: 'RTC Connection' });
        }, []);
        let t = (0, r.useCallback)(() => {
                let { closePopout: t } = e;
                null != t && t(), u.bA();
            }, [e]),
            n = (0, r.useCallback)(() => {
                let { hostname: t, averagePing: n, lastPing: i, outboundLossRate: o } = e,
                    s = d.Sb.getSetting();
                return (0, l.jsxs)(r.Fragment, {
                    children: [
                        s &&
                            (0, l.jsxs)('div', {
                                children: [
                                    (0, l.jsx)('div', {
                                        className: E.graphContainer,
                                        children: (0, l.jsx)(c.Z, {
                                            dataPoints: e.pings,
                                            width: 258,
                                            height: 80
                                        })
                                    }),
                                    (0, l.jsx)('div', {
                                        className: E.popoutText,
                                        children: (0, l.jsx)('strong', { children: y.Z.getShortHostname(t) })
                                    })
                                ]
                            }),
                        (0, l.jsx)('div', {
                            className: E.popoutText,
                            children: v.intl.format(v.t['X58/lJ'], { averagePing: n.toFixed(0) })
                        }),
                        null != i
                            ? (0, l.jsx)('div', {
                                  className: E.popoutText,
                                  children: v.intl.format(v.t['6iv2TE'], { lastPing: i.toFixed(0) })
                              })
                            : null,
                        null != o
                            ? (0, l.jsx)('div', {
                                  className: E.popoutText,
                                  children: v.intl.format(v.t.VIBJMz, { outboundLossRate: o.toFixed(1) })
                              })
                            : null,
                        (0, l.jsxs)('div', {
                            className: a()(E.popoutText, E.popoutTextDetails),
                            children: [
                                null == o ? v.intl.formatToPlainString(v.t.vggaMj, { badPing: 250 }) : null,
                                null != o
                                    ? v.intl.formatToPlainString(v.t['3pFz1N'], {
                                          badPing: 250,
                                          badLossRate: 10
                                      })
                                    : null
                            ]
                        })
                    ]
                });
            }, [e]),
            { connectionState: i, connectionTypeText: o } = e,
            g = d.Sb.getSetting(),
            N = {
                [O.hes.AWAITING_ENDPOINT]: v.intl.format(v.t.Eu2vUV, { url: O.yXt.STATUS }),
                [O.hes.CONNECTING]: v.intl.string(v.t['y+E8aG']),
                [O.hes.AUTHENTICATING]: v.intl.string(v.t['5lGIZG']),
                [O.hes.DISCONNECTED]: v.intl.string(v.t.fOX25O),
                [O.hes.RTC_CONNECTING]: v.intl.string(v.t.b5Ubd3),
                [O.hes.ICE_CHECKING]: v.intl.format(v.t.SyoYUV, { url: p.Z.getArticleURL(O.BhN.VOICE_CONNECTION_ERRORS) }),
                [O.hes.DTLS_CONNECTING]: v.intl.format(v.t.SyoYUV, { url: p.Z.getArticleURL(O.BhN.VOICE_CONNECTION_ERRORS) }),
                [O.hes.RTC_CONNECTED]: n,
                [O.hes.NO_ROUTE]: v.intl.format(v.t['2tgQnp'], { url: p.Z.getArticleURL(O.BhN.VOICE_CONNECTION_ERRORS) }),
                [O.hes.RTC_DISCONNECTED]: v.intl.string(v.t.fOX25O)
            }[i];
        return (0, l.jsxs)(l.Fragment, {
            children: [
                'function' == typeof N
                    ? N()
                    : (0, l.jsx)('p', {
                          className: a()(E.popoutText, E.popoutTextDetails),
                          children: N
                      }),
                (0, l.jsx)('hr', { className: E.separator }),
                (0, l.jsxs)('div', {
                    className: E.popoutBottom,
                    children: [
                        (0, l.jsxs)('span', {
                            className: a()(E.secured, E.textWithIcon),
                            children: [
                                (0, l.jsx)(s.mBM, {
                                    size: 'xxs',
                                    color: s.TVs.colors.TEXT_POSITIVE.css,
                                    className: E.__invalid_icon
                                }),
                                o
                            ]
                        }),
                        g &&
                            f.Z.supports(m.AN.DIAGNOSTICS) &&
                            !__OVERLAY__ &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsxs)(s.eee, {
                                        className: a()(E.debugButton, E.textWithIcon),
                                        onClick: t,
                                        children: [
                                            v.intl.string(v.t.KBoWg4),
                                            (0, l.jsx)(s.rgF, {
                                                size: 'xxs',
                                                color: 'currentColor',
                                                className: E.__invalid_icon
                                            })
                                        ]
                                    }),
                                    (0, l.jsxs)(s.eee, {
                                        className: a()(E.copyStatsButton, E.textWithIcon),
                                        onClick: b,
                                        title: 'Copy to clipboard',
                                        children: [
                                            v.intl.string(v.t['XEb+Sk']),
                                            (0, l.jsx)(s.TIy, {
                                                size: 'xxs',
                                                color: 'currentColor',
                                                className: E.__invalid_icon
                                            })
                                        ]
                                    })
                                ]
                            }),
                        !g &&
                            !__OVERLAY__ &&
                            (0, l.jsx)(s.eee, {
                                className: E.debugButton,
                                href: p.Z.getArticleURL(O.BhN.VOICE_VIDEO_TROUBLESHOOTING),
                                children: v.intl.string(v.t.hvVgAQ)
                            })
                    ]
                })
            ]
        });
    };
