n.d(t, { default: () => A }), n(388685);
var r = n(255367),
    a = n(73800),
    c = n(120356),
    o = n.n(c),
    s = n(950035),
    l = n(442837),
    i = n(481060),
    d = n(110924),
    u = n(410030),
    f = n(607070),
    b = n(100527),
    m = n(335131),
    p = n(70097),
    h = n(507808),
    y = n(43747),
    j = n(511050),
    g = n(82856),
    O = n(960919),
    v = n(63063),
    C = n(272008),
    x = n(497505),
    _ = n(46140),
    S = n(981631),
    w = n(215023),
    Z = n(388032),
    N = n(689477),
    I = n(557256),
    k = n(582425),
    E = n(345554),
    P = n(88490),
    R = n(466674);
function B() {
    let e = (0, l.e7)([f.Z], () => f.Z.useReducedMotion),
        [t, n] = a.useState(!e),
        [c, d] = a.useState(!1),
        b = a.useRef(null),
        m = (0, u.ZP)(),
        h = (0, i.apv)(m),
        y = h ? E.Z : k.Z,
        j = h ? R.Z : P.Z;
    a.useEffect(() => {
        if (!t && !e) {
            var n;
            null == (n = b.current) || n.play();
        }
    }, [t, e]);
    let g = (0, i.q_F)({
        from: { y: 50 },
        to: { y: 0 },
        config: {
            tension: 170,
            friction: 26
        }
    });
    return (0, r.jsxs)(s.animated.div, {
        className: N.videoLayers,
        style: g,
        children: [
            !c && (0, r.jsx)('div', { className: N.videoPlaceholder }),
            (0, r.jsx)(p.Z, {
                ref: b,
                autoPlay: !1,
                loop: !0,
                muted: !0,
                playsInline: !0,
                className: o()(N.videoAsset, { [N.hidden]: t }),
                controls: !1,
                children: (0, r.jsx)('source', {
                    src: j,
                    type: 'video/webm'
                })
            }),
            (0, r.jsx)(p.Z, {
                autoPlay: !0,
                muted: !0,
                playsInline: !0,
                className: o()(N.videoAsset, { [N.hidden]: !t }),
                controls: !1,
                onLoadedData: () => d(!0),
                onEnded: () => {
                    n(!1);
                },
                children: (0, r.jsx)('source', {
                    src: y,
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
        className: N.modal,
        children: [
            (0, r.jsx)('div', {
                className: N.header,
                children: (0, r.jsx)(i.olH, {
                    className: N.closeBtn,
                    onClick: c
                })
            }),
            'loading' === o
                ? (0, r.jsx)('div', {
                      className: N.spinnerContainer,
                      children: (0, r.jsx)(i.$jN, { type: i.RAz.SPINNING_CIRCLE })
                  })
                : 'success' === o
                  ? (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(B, {}),
                            (0, r.jsx)(i.X6q, {
                                variant: 'heading-lg/medium',
                                className: N.title,
                                children: Z.intl.format(Z.t['8l9H0t'], {
                                    balanceHook: () =>
                                        (0, r.jsxs)('span', {
                                            className: N.orbsBalance,
                                            children: [
                                                (0, r.jsx)(O.Z, {
                                                    shouldUseThemeColor: !0,
                                                    className: N.orbsBalanceIcon
                                                }),
                                                n
                                            ]
                                        })
                                })
                            }),
                            (0, r.jsx)(i.Text, {
                                variant: 'text-sm/normal',
                                className: N.subtext,
                                children: Z.intl.string(Z.t.EDUOIC)
                            }),
                            (0, r.jsx)(i.zxk, {
                                className: N.ctaBtn,
                                onClick: a,
                                children: Z.intl.string(Z.t.WYchdX)
                            }),
                            (0, r.jsx)(i.zxk, {
                                look: i.iLD.LINK,
                                color: i.Ttl.CUSTOM,
                                className: N.orbsTermsButton,
                                onClick: () => window.open(v.Z.getArticleURL(S.BhN.VIRTUAL_CURRENCY_LEARN_MORE)),
                                children: Z.intl.string(Z.t['7kTAgI'])
                            })
                        ]
                    })
                  : (0, r.jsxs)('div', {
                        className: N.errorContainer,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                className: N.errorImage,
                                src: I
                            }),
                            (0, r.jsxs)('div', {
                                className: N.errorContentContainer,
                                children: [
                                    (0, r.jsx)(i.X6q, {
                                        variant: 'heading-xl/medium',
                                        className: N.errorHeader,
                                        children: Z.intl.string(Z.t.tWYWJy)
                                    }),
                                    (0, r.jsx)(i.Text, {
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        children: Z.intl.string(Z.t.JNQRU1)
                                    })
                                ]
                            }),
                            (0, r.jsx)(i.zxk, {
                                className: N.ctaBtn,
                                onClick: c,
                                children: Z.intl.string(Z.t.cpT0Cg)
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
        s = (function (e, t) {
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
    let { balance: l } = (0, y.A)(),
        i = (function (e, t, n) {
            let [r, c] = a.useState('loading'),
                [o, s] = a.useState(!1),
                { balance: l } = (0, y.A)(),
                i = (0, d.Z)(l),
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
                !o && null != l && null != i && l > i && s(!0);
            }, [l, i, o]),
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
        })(c.id, c.preview, s.location),
        { openIntroToOrbsClaimedCoachmark: u } = (0, j.Z)({ location: 'QuestsOrbsRewardModal' }),
        f = a.useCallback(() => {
            o(),
                (0, h.Y)({
                    pageType: S.ZY5.GLOBAL_DISCOVERY_QUESTS,
                    sectionType: S.jXE.ORBS_REWARD_MODAL,
                    ctaObject: S.qAy.CTA_TO_ORBS_SHOP
                }),
                (0, m.mK)({
                    openInLayer: !1,
                    tab: w.AW.ORBS,
                    analyticsLocations: [],
                    analyticsSource: c.id === _.V6 ? b.Z.INTRO_TO_ORBS_QUEST : b.Z.QUEST_HOME_PAGE
                }),
                u({ delayMS: 300 });
        }, [o, u, c.id]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(g.o, {}),
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
                })({}, s)),
                (n = n =
                    {
                        balance: l,
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
