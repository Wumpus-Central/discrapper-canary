n.d(t, { Z: () => B }), n(539854), n(781311);
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
    _ = n(933557),
    p = n(482798),
    h = n(687516),
    m = n(106301),
    g = n(741570),
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
    P = n(80568);
function D(e, t, n) {
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
function M(e) {
    let t = (null == e ? void 0 : e.name) === "" ? null : null == e ? void 0 : e.name;
    return null != t ? t : R.intl.string(R.t.eXan7B);
}
function k(e, t) {
    return (
        (e.isDM() || e.isGroupDM()
            ? R.intl.string(R.t["9FaEzi"])
            : e.isGuildStageVoice()
              ? R.intl.string(R.t.QygGCN)
              : R.intl.string(R.t.msxteM)) + (null != t ? " (".concat(t, ")") : "")
    );
}
function j(e) {
    let { streamActivity: t, otherActivities: n, voiceActivityChannel: r } = e,
        i = [],
        { descriptiveTextEnabled: a } = (0, y.f)({ location: "StackedActivityStatus" }),
        { enableTopNavButton: o } = (0, p.Cq)({ location: "StackedActivityStatus" }),
        s = (0, _.ZP)(r),
        l = a || o;
    return (
        null != t && i.push(M(t)),
        n.forEach((e) => {
            let { tooltip: t } = (0, O.Z)(e, l);
            null != t && i.push(t);
        }),
        null == t && null != r && i.push(k(r, s)),
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
        textClassName: _,
        iconClassName: p,
        textSize: y = "xs",
        animateEmoji: O = !0,
        hasQuest: R = !1,
        hideEmoji: D = !1,
        hideTooltip: x = !1,
    } = e;
    (0, f.Z)(null == t ? void 0 : t.id);
    let M = (null == a ? void 0 : a.discoverable) !== !1 ? a : null,
        k = (0, h.Cf)(M),
        B = (0, g.E)("ActivityStatus", l),
        Z = i.useMemo(() => {
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
        V = (0, c.e7)([m.Z], () =>
            B
                ? F
                    ? m.Z.getHangStatusActivity()
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
                                      n !== (null == k ? void 0 : k.name)
                                  );
                              }))
                    ? e
                    : [],
                (e, t) =>
                    (null != e.application_id && null != t.application_id && e.application_id === t.application_id) ||
                    (null != e.name && null != t.name && e.name === t.name),
            );
        }, [n, null == k ? void 0 : k.name]),
        Y = null == n ? void 0 : n.find((e) => e.name === (null == k ? void 0 : k.name)),
        W = (null == t ? void 0 : t.bot) === !0,
        K = (0, c.e7)([b.Z], () => b.Z.isBlockedOrIgnored(null == t ? void 0 : t.id)),
        z = (null == Z ? void 0 : Z.state) != null,
        q = null != M,
        X = !q && null != l,
        Q = H.length + (q || X ? 1 : 0),
        J = Q > 1,
        $ = ((null == Z ? void 0 : Z.state) != null || null != V) && "xs" === y,
        ee = j({
            streamActivity: Y,
            otherActivities: H,
            voiceActivityChannel: X ? l : null,
        });
    if (K) return null;
    let et = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = !0 === e || x;
            if (null != M)
                return (0, r.jsx)(I.Z, {
                    stream: M,
                    game: Y,
                    textVariant: "text-".concat(y, "/medium"),
                    textClassName: _,
                    iconClassName: p,
                    hideText: $,
                    hideIcon: W,
                    hideTooltip: t,
                });
            let n = null == H ? void 0 : H[0];
            return null != n
                ? (0, r.jsx)(S.Z, {
                      activity: n,
                      textVariant: "text-".concat(y, "/medium"),
                      textClassName: _,
                      iconClassName: p,
                      hideText: $,
                      hideIcon: W,
                      hideTooltip: t,
                  })
                : null != l
                  ? (0, r.jsx)(A.Z, {
                        channel: l,
                        textVariant: "text-".concat(y, "/medium"),
                        textClassName: _,
                        iconClassName: p,
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
                null != M &&
                    e.push(
                        (0, r.jsx)(
                            I.Z,
                            L(
                                w(
                                    {
                                        stream: M,
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
                    e.push((0, r.jsx)(S.Z, w({ activity: n }, t), "activity-".concat(i)));
                }),
                X && e.push((0, r.jsx)(A.Z, L(w({ channel: l }, t), { showChannelName: !0 }), "voice")),
                e
            );
        },
        er = () =>
            (0, r.jsx)(U, {
                textVariant: "text-".concat(y, "/medium"),
                className: _,
                hasCustomStatusText: z,
                totalActivityCount: Q,
            }),
        ei = () =>
            0 === Q
                ? null
                : J && !W
                  ? x
                      ? (0, r.jsxs)("div", {
                            className: o()(P.activityContainer, $ && P.iconOnly),
                            children: [et(), er()],
                        })
                      : (0, r.jsx)(u.aML, {
                            "data-migration-pending": !0,
                            tooltipContentClassName: o()(P.container, P.activitiesTooltip, P.hasMultipleActivities),
                            delay: C.X,
                            text: en(),
                            "aria-label": ee,
                            children: (e) =>
                                (0, r.jsxs)(
                                    "div",
                                    L(w({ className: o()(P.activityContainer, $ && P.iconOnly) }, e), {
                                        children: [et(!0), er()],
                                    }),
                                ),
                        })
                  : et(),
        ea = o()(P.container, {
            [P.textXs]: "xs" === y,
            [P.textSm]: "sm" === y,
        }),
        eo = () =>
            null == Z && null == V
                ? null
                : (0, r.jsx)(T.Z, {
                      customStatusActivity: Z,
                      textSize: y,
                      animateEmoji: O,
                      hideEmoji: D,
                      hideTooltip: x,
                      textClassName: _,
                      iconClassName: p,
                      tooltipClassName: ea,
                      voiceChannel: l,
                      hangStatus: V,
                      userId: null == t ? void 0 : t.id,
                  });
    return (0, r.jsxs)("div", {
        className: ea,
        children: [
            ei(),
            (null != Z || null != V) &&
                Q > 0 &&
                (0, r.jsx)(G, {
                    textVariant: "text-".concat(y, "/normal"),
                    className: _,
                }),
            eo(),
            R && (0, r.jsx)(v.Z, {}),
        ],
    });
}
