n.d(t, { Z: () => m }), n(47120), n(26686);
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
    y = n(981631),
    O = n(65154),
    b = n(388032),
    v = n(684680);
let x = () => {
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
                        (null == e || null == (r = e.transport) ? void 0 : r.localAddress) != null && (e.transport.localAddress = '(redacted)');
                    }
                    return n;
                })
                .filter((e) => e.length > 0);
            (0, p.JG)(JSON.stringify(t, null, 2)), (0, s.showToast)((0, s.createToast)(b.NW.string(b.t['t5VZ8/']), s.ToastType.SUCCESS));
        });
    },
    m = function (e) {
        (0, l.useEffect)(() => {
            f.default.track(y.rMx.OPEN_POPOUT, { type: 'RTC Connection' });
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
                                        className: v.graphContainer,
                                        children: (0, r.jsx)(u.Z, {
                                            dataPoints: e.pings,
                                            width: 258,
                                            height: 80
                                        })
                                    }),
                                    (0, r.jsx)('div', {
                                        className: v.popoutText,
                                        children: (0, r.jsx)('strong', { children: N.Z.getShortHostname(t) })
                                    })
                                ]
                            }),
                        (0, r.jsx)('div', {
                            className: v.popoutText,
                            children: b.NW.format(b.t['X58/lJ'], { averagePing: n.toFixed(0) })
                        }),
                        null != i
                            ? (0, r.jsx)('div', {
                                  className: v.popoutText,
                                  children: b.NW.format(b.t['6iv2TE'], { lastPing: i.toFixed(0) })
                              })
                            : null,
                        null != a
                            ? (0, r.jsx)('div', {
                                  className: v.popoutText,
                                  children: b.NW.format(b.t.VIBJMz, { outboundLossRate: a.toFixed(1) })
                              })
                            : null,
                        (0, r.jsxs)('div', {
                            className: o()(v.popoutText, v.popoutTextDetails),
                            children: [
                                null == a ? b.NW.formatToPlainString(b.t.vggaMj, { badPing: 250 }) : null,
                                null != a
                                    ? b.NW.formatToPlainString(b.t['3pFz1N'], {
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
            m = {
                [y.hes.AWAITING_ENDPOINT]: b.NW.format(b.t.Eu2vUV, { url: y.yXt.STATUS }),
                [y.hes.CONNECTING]: b.NW.string(b.t['y+E8aG']),
                [y.hes.AUTHENTICATING]: b.NW.string(b.t['5lGIZG']),
                [y.hes.DISCONNECTED]: b.NW.string(b.t.fOX25O),
                [y.hes.RTC_CONNECTING]: b.NW.string(b.t.b5Ubd3),
                [y.hes.ICE_CHECKING]: b.NW.format(b.t.SyoYUV, { url: g.Z.getArticleURL(y.BhN.VOICE_CONNECTION_ERRORS) }),
                [y.hes.DTLS_CONNECTING]: b.NW.format(b.t.SyoYUV, { url: g.Z.getArticleURL(y.BhN.VOICE_CONNECTION_ERRORS) }),
                [y.hes.RTC_CONNECTED]: n,
                [y.hes.NO_ROUTE]: b.NW.format(b.t['2tgQnp'], { url: g.Z.getArticleURL(y.BhN.VOICE_CONNECTION_ERRORS) }),
                [y.hes.RTC_DISCONNECTED]: b.NW.string(b.t.fOX25O)
            }[i];
        return (0, r.jsxs)(r.Fragment, {
            children: [
                'function' == typeof m
                    ? m()
                    : (0, r.jsx)('p', {
                          className: o()(v.popoutText, v.popoutTextDetails),
                          children: m
                      }),
                (0, r.jsx)('hr', { className: v.separator }),
                (0, r.jsxs)('div', {
                    className: v.popoutBottom,
                    children: [
                        (0, r.jsxs)('span', {
                            className: o()(v.secured, v.textWithIcon),
                            children: [
                                (0, r.jsx)(s.mBM, {
                                    size: 'xxs',
                                    color: s.TVs.colors.TEXT_POSITIVE.css,
                                    className: v.__invalid_icon
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
                                        className: o()(v.debugButton, v.textWithIcon),
                                        onClick: t,
                                        children: [
                                            b.NW.string(b.t.KBoWg4),
                                            (0, r.jsx)(s.rgF, {
                                                size: 'xxs',
                                                color: 'currentColor',
                                                className: v.__invalid_icon
                                            })
                                        ]
                                    }),
                                    (0, r.jsxs)(s.eee, {
                                        className: o()(v.copyStatsButton, v.textWithIcon),
                                        onClick: x,
                                        title: 'Copy to clipboard',
                                        children: [
                                            b.NW.string(b.t['XEb+Sk']),
                                            (0, r.jsx)(s.TIy, {
                                                size: 'xxs',
                                                color: 'currentColor',
                                                className: v.__invalid_icon
                                            })
                                        ]
                                    })
                                ]
                            }),
                        !p &&
                            !__OVERLAY__ &&
                            (0, r.jsx)(s.eee, {
                                className: v.debugButton,
                                href: g.Z.getArticleURL(y.BhN.VOICE_VIDEO_TROUBLESHOOTING),
                                children: b.NW.string(b.t.hvVgAQ)
                            })
                    ]
                })
            ]
        });
    };
