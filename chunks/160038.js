(n.d(t, { Z: () => m }), n(388685), n(49124));
var r = n(255367),
    l = n(73800),
    i = n(120356),
    s = n.n(i),
    a = n(46973),
    o = n(481060),
    c = n(304680),
    u = n(706619),
    d = n(695346),
    h = n(131951),
    f = n(626135),
    g = n(572004),
    p = n(63063),
    N = n(476221),
    O = n(981631),
    x = n(65154),
    y = n(388032),
    b = n(684680);
let E = () => {
        h.Z.getMediaEngine().once(a.aB.ConnectionStats, (e) => {
            let t = JSON.stringify(
                Object.values(x.Yn)
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
            (0, g.JG)(t, () => (0, o.showToast)((0, o.createToast)(y.intl.string(y.t['t5VZ8/']), o.ToastType.SUCCESS)));
        });
    },
    m = function (e) {
        (0, l.useEffect)(() => {
            f.default.track(O.rMx.OPEN_POPOUT, { type: 'RTC Connection' });
        }, []);
        let t = (0, l.useCallback)(() => {
                let { closePopout: t } = e;
                (null != t && t(), c.bA());
            }, [e]),
            n = (0, l.useCallback)(() => {
                let { hostname: t, averagePing: n, lastPing: i, outboundLossRate: a } = e,
                    o = d.Sb.getSetting();
                return (0, r.jsxs)(l.Fragment, {
                    children: [
                        o &&
                            (0, r.jsxs)('div', {
                                children: [
                                    (0, r.jsx)('div', {
                                        className: b.graphContainer,
                                        children: (0, r.jsx)(u.Z, {
                                            dataPoints: e.pings,
                                            width: 258,
                                            height: 80
                                        })
                                    }),
                                    (0, r.jsx)('div', {
                                        className: b.popoutText,
                                        children: (0, r.jsx)('strong', { children: N.Z.getShortHostname(t) })
                                    })
                                ]
                            }),
                        (0, r.jsx)('div', {
                            className: b.popoutText,
                            children: y.intl.format(y.t['X58/lJ'], { averagePing: n.toFixed(0) })
                        }),
                        null != i
                            ? (0, r.jsx)('div', {
                                  className: b.popoutText,
                                  children: y.intl.format(y.t['6iv2TE'], { lastPing: i.toFixed(0) })
                              })
                            : null,
                        null != a
                            ? (0, r.jsx)('div', {
                                  className: b.popoutText,
                                  children: y.intl.format(y.t.VIBJMz, { outboundLossRate: a.toFixed(1) })
                              })
                            : null,
                        (0, r.jsxs)('div', {
                            className: s()(b.popoutText, b.popoutTextDetails),
                            children: [
                                null == a ? y.intl.formatToPlainString(y.t.vggaMj, { badPing: 250 }) : null,
                                null != a
                                    ? y.intl.formatToPlainString(y.t['3pFz1N'], {
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
            g = d.Sb.getSetting(),
            m = {
                [O.hes.AWAITING_ENDPOINT]: y.intl.format(y.t.Eu2vUV, { url: O.yXt.STATUS }),
                [O.hes.CONNECTING]: y.intl.string(y.t['y+E8aG']),
                [O.hes.AUTHENTICATING]: y.intl.string(y.t['5lGIZG']),
                [O.hes.DISCONNECTED]: y.intl.string(y.t.fOX25O),
                [O.hes.RTC_CONNECTING]: y.intl.string(y.t.b5Ubd3),
                [O.hes.ICE_CHECKING]: y.intl.format(y.t.SyoYUV, { url: p.Z.getArticleURL(O.BhN.VOICE_CONNECTION_ERRORS) }),
                [O.hes.DTLS_CONNECTING]: y.intl.format(y.t.SyoYUV, { url: p.Z.getArticleURL(O.BhN.VOICE_CONNECTION_ERRORS) }),
                [O.hes.RTC_CONNECTED]: n,
                [O.hes.NO_ROUTE]: y.intl.format(y.t['2tgQnp'], { url: p.Z.getArticleURL(O.BhN.VOICE_CONNECTION_ERRORS) }),
                [O.hes.RTC_DISCONNECTED]: y.intl.string(y.t.fOX25O)
            }[i];
        return (0, r.jsxs)(r.Fragment, {
            children: [
                'function' == typeof m
                    ? m()
                    : (0, r.jsx)('p', {
                          className: s()(b.popoutText, b.popoutTextDetails),
                          children: m
                      }),
                (0, r.jsx)('hr', { className: b.separator }),
                (0, r.jsxs)('div', {
                    className: b.popoutBottom,
                    children: [
                        (0, r.jsxs)('span', {
                            className: s()(b.secured, b.textWithIcon),
                            children: [
                                (0, r.jsx)(o.mBM, {
                                    size: 'xxs',
                                    color: o.TVs.colors.TEXT_FEEDBACK_POSITIVE.css,
                                    className: b.__invalid_icon
                                }),
                                a
                            ]
                        }),
                        g &&
                            h.Z.supports(x.AN.DIAGNOSTICS) &&
                            !__OVERLAY__ &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsxs)(o.eee, {
                                        className: s()(b.debugButton, b.textWithIcon),
                                        onClick: t,
                                        children: [
                                            y.intl.string(y.t.KBoWg4),
                                            (0, r.jsx)(o.rgF, {
                                                size: 'xxs',
                                                color: 'currentColor',
                                                className: b.__invalid_icon
                                            })
                                        ]
                                    }),
                                    (0, r.jsxs)(o.eee, {
                                        className: s()(b.copyStatsButton, b.textWithIcon),
                                        onClick: E,
                                        title: 'Copy to clipboard',
                                        children: [
                                            y.intl.string(y.t['XEb+Sk']),
                                            (0, r.jsx)(o.TIy, {
                                                size: 'xxs',
                                                color: 'currentColor',
                                                className: b.__invalid_icon
                                            })
                                        ]
                                    })
                                ]
                            }),
                        !g &&
                            !__OVERLAY__ &&
                            (0, r.jsx)(o.eee, {
                                className: b.debugButton,
                                href: p.Z.getArticleURL(O.BhN.VOICE_VIDEO_TROUBLESHOOTING),
                                children: y.intl.string(y.t.hvVgAQ)
                            })
                    ]
                })
            ]
        });
    };
