n.d(t, { default: () => p }), n(47120);
var r = n(200651),
    a = n(192379),
    i = n(481060),
    s = n(110924),
    c = n(100527),
    l = n(335131),
    o = n(43747),
    d = n(272008),
    u = n(497505),
    h = n(918701),
    C = n(642145),
    _ = n(215023),
    R = n(388032),
    m = n(262143),
    O = n(232474);
function E(e) {
    let { transitionState: t, rewardAmount: n, balance: a, onSubmit: s, onClose: c, state: l } = e;
    return (0, r.jsxs)(i.Y0X, {
        transitionState: t,
        size: i.CgR.DYNAMIC,
        className: m.modal,
        children: [
            (0, r.jsxs)('div', {
                className: m.header,
                children: [
                    null != n &&
                        (0, r.jsxs)(i.Text, {
                            variant: 'text-sm/bold',
                            color: 'always-white',
                            className: m.amountLabel,
                            children: ['+', n]
                        }),
                    (0, r.jsx)(i.olH, {
                        className: m.closeBtn,
                        onClick: c
                    })
                ]
            }),
            'loading' === l
                ? (0, r.jsx)('div', {
                      className: m.spinnerContainer,
                      children: (0, r.jsx)(i.$jN, { type: i.RAz.SPINNING_CIRCLE })
                  })
                : 'success' === l || 'optimistic-success' === l
                  ? (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)('img', {
                                src: O.Z,
                                className: m.img,
                                alt: ''
                            }),
                            (0, r.jsx)(i.X6q, {
                                variant: 'heading-lg/medium',
                                color: 'always-white',
                                className: m.title,
                                children: R.NW.formatToPlainString(R.t.rtV7xM, { balance: 'optimistic-success' === l && null != a && null != n ? a + n : a })
                            }),
                            (0, r.jsx)(i.Text, {
                                variant: 'text-xs/normal',
                                className: m.subtext,
                                children: R.NW.string(R.t.EDUOIC)
                            }),
                            (0, r.jsx)(i.zxk, {
                                className: m.ctaBtn,
                                onClick: s,
                                children: R.NW.string(R.t.iEw2Nz)
                            })
                        ]
                    })
                  : (0, r.jsxs)('div', {
                        className: m.errorContainer,
                        children: [
                            (0, r.jsxs)('div', {
                                className: m.errorContentContainer,
                                children: [
                                    (0, r.jsx)(i.X6q, {
                                        variant: 'heading-xl/medium',
                                        color: 'always-white',
                                        className: m.errorHeader,
                                        children: R.NW.string(R.t.tWYWJy)
                                    }),
                                    (0, r.jsx)(i.Text, {
                                        variant: 'text-md/normal',
                                        children: R.NW.string(R.t.JNQRU1)
                                    })
                                ]
                            }),
                            (0, r.jsx)(i.zxk, {
                                className: m.ctaBtn,
                                onClick: c,
                                children: R.NW.string(R.t.cpT0Cg)
                            })
                        ]
                    })
        ]
    });
}
function p(e) {
    var t,
        n,
        { quest: i, onClose: R } = e,
        m = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        a = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
            }
            return a;
        })(e, ['quest', 'onClose']);
    let O = (0, h.LM)(i.config),
        { balance: p } = (0, o.A)(),
        b = (function (e, t) {
            let [n, r] = a.useState('loading'),
                [i, c] = a.useState(!1),
                { balance: l } = (0, o.A)(),
                h = (0, s.Z)(l),
                [C, _] = a.useState(!1);
            if (
                (a.useEffect(() => {
                    let e = null;
                    return (
                        'success' === n &&
                            (e = setTimeout(() => {
                                _(!0);
                            }, 1000)),
                        () => {
                            null != e && clearTimeout(e);
                        }
                    );
                }, [n]),
                a.useEffect(() => {
                    !i && null != l && null != h && l > h && c(!0);
                }, [l, h, i]),
                a.useEffect(() => {
                    (0, d.QB)(e, u.y$.CROSS_PLATFORM, t)
                        .then((e) => {
                            if ((null == e ? void 0 : e.claimedAt) != null) {
                                r('success');
                                return;
                            }
                            r('error');
                        })
                        .catch(() => {
                            r('error');
                        });
                }, [e, t]),
                'error' === n)
            )
                return n;
            if ('success' === n) {
                if (i) return 'success';
                if (C) return 'optimistic-success';
            }
            return 'loading';
        })(i.id, m.location),
        f = a.useCallback(() => {
            R(),
                (0, l.mK)({
                    openInLayer: !1,
                    tab: _.AW.ORBS,
                    analyticsLocations: [],
                    analyticsSource: i.id === C.V ? c.Z.INTRO_TO_ORBS_QUEST : c.Z.QUEST_HOME_PAGE
                });
        }, [i.id, R]);
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
        })({}, m)),
        (n = n =
            {
                rewardAmount: O,
                balance: p,
                onClose: R,
                onSubmit: f,
                state: b
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
