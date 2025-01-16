n(47120);
var l = n(200651),
    r = n(192379),
    s = n(120356),
    i = n.n(s),
    o = n(46973),
    a = n(481060),
    c = n(304680),
    u = n(706619),
    d = n(695346),
    h = n(131951),
    x = n(626135),
    g = n(572004),
    N = n(63063),
    C = n(476221),
    f = n(981631),
    p = n(65154),
    m = n(388032),
    E = n(51100);
let T = () => {
    h.Z.getMediaEngine().once(o.aB.ConnectionStats, (e) => {
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
        (0, g.JG)(JSON.stringify(t, null, 2)), (0, a.showToast)((0, a.createToast)(m.intl.string(m.t['t5VZ8/']), a.ToastType.SUCCESS));
    });
};
t.Z = function (e) {
    (0, r.useEffect)(() => {
        x.default.track(f.rMx.OPEN_POPOUT, { type: 'RTC Connection' });
    }, []);
    let t = (0, r.useCallback)(() => {
            let { closePopout: t } = e;
            null != t && t(), c.bA();
        }, [e]),
        n = (0, r.useCallback)(() => {
            let { hostname: t, averagePing: n, lastPing: s, outboundLossRate: o } = e,
                a = d.Sb.getSetting();
            return (0, l.jsxs)(r.Fragment, {
                children: [
                    a &&
                        (0, l.jsxs)('div', {
                            children: [
                                (0, l.jsx)('div', {
                                    className: E.graphContainer,
                                    children: (0, l.jsx)(u.Z, {
                                        dataPoints: e.pings,
                                        width: 258,
                                        height: 80
                                    })
                                }),
                                (0, l.jsx)('div', {
                                    className: E.popoutText,
                                    children: (0, l.jsx)('strong', { children: C.Z.getShortHostname(t) })
                                })
                            ]
                        }),
                    (0, l.jsx)('div', {
                        className: E.popoutText,
                        children: m.intl.format(m.t['X58/lJ'], { averagePing: n.toFixed(0) })
                    }),
                    null != s
                        ? (0, l.jsx)('div', {
                              className: E.popoutText,
                              children: m.intl.format(m.t['6iv2TE'], { lastPing: s.toFixed(0) })
                          })
                        : null,
                    null != o
                        ? (0, l.jsx)('div', {
                              className: E.popoutText,
                              children: m.intl.format(m.t.VIBJMz, { outboundLossRate: o.toFixed(1) })
                          })
                        : null,
                    (0, l.jsxs)('div', {
                        className: i()(E.popoutText, E.popoutTextDetails),
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
        { connectionState: s, connectionTypeText: o } = e,
        g = d.Sb.getSetting(),
        v = {
            [f.hes.AWAITING_ENDPOINT]: m.intl.format(m.t.Eu2vUV, { url: f.yXt.STATUS }),
            [f.hes.CONNECTING]: m.intl.string(m.t['y+E8aG']),
            [f.hes.AUTHENTICATING]: m.intl.string(m.t['5lGIZG']),
            [f.hes.DISCONNECTED]: m.intl.string(m.t.fOX25O),
            [f.hes.RTC_CONNECTING]: m.intl.string(m.t.b5Ubd3),
            [f.hes.ICE_CHECKING]: m.intl.format(m.t.SyoYUV, { url: N.Z.getArticleURL(f.BhN.VOICE_CONNECTION_ERRORS) }),
            [f.hes.DTLS_CONNECTING]: m.intl.format(m.t.SyoYUV, { url: N.Z.getArticleURL(f.BhN.VOICE_CONNECTION_ERRORS) }),
            [f.hes.RTC_CONNECTED]: n,
            [f.hes.NO_ROUTE]: m.intl.format(m.t['2tgQnp'], { url: N.Z.getArticleURL(f.BhN.VOICE_CONNECTION_ERRORS) }),
            [f.hes.RTC_DISCONNECTED]: m.intl.string(m.t.fOX25O)
        }[s];
    return (0, l.jsxs)(l.Fragment, {
        children: [
            'function' == typeof v
                ? v()
                : (0, l.jsx)('p', {
                      className: i()(E.popoutText, E.popoutTextDetails),
                      children: v
                  }),
            (0, l.jsx)('hr', { className: E.separator }),
            (0, l.jsxs)('div', {
                className: E.popoutBottom,
                children: [
                    (0, l.jsxs)('span', {
                        className: i()(E.secured, E.textWithIcon),
                        children: [
                            (0, l.jsx)(a.LockIcon, {
                                size: 'xxs',
                                color: a.tokens.colors.TEXT_POSITIVE.css,
                                className: E.__invalid_icon
                            }),
                            o
                        ]
                    }),
                    g &&
                        h.Z.supports(p.AN.DIAGNOSTICS) &&
                        !__OVERLAY__ &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsxs)(a.Anchor, {
                                    className: i()(E.debugButton, E.textWithIcon),
                                    onClick: t,
                                    children: [
                                        m.intl.string(m.t.KBoWg4),
                                        (0, l.jsx)(a.WindowLaunchIcon, {
                                            size: 'xxs',
                                            color: 'currentColor',
                                            className: E.__invalid_icon
                                        })
                                    ]
                                }),
                                (0, l.jsxs)(a.Anchor, {
                                    className: i()(E.copyStatsButton, E.textWithIcon),
                                    onClick: T,
                                    title: 'Copy to clipboard',
                                    children: [
                                        m.intl.string(m.t['XEb+Sk']),
                                        (0, l.jsx)(a.CopyIcon, {
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
                        (0, l.jsx)(a.Anchor, {
                            className: E.debugButton,
                            href: N.Z.getArticleURL(f.BhN.VOICE_VIDEO_TROUBLESHOOTING),
                            children: m.intl.string(m.t.hvVgAQ)
                        })
                ]
            })
        ]
    });
};
