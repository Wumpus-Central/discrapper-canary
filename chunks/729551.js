n.d(t, { A: () => G }), n(321073), n(733351);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(735438),
    l = n(158954),
    c = n(311907),
    u = n(990078),
    d = n(672979),
    f = n(87664),
    p = n(47167),
    _ = n(126904),
    h = n(834757),
    m = n(242919),
    g = n(890330),
    E = n(961350),
    b = n(994500),
    y = n(412242),
    O = n(566903),
    A = n(109989),
    v = n(143239),
    S = n(684448),
    I = n(835072),
    T = n(194187);
n(851883);
var C = n(652215),
    N = n(985018),
    R = n(123511);
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
function P(e) {
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
    return null != t ? t : N.intl.string(N.t.eXan7B);
}
function j(e, t) {
    return (
        (e.isDM() || e.isGroupDM()
            ? N.intl.string(N.t["9FaEzi"])
            : e.isGuildStageVoice()
              ? N.intl.string(N.t.QygGCN)
              : N.intl.string(N.t.msxteM)) + (null != t ? " (".concat(t, ")") : "")
    );
}
function M(e) {
    let { streamActivity: t, otherActivities: n, voiceActivityChannel: r } = e,
        i = [],
        { descriptiveTextEnabled: a } = (0, y.n)({ location: "StackedActivityStatus" }),
        { enableTopNavButton: s } = (0, _.tR)({ location: "StackedActivityStatus" }),
        o = (0, p.Ay)(r),
        l = a || s;
    return (
        null != t && i.push(L(t)),
        n.forEach((e) => {
            let { tooltip: t } = (0, O.A)(e, l);
            null != t && i.push(t);
        }),
        null == t && null != r && i.push(j(r, o)),
        i.length > 0 ? i.join(", ") : ""
    );
}
function k(e) {
    let { textVariant: t, className: n, hasCustomStatusText: i, totalActivityCount: a } = e,
        o = a - 1;
    return (0, r.jsxs)(l.EYj, {
        variant: t,
        className: s()(n, R.qi),
        color: i ? "status-positive" : "none",
        children: ["+", o],
    });
}
function U(e) {
    let { textVariant: t, className: n } = e;
    return (0, r.jsx)(l.EYj, {
        variant: t,
        className: s()(R.Om, n),
        children: "\u2022",
    });
}
function G(e) {
    let {
        user: t,
        activities: n,
        applicationStream: a,
        voiceChannel: l,
        textClassName: p,
        iconClassName: _,
        textSize: y = "xs",
        animateEmoji: O = !0,
        hasQuest: N = !1,
        hideEmoji: w = !1,
        hideTooltip: D = !1,
    } = e;
    (0, f.A)(null == t ? void 0 : t.id);
    let L = (null == a ? void 0 : a.discoverable) !== !1 ? a : null,
        j = (0, h.AO)(L),
        G = (0, g.v)("ActivityStatus", l),
        V = i.useMemo(() => {
            var e, t;
            let r =
                null == n
                    ? void 0
                    : n.find((e) => {
                          let { type: t } = e;
                          return t === C.$pd.CUSTOM_STATUS;
                      });
            if (null == r) return null;
            let i = null != (e = null == (t = r.state) ? void 0 : t.trim()) ? e : null;
            return null == ("" === i ? null : i) && null == r.emoji ? null : r;
        }, [n]),
        F = (0, c.bG)([E.default], () => E.default.getId() === (null == t ? void 0 : t.id)),
        B = (0, c.bG)([m.A], () =>
            G
                ? F
                    ? m.A.getHangStatusActivity()
                    : null != n
                      ? n.find((e) => e.type === C.$pd.HANG_STATUS)
                      : null
                : null,
        ),
        H = i.useMemo(() => {
            var e;
            return (0, o.uniqWith)(
                null !=
                    (e =
                        null == n
                            ? void 0
                            : n.filter((e) => {
                                  let { type: t, name: n } = e;
                                  return (
                                      t !== C.$pd.CUSTOM_STATUS &&
                                      t !== C.$pd.HANG_STATUS &&
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
        K = (0, c.bG)([b.A], () => b.A.isBlockedOrIgnored(null == t ? void 0 : t.id)),
        z = (null == V ? void 0 : V.state) != null,
        q = null != L,
        X = !q && null != l,
        Z = H.length + (q || X ? 1 : 0),
        Q = Z > 1,
        $ = ((null == V ? void 0 : V.state) != null || null != B) && "xs" === y,
        J = M({
            streamActivity: Y,
            otherActivities: H,
            voiceActivityChannel: X ? l : null,
        });
    if (K) return null;
    let ee = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = !0 === e || D;
            if (null != L)
                return (0, r.jsx)(v.A, {
                    stream: L,
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
                ? (0, r.jsx)(I.A, {
                      activity: n,
                      textVariant: "text-".concat(y, "/medium"),
                      textClassName: p,
                      iconClassName: _,
                      hideText: $,
                      hideIcon: W,
                      hideTooltip: t,
                  })
                : null != l
                  ? (0, r.jsx)(T.A, {
                        channel: l,
                        textVariant: "text-".concat(y, "/medium"),
                        textClassName: p,
                        iconClassName: _,
                        hideText: $,
                        hideTooltip: t,
                    })
                  : null;
        },
        et = () => {
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
                            v.A,
                            x(
                                P(
                                    {
                                        stream: L,
                                        game: null == n ? void 0 : n.find(d.A),
                                    },
                                    t,
                                ),
                                { showChannelName: !0 },
                            ),
                            "stream",
                        ),
                    ),
                H.forEach((n, i) => {
                    e.push((0, r.jsx)(I.A, P({ activity: n }, t), "activity-".concat(i)));
                }),
                X && e.push((0, r.jsx)(T.A, x(P({ channel: l }, t), { showChannelName: !0 }), "voice")),
                e
            );
        },
        en = () =>
            (0, r.jsx)(k, {
                textVariant: "text-".concat(y, "/medium"),
                className: p,
                hasCustomStatusText: z,
                totalActivityCount: Z,
            }),
        er = () =>
            0 === Z
                ? null
                : Q && !W
                  ? D
                      ? (0, r.jsxs)("div", {
                            className: s()(R.ht, $ && R.e7),
                            children: [ee(), en()],
                        })
                      : (0, r.jsx)(u.m, {
                            delay: 150,
                            __unsupportedReactNodeAsText: et(),
                            children: (0, r.jsxs)("div", {
                                className: s()(R.ht, $ && R.e7),
                                "aria-label": J,
                                children: [ee(!0), en()],
                            }),
                        })
                  : ee(),
        ei = s()(R.kL, {
            [R.Dk]: "xs" === y,
            [R.WV]: "sm" === y,
        }),
        ea = () =>
            null == V && null == B
                ? null
                : (0, r.jsx)(S.A, {
                      customStatusActivity: V,
                      textSize: y,
                      animateEmoji: O,
                      hideEmoji: w,
                      hideTooltip: D,
                      textClassName: p,
                      iconClassName: _,
                      tooltipClassName: ei,
                      voiceChannel: l,
                      hangStatus: B,
                      userId: null == t ? void 0 : t.id,
                  });
    return (0, r.jsxs)("div", {
        className: ei,
        children: [
            er(),
            (null != V || null != B) &&
                Z > 0 &&
                (0, r.jsx)(U, {
                    textVariant: "text-".concat(y, "/normal"),
                    className: p,
                }),
            ea(),
            N && (0, r.jsx)(A.A, {}),
        ],
    });
}
