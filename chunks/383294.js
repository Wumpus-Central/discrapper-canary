(t.d(n, { default: () => R }), t(388685));
var r = t(255367),
    a = t(73800),
    c = t(120356),
    o = t.n(c),
    s = t(652141),
    i = t(442837),
    l = t(755721),
    d = t(481060),
    u = t(110924),
    b = t(410030),
    f = t(607070),
    p = t(100527),
    m = t(335131),
    g = t(70097),
    _ = t(507808),
    h = t(43747),
    x = t(511050),
    y = t(82856),
    O = t(960919),
    j = t(272008),
    C = t(497505),
    v = t(46140),
    S = t(981631),
    N = t(215023),
    B = t(388032),
    Z = t(696693),
    E = t(557256),
    I = t(582425),
    P = t(345554),
    T = t(88490),
    w = t(466674);
function L() {
    let e = (0, i.e7)([f.Z], () => f.Z.useReducedMotion),
        [n, t] = a.useState(!e),
        [c, l] = a.useState(!1),
        u = a.useRef(null),
        p = (0, b.ZP)(),
        m = (0, d.apv)(p),
        _ = m ? P.Z : I.Z,
        h = m ? w.Z : T.Z;
    a.useEffect(() => {
        if (!n && !e) {
            var t;
            null == (t = u.current) || t.play();
        }
    }, [n, e]);
    let x = (0, d.q_F)({
        from: { y: 50 },
        to: { y: 0 },
        config: {
            tension: 170,
            friction: 26
        }
    });
    return (0, r.jsxs)(s.animated.div, {
        className: Z.videoLayers,
        style: x,
        children: [
            !c && (0, r.jsx)('div', { className: Z.videoPlaceholder }),
            (0, r.jsx)(g.Z, {
                ref: u,
                autoPlay: !1,
                loop: !0,
                muted: !0,
                playsInline: !0,
                className: o()(Z.videoAsset, { [Z.hidden]: n }),
                controls: !1,
                children: (0, r.jsx)('source', {
                    src: h,
                    type: 'video/webm'
                })
            }),
            (0, r.jsx)(g.Z, {
                autoPlay: !0,
                muted: !0,
                playsInline: !0,
                className: o()(Z.videoAsset, { [Z.hidden]: !n }),
                controls: !1,
                onLoadedData: () => l(!0),
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
function A(e) {
    let { transitionState: n, balance: t, onSubmit: a, onClose: c, state: o } = e;
    return (0, r.jsxs)(d.Y0X, {
        transitionState: n,
        size: d.CgR.DYNAMIC,
        className: Z.modal,
        parentComponent: 'QuestsOrbsRewardModal',
        children: [
            (0, r.jsx)('div', {
                className: Z.header,
                children: (0, r.jsx)(d.olH, {
                    className: Z.closeBtn,
                    onClick: c
                })
            }),
            'loading' === o
                ? (0, r.jsx)('div', {
                      className: Z.spinnerContainer,
                      children: (0, r.jsx)(d.$jN, { type: d.RAz.SPINNING_CIRCLE })
                  })
                : 'success' === o
                  ? (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(L, {}),
                            (0, r.jsx)(d.X6q, {
                                variant: 'heading-lg/medium',
                                className: Z.title,
                                children: B.intl.format(B.t['8l9H0t'], {
                                    balanceHook: () =>
                                        (0, r.jsxs)('span', {
                                            className: Z.orbsBalance,
                                            children: [
                                                (0, r.jsx)(O.Z, {
                                                    shouldUseThemeColor: !0,
                                                    className: Z.orbsBalanceIcon
                                                }),
                                                t
                                            ]
                                        })
                                })
                            }),
                            (0, r.jsx)(d.Text, {
                                variant: 'text-sm/normal',
                                className: Z.subtext,
                                children: B.intl.string(B.t.EDUOIC)
                            }),
                            (0, r.jsx)(l.zx, {
                                className: Z.ctaBtn,
                                onClick: a,
                                children: B.intl.string(B.t.WYchdX)
                            }),
                            (0, r.jsx)(l.zx, {
                                look: l.iL.LINK,
                                color: l.Tt.CUSTOM,
                                className: Z.orbsTermsButton,
                                onClick: () => window.open(S.EYA.PAID_TERMS_ORBS),
                                children: B.intl.string(B.t['7kTAgI'])
                            })
                        ]
                    })
                  : (0, r.jsxs)('div', {
                        className: Z.errorContainer,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                className: Z.errorImage,
                                src: E
                            }),
                            (0, r.jsxs)('div', {
                                className: Z.errorContentContainer,
                                children: [
                                    (0, r.jsx)(d.X6q, {
                                        variant: 'heading-xl/medium',
                                        className: Z.errorHeader,
                                        children: B.intl.string(B.t.tWYWJy)
                                    }),
                                    (0, r.jsx)(d.Text, {
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        children: B.intl.string(B.t.JNQRU1)
                                    })
                                ]
                            }),
                            (0, r.jsx)(l.zx, {
                                className: Z.ctaBtn,
                                onClick: c,
                                children: B.intl.string(B.t.cpT0Cg)
                            })
                        ]
                    })
        ]
    });
}
function R(e) {
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
    let { balance: i } = (0, h.A)(),
        l = (function (e, n, t) {
            let [r, c] = a.useState('loading'),
                [o, s] = a.useState(!1),
                { balance: i } = (0, h.A)(),
                l = (0, u.Z)(i),
                [d, b] = a.useState(!1);
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
                (0, j.QB)(e, C.y$.CROSS_PLATFORM, t)
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
                : 'success' === r && (o || d)
                  ? 'success'
                  : 'loading';
        })(c.id, c.preview, s.location),
        { openIntroToOrbsClaimedCoachmark: d } = (0, x.Z)({ location: 'QuestsOrbsRewardModal' }),
        b = a.useCallback(() => {
            (o(),
                (0, _.Y)({
                    pageType: S.ZY5.GLOBAL_DISCOVERY_QUESTS,
                    sectionType: S.jXE.ORBS_REWARD_MODAL,
                    ctaObject: S.qAy.CTA_TO_ORBS_SHOP
                }),
                (0, m.mK)({
                    openInLayer: !1,
                    tab: N.AW.ORBS,
                    analyticsLocations: [],
                    analyticsSource: c.id === v.V6 ? p.Z.INTRO_TO_ORBS_QUEST : p.Z.QUEST_HOME_PAGE
                }),
                d({ delayMS: 300 }));
        }, [o, d, c.id]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(y.o, {}),
            (0, r.jsx)(
                A,
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
            )
        ]
    });
}
