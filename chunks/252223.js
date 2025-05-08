n.d(t, { Z: () => N }), n(781311), n(539854);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(793030),
    l = n(442837),
    c = n(833664),
    u = n(545957),
    d = n(359588),
    f = n(74340),
    _ = n(19391),
    p = n(699516),
    h = n(584973),
    m = n(303524),
    g = n(170187),
    E = n(329520),
    b = n(868781),
    y = n(767431),
    O = n(122943),
    v = n(556638),
    I = n(981631),
    S = n(843280);
function T(e, t, n) {
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
function A(e) {
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
                T(e, t, n[t]);
            });
    }
    return e;
}
function N(e) {
    let { user: t, activities: n, applicationStream: o, voiceChannel: T, textClassName: N, iconClassName: C, textSize: P = 'xs', animateEmoji: R = !0, animateText: w = !1, disableTextScroll: D = !1, hasQuest: L = !1, hideEmoji: x = !1, hideTooltip: k = !1 } = e;
    (0, u.Z)(null == t ? void 0 : t.id);
    let M = (null == o ? void 0 : o.discoverable) !== !1 ? o : null,
        { enabledWithActivityStatus: j } = (0, d.Z)({ location: 'ActivityStatus' }),
        U = i.useMemo(() => {
            var e, t;
            let r =
                null == n
                    ? void 0
                    : n.find((e) => {
                          let { type: t } = e;
                          return t === I.IIU.CUSTOM_STATUS;
                      });
            if (null == r) return null;
            let i = null != (t = null == (e = r.state) ? void 0 : e.trim()) ? t : null;
            return null == ('' === i ? null : i) && null == r.emoji ? null : r;
        }, [n]),
        G = i.useMemo(() => {
            var e;
            return null !=
                (e =
                    null == n
                        ? void 0
                        : n.filter((e) => {
                              let { type: t } = e;
                              return t !== I.IIU.CUSTOM_STATUS && t !== I.IIU.HANG_STATUS;
                          }))
                ? e
                : [];
        }, [n]),
        B = (null == t ? void 0 : t.bot) === !0;
    if ((0, l.e7)([p.Z], () => p.Z.isBlockedOrIgnored(null == t ? void 0 : t.id))) return null;
    let F = (null == U ? void 0 : U.state) != null,
        V = null != M,
        Z = !V && null != T,
        H = G.length + (V || Z ? 1 : 0),
        Y = H > 1,
        W = Y && !B && !F && !D,
        K = () =>
            (0, r.jsx)(s.xv, {
                variant: 'text-'.concat(P, '/normal'),
                className: a()(S.dot, N),
                children: v.l
            }),
        z = () => {
            let e = [],
                t = {
                    textVariant: 'text-'.concat(P, '/medium'),
                    textClassName: N,
                    iconClassName: C,
                    hideTooltip: k || W,
                    hideIcon: B,
                    hideText: F,
                    canTruncate: !Y
                };
            return (
                null != M &&
                    e.push(
                        (0, r.jsx)(
                            E.Z,
                            A(
                                {
                                    stream: M,
                                    game: null == n ? void 0 : n.find(c.Z)
                                },
                                t
                            )
                        )
                    ),
                G.forEach((n) => {
                    e.push((0, r.jsx)(b.Z, A({ activity: n }, t)));
                }),
                Z && e.push((0, r.jsx)(O.Z, A({ channel: T }, t))),
                e
            );
        },
        q = () => {
            let e = z();
            return 0 === e.length
                ? null
                : Y && F && !B
                  ? (0, r.jsxs)(r.Fragment, {
                        children: [
                            e[0],
                            (0, r.jsxs)(s.xv, {
                                variant: 'text-'.concat(P, '/medium'),
                                className: N,
                                color: 'text-positive',
                                children: ['(+', H - 1, ')']
                            })
                        ]
                    })
                  : Y && !B
                    ? e.map((e, t) =>
                          (0, r.jsxs)(
                              i.Fragment,
                              {
                                  children: [0 !== t && K(), e]
                              },
                              t
                          )
                      )
                    : e[0];
        },
        Q = () => {
            if (null == U) return null;
            let e = U.emoji,
                t = U.state,
                n = j ? (0, f.Z)(U) : null,
                i = null != n ? (0, _.Z)(n) : null;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    null != i &&
                        (0, r.jsx)(s.xv, {
                            variant: 'text-'.concat(P, '/medium'),
                            className: N,
                            color: 'none',
                            children: ''.concat(i, ': ')
                        }),
                    null != e &&
                        !x &&
                        (0, r.jsx)(h.Z, {
                            emoji: e,
                            animate: R,
                            hideTooltip: k,
                            className: C
                        }),
                    null != t &&
                        (0, r.jsx)(g.Z, {
                            variant: 'text-'.concat(P, '/medium'),
                            className: N,
                            hideTooltip: k,
                            canTruncate: !Y,
                            children: t
                        })
                ]
            });
        },
        X = () =>
            (0, r.jsxs)('div', {
                className: a()(S.container, {
                    [S.textXs]: 'xs' === P,
                    [S.textSm]: 'sm' === P
                }),
                children: [q(), null != U && H > 0 && K(), Q(), L && (0, r.jsx)(m.Z, {})]
            });
    return W
        ? (0, r.jsx)(y.Z, {
              shouldAnimate: w,
              children: X()
          })
        : X();
}
