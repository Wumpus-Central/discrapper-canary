r.d(t, { default: () => N }), r(47120);
var n = r(200651),
    a = r(192379),
    o = r(442837),
    c = r(481060),
    l = r(110924),
    i = r(607070),
    s = r(100527),
    u = r(335131),
    d = r(70097),
    f = r(43747),
    b = r(511050),
    m = r(82856),
    p = r(272008),
    y = r(497505),
    O = r(918701),
    j = r(642145),
    g = r(215023),
    h = r(388032),
    C = r(435696),
    v = r(557256),
    w = r(201284);
function x() {
    let e = (0, o.e7)([i.Z], () => i.Z.useReducedMotion);
    return (0, n.jsx)(d.Z, {
        autoPlay: !e,
        loop: !0,
        muted: !0,
        playsInline: !0,
        className: C.video,
        controls: !1,
        children: (0, n.jsx)('source', {
            src: w.Z,
            type: 'video/webm'
        })
    });
}
function S(e) {
    let { transitionState: t, rewardAmount: r, balance: a, onSubmit: o, onClose: l, state: i } = e;
    return (0, n.jsxs)(c.Y0X, {
        transitionState: t,
        size: c.CgR.DYNAMIC,
        className: C.modal,
        children: [
            (0, n.jsxs)('div', {
                className: C.header,
                children: [
                    null != r &&
                        (0, n.jsxs)(c.Text, {
                            variant: 'text-sm/bold',
                            color: 'always-white',
                            className: C.amountLabel,
                            children: ['+', r]
                        }),
                    (0, n.jsx)(c.olH, {
                        className: C.closeBtn,
                        onClick: l
                    })
                ]
            }),
            'loading' === i
                ? (0, n.jsx)('div', {
                      className: C.spinnerContainer,
                      children: (0, n.jsx)(c.$jN, { type: c.RAz.SPINNING_CIRCLE })
                  })
                : 'success' === i
                  ? (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(x, {}),
                            (0, n.jsx)(c.X6q, {
                                variant: 'heading-lg/medium',
                                color: 'always-white',
                                className: C.title,
                                children: h.NW.formatToPlainString(h.t.rtV7xM, { balance: a })
                            }),
                            (0, n.jsx)(c.Text, {
                                variant: 'text-xs/normal',
                                className: C.subtext,
                                children: h.NW.string(h.t.EDUOIC)
                            }),
                            (0, n.jsx)(c.zxk, {
                                className: C.ctaBtn,
                                onClick: o,
                                children: h.NW.string(h.t.iEw2Nz)
                            })
                        ]
                    })
                  : (0, n.jsxs)('div', {
                        className: C.errorContainer,
                        children: [
                            (0, n.jsx)('img', {
                                alt: '',
                                className: C.errorImage,
                                src: v
                            }),
                            (0, n.jsxs)('div', {
                                className: C.errorContentContainer,
                                children: [
                                    (0, n.jsx)(c.X6q, {
                                        variant: 'heading-xl/medium',
                                        color: 'always-white',
                                        className: C.errorHeader,
                                        children: h.NW.string(h.t.tWYWJy)
                                    }),
                                    (0, n.jsx)(c.Text, {
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        children: h.NW.string(h.t.JNQRU1)
                                    })
                                ]
                            }),
                            (0, n.jsx)(c.zxk, {
                                className: C.ctaBtn,
                                onClick: l,
                                children: h.NW.string(h.t.cpT0Cg)
                            })
                        ]
                    })
        ]
    });
}
function N(e) {
    var t,
        r,
        { quest: o, onClose: c } = e,
        i = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                a = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        a = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) (r = o[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (n = 0; n < o.length; n++) (r = o[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
            }
            return a;
        })(e, ['quest', 'onClose']);
    let d = (0, O.LM)(o.config),
        { balance: h } = (0, f.A)(),
        C = (function (e, t, r) {
            let [n, o] = a.useState('loading'),
                [c, i] = a.useState(!1),
                { balance: s } = (0, f.A)(),
                u = (0, l.Z)(s),
                [d, b] = a.useState(!1);
            return (a.useEffect(() => {
                let e = null;
                return (
                    'success' === n &&
                        t &&
                        (e = setTimeout(() => {
                            b(!0);
                        }, 1000)),
                    () => {
                        null != e && clearTimeout(e);
                    }
                );
            }, [n, t]),
            a.useEffect(() => {
                !c && null != s && null != u && s > u && i(!0);
            }, [s, u, c]),
            a.useEffect(() => {
                (0, p.QB)(e, y.y$.CROSS_PLATFORM, r)
                    .then((e) => {
                        if ((null == e ? void 0 : e.claimedAt) != null) {
                            o('success');
                            return;
                        }
                        o('error');
                    })
                    .catch(() => {
                        o('error');
                    });
            }, [e, r]),
            'error' === n)
                ? n
                : 'success' === n && (c || d)
                  ? 'success'
                  : 'loading';
        })(o.id, o.preview, i.location),
        { openIntroToOrbsClaimedCoachmark: v } = (0, b.Z)({ location: 'QuestsOrbsRewardModal' }),
        w = a.useCallback(
            async function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                await (0, m.vp)({ hideImmediately: e }), c();
            },
            [c]
        ),
        x = a.useCallback(() => {
            w(!0),
                (0, u.mK)({
                    openInLayer: !1,
                    tab: g.AW.ORBS,
                    analyticsLocations: [],
                    analyticsSource: o.id === j.V ? s.Z.INTRO_TO_ORBS_QUEST : s.Z.QUEST_HOME_PAGE
                }),
                v({ delayMS: 300 });
        }, [w, v, o.id]);
    return (0, n.jsx)(
        S,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        })
                    )),
                    n.forEach(function (t) {
                        var n;
                        (n = r[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = n);
                    });
            }
            return e;
        })({}, i)),
        (r = r =
            {
                rewardAmount: d,
                balance: h,
                onClose: w,
                onSubmit: x,
                state: C
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(r)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
              }),
        t)
    );
}
