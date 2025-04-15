n.d(t, { default: () => A }), n(388685);
var r = n(200651),
    a = n(192379),
    c = n(120356),
    o = n.n(c),
    l = n(200100),
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
    O = n(511050),
    j = n(82856),
    v = n(272008),
    g = n(497505),
    C = n(46140),
    x = n(981631),
    S = n(215023),
    w = n(388032),
    _ = n(696693),
    N = n(557256),
    P = n(582425),
    Z = n(345554),
    E = n(88490),
    k = n(466674);
function R() {
    let e = (0, s.e7)([f.Z], () => f.Z.useReducedMotion),
        [t, n] = a.useState(!e),
        [c, d] = a.useState(!1),
        b = a.useRef(null),
        m = (0, u.ZP)(),
        y = (0, i.apv)(m),
        h = y ? Z.Z : P.Z,
        O = y ? k.Z : E.Z;
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
        className: _.videoLayers,
        style: j,
        children: [
            !c && (0, r.jsx)('div', { className: _.videoPlaceholder }),
            (0, r.jsx)(p.Z, {
                ref: b,
                autoPlay: !1,
                loop: !0,
                muted: !0,
                playsInline: !0,
                className: o()(_.videoAsset, { [_.hidden]: t }),
                controls: !1,
                children: (0, r.jsx)('source', {
                    src: O,
                    type: 'video/webm'
                })
            }),
            (0, r.jsx)(p.Z, {
                autoPlay: !0,
                muted: !0,
                playsInline: !0,
                className: o()(_.videoAsset, { [_.hidden]: !t }),
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
function I(e) {
    let { transitionState: t, balance: n, onSubmit: a, onClose: c, state: o } = e;
    return (0, r.jsxs)(i.Y0X, {
        transitionState: t,
        size: i.CgR.DYNAMIC,
        className: _.modal,
        children: [
            (0, r.jsx)('div', {
                className: _.header,
                children: (0, r.jsx)(i.olH, {
                    className: _.closeBtn,
                    onClick: c
                })
            }),
            'loading' === o
                ? (0, r.jsx)('div', {
                      className: _.spinnerContainer,
                      children: (0, r.jsx)(i.$jN, { type: i.RAz.SPINNING_CIRCLE })
                  })
                : 'success' === o
                  ? (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(R, {}),
                            (0, r.jsx)(i.X6q, {
                                variant: 'heading-lg/medium',
                                className: _.title,
                                children: w.NW.formatToPlainString(w.t.Kr9pYW, { balance: n })
                            }),
                            (0, r.jsx)(i.Text, {
                                variant: 'text-xs/normal',
                                className: _.subtext,
                                children: w.NW.string(w.t.EDUOIC)
                            }),
                            (0, r.jsx)(i.zxk, {
                                className: _.ctaBtn,
                                onClick: a,
                                children: w.NW.string(w.t.WYchdX)
                            })
                        ]
                    })
                  : (0, r.jsxs)('div', {
                        className: _.errorContainer,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                className: _.errorImage,
                                src: N
                            }),
                            (0, r.jsxs)('div', {
                                className: _.errorContentContainer,
                                children: [
                                    (0, r.jsx)(i.X6q, {
                                        variant: 'heading-xl/medium',
                                        className: _.errorHeader,
                                        children: w.NW.string(w.t.tWYWJy)
                                    }),
                                    (0, r.jsx)(i.Text, {
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        children: w.NW.string(w.t.JNQRU1)
                                    })
                                ]
                            }),
                            (0, r.jsx)(i.zxk, {
                                className: _.ctaBtn,
                                onClick: c,
                                children: w.NW.string(w.t.cpT0Cg)
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
                (0, v.QB)(e, g.y$.CROSS_PLATFORM, n)
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
        { openIntroToOrbsClaimedCoachmark: u } = (0, O.Z)({ location: 'QuestsOrbsRewardModal' }),
        f = a.useCallback(
            async function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                await (0, j.vp)({ hideImmediately: e }), o();
            },
            [o]
        ),
        p = a.useCallback(() => {
            f(!0),
                (0, y.Y)({
                    pageType: x.ZY5.GLOBAL_DISCOVERY_QUESTS,
                    sectionType: x.jXE.ORBS_REWARD_MODAL,
                    ctaObject: x.qAy.ORBS_QUESTS_REWARD_MODAL_SHOP_CTA
                }),
                (0, m.mK)({
                    openInLayer: !1,
                    tab: S.AW.ORBS,
                    analyticsLocations: [],
                    analyticsSource: c.id === C.V6 ? b.Z.INTRO_TO_ORBS_QUEST : b.Z.QUEST_HOME_PAGE
                }),
                u({ delayMS: 300 });
        }, [f, u, c.id]);
    return (0, r.jsx)(
        I,
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
                onClose: f,
                onSubmit: p,
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
    );
}
