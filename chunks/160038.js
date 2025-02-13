n.d(t, { Z: () => E }), n(47120);
var l = n(200651),
    i = n(192379),
    a = n(120356),
    r = n.n(a),
    o = n(46973),
    s = n(481060),
    c = n(304680),
    u = n(706619),
    d = n(695346),
    h = n(131951),
    f = n(626135),
    g = n(572004),
    p = n(63063),
    N = n(476221),
    v = n(981631),
    x = n(65154),
    m = n(388032),
    C = n(595221);
let I = () => {
        h.Z.getMediaEngine().once(o.aB.ConnectionStats, (e) => {
            let t = Object.values(x.Yn)
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
                        (null == e ? void 0 : null === (l = e.transport) || void 0 === l ? void 0 : l.localAddress) != null && (e.transport.localAddress = '(redacted)');
                    }
                    return n;
                })
                .filter((e) => e.length > 0);
            (0, g.JG)(JSON.stringify(t, null, 2)), (0, s.showToast)((0, s.createToast)(m.intl.string(m.t['t5VZ8/']), s.ToastType.SUCCESS));
        });
    },
    E = function (e) {
        (0, i.useEffect)(() => {
            f.default.track(v.rMx.OPEN_POPOUT, { type: 'RTC Connection' });
        }, []);
        let t = (0, i.useCallback)(() => {
                let { closePopout: t } = e;
                null != t && t(), c.bA();
            }, [e]),
            n = (0, i.useCallback)(() => {
                let { hostname: t, averagePing: n, lastPing: a, outboundLossRate: o } = e,
                    s = d.Sb.getSetting();
                return (0, l.jsxs)(i.Fragment, {
                    children: [
                        s &&
                            (0, l.jsxs)('div', {
                                children: [
                                    (0, l.jsx)('div', {
                                        className: C.graphContainer,
                                        children: (0, l.jsx)(u.Z, {
                                            dataPoints: e.pings,
                                            width: 258,
                                            height: 80
                                        })
                                    }),
                                    (0, l.jsx)('div', {
                                        className: C.popoutText,
                                        children: (0, l.jsx)('strong', { children: N.Z.getShortHostname(t) })
                                    })
                                ]
                            }),
                        (0, l.jsx)('div', {
                            className: C.popoutText,
                            children: m.intl.format(m.t['X58/lJ'], { averagePing: n.toFixed(0) })
                        }),
                        null != a
                            ? (0, l.jsx)('div', {
                                  className: C.popoutText,
                                  children: m.intl.format(m.t['6iv2TE'], { lastPing: a.toFixed(0) })
                              })
                            : null,
                        null != o
                            ? (0, l.jsx)('div', {
                                  className: C.popoutText,
                                  children: m.intl.format(m.t.VIBJMz, { outboundLossRate: o.toFixed(1) })
                              })
                            : null,
                        (0, l.jsxs)('div', {
                            className: r()(C.popoutText, C.popoutTextDetails),
                            children: [
                                null == o ? m.intl.formatToPlainString(m.t.vggaMj, { badPing: 250 }) : null,
                                null != o
                                    ? m.intl.formatToPlainString(m.t['3pFz1N'], {
                                          badPing: 250,
                                          badLossRate: 10
                                      })
                                    : null
                            ]
                        })
                    ]
                });
            }, [e]),
            { connectionState: a, connectionTypeText: o } = e,
            g = d.Sb.getSetting(),
            E = {
                [v.hes.AWAITING_ENDPOINT]: m.intl.format(m.t.Eu2vUV, { url: v.yXt.STATUS }),
                [v.hes.CONNECTING]: m.intl.string(m.t['y+E8aG']),
                [v.hes.AUTHENTICATING]: m.intl.string(m.t['5lGIZG']),
                [v.hes.DISCONNECTED]: m.intl.string(m.t.fOX25O),
                [v.hes.RTC_CONNECTING]: m.intl.string(m.t.b5Ubd3),
                [v.hes.ICE_CHECKING]: m.intl.format(m.t.SyoYUV, { url: p.Z.getArticleURL(v.BhN.VOICE_CONNECTION_ERRORS) }),
                [v.hes.DTLS_CONNECTING]: m.intl.format(m.t.SyoYUV, { url: p.Z.getArticleURL(v.BhN.VOICE_CONNECTION_ERRORS) }),
                [v.hes.RTC_CONNECTED]: n,
                [v.hes.NO_ROUTE]: m.intl.format(m.t['2tgQnp'], { url: p.Z.getArticleURL(v.BhN.VOICE_CONNECTION_ERRORS) }),
                [v.hes.RTC_DISCONNECTED]: m.intl.string(m.t.fOX25O)
            }[a];
        return (0, l.jsxs)(l.Fragment, {
            children: [
                'function' == typeof E
                    ? E()
                    : (0, l.jsx)('p', {
                          className: r()(C.popoutText, C.popoutTextDetails),
                          children: E
                      }),
                (0, l.jsx)('hr', { className: C.separator }),
                (0, l.jsxs)('div', {
                    className: C.popoutBottom,
                    children: [
                        (0, l.jsxs)('span', {
                            className: r()(C.secured, C.textWithIcon),
                            children: [
                                (0, l.jsx)(s.mBM, {
                                    size: 'xxs',
                                    color: s.TVs.colors.TEXT_POSITIVE.css,
                                    className: C.__invalid_icon
                                }),
                                o
                            ]
                        }),
                        g &&
                            h.Z.supports(x.AN.DIAGNOSTICS) &&
                            !__OVERLAY__ &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsxs)(s.eee, {
                                        className: r()(C.debugButton, C.textWithIcon),
                                        onClick: t,
                                        children: [
                                            m.intl.string(m.t.KBoWg4),
                                            (0, l.jsx)(s.rgF, {
                                                size: 'xxs',
                                                color: 'currentColor',
                                                className: C.__invalid_icon
                                            })
                                        ]
                                    }),
                                    (0, l.jsxs)(s.eee, {
                                        className: r()(C.copyStatsButton, C.textWithIcon),
                                        onClick: I,
                                        title: 'Copy to clipboard',
                                        children: [
                                            m.intl.string(m.t['XEb+Sk']),
                                            (0, l.jsx)(s.TIy, {
                                                size: 'xxs',
                                                color: 'currentColor',
                                                className: C.__invalid_icon
                                            })
                                        ]
                                    })
                                ]
                            }),
                        !g &&
                            !__OVERLAY__ &&
                            (0, l.jsx)(s.eee, {
                                className: C.debugButton,
                                href: p.Z.getArticleURL(v.BhN.VOICE_VIDEO_TROUBLESHOOTING),
                                children: m.intl.string(m.t.hvVgAQ)
                            })
                    ]
                })
            ]
        });
    };
