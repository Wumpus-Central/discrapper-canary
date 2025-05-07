n.d(t, { Z: () => S }), n(781311), n(539854);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(793030),
    l = n(442837),
    c = n(833664),
    u = n(545957),
    d = n(699516),
    f = n(584973),
    _ = n(303524),
    p = n(170187),
    h = n(329520),
    m = n(868781),
    g = n(767431),
    E = n(122943),
    b = n(556638),
    y = n(981631),
    O = n(843280);
function v(e, t, n) {
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
function I(e) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
function S(e) {
    let { user: t, activities: n, applicationStream: o, voiceChannel: v, textClassName: S, iconClassName: T, textSize: A = 'xs', animateEmoji: N = !0, animateText: C = !1, disableTextScroll: P = !1, hasQuest: R = !1, hideEmoji: w = !1, hideTooltip: D = !1 } = e;
    (0, u.Z)(null == t ? void 0 : t.id);
    let L = (null == o ? void 0 : o.discoverable) !== !1 ? o : null,
        x = i.useMemo(() => {
            var e, t;
            let r =
                null == n
                    ? void 0
                    : n.find((e) => {
                          let { type: t } = e;
                          return t === y.IIU.CUSTOM_STATUS;
                      });
            if (null == r) return null;
            let i = null != (t = null == (e = r.state) ? void 0 : e.trim()) ? t : null;
            return null == ('' === i ? null : i) && null == r.emoji ? null : r;
        }, [n]),
        k = i.useMemo(() => {
            var e;
            return null !=
                (e =
                    null == n
                        ? void 0
                        : n.filter((e) => {
                              let { type: t } = e;
                              return t !== y.IIU.CUSTOM_STATUS && t !== y.IIU.HANG_STATUS;
                          }))
                ? e
                : [];
        }, [n]),
        M = (null == t ? void 0 : t.bot) === !0;
    if ((0, l.e7)([d.Z], () => d.Z.isBlockedOrIgnored(null == t ? void 0 : t.id))) return null;
    let j = (null == x ? void 0 : x.state) != null,
        U = null != L,
        G = !U && null != v,
        B = k.length + (U || G ? 1 : 0),
        F = B > 1,
        V = F && !M && !j && !P,
        Z = () =>
            (0, r.jsx)(s.xv, {
                variant: 'text-'.concat(A, '/normal'),
                className: a()(O.dot, S),
                children: b.l
            }),
        H = () => {
            let e = [],
                t = {
                    textVariant: 'text-'.concat(A, '/medium'),
                    textClassName: S,
                    iconClassName: T,
                    hideTooltip: D || V,
                    hideIcon: M,
                    hideText: j,
                    canTruncate: !F
                };
            return (
                null != L &&
                    e.push(
                        (0, r.jsx)(
                            h.Z,
                            I(
                                {
                                    stream: L,
                                    game: null == n ? void 0 : n.find(c.Z)
                                },
                                t
                            )
                        )
                    ),
                k.forEach((n) => {
                    e.push((0, r.jsx)(m.Z, I({ activity: n }, t)));
                }),
                G && e.push((0, r.jsx)(E.Z, I({ channel: v }, t))),
                e
            );
        },
        Y = () => {
            let e = H();
            return 0 === e.length
                ? null
                : F && j && !M
                  ? (0, r.jsxs)(r.Fragment, {
                        children: [
                            e[0],
                            (0, r.jsxs)(s.xv, {
                                variant: 'text-'.concat(A, '/medium'),
                                className: S,
                                color: 'text-positive',
                                children: ['(+', B - 1, ')']
                            })
                        ]
                    })
                  : F && !M
                    ? e.map((e, t) =>
                          (0, r.jsxs)(
                              i.Fragment,
                              {
                                  children: [0 !== t && Z(), e]
                              },
                              t
                          )
                      )
                    : e[0];
        },
        W = () => {
            if (null == x) return null;
            let e = x.emoji,
                t = x.state;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    null != e &&
                        !w &&
                        (0, r.jsx)(f.Z, {
                            emoji: e,
                            animate: N,
                            hideTooltip: D,
                            className: T
                        }),
                    null != t &&
                        (0, r.jsx)(p.Z, {
                            variant: 'text-'.concat(A, '/medium'),
                            className: S,
                            hideTooltip: D,
                            canTruncate: !F,
                            children: t
                        })
                ]
            });
        },
        K = () =>
            (0, r.jsxs)('div', {
                className: a()(O.container, {
                    [O.textXs]: 'xs' === A,
                    [O.textSm]: 'sm' === A
                }),
                children: [Y(), null != x && B > 0 && Z(), W(), R && (0, r.jsx)(_.Z, {})]
            });
    return V
        ? (0, r.jsx)(g.Z, {
              shouldAnimate: C,
              children: K()
          })
        : K();
}
