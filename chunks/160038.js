n.d(t, { Z: () => T }), n(47120);
var l = n(200651),
    i = n(192379),
    s = n(120356),
    o = n.n(s),
    a = n(46973),
    r = n(481060),
    c = n(304680),
    u = n(706619),
    d = n(695346),
    h = n(131951),
    N = n(626135),
    f = n(572004),
    g = n(63063),
    x = n(476221),
    C = n(981631),
    p = n(65154),
    I = n(388032),
    v = n(595221);
let m = () => {
        h.Z.getMediaEngine().once(a.aB.ConnectionStats, (e) => {
            let t = Object.values(p.Yn)
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
            (0, f.JG)(JSON.stringify(t, null, 2)), (0, r.showToast)((0, r.createToast)(I.intl.string(I.t['t5VZ8/']), r.ToastType.SUCCESS));
        });
    },
    T = function (e) {
        (0, i.useEffect)(() => {
            N.default.track(C.rMx.OPEN_POPOUT, { type: 'RTC Connection' });
        }, []);
        let t = (0, i.useCallback)(() => {
                let { closePopout: t } = e;
                null != t && t(), c.bA();
            }, [e]),
            n = (0, i.useCallback)(() => {
                let { hostname: t, averagePing: n, lastPing: s, outboundLossRate: a } = e,
                    r = d.Sb.getSetting();
                return (0, l.jsxs)(i.Fragment, {
                    children: [
                        r &&
                            (0, l.jsxs)('div', {
                                children: [
                                    (0, l.jsx)('div', {
                                        className: v.graphContainer,
                                        children: (0, l.jsx)(u.Z, {
                                            dataPoints: e.pings,
                                            width: 258,
                                            height: 80
                                        })
                                    }),
                                    (0, l.jsx)('div', {
                                        className: v.popoutText,
                                        children: (0, l.jsx)('strong', { children: x.Z.getShortHostname(t) })
                                    })
                                ]
                            }),
                        (0, l.jsx)('div', {
                            className: v.popoutText,
                            children: I.intl.format(I.t['X58/lJ'], { averagePing: n.toFixed(0) })
                        }),
                        null != s
                            ? (0, l.jsx)('div', {
                                  className: v.popoutText,
                                  children: I.intl.format(I.t['6iv2TE'], { lastPing: s.toFixed(0) })
                              })
                            : null,
                        null != a
                            ? (0, l.jsx)('div', {
                                  className: v.popoutText,
                                  children: I.intl.format(I.t.VIBJMz, { outboundLossRate: a.toFixed(1) })
                              })
                            : null,
                        (0, l.jsxs)('div', {
                            className: o()(v.popoutText, v.popoutTextDetails),
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
            { connectionState: s, connectionTypeText: a } = e,
            f = d.Sb.getSetting(),
            T = {
                [C.hes.AWAITING_ENDPOINT]: I.intl.format(I.t.Eu2vUV, { url: C.yXt.STATUS }),
                [C.hes.CONNECTING]: I.intl.string(I.t['y+E8aG']),
                [C.hes.AUTHENTICATING]: I.intl.string(I.t['5lGIZG']),
                [C.hes.DISCONNECTED]: I.intl.string(I.t.fOX25O),
                [C.hes.RTC_CONNECTING]: I.intl.string(I.t.b5Ubd3),
                [C.hes.ICE_CHECKING]: I.intl.format(I.t.SyoYUV, { url: g.Z.getArticleURL(C.BhN.VOICE_CONNECTION_ERRORS) }),
                [C.hes.DTLS_CONNECTING]: I.intl.format(I.t.SyoYUV, { url: g.Z.getArticleURL(C.BhN.VOICE_CONNECTION_ERRORS) }),
                [C.hes.RTC_CONNECTED]: n,
                [C.hes.NO_ROUTE]: I.intl.format(I.t['2tgQnp'], { url: g.Z.getArticleURL(C.BhN.VOICE_CONNECTION_ERRORS) }),
                [C.hes.RTC_DISCONNECTED]: I.intl.string(I.t.fOX25O)
            }[s];
        return (0, l.jsxs)(l.Fragment, {
            children: [
                'function' == typeof T
                    ? T()
                    : (0, l.jsx)('p', {
                          className: o()(v.popoutText, v.popoutTextDetails),
                          children: T
                      }),
                (0, l.jsx)('hr', { className: v.separator }),
                (0, l.jsxs)('div', {
                    className: v.popoutBottom,
                    children: [
                        (0, l.jsxs)('span', {
                            className: o()(v.secured, v.textWithIcon),
                            children: [
                                (0, l.jsx)(r.mBM, {
                                    size: 'xxs',
                                    color: r.TVs.colors.TEXT_POSITIVE.css,
                                    className: v.__invalid_icon
                                }),
                                a
                            ]
                        }),
                        f &&
                            h.Z.supports(p.AN.DIAGNOSTICS) &&
                            !__OVERLAY__ &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsxs)(r.eee, {
                                        className: o()(v.debugButton, v.textWithIcon),
                                        onClick: t,
                                        children: [
                                            I.intl.string(I.t.KBoWg4),
                                            (0, l.jsx)(r.rgF, {
                                                size: 'xxs',
                                                color: 'currentColor',
                                                className: v.__invalid_icon
                                            })
                                        ]
                                    }),
                                    (0, l.jsxs)(r.eee, {
                                        className: o()(v.copyStatsButton, v.textWithIcon),
                                        onClick: m,
                                        title: 'Copy to clipboard',
                                        children: [
                                            I.intl.string(I.t['XEb+Sk']),
                                            (0, l.jsx)(r.TIy, {
                                                size: 'xxs',
                                                color: 'currentColor',
                                                className: v.__invalid_icon
                                            })
                                        ]
                                    })
                                ]
                            }),
                        !f &&
                            !__OVERLAY__ &&
                            (0, l.jsx)(r.eee, {
                                className: v.debugButton,
                                href: g.Z.getArticleURL(C.BhN.VOICE_VIDEO_TROUBLESHOOTING),
                                children: I.intl.string(I.t.hvVgAQ)
                            })
                    ]
                })
            ]
        });
    };
