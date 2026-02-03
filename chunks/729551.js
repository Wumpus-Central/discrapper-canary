n.d(t, {
    A: () => F,
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
    g = n(430363),
    E = n(4149),
    y = n(43284),
    b = n(961350),
    O = n(994500),
    v = n(412242),
    A = n(566903),
    I = n(109989),
    S = n(143239),
    T = n(684448),
    C = n(835072),
    N = n(194187);
n(851883);
var w = n(652215),
    R = n(985018),
    P = n(123511);

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

function L(e) {
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

function j(e) {
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

function U(e) {
    let { streamActivity: t, otherActivities: n, voiceActivityChannel: r } = e,
        i = [],
        { descriptiveTextEnabled: a } = (0, v.n)({
            location: "StackedActivityStatus",
        }),
        o = (0, p.Ay)(r),
        s = a;
    return (
        null != t && i.push(j(t)),
        n.forEach((e) => {
            let { tooltip: t } = (0, A.A)(e, s);
            null != t && i.push(t);
        }),
        null == t && null != r && i.push(k(r, o)),
        i.length > 0 ? i.join(", ") : ""
    );
}

function G(e) {
    let { textVariant: t, className: n, hasCustomStatusText: i, totalActivityCount: a } = e,
        s = a - 1;
    return (0, r.jsxs)(l.EYj, {
        variant: t,
        className: o()(n, P.qi),
        color: i ? "status-positive" : "none",
        children: ["+", s],
    });
}

function V(e) {
    let { textVariant: t, className: n } = e;
    return (0, r.jsx)(l.EYj, {
        variant: t,
        className: o()(P.Om, n),
        children: "•",
    });
}

function F(e) {
    let {
        user: t,
        activities: n,
        applicationStream: a,
        voiceChannel: l,
        textClassName: p,
        iconClassName: v,
        textSize: A = "xs",
        animateEmoji: R = !0,
        hasQuest: D = !1,
        hideEmoji: x = !1,
        hideTooltip: j = !1,
    } = e;
    (0, f.A)(null == t ? void 0 : t.id);
    let k = (null == a ? void 0 : a.discoverable) !== !1 ? a : null,
        F = (0, _.AO)(k),
        B = (0, m.v)("ActivityStatus", l),
        H = i.useMemo(() => {
            var e, t;
            let r =
                null == n
                    ? void 0
                    : n.find((e) => {
                          let { type: t } = e;
                          return t === w.$pd.CUSTOM_STATUS;
                      });
            if (null == r) return null;
            let i = null != (e = null == (t = r.state) ? void 0 : t.trim()) ? e : null;
            return null == ("" === i ? null : i) && null == r.emoji ? null : r;
        }, [n]),
        Y = (0, g.Uk)("ActivityStatus"),
        W = i.useMemo(() => (null != H && Y ? (0, E.a)(H) : null), [H, Y]),
        K = (0, c.bG)([b.default], () => b.default.getId() === (null == t ? void 0 : t.id)),
        z = (0, c.bG)([h.A], () =>
            B
                ? K
                    ? h.A.getHangStatusActivity()
                    : null != n
                      ? n.find((e) => e.type === w.$pd.HANG_STATUS)
                      : null
                : null,
        ),
        q = i.useMemo(() => {
            var e;
            return (0, s.uniqWith)(
                null !=
                    (e =
                        null == n
                            ? void 0
                            : n.filter((e) => {
                                  let { type: t, name: n } = e;
                                  return (
                                      t !== w.$pd.CUSTOM_STATUS &&
                                      t !== w.$pd.HANG_STATUS &&
                                      n !== (null == F ? void 0 : F.name)
                                  );
                              }))
                    ? e
                    : [],
                (e, t) =>
                    (null != e.application_id && null != t.application_id && e.application_id === t.application_id) ||
                    (null != e.name && null != t.name && e.name === t.name),
            );
        }, [n, null == F ? void 0 : F.name]),
        Z = null == n ? void 0 : n.find((e) => e.name === (null == F ? void 0 : F.name)),
        Q = (null == t ? void 0 : t.bot) === !0,
        X = (0, c.bG)([O.A], () => O.A.isBlockedOrIgnored(null == t ? void 0 : t.id)),
        J = (null == H ? void 0 : H.state) != null,
        $ = null != k,
        ee = !$ && null != l,
        et = q.length + ($ || ee ? 1 : 0),
        en = et > 1,
        er = ((null == H ? void 0 : H.state) != null || null != z) && "xs" === A,
        ei = U({
            streamActivity: Z,
            otherActivities: q,
            voiceActivityChannel: ee ? l : null,
        });
    if (X) return null;
    let ea = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = !0 === e || j;
            if (null != k)
                return (0, r.jsx)(S.A, {
                    stream: k,
                    game: Z,
                    textVariant: "text-".concat(A, "/medium"),
                    textClassName: p,
                    iconClassName: v,
                    hideText: er,
                    hideIcon: Q,
                    hideTooltip: t,
                });
            let n = null == q ? void 0 : q[0];
            return null != n
                ? (0, r.jsx)(C.A, {
                      activity: n,
                      textVariant: "text-".concat(A, "/medium"),
                      textClassName: p,
                      iconClassName: v,
                      hideText: er,
                      hideIcon: Q,
                      hideTooltip: t,
                  })
                : null != l
                  ? (0, r.jsx)(N.A, {
                        channel: l,
                        textVariant: "text-".concat(A, "/medium"),
                        textClassName: p,
                        iconClassName: v,
                        hideText: er,
                        hideTooltip: t,
                    })
                  : null;
        },
        eo = () => {
            let e = [],
                t = {
                    textVariant: "text-sm/medium",
                    hideTooltip: !0,
                    hideIcon: !1,
                    hideText: !1,
                    canTruncate: !1,
                };
            return (
                null != k &&
                    e.push(
                        (0, r.jsx)(
                            S.A,
                            M(
                                L(
                                    {
                                        stream: k,
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
                q.forEach((n, i) => {
                    e.push(
                        (0, r.jsx)(
                            C.A,
                            L(
                                {
                                    activity: n,
                                },
                                t,
                            ),
                            "activity-".concat(i),
                        ),
                    );
                }),
                ee &&
                    e.push(
                        (0, r.jsx)(
                            N.A,
                            M(
                                L(
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
        es = () =>
            (0, r.jsx)(G, {
                textVariant: "text-".concat(A, "/medium"),
                className: p,
                hasCustomStatusText: J,
                totalActivityCount: et,
            }),
        el = () =>
            0 === et
                ? null
                : en && !Q
                  ? j
                      ? (0, r.jsxs)("div", {
                            className: o()(P.ht, er && P.e7),
                            children: [ea(), es()],
                        })
                      : (0, r.jsx)(u.m, {
                            delay: 150,
                            __unsupportedReactNodeAsText: eo(),
                            children: (0, r.jsxs)("div", {
                                className: o()(P.ht, er && P.e7),
                                "aria-label": ei,
                                children: [ea(!0), es()],
                            }),
                        })
                  : ea(),
        ec = o()(P.kL, {
            [P.Dk]: "xs" === A,
            [P.WV]: "sm" === A,
        }),
        eu = () =>
            null == H && null == z
                ? null
                : (0, r.jsx)(T.A, {
                      customStatusActivity: H,
                      textSize: A,
                      animateEmoji: R,
                      hideEmoji: x,
                      hideTooltip: j,
                      textClassName: p,
                      iconClassName: v,
                      tooltipClassName: ec,
                      voiceChannel: l,
                      hangStatus: z,
                      userId: null == t ? void 0 : t.id,
                  }),
        ed = () =>
            null == W
                ? null
                : (0, r.jsx)(y.A, {
                      customStatusActivity: H,
                      textSize: A,
                      animateEmoji: R,
                      hideEmoji: x,
                      hideTooltip: j,
                      textClassName: p,
                      iconClassName: v,
                      tooltipClassName: ec,
                      voiceChannel: l,
                      hangStatus: z,
                      userId: null == t ? void 0 : t.id,
                  });
    return null != W
        ? (0, r.jsxs)("div", {
              className: ec,
              children: [
                  ed(),
                  et > 0 &&
                      (0, r.jsx)(V, {
                          textVariant: "text-".concat(A, "/normal"),
                          className: p,
                      }),
                  el(),
                  D && (0, r.jsx)(I.A, {}),
              ],
          })
        : (0, r.jsxs)("div", {
              className: ec,
              children: [
                  el(),
                  (null != H || null != z) &&
                      et > 0 &&
                      (0, r.jsx)(V, {
                          textVariant: "text-".concat(A, "/normal"),
                          className: p,
                      }),
                  eu(),
                  D && (0, r.jsx)(I.A, {}),
              ],
          });
}
