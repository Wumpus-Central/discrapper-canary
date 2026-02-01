n.d(t, {
    A: () => U,
}),
    n(321073),
    n(733351);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(735438),
    l = n(158954),
    c = n(311907),
    u = n(990078),
    d = n(672979),
    f = n(87664),
    p = n(47167),
    _ = n(834757),
    h = n(242919),
    m = n(890330),
    g = n(961350),
    E = n(994500),
    y = n(412242),
    b = n(566903),
    O = n(109989),
    v = n(143239),
    A = n(684448),
    I = n(835072),
    S = n(194187);
n(851883);
var T = n(652215),
    C = n(985018),
    N = n(123511);

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

function R(e) {
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

function P(e, t) {
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

function D(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : P(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function L(e) {
    let t = (null == e ? void 0 : e.name) === "" ? null : null == e ? void 0 : e.name;
    return null != t ? t : C.intl.string(C.t.eXan7B);
}

function x(e, t) {
    return (
        (e.isDM() || e.isGroupDM()
            ? C.intl.string(C.t["9FaEzi"])
            : e.isGuildStageVoice()
              ? C.intl.string(C.t.QygGCN)
              : C.intl.string(C.t.msxteM)) + (null != t ? " (".concat(t, ")") : "")
    );
}

function M(e) {
    let { streamActivity: t, otherActivities: n, voiceActivityChannel: r } = e,
        i = [],
        { descriptiveTextEnabled: a } = (0, y.n)({
            location: "StackedActivityStatus",
        }),
        o = (0, p.Ay)(r),
        s = a;
    return (
        null != t && i.push(L(t)),
        n.forEach((e) => {
            let { tooltip: t } = (0, b.A)(e, s);
            null != t && i.push(t);
        }),
        null == t && null != r && i.push(x(r, o)),
        i.length > 0 ? i.join(", ") : ""
    );
}

function j(e) {
    let { textVariant: t, className: n, hasCustomStatusText: i, totalActivityCount: a } = e,
        s = a - 1;
    return (0, r.jsxs)(l.EYj, {
        variant: t,
        className: o()(n, N.qi),
        color: i ? "status-positive" : "none",
        children: ["+", s],
    });
}

function k(e) {
    let { textVariant: t, className: n } = e;
    return (0, r.jsx)(l.EYj, {
        variant: t,
        className: o()(N.Om, n),
        children: "•",
    });
}

function U(e) {
    let {
        user: t,
        activities: n,
        applicationStream: a,
        voiceChannel: l,
        textClassName: p,
        iconClassName: y,
        textSize: b = "xs",
        animateEmoji: C = !0,
        hasQuest: w = !1,
        hideEmoji: P = !1,
        hideTooltip: L = !1,
    } = e;
    (0, f.A)(null == t ? void 0 : t.id);
    let x = (null == a ? void 0 : a.discoverable) !== !1 ? a : null,
        U = (0, _.AO)(x),
        G = (0, m.v)("ActivityStatus", l),
        V = i.useMemo(() => {
            var e, t;
            let r =
                null == n
                    ? void 0
                    : n.find((e) => {
                          let { type: t } = e;
                          return t === T.$pd.CUSTOM_STATUS;
                      });
            if (null == r) return null;
            let i = null != (e = null == (t = r.state) ? void 0 : t.trim()) ? e : null;
            return null == ("" === i ? null : i) && null == r.emoji ? null : r;
        }, [n]),
        F = (0, c.bG)([g.default], () => g.default.getId() === (null == t ? void 0 : t.id)),
        B = (0, c.bG)([h.A], () =>
            G
                ? F
                    ? h.A.getHangStatusActivity()
                    : null != n
                      ? n.find((e) => e.type === T.$pd.HANG_STATUS)
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
                                      t !== T.$pd.CUSTOM_STATUS &&
                                      t !== T.$pd.HANG_STATUS &&
                                      n !== (null == U ? void 0 : U.name)
                                  );
                              }))
                    ? e
                    : [],
                (e, t) =>
                    (null != e.application_id && null != t.application_id && e.application_id === t.application_id) ||
                    (null != e.name && null != t.name && e.name === t.name),
            );
        }, [n, null == U ? void 0 : U.name]),
        Y = null == n ? void 0 : n.find((e) => e.name === (null == U ? void 0 : U.name)),
        W = (null == t ? void 0 : t.bot) === !0,
        K = (0, c.bG)([E.A], () => E.A.isBlockedOrIgnored(null == t ? void 0 : t.id)),
        z = (null == V ? void 0 : V.state) != null,
        q = null != x,
        Z = !q && null != l,
        Q = H.length + (q || Z ? 1 : 0),
        X = Q > 1,
        J = ((null == V ? void 0 : V.state) != null || null != B) && "xs" === b,
        $ = M({
            streamActivity: Y,
            otherActivities: H,
            voiceActivityChannel: Z ? l : null,
        });
    if (K) return null;
    let ee = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = !0 === e || L;
            if (null != x)
                return (0, r.jsx)(v.A, {
                    stream: x,
                    game: Y,
                    textVariant: "text-".concat(b, "/medium"),
                    textClassName: p,
                    iconClassName: y,
                    hideText: J,
                    hideIcon: W,
                    hideTooltip: t,
                });
            let n = null == H ? void 0 : H[0];
            return null != n
                ? (0, r.jsx)(I.A, {
                      activity: n,
                      textVariant: "text-".concat(b, "/medium"),
                      textClassName: p,
                      iconClassName: y,
                      hideText: J,
                      hideIcon: W,
                      hideTooltip: t,
                  })
                : null != l
                  ? (0, r.jsx)(S.A, {
                        channel: l,
                        textVariant: "text-".concat(b, "/medium"),
                        textClassName: p,
                        iconClassName: y,
                        hideText: J,
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
                null != x &&
                    e.push(
                        (0, r.jsx)(
                            v.A,
                            D(
                                R(
                                    {
                                        stream: x,
                                        game: null == n ? void 0 : n.find(d.A),
                                    },
                                    t,
                                ),
                                {
                                    showChannelName: !0,
                                },
                            ),
                            "stream",
                        ),
                    ),
                H.forEach((n, i) => {
                    e.push(
                        (0, r.jsx)(
                            I.A,
                            R(
                                {
                                    activity: n,
                                },
                                t,
                            ),
                            "activity-".concat(i),
                        ),
                    );
                }),
                Z &&
                    e.push(
                        (0, r.jsx)(
                            S.A,
                            D(
                                R(
                                    {
                                        channel: l,
                                    },
                                    t,
                                ),
                                {
                                    showChannelName: !0,
                                },
                            ),
                            "voice",
                        ),
                    ),
                e
            );
        },
        en = () =>
            (0, r.jsx)(j, {
                textVariant: "text-".concat(b, "/medium"),
                className: p,
                hasCustomStatusText: z,
                totalActivityCount: Q,
            }),
        er = () =>
            0 === Q
                ? null
                : X && !W
                  ? L
                      ? (0, r.jsxs)("div", {
                            className: o()(N.ht, J && N.e7),
                            children: [ee(), en()],
                        })
                      : (0, r.jsx)(u.m, {
                            delay: 150,
                            __unsupportedReactNodeAsText: et(),
                            children: (0, r.jsxs)("div", {
                                className: o()(N.ht, J && N.e7),
                                "aria-label": $,
                                children: [ee(!0), en()],
                            }),
                        })
                  : ee(),
        ei = o()(N.kL, {
            [N.Dk]: "xs" === b,
            [N.WV]: "sm" === b,
        }),
        ea = () =>
            null == V && null == B
                ? null
                : (0, r.jsx)(A.A, {
                      customStatusActivity: V,
                      textSize: b,
                      animateEmoji: C,
                      hideEmoji: P,
                      hideTooltip: L,
                      textClassName: p,
                      iconClassName: y,
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
                Q > 0 &&
                (0, r.jsx)(k, {
                    textVariant: "text-".concat(b, "/normal"),
                    className: p,
                }),
            ea(),
            w && (0, r.jsx)(O.A, {}),
        ],
    });
}
