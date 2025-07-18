(n.d(t, { Z: () => G }), n(539854), n(781311));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n(793030),
    c = n(442837),
    u = n(481060),
    d = n(833664),
    f = n(545957),
    _ = n(933557),
    p = n(359588),
    h = n(74340),
    m = n(482798),
    g = n(687516),
    E = n(699516),
    b = n(802529),
    y = n(11133),
    O = n(303524),
    v = n(329520),
    I = n(233023),
    T = n(868781),
    S = n(122943),
    A = n(556638),
    N = n(981631),
    C = n(388032),
    R = n(843280);
function P(e, t, n) {
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
function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                P(e, t, n[t]);
            }));
    }
    return e;
}
function D(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function L(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : D(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function x(e) {
    let t = (null == e ? void 0 : e.name) === '' ? null : null == e ? void 0 : e.name;
    return null != t ? C.intl.formatToPlainString(C.t['0wJXSk'], { name: t }) : C.intl.string(C.t.eXan7O);
}
function M(e, t) {
    return (e.isDM() || e.isGroupDM() ? C.intl.string(C.t['9FaEzs']) : e.isGuildStageVoice() ? C.intl.string(C.t.QygGCA) : C.intl.string(C.t.msxteH)) + (null != t ? ' ('.concat(t, ')') : '');
}
function k(e) {
    let { streamActivity: t, otherActivities: n, voiceActivityChannel: r } = e,
        i = [],
        { descriptiveTextEnabled: a } = (0, b.f)({ location: 'StackedActivityStatus' }),
        { enableTopNavButton: o } = (0, m.Cq)({ location: 'StackedActivityStatus' }),
        s = (0, _.ZP)(r),
        l = a || o;
    return (
        null != t && i.push(x(t)),
        n.forEach((e) => {
            let { tooltip: t } = (0, y.Z)(e, l);
            null != t && i.push(t);
        }),
        null == t && null != r && i.push(M(r, s)),
        i.length > 0 ? i.join(', ') : ''
    );
}
function j(e) {
    let { textVariant: t, className: n, hasCustomStatusText: i, totalActivityCount: a } = e,
        s = a - 1;
    return (0, r.jsxs)(l.xv, {
        variant: t,
        className: o()(n, R.activityCounter),
        color: i ? 'status-positive' : 'none',
        children: ['+', s]
    });
}
function U(e) {
    let { textVariant: t, className: n } = e;
    return (0, r.jsx)(l.xv, {
        variant: t,
        className: o()(R.dot, n),
        children: A.l
    });
}
function G(e) {
    let { user: t, activities: n, applicationStream: a, voiceChannel: l, textClassName: _, iconClassName: m, textSize: b = 'xs', animateEmoji: y = !0, hasQuest: C = !1, hideEmoji: P = !1, hideTooltip: D = !1 } = e;
    (0, f.Z)(null == t ? void 0 : t.id);
    let x = (null == a ? void 0 : a.discoverable) !== !1 ? a : null,
        M = (0, g.Cf)(x),
        G = i.useMemo(() => {
            var e, t;
            let r =
                null == n
                    ? void 0
                    : n.find((e) => {
                          let { type: t } = e;
                          return t === N.IIU.CUSTOM_STATUS;
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
                                  let { type: t, name: n } = e;
                                  return t !== N.IIU.CUSTOM_STATUS && t !== N.IIU.HANG_STATUS && n !== (null == M ? void 0 : M.name);
                              }))
                    ? e
                    : [],
                (e, t) => (null != e.application_id && null != t.application_id && e.application_id === t.application_id) || (null != e.name && null != t.name && e.name === t.name)
            );
        }, [n, null == M ? void 0 : M.name]),
        V = null == n ? void 0 : n.find((e) => e.name === (null == M ? void 0 : M.name)),
        F = (null == t ? void 0 : t.bot) === !0,
        Z = (0, c.e7)([E.Z], () => E.Z.isBlockedOrIgnored(null == t ? void 0 : t.id)),
        H = (0, p.Z)({ location: 'ActivityStatus' }) && null != G ? (0, h.Z)(G) : null,
        Y = (null == G ? void 0 : G.state) != null || null != H,
        W = null != x,
        K = !W && null != l,
        z = B.length + (W || K ? 1 : 0),
        q = z > 1,
        X = (null == G ? void 0 : G.state) != null && 'xs' === b,
        Q = k({
            streamActivity: V,
            otherActivities: B,
            voiceActivityChannel: K ? l : null
        });
    if (Z) return null;
    let J = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = !0 === e || D;
            if (null != x)
                return (0, r.jsx)(v.Z, {
                    stream: x,
                    game: V,
                    textVariant: 'text-'.concat(b, '/medium'),
                    textClassName: _,
                    iconClassName: m,
                    hideText: X,
                    hideIcon: F,
                    hideTooltip: t
                });
            let n = null == B ? void 0 : B[0];
            return null != n
                ? (0, r.jsx)(T.Z, {
                      activity: n,
                      textVariant: 'text-'.concat(b, '/medium'),
                      textClassName: _,
                      iconClassName: m,
                      hideText: X,
                      hideIcon: F,
                      hideTooltip: t
                  })
                : null != l
                  ? (0, r.jsx)(S.Z, {
                        channel: l,
                        textVariant: 'text-'.concat(b, '/medium'),
                        textClassName: _,
                        iconClassName: m,
                        hideText: X,
                        hideTooltip: t
                    })
                  : null;
        },
        $ = () => {
            let e = [],
                t = {
                    textVariant: 'text-sm/medium',
                    hideTooltip: !0,
                    hideIcon: !1,
                    hideText: !1,
                    canTruncate: !1
                };
            return (
                null != x &&
                    e.push(
                        (0, r.jsx)(
                            v.Z,
                            L(
                                w(
                                    {
                                        stream: x,
                                        game: null == n ? void 0 : n.find(d.Z)
                                    },
                                    t
                                ),
                                { showChannelName: !0 }
                            ),
                            'stream'
                        )
                    ),
                B.forEach((n, i) => {
                    e.push((0, r.jsx)(T.Z, w({ activity: n }, t), 'activity-'.concat(i)));
                }),
                K && e.push((0, r.jsx)(S.Z, L(w({ channel: l }, t), { showChannelName: !0 }), 'voice')),
                e
            );
        },
        ee = () =>
            (0, r.jsx)(j, {
                textVariant: 'text-'.concat(b, '/medium'),
                className: _,
                hasCustomStatusText: Y,
                totalActivityCount: z
            }),
        et = () =>
            0 === z
                ? null
                : q && !F
                  ? D
                      ? (0, r.jsxs)('div', {
                            className: o()(R.activityContainer, X && R.iconOnly),
                            children: [J(), ee()]
                        })
                      : (0, r.jsx)(u.ua7, {
                            tooltipContentClassName: o()(R.container, R.activitiesTooltip, R.hasMultipleActivities),
                            delay: A.X,
                            text: $(),
                            'aria-label': Q,
                            children: (e) =>
                                (0, r.jsxs)(
                                    'div',
                                    L(w({ className: o()(R.activityContainer, X && R.iconOnly) }, e), {
                                        children: [J(!0), ee()]
                                    })
                                )
                        })
                  : J(),
        en = o()(R.container, {
            [R.textXs]: 'xs' === b,
            [R.textSm]: 'sm' === b
        }),
        er = () =>
            null == G
                ? null
                : (0, r.jsx)(I.Z, {
                      customStatusActivity: G,
                      textSize: b,
                      animateEmoji: y,
                      hideEmoji: P,
                      hideTooltip: D,
                      textClassName: _,
                      iconClassName: m,
                      tooltipClassName: en
                  });
    return (0, r.jsxs)('div', {
        className: en,
        children: [
            et(),
            null != G &&
                z > 0 &&
                (0, r.jsx)(U, {
                    textVariant: 'text-'.concat(b, '/normal'),
                    className: _
                }),
            er(),
            C && (0, r.jsx)(O.Z, {})
        ]
    });
}
