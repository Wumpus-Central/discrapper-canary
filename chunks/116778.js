(s.r(l), s.d(l, { default: () => lu }));
var t,
    n = s(477900),
    i = s(582128),
    r = s(503698),
    a = s.n(r),
    d = s(855986),
    c = s(177953),
    o = s(516521),
    u = s(793574),
    m = s(688810),
    x = s(726249),
    j = s(985925),
    h = s(624458),
    A = s(513461),
    g = s(496767),
    E = s(663997),
    b = s(844944);
function f(e) {
    let { guildId: l } = e;
    return (0, d.bG)([b.A], () => b.A.getSelectedSortOrder(l), [l]);
}
function I(e) {
    let { guildId: l, applicationStatus: s, sortOrder: t } = e,
        n = (0, d.bG)([b.A], () => b.A.getRequests(l, s), [s, l]);
    return { guildJoinRequests: i.useMemo(() => (t === A._e.TIMESTAMP_DESC ? [...n].reverse() : n), [t, n]) };
}
var S = s(786180),
    v = s(742589),
    N = s(976860),
    T = s(799704),
    C = s(808728),
    R = s(71393),
    M =
        (((t = {}).ALL_MEMBERS = "ALL_MEMBERS"),
        (t[(t.PENDING = A.B5.SUBMITTED)] = "PENDING"),
        (t[(t.REJECTED = A.B5.REJECTED)] = "REJECTED"),
        (t[(t.APPROVED = A.B5.APPROVED)] = "APPROVED"),
        t),
    p = s(134413),
    y = s(939249),
    _ = s(834730),
    D = s(97808),
    G = s(778712),
    L = s(789645),
    P = s(628284),
    k = s(285796),
    B = s(534890),
    U = s(821609),
    q = s(339350),
    w = s(646514),
    O = s(95362),
    F = s(821124);
function V(e) {
    let { guildId: l } = e;
    return (0, d.bG)([b.A], () => b.A.getSelectedGuildJoinRequest(l), [l]);
}
var z = s(231483),
    X = s(287809),
    W = s(31457),
    H = s(414626),
    J = s(601047),
    $ = s(273926),
    K = s(453016),
    Y = s(792996);
let Q = function (e) {
    let { guildId: l, formFields: s, user: t, showRequirements: i = !0 } = e;
    return null == (0, d.bG)([X.default], () => t ?? X.default.getCurrentUser())
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  i && (0, n.jsx)(W.fu, { icon: z.ShieldIcon, text: Y.intl.string(Y.t.v2z4c1), meetsRequirement: !0 }),
                  s.map((e, l) =>
                      (function (e, l) {
                          switch (e.field_type) {
                              case A.rX.TERMS:
                                  return (0, n.jsx)($.LK, { formField: e }, l);
                              case A.rX.TEXT_INPUT:
                                  return (0, n.jsx)(K.aS, { formField: e }, l);
                              case A.rX.PARAGRAPH:
                                  return (0, n.jsx)(J.P1, { formField: e }, l);
                              case A.rX.MULTIPLE_CHOICE:
                                  return (0, n.jsx)(H.CI, { formField: e }, l);
                          }
                      })(e, l),
                  ),
              ],
          });
};
var Z = s(123393),
    ee = s(534400),
    el = s(702476),
    es = s(619019),
    et = s(734057),
    en = s(5377),
    ei = s(811091),
    er = s(427262),
    ea = s(652215),
    ed = s(743981),
    ec = s(12803),
    eo = s(584449);
