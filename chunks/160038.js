n.d(t, { Z: () => x }), n(47120), n(26686);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    o = n.n(i),
    a = n(46973),
    s = n(481060),
    c = n(304680),
    u = n(706619),
    d = n(695346),
    h = n(131951),
    f = n(626135),
    p = n(572004),
    g = n(63063),
    N = n(476221),
    v = n(981631),
    O = n(65154),
    y = n(388032),
    m = n(109350);
let b = () => {
        h.Z.getMediaEngine().once(a.aB.ConnectionStats, (e) => {
            let t = Object.values(O.Yn)
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
                        (null == e ? void 0 : null === (r = e.transport) || void 0 === r ? void 0 : r.localAddress) != null && (e.transport.localAddress = '(redacted)');
                    }
                    return n;
                })
                .filter((e) => e.length > 0);
            (0, p.JG)(JSON.stringify(t, null, 2)), (0, s.showToast)((0, s.createToast)(y.NW.string(y.t['t5VZ8/']), s.ToastType.SUCCESS));
        });
    },
    x = function (e) {
        (0, l.useEffect)(() => {
            f.default.track(v.rMx.OPEN_POPOUT, { type: 'RTC Connection' });
        }, []);
        let t = (0, l.useCallback)(() => {
                let { closePopout: t } = e;
                null != t && t(), c.bA();
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
                                        children: (0, r.jsx)(u.Z, {
                                            dataPoints: e.pings,
                                            width: 258,
                                            height: 80
                                        })
                                    }),
                                    (0, r.jsx)('div', {
                                        className: m.popoutText,
                                        children: (0, r.jsx)('strong', { children: N.Z.getShortHostname(t) })
                                    })
                                ]
                            }),
                        (0, r.jsx)('div', {
                            className: m.popoutText,
                            children: y.NW.format(y.t['X58/lJ'], { averagePing: n.toFixed(0) })
                        }),
                        null != i
                            ? (0, r.jsx)('div', {
                                  className: m.popoutText,
                                  children: y.NW.format(y.t['6iv2TE'], { lastPing: i.toFixed(0) })
                              })
                            : null,
                        null != a
                            ? (0, r.jsx)('div', {
                                  className: m.popoutText,
                                  children: y.NW.format(y.t.VIBJMz, { outboundLossRate: a.toFixed(1) })
                              })
                            : null,
                        (0, r.jsxs)('div', {
                            className: o()(m.popoutText, m.popoutTextDetails),
                            children: [
                                null == a ? y.NW.formatToPlainString(y.t.vggaMj, { badPing: 250 }) : null,
                                null != a
                                    ? y.NW.formatToPlainString(y.t['3pFz1N'], {
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
                [v.hes.AWAITING_ENDPOINT]: y.NW.format(y.t.Eu2vUV, { url: v.yXt.STATUS }),
                [v.hes.CONNECTING]: y.NW.string(y.t['y+E8aG']),
                [v.hes.AUTHENTICATING]: y.NW.string(y.t['5lGIZG']),
                [v.hes.DISCONNECTED]: y.NW.string(y.t.fOX25O),
                [v.hes.RTC_CONNECTING]: y.NW.string(y.t.b5Ubd3),
                [v.hes.ICE_CHECKING]: y.NW.format(y.t.SyoYUV, { url: g.Z.getArticleURL(v.BhN.VOICE_CONNECTION_ERRORS) }),
                [v.hes.DTLS_CONNECTING]: y.NW.format(y.t.SyoYUV, { url: g.Z.getArticleURL(v.BhN.VOICE_CONNECTION_ERRORS) }),
                [v.hes.RTC_CONNECTED]: n,
                [v.hes.NO_ROUTE]: y.NW.format(y.t['2tgQnp'], { url: g.Z.getArticleURL(v.BhN.VOICE_CONNECTION_ERRORS) }),
                [v.hes.RTC_DISCONNECTED]: y.NW.string(y.t.fOX25O)
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
                                    color: s.TVs.colors.TEXT_POSITIVE.css,
                                    className: m.__invalid_icon
                                }),
                                a
                            ]
                        }),
                        p &&
                            h.Z.supports(O.AN.DIAGNOSTICS) &&
                            !__OVERLAY__ &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsxs)(s.eee, {
                                        className: o()(m.debugButton, m.textWithIcon),
                                        onClick: t,
                                        children: [
                                            y.NW.string(y.t.KBoWg4),
                                            (0, r.jsx)(s.rgF, {
                                                size: 'xxs',
                                                color: 'currentColor',
                                                className: m.__invalid_icon
                                            })
                                        ]
                                    }),
                                    (0, r.jsxs)(s.eee, {
                                        className: o()(m.copyStatsButton, m.textWithIcon),
                                        onClick: b,
                                        title: 'Copy to clipboard',
                                        children: [
                                            y.NW.string(y.t['XEb+Sk']),
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
                                href: g.Z.getArticleURL(v.BhN.VOICE_VIDEO_TROUBLESHOOTING),
                                children: y.NW.string(y.t.hvVgAQ)
                            })
                    ]
                })
            ]
        });
    };
