n.d(t, { default: () => A }), n(388685);
var r = n(255367),
    a = n(73800),
    c = n(120356),
    o = n.n(c),
    l = n(950035),
    s = n(442837),
    i = n(481060),
    d = n(110924),
    u = n(410030),
    f = n(607070),
    b = n(100527),
    m = n(335131),
    p = n(70097),
    y = n(507808),
    h = n(43747),
    g = n(511050),
    j = n(82856),
    O = n(960919),
    v = n(63063),
    C = n(272008),
    x = n(497505),
    _ = n(46140),
    S = n(981631),
    Z = n(215023),
    w = n(388032),
    E = n(696693),
    N = n(557256),
    k = n(582425),
    I = n(345554),
    P = n(88490),
    R = n(466674);
function B() {
    let e = (0, s.e7)([f.Z], () => f.Z.useReducedMotion),
        [t, n] = a.useState(!e),
        [c, d] = a.useState(!1),
        b = a.useRef(null),
        m = (0, u.ZP)(),
        y = (0, i.apv)(m),
        h = y ? I.Z : k.Z,
        g = y ? R.Z : P.Z;
    a.useEffect(() => {
        if (!t && !e) {
            var n;
            null == (n = b.current) || n.play();
        }
    }, [t, e]);
    let j = (0, i.q_F)({
        from: { y: 50 },
        to: { y: 0 },
        config: {
            tension: 170,
            friction: 26
        }
    });
    return (0, r.jsxs)(l.animated.div, {
        className: E.videoLayers,
        style: j,
        children: [
            !c && (0, r.jsx)('div', { className: E.videoPlaceholder }),
            (0, r.jsx)(p.Z, {
                ref: b,
                autoPlay: !1,
                loop: !0,
                muted: !0,
                playsInline: !0,
                className: o()(E.videoAsset, { [E.hidden]: t }),
                controls: !1,
                children: (0, r.jsx)('source', {
                    src: g,
                    type: 'video/webm'
                })
            }),
            (0, r.jsx)(p.Z, {
                autoPlay: !0,
                muted: !0,
                playsInline: !0,
                className: o()(E.videoAsset, { [E.hidden]: !t }),
                controls: !1,
                onLoadedData: () => d(!0),
                onEnded: () => {
                    n(!1);
                },
                children: (0, r.jsx)('source', {
                    src: h,
                    type: 'video/webm'
                })
            })
        ]
    });
}
function T(e) {
    let { transitionState: t, balance: n, onSubmit: a, onClose: c, state: o } = e;
    return (0, r.jsxs)(i.Y0X, {
        transitionState: t,
        size: i.CgR.DYNAMIC,
        className: E.modal,
        children: [
            (0, r.jsx)('div', {
                className: E.header,
                children: (0, r.jsx)(i.olH, {
                    className: E.closeBtn,
                    onClick: c
                })
            }),
            'loading' === o
                ? (0, r.jsx)('div', {
                      className: E.spinnerContainer,
                      children: (0, r.jsx)(i.$jN, { type: i.RAz.SPINNING_CIRCLE })
                  })
                : 'success' === o
                  ? (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(B, {}),
                            (0, r.jsx)(i.X6q, {
                                variant: 'heading-lg/medium',
                                className: E.title,
                                children: w.intl.format(w.t['8l9H0t'], {
                                    balanceHook: () =>
                                        (0, r.jsxs)('span', {
                                            className: E.orbsBalance,
                                            children: [
                                                (0, r.jsx)(O.Z, {
                                                    shouldUseThemeColor: !0,
                                                    className: E.orbsBalanceIcon
                                                }),
                                                n
                                            ]
                                        })
                                })
                            }),
                            (0, r.jsx)(i.Text, {
                                variant: 'text-sm/normal',
                                className: E.subtext,
                                children: w.intl.string(w.t.EDUOIC)
                            }),
                            (0, r.jsx)(i.zxk, {
                                className: E.ctaBtn,
                                onClick: a,
                                children: w.intl.string(w.t.WYchdX)
                            }),
                            (0, r.jsx)(i.zxk, {
                                look: i.iLD.LINK,
                                color: i.Ttl.CUSTOM,
                                className: E.orbsTermsButton,
                                onClick: () => window.open(v.Z.getArticleURL(S.BhN.VIRTUAL_CURRENCY_LEARN_MORE)),
                                children: w.intl.string(w.t['7kTAgI'])
                            })
                        ]
                    })
                  : (0, r.jsxs)('div', {
                        className: E.errorContainer,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                className: E.errorImage,
                                src: N
                            }),
                            (0, r.jsxs)('div', {
                                className: E.errorContentContainer,
                                children: [
                                    (0, r.jsx)(i.X6q, {
                                        variant: 'heading-xl/medium',
                                        className: E.errorHeader,
                                        children: w.intl.string(w.t.tWYWJy)
                                    }),
                                    (0, r.jsx)(i.Text, {
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        children: w.intl.string(w.t.JNQRU1)
                                    })
                                ]
                            }),
                            (0, r.jsx)(i.zxk, {
                                className: E.ctaBtn,
                                onClick: c,
                                children: w.intl.string(w.t.cpT0Cg)
                            })
                        ]
                    })
        ]
    });
}
function A(e) {
    var t,
        n,
        { quest: c, onClose: o } = e,
        l = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        a = {},
                        c = Object.keys(e);
                    for (r = 0; r < c.length; r++) (n = c[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(e);
                for (r = 0; r < c.length; r++) (n = c[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
            }
            return a;
        })(e, ['quest', 'onClose']);
    let { balance: s } = (0, h.A)(),
        i = (function (e, t, n) {
            let [r, c] = a.useState('loading'),
                [o, l] = a.useState(!1),
                { balance: s } = (0, h.A)(),
                i = (0, d.Z)(s),
                [u, f] = a.useState(!1);
            return (a.useEffect(() => {
                let e = null;
                return (
                    'success' === r &&
                        t &&
                        (e = setTimeout(() => {
                            f(!0);
                        }, 1000)),
                    () => {
                        null != e && clearTimeout(e);
                    }
                );
            }, [r, t]),
            a.useEffect(() => {
                !o && null != s && null != i && s > i && l(!0);
            }, [s, i, o]),
            a.useEffect(() => {
                (0, C.QB)(e, x.y$.CROSS_PLATFORM, n)
                    .then((e) => {
                        if ((null == e ? void 0 : e.claimedAt) != null) return void c('success');
                        c('error');
                    })
                    .catch(() => {
                        c('error');
                    });
            }, [e, n]),
            'error' === r)
                ? r
                : 'success' === r && (o || u)
                  ? 'success'
                  : 'loading';
        })(c.id, c.preview, l.location),
        { openIntroToOrbsClaimedCoachmark: u } = (0, g.Z)({ location: 'QuestsOrbsRewardModal' }),
        f = a.useCallback(() => {
            o(),
                (0, y.Y)({
                    pageType: S.ZY5.GLOBAL_DISCOVERY_QUESTS,
                    sectionType: S.jXE.ORBS_REWARD_MODAL,
                    ctaObject: S.qAy.CTA_TO_ORBS_SHOP
                }),
                (0, m.mK)({
                    openInLayer: !1,
                    tab: Z.AW.ORBS,
                    analyticsLocations: [],
                    analyticsSource: c.id === _.V6 ? b.Z.INTRO_TO_ORBS_QUEST : b.Z.QUEST_HOME_PAGE
                }),
                u({ delayMS: 300 });
        }, [o, u, c.id]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(j.o, {}),
            (0, r.jsx)(
                T,
                ((t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, l)),
                (n = n =
                    {
                        balance: s,
                        onClose: o,
                        onSubmit: f,
                        state: i
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(n)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      }),
                t)
            ),
            ';'
        ]
    });
}
