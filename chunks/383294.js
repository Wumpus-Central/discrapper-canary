n.d(t, { default: () => I }), n(47120);
var r = n(200651),
    a = n(192379),
    c = n(120356),
    o = n.n(c),
    l = n(642128),
    s = n(442837),
    i = n(481060),
    d = n(110924),
    u = n(410030),
    f = n(607070),
    b = n(100527),
    m = n(335131),
    p = n(70097),
    y = n(43747),
    h = n(511050),
    v = n(82856),
    j = n(272008),
    g = n(497505),
    O = n(46140),
    C = n(215023),
    x = n(388032),
    w = n(696693),
    S = n(557256),
    N = n(639118),
    _ = n(342444),
    P = n(942847),
    Z = n(87074);
function k() {
    let e = (0, s.e7)([f.Z], () => f.Z.useReducedMotion),
        [t, n] = a.useState(!e),
        [c, d] = a.useState(!1),
        b = a.useRef(null),
        m = (0, u.ZP)(),
        y = (0, i.apv)(m),
        h = y ? _.Z : N.Z,
        v = y ? Z.Z : P.Z;
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
        className: w.videoLayers,
        style: j,
        children: [
            !c && (0, r.jsx)('div', { className: w.videoPlaceholder }),
            (0, r.jsx)(p.Z, {
                ref: b,
                autoPlay: !1,
                loop: !0,
                muted: !0,
                playsInline: !0,
                className: o()(w.videoAsset, { [w.hidden]: t }),
                controls: !1,
                children: (0, r.jsx)('source', {
                    src: v,
                    type: 'video/webm'
                })
            }),
            (0, r.jsx)(p.Z, {
                autoPlay: !0,
                muted: !0,
                playsInline: !0,
                className: o()(w.videoAsset, { [w.hidden]: !t }),
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
function E(e) {
    let { transitionState: t, balance: n, onSubmit: a, onClose: c, state: o } = e;
    return (0, r.jsxs)(i.Y0X, {
        transitionState: t,
        size: i.CgR.DYNAMIC,
        className: w.modal,
        children: [
            (0, r.jsx)('div', {
                className: w.header,
                children: (0, r.jsx)(i.olH, {
                    className: w.closeBtn,
                    onClick: c
                })
            }),
            'loading' === o
                ? (0, r.jsx)('div', {
                      className: w.spinnerContainer,
                      children: (0, r.jsx)(i.$jN, { type: i.RAz.SPINNING_CIRCLE })
                  })
                : 'success' === o
                  ? (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(k, {}),
                            (0, r.jsx)(i.X6q, {
                                variant: 'heading-lg/medium',
                                className: w.title,
                                children: x.NW.formatToPlainString(x.t.Kr9pYW, { balance: n })
                            }),
                            (0, r.jsx)(i.Text, {
                                variant: 'text-xs/normal',
                                className: w.subtext,
                                children: x.NW.string(x.t.EDUOIC)
                            }),
                            (0, r.jsx)(i.zxk, {
                                className: w.ctaBtn,
                                onClick: a,
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
                                src: S
                            }),
                            (0, r.jsxs)('div', {
                                className: w.errorContentContainer,
                                children: [
                                    (0, r.jsx)(i.X6q, {
                                        variant: 'heading-xl/medium',
                                        className: w.errorHeader,
                                        children: x.NW.string(x.t.tWYWJy)
                                    }),
                                    (0, r.jsx)(i.Text, {
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        children: x.NW.string(x.t.JNQRU1)
                                    })
                                ]
                            }),
                            (0, r.jsx)(i.zxk, {
                                className: w.ctaBtn,
                                onClick: c,
                                children: x.NW.string(x.t.cpT0Cg)
                            })
                        ]
                    })
        ]
    });
}
function I(e) {
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
    let { balance: s } = (0, y.A)(),
        i = (function (e, t, n) {
            let [r, c] = a.useState('loading'),
                [o, l] = a.useState(!1),
                { balance: s } = (0, y.A)(),
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
                (0, j.QB)(e, g.y$.CROSS_PLATFORM, n)
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
        { openIntroToOrbsClaimedCoachmark: u } = (0, h.Z)({ location: 'QuestsOrbsRewardModal' }),
        f = a.useCallback(
            async function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                await (0, v.vp)({ hideImmediately: e }), o();
            },
            [o]
        ),
        p = a.useCallback(() => {
            f(!0),
                (0, m.mK)({
                    openInLayer: !1,
                    tab: C.AW.ORBS,
                    analyticsLocations: [],
                    analyticsSource: c.id === O.V6 ? b.Z.INTRO_TO_ORBS_QUEST : b.Z.QUEST_HOME_PAGE
                }),
                u({ delayMS: 300 });
        }, [f, u, c.id]);
    return (0, r.jsx)(
        E,
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
