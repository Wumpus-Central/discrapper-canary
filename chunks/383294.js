n.d(t, { default: () => Z }), n(47120);
var r = n(200651),
    a = n(192379),
    o = n(120356),
    c = n.n(o),
    l = n(642128),
    i = n(442837),
    s = n(481060),
    u = n(110924),
    d = n(607070),
    f = n(100527),
    m = n(335131),
    b = n(70097),
    y = n(43747),
    p = n(511050),
    h = n(82856),
    j = n(272008),
    g = n(497505),
    O = n(918701),
    v = n(46140),
    C = n(215023),
    x = n(388032),
    w = n(696693),
    N = n(557256),
    S = n(639118),
    _ = n(942847);
function k() {
    let e = (0, i.e7)([d.Z], () => d.Z.useReducedMotion),
        [t, n] = a.useState(!e),
        o = a.useRef(null);
    a.useEffect(() => {
        if (!t && !e) {
            var n;
            null == (n = o.current) || n.play();
        }
    }, [t, e]);
    let u = (0, s.q_F)({
        from: { y: 50 },
        to: { y: 0 },
        config: {
            tension: 170,
            friction: 26
        }
    });
    return (0, r.jsxs)(l.animated.div, {
        className: w.videoLayers,
        style: u,
        children: [
            (0, r.jsx)(b.Z, {
                ref: o,
                autoPlay: !1,
                loop: !0,
                muted: !0,
                playsInline: !0,
                className: c()(w.rotateVideo, { [w.hidden]: t }),
                controls: !1,
                children: (0, r.jsx)('source', {
                    src: _.Z,
                    type: 'video/webm'
                })
            }),
            (0, r.jsx)(b.Z, {
                autoPlay: !0,
                muted: !0,
                playsInline: !0,
                className: c()(w.entryVideo, { [w.hidden]: !t }),
                controls: !1,
                onEnded: () => {
                    n(!1);
                },
                children: (0, r.jsx)('source', {
                    src: S.Z,
                    type: 'video/webm'
                })
            })
        ]
    });
}
function P(e) {
    let { transitionState: t, rewardAmount: n, balance: a, onSubmit: o, onClose: c, state: l } = e;
    return (0, r.jsxs)(s.Y0X, {
        transitionState: t,
        size: s.CgR.DYNAMIC,
        className: w.modal,
        children: [
            (0, r.jsxs)('div', {
                className: w.header,
                children: [
                    null != n &&
                        (0, r.jsxs)(s.Text, {
                            variant: 'text-sm/bold',
                            color: 'always-white',
                            className: w.amountLabel,
                            children: ['+', n]
                        }),
                    (0, r.jsx)(s.olH, {
                        className: w.closeBtn,
                        onClick: c
                    })
                ]
            }),
            'loading' === l
                ? (0, r.jsx)('div', {
                      className: w.spinnerContainer,
                      children: (0, r.jsx)(s.$jN, { type: s.RAz.SPINNING_CIRCLE })
                  })
                : 'success' === l
                  ? (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(k, {}),
                            (0, r.jsx)(s.X6q, {
                                variant: 'heading-lg/medium',
                                color: 'always-white',
                                className: w.title,
                                children: x.NW.formatToPlainString(x.t.Kr9pYW, { balance: a })
                            }),
                            (0, r.jsx)(s.Text, {
                                variant: 'text-xs/normal',
                                className: w.subtext,
                                children: x.NW.string(x.t.EDUOIC)
                            }),
                            (0, r.jsx)(s.zxk, {
                                className: w.ctaBtn,
                                onClick: o,
                                children: x.NW.string(x.t.WYchdX)
                            })
                        ]
                    })
                  : (0, r.jsxs)('div', {
                        className: w.errorContainer,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                className: w.errorImage,
                                src: N
                            }),
                            (0, r.jsxs)('div', {
                                className: w.errorContentContainer,
                                children: [
                                    (0, r.jsx)(s.X6q, {
                                        variant: 'heading-xl/medium',
                                        color: 'always-white',
                                        className: w.errorHeader,
                                        children: x.NW.string(x.t.tWYWJy)
                                    }),
                                    (0, r.jsx)(s.Text, {
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        children: x.NW.string(x.t.JNQRU1)
                                    })
                                ]
                            }),
                            (0, r.jsx)(s.zxk, {
                                className: w.ctaBtn,
                                onClick: c,
                                children: x.NW.string(x.t.cpT0Cg)
                            })
                        ]
                    })
        ]
    });
}
function Z(e) {
    var t,
        n,
        { quest: o, onClose: c } = e,
        l = (function (e, t) {
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
    let i = (0, O.LM)(o.config),
        { balance: s } = (0, y.A)(),
        d = (function (e, t, n) {
            let [r, o] = a.useState('loading'),
                [c, l] = a.useState(!1),
                { balance: i } = (0, y.A)(),
                s = (0, u.Z)(i),
                [d, f] = a.useState(!1);
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
                !c && null != i && null != s && i > s && l(!0);
            }, [i, s, c]),
            a.useEffect(() => {
                (0, j.QB)(e, g.y$.CROSS_PLATFORM, n)
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
                : 'success' === r && (c || d)
                  ? 'success'
                  : 'loading';
        })(o.id, o.preview, l.location),
        { openIntroToOrbsClaimedCoachmark: b } = (0, p.Z)({ location: 'QuestsOrbsRewardModal' }),
        x = a.useCallback(
            async function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                await (0, h.vp)({ hideImmediately: e }), c();
            },
            [c]
        ),
        w = a.useCallback(() => {
            x(!0),
                (0, m.mK)({
                    openInLayer: !1,
                    tab: C.AW.ORBS,
                    analyticsLocations: [],
                    analyticsSource: o.id === v.V6 ? f.Z.INTRO_TO_ORBS_QUEST : f.Z.QUEST_HOME_PAGE
                }),
                b({ delayMS: 300 });
        }, [x, b, o.id]);
    return (0, r.jsx)(
        P,
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
                rewardAmount: i,
                balance: s,
                onClose: x,
                onSubmit: w,
                state: d
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