function eu(e) {
    let { icon: l, label: s, onClick: t, disabled: i } = e;
    return (0, n.jsxs)(y.D, {
        className: a()(ec.hP, { [ec.r9]: i }),
        onClick: i ? ea.tEg : t,
        "aria-label": s,
        children: [
            (0, n.jsx)(l, { size: "custom", color: "currentColor", width: 20, height: 20 }),
            (0, n.jsx)(_.E, { variant: "body-sm/normal", color: "none", children: s }),
        ],
    });
}
function em(e) {
    let { user: l, guildId: s, joinRequest: t } = e,
        { analyticsLocations: i } = (0, m.Ay)();
    function r() {
        (0, el.openUserProfileModal)({ userId: l.id, joinRequestId: t.joinRequestId, sourceAnalyticsLocations: i });
    }
    return (0, n.jsxs)("div", {
        className: ec.op,
        children: [
            (0, n.jsxs)("div", {
                className: eo.FD,
                children: [
                    (0, n.jsx)(y.D, {
                        onClick: r,
                        className: a()(ec.vk, eo.Wn),
                        children: (0, n.jsx)(D.eu, {
                            src: l.getAvatarURL(s, 48),
                            "aria-label": l.username,
                            size: G._3.SIZE_48,
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        className: eo.oS,
                        children: [
                            (0, n.jsxs)("div", {
                                className: eo.K$,
                                children: [
                                    (0, n.jsx)(y.D, {
                                        onClick: r,
                                        className: ec.vk,
                                        children: (0, n.jsx)(_.E, {
                                            variant: "body-lg/medium",
                                            children: l?.globalName,
                                        }),
                                    }),
                                    (0, n.jsx)(ee.Ay, {
                                        primaryGuild: l?.primaryGuild,
                                        userId: l?.id,
                                        contextGuildId: s,
                                        badgeSize: ed.Sl.SIZE_16,
                                        textVariant: "heading-sm/semibold",
                                        className: eo.Dz,
                                        containerClassName: eo.UL,
                                    }),
                                ],
                            }),
                            (0, n.jsx)(y.D, {
                                onClick: r,
                                className: ec.vk,
                                children: (0, n.jsx)(_.E, {
                                    variant: "body-md/medium",
                                    color: "text-default",
                                    children: er.Ay.getUserTag(l),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, n.jsx)(y.D, {
                className: eo.d4,
                onClick: () => h.A.setSelectedGuildJoinRequest(s, null),
                children: (0, n.jsx)(L.XSmallIcon, { size: "md", color: "currentColor" }),
            }),
        ],
    });
}
function ex(e) {
    let { user: l, guildId: s, joinRequest: t } = e,
        {
            approveRequest: i,
            rejectRequest: r,
            handleOpenInterview: a,
            submitting: d,
        } = (0, Z.W)(s, l.id, t.joinRequestId, t.interviewChannelId);
    return (0, n.jsxs)("div", {
        className: ec.$l,
        children: [
            (0, n.jsx)(eu, { icon: P.CircleCheckIcon, label: Y.intl.string(Y.t.BzjDQJ), onClick: i, disabled: d }),
            (0, n.jsx)(eu, { icon: k.CircleXIcon, label: Y.intl.string(Y.t.hDtbsz), onClick: r, disabled: d }),
            null == t.interviewChannelId &&
                (0, n.jsx)(eu, { icon: B.ChatIcon, label: Y.intl.string(Y.t.KQeYoC), onClick: a, disabled: d }),
        ],
    });
}
function ej(e) {
    let { user: l, guildId: s, joinRequest: t, label: i } = e,
        { interviewChannelId: r, applicationStatus: a } = t,
        c = (0, d.bG)([et.A], () => null != r && null != et.A.getChannel(r), [r]),
        { handleOpenInterview: o, submitting: u } = (0, Z.W)(s, l.id, t.joinRequestId, r);
    return (0, F.mf)(a) && !c
        ? null
        : (0, n.jsx)("div", {
              className: ec.a6,
              children: (0, n.jsx)(U.$, {
                  variant: "secondary",
                  size: "sm",
                  icon: B.ChatIcon,
                  text: i ?? Y.intl.string(Y.t["2simqN"]),
                  onClick: o,
                  disabled: u,
                  fullWidth: !0,
              }),
          });
}
function eh(e) {
    let { user: l, guildId: s, joinRequest: t } = e;
    return (0, n.jsxs)("div", {
        className: ec.Ik,
        children: [
            (0, n.jsx)(q.HourglassIcon, { size: "lg", color: w.A.colors.STATUS_WARNING }),
            (0, n.jsx)("div", {
                className: ec.$I,
                children: (0, n.jsx)(_.E, {
                    variant: "body-md/medium",
                    color: "text-strong",
                    children: Y.intl.string(Y.t["Vr+7eO"]),
                }),
            }),
            (0, n.jsx)(ej, { user: l, guildId: s, joinRequest: t, label: Y.intl.string(Y.t.rcqdhN) }),
        ],
    });
}
function eA(e) {
    let { user: l, guildId: s, joinRequest: t } = e,
        { actionedAt: i, actionedByUser: r, rejectionReason: a } = t;
    return (0, n.jsxs)("div", {
        className: ec.Ik,
        children: [
            (0, n.jsx)(k.CircleXIcon, {
                size: "lg",
                color: w.A.colors.BACKGROUND_BASE_LOWER,
                secondaryColor: w.A.colors.INTERACTIVE_TEXT_DEFAULT,
            }),
            (0, n.jsxs)("div", {
                className: ec.$I,
                children: [
                    (0, n.jsx)(_.E, {
                        variant: "body-md/medium",
                        color: "text-strong",
                        children: Y.intl.string(Y.t.bSZkla),
                    }),
                    null != r && null != i
                        ? (0, n.jsxs)("div", {
                              className: ec.Ay,
                              children: [
                                  (0, n.jsx)(_.E, {
                                      variant: "body-sm/normal",
                                      color: "text-muted",
                                      children: Y.intl.formatToPlainString(Y.t.qnimbL, {
                                          username: r.global_name ?? r.username,
                                      }),
                                  }),
                                  (0, n.jsx)("div", { className: ec.Om }),
                                  (0, n.jsx)(_.E, {
                                      variant: "body-sm/normal",
                                      color: "text-muted",
                                      children: (0, en.i$)(new Date(ei.default.extractTimestamp(i)), "LL"),
                                  }),
                              ],
                          })
                        : null,
                    null != a &&
                        (0, n.jsx)(_.E, {
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children: Y.intl.formatToPlainString(Y.t.fU5PPM, { rejectionReason: a }),
                        }),
                ],
            }),
            (0, n.jsx)(ej, { user: l, guildId: s, joinRequest: t }),
        ],
    });
}
function eg(e) {
    let { user: l, guildId: s, joinRequest: t } = e,
        { actionedAt: i, actionedByUser: r } = t;
    return (0, n.jsxs)("div", {
        className: ec.Ik,
        children: [
            (0, n.jsx)(P.CircleCheckIcon, {
                size: "lg",
                color: w.A.colors.STATUS_POSITIVE_BACKGROUND,
                secondaryColor: w.A.colors.STATUS_POSITIVE_TEXT,
            }),
            (0, n.jsxs)("div", {
                className: ec.$I,
                children: [
                    (0, n.jsx)(_.E, {
                        variant: "body-md/medium",
                        color: "text-strong",
                        children: Y.intl.string(Y.t.aURgY2),
                    }),
                    null != r && null != i
                        ? (0, n.jsxs)("div", {
                              className: ec.Ay,
                              children: [
                                  (0, n.jsx)(_.E, {
                                      variant: "body-sm/normal",
                                      color: "text-muted",
                                      children: Y.intl.formatToPlainString(Y.t.qnimbL, {
                                          username: r.global_name ?? r.username,
                                      }),
                                  }),
                                  (0, n.jsx)("div", { className: ec.Om }),
                                  (0, n.jsx)(_.E, {
                                      variant: "body-sm/normal",
                                      color: "text-muted",
                                      children: (0, en.i$)(new Date(ei.default.extractTimestamp(i)), "LL"),
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            (0, n.jsx)(ej, { user: l, guildId: s, joinRequest: t }),
        ],
    });
}
function eE(e) {
    let { status: l } = e;
    switch (l) {
        case A.B5.APPROVED:
            return (0, n.jsx)(P.CircleCheckIcon, {
                size: "sm",
                color: w.A.colors.STATUS_POSITIVE_BACKGROUND,
                secondaryColor: w.A.colors.STATUS_POSITIVE_TEXT,
            });
        case A.B5.REJECTED:
            return (0, n.jsx)(k.CircleXIcon, {
                size: "sm",
                color: w.A.colors.BACKGROUND_BASE_LOWER,
                secondaryColor: w.A.colors.INTERACTIVE_TEXT_DEFAULT,
            });
        default:
            return null;
    }
}
function eb(e) {
    let { guildId: l, userId: s, selectedJoinRequestId: t } = e,
        r = (function (e) {
            let { guildId: l, userId: s, selectedJoinRequestId: t } = e,
                n = (0, d.bG)([b.A], () => b.A.getRequestsForUser(l, s), [l, s]);
            return (
                i.useEffect(() => {
                    null == n && h.A.fetchGuildJoinRequestsForUser(l, s);
                }, [l, s, n]),
                i.useMemo(
                    () =>
                        (n ?? [])
                            .filter((e) => e.joinRequestId !== t)
                            .slice()
                            .sort((e, l) => new Date(l.createdAt).getTime() - new Date(e.createdAt).getTime()),
                    [n, t],
                )
            );
        })({ guildId: l, userId: s, selectedJoinRequestId: t });
    return 0 === r.length
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(_.E, {
                      className: ec._3,
                      variant: "body-sm/medium",
                      color: "text-muted",
                      children: Y.intl.string(Y.t["hxa+G3"]),
                  }),
                  (0, n.jsx)("div", {
                      className: ec.TT,
                      children: r.map((e) =>
                          (0, n.jsxs)(
                              y.D,
                              {
                                  className: a()(ec.lj, ec.vk),
                                  onClick: () => h.A.setSelectedGuildJoinRequest(l, e),
                                  children: [
                                      (0, n.jsx)(_.E, {
                                          variant: "body-sm/normal",
                                          color: "text-default",
                                          children: (0, en.i$)(new Date(e.createdAt), "LL"),
                                      }),
                                      (0, n.jsx)(eE, { status: e.applicationStatus }),
                                  ],
                              },
                              e.joinRequestId,
                          ),
                      ),
                  }),
              ],
          });
}
function ef(e) {
    let { user: l, joinRequest: s } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(_.E, {
                className: ec._3,
                variant: "body-sm/medium",
                color: "text-muted",
                children: Y.intl.string(Y.t["ldCE/p"]),
            }),
            (0, n.jsxs)("div", {
                className: ec.TT,
                children: [
                    (0, n.jsxs)("div", {
                        className: ec.lj,
                        children: [
                            (0, n.jsx)(_.E, {
                                variant: "body-sm/normal",
                                color: "text-default",
                                children: Y.intl.string(Y.t.SaDIpL),
                            }),
                            (0, n.jsx)(_.E, {
                                variant: "body-sm/normal",
                                color: "text-default",
                                children: (0, en.i$)(new Date(ei.default.extractTimestamp(l.id)), "LL"),
                            }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: ec.lj,
                        children: [
                            (0, n.jsx)(_.E, {
                                variant: "body-sm/normal",
                                color: "text-default",
                                children: Y.intl.string(Y.t["Vt4cn+"]),
                            }),
                            (0, n.jsx)(_.E, {
                                variant: "body-sm/normal",
                                color: "text-default",
                                children: (0, en.i$)(new Date(s.createdAt), "LL"),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function eI(e) {
    let { guildId: l } = e,
        s = V({ guildId: l }),
        { user: t } = s ?? {},
        r = i.useMemo(() => s?.formResponses ?? [], [s?.formResponses]),
        c = i.useMemo(() => (null != t ? new es.A(t) : null), [t]),
        o = (0, d.bG)([R.A], () => R.A.getGuild(l), [l]);
    return ((0, x.HU)({ subsection: Y.intl.string(Y.t.nqrK8X), location: o?.name }),
    null == s || null == o || null == c || null == t)
        ? null
        : (0, n.jsx)("section", {
              className: ec.pz,
              children: (0, n.jsx)(O.Ip, {
                  children: (0, n.jsxs)("div", {
                      className: ec.WH,
                      children: [
                          (0, n.jsxs)("div", {
                              className: ec.Ui,
                              children: [
                                  (0, n.jsx)(em, { user: c, guildId: l, joinRequest: s }),
                                  s.applicationStatus === A.B5.SUBMITTED &&
                                      null != s.interviewChannelId &&
                                      (0, n.jsx)(eh, { user: c, guildId: l, joinRequest: s }),
                                  s.applicationStatus === A.B5.SUBMITTED &&
                                      (0, n.jsx)(ex, { user: c, guildId: l, joinRequest: s }),
                                  s.applicationStatus === A.B5.REJECTED &&
                                      (0, n.jsx)(eA, { user: c, guildId: l, joinRequest: s }),
                                  s.applicationStatus === A.B5.APPROVED &&
                                      (0, n.jsx)(eg, { user: c, guildId: l, joinRequest: s }),
                              ],
                          }),
                          (0, n.jsxs)("div", {
                              className: a()(ec.Ui, ec.gi),
                              children: [
                                  (0, n.jsx)("div", {
                                      children: (0, n.jsx)(Q, {
                                          guildId: o.id,
                                          formFields: r,
                                          user: c,
                                          showRequirements: !1,
                                      }),
                                  }),
                                  (0, n.jsx)(ef, { guildId: l, user: c, joinRequest: s }),
                                  (0, n.jsx)(eb, { guildId: l, userId: t.id, selectedJoinRequestId: s.joinRequestId }),
                              ],
                          }),
                      ],
                  }),
              }),
          });
}
var eS = s(536637),
    ev = s.n(eS),
    eN = s(933832),
    eT = s(534514),
    eC = s(866665),
    eR = s(530005),
    eM = s(442433),
    ep = s(966327),
    ey = s(532197),
    e_ = s(800311),
    eD = s(999192),
    eG = s(307877),
    eL = s(917089);
function eP(e) {
    let l,
        s,
        { status: t } = e;
    switch (t) {
        case A.B5.REJECTED:
            ((l = Y.t["7YSJ6f"]), (s = Y.t.i05OUR));
            break;
        case A.B5.APPROVED:
            ((l = Y.t.bv82GS), (s = Y.t.D4OUHT));
            break;
        default:
            ((l = Y.t["/wqiSv"]), (s = Y.t.o47YZs));
    }
    return (0, n.jsxs)("div", {
        className: e_.do,
        children: [
            (0, n.jsx)(eN.CheckmarkLargeIcon, { size: "md", color: "currentColor", className: e_.AI }),
            (0, n.jsx)(eT.D, { variant: "heading-sm/medium", children: Y.intl.string(l) }),
            (0, n.jsx)(_.E, { color: "text-muted", variant: "body-sm/medium", children: Y.intl.string(s) }),
        ],
    });
}
function ek(e) {
    let { sortOrder: l, currentTab: s, onSortChange: t } = e,
        i = (0, F.mf)(s) ? Y.t.Z2L8V2 : Y.t.EZ5QWL;
    return (0, n.jsx)("thead", {
        children: (0, n.jsxs)("tr", {
            className: eG.Yk,
            children: [
                (0, n.jsx)("th", {
                    className: e_.e4,
                    children: (0, n.jsx)(_.E, {
                        variant: "body-sm/medium",
                        color: "interactive-text-default",
                        children: Y.intl.string(Y.t.Es7n9c),
                    }),
                }),
                (0, n.jsx)("th", {
                    className: a()(e_.e4, eL.QB),
                    children: (0, n.jsxs)(y.D, {
                        className: e_.KF,
                        onClick: t,
                        children: [
                            (0, n.jsx)(_.E, {
                                variant: "body-sm/medium",
                                color: "interactive-text-default",
                                children: Y.intl.string(i),
                            }),
                            l === A._e.TIMESTAMP_ASC
                                ? (0, n.jsx)(ey.A, { className: e_.GM, direction: ey.A.Directions.UP })
                                : (0, n.jsx)(ey.A, { className: e_.GM, direction: ey.A.Directions.DOWN }),
                        ],
                    }),
                }),
                (0, n.jsx)("th", {
                    className: a()(e_.e4, e_.UX),
                    children: (0, n.jsx)(_.E, {
                        variant: "body-sm/medium",
                        color: "interactive-text-default",
                        children: Y.intl.string(Y.t["5Q9xGr"]),
                    }),
                }),
            ],
        }),
    });
}
let eB = i.memo(function (e) {
        let { joinRequest: l, user: s } = e,
            { joinRequestId: t, guildId: r } = l,
            { analyticsLocations: a } = (0, m.Ay)(),
            d = i.useCallback(
                (e) => {
                    (e.stopPropagation(),
                        e.preventDefault(),
                        (0, el.openUserProfileModal)({ userId: s.id, joinRequestId: t, sourceAnalyticsLocations: a }));
                },
                [s, t, a],
            );
        return (0, n.jsxs)("div", {
            className: eL.FD,
            children: [
                (0, n.jsx)(y.D, { className: eL.Wn, onClick: d, children: (0, n.jsx)(ep.A, { user: s }) }),
                (0, n.jsx)("div", {
                    className: eL.eg,
                    children: (0, n.jsx)(_.E, {
                        variant: "body-sm/medium",
                        children: (0, n.jsxs)(y.D, {
                            onClick: d,
                            className: eL.VW,
                            children: [
                                s.globalName,
                                (0, n.jsx)(ee.Ay, {
                                    primaryGuild: s?.primaryGuild,
                                    userId: s?.id,
                                    contextGuildId: r,
                                    containerClassName: eL.Dz,
                                }),
                            ],
                        }),
                    }),
                }),
                (0, n.jsx)("div", {
                    className: eL.Br,
                    children: (0, n.jsx)(_.E, {
                        variant: "body-xs/normal",
                        color: "text-default",
                        tag: "span",
                        children: (0, n.jsx)(y.D, { onClick: d, tag: "span", children: er.Ay.getUserTag(s) }),
                    }),
                }),
            ],
        });
    }),
    eU = i.memo(function (e) {
        let { joinRequest: l, onSelect: t } = e,
            { guildId: r, createdAt: c, actionedAt: o, applicationStatus: u } = l,
            m = i.useMemo(() => new es.A(l.user), [l.user]),
            x = (0, F.mf)(u) && null != o ? new Date(ei.default.extractTimestamp(o)) : c,
            j = V({ guildId: r }),
            h = (0, d.bG)([T.Ay], () => T.Ay.getGuildSidebarState(r), [r]),
            g = h?.details.userId === m.id,
            E = (0, d.bG)([R.A], () => R.A.getGuild(r)),
            b = u === A.B5.SUBMITTED;
        return null == m
            ? null
            : (0, n.jsxs)("tr", {
                  onClick: t,
                  className: a()(eL.yF, eL.iA, { [eL.wH]: j?.joinRequestId === l.joinRequestId, [eL.qb]: g }),
                  children: [
                      (0, n.jsx)("td", { children: (0, n.jsx)(eB, { joinRequest: l, user: m }) }),
                      (0, n.jsx)("td", {
                          className: eL.QB,
                          children: (0, n.jsx)(_.E, {
                              variant: "body-sm/normal",
                              color: "text-default",
                              children: ev()(x).format("lll"),
                          }),
                      }),
                      (0, n.jsx)("td", {
                          className: e_.UX,
                          children:
                              b &&
                              (0, n.jsx)(eC.m, {
                                  text: Y.intl.string(Y.t.x8Nn4M),
                                  children: (0, n.jsx)(y.D, {
                                      onClick: function (e) {
                                          (0, eM.L3)(
                                              e,
                                              async () => {
                                                  let { default: e } = await Promise.all([
                                                      s.e(404524),
                                                      s.e(332660),
                                                  ]).then(s.bind(s, 772063));
                                                  return (l) => (0, n.jsx)(e, { ...l, guild: E, user: m });
                                              },
                                              { position: "bottom", align: "right" },
                                          );
                                      },
                                      className: eL.x6,
                                      children: (0, n.jsx)(eR.MoreVerticalIcon, {
                                          size: "custom",
                                          color: "currentColor",
                                          width: 18,
                                          height: 18,
                                      }),
                                  }),
                              }),
                      }),
                  ],
              });
    }),
    eq = () => {
        let e = `${Math.floor(50 * Math.random()) + 100}px`,
            l = `${Math.floor(50 * Math.random()) + 100}px`,
            s = `${Math.floor(25 * Math.random()) + 50}px`;
        return (0, n.jsxs)("tr", {
            className: a()(eL.yF, eL.iA),
            children: [
                (0, n.jsx)("td", {
                    children: (0, n.jsxs)("div", {
                        className: eL.FD,
                        children: [
                            (0, n.jsx)("div", { className: a()(e_.RH, eL.Wn) }),
                            (0, n.jsx)("div", {
                                className: eL.eg,
                                children: (0, n.jsx)("div", { className: e_.RC, style: { width: e } }),
                            }),
                            (0, n.jsx)("div", {
                                className: eL.Br,
                                children: (0, n.jsx)("div", { className: e_.w7, style: { width: l } }),
                            }),
                        ],
                    }),
                }),
                (0, n.jsx)("td", {
                    className: eL.QB,
                    children: (0, n.jsx)("div", { className: e_.RC, style: { width: s } }),
                }),
                (0, n.jsx)("td", { className: e_.UX }),
            ],
        });
    };
function ew(e) {
    let { guildId: l, currentTab: s } = e,
        t = i.useRef(null),
        r = (0, d.bG)([R.A], () => R.A.getGuild(l)),
        a = f({ guildId: l }),
        c = (0, d.bG)([b.A], () => b.A.isFetching()),
        { guildJoinRequests: u } = I({ guildId: l, applicationStatus: s, sortOrder: a }),
        { fetchNextPage: m } = (0, E.K)({ guildId: l, guildJoinRequests: u }),
        x = i.useCallback(async () => {
            let e = a === A._e.TIMESTAMP_ASC ? A._e.TIMESTAMP_DESC : A._e.TIMESTAMP_ASC;
            (h.A.setSelectedSortOrder(l, e, s), await m(e, s));
        }, [a, l, m, s]);
    return null == r
        ? null
        : (0, n.jsx)("div", {
              className: eD.FV,
              children: (0, n.jsx)(o.Ch, {
                  className: eD.Hk,
                  ref: t,
                  orientation: "horizontal",
                  children: (0, n.jsxs)("table", {
                      className: e_.tp,
                      children: [
                          (0, n.jsx)(ek, { sortOrder: a, currentTab: s, onSortChange: x }),
                          (0, n.jsx)("tbody", {
                              children:
                                  0 === u.length
                                      ? c
                                          ? [, , , , ,].fill(0).map((e, l) => (0, n.jsx)(eq, {}, `placeholder-${l}`))
                                          : (0, n.jsx)("tr", {
                                                children: (0, n.jsx)("td", {
                                                    colSpan: 3,
                                                    children: (0, n.jsx)(eP, { status: s }),
                                                }),
                                            })
                                      : (0, n.jsxs)(n.Fragment, {
                                            children: [
                                                u.map((e) =>
                                                    (0, n.jsx)(
                                                        eU,
                                                        {
                                                            joinRequest: e,
                                                            onSelect: () => h.A.setSelectedGuildJoinRequest(l, e),
                                                        },
                                                        e.joinRequestId,
                                                    ),
                                                ),
                                                c &&
                                                    [, , , , ,]
                                                        .fill(0)
                                                        .map((e, l) => (0, n.jsx)(eq, {}, `placeholder-${l}`)),
                                            ],
                                        }),
                          }),
                      ],
                  }),
              }),
          });
}
var eO = s(731204),
    eF = s(462887),
    eV = s(165862),
    ez = s(477782),
    eX = s(265872),
    eW = s(761508),
    eH = s(900797),
    eJ = s(847374),
    e$ = s(3666),
    eK = s(770178),
    eY = s(765548),
    eQ = s(736653),
    eZ = s(791046);
function e0(e) {
    let { tabs: l, selectedTab: s, onTabSelect: t, onClose: i } = e;
    return (0, n.jsx)(eV.W, {
        "data-menu-migrated-auto": !0,
        navId: "members-tabs-overflow-menu",
        "aria-label": Y.intl.string(Y.t.riPnr0),
        hideScroller: !0,
        onClose: i,
        onSelect: i,
        children: (0, n.jsx)(
            ez.rX,
            {
                children: l.map((e) => {
                    let { id: l, label: i } = e;
                    return (0, n.jsx)(
                        ez.Dr,
                        {
                            id: l,
                            label: i,
                            icon: l === s ? P.CircleCheckIcon : void 0,
                            leadingAccessory: l === s ? { type: "icon", icon: P.CircleCheckIcon } : void 0,
                            action: () => t(l),
                        },
                        l,
                    );
                }),
            },
            "applications-overflow-tabs",
        ),
    });
}
function e7(e) {
    let { onTabSelect: l, tabs: s, selectedTab: t } = e,
        r = i.useRef(null),
        d = (0, eQ.Ay)(),
        c = (0, eF.M)(d),
        o = i.useMemo(
            () =>
                null !=
                s.find((e) => {
                    let { id: l } = e;
                    return l === t;
                }),
            [t, s],
        ),
        u = o ? "text-strong" : c ? "text-muted" : "text-strong",
        m = o ? w.A.colors.TEXT_STRONG : c ? w.A.colors.TEXT_MUTED : w.A.colors.TEXT_STRONG;
    return (0, n.jsx)(eX.Y, {
        targetElementRef: r,
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, n.jsx)(e0, { selectedTab: t, onClose: i, tabs: s, onTabSelect: l });
        },
        position: "bottom",
        align: "left",
        children: (e, l) => {
            let { isShown: s } = l;
            return (0, n.jsxs)(eW.V.Item, {
                ...e,
                id: "more",
                innerRef: r,
                color: "text-muted",
                className: a()(eZ.OS, { [eZ.wH]: o }),
                "aria-label": Y.intl.string(Y.t["UKOtz+"]),
                children: [
                    (0, n.jsx)(_.E, { variant: "body-md/medium", color: u, children: Y.intl.string(Y.t["UKOtz+"]) }),
                    s
                        ? (0, n.jsx)(eH.ChevronSmallUpIcon, { size: "sm", color: m })
                        : (0, n.jsx)(eJ.ChevronSmallDownIcon, { size: "sm", color: m }),
                ],
            });
        },
    });
}
function e4(e) {
    var l;
    let { guildId: s, currentTab: t, onTabSelect: r } = e,
        [a, c] = i.useState(0),
        o = i.useRef(null),
        u = i.useRef(a),
        m =
            ((l = (0, S.H)({ guildId: s }) ?? 0),
            [
                { id: M.ALL_MEMBERS, label: Y.intl.string(Y.t.NOOm1Z) },
                {
                    id: M.PENDING,
                    label:
                        l > 0 ? Y.intl.formatToPlainString(Y.t["Wo+zL0"], { count: l }) : Y.intl.string(Y.t["4eQVBO"]),
                },
                { id: M.REJECTED, label: Y.intl.string(Y.t.bSZkla) },
                { id: M.APPROVED, label: Y.intl.string(Y.t.aURgY2) },
            ]),
        {
            lastVisibleIndex: x,
            onItemLayout: j,
            overflowItemsRef: h,
        } = (0, e$.Wv)({ items: m, itemGapPx: 16, maxLines: 1, containerWidth: a - 200 }),
        A = (0, d.bG)([T.Ay], () => null != T.Ay.getGuildSidebarState(s), [s]),
        g = V({ guildId: s }),
        E = i.useMemo(() => !!A || (t !== M.ALL_MEMBERS && null != g && null != g.user), [t, A, g]),
        b = i.useMemo(() => m.slice(0, x + 1), [x, m]),
        f = i.useMemo(() => m.slice(x + 1), [x, m]),
        I = (0, eY.A)((e) => {
            let l = e.contentRect.width;
            null != l && u.current !== l && (c(l), (u.current = l));
        });
    return (
        (0, eK.g)(o, I, [E]),
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(v.A.Divider, { className: eZ.yF }),
                (0, n.jsxs)("div", {
                    className: eZ.oB,
                    ref: o,
                    children: [
                        (0, n.jsxs)("div", {
                            className: eZ.Kk,
                            children: [
                                m.map((e, l) =>
                                    (0, n.jsx)(
                                        e$.Ae,
                                        {
                                            index: l,
                                            onItemLayout: j,
                                            children: (0, n.jsx)(eW.V.Item, {
                                                id: e.id,
                                                "aria-label": e.label,
                                                children: e.label,
                                            }),
                                        },
                                        e.id,
                                    ),
                                ),
                                (0, n.jsx)("div", {
                                    ref: h,
                                    children: (0, n.jsx)(e7, { tabs: f, onTabSelect: r, selectedTab: t }),
                                }),
                            ],
                        }),
                        (0, n.jsxs)(eW.V, {
                            "aria-label": Y.intl.string(Y.t.tcvVXM),
                            selectedItem: t,
                            type: "top-pill",
                            onItemSelect: r,
                            children: [
                                b.map((e) =>
                                    (0, n.jsx)(eW.V.Item, { id: e.id, "aria-label": e.label, children: e.label }, e.id),
                                ),
                                0 !== f.length ? (0, n.jsx)(e7, { tabs: f, onTabSelect: r, selectedTab: t }) : null,
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
}
var e6 = s(956972),
    e5 = s(138298);
function e9(e) {
    let { guildId: l } = e,
        s = (0, d.bG)([R.A], () => R.A.getGuild(l)),
        { analyticsLocations: t } = (0, m.Ay)(u.A.MEMBER_SAFETY_PAGE),
        r = (0, d.bG)([T.Ay], () => T.Ay.getGuildSidebarState(l), [l]),
        a = i.useCallback(() => {
            e5.A.closeGuildSidebar(l);
        }, [l]),
        c = null != r;
    return null != s && c && null != r
        ? (0, n.jsx)(m.f5, {
              value: t,
              children: (0, n.jsx)("div", {
                  className: eZ.__invalid_sidebarContainer,
                  style: { width: 480 },
                  children: (0, n.jsx)(e6.default, {
                      userId: r.details.userId,
                      guildId: r.details.guildId,
                      onClose: a,
                  }),
              }),
          })
        : null;
}
var e8 = s(856768),
    e1 = s(120692),
    e2 = s(164636),
    e3 = s(717421),
    le = s(636496),
    ll = s(406318),
    ls = s(189552),
    lt = s(997860),
    ln = s(749060),
    li = s(749872);
function lr(e) {
    let { guild: l } = e,
        s = (0, le.Ms)(l.id),
        t = (0, e3.z)({ height: 3 * !!s, config: e1.config.stiff });
    return (0, n.jsx)("div", {
        className: eD.NQ,
        children: (0, n.jsx)(e1.animated.div, { className: eD.b0, style: t }),
    });
}
function la(e) {
    let { guild: l, className: s, onPageChange: t, onMemberSelect: r } = e,
        d = l.id,
        c = (0, e2.bG)([ll.A], () => ll.A.getEstimatedMemberSearchCountByGuildId(d), [d]),
        u = (0, le.Ms)(d),
        m = (0, le.Wl)(d),
        x = i.useCallback(
            (e) => {
                null != e && r?.(e);
            },
            [r],
        ),
        j = (0, ls.ii)(m, u, c),
        h = i.useRef(null),
        A = i.useRef(null),
        g = i.useCallback(() => {
            h.current?.resetSearchText();
        }, []);
    return (0, n.jsx)("div", {
        className: a()(eD.FV, s),
        children: (0, n.jsxs)(o.Ch, {
            className: eD.Hk,
            ref: A,
            orientation: "horizontal",
            children: [
                (0, n.jsx)(li.A, { guild: l, ref: h }),
                (0, n.jsx)(lr, { guild: l }),
                (0, n.jsx)(lt.A, { guild: l, onSelectRow: x, searchState: j, onResetForNewMembers: g }),
                j !== ls.IY.SUCCESS_STILL_INDEXING && (0, n.jsx)(ln.A, { guildId: l.id, onPageChange: t }),
            ],
        }),
    });
}
var ld = s(746080),
    lc = s(999900);
function lo(e) {
    let { guild: l, currentTab: s, onTabSelect: t } = e,
        i = (0, g.W)(l.id),
        r = Y.intl.string(Y.t.oclz3Z),
        a = Y.intl.string(Y.t.oclz3Z);
    return (
        (0, x.HU)({ location: l.name, subsection: r }),
        (0, n.jsxs)(v.A, {
            className: eZ.wx,
            innerClassname: eZ.__invalid_innerHeader,
            channelId: ld.VV.MEMBER_SAFETY,
            guildId: l.id,
            hideSearch: !0,
            children: [
                (0, n.jsx)(v.A.Icon, { icon: c.GroupIcon, "aria-hidden": !0 }),
                (0, n.jsx)(v.A.Title, { children: a }),
                i && (0, n.jsx)(e4, { guildId: l.id, currentTab: s, onTabSelect: t }),
            ],
        })
    );
}
function lu(e) {
    let { guildId: l } = e,
        s = (0, S.H)({ guildId: l }) ?? 0,
        [t, r] = i.useState(s > 0 ? M.PENDING : M.ALL_MEMBERS),
        c = (0, d.bG)([R.A], () => R.A.getGuild(l)),
        { analyticsLocations: x } = (0, m.Ay)(u.A.MEMBER_SAFETY_PAGE),
        g = f({ guildId: l }),
        { guildJoinRequests: b } = I({
            guildId: l,
            applicationStatus: "ALL_MEMBERS" === t ? A.B5.SUBMITTED : t,
            sortOrder: g,
        });
    i.useEffect(() => {
        c?.features.has(ea.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) || r(M.ALL_MEMBERS);
    }, [c]);
    let v = (0, p.fw)(l),
        y = (0, j.q)(l),
        _ = i.useRef(null),
        { fetchNextPage: D } = (0, E.K)({ guildId: l, guildJoinRequests: b }),
        G = i.useCallback(async () => {
            if (t === M.ALL_MEMBERS) return;
            let e = _.current?.getScrollerState();
            null == e || (e.scrollHeight - e.scrollTop - e.offsetHeight < 200 && (await D(g, t)));
        }, [t, t, g, D]),
        L = i.useCallback(
            async (e) => {
                t === e || (r(e), h.A.setSelectedGuildJoinRequest(l, null), "ALL_MEMBERS" !== e && (await D(g, e)));
            },
            [t, l, D, g],
        );
    i.useEffect(() => {
        if (!v && null != c) {
            let e = C.A.getDefaultChannel(c.id)?.id;
            (0, N.uh)(c.id, e);
        }
    }, [c, v]);
    let P = (0, d.bG)([T.Ay], () => null != T.Ay.getGuildSidebarState(l), [l]);
    return null != c && v
        ? (0, n.jsxs)(m.f5, {
              value: x,
              children: [
                  (0, n.jsxs)("div", {
                      className: a()(lc.TE, eZ.MY, { [lc.js]: P }),
                      children: [
                          (0, n.jsx)(lo, { guild: c, currentTab: t, onTabSelect: L }),
                          (0, n.jsx)(o.Ch, {
                              onScroll: G,
                              ref: _,
                              orientation: "vertical",
                              children: (0, n.jsx)("div", {
                                  className: a()(lc.Qs, eZ.kL),
                                  children:
                                      null == c
                                          ? null
                                          : t === M.ALL_MEMBERS
                                            ? (0, n.jsxs)(n.Fragment, {
                                                  children: [
                                                      (0, n.jsx)(eO.A, { guild: c }),
                                                      (0, n.jsx)(la, { guild: c }),
                                                  ],
                                              })
                                            : (0, n.jsx)(ew, { guildId: c.id, currentTab: t }),
                              }),
                          }),
                          (0, n.jsx)(e8.A, { guildId: c.id }),
                      ],
                  }),
                  y &&
                      (null == c
                          ? null
                          : P
                            ? (0, n.jsx)(e9, { guildId: c.id })
                            : t === M.ALL_MEMBERS
                              ? null
                              : (0, n.jsx)(eI, { guildId: c.id })),
              ],
          })
        : null;
}
