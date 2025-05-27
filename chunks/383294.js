n.d(t, { default: () => k }), n(388685);
var r = n(255367),
    a = n(73800),
    c = n(120356),
    o = n.n(c),
    s = n(714673),
    i = n(442837),
    l = n(481060),
    d = n(110924),
    u = n(410030),
    b = n(607070),
    f = n(100527),
    p = n(335131),
    m = n(70097),
    g = n(507808),
    _ = n(43747),
    h = n(511050),
    x = n(82856),
    y = n(960919),
    O = n(63063),
    j = n(272008),
    C = n(497505),
    v = n(46140),
    S = n(981631),
    N = n(215023),
    Z = n(388032),
    B = n(696693),
    E = n(557256),
    I = n(582425),
    T = n(345554),
    L = n(88490),
    P = n(466674);
function w() {
    let e = (0, i.e7)([b.Z], () => b.Z.useReducedMotion),
        [t, n] = a.useState(!e),
        [c, d] = a.useState(!1),
        f = a.useRef(null),
        p = (0, u.ZP)(),
        g = (0, l.apv)(p),
        _ = g ? T.Z : I.Z,
        h = g ? P.Z : L.Z;
    a.useEffect(() => {
        if (!t && !e) {
            var n;
            null == (n = f.current) || n.play();
        }
    }, [t, e]);
    let x = (0, l.q_F)({
        from: { y: 50 },
        to: { y: 0 },
        config: {
            tension: 170,
            friction: 26
        }
    });
    return (0, r.jsxs)(s.animated.div, {
        className: B.videoLayers,
        style: x,
        children: [
            !c && (0, r.jsx)('div', { className: B.videoPlaceholder }),
            (0, r.jsx)(m.Z, {
                ref: f,
                autoPlay: !1,
                loop: !0,
                muted: !0,
                playsInline: !0,
                className: o()(B.videoAsset, { [B.hidden]: t }),
                controls: !1,
                children: (0, r.jsx)('source', {
                    src: h,
                    type: 'video/webm'
                })
            }),
            (0, r.jsx)(m.Z, {
                autoPlay: !0,
                muted: !0,
                playsInline: !0,
                className: o()(B.videoAsset, { [B.hidden]: !t }),
                controls: !1,
                onLoadedData: () => d(!0),
                onEnded: () => {
                    n(!1);
                },
                children: (0, r.jsx)('source', {
                    src: _,
                    type: 'video/webm'
                })
            })
        ]
    });
}
function R(e) {
    let { transitionState: t, balance: n, onSubmit: a, onClose: c, state: o } = e;
    return (0, r.jsxs)(l.Y0X, {
        transitionState: t,
        size: l.CgR.DYNAMIC,
        className: B.modal,
        children: [
            (0, r.jsx)('div', {
                className: B.header,
                children: (0, r.jsx)(l.olH, {
                    className: B.closeBtn,
                    onClick: c
                })
            }),
            'loading' === o
                ? (0, r.jsx)('div', {
                      className: B.spinnerContainer,
                      children: (0, r.jsx)(l.$jN, { type: l.RAz.SPINNING_CIRCLE })
                  })
                : 'success' === o
                  ? (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(w, {}),
                            (0, r.jsx)(l.X6q, {
                                variant: 'heading-lg/medium',
                                className: B.title,
                                children: Z.intl.format(Z.t['8l9H0t'], {
                                    balanceHook: () =>
                                        (0, r.jsxs)('span', {
                                            className: B.orbsBalance,
                                            children: [
                                                (0, r.jsx)(y.Z, {
                                                    shouldUseThemeColor: !0,
                                                    className: B.orbsBalanceIcon
                                                }),
                                                n
                                            ]
                                        })
                                })
                            }),
                            (0, r.jsx)(l.Text, {
                                variant: 'text-sm/normal',
                                className: B.subtext,
                                children: Z.intl.string(Z.t.EDUOIC)
                            }),
                            (0, r.jsx)(l.zxk, {
                                className: B.ctaBtn,
                                onClick: a,
                                children: Z.intl.string(Z.t.WYchdX)
                            }),
                            (0, r.jsx)(l.zxk, {
                                look: l.iLD.LINK,
                                color: l.Ttl.CUSTOM,
                                className: B.orbsTermsButton,
                                onClick: () => window.open(O.Z.getArticleURL(S.BhN.VIRTUAL_CURRENCY_LEARN_MORE)),
                                children: Z.intl.string(Z.t['7kTAgI'])
                            })
                        ]
                    })
                  : (0, r.jsxs)('div', {
                        className: B.errorContainer,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                className: B.errorImage,
                                src: E
                            }),
                            (0, r.jsxs)('div', {
                                className: B.errorContentContainer,
                                children: [
                                    (0, r.jsx)(l.X6q, {
                                        variant: 'heading-xl/medium',
                                        className: B.errorHeader,
                                        children: Z.intl.string(Z.t.tWYWJy)
                                    }),
                                    (0, r.jsx)(l.Text, {
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        children: Z.intl.string(Z.t.JNQRU1)
                                    })
                                ]
                            }),
                            (0, r.jsx)(l.zxk, {
                                className: B.ctaBtn,
                                onClick: c,
                                children: Z.intl.string(Z.t.cpT0Cg)
                            })
                        ]
                    })
        ]
    });
}
function k(e) {
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
    let { balance: i } = (0, _.A)(),
        l = (function (e, t, n) {
            let [r, c] = a.useState('loading'),
                [o, s] = a.useState(!1),
                { balance: i } = (0, _.A)(),
                l = (0, d.Z)(i),
                [u, b] = a.useState(!1);
            return (a.useEffect(() => {
                let e = null;
                return (
                    'success' === r &&
                        t &&
                        (e = setTimeout(() => {
                            b(!0);
                        }, 1000)),
                    () => {
                        null != e && clearTimeout(e);
                    }
                );
            }, [r, t]),
            a.useEffect(() => {
                !o && null != i && null != l && i > l && s(!0);
            }, [i, l, o]),
            a.useEffect(() => {
                (0, j.QB)(e, C.y$.CROSS_PLATFORM, n)
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
        { openIntroToOrbsClaimedCoachmark: u } = (0, h.Z)({ location: 'QuestsOrbsRewardModal' }),
        b = a.useCallback(() => {
            o(),
                (0, g.Y)({
                    pageType: S.ZY5.GLOBAL_DISCOVERY_QUESTS,
                    sectionType: S.jXE.ORBS_REWARD_MODAL,
                    ctaObject: S.qAy.CTA_TO_ORBS_SHOP
                }),
                (0, p.mK)({
                    openInLayer: !1,
                    tab: N.AW.ORBS,
                    analyticsLocations: [],
                    analyticsSource: c.id === v.V6 ? f.Z.INTRO_TO_ORBS_QUEST : f.Z.QUEST_HOME_PAGE
                }),
                u({ delayMS: 300 });
        }, [o, u, c.id]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(x.o, {}),
            (0, r.jsx)(
                R,
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
                        balance: i,
                        onClose: o,
                        onSubmit: b,
                        state: l
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
