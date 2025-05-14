n.d(t, { default: () => A }), n(388685);
var r = n(255367),
    o = n(73800),
    a = n(120356),
    c = n.n(a),
    s = n(683305),
    l = n(442837),
    i = n(481060),
    d = n(110924),
    u = n(410030),
    f = n(607070),
    b = n(100527),
    m = n(335131),
    p = n(70097),
    y = n(507808),
    h = n(43747),
    j = n(511050),
    O = n(82856),
    g = n(960919),
    v = n(63063),
    C = n(272008),
    x = n(497505),
    _ = n(46140),
    S = n(981631),
    w = n(215023),
    N = n(388032),
    Z = n(696693),
    I = n(557256),
    k = n(582425),
    P = n(345554),
    R = n(88490),
    E = n(466674);
function T() {
    let e = (0, l.e7)([f.Z], () => f.Z.useReducedMotion),
        [t, n] = o.useState(!e),
        [a, d] = o.useState(!1),
        b = o.useRef(null),
        m = (0, u.ZP)(),
        y = (0, i.apv)(m),
        h = y ? P.Z : k.Z,
        j = y ? E.Z : R.Z;
    o.useEffect(() => {
        if (!t && !e) {
            var n;
            null == (n = b.current) || n.play();
        }
    }, [t, e]);
    let O = (0, i.q_F)({
        from: { y: 50 },
        to: { y: 0 },
        config: {
            tension: 170,
            friction: 26
        }
    });
    return (0, r.jsxs)(s.animated.div, {
        className: Z.videoLayers,
        style: O,
        children: [
            !a && (0, r.jsx)('div', { className: Z.videoPlaceholder }),
            (0, r.jsx)(p.Z, {
                ref: b,
                autoPlay: !1,
                loop: !0,
                muted: !0,
                playsInline: !0,
                className: c()(Z.videoAsset, { [Z.hidden]: t }),
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
                className: c()(Z.videoAsset, { [Z.hidden]: !t }),
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
function B(e) {
    let { transitionState: t, balance: n, onSubmit: o, onClose: a, state: c } = e;
    return (0, r.jsxs)(i.Y0X, {
        transitionState: t,
        size: i.CgR.DYNAMIC,
        className: Z.modal,
        children: [
            (0, r.jsx)('div', {
                className: Z.header,
                children: (0, r.jsx)(i.olH, {
                    className: Z.closeBtn,
                    onClick: a
                })
            }),
            'loading' === c
                ? (0, r.jsx)('div', {
                      className: Z.spinnerContainer,
                      children: (0, r.jsx)(i.$jN, { type: i.RAz.SPINNING_CIRCLE })
                  })
                : 'success' === c
                  ? (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(T, {}),
                            (0, r.jsx)(i.X6q, {
                                variant: 'heading-lg/medium',
                                className: Z.title,
                                children: N.intl.format(N.t['8l9H0t'], {
                                    balanceHook: () =>
                                        (0, r.jsxs)('span', {
                                            className: Z.orbsBalance,
                                            children: [
                                                (0, r.jsx)(g.Z, {
                                                    shouldUseThemeColor: !0,
                                                    className: Z.orbsBalanceIcon
                                                }),
                                                n
                                            ]
                                        })
                                })
                            }),
                            (0, r.jsx)(i.Text, {
                                variant: 'text-sm/normal',
                                className: Z.subtext,
                                children: N.intl.string(N.t.EDUOIC)
                            }),
                            (0, r.jsx)(i.zxk, {
                                className: Z.ctaBtn,
                                onClick: o,
                                children: N.intl.string(N.t.WYchdX)
                            }),
                            (0, r.jsx)(i.zxk, {
                                look: i.iLD.LINK,
                                color: i.Ttl.CUSTOM,
                                className: Z.orbsTermsButton,
                                onClick: () => window.open(v.Z.getArticleURL(S.BhN.VIRTUAL_CURRENCY_LEARN_MORE)),
                                children: N.intl.string(N.t['7kTAgI'])
                            })
                        ]
                    })
                  : (0, r.jsxs)('div', {
                        className: Z.errorContainer,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                className: Z.errorImage,
                                src: I
                            }),
                            (0, r.jsxs)('div', {
                                className: Z.errorContentContainer,
                                children: [
                                    (0, r.jsx)(i.X6q, {
                                        variant: 'heading-xl/medium',
                                        className: Z.errorHeader,
                                        children: N.intl.string(N.t.tWYWJy)
                                    }),
                                    (0, r.jsx)(i.Text, {
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        children: N.intl.string(N.t.JNQRU1)
                                    })
                                ]
                            }),
                            (0, r.jsx)(i.zxk, {
                                className: Z.ctaBtn,
                                onClick: a,
                                children: N.intl.string(N.t.cpT0Cg)
                            })
                        ]
                    })
        ]
    });
}
function A(e) {
    var t,
        n,
        { quest: a, onClose: c } = e,
        s = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            }
            return o;
        })(e, ['quest', 'onClose']);
    let { balance: l } = (0, h.A)(),
        i = (function (e, t, n) {
            let [r, a] = o.useState('loading'),
                [c, s] = o.useState(!1),
                { balance: l } = (0, h.A)(),
                i = (0, d.Z)(l),
                [u, f] = o.useState(!1);
            return (o.useEffect(() => {
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
            o.useEffect(() => {
                !c && null != l && null != i && l > i && s(!0);
            }, [l, i, c]),
            o.useEffect(() => {
                (0, C.QB)(e, x.y$.CROSS_PLATFORM, n)
                    .then((e) => {
                        if ((null == e ? void 0 : e.claimedAt) != null) return void a('success');
                        a('error');
                    })
                    .catch(() => {
                        a('error');
                    });
            }, [e, n]),
            'error' === r)
                ? r
                : 'success' === r && (c || u)
                  ? 'success'
                  : 'loading';
        })(a.id, a.preview, s.location),
        { openIntroToOrbsClaimedCoachmark: u } = (0, j.Z)({ location: 'QuestsOrbsRewardModal' }),
        f = o.useCallback(() => {
            c(),
                (0, y.Y)({
                    pageType: S.ZY5.GLOBAL_DISCOVERY_QUESTS,
                    sectionType: S.jXE.ORBS_REWARD_MODAL,
                    ctaObject: S.qAy.CTA_TO_ORBS_SHOP
                }),
                (0, m.mK)({
                    openInLayer: !1,
                    tab: w.AW.ORBS,
                    analyticsLocations: [],
                    analyticsSource: a.id === _.V6 ? b.Z.INTRO_TO_ORBS_QUEST : b.Z.QUEST_HOME_PAGE
                }),
                u({ delayMS: 300 });
        }, [c, u, a.id]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(O.o, { onClose: c }),
            (0, r.jsx)(
                B,
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
                        onClose: c,
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
