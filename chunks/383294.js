n.d(t, { default: () => A }), n(388685);
var r = n(255367),
    a = n(73800),
    o = n(120356),
    c = n.n(o),
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
    v = n(82856),
    O = n(960919),
    g = n(272008),
    C = n(497505),
    x = n(46140),
    _ = n(981631),
    S = n(215023),
    w = n(388032),
    Z = n(696693),
    P = n(557256),
    I = n(582425),
    N = n(345554),
    k = n(88490),
    E = n(466674);
function R() {
    let e = (0, l.e7)([f.Z], () => f.Z.useReducedMotion),
        [t, n] = a.useState(!e),
        [o, d] = a.useState(!1),
        b = a.useRef(null),
        m = (0, u.ZP)(),
        y = (0, i.apv)(m),
        h = y ? N.Z : I.Z,
        j = y ? E.Z : k.Z;
    a.useEffect(() => {
        if (!t && !e) {
            var n;
            null == (n = b.current) || n.play();
        }
    }, [t, e]);
    let v = (0, i.q_F)({
        from: { y: 50 },
        to: { y: 0 },
        config: {
            tension: 170,
            friction: 26
        }
    });
    return (0, r.jsxs)(s.animated.div, {
        className: Z.videoLayers,
        style: v,
        children: [
            !o && (0, r.jsx)('div', { className: Z.videoPlaceholder }),
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
    let { transitionState: t, balance: n, onSubmit: a, onClose: o, state: c } = e;
    return (0, r.jsxs)(i.Y0X, {
        transitionState: t,
        size: i.CgR.DYNAMIC,
        className: Z.modal,
        children: [
            (0, r.jsx)('div', {
                className: Z.header,
                children: (0, r.jsx)(i.olH, {
                    className: Z.closeBtn,
                    onClick: o
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
                            (0, r.jsx)(R, {}),
                            (0, r.jsx)(i.X6q, {
                                variant: 'heading-lg/medium',
                                className: Z.title,
                                children: w.intl.format(w.t['8l9H0t'], {
                                    balanceHook: () =>
                                        (0, r.jsxs)('span', {
                                            className: Z.orbsBalance,
                                            children: [
                                                (0, r.jsx)(O.Z, {
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
                                children: w.intl.string(w.t.EDUOIC)
                            }),
                            (0, r.jsx)(i.zxk, {
                                className: Z.ctaBtn,
                                onClick: a,
                                children: w.intl.string(w.t.WYchdX)
                            })
                        ]
                    })
                  : (0, r.jsxs)('div', {
                        className: Z.errorContainer,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                className: Z.errorImage,
                                src: P
                            }),
                            (0, r.jsxs)('div', {
                                className: Z.errorContentContainer,
                                children: [
                                    (0, r.jsx)(i.X6q, {
                                        variant: 'heading-xl/medium',
                                        className: Z.errorHeader,
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
                                className: Z.ctaBtn,
                                onClick: o,
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
        { quest: o, onClose: c } = e,
        s = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        a = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
            }
            return a;
        })(e, ['quest', 'onClose']);
    let { balance: l } = (0, h.A)(),
        i = (function (e, t, n) {
            let [r, o] = a.useState('loading'),
                [c, s] = a.useState(!1),
                { balance: l } = (0, h.A)(),
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
                !c && null != l && null != i && l > i && s(!0);
            }, [l, i, c]),
            a.useEffect(() => {
                (0, g.QB)(e, C.y$.CROSS_PLATFORM, n)
                    .then((e) => {
                        if ((null == e ? void 0 : e.claimedAt) != null) return void o('success');
                        o('error');
                    })
                    .catch(() => {
                        o('error');
                    });
            }, [e, n]),
            'error' === r)
                ? r
                : 'success' === r && (c || u)
                  ? 'success'
                  : 'loading';
        })(o.id, o.preview, s.location),
        { openIntroToOrbsClaimedCoachmark: u } = (0, j.Z)({ location: 'QuestsOrbsRewardModal' }),
        f = a.useCallback(() => {
            c(),
                (0, y.Y)({
                    pageType: _.ZY5.GLOBAL_DISCOVERY_QUESTS,
                    sectionType: _.jXE.ORBS_REWARD_MODAL,
                    ctaObject: _.qAy.CTA_TO_ORBS_SHOP
                }),
                (0, m.mK)({
                    openInLayer: !1,
                    tab: S.AW.ORBS,
                    analyticsLocations: [],
                    analyticsSource: o.id === x.V6 ? b.Z.INTRO_TO_ORBS_QUEST : b.Z.QUEST_HOME_PAGE
                }),
                u({ delayMS: 300 });
        }, [c, u, o.id]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(v.o, { onClose: c }),
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
