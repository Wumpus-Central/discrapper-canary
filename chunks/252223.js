(n.d(t, { Z: () => V }), n(539854), n(781311));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n(793030),
    c = n(442837),
    u = n(481060),
    d = n(833664),
    _ = n(545957),
    f = n(933557),
    p = n(359588),
    h = n(74340),
    m = n(482798),
    g = n(687516),
    E = n(106301),
    b = n(314897),
    y = n(699516),
    O = n(802529),
    v = n(11133),
    I = n(303524),
    T = n(329520),
    S = n(233023),
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                D(e, t, n[t]);
            }));
    }
    return e;
}
function x(e, t) {
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
function M(e, t) {
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
function k(e) {
    let t = (null == e ? void 0 : e.name) === '' ? null : null == e ? void 0 : e.name;
    return null != t ? P.intl.formatToPlainString(P.t['0wJXSk'], { name: t }) : P.intl.string(P.t.eXan7O);
}
function j(e, t) {
    return (e.isDM() || e.isGroupDM() ? P.intl.string(P.t['9FaEzs']) : e.isGuildStageVoice() ? P.intl.string(P.t.QygGCA) : P.intl.string(P.t.msxteH)) + (null != t ? ' ('.concat(t, ')') : '');
}
function U(e) {
    let { streamActivity: t, otherActivities: n, voiceActivityChannel: r } = e,
        i = [],
        { descriptiveTextEnabled: a } = (0, O.f)({ location: 'StackedActivityStatus' }),
        { enableTopNavButton: o } = (0, m.Cq)({ location: 'StackedActivityStatus' }),
        s = (0, f.ZP)(r),
        l = a || o;
    return (
        null != t && i.push(k(t)),
        n.forEach((e) => {
            let { tooltip: t } = (0, v.Z)(e, l);
            null != t && i.push(t);
        }),
        null == t && null != r && i.push(j(r, s)),
        i.length > 0 ? i.join(', ') : ''
    );
}
function G(e) {
    let { textVariant: t, className: n, hasCustomStatusText: i, totalActivityCount: a } = e,
        s = a - 1;
    return (0, r.jsxs)(l.xv, {
        variant: t,
        className: o()(n, w.activityCounter),
        color: i ? 'status-positive' : 'none',
        children: ['+', s]
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
function V(e) {
    let { user: t, activities: n, applicationStream: a, voiceChannel: l, textClassName: f, iconClassName: m, textSize: O = 'xs', animateEmoji: v = !0, hasQuest: P = !1, hideEmoji: D = !1, hideTooltip: x = !1 } = e;
    (0, _.Z)(null == t ? void 0 : t.id);
    let k = (null == a ? void 0 : a.discoverable) !== !1 ? a : null,
        j = (0, g.Cf)(k),
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
        F = (0, c.e7)([b.default], () => b.default.getId() === (null == t ? void 0 : t.id)),
        Z = (0, c.e7)([E.Z], () => (F ? E.Z.getHangStatusActivity() : null != n ? n.find((e) => e.type === R.IIU.HANG_STATUS) : null)),
        H = i.useMemo(() => {
            var e;
            return (0, s.uniqWith)(
                null !=
                    (e =
                        null == n
                            ? void 0
                            : n.filter((e) => {
                                  let { type: t, name: n } = e;
                                  return t !== R.IIU.CUSTOM_STATUS && t !== R.IIU.HANG_STATUS && n !== (null == j ? void 0 : j.name);
                              }))
                    ? e
                    : [],
                (e, t) => (null != e.application_id && null != t.application_id && e.application_id === t.application_id) || (null != e.name && null != t.name && e.name === t.name)
            );
        }, [n, null == j ? void 0 : j.name]),
        Y = null == n ? void 0 : n.find((e) => e.name === (null == j ? void 0 : j.name)),
        W = (null == t ? void 0 : t.bot) === !0,
        K = (0, c.e7)([y.Z], () => y.Z.isBlockedOrIgnored(null == t ? void 0 : t.id)),
        z = (0, p.Z)({ location: 'ActivityStatus' }) && null != V ? (0, h.Z)(V) : null,
        q = (null == V ? void 0 : V.state) != null || null != z,
        X = null != k,
        Q = !X && null != l,
        J = H.length + (X || Q ? 1 : 0),
        $ = J > 1,
        ee = (null == V ? void 0 : V.state) != null && 'xs' === O,
        et = U({
            streamActivity: Y,
            otherActivities: H,
            voiceActivityChannel: Q ? l : null
        });
    if (K) return null;
    let en = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = !0 === e || x;
            if (null != k)
                return (0, r.jsx)(T.Z, {
                    stream: k,
                    game: Y,
                    textVariant: 'text-'.concat(O, '/medium'),
                    textClassName: f,
                    iconClassName: m,
                    hideText: ee,
                    hideIcon: W,
                    hideTooltip: t
                });
            let n = null == H ? void 0 : H[0];
            return null != n
                ? (0, r.jsx)(A.Z, {
                      activity: n,
                      textVariant: 'text-'.concat(O, '/medium'),
                      textClassName: f,
                      iconClassName: m,
                      hideText: ee,
                      hideIcon: W,
                      hideTooltip: t
                  })
                : null != l
                  ? (0, r.jsx)(N.Z, {
                        channel: l,
                        textVariant: 'text-'.concat(O, '/medium'),
                        textClassName: f,
                        iconClassName: m,
                        hideText: ee,
                        hideTooltip: t
                    })
                  : null;
        },
        er = () => {
            let e = [],
                t = {
                    textVariant: 'text-sm/medium',
                    hideTooltip: !0,
                    hideIcon: !1,
                    hideText: !1,
                    canTruncate: !1
                };
            return (
                null != k &&
                    e.push(
                        (0, r.jsx)(
                            T.Z,
                            M(
                                L(
                                    {
                                        stream: k,
                                        game: null == n ? void 0 : n.find(d.Z)
                                    },
                                    t
                                ),
                                { showChannelName: !0 }
                            ),
                            'stream'
                        )
                    ),
                H.forEach((n, i) => {
                    e.push((0, r.jsx)(A.Z, L({ activity: n }, t), 'activity-'.concat(i)));
                }),
                Q && e.push((0, r.jsx)(N.Z, M(L({ channel: l }, t), { showChannelName: !0 }), 'voice')),
                e
            );
        },
        ei = () =>
            (0, r.jsx)(G, {
                textVariant: 'text-'.concat(O, '/medium'),
                className: f,
                hasCustomStatusText: q,
                totalActivityCount: J
            }),
        ea = () =>
            0 === J
                ? null
                : $ && !W
                  ? x
                      ? (0, r.jsxs)('div', {
                            className: o()(w.activityContainer, ee && w.iconOnly),
                            children: [en(), ei()]
                        })
                      : (0, r.jsx)(u.ua7, {
                            tooltipContentClassName: o()(w.container, w.activitiesTooltip, w.hasMultipleActivities),
                            delay: C.X,
                            text: er(),
                            'aria-label': et,
                            children: (e) =>
                                (0, r.jsxs)(
                                    'div',
                                    M(L({ className: o()(w.activityContainer, ee && w.iconOnly) }, e), {
                                        children: [en(!0), ei()]
                                    })
                                )
                        })
                  : en(),
        eo = o()(w.container, {
            [w.textXs]: 'xs' === O,
            [w.textSm]: 'sm' === O
        }),
        es = () =>
            null == V && null == Z
                ? null
                : (0, r.jsx)(S.Z, {
                      customStatusActivity: V,
                      textSize: O,
                      animateEmoji: v,
                      hideEmoji: D,
                      hideTooltip: x,
                      textClassName: f,
                      iconClassName: m,
                      tooltipClassName: eo,
                      voiceChannel: l,
                      hangStatus: Z
                  });
    return (0, r.jsxs)('div', {
        className: eo,
        children: [
            ea(),
            null != V &&
                J > 0 &&
                (0, r.jsx)(B, {
                    textVariant: 'text-'.concat(O, '/normal'),
                    className: f
                }),
            es(),
            P && (0, r.jsx)(I.Z, {})
        ]
    });
}
