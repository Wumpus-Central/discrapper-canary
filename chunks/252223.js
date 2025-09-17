n.d(t, { Z: () => G }), n(539854), n(781311);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n(793030),
    c = n(442837),
    u = n(481060),
    d = n(833664),
    f = n(545957),
    _ = n(933557),
    p = n(482798),
    h = n(687516),
    m = n(106301),
    g = n(314897),
    E = n(699516),
    b = n(802529),
    y = n(11133),
    O = n(303524),
    v = n(329520),
    I = n(233023),
    T = n(868781),
    S = n(122943),
    A = n(556638),
    C = n(981631),
    N = n(388032),
    R = n(666998);
function P(e, t, n) {
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
function w(e) {
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
                P(e, t, n[t]);
            });
    }
    return e;
}
function D(e, t) {
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
            : D(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function L(e) {
    let t = (null == e ? void 0 : e.name) === "" ? null : null == e ? void 0 : e.name;
    return null != t ? N.intl.formatToPlainString(N.t["0wJXSk"], { name: t }) : N.intl.string(N.t.eXan7O);
}
function j(e, t) {
    return (
        (e.isDM() || e.isGroupDM()
            ? N.intl.string(N.t["9FaEzs"])
            : e.isGuildStageVoice()
              ? N.intl.string(N.t.QygGCA)
              : N.intl.string(N.t.msxteH)) + (null != t ? " (".concat(t, ")") : "")
    );
}
function M(e) {
    let { streamActivity: t, otherActivities: n, voiceActivityChannel: r } = e,
        i = [],
        { descriptiveTextEnabled: a } = (0, b.f)({ location: "StackedActivityStatus" }),
        { enableTopNavButton: o } = (0, p.Cq)({ location: "StackedActivityStatus" }),
        s = (0, _.ZP)(r),
        l = a || o;
    return (
        null != t && i.push(L(t)),
        n.forEach((e) => {
            let { tooltip: t } = (0, y.Z)(e, l);
            null != t && i.push(t);
        }),
        null == t && null != r && i.push(j(r, s)),
        i.length > 0 ? i.join(", ") : ""
    );
}
function k(e) {
    let { textVariant: t, className: n, hasCustomStatusText: i, totalActivityCount: a } = e,
        s = a - 1;
    return (0, r.jsxs)(l.xvT, {
        variant: t,
        className: o()(n, R.activityCounter),
        color: i ? "status-positive" : "none",
        children: ["+", s],
    });
}
function U(e) {
    let { textVariant: t, className: n } = e;
    return (0, r.jsx)(l.xvT, {
        variant: t,
        className: o()(R.dot, n),
        children: A.l,
    });
}
function G(e) {
    let {
        user: t,
        activities: n,
        applicationStream: a,
        voiceChannel: l,
        textClassName: _,
        iconClassName: p,
        textSize: b = "xs",
        animateEmoji: y = !0,
        hasQuest: N = !1,
        hideEmoji: P = !1,
        hideTooltip: D = !1,
    } = e;
    (0, f.Z)(null == t ? void 0 : t.id);
    let L = (null == a ? void 0 : a.discoverable) !== !1 ? a : null,
        j = (0, h.Cf)(L),
        G = i.useMemo(() => {
            var e, t;
            let r =
                null == n
                    ? void 0
                    : n.find((e) => {
                          let { type: t } = e;
                          return t === C.IIU.CUSTOM_STATUS;
                      });
            if (null == r) return null;
            let i = null != (t = null == (e = r.state) ? void 0 : e.trim()) ? t : null;
            return null == ("" === i ? null : i) && null == r.emoji ? null : r;
        }, [n]),
        B = (0, c.e7)([g.default], () => g.default.getId() === (null == t ? void 0 : t.id)),
        Z = (0, c.e7)([m.Z], () =>
            B ? m.Z.getHangStatusActivity() : null != n ? n.find((e) => e.type === C.IIU.HANG_STATUS) : null,
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
                                      t !== C.IIU.CUSTOM_STATUS &&
                                      t !== C.IIU.HANG_STATUS &&
                                      n !== (null == j ? void 0 : j.name)
                                  );
                              }))
                    ? e
                    : [],
                (e, t) =>
                    (null != e.application_id && null != t.application_id && e.application_id === t.application_id) ||
                    (null != e.name && null != t.name && e.name === t.name),
            );
        }, [n, null == j ? void 0 : j.name]),
        V = null == n ? void 0 : n.find((e) => e.name === (null == j ? void 0 : j.name)),
        H = (null == t ? void 0 : t.bot) === !0,
        Y = (0, c.e7)([E.Z], () => E.Z.isBlockedOrIgnored(null == t ? void 0 : t.id)),
        W = (null == G ? void 0 : G.state) != null,
        K = null != L,
        z = !K && null != l,
        q = F.length + (K || z ? 1 : 0),
        X = q > 1,
        Q = ((null == G ? void 0 : G.state) != null || null != Z) && "xs" === b,
        J = M({
            streamActivity: V,
            otherActivities: F,
            voiceActivityChannel: z ? l : null,
        });
    if (Y) return null;
    let $ = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = !0 === e || D;
            if (null != L)
                return (0, r.jsx)(v.Z, {
                    stream: L,
                    game: V,
                    textVariant: "text-".concat(b, "/medium"),
                    textClassName: _,
                    iconClassName: p,
                    hideText: Q,
                    hideIcon: H,
                    hideTooltip: t,
                });
            let n = null == F ? void 0 : F[0];
            return null != n
                ? (0, r.jsx)(T.Z, {
                      activity: n,
                      textVariant: "text-".concat(b, "/medium"),
                      textClassName: _,
                      iconClassName: p,
                      hideText: Q,
                      hideIcon: H,
                      hideTooltip: t,
                  })
                : null != l
                  ? (0, r.jsx)(S.Z, {
                        channel: l,
                        textVariant: "text-".concat(b, "/medium"),
                        textClassName: _,
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
                            v.Z,
                            x(
                                w(
                                    {
                                        stream: L,
                                        game: null == n ? void 0 : n.find(d.Z),
                                    },
                                    t,
                                ),
                                { showChannelName: !0 },
                            ),
                            "stream",
                        ),
                    ),
                F.forEach((n, i) => {
                    e.push((0, r.jsx)(T.Z, w({ activity: n }, t), "activity-".concat(i)));
                }),
                z && e.push((0, r.jsx)(S.Z, x(w({ channel: l }, t), { showChannelName: !0 }), "voice")),
                e
            );
        },
        et = () =>
            (0, r.jsx)(k, {
                textVariant: "text-".concat(b, "/medium"),
                className: _,
                hasCustomStatusText: W,
                totalActivityCount: q,
            }),
        en = () =>
            0 === q
                ? null
                : X && !H
                  ? D
                      ? (0, r.jsxs)("div", {
                            className: o()(R.activityContainer, Q && R.iconOnly),
                            children: [$(), et()],
                        })
                      : (0, r.jsx)(u.ua7, {
                            tooltipContentClassName: o()(R.container, R.activitiesTooltip, R.hasMultipleActivities),
                            delay: A.X,
                            text: ee(),
                            "aria-label": J,
                            children: (e) =>
                                (0, r.jsxs)(
                                    "div",
                                    x(w({ className: o()(R.activityContainer, Q && R.iconOnly) }, e), {
                                        children: [$(!0), et()],
                                    }),
                                ),
                        })
                  : $(),
        er = o()(R.container, {
            [R.textXs]: "xs" === b,
            [R.textSm]: "sm" === b,
        }),
        ei = () =>
            null == G && null == Z
                ? null
                : (0, r.jsx)(I.Z, {
                      customStatusActivity: G,
                      textSize: b,
                      animateEmoji: y,
                      hideEmoji: P,
                      hideTooltip: D,
                      textClassName: _,
                      iconClassName: p,
                      tooltipClassName: er,
                      voiceChannel: l,
                      hangStatus: Z,
                  });
    return (0, r.jsxs)("div", {
        className: er,
        children: [
            en(),
            (null != G || null != Z) &&
                q > 0 &&
                (0, r.jsx)(U, {
                    textVariant: "text-".concat(b, "/normal"),
                    className: _,
                }),
            ei(),
            N && (0, r.jsx)(O.Z, {}),
        ],
    });
}
