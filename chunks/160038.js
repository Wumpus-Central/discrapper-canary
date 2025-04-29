n.d(t, { Z: () => N }), n(388685), n(49124);
var r = n(255367),
    l = n(73800),
    i = n(120356),
    o = n.n(i),
    a = n(46973),
    s = n(481060),
    u = n(304680),
    c = n(706619),
    d = n(695346),
    h = n(131951),
    f = n(626135),
    p = n(572004),
    g = n(63063),
    y = n(476221),
    O = n(981631),
    b = n(65154),
    v = n(388032),
    m = n(684680);
let x = () => {
        h.Z.getMediaEngine().once(a.aB.ConnectionStats, (e) => {
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
            (0, p.JG)(t, () => (0, s.showToast)((0, s.createToast)(v.intl.string(v.t['t5VZ8/']), s.ToastType.SUCCESS)));
        });
    },
    N = function (e) {
        (0, l.useEffect)(() => {
            f.default.track(O.rMx.OPEN_POPOUT, { type: 'RTC Connection' });
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
                                        children: (0, r.jsx)('strong', { children: y.Z.getShortHostname(t) })
                                    })
                                ]
                            }),
                        (0, r.jsx)('div', {
                            className: m.popoutText,
                            children: v.intl.format(v.t['X58/lJ'], { averagePing: n.toFixed(0) })
                        }),
                        null != i
                            ? (0, r.jsx)('div', {
                                  className: m.popoutText,
                                  children: v.intl.format(v.t['6iv2TE'], { lastPing: i.toFixed(0) })
                              })
                            : null,
                        null != a
                            ? (0, r.jsx)('div', {
                                  className: m.popoutText,
                                  children: v.intl.format(v.t.VIBJMz, { outboundLossRate: a.toFixed(1) })
                              })
                            : null,
                        (0, r.jsxs)('div', {
                            className: o()(m.popoutText, m.popoutTextDetails),
                            children: [
                                null == a ? v.intl.formatToPlainString(v.t.vggaMj, { badPing: 250 }) : null,
                                null != a
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
            { connectionState: i, connectionTypeText: a } = e,
            p = d.Sb.getSetting(),
            N = {
                [O.hes.AWAITING_ENDPOINT]: v.intl.format(v.t.Eu2vUV, { url: O.yXt.STATUS }),
                [O.hes.CONNECTING]: v.intl.string(v.t['y+E8aG']),
                [O.hes.AUTHENTICATING]: v.intl.string(v.t['5lGIZG']),
                [O.hes.DISCONNECTED]: v.intl.string(v.t.fOX25O),
                [O.hes.RTC_CONNECTING]: v.intl.string(v.t.b5Ubd3),
                [O.hes.ICE_CHECKING]: v.intl.format(v.t.SyoYUV, { url: g.Z.getArticleURL(O.BhN.VOICE_CONNECTION_ERRORS) }),
                [O.hes.DTLS_CONNECTING]: v.intl.format(v.t.SyoYUV, { url: g.Z.getArticleURL(O.BhN.VOICE_CONNECTION_ERRORS) }),
                [O.hes.RTC_CONNECTED]: n,
                [O.hes.NO_ROUTE]: v.intl.format(v.t['2tgQnp'], { url: g.Z.getArticleURL(O.BhN.VOICE_CONNECTION_ERRORS) }),
                [O.hes.RTC_DISCONNECTED]: v.intl.string(v.t.fOX25O)
            }[i];
        return (0, r.jsxs)(r.Fragment, {
            children: [
                'function' == typeof N
                    ? N()
                    : (0, r.jsx)('p', {
                          className: o()(m.popoutText, m.popoutTextDetails),
                          children: N
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
                                    color: s.TVs.colors.TEXT_POSITIVE.css,
                                    className: m.__invalid_icon
                                }),
                                a
                            ]
                        }),
                        p &&
                            h.Z.supports(b.AN.DIAGNOSTICS) &&
                            !__OVERLAY__ &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsxs)(s.eee, {
                                        className: o()(m.debugButton, m.textWithIcon),
                                        onClick: t,
                                        children: [
                                            v.intl.string(v.t.KBoWg4),
                                            (0, r.jsx)(s.rgF, {
                                                size: 'xxs',
                                                color: 'currentColor',
                                                className: m.__invalid_icon
                                            })
                                        ]
                                    }),
                                    (0, r.jsxs)(s.eee, {
                                        className: o()(m.copyStatsButton, m.textWithIcon),
                                        onClick: x,
                                        title: 'Copy to clipboard',
                                        children: [
                                            v.intl.string(v.t['XEb+Sk']),
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
                                href: g.Z.getArticleURL(O.BhN.VOICE_VIDEO_TROUBLESHOOTING),
                                children: v.intl.string(v.t.hvVgAQ)
                            })
                    ]
                })
            ]
        });
    };
