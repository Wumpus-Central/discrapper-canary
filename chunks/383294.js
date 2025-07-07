(t.d(n, { default: () => L }), t(388685));
var r = t(255367),
    a = t(73800),
    c = t(120356),
    o = t.n(c),
    s = t(451463),
    i = t(442837),
    l = t(481060),
    d = t(110924),
    u = t(410030),
    b = t(607070),
    f = t(100527),
    p = t(335131),
    m = t(70097),
    g = t(507808),
    _ = t(43747),
    h = t(511050),
    x = t(82856),
    y = t(960919),
    O = t(272008),
    j = t(497505),
    C = t(46140),
    v = t(981631),
    S = t(215023),
    N = t(388032),
    B = t(696693),
    I = t(557256),
    Z = t(582425),
    E = t(345554),
    P = t(88490),
    T = t(466674);
function w() {
    let e = (0, i.e7)([b.Z], () => b.Z.useReducedMotion),
        [n, t] = a.useState(!e),
        [c, d] = a.useState(!1),
        f = a.useRef(null),
        p = (0, u.ZP)(),
        g = (0, l.apv)(p),
        _ = g ? E.Z : Z.Z,
        h = g ? T.Z : P.Z;
    a.useEffect(() => {
        if (!n && !e) {
            var t;
            null == (t = f.current) || t.play();
        }
    }, [n, e]);
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
                className: o()(B.videoAsset, { [B.hidden]: n }),
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
                className: o()(B.videoAsset, { [B.hidden]: !n }),
                controls: !1,
                onLoadedData: () => d(!0),
                onEnded: () => {
                    t(!1);
                },
                children: (0, r.jsx)('source', {
                    src: _,
                    type: 'video/webm'
                })
            })
        ]
    });
}
function k(e) {
    let { transitionState: n, balance: t, onSubmit: a, onClose: c, state: o } = e;
    return (0, r.jsxs)(l.Y0X, {
        transitionState: n,
        size: l.CgR.DYNAMIC,
        className: B.modal,
        parentComponent: 'QuestsOrbsRewardModal',
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
                                children: N.intl.format(N.t['8l9H0t'], {
                                    balanceHook: () =>
                                        (0, r.jsxs)('span', {
                                            className: B.orbsBalance,
                                            children: [
                                                (0, r.jsx)(y.Z, {
                                                    shouldUseThemeColor: !0,
                                                    className: B.orbsBalanceIcon
                                                }),
                                                t
                                            ]
                                        })
                                })
                            }),
                            (0, r.jsx)(l.Text, {
                                variant: 'text-sm/normal',
                                className: B.subtext,
                                children: N.intl.string(N.t.EDUOIC)
                            }),
                            (0, r.jsx)(l.zxk, {
                                className: B.ctaBtn,
                                onClick: a,
                                children: N.intl.string(N.t.WYchdX)
                            }),
                            (0, r.jsx)(l.zxk, {
                                look: l.iLD.LINK,
                                color: l.Ttl.CUSTOM,
                                className: B.orbsTermsButton,
                                onClick: () => window.open(v.EYA.PAID_TERMS_ORBS),
                                children: N.intl.string(N.t['7kTAgI'])
                            })
                        ]
                    })
                  : (0, r.jsxs)('div', {
                        className: B.errorContainer,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                className: B.errorImage,
                                src: I
                            }),
                            (0, r.jsxs)('div', {
                                className: B.errorContentContainer,
                                children: [
                                    (0, r.jsx)(l.X6q, {
                                        variant: 'heading-xl/medium',
                                        className: B.errorHeader,
                                        children: N.intl.string(N.t.tWYWJy)
                                    }),
                                    (0, r.jsx)(l.Text, {
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        children: N.intl.string(N.t.JNQRU1)
                                    })
                                ]
                            }),
                            (0, r.jsx)(l.zxk, {
                                className: B.ctaBtn,
                                onClick: c,
                                children: N.intl.string(N.t.cpT0Cg)
                            })
                        ]
                    })
        ]
    });
}
function L(e) {
    var n,
        t,
        { quest: c, onClose: o } = e,
        s = (function (e, n) {
            if (null == e) return {};
            var t,
                r,
                a = (function (e, n) {
                    if (null == e) return {};
                    var t,
                        r,
                        a = {},
                        c = Object.keys(e);
                    for (r = 0; r < c.length; r++) ((t = c[r]), n.indexOf(t) >= 0 || (a[t] = e[t]));
                    return a;
                })(e, n);
            if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(e);
                for (r = 0; r < c.length; r++) ((t = c[r]), !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (a[t] = e[t]));
            }
            return a;
        })(e, ['quest', 'onClose']);
    let { balance: i } = (0, _.A)(),
        l = (function (e, n, t) {
            let [r, c] = a.useState('loading'),
                [o, s] = a.useState(!1),
                { balance: i } = (0, _.A)(),
                l = (0, d.Z)(i),
                [u, b] = a.useState(!1);
            return (a.useEffect(() => {
                let e = null;
                return (
                    'success' === r &&
                        n &&
                        (e = setTimeout(() => {
                            b(!0);
                        }, 1000)),
                    () => {
                        null != e && clearTimeout(e);
                    }
                );
            }, [r, n]),
            a.useEffect(() => {
                !o && null != i && null != l && i > l && s(!0);
            }, [i, l, o]),
            a.useEffect(() => {
                (0, O.QB)(e, j.y$.CROSS_PLATFORM, t)
                    .then((e) => {
                        if ((null == e ? void 0 : e.claimedAt) != null) return void c('success');
                        c('error');
                    })
                    .catch(() => {
                        c('error');
                    });
            }, [e, t]),
            'error' === r)
                ? r
                : 'success' === r && (o || u)
                  ? 'success'
                  : 'loading';
        })(c.id, c.preview, s.location),
        { openIntroToOrbsClaimedCoachmark: u } = (0, h.Z)({ location: 'QuestsOrbsRewardModal' }),
        b = a.useCallback(() => {
            (o(),
                (0, g.Y)({
                    pageType: v.ZY5.GLOBAL_DISCOVERY_QUESTS,
                    sectionType: v.jXE.ORBS_REWARD_MODAL,
                    ctaObject: v.qAy.CTA_TO_ORBS_SHOP
                }),
                (0, p.mK)({
                    openInLayer: !1,
                    tab: S.AW.ORBS,
                    analyticsLocations: [],
                    analyticsSource: c.id === C.V6 ? f.Z.INTRO_TO_ORBS_QUEST : f.Z.QUEST_HOME_PAGE
                }),
                u({ delayMS: 300 }));
        }, [o, u, c.id]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(x.o, {}),
            (0, r.jsx)(
                k,
                ((n = (function (e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(t).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                })
                            )),
                            r.forEach(function (n) {
                                var r;
                                ((r = t[n]),
                                    n in e
                                        ? Object.defineProperty(e, n, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[n] = r));
                            }));
                    }
                    return e;
                })({}, s)),
                (t = t =
                    {
                        balance: i,
                        onClose: o,
                        onSubmit: b,
                        state: l
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
                    : (function (e, n) {
                          var t = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              t.push.apply(t, r);
                          }
                          return t;
                      })(Object(t)).forEach(function (e) {
                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
                      }),
                n)
            ),
            ';'
        ]
    });
}
