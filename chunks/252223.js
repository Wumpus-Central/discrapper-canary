n.d(t, { Z: () => F }), n(539854), n(781311);
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
    m = n(19391),
    g = n(482798),
    E = n(687516),
    b = n(699516),
    y = n(802529),
    O = n(11133),
    v = n(584973),
    I = n(303524),
    T = n(170187),
    S = n(329520),
    A = n(868781),
    N = n(122943),
    C = n(556638),
    R = n(981631),
    P = n(388032),
    w = n(843280);
function D(e, t, n) {
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
function L(e) {
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
                D(e, t, n[t]);
            });
    }
    return e;
}
function x(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function k(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : x(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function M(e) {
    let t = (null == e ? void 0 : e.name) === '' ? null : null == e ? void 0 : e.name;
    return null != t ? P.intl.formatToPlainString(P.t['0wJXSk'], { name: t }) : P.intl.string(P.t.eXan7O);
}
function j(e, t) {
    return (e.isDM() || e.isGroupDM() ? P.intl.string(P.t['9FaEzs']) : e.isGuildStageVoice() ? P.intl.string(P.t.QygGCA) : P.intl.string(P.t.msxteH)) + (null != t ? ' ('.concat(t, ')') : '');
}
function U(e) {
    let { streamActivity: t, otherActivities: n, voiceActivityChannel: r } = e,
        i = [],
        { descriptiveTextEnabled: a } = (0, y.f)({ location: 'StackedActivityStatus' }),
        { enableTopNavButton: o } = (0, g.Cq)({ location: 'StackedActivityStatus' }),
        s = (0, _.ZP)(r),
        l = a || o;
    return (
        null != t && i.push(M(t)),
        n.forEach((e) => {
            let { tooltip: t } = (0, O.Z)(e, l);
            null != t && i.push(t);
        }),
        null == t && null != r && i.push(j(r, s)),
        i.length > 0 ? i.join(', ') : ''
    );
}
function G(e) {
    let { textVariant: t, className: n, hasCustomStatusText: i, totalActivityCount: a } = e,
        s = a - 1;
    return (0, r.jsx)(l.xv, {
        variant: t,
        className: o()(n, w.activityCounter),
        color: i ? 'text-positive' : 'none',
        children: i ? '+'.concat(s) : '(+'.concat(s, ')')
    });
}
function B(e) {
    let { textVariant: t, className: n } = e;
    return (0, r.jsx)(l.xv, {
        variant: t,
        className: o()(w.dot, n),
        children: C.l
    });
}
function F(e) {
    let { user: t, activities: n, applicationStream: a, voiceChannel: _, textClassName: g, iconClassName: y, textSize: O = 'xs', animateEmoji: P = !0, hasQuest: D = !1, hideEmoji: x = !1, hideTooltip: M = !1 } = e;
    (0, f.Z)(null == t ? void 0 : t.id);
    let j = (null == a ? void 0 : a.discoverable) !== !1 ? a : null,
        F = (0, E.Cf)(j),
        V = i.useMemo(() => {
            var e, t;
            let r =
                null == n
                    ? void 0
                    : n.find((e) => {
                          let { type: t } = e;
                          return t === R.IIU.CUSTOM_STATUS;
                      });
            if (null == r) return null;
            let i = null != (t = null == (e = r.state) ? void 0 : e.trim()) ? t : null;
            return null == ('' === i ? null : i) && null == r.emoji ? null : r;
        }, [n]),
        Z = i.useMemo(() => {
            var e;
            return (0, s.uniqWith)(
                null !=
                    (e =
                        null == n
                            ? void 0
                            : n.filter((e) => {
                                  let { type: t, name: n } = e;
                                  return t !== R.IIU.CUSTOM_STATUS && t !== R.IIU.HANG_STATUS && n !== (null == F ? void 0 : F.name);
                              }))
                    ? e
                    : [],
                (e, t) => (null != e.application_id && null != t.application_id && e.application_id === t.application_id) || (null != e.name && null != t.name && e.name === t.name)
            );
        }, [n, null == F ? void 0 : F.name]),
        H = null == n ? void 0 : n.find((e) => e.name === (null == F ? void 0 : F.name)),
        Y = (null == t ? void 0 : t.bot) === !0,
        W = (0, c.e7)([b.Z], () => b.Z.isBlockedOrIgnored(null == t ? void 0 : t.id)),
        K = (0, p.Z)({ location: 'ActivityStatus' }) && null != V ? (0, h.Z)(V) : null,
        z = (null == V ? void 0 : V.state) != null || null != K,
        q = null != j,
        X = !q && null != _,
        Q = Z.length + (q || X ? 1 : 0),
        J = Q > 1,
        $ = (null == V ? void 0 : V.state) != null && 'xs' === O,
        ee = U({
            streamActivity: H,
            otherActivities: Z,
            voiceActivityChannel: X ? _ : null
        });
    if (W) return null;
    let et = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = !0 === e || M;
            if (null != j)
                return (0, r.jsx)(S.Z, {
                    stream: j,
                    game: H,
                    textVariant: 'text-'.concat(O, '/medium'),
                    textClassName: g,
                    iconClassName: y,
                    hideText: $,
                    hideIcon: Y,
                    hideTooltip: t
                });
            let n = null == Z ? void 0 : Z[0];
            return null != n
                ? (0, r.jsx)(A.Z, {
                      activity: n,
                      textVariant: 'text-'.concat(O, '/medium'),
                      textClassName: g,
                      iconClassName: y,
                      hideText: $,
                      hideIcon: Y,
                      hideTooltip: t
                  })
                : null != _
                  ? (0, r.jsx)(N.Z, {
                        channel: _,
                        textVariant: 'text-'.concat(O, '/medium'),
                        textClassName: g,
                        iconClassName: y,
                        hideText: $,
                        hideTooltip: t
                    })
                  : null;
        },
        en = () => {
            let e = [],
                t = {
                    textVariant: 'text-sm/medium',
                    hideTooltip: !0,
                    hideIcon: !1,
                    hideText: !1,
                    canTruncate: !1
                };
            return (
                null != j &&
                    e.push(
                        (0, r.jsx)(
                            S.Z,
                            k(
                                L(
                                    {
                                        stream: j,
                                        game: null == n ? void 0 : n.find(d.Z)
                                    },
                                    t
                                ),
                                { showChannelName: !0 }
                            ),
                            'stream'
                        )
                    ),
                Z.forEach((n, i) => {
                    e.push((0, r.jsx)(A.Z, L({ activity: n }, t), 'activity-'.concat(i)));
                }),
                X && e.push((0, r.jsx)(N.Z, k(L({ channel: _ }, t), { showChannelName: !0 }), 'voice')),
                e
            );
        },
        er = () =>
            (0, r.jsx)(G, {
                textVariant: 'text-'.concat(O, '/medium'),
                className: g,
                hasCustomStatusText: z,
                totalActivityCount: Q
            }),
        ei = () =>
            0 === Q
                ? null
                : J && !Y
                  ? M
                      ? (0, r.jsxs)('div', {
                            className: w.activityContainer,
                            children: [et(), er()]
                        })
                      : (0, r.jsx)(u.ua7, {
                            tooltipContentClassName: o()(w.container, w.activitiesTooltip, w.hasMultipleActivities),
                            delay: C.X,
                            text: en(),
                            'aria-label': ee,
                            children: (e) =>
                                (0, r.jsxs)(
                                    'div',
                                    k(L({ className: w.activityContainer }, e), {
                                        children: [et(!0), er()]
                                    })
                                )
                        })
                  : et(),
        ea = () => {
            if (null == V) return null;
            let e = V.emoji,
                t = V.state,
                n = null != K ? (0, m.Z)(K) : null;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    null != n &&
                        (0, r.jsx)(l.xv, {
                            variant: 'text-'.concat(O, '/medium'),
                            className: o()(g, w.customStatusLabel),
                            color: 'none',
                            children: ''.concat(n, ': ')
                        }),
                    null != e &&
                        !x &&
                        (0, r.jsx)(v.Z, {
                            emoji: e,
                            animate: P,
                            hideTooltip: M,
                            className: y
                        }),
                    null != t &&
                        (0, r.jsx)(T.Z, {
                            variant: 'text-'.concat(O, '/medium'),
                            className: g,
                            hideTooltip: M,
                            children: t
                        })
                ]
            });
        };
    return (0, r.jsxs)('div', {
        className: o()(w.container, {
            [w.textXs]: 'xs' === O,
            [w.textSm]: 'sm' === O
        }),
        children: [
            ei(),
            null != V &&
                Q > 0 &&
                (0, r.jsx)(B, {
                    textVariant: 'text-'.concat(O, '/normal'),
                    className: g
                }),
            ea(),
            D && (0, r.jsx)(I.Z, {})
        ]
    });
}
