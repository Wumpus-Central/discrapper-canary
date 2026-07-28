t.r(l), t.d(l, { default: () => lx });
var s,
    n = t(627968),
    i = t(64700),
    r = t(503698),
    a = t.n(r),
    d = t(17928),
    c = t(177953),
    o = t(689175),
    u = t(793574),
    x = t(688810),
    m = t(726249),
    j = t(985925),
    h = t(624458),
    A = t(513461),
    E = t(496767),
    g = t(663997),
    f = t(844944);
function S(e) {
    let { guildId: l } = e;
    return (0, d.bG)([f.A], () => f.A.getSelectedSortOrder(l), [l]);
}
function v(e) {
    let { guildId: l, applicationStatus: t, sortOrder: s } = e,
        n = (0, d.bG)([f.A], () => f.A.getRequests(l, t), [t, l]);
    return { guildJoinRequests: i.useMemo(() => (s === A._e.TIMESTAMP_DESC ? [...n].reverse() : n), [s, n]) };
}
var N = t(786180),
    b = t(742589),
    T = t(976860),
    I = t(761640),
    R = t(808728),
    C = t(71393),
    M =
        (((s = {}).ALL_MEMBERS = "ALL_MEMBERS"),
        (s[(s.PENDING = A.B5.SUBMITTED)] = "PENDING"),
        (s[(s.REJECTED = A.B5.REJECTED)] = "REJECTED"),
        (s[(s.APPROVED = A.B5.APPROVED)] = "APPROVED"),
        s),
    p = t(134413),
    _ = t(361610),
    D = t(939249),
    G = t(834730),
    y = t(97808),
    L = t(778712),
    P = t(789645),
    B = t(628284),
    k = t(285796),
    U = t(534890),
    w = t(821609),
    q = t(339350),
    O = t(661531),
    F = t(364522),
    V = t(821124);
function z(e) {
    let { guildId: l } = e;
    return (0, d.bG)([f.A], () => f.A.getSelectedGuildJoinRequest(l), [l]);
}
var W = t(231483),
    X = t(287809),
    H = t(31457),
    J = t(414626),
    $ = t(601047),
    K = t(273926),
    Y = t(453016),
    Q = t(375708);
let Z = function (e) {
    let { guildId: l, formFields: t, user: s, showRequirements: i = !0 } = e;
    return null == (0, d.bG)([X.default], () => s ?? X.default.getCurrentUser())
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  i && (0, n.jsx)(H.fu, { icon: W.l, text: Q.intl.string(Q.t.v2z4c1), meetsRequirement: !0 }),
                  t.map((e, l) =>
                      (function (e, l) {
                          switch (e.field_type) {
                              case A.rX.TERMS:
                                  return (0, n.jsx)(K.LK, { formField: e }, l);
                              case A.rX.TEXT_INPUT:
                                  return (0, n.jsx)(Y.aS, { formField: e }, l);
                              case A.rX.PARAGRAPH:
                                  return (0, n.jsx)($.P1, { formField: e }, l);
                              case A.rX.MULTIPLE_CHOICE:
                                  return (0, n.jsx)(J.CI, { formField: e }, l);
                          }
                      })(e, l),
                  ),
              ],
          });
};
var ee = t(123393),
    el = t(534400),
    et = t(975732),
    es = t(889227),
    en = t(734057),
    ei = t(58703),
    er = t(935208),
    ea = t(427262),
    ed = t(652215),
    ec = t(743981),
    eo = t(590466),
    eu = t(77378);
