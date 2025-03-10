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
    y = r(642145),
    p = r(215023),
    O = r(388032),
    j = r(435696),
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
                : 'success' === i
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
                                children: O.NW.formatToPlainString(O.t.rtV7xM, { balance: a })
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
        w = (function (e, t, r) {
            let [n, o] = a.useState('loading'),
                [l, i] = a.useState(!1),
                { balance: u } = (0, s.A)(),
                d = (0, c.Z)(u),
                [m, y] = a.useState(!1);
            return (a.useEffect(() => {
                let e = null;
                return (
                    'success' === n &&
                        t &&
                        (e = setTimeout(() => {
                            y(!0);
                        }, 1000)),
                    () => {
                        null != e && clearTimeout(e);
                    }
                );
            }, [n, t]),
            a.useEffect(() => {
                !l && null != u && null != d && u > d && i(!0);
            }, [u, d, l]),
            a.useEffect(() => {
                (0, f.QB)(e, b.y$.CROSS_PLATFORM, r)
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
                : 'success' === n && (l || m)
                  ? 'success'
                  : 'loading';
        })(o.id, o.preview, j.location),
        { openIntroToOrbsClaimedCoachmark: v } = (0, u.Z)({ location: 'QuestsOrbsRewardModal' }),
        x = a.useCallback(
            async function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                await (0, d.vp)({ hideImmediately: e }), O();
            },
            [O]
        ),
        S = a.useCallback(() => {
            x(!0),
                (0, i.mK)({
                    openInLayer: !1,
                    tab: p.AW.ORBS,
                    analyticsLocations: [],
                    analyticsSource: o.id === y.V ? l.Z.INTRO_TO_ORBS_QUEST : l.Z.QUEST_HOME_PAGE
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
