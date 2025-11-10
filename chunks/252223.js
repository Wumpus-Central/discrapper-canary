n.d(t, { Z: () => Z }), n(539854), n(781311);
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
    E = n(741570),
    b = n(314897),
    y = n(699516),
    O = n(802529),
    v = n(11133),
    I = n(303524),
    S = n(329520),
    T = n(233023),
    A = n(868781),
    C = n(122943),
    N = n(556638),
    R = n(981631),
    P = n(388032),
    w = n(80568);
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
function x(e) {
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
function M(e, t) {
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
function j(e) {
    let t = (0, d.R)("formatActivityString"),
        n = (null == e ? void 0 : e.name) === "" ? null : null == e ? void 0 : e.name;
    return null != n ? (t ? n : P.intl.formatToPlainString(P.t["0wJXSh"], { name: n })) : P.intl.string(P.t.eXan7B);
}
function k(e, t) {
    return (
        (e.isDM() || e.isGroupDM()
            ? P.intl.string(P.t["9FaEzi"])
            : e.isGuildStageVoice()
              ? P.intl.string(P.t.QygGCN)
              : P.intl.string(P.t.msxteM)) + (null != t ? " (".concat(t, ")") : "")
    );
}
function U(e) {
    let { streamActivity: t, otherActivities: n, voiceActivityChannel: r } = e,
        i = [],
        { descriptiveTextEnabled: a } = (0, O.f)({ location: "StackedActivityStatus" }),
        { enableTopNavButton: o } = (0, h.Cq)({ location: "StackedActivityStatus" }),
        s = (0, p.ZP)(r),
        l = a || o;
    return (
        null != t && i.push(j(t)),
        n.forEach((e) => {
            let { tooltip: t } = (0, v.Z)(e, l);
            null != t && i.push(t);
        }),
        null == t && null != r && i.push(k(r, s)),
        i.length > 0 ? i.join(", ") : ""
    );
}
function G(e) {
    let { textVariant: t, className: n, hasCustomStatusText: i, totalActivityCount: a } = e,
        s = a - 1;
    return (0, r.jsxs)(l.xvT, {
        variant: t,
        className: o()(n, w.activityCounter),
        color: i ? "status-positive" : "none",
        children: ["+", s],
    });
}
function B(e) {
    let { textVariant: t, className: n } = e;
    return (0, r.jsx)(l.xvT, {
        variant: t,
        className: o()(w.dot, n),
        children: N.l,
    });
}
function Z(e) {
    let {
        user: t,
        activities: n,
        applicationStream: a,
        voiceChannel: l,
        textClassName: d,
        iconClassName: p,
        textSize: h = "xs",
        animateEmoji: O = !0,
        hasQuest: v = !1,
        hideEmoji: P = !1,
        hideTooltip: D = !1,
    } = e;
    (0, _.Z)(null == t ? void 0 : t.id);
    let L = (null == a ? void 0 : a.discoverable) !== !1 ? a : null,
        j = (0, m.Cf)(L),
        k = (0, E.E)("ActivityStatus", l),
        Z = i.useMemo(() => {
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
            return null == ("" === i ? null : i) && null == r.emoji ? null : r;
        }, [n]),
        F = (0, c.e7)([b.default], () => b.default.getId() === (null == t ? void 0 : t.id)),
        V = (0, c.e7)([g.Z], () =>
            k
                ? F
                    ? g.Z.getHangStatusActivity()
                    : null != n
                      ? n.find((e) => e.type === R.IIU.HANG_STATUS)
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
                                      t !== R.IIU.CUSTOM_STATUS &&
                                      t !== R.IIU.HANG_STATUS &&
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
        Y = null == n ? void 0 : n.find((e) => e.name === (null == j ? void 0 : j.name)),
        W = (null == t ? void 0 : t.bot) === !0,
        K = (0, c.e7)([y.Z], () => y.Z.isBlockedOrIgnored(null == t ? void 0 : t.id)),
        z = (null == Z ? void 0 : Z.state) != null,
        q = null != L,
        X = !q && null != l,
        Q = H.length + (q || X ? 1 : 0),
        J = Q > 1,
        $ = ((null == Z ? void 0 : Z.state) != null || null != V) && "xs" === h,
        ee = U({
            streamActivity: Y,
            otherActivities: H,
            voiceActivityChannel: X ? l : null,
        });
    if (K) return null;
    let et = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = !0 === e || D;
            if (null != L)
                return (0, r.jsx)(S.Z, {
                    stream: L,
                    game: Y,
                    textVariant: "text-".concat(h, "/medium"),
                    textClassName: d,
                    iconClassName: p,
                    hideText: $,
                    hideIcon: W,
                    hideTooltip: t,
                });
            let n = null == H ? void 0 : H[0];
            return null != n
                ? (0, r.jsx)(A.Z, {
                      activity: n,
                      textVariant: "text-".concat(h, "/medium"),
                      textClassName: d,
                      iconClassName: p,
                      hideText: $,
                      hideIcon: W,
                      hideTooltip: t,
                  })
                : null != l
                  ? (0, r.jsx)(C.Z, {
                        channel: l,
                        textVariant: "text-".concat(h, "/medium"),
                        textClassName: d,
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
                null != L &&
                    e.push(
                        (0, r.jsx)(
                            S.Z,
                            M(
                                x(
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
                H.forEach((n, i) => {
                    e.push((0, r.jsx)(A.Z, x({ activity: n }, t), "activity-".concat(i)));
                }),
                X && e.push((0, r.jsx)(C.Z, M(x({ channel: l }, t), { showChannelName: !0 }), "voice")),
                e
            );
        },
        er = () =>
            (0, r.jsx)(G, {
                textVariant: "text-".concat(h, "/medium"),
                className: d,
                hasCustomStatusText: z,
                totalActivityCount: Q,
            }),
        ei = () =>
            0 === Q
                ? null
                : J && !W
                  ? D
                      ? (0, r.jsxs)("div", {
                            className: o()(w.activityContainer, $ && w.iconOnly),
                            children: [et(), er()],
                        })
                      : (0, r.jsx)(u.aML, {
                            "data-migration-pending": !0,
                            tooltipContentClassName: o()(w.container, w.activitiesTooltip, w.hasMultipleActivities),
                            delay: N.X,
                            text: en(),
                            "aria-label": ee,
                            children: (e) =>
                                (0, r.jsxs)(
                                    "div",
                                    M(x({ className: o()(w.activityContainer, $ && w.iconOnly) }, e), {
                                        children: [et(!0), er()],
                                    }),
                                ),
                        })
                  : et(),
        ea = o()(w.container, {
            [w.textXs]: "xs" === h,
            [w.textSm]: "sm" === h,
        }),
        eo = () =>
            null == Z && null == V
                ? null
                : (0, r.jsx)(T.Z, {
                      customStatusActivity: Z,
                      textSize: h,
                      animateEmoji: O,
                      hideEmoji: P,
                      hideTooltip: D,
                      textClassName: d,
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
                (0, r.jsx)(B, {
                    textVariant: "text-".concat(h, "/normal"),
                    className: d,
                }),
            eo(),
            v && (0, r.jsx)(I.Z, {}),
        ],
    });
}
