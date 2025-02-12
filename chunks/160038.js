n.d(t, { Z: () => T }), n(47120);
var i = n(200651),
    l = n(192379),
    o = n(120356),
    s = n.n(o),
    a = n(46973),
    r = n(481060),
    c = n(304680),
    u = n(706619),
    d = n(695346),
    h = n(131951),
    f = n(626135),
    N = n(572004),
    g = n(63063),
    x = n(476221),
    p = n(981631),
    C = n(65154),
    I = n(388032),
    v = n(128244);
let m = () => {
        h.Z.getMediaEngine().once(a.aB.ConnectionStats, (e) => {
            let t = Object.values(C.Yn)
                .map((t) => {
                    let n = e
                        .filter((e) => {
                            let { connection: n } = e;
                            return n.context === t;
                        })
                        .map((e, n) => {
                            let i = e.stats;
                            return (i.context = t), (i.index = n), i;
                        });
                    for (let e of n) {
                        var i;
                        (null == e ? void 0 : null === (i = e.transport) || void 0 === i ? void 0 : i.localAddress) != null && (e.transport.localAddress = '(redacted)');
                    }
                    return n;
                })
                .filter((e) => e.length > 0);
            (0, N.JG)(JSON.stringify(t, null, 2)), (0, r.showToast)((0, r.createToast)(I.intl.string(I.t['t5VZ8/']), r.ToastType.SUCCESS));
        });
    },
    T = function (e) {
        (0, l.useEffect)(() => {
            f.default.track(p.rMx.OPEN_POPOUT, { type: 'RTC Connection' });
        }, []);
        let t = (0, l.useCallback)(() => {
                let { closePopout: t } = e;
                null != t && t(), c.bA();
            }, [e]),
            n = (0, l.useCallback)(() => {
                let { hostname: t, averagePing: n, lastPing: o, outboundLossRate: a } = e,
                    r = d.Sb.getSetting();
                return (0, i.jsxs)(l.Fragment, {
                    children: [
                        r &&
                            (0, i.jsxs)('div', {
                                children: [
                                    (0, i.jsx)('div', {
                                        className: v.graphContainer,
                                        children: (0, i.jsx)(u.Z, {
                                            dataPoints: e.pings,
                                            width: 258,
                                            height: 80
                                        })
                                    }),
                                    (0, i.jsx)('div', {
                                        className: v.popoutText,
                                        children: (0, i.jsx)('strong', { children: x.Z.getShortHostname(t) })
                                    })
                                ]
                            }),
                        (0, i.jsx)('div', {
                            className: v.popoutText,
                            children: I.intl.format(I.t['X58/lJ'], { averagePing: n.toFixed(0) })
                        }),
                        null != o
                            ? (0, i.jsx)('div', {
                                  className: v.popoutText,
                                  children: I.intl.format(I.t['6iv2TE'], { lastPing: o.toFixed(0) })
                              })
                            : null,
                        null != a
                            ? (0, i.jsx)('div', {
                                  className: v.popoutText,
                                  children: I.intl.format(I.t.VIBJMz, { outboundLossRate: a.toFixed(1) })
                              })
                            : null,
                        (0, i.jsxs)('div', {
                            className: s()(v.popoutText, v.popoutTextDetails),
                            children: [
                                null == a ? I.intl.formatToPlainString(I.t.vggaMj, { badPing: 250 }) : null,
                                null != a
                                    ? I.intl.formatToPlainString(I.t['3pFz1N'], {
                                          badPing: 250,
                                          badLossRate: 10
                                      })
                                    : null
                            ]
                        })
                    ]
                });
            }, [e]),
            { connectionState: o, connectionTypeText: a } = e,
            N = d.Sb.getSetting(),
            T = {
                [p.hes.AWAITING_ENDPOINT]: I.intl.format(I.t.Eu2vUV, { url: p.yXt.STATUS }),
                [p.hes.CONNECTING]: I.intl.string(I.t['y+E8aG']),
                [p.hes.AUTHENTICATING]: I.intl.string(I.t['5lGIZG']),
                [p.hes.DISCONNECTED]: I.intl.string(I.t.fOX25O),
                [p.hes.RTC_CONNECTING]: I.intl.string(I.t.b5Ubd3),
                [p.hes.ICE_CHECKING]: I.intl.format(I.t.SyoYUV, { url: g.Z.getArticleURL(p.BhN.VOICE_CONNECTION_ERRORS) }),
                [p.hes.DTLS_CONNECTING]: I.intl.format(I.t.SyoYUV, { url: g.Z.getArticleURL(p.BhN.VOICE_CONNECTION_ERRORS) }),
                [p.hes.RTC_CONNECTED]: n,
                [p.hes.NO_ROUTE]: I.intl.format(I.t['2tgQnp'], { url: g.Z.getArticleURL(p.BhN.VOICE_CONNECTION_ERRORS) }),
                [p.hes.RTC_DISCONNECTED]: I.intl.string(I.t.fOX25O)
            }[o];
        return (0, i.jsxs)(i.Fragment, {
            children: [
                'function' == typeof T
                    ? T()
                    : (0, i.jsx)('p', {
                          className: s()(v.popoutText, v.popoutTextDetails),
                          children: T
                      }),
                (0, i.jsx)('hr', { className: v.separator }),
                (0, i.jsxs)('div', {
                    className: v.popoutBottom,
                    children: [
                        (0, i.jsxs)('span', {
                            className: s()(v.secured, v.textWithIcon),
                            children: [
                                (0, i.jsx)(r.mBM, {
                                    size: 'xxs',
                                    color: r.TVs.colors.TEXT_POSITIVE.css,
                                    className: v.__invalid_icon
                                }),
                                a
                            ]
                        }),
                        N &&
                            h.Z.supports(C.AN.DIAGNOSTICS) &&
                            !__OVERLAY__ &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsxs)(r.eee, {
                                        className: s()(v.debugButton, v.textWithIcon),
                                        onClick: t,
                                        children: [
                                            I.intl.string(I.t.KBoWg4),
                                            (0, i.jsx)(r.rgF, {
                                                size: 'xxs',
                                                color: 'currentColor',
                                                className: v.__invalid_icon
                                            })
                                        ]
                                    }),
                                    (0, i.jsxs)(r.eee, {
                                        className: s()(v.copyStatsButton, v.textWithIcon),
                                        onClick: m,
                                        title: 'Copy to clipboard',
                                        children: [
                                            I.intl.string(I.t['XEb+Sk']),
                                            (0, i.jsx)(r.TIy, {
                                                size: 'xxs',
                                                color: 'currentColor',
                                                className: v.__invalid_icon
                                            })
                                        ]
                                    })
                                ]
                            }),
                        !N &&
                            !__OVERLAY__ &&
                            (0, i.jsx)(r.eee, {
                                className: v.debugButton,
                                href: g.Z.getArticleURL(p.BhN.VOICE_VIDEO_TROUBLESHOOTING),
                                children: I.intl.string(I.t.hvVgAQ)
                            })
                    ]
                })
            ]
        });
    };