function ex(e) {
    let { icon: l, label: t, onClick: s, disabled: i } = e;
    return (0, n.jsxs)(D.D, {
        className: a()(eo.hP, { [eo.r9]: i }),
        onClick: i ? ed.tEg : s,
        "aria-label": t,
        children: [
            (0, n.jsx)(l, { size: "custom", color: "currentColor", width: 20, height: 20 }),
            (0, n.jsx)(G.E, { variant: "text-sm/normal", color: "none", children: t }),
        ],
    });
}
function em(e) {
    let { user: l, guildId: t, joinRequest: s } = e,
        { analyticsLocations: i } = (0, x.Ay)();
    function r() {
        (0, et.openUserProfileModal)({ userId: l.id, joinRequestId: s.joinRequestId, sourceAnalyticsLocations: i });
    }
    return (0, n.jsxs)("div", {
        className: eo.op,
        children: [
            (0, n.jsxs)("div", {
                className: eu.FD,
                children: [
                    (0, n.jsx)(D.D, {
                        onClick: r,
                        className: a()(eo.vk, eu.Wn),
                        children: (0, n.jsx)(y.eu, {
                            src: l.getAvatarURL(t, 48),
                            "aria-label": l.username,
                            size: L._3.SIZE_48,
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        className: eu.oS,
                        children: [
                            (0, n.jsxs)("div", {
                                className: eu.K$,
                                children: [
                                    (0, n.jsx)(D.D, {
                                        onClick: r,
                                        className: eo.vk,
                                        children: (0, n.jsx)(G.E, {
                                            variant: "text-lg/medium",
                                            children: l?.globalName,
                                        }),
                                    }),
                                    (0, n.jsx)(el.Ay, {
                                        primaryGuild: l?.primaryGuild,
                                        userId: l?.id,
                                        contextGuildId: t,
                                        badgeSize: ec.Sl.SIZE_16,
                                        textVariant: "heading-md/semibold",
                                        className: eu.Dz,
                                        containerClassName: eu.UL,
                                    }),
                                ],
                            }),
                            (0, n.jsx)(D.D, {
                                onClick: r,
                                className: eo.vk,
                                children: (0, n.jsx)(G.E, {
                                    variant: "text-md/medium",
                                    color: "text-default",
                                    children: ea.Ay.getUserTag(l),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, n.jsx)(D.D, {
                className: eu.d4,
                onClick: () => h.A.setSelectedGuildJoinRequest(t, null),
                children: (0, n.jsx)(P.P, { size: "md", color: "currentColor" }),
            }),
        ],
    });
}
function ej(e) {
    let { user: l, guildId: t, joinRequest: s } = e,
        {
            approveRequest: i,
            rejectRequest: r,
            handleOpenInterview: a,
            submitting: d,
        } = (0, ee.W)(t, l.id, s.joinRequestId, s.interviewChannelId);
    return (0, n.jsxs)("div", {
        className: eo.$l,
        children: [
            (0, n.jsx)(ex, { icon: B.y, label: Q.intl.string(Q.t.BzjDQJ), onClick: i, disabled: d }),
            (0, n.jsx)(ex, { icon: k.a, label: Q.intl.string(Q.t.hDtbsz), onClick: r, disabled: d }),
            null == s.interviewChannelId &&
                (0, n.jsx)(ex, { icon: U.o, label: Q.intl.string(Q.t.KQeYoC), onClick: a, disabled: d }),
        ],
    });
}
function eh(e) {
    let { user: l, guildId: t, joinRequest: s, label: i } = e,
        { interviewChannelId: r, applicationStatus: a } = s,
        c = (0, d.bG)([en.A], () => null != r && null != en.A.getChannel(r), [r]),
        { handleOpenInterview: o, submitting: u } = (0, ee.W)(t, l.id, s.joinRequestId, r);
    return (0, V.mf)(a) && !c
        ? null
        : (0, n.jsx)("div", {
              className: eo.a6,
              children: (0, n.jsx)(w.$, {
                  variant: "secondary",
                  size: "sm",
                  icon: U.o,
                  text: i ?? Q.intl.string(Q.t["2simqN"]),
                  onClick: o,
                  disabled: u,
                  fullWidth: !0,
              }),
          });
}
function eA(e) {
    let { user: l, guildId: t, joinRequest: s } = e;
    return (0, n.jsxs)("div", {
        className: eo.Ik,
        children: [
            (0, n.jsx)(q.Q, { size: "lg", color: O.A.colors.STATUS_WARNING }),
            (0, n.jsx)("div", {
                className: eo.$I,
                children: (0, n.jsx)(G.E, {
                    variant: "text-md/medium",
                    color: "text-strong",
                    children: Q.intl.string(Q.t["Vr+7eO"]),
                }),
            }),
            (0, n.jsx)(eh, { user: l, guildId: t, joinRequest: s, label: Q.intl.string(Q.t.rcqdhN) }),
        ],
    });
}
function eE(e) {
    let { user: l, guildId: t, joinRequest: s } = e,
        { actionedAt: i, actionedByUser: r, rejectionReason: a } = s;
    return (0, n.jsxs)("div", {
        className: eo.Ik,
        children: [
            (0, n.jsx)(k.a, {
                size: "lg",
                color: O.A.colors.BACKGROUND_BASE_LOWER,
                secondaryColor: O.A.colors.INTERACTIVE_TEXT_DEFAULT,
            }),
            (0, n.jsxs)("div", {
                className: eo.$I,
                children: [
                    (0, n.jsx)(G.E, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        children: Q.intl.string(Q.t.bSZkla),
                    }),
                    null != r && null != i
                        ? (0, n.jsxs)("div", {
                              className: eo.Ay,
                              children: [
                                  (0, n.jsx)(G.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: Q.intl.formatToPlainString(Q.t.qnimbL, {
                                          username: r.global_name ?? r.username,
                                      }),
                                  }),
                                  (0, n.jsx)("div", { className: eo.Om }),
                                  (0, n.jsx)(G.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: (0, ei.i$)(new Date(er.default.extractTimestamp(i)), "LL"),
                                  }),
                              ],
                          })
                        : null,
                    null != a &&
                        (0, n.jsx)(G.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: Q.intl.formatToPlainString(Q.t.fU5PPM, { rejectionReason: a }),
                        }),
                ],
            }),
            (0, n.jsx)(eh, { user: l, guildId: t, joinRequest: s }),
        ],
    });
}
function eg(e) {
    let { user: l, guildId: t, joinRequest: s } = e,
        { actionedAt: i, actionedByUser: r } = s;
    return (0, n.jsxs)("div", {
        className: eo.Ik,
        children: [
            (0, n.jsx)(B.y, {
                size: "lg",
                color: O.A.colors.STATUS_POSITIVE_BACKGROUND,
                secondaryColor: O.A.colors.STATUS_POSITIVE_TEXT,
            }),
            (0, n.jsxs)("div", {
                className: eo.$I,
                children: [
                    (0, n.jsx)(G.E, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        children: Q.intl.string(Q.t.aURgY2),
                    }),
                    null != r && null != i
                        ? (0, n.jsxs)("div", {
                              className: eo.Ay,
                              children: [
                                  (0, n.jsx)(G.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: Q.intl.formatToPlainString(Q.t.qnimbL, {
                                          username: r.global_name ?? r.username,
                                      }),
                                  }),
                                  (0, n.jsx)("div", { className: eo.Om }),
                                  (0, n.jsx)(G.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: (0, ei.i$)(new Date(er.default.extractTimestamp(i)), "LL"),
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            (0, n.jsx)(eh, { user: l, guildId: t, joinRequest: s }),
        ],
    });
}
function ef(e) {
    let { status: l } = e;
    switch (l) {
        case A.B5.APPROVED:
            return (0, n.jsx)(B.y, {
                size: "sm",
                color: O.A.colors.STATUS_POSITIVE_BACKGROUND,
                secondaryColor: O.A.colors.STATUS_POSITIVE_TEXT,
            });
        case A.B5.REJECTED:
            return (0, n.jsx)(k.a, {
                size: "sm",
                color: O.A.colors.BACKGROUND_BASE_LOWER,
                secondaryColor: O.A.colors.INTERACTIVE_TEXT_DEFAULT,
            });
        default:
            return null;
    }
}
function eS(e) {
    let { guildId: l, userId: t, selectedJoinRequestId: s } = e,
        r = (function (e) {
            let { guildId: l, userId: t, selectedJoinRequestId: s } = e,
                n = (0, d.bG)([f.A], () => f.A.getRequestsForUser(l, t), [l, t]);
            return (
                i.useEffect(() => {
                    null == n && h.A.fetchGuildJoinRequestsForUser(l, t);
                }, [l, t, n]),
                i.useMemo(
                    () =>
                        (n ?? [])
                            .filter((e) => e.joinRequestId !== s)
                            .slice()
                            .sort((e, l) => new Date(l.createdAt).getTime() - new Date(e.createdAt).getTime()),
                    [n, s],
                )
            );
        })({ guildId: l, userId: t, selectedJoinRequestId: s });
    return 0 === r.length
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(G.E, {
                      className: eo._3,
                      variant: "text-sm/medium",
                      color: "text-muted",
                      children: Q.intl.string(Q.t["hxa+G3"]),
                  }),
                  (0, n.jsx)("div", {
                      className: eo.TT,
                      children: r.map((e) =>
                          (0, n.jsxs)(
                              D.D,
                              {
                                  className: a()(eo.lj, eo.vk),
                                  onClick: () => h.A.setSelectedGuildJoinRequest(l, e),
                                  children: [
                                      (0, n.jsx)(G.E, {
                                          variant: "text-sm/normal",
                                          color: "text-default",
                                          children: (0, ei.i$)(new Date(e.createdAt), "LL"),
                                      }),
                                      (0, n.jsx)(ef, { status: e.applicationStatus }),
                                  ],
                              },
                              e.joinRequestId,
                          ),
                      ),
                  }),
              ],
          });
}
function ev(e) {
    let { user: l, joinRequest: t } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(G.E, {
                className: eo._3,
                variant: "text-sm/medium",
                color: "text-muted",
                children: Q.intl.string(Q.t["ldCE/p"]),
            }),
            (0, n.jsxs)("div", {
                className: eo.TT,
                children: [
                    (0, n.jsxs)("div", {
                        className: eo.lj,
                        children: [
                            (0, n.jsx)(G.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: Q.intl.string(Q.t.SaDIpL),
                            }),
                            (0, n.jsx)(G.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: (0, ei.i$)(new Date(er.default.extractTimestamp(l.id)), "LL"),
                            }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: eo.lj,
                        children: [
                            (0, n.jsx)(G.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: Q.intl.string(Q.t["Vt4cn+"]),
                            }),
                            (0, n.jsx)(G.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: (0, ei.i$)(new Date(t.createdAt), "LL"),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function eN(e) {
    let { guildId: l } = e,
        t = z({ guildId: l }),
        { user: s } = t ?? {},
        r = i.useMemo(() => t?.formResponses ?? [], [t?.formResponses]),
        c = i.useMemo(() => (null != s ? new es.A(s) : null), [s]),
        o = (0, d.bG)([C.A], () => C.A.getGuild(l), [l]);
    return ((0, m.HU)({ subsection: Q.intl.string(Q.t.nqrK8X), location: o?.name }),
    null == t || null == o || null == c || null == s)
        ? null
        : (0, n.jsx)("section", {
              className: eo.pz,
              children: (0, n.jsx)(F.Ip, {
                  children: (0, n.jsxs)("div", {
                      className: eo.WH,
                      children: [
                          (0, n.jsxs)("div", {
                              className: eo.Ui,
                              children: [
                                  (0, n.jsx)(em, { user: c, guildId: l, joinRequest: t }),
                                  t.applicationStatus === A.B5.SUBMITTED &&
                                      null != t.interviewChannelId &&
                                      (0, n.jsx)(eA, { user: c, guildId: l, joinRequest: t }),
                                  t.applicationStatus === A.B5.SUBMITTED &&
                                      (0, n.jsx)(ej, { user: c, guildId: l, joinRequest: t }),
                                  t.applicationStatus === A.B5.REJECTED &&
                                      (0, n.jsx)(eE, { user: c, guildId: l, joinRequest: t }),
                                  t.applicationStatus === A.B5.APPROVED &&
                                      (0, n.jsx)(eg, { user: c, guildId: l, joinRequest: t }),
                              ],
                          }),
                          (0, n.jsxs)("div", {
                              className: a()(eo.Ui, eo.gi),
                              children: [
                                  (0, n.jsx)("div", {
                                      children: (0, n.jsx)(Z, {
                                          guildId: o.id,
                                          formFields: r,
                                          user: c,
                                          showRequirements: !1,
                                      }),
                                  }),
                                  (0, n.jsx)(ev, { guildId: l, user: c, joinRequest: t }),
                                  (0, n.jsx)(eS, { guildId: l, userId: s.id, selectedJoinRequestId: t.joinRequestId }),
                              ],
                          }),
                      ],
                  }),
              }),
          });
}
var eb = t(989349),
    eT = t.n(eb),
    eI = t(933832),
    eR = t(297264),
    eC = t(866665),
    eM = t(530005),
    ep = t(442433),
    e_ = t(966327),
    eD = t(532197),
    eG = t(525476),
    ey = t(82061),
    eL = t(818258),
    eP = t(998711);
function eB(e) {
    let l,
        t,
        { status: s } = e;
    switch (s) {
        case A.B5.REJECTED:
            (l = Q.t["7YSJ6f"]), (t = Q.t.i05OUR);
            break;
        case A.B5.APPROVED:
            (l = Q.t.bv82GS), (t = Q.t.D4OUHT);
            break;
        default:
            (l = Q.t["/wqiSv"]), (t = Q.t.o47YZs);
    }
    return (0, n.jsxs)("div", {
        className: eG.do,
        children: [
            (0, n.jsx)(eI.A, { size: "md", color: "currentColor", className: eG.AI }),
            (0, n.jsx)(eR.D, { variant: "heading-md/medium", children: Q.intl.string(l) }),
            (0, n.jsx)(G.E, { color: "text-muted", variant: "text-sm/medium", children: Q.intl.string(t) }),
        ],
    });
}
function ek(e) {
    let { sortOrder: l, currentTab: t, onSortChange: s } = e,
        i = (0, V.mf)(t) ? Q.t.Z2L8V2 : Q.t.EZ5QWL;
    return (0, n.jsx)("thead", {
        children: (0, n.jsxs)("tr", {
            className: eL.Yk,
            children: [
                (0, n.jsx)("th", {
                    className: eG.e4,
                    children: (0, n.jsx)(G.E, {
                        variant: "eyebrow",
                        color: "interactive-text-default",
                        children: Q.intl.string(Q.t.Es7n9c),
                    }),
                }),
                (0, n.jsx)("th", {
                    className: a()(eG.e4, eP.QB),
                    children: (0, n.jsxs)(D.D, {
                        className: eG.KF,
                        onClick: s,
                        children: [
                            (0, n.jsx)(G.E, {
                                variant: "eyebrow",
                                color: "interactive-text-default",
                                children: Q.intl.string(i),
                            }),
                            l === A._e.TIMESTAMP_ASC
                                ? (0, n.jsx)(eD.A, { className: eG.GM, direction: eD.A.Directions.UP })
                                : (0, n.jsx)(eD.A, { className: eG.GM, direction: eD.A.Directions.DOWN }),
                        ],
                    }),
                }),
                (0, n.jsx)("th", {
                    className: a()(eG.e4, eG.UX),
                    children: (0, n.jsx)(G.E, {
                        variant: "eyebrow",
                        color: "interactive-text-default",
                        children: Q.intl.string(Q.t["5Q9xGr"]),
                    }),
                }),
            ],
        }),
    });
}
let eU = i.memo(function (e) {
        let { joinRequest: l, user: t } = e,
            { joinRequestId: s, guildId: r } = l,
            { analyticsLocations: a } = (0, x.Ay)(),
            d = i.useCallback(
                (e) => {
                    e.stopPropagation(),
                        e.preventDefault(),
                        (0, et.openUserProfileModal)({ userId: t.id, joinRequestId: s, sourceAnalyticsLocations: a });
                },
                [t, s, a],
            );
        return (0, n.jsxs)("div", {
            className: eP.FD,
            children: [
                (0, n.jsx)(D.D, { className: eP.Wn, onClick: d, children: (0, n.jsx)(e_.A, { user: t }) }),
                (0, n.jsx)("div", {
                    className: eP.eg,
                    children: (0, n.jsx)(G.E, {
                        variant: "text-sm/medium",
                        children: (0, n.jsxs)(D.D, {
                            onClick: d,
                            className: eP.VW,
                            children: [
                                t.globalName,
                                (0, n.jsx)(el.Ay, {
                                    primaryGuild: t?.primaryGuild,
                                    userId: t?.id,
                                    contextGuildId: r,
                                    containerClassName: eP.Dz,
                                }),
                            ],
                        }),
                    }),
                }),
                (0, n.jsx)("div", {
                    className: eP.Br,
                    children: (0, n.jsx)(G.E, {
                        variant: "text-xs/normal",
                        color: "text-default",
                        tag: "span",
                        children: (0, n.jsx)(D.D, { onClick: d, tag: "span", children: ea.Ay.getUserTag(t) }),
                    }),
                }),
            ],
        });
    }),
    ew = i.memo(function (e) {
        let { joinRequest: l, onSelect: s } = e,
            { guildId: r, createdAt: c, actionedAt: o, applicationStatus: u } = l,
            x = i.useMemo(() => new es.A(l.user), [l.user]),
            m = (0, V.mf)(u) && null != o ? new Date(er.default.extractTimestamp(o)) : c,
            j = z({ guildId: r }),
            h = (0, d.bG)([I.Ay], () => I.Ay.getGuildSidebarState(r), [r]),
            E = h?.details.userId === x.id,
            g = (0, d.bG)([C.A], () => C.A.getGuild(r)),
            f = u === A.B5.SUBMITTED;
        return null == x
            ? null
            : (0, n.jsxs)("tr", {
                  onClick: s,
                  className: a()(eP.yF, eP.iA, { [eP.wH]: j?.joinRequestId === l.joinRequestId, [eP.qb]: E }),
                  children: [
                      (0, n.jsx)("td", { children: (0, n.jsx)(eU, { joinRequest: l, user: x }) }),
                      (0, n.jsx)("td", {
                          className: eP.QB,
                          children: (0, n.jsx)(G.E, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              children: eT()(m).format("lll"),
                          }),
                      }),
                      (0, n.jsx)("td", {
                          className: eG.UX,
                          children:
                              f &&
                              (0, n.jsx)(eC.m, {
                                  text: Q.intl.string(Q.t.x8Nn4M),
                                  children: (0, n.jsx)(D.D, {
                                      onClick: function (e) {
                                          (0, ep.L3)(
                                              e,
                                              async () => {
                                                  let { default: e } = await Promise.all([
                                                      t.e("4524"),
                                                      t.e("32660"),
                                                  ]).then(t.bind(t, 772063));
                                                  return (l) => (0, n.jsx)(e, { ...l, guild: g, user: x });
                                              },
                                              { position: "bottom", align: "right" },
                                          );
                                      },
                                      className: eP.x6,
                                      children: (0, n.jsx)(eM.F, {
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
            t = `${Math.floor(25 * Math.random()) + 50}px`;
        return (0, n.jsxs)("tr", {
            className: a()(eP.yF, eP.iA),
            children: [
                (0, n.jsx)("td", {
                    children: (0, n.jsxs)("div", {
                        className: eP.FD,
                        children: [
                            (0, n.jsx)("div", { className: a()(eG.RH, eP.Wn) }),
                            (0, n.jsx)("div", {
                                className: eP.eg,
                                children: (0, n.jsx)("div", { className: eG.RC, style: { width: e } }),
                            }),
                            (0, n.jsx)("div", {
                                className: eP.Br,
                                children: (0, n.jsx)("div", { className: eG.w7, style: { width: l } }),
                            }),
                        ],
                    }),
                }),
                (0, n.jsx)("td", {
                    className: eP.QB,
                    children: (0, n.jsx)("div", { className: eG.RC, style: { width: t } }),
                }),
                (0, n.jsx)("td", { className: eG.UX }),
            ],
        });
    };
function eO(e) {
    let { guildId: l, currentTab: t } = e,
        s = i.useRef(null),
        r = (0, d.bG)([C.A], () => C.A.getGuild(l)),
        a = S({ guildId: l }),
        c = (0, d.bG)([f.A], () => f.A.isFetching()),
        { guildJoinRequests: u } = v({ guildId: l, applicationStatus: t, sortOrder: a }),
        { fetchNextPage: x } = (0, g.K)({ guildId: l, guildJoinRequests: u }),
        m = i.useCallback(async () => {
            let e = a === A._e.TIMESTAMP_ASC ? A._e.TIMESTAMP_DESC : A._e.TIMESTAMP_ASC;
            h.A.setSelectedSortOrder(l, e, t), await x(e, t);
        }, [a, l, x, t]);
    return null == r
        ? null
        : (0, n.jsx)("div", {
              className: ey.FV,
              children: (0, n.jsx)(o.Ch, {
                  className: ey.Hk,
                  ref: s,
                  orientation: "horizontal",
                  children: (0, n.jsxs)("table", {
                      className: eG.tp,
                      children: [
                          (0, n.jsx)(ek, { sortOrder: a, currentTab: t, onSortChange: m }),
                          (0, n.jsx)("tbody", {
                              children:
                                  0 === u.length
                                      ? c
                                          ? [, , , , ,].fill(0).map((e, l) => (0, n.jsx)(eq, {}, `placeholder-${l}`))
                                          : (0, n.jsx)("tr", {
                                                children: (0, n.jsx)("td", {
                                                    colSpan: 3,
                                                    children: (0, n.jsx)(eB, { status: t }),
                                                }),
                                            })
                                      : (0, n.jsxs)(n.Fragment, {
                                            children: [
                                                u.map((e) =>
                                                    (0, n.jsx)(
                                                        ew,
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
var eF = t(465917),
    eV = t(3666),
    ez = t(462887),
    eW = t(980707),
    eX = t(477782),
    eH = t(922016),
    eJ = t(761508),
    e$ = t(900797),
    eK = t(847374),
    eY = t(770178),
    eQ = t(765548),
    eZ = t(736653),
    e0 = t(495865);
function e7(e) {
    let { tabs: l, selectedTab: t, onTabSelect: s, onClose: i } = e;
    return (0, n.jsx)(eW.W, {
        "data-menu-migrated-auto": !0,
        navId: "members-tabs-overflow-menu",
        "aria-label": Q.intl.string(Q.t.riPnr0),
        hideScroller: !0,
        onClose: i,
        onSelect: i,
        children: (0, n.jsx)(
            eX.rX,
            {
                children: l.map((e) => {
                    let { id: l, label: i } = e;
                    return (0, n.jsx)(
                        eX.Dr,
                        {
                            id: l,
                            label: i,
                            icon: l === t ? B.y : void 0,
                            leadingAccessory: l === t ? { type: "icon", icon: B.y } : void 0,
                            action: () => s(l),
                        },
                        l,
                    );
                }),
            },
            "applications-overflow-tabs",
        ),
    });
}
function e6(e) {
    let { onTabSelect: l, tabs: t, selectedTab: s } = e,
        r = i.useRef(null),
        d = (0, eZ.Ay)(),
        c = (0, ez.M)(d),
        o = i.useMemo(
            () =>
                null !=
                t.find((e) => {
                    let { id: l } = e;
                    return l === s;
                }),
            [s, t],
        ),
        u = o ? "text-strong" : c ? "text-muted" : "text-strong",
        x = o ? O.A.colors.TEXT_STRONG : c ? O.A.colors.TEXT_MUTED : O.A.colors.TEXT_STRONG;
    return (0, n.jsx)(eH.Y, {
        targetElementRef: r,
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, n.jsx)(e7, { selectedTab: s, onClose: i, tabs: t, onTabSelect: l });
        },
        position: "bottom",
        align: "left",
        children: (e, l) => {
            let { isShown: t } = l;
            return (0, n.jsxs)(eJ.V.Item, {
                ...e,
                id: "more",
                clickableInnerRef: r,
                color: "text-muted",
                className: a()(e0.OS, { [e0.wH]: o }),
                "aria-label": Q.intl.string(Q.t["UKOtz+"]),
                children: [
                    (0, n.jsx)(G.E, { variant: "text-md/medium", color: u, children: Q.intl.string(Q.t["UKOtz+"]) }),
                    t ? (0, n.jsx)(e$.t, { size: "sm", color: x }) : (0, n.jsx)(eK.a, { size: "sm", color: x }),
                ],
            });
        },
    });
}
function e5(e) {
    var l;
    let { guildId: t, currentTab: s, onTabSelect: r } = e,
        [a, c] = i.useState(0),
        o = i.useRef(null),
        u = i.useRef(a),
        x =
            ((l = (0, N.H)({ guildId: t }) ?? 0),
            [
                { id: M.ALL_MEMBERS, label: Q.intl.string(Q.t.NOOm1Z) },
                {
                    id: M.PENDING,
                    label:
                        l > 0 ? Q.intl.formatToPlainString(Q.t["Wo+zL0"], { count: l }) : Q.intl.string(Q.t["4eQVBO"]),
                },
                { id: M.REJECTED, label: Q.intl.string(Q.t.bSZkla) },
                { id: M.APPROVED, label: Q.intl.string(Q.t.aURgY2) },
            ]),
        {
            lastVisibleIndex: m,
            onItemLayout: j,
            overflowItemsRef: h,
        } = (0, eV.Wv)({ items: x, itemGapPx: 16, maxLines: 1, containerWidth: a - 200 }),
        A = (0, d.bG)([I.Ay], () => null != I.Ay.getGuildSidebarState(t), [t]),
        E = z({ guildId: t }),
        g = i.useMemo(() => !!A || (s !== M.ALL_MEMBERS && null != E && null != E.user), [s, A, E]),
        f = i.useMemo(() => x.slice(0, m + 1), [m, x]),
        S = i.useMemo(() => x.slice(m + 1), [m, x]),
        v = (0, eQ.A)((e) => {
            let l = e.contentRect.width;
            null != l && u.current !== l && (c(l), (u.current = l));
        });
    return (
        (0, eY.g)(o, v, [g]),
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(b.A.Divider, { className: e0.yF }),
                (0, n.jsxs)("div", {
                    className: e0.oB,
                    ref: o,
                    children: [
                        (0, n.jsxs)("div", {
                            className: e0.Kk,
                            children: [
                                x.map((e, l) =>
                                    (0, n.jsx)(
                                        eV.Ae,
                                        {
                                            index: l,
                                            onItemLayout: j,
                                            children: (0, n.jsx)(eJ.V.Item, {
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
                                    children: (0, n.jsx)(e6, { tabs: S, onTabSelect: r, selectedTab: s }),
                                }),
                            ],
                        }),
                        (0, n.jsxs)(eJ.V, {
                            "aria-label": Q.intl.string(Q.t.tcvVXM),
                            selectedItem: s,
                            type: "top-pill",
                            onItemSelect: r,
                            children: [
                                f.map((e) =>
                                    (0, n.jsx)(eJ.V.Item, { id: e.id, "aria-label": e.label, children: e.label }, e.id),
                                ),
                                0 !== S.length ? (0, n.jsx)(e6, { tabs: S, onTabSelect: r, selectedTab: s }) : null,
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
}
var e8 = t(754744),
    e4 = t(138298);
function e2(e) {
    let { guildId: l } = e,
        t = (0, d.bG)([C.A], () => C.A.getGuild(l)),
        { analyticsLocations: s } = (0, x.Ay)(u.A.MEMBER_SAFETY_PAGE),
        r = (0, d.bG)([I.Ay], () => I.Ay.getGuildSidebarState(l), [l]),
        a = i.useCallback(() => {
            e4.A.closeGuildSidebar(l);
        }, [l]),
        c = null != r;
    return null != t && c && null != r
        ? (0, n.jsx)(x.f5, {
              value: s,
              children: (0, n.jsx)("div", {
                  className: e0.__invalid_sidebarContainer,
                  style: { width: ed.da6 },
                  children: (0, n.jsx)(e8.default, {
                      userId: r.details.userId,
                      guildId: r.details.guildId,
                      onClose: a,
                  }),
              }),
          })
        : null;
}
var e3 = t(856768),
    e9 = t(4798),
    e1 = t(702841),
    le = t(717421),
    ll = t(144073),
    lt = t(151781),
    ls = t(189552),
    ln = t(728365),
    li = t(749060),
    lr = t(779545);
function la(e) {
    let { guild: l } = e,
        t = (0, ll.Ms)(l.id),
        s = (0, le.z)({ height: 3 * !!t, config: e9.config.stiff });
    return (0, n.jsx)("div", {
        className: ey.NQ,
        children: (0, n.jsx)(e9.animated.div, { className: ey.b0, style: s }),
    });
}
function ld(e) {
    let { guild: l, className: t, onPageChange: s, onMemberSelect: r } = e,
        d = l.id,
        c = (0, e1.bG)([lt.A], () => lt.A.getEstimatedMemberSearchCountByGuildId(d), [d]),
        u = (0, ll.Ms)(d),
        x = (0, ll.Wl)(d),
        m = i.useCallback(
            (e) => {
                null != e && r?.(e);
            },
            [r],
        ),
        j = (0, ls.ii)(x, u, c),
        h = i.useRef(null),
        A = i.useRef(null),
        E = i.useCallback(() => {
            h.current?.resetSearchText();
        }, []);
    return (0, n.jsx)("div", {
        className: a()(ey.FV, t),
        children: (0, n.jsxs)(o.Ch, {
            className: ey.Hk,
            ref: A,
            orientation: "horizontal",
            children: [
                (0, n.jsx)(lr.A, { guild: l, ref: h }),
                (0, n.jsx)(la, { guild: l }),
                (0, n.jsx)(ln.A, { guild: l, onSelectRow: m, searchState: j, onResetForNewMembers: E }),
                j !== ls.IY.SUCCESS_STILL_INDEXING && (0, n.jsx)(li.A, { guildId: l.id, onPageChange: s }),
            ],
        }),
    });
}
var lc = t(746080),
    lo = t(354919);
function lu(e) {
    let { guild: l, currentTab: t, onTabSelect: s } = e,
        i = (0, E.W)(l.id),
        r = Q.intl.string(Q.t.oclz3Z),
        a = Q.intl.string(Q.t.oclz3Z);
    return (
        (0, m.HU)({ location: l.name, subsection: r }),
        (0, n.jsxs)(b.A, {
            className: e0.wx,
            innerClassname: e0.__invalid_innerHeader,
            channelId: lc.VV.MEMBER_SAFETY,
            guildId: l.id,
            hideSearch: !0,
            children: [
                (0, n.jsx)(b.A.Icon, { icon: c.n, "aria-hidden": !0 }),
                (0, n.jsx)(b.A.Title, { children: a }),
                i && (0, n.jsx)(e5, { guildId: l.id, currentTab: t, onTabSelect: s }),
            ],
        })
    );
}
function lx(e) {
    let { guildId: l } = e,
        t = (0, N.H)({ guildId: l }) ?? 0,
        [s, r] = i.useState(t > 0 ? M.PENDING : M.ALL_MEMBERS),
        c = (0, d.bG)([C.A], () => C.A.getGuild(l)),
        { analyticsLocations: m } = (0, x.Ay)(u.A.MEMBER_SAFETY_PAGE),
        E = S({ guildId: l }),
        { guildJoinRequests: f } = v({
            guildId: l,
            applicationStatus: "ALL_MEMBERS" === s ? A.B5.SUBMITTED : s,
            sortOrder: E,
        });
    i.useEffect(() => {
        c?.features.has(ed.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) || r(M.ALL_MEMBERS);
    }, [c]);
    let b = (0, p.fw)(l),
        D = (0, j.q)(l),
        G = i.useRef(null);
    i.useEffect(
        () => (
            _.Cf(l),
            () => {
                _.G9(l);
            }
        ),
        [l],
    );
    let { fetchNextPage: y } = (0, g.K)({ guildId: l, guildJoinRequests: f }),
        L = i.useCallback(async () => {
            if (s === M.ALL_MEMBERS) return;
            let e = G.current?.getScrollerState();
            null == e || (e.scrollHeight - e.scrollTop - e.offsetHeight < 200 && (await y(E, s)));
        }, [s, s, E, y]),
        P = i.useCallback(
            async (e) => {
                s === e || (r(e), h.A.setSelectedGuildJoinRequest(l, null), "ALL_MEMBERS" !== e && (await y(E, e)));
            },
            [s, l, y, E],
        );
    i.useEffect(() => {
        if (!b && null != c) {
            let e = R.Ay.getDefaultChannel(c.id)?.id;
            (0, T.uh)(c.id, e);
        }
    }, [c, b]);
    let B = (0, d.bG)([I.Ay], () => null != I.Ay.getGuildSidebarState(l), [l]);
    return null != c && b
        ? (0, n.jsxs)(x.f5, {
              value: m,
              children: [
                  (0, n.jsxs)("div", {
                      className: a()(lo.TE, e0.MY, { [lo.js]: B }),
                      children: [
                          (0, n.jsx)(lu, { guild: c, currentTab: s, onTabSelect: P }),
                          (0, n.jsx)(o.Ch, {
                              onScroll: L,
                              ref: G,
                              orientation: "vertical",
                              children: (0, n.jsx)("div", {
                                  className: a()(lo.Qs, e0.kL),
                                  children:
                                      null == c
                                          ? null
                                          : s === M.ALL_MEMBERS
                                            ? (0, n.jsxs)(n.Fragment, {
                                                  children: [
                                                      (0, n.jsx)(eF.A, { guild: c }),
                                                      (0, n.jsx)(ld, { guild: c }),
                                                  ],
                                              })
                                            : (0, n.jsx)(eO, { guildId: c.id, currentTab: s }),
                              }),
                          }),
                          (0, n.jsx)(e3.A, { guildId: c.id }),
                      ],
                  }),
                  D &&
                      (null == c
                          ? null
                          : B
                            ? (0, n.jsx)(e2, { guildId: c.id })
                            : s === M.ALL_MEMBERS
                              ? null
                              : (0, n.jsx)(eN, { guildId: c.id })),
              ],
          })
        : null;
}
