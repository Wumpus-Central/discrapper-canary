n.d(t, { Z: () => C }), n(781311), n(539854);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n(793030),
    c = n(442837),
    u = n(833664),
    d = n(545957),
    f = n(359588),
    _ = n(74340),
    p = n(19391),
    h = n(699516),
    m = n(584973),
    g = n(303524),
    E = n(170187),
    b = n(329520),
    y = n(868781),
    O = n(767431),
    v = n(122943),
    I = n(556638),
    S = n(981631),
    T = n(843280);
function A(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function N(e) {
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
                A(e, t, n[t]);
            });
    }
    return e;
}
function C(e) {
    let { user: t, activities: n, applicationStream: a, voiceChannel: A, textClassName: C, iconClassName: P, textSize: R = 'xs', animateEmoji: w = !0, animateText: D = !1, disableTextScroll: L = !1, hasQuest: x = !1, hideEmoji: k = !1, hideTooltip: M = !1 } = e;
    (0, d.Z)(null == t ? void 0 : t.id);
    let j = (null == a ? void 0 : a.discoverable) !== !1 ? a : null,
        { enabledWithActivityStatus: U } = (0, f.Z)({ location: 'ActivityStatus' }),
        G = i.useMemo(() => {
            var e, t;
            let r =
                null == n
                    ? void 0
                    : n.find((e) => {
                          let { type: t } = e;
                          return t === S.IIU.CUSTOM_STATUS;
                      });
            if (null == r) return null;
            let i = null != (t = null == (e = r.state) ? void 0 : e.trim()) ? t : null;
            return null == ('' === i ? null : i) && null == r.emoji ? null : r;
        }, [n]),
        B = i.useMemo(() => {
            var e;
            return (0, s.uniqWith)(
                null !=
                    (e =
                        null == n
                            ? void 0
                            : n.filter((e) => {
                                  let { type: t } = e;
                                  return t !== S.IIU.CUSTOM_STATUS && t !== S.IIU.HANG_STATUS;
                              }))
                    ? e
                    : [],
                (e, t) => (null != e.application_id && null != t.application_id && e.application_id === t.application_id) || (null != e.name && null != t.name && e.name === t.name)
            );
        }, [n]),
        F = (null == t ? void 0 : t.bot) === !0;
    if ((0, c.e7)([h.Z], () => h.Z.isBlockedOrIgnored(null == t ? void 0 : t.id))) return null;
    let V = (null == G ? void 0 : G.state) != null,
        Z = null != j,
        H = !Z && null != A,
        Y = B.length + (Z || H ? 1 : 0),
        W = Y > 1,
        K = M || !L,
        z = () =>
            (0, r.jsx)(l.xv, {
                variant: 'text-'.concat(R, '/normal'),
                className: o()(T.dot, C),
                children: I.l
            }),
        q = () => {
            let e = [],
                t = {
                    textVariant: 'text-'.concat(R, '/medium'),
                    textClassName: C,
                    iconClassName: P,
                    hideTooltip: K,
                    hideIcon: F,
                    hideText: V,
                    canTruncate: !1
                };
            return (
                null != j &&
                    e.push(
                        (0, r.jsx)(
                            b.Z,
                            N(
                                {
                                    stream: j,
                                    game: null == n ? void 0 : n.find(u.Z)
                                },
                                t
                            )
                        )
                    ),
                B.forEach((n) => {
                    e.push((0, r.jsx)(y.Z, N({ activity: n }, t)));
                }),
                H && e.push((0, r.jsx)(v.Z, N({ channel: A }, t))),
                e
            );
        },
        Q = () => {
            let e = q();
            return 0 === e.length
                ? null
                : W && V && !F
                  ? (0, r.jsxs)(r.Fragment, {
                        children: [
                            e[0],
                            (0, r.jsxs)(l.xv, {
                                variant: 'text-'.concat(R, '/medium'),
                                className: C,
                                color: 'text-positive',
                                children: ['(+', Y - 1, ')']
                            })
                        ]
                    })
                  : W && !F
                    ? e.map((e, t) =>
                          (0, r.jsxs)(
                              i.Fragment,
                              {
                                  children: [0 !== t && z(), e]
                              },
                              t
                          )
                      )
                    : e[0];
        },
        X = () => {
            if (null == G) return null;
            let e = G.emoji,
                t = G.state,
                n = U ? (0, _.Z)(G) : null,
                i = null != n ? (0, p.Z)(n) : null;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    null != i &&
                        (0, r.jsx)(l.xv, {
                            variant: 'text-'.concat(R, '/medium'),
                            className: o()(C, T.customStatusLabel),
                            color: 'none',
                            children: ''.concat(i, ': ')
                        }),
                    null != e &&
                        !k &&
                        (0, r.jsx)(m.Z, {
                            emoji: e,
                            animate: w,
                            hideTooltip: K,
                            className: P
                        }),
                    null != t &&
                        (0, r.jsx)(E.Z, {
                            variant: 'text-'.concat(R, '/medium'),
                            className: C,
                            hideTooltip: K,
                            canTruncate: !1,
                            children: t
                        })
                ]
            });
        },
        J = () =>
            (0, r.jsxs)('div', {
                className: o()(T.container, {
                    [T.textXs]: 'xs' === R,
                    [T.textSm]: 'sm' === R
                }),
                children: [Q(), null != G && Y > 0 && z(), X(), x && (0, r.jsx)(g.Z, {})]
            });
    return L
        ? J()
        : (0, r.jsx)(O.Z, {
              shouldAnimate: D,
              children: J()
          });
}
