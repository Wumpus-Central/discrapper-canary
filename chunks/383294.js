r.d(t, { default: () => C }), r(47120);
var n = r(200651),
    a = r(192379),
    o = r(481060),
    c = r(110924),
    l = r(100527),
    i = r(335131),
    s = r(43747),
    u = r(511050),
    d = r(82856),
    f = r(272008),
    b = r(497505),
    m = r(918701),
    p = r(642145),
    y = r(215023),
    O = r(388032),
    j = r(262143),
    g = r(232474);
function h(e) {
    let { transitionState: t, rewardAmount: r, balance: a, onSubmit: c, onClose: l, state: i } = e;
    return (0, n.jsxs)(o.Y0X, {
        transitionState: t,
        size: o.CgR.DYNAMIC,
        className: j.modal,
        children: [
            (0, n.jsxs)('div', {
                className: j.header,
                children: [
                    null != r &&
                        (0, n.jsxs)(o.Text, {
                            variant: 'text-sm/bold',
                            color: 'always-white',
                            className: j.amountLabel,
                            children: ['+', r]
                        }),
                    (0, n.jsx)(o.olH, {
                        className: j.closeBtn,
                        onClick: l
                    })
                ]
            }),
            'loading' === i
                ? (0, n.jsx)('div', {
                      className: j.spinnerContainer,
                      children: (0, n.jsx)(o.$jN, { type: o.RAz.SPINNING_CIRCLE })
                  })
                : 'success' === i || 'optimistic-success' === i
                  ? (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)('img', {
                                src: g.Z,
                                className: j.img,
                                alt: ''
                            }),
                            (0, n.jsx)(o.X6q, {
                                variant: 'heading-lg/medium',
                                color: 'always-white',
                                className: j.title,
                                children: O.NW.formatToPlainString(O.t.rtV7xM, { balance: 'optimistic-success' === i && null != a && null != r ? a + r : a })
                            }),
                            (0, n.jsx)(o.Text, {
                                variant: 'text-xs/normal',
                                className: j.subtext,
                                children: O.NW.string(O.t.EDUOIC)
                            }),
                            (0, n.jsx)(o.zxk, {
                                className: j.ctaBtn,
                                onClick: c,
                                children: O.NW.string(O.t.iEw2Nz)
                            })
                        ]
                    })
                  : (0, n.jsxs)('div', {
                        className: j.errorContainer,
                        children: [
                            (0, n.jsxs)('div', {
                                className: j.errorContentContainer,
                                children: [
                                    (0, n.jsx)(o.X6q, {
                                        variant: 'heading-xl/medium',
                                        color: 'always-white',
                                        className: j.errorHeader,
                                        children: O.NW.string(O.t.tWYWJy)
                                    }),
                                    (0, n.jsx)(o.Text, {
                                        variant: 'text-md/normal',
                                        children: O.NW.string(O.t.JNQRU1)
                                    })
                                ]
                            }),
                            (0, n.jsx)(o.zxk, {
                                className: j.ctaBtn,
                                onClick: l,
                                children: O.NW.string(O.t.cpT0Cg)
                            })
                        ]
                    })
        ]
    });
}
function C(e) {
    var t,
        r,
        { quest: o, onClose: O } = e,
        j = (function (e, t) {
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
    let g = (0, m.LM)(o.config),
        { balance: C } = (0, s.A)(),
        w = (function (e, t) {
            let [r, n] = a.useState('loading'),
                [o, l] = a.useState(!1),
                { balance: i } = (0, s.A)(),
                u = (0, c.Z)(i),
                [d, m] = a.useState(!1);
            if (
                (a.useEffect(() => {
                    let e = null;
                    return (
                        'success' === r &&
                            (e = setTimeout(() => {
                                m(!0);
                            }, 1000)),
                        () => {
                            null != e && clearTimeout(e);
                        }
                    );
                }, [r]),
                a.useEffect(() => {
                    !o && null != i && null != u && i > u && l(!0);
                }, [i, u, o]),
                a.useEffect(() => {
                    (0, f.QB)(e, b.y$.CROSS_PLATFORM, t)
                        .then((e) => {
                            if ((null == e ? void 0 : e.claimedAt) != null) {
                                n('success');
                                return;
                            }
                            n('error');
                        })
                        .catch(() => {
                            n('error');
                        });
                }, [e, t]),
                'error' === r)
            )
                return r;
            if ('success' === r) {
                if (o) return 'success';
                if (d) return 'optimistic-success';
            }
            return 'loading';
        })(o.id, j.location),
        { openIntroToOrbsClaimedCoachmark: v } = (0, u.Z)({ location: 'QuestsOrbsRewardModal' }),
        x = a.useCallback(async () => {
            O(), await (0, d.c9)();
        }, [O]),
        S = a.useCallback(() => {
            x(),
                (0, i.mK)({
                    openInLayer: !1,
                    tab: y.AW.ORBS,
                    analyticsLocations: [],
                    analyticsSource: o.id === p.V ? l.Z.INTRO_TO_ORBS_QUEST : l.Z.QUEST_HOME_PAGE
                }),
                v({ delayMS: 300 });
        }, [x, v, o.id]);
    return (0, n.jsx)(
        h,
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
        })({}, j)),
        (r = r =
            {
                rewardAmount: g,
                balance: C,
                onClose: x,
                onSubmit: S,
                state: w
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
