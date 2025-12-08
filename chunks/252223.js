n.d(t, { Z: () => Z }), n(539854), n(781311);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n(793030),
    c = n(442837),
    u = n(481060),
    d = n(833664),
    f = n(545957),
    p = n(933557),
    _ = n(482798),
    m = n(687516),
    h = n(106301),
    g = n(741570),
    E = n(314897),
    b = n(699516),
    y = n(802529),
    O = n(11133),
    v = n(303524),
    S = n(329520),
    I = n(233023),
    T = n(868781),
    A = n(122943),
    C = n(556638),
    N = n(981631),
    P = n(388032),
    R = n(80568);
function w(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                w(e, t, n[t]);
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
function L(e, t) {
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
function j(e) {
    let t = (null == e ? void 0 : e.name) === "" ? null : null == e ? void 0 : e.name;
    return null != t ? t : P.intl.string(P.t.eXan7B);
}
function M(e, t) {
    return (
        (e.isDM() || e.isGroupDM()
            ? P.intl.string(P.t["9FaEzi"])
            : e.isGuildStageVoice()
              ? P.intl.string(P.t.QygGCN)
              : P.intl.string(P.t.msxteM)) + (null != t ? " (".concat(t, ")") : "")
    );
}
function k(e) {
    let { streamActivity: t, otherActivities: n, voiceActivityChannel: r } = e,
        i = [],
        { descriptiveTextEnabled: a } = (0, y.f)({ location: "StackedActivityStatus" }),
        { enableTopNavButton: o } = (0, _.Cq)({ location: "StackedActivityStatus" }),
        s = (0, p.ZP)(r),
        l = a || o;
    return (
        null != t && i.push(j(t)),
        n.forEach((e) => {
            let { tooltip: t } = (0, O.Z)(e, l);
            null != t && i.push(t);
        }),
        null == t && null != r && i.push(M(r, s)),
        i.length > 0 ? i.join(", ") : ""
    );
}
function U(e) {
    let { textVariant: t, className: n, hasCustomStatusText: i, totalActivityCount: a } = e,
        s = a - 1;
    return (0, r.jsxs)(l.xvT, {
        variant: t,
        className: o()(n, R.activityCounter),
        color: i ? "status-positive" : "none",
        children: ["+", s],
    });
}
function G(e) {
    let { textVariant: t, className: n } = e;
    return (0, r.jsx)(l.xvT, {
        variant: t,
        className: o()(R.dot, n),
        children: C.l,
    });
}
function Z(e) {
    let {
        user: t,
        activities: n,
        applicationStream: a,
        voiceChannel: l,
        textClassName: p,
        iconClassName: _,
        textSize: y = "xs",
        animateEmoji: O = !0,
        hasQuest: P = !1,
        hideEmoji: w = !1,
        hideTooltip: x = !1,
    } = e;
    (0, f.Z)(null == t ? void 0 : t.id);
    let j = (null == a ? void 0 : a.discoverable) !== !1 ? a : null,
        M = (0, m.Cf)(j),
        Z = (0, g.E)("ActivityStatus", l),
        B = i.useMemo(() => {
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
            return null == ("" === i ? null : i) && null == r.emoji ? null : r;
        }, [n]),
        F = (0, c.e7)([E.default], () => E.default.getId() === (null == t ? void 0 : t.id)),
        V = (0, c.e7)([h.Z], () =>
            Z
                ? F
                    ? h.Z.getHangStatusActivity()
                    : null != n
                      ? n.find((e) => e.type === N.IIU.HANG_STATUS)
                      : null
                : null,
        ),
        H = i.useMemo(() => {
            var e;
            return (0, s.uniqWith)(
                null !=
                    (e =
                        null == n
                            ? void 0
                            : n.filter((e) => {
                                  let { type: t, name: n } = e;
                                  return (
                                      t !== N.IIU.CUSTOM_STATUS &&
                                      t !== N.IIU.HANG_STATUS &&
                                      n !== (null == M ? void 0 : M.name)
                                  );
                              }))
                    ? e
                    : [],
                (e, t) =>
                    (null != e.application_id && null != t.application_id && e.application_id === t.application_id) ||
                    (null != e.name && null != t.name && e.name === t.name),
            );
        }, [n, null == M ? void 0 : M.name]),
        Y = null == n ? void 0 : n.find((e) => e.name === (null == M ? void 0 : M.name)),
        W = (null == t ? void 0 : t.bot) === !0,
        K = (0, c.e7)([b.Z], () => b.Z.isBlockedOrIgnored(null == t ? void 0 : t.id)),
        z = (null == B ? void 0 : B.state) != null,
        q = null != j,
        Q = !q && null != l,
        X = H.length + (q || Q ? 1 : 0),
        J = X > 1,
        $ = ((null == B ? void 0 : B.state) != null || null != V) && "xs" === y,
        ee = k({
            streamActivity: Y,
            otherActivities: H,
            voiceActivityChannel: Q ? l : null,
        });
    if (K) return null;
    let et = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = !0 === e || x;
            if (null != j)
                return (0, r.jsx)(S.Z, {
                    stream: j,
                    game: Y,
                    textVariant: "text-".concat(y, "/medium"),
                    textClassName: p,
                    iconClassName: _,
                    hideText: $,
                    hideIcon: W,
                    hideTooltip: t,
                });
            let n = null == H ? void 0 : H[0];
            return null != n
                ? (0, r.jsx)(T.Z, {
                      activity: n,
                      textVariant: "text-".concat(y, "/medium"),
                      textClassName: p,
                      iconClassName: _,
                      hideText: $,
                      hideIcon: W,
                      hideTooltip: t,
                  })
                : null != l
                  ? (0, r.jsx)(A.Z, {
                        channel: l,
                        textVariant: "text-".concat(y, "/medium"),
                        textClassName: p,
                        iconClassName: _,
                        hideText: $,
                        hideTooltip: t,
                    })
                  : null;
        },
        en = () => {
            let e = [],
                t = {
                    textVariant: "text-sm/medium",
                    hideTooltip: !0,
                    hideIcon: !1,
                    hideText: !1,
                    canTruncate: !1,
                };
            return (
                null != j &&
                    e.push(
                        (0, r.jsx)(
                            S.Z,
                            L(
                                D(
                                    {
                                        stream: j,
                                        game: null == n ? void 0 : n.find(d.Z),
                                    },
                                    t,
                                ),
                                { showChannelName: !0 },
                            ),
                            "stream",
                        ),
                    ),
                H.forEach((n, i) => {
                    e.push((0, r.jsx)(T.Z, D({ activity: n }, t), "activity-".concat(i)));
                }),
                Q && e.push((0, r.jsx)(A.Z, L(D({ channel: l }, t), { showChannelName: !0 }), "voice")),
                e
            );
        },
        er = () =>
            (0, r.jsx)(U, {
                textVariant: "text-".concat(y, "/medium"),
                className: p,
                hasCustomStatusText: z,
                totalActivityCount: X,
            }),
        ei = () =>
            0 === X
                ? null
                : J && !W
                  ? x
                      ? (0, r.jsxs)("div", {
                            className: o()(R.activityContainer, $ && R.iconOnly),
                            children: [et(), er()],
                        })
                      : (0, r.jsx)(u.aML, {
                            "data-migration-pending": !0,
                            tooltipContentClassName: o()(R.container, R.activitiesTooltip, R.hasMultipleActivities),
                            delay: C.X,
                            text: en(),
                            "aria-label": ee,
                            children: (e) =>
                                (0, r.jsxs)(
                                    "div",
                                    L(D({ className: o()(R.activityContainer, $ && R.iconOnly) }, e), {
                                        children: [et(!0), er()],
                                    }),
                                ),
                        })
                  : et(),
        ea = o()(R.container, {
            [R.textXs]: "xs" === y,
            [R.textSm]: "sm" === y,
        }),
        eo = () =>
            null == B && null == V
                ? null
                : (0, r.jsx)(I.Z, {
                      customStatusActivity: B,
                      textSize: y,
                      animateEmoji: O,
                      hideEmoji: w,
                      hideTooltip: x,
                      textClassName: p,
                      iconClassName: _,
                      tooltipClassName: ea,
                      voiceChannel: l,
                      hangStatus: V,
                      userId: null == t ? void 0 : t.id,
                  });
    return (0, r.jsxs)("div", {
        className: ea,
        children: [
            ei(),
            (null != B || null != V) &&
                X > 0 &&
                (0, r.jsx)(G, {
                    textVariant: "text-".concat(y, "/normal"),
                    className: p,
                }),
            eo(),
            P && (0, r.jsx)(v.Z, {}),
        ],
    });
}
