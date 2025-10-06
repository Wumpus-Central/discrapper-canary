n.d(t, { Z: () => B }), n(539854), n(781311);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n(793030),
    c = n(442837),
    u = n(481060),
    d = n(835834),
    f = n(833664),
    _ = n(545957),
    p = n(933557),
    h = n(482798),
    m = n(687516),
    g = n(106301),
    E = n(314897),
    b = n(699516),
    y = n(802529),
    O = n(11133),
    v = n(303524),
    I = n(329520),
    T = n(233023),
    S = n(868781),
    A = n(122943),
    C = n(556638),
    N = n(981631),
    R = n(388032),
    P = n(666998);
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
function L(e, t) {
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
function x(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : L(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function M(e) {
    let t = (0, d.R)("formatActivityString"),
        n = (null == e ? void 0 : e.name) === "" ? null : null == e ? void 0 : e.name;
    return null != n ? (t ? n : R.intl.formatToPlainString(R.t["0wJXSk"], { name: n })) : R.intl.string(R.t.eXan7O);
}
function j(e, t) {
    return (
        (e.isDM() || e.isGroupDM()
            ? R.intl.string(R.t["9FaEzs"])
            : e.isGuildStageVoice()
              ? R.intl.string(R.t.QygGCA)
              : R.intl.string(R.t.msxteH)) + (null != t ? " (".concat(t, ")") : "")
    );
}
function k(e) {
    let { streamActivity: t, otherActivities: n, voiceActivityChannel: r } = e,
        i = [],
        { descriptiveTextEnabled: a } = (0, y.f)({ location: "StackedActivityStatus" }),
        { enableTopNavButton: o } = (0, h.Cq)({ location: "StackedActivityStatus" }),
        s = (0, p.ZP)(r),
        l = a || o;
    return (
        null != t && i.push(M(t)),
        n.forEach((e) => {
            let { tooltip: t } = (0, O.Z)(e, l);
            null != t && i.push(t);
        }),
        null == t && null != r && i.push(j(r, s)),
        i.length > 0 ? i.join(", ") : ""
    );
}
function U(e) {
    let { textVariant: t, className: n, hasCustomStatusText: i, totalActivityCount: a } = e,
        s = a - 1;
    return (0, r.jsxs)(l.xvT, {
        variant: t,
        className: o()(n, P.activityCounter),
        color: i ? "status-positive" : "none",
        children: ["+", s],
    });
}
function G(e) {
    let { textVariant: t, className: n } = e;
    return (0, r.jsx)(l.xvT, {
        variant: t,
        className: o()(P.dot, n),
        children: C.l,
    });
}
function B(e) {
    let {
        user: t,
        activities: n,
        applicationStream: a,
        voiceChannel: l,
        textClassName: d,
        iconClassName: p,
        textSize: h = "xs",
        animateEmoji: y = !0,
        hasQuest: O = !1,
        hideEmoji: R = !1,
        hideTooltip: w = !1,
    } = e;
    (0, _.Z)(null == t ? void 0 : t.id);
    let L = (null == a ? void 0 : a.discoverable) !== !1 ? a : null,
        M = (0, m.Cf)(L),
        j = i.useMemo(() => {
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
        B = (0, c.e7)([E.default], () => E.default.getId() === (null == t ? void 0 : t.id)),
        Z = (0, c.e7)([g.Z], () =>
            B ? g.Z.getHangStatusActivity() : null != n ? n.find((e) => e.type === N.IIU.HANG_STATUS) : null,
        ),
        F = i.useMemo(() => {
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
        V = null == n ? void 0 : n.find((e) => e.name === (null == M ? void 0 : M.name)),
        H = (null == t ? void 0 : t.bot) === !0,
        Y = (0, c.e7)([b.Z], () => b.Z.isBlockedOrIgnored(null == t ? void 0 : t.id)),
        W = (null == j ? void 0 : j.state) != null,
        K = null != L,
        z = !K && null != l,
        q = F.length + (K || z ? 1 : 0),
        X = q > 1,
        Q = ((null == j ? void 0 : j.state) != null || null != Z) && "xs" === h,
        J = k({
            streamActivity: V,
            otherActivities: F,
            voiceActivityChannel: z ? l : null,
        });
    if (Y) return null;
    let $ = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = !0 === e || w;
            if (null != L)
                return (0, r.jsx)(I.Z, {
                    stream: L,
                    game: V,
                    textVariant: "text-".concat(h, "/medium"),
                    textClassName: d,
                    iconClassName: p,
                    hideText: Q,
                    hideIcon: H,
                    hideTooltip: t,
                });
            let n = null == F ? void 0 : F[0];
            return null != n
                ? (0, r.jsx)(S.Z, {
                      activity: n,
                      textVariant: "text-".concat(h, "/medium"),
                      textClassName: d,
                      iconClassName: p,
                      hideText: Q,
                      hideIcon: H,
                      hideTooltip: t,
                  })
                : null != l
                  ? (0, r.jsx)(A.Z, {
                        channel: l,
                        textVariant: "text-".concat(h, "/medium"),
                        textClassName: d,
                        iconClassName: p,
                        hideText: Q,
                        hideTooltip: t,
                    })
                  : null;
        },
        ee = () => {
            let e = [],
                t = {
                    textVariant: "text-sm/medium",
                    hideTooltip: !0,
                    hideIcon: !1,
                    hideText: !1,
                    canTruncate: !1,
                };
            return (
                null != L &&
                    e.push(
                        (0, r.jsx)(
                            I.Z,
                            x(
                                D(
                                    {
                                        stream: L,
                                        game: null == n ? void 0 : n.find(f.Z),
                                    },
                                    t,
                                ),
                                { showChannelName: !0 },
                            ),
                            "stream",
                        ),
                    ),
                F.forEach((n, i) => {
                    e.push((0, r.jsx)(S.Z, D({ activity: n }, t), "activity-".concat(i)));
                }),
                z && e.push((0, r.jsx)(A.Z, x(D({ channel: l }, t), { showChannelName: !0 }), "voice")),
                e
            );
        },
        et = () =>
            (0, r.jsx)(U, {
                textVariant: "text-".concat(h, "/medium"),
                className: d,
                hasCustomStatusText: W,
                totalActivityCount: q,
            }),
        en = () =>
            0 === q
                ? null
                : X && !H
                  ? w
                      ? (0, r.jsxs)("div", {
                            className: o()(P.activityContainer, Q && P.iconOnly),
                            children: [$(), et()],
                        })
                      : (0, r.jsx)(u.ua7, {
                            tooltipContentClassName: o()(P.container, P.activitiesTooltip, P.hasMultipleActivities),
                            delay: C.X,
                            text: ee(),
                            "aria-label": J,
                            children: (e) =>
                                (0, r.jsxs)(
                                    "div",
                                    x(D({ className: o()(P.activityContainer, Q && P.iconOnly) }, e), {
                                        children: [$(!0), et()],
                                    }),
                                ),
                        })
                  : $(),
        er = o()(P.container, {
            [P.textXs]: "xs" === h,
            [P.textSm]: "sm" === h,
        }),
        ei = () =>
            null == j && null == Z
                ? null
                : (0, r.jsx)(T.Z, {
                      customStatusActivity: j,
                      textSize: h,
                      animateEmoji: y,
                      hideEmoji: R,
                      hideTooltip: w,
                      textClassName: d,
                      iconClassName: p,
                      tooltipClassName: er,
                      voiceChannel: l,
                      hangStatus: Z,
                      userId: null == t ? void 0 : t.id,
                  });
    return (0, r.jsxs)("div", {
        className: er,
        children: [
            en(),
            (null != j || null != Z) &&
                q > 0 &&
                (0, r.jsx)(G, {
                    textVariant: "text-".concat(h, "/normal"),
                    className: d,
                }),
            ei(),
            O && (0, r.jsx)(v.Z, {}),
        ],
    });
}
