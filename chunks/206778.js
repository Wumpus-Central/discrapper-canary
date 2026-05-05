l.r(t), l.d(t, { default: () => tx });
var s,
    i = l(627968),
    n = l(64700),
    r = l(503698),
    a = l.n(r),
    d = l(17928),
    c = l(177953),
    o = l(689175),
    u = l(793574),
    x = l(688810),
    m = l(726249),
    j = l(985925),
    h = l(624458),
    A = l(513461),
    E = l(496767),
    g = l(663997),
    f = l(844944);
function v(e) {
    let { guildId: t } = e;
    return (0, d.bG)([f.A], () => f.A.getSelectedSortOrder(t), [t]);
}
function S(e) {
    let { guildId: t, applicationStatus: l, sortOrder: s } = e,
        i = (0, d.bG)([f.A], () => f.A.getRequests(t, l), [l, t]);
    return { guildJoinRequests: n.useMemo(() => (s === A._e.TIMESTAMP_DESC ? [...i].reverse() : i), [s, i]) };
}
var N = l(786180),
    T = l(742589),
    b = l(976860),
    I = l(761640),
    R = l(808728),
    C = l(71393),
    M =
        (((s = {}).ALL_MEMBERS = "ALL_MEMBERS"),
        (s[(s.PENDING = A.B5.SUBMITTED)] = "PENDING"),
        (s[(s.REJECTED = A.B5.REJECTED)] = "REJECTED"),
        (s[(s.APPROVED = A.B5.APPROVED)] = "APPROVED"),
        s),
    p = l(134413),
    _ = l(361610),
    D = l(939249),
    G = l(834730),
    L = l(97808),
    y = l(778712),
    P = l(789645),
    B = l(628284),
    k = l(285796),
    U = l(534890),
    w = l(821609),
    q = l(339350),
    O = l(661531),
    F = l(364522),
    V = l(821124);
function z(e) {
    let { guildId: t } = e;
    return (0, d.bG)([f.A], () => f.A.getSelectedGuildJoinRequest(t), [t]);
}
var W = l(231483),
    X = l(287809),
    H = l(31457),
    J = l(414626),
    $ = l(601047),
    K = l(273926),
    Y = l(453016),
    Q = l(375708);
let Z = function (e) {
    let { guildId: t, formFields: l, user: s, showRequirements: n = !0 } = e;
    return null == (0, d.bG)([X.default], () => s ?? X.default.getCurrentUser())
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  n && (0, i.jsx)(H.fu, { icon: W.l, text: Q.intl.string(Q.t.v2z4c1), meetsRequirement: !0 }),
                  l.map((e, t) =>
                      (function (e, t) {
                          switch (e.field_type) {
                              case A.rX.TERMS:
                                  return (0, i.jsx)(K.LK, { formField: e }, t);
                              case A.rX.TEXT_INPUT:
                                  return (0, i.jsx)(Y.aS, { formField: e }, t);
                              case A.rX.PARAGRAPH:
                                  return (0, i.jsx)($.P1, { formField: e }, t);
                              case A.rX.MULTIPLE_CHOICE:
                                  return (0, i.jsx)(J.CI, { formField: e }, t);
                          }
                      })(e, t),
                  ),
              ],
          });
};
var ee = l(123393),
    et = l(534400),
    el = l(975732),
    es = l(889227),
    ei = l(734057),
    en = l(58703),
    er = l(935208),
    ea = l(427262),
    ed = l(652215),
    ec = l(743981),
    eo = l(982186),
    eu = l(637498);
function ex(e) {
    let { icon: t, label: l, onClick: s, disabled: n } = e;
    return (0, i.jsxs)(D.D, {
        className: a()(eo.hP, { [eo.r9]: n }),
        onClick: n ? ed.tEg : s,
        "aria-label": l,
        children: [
            (0, i.jsx)(t, { size: "custom", color: "currentColor", width: 20, height: 20 }),
            (0, i.jsx)(G.E, { variant: "text-sm/normal", color: "none", children: l }),
        ],
    });
}
function em(e) {
    let { user: t, guildId: l, joinRequest: s } = e,
        { analyticsLocations: n } = (0, x.Ay)(),
        r = () => {
            (0, el.openUserProfileModal)({ userId: t.id, joinRequestId: s.joinRequestId, sourceAnalyticsLocations: n });
        };
    return (0, i.jsxs)("div", {
        className: eo.op,
        children: [
            (0, i.jsxs)("div", {
                className: eu.FD,
                children: [
                    (0, i.jsx)(D.D, {
                        onClick: r,
                        className: a()(eo.vk, eu.Wn),
                        children: (0, i.jsx)(L.eu, {
                            src: t.getAvatarURL(l, 48),
                            "aria-label": t.username,
                            size: y._3.SIZE_48,
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        className: eu.oS,
                        children: [
                            (0, i.jsxs)("div", {
                                className: eu.K$,
                                children: [
                                    (0, i.jsx)(D.D, {
                                        onClick: r,
                                        className: eo.vk,
                                        children: (0, i.jsx)(G.E, {
                                            variant: "text-lg/medium",
                                            children: t?.globalName,
                                        }),
                                    }),
                                    (0, i.jsx)(et.Ay, {
                                        primaryGuild: t?.primaryGuild,
                                        userId: t?.id,
                                        contextGuildId: l,
                                        badgeSize: ec.Sl.SIZE_16,
                                        textVariant: "heading-md/semibold",
                                        className: eu.Dz,
                                        containerClassName: eu.UL,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(D.D, {
                                onClick: r,
                                className: eo.vk,
                                children: (0, i.jsx)(G.E, {
                                    variant: "text-md/medium",
                                    color: "text-default",
                                    children: ea.Ay.getUserTag(t),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(D.D, {
                className: eu.d4,
                onClick: () => h.A.setSelectedGuildJoinRequest(l, null),
                children: (0, i.jsx)(P.P, { size: "md", color: "currentColor" }),
            }),
        ],
    });
}
function ej(e) {
    let { user: t, guildId: l, joinRequest: s } = e,
        {
            approveRequest: n,
            rejectRequest: r,
            handleOpenInterview: a,
            submitting: d,
        } = (0, ee.W)(l, t.id, s.joinRequestId, s.interviewChannelId);
    return (0, i.jsxs)("div", {
        className: eo.$l,
        children: [
            (0, i.jsx)(ex, { icon: B.y, label: Q.intl.string(Q.t.BzjDQJ), onClick: n, disabled: d }),
            (0, i.jsx)(ex, { icon: k.a, label: Q.intl.string(Q.t.hDtbsz), onClick: r, disabled: d }),
            null == s.interviewChannelId &&
                (0, i.jsx)(ex, { icon: U.o, label: Q.intl.string(Q.t.KQeYoC), onClick: a, disabled: d }),
        ],
    });
}
function eh(e) {
    let { user: t, guildId: l, joinRequest: s, label: n } = e,
        { interviewChannelId: r, applicationStatus: a } = s,
        c = (0, d.bG)([ei.A], () => null != r && null != ei.A.getChannel(r), [r]),
        { handleOpenInterview: o, submitting: u } = (0, ee.W)(l, t.id, s.joinRequestId, r);
    return (0, V.mf)(a) && !c
        ? null
        : (0, i.jsx)("div", {
              className: eo.a6,
              children: (0, i.jsx)(w.$, {
                  variant: "secondary",
                  size: "sm",
                  icon: U.o,
                  text: n ?? Q.intl.string(Q.t["2simqN"]),
                  onClick: o,
                  disabled: u,
                  fullWidth: !0,
              }),
          });
}
function eA(e) {
    let { user: t, guildId: l, joinRequest: s } = e;
    return (0, i.jsxs)("div", {
        className: eo.Ik,
        children: [
            (0, i.jsx)(q.Q, { size: "lg", color: O.A.colors.STATUS_WARNING }),
            (0, i.jsx)("div", {
                className: eo.$I,
                children: (0, i.jsx)(G.E, {
                    variant: "text-md/medium",
                    color: "text-strong",
                    children: Q.intl.string(Q.t["Vr+7eO"]),
                }),
            }),
            (0, i.jsx)(eh, { user: t, guildId: l, joinRequest: s, label: Q.intl.string(Q.t.rcqdhN) }),
        ],
    });
}
function eE(e) {
    let { user: t, guildId: l, joinRequest: s } = e,
        { actionedAt: n, actionedByUser: r, rejectionReason: a } = s;
    return (0, i.jsxs)("div", {
        className: eo.Ik,
        children: [
            (0, i.jsx)(k.a, {
                size: "lg",
                color: O.A.colors.BACKGROUND_BASE_LOWER,
                secondaryColor: O.A.colors.INTERACTIVE_TEXT_DEFAULT,
            }),
            (0, i.jsxs)("div", {
                className: eo.$I,
                children: [
                    (0, i.jsx)(G.E, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        children: Q.intl.string(Q.t.bSZkla),
                    }),
                    null != r && null != n
                        ? (0, i.jsxs)("div", {
                              className: eo.Ay,
                              children: [
                                  (0, i.jsx)(G.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: Q.intl.formatToPlainString(Q.t.qnimbL, {
                                          username: r.global_name ?? r.username,
                                      }),
                                  }),
                                  (0, i.jsx)("div", { className: eo.Om }),
                                  (0, i.jsx)(G.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: (0, en.i$)(new Date(er.default.extractTimestamp(n)), "LL"),
                                  }),
                              ],
                          })
                        : null,
                    null != a &&
                        (0, i.jsx)(G.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: Q.intl.formatToPlainString(Q.t.fU5PPM, { rejectionReason: a }),
                        }),
                ],
            }),
            (0, i.jsx)(eh, { user: t, guildId: l, joinRequest: s }),
        ],
    });
}
function eg(e) {
    let { user: t, guildId: l, joinRequest: s } = e,
        { actionedAt: n, actionedByUser: r } = s;
    return (0, i.jsxs)("div", {
        className: eo.Ik,
        children: [
            (0, i.jsx)(B.y, {
                size: "lg",
                color: O.A.colors.STATUS_POSITIVE_BACKGROUND,
                secondaryColor: O.A.colors.STATUS_POSITIVE_TEXT,
            }),
            (0, i.jsxs)("div", {
                className: eo.$I,
                children: [
                    (0, i.jsx)(G.E, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        children: Q.intl.string(Q.t.aURgY2),
                    }),
                    null != r && null != n
                        ? (0, i.jsxs)("div", {
                              className: eo.Ay,
                              children: [
                                  (0, i.jsx)(G.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: Q.intl.formatToPlainString(Q.t.qnimbL, {
                                          username: r.global_name ?? r.username,
                                      }),
                                  }),
                                  (0, i.jsx)("div", { className: eo.Om }),
                                  (0, i.jsx)(G.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: (0, en.i$)(new Date(er.default.extractTimestamp(n)), "LL"),
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            (0, i.jsx)(eh, { user: t, guildId: l, joinRequest: s }),
        ],
    });
}
function ef(e) {
    let { status: t } = e;
    switch (t) {
        case A.B5.APPROVED:
            return (0, i.jsx)(B.y, {
                size: "sm",
                color: O.A.colors.STATUS_POSITIVE_BACKGROUND,
                secondaryColor: O.A.colors.STATUS_POSITIVE_TEXT,
            });
        case A.B5.REJECTED:
            return (0, i.jsx)(k.a, {
                size: "sm",
                color: O.A.colors.BACKGROUND_BASE_LOWER,
                secondaryColor: O.A.colors.INTERACTIVE_TEXT_DEFAULT,
            });
        default:
            return null;
    }
}
function ev(e) {
    let { guildId: t, userId: l, selectedJoinRequestId: s } = e,
        r = (function (e) {
            let { guildId: t, userId: l, selectedJoinRequestId: s } = e,
                i = (0, d.bG)([f.A], () => f.A.getRequestsForUser(t, l), [t, l]);
            return (
                n.useEffect(() => {
                    null == i && h.A.fetchGuildJoinRequestsForUser(t, l);
                }, [t, l, i]),
                n.useMemo(
                    () =>
                        (i ?? [])
                            .filter((e) => e.joinRequestId !== s)
                            .slice()
                            .sort((e, t) => new Date(t.createdAt).getTime() - new Date(e.createdAt).getTime()),
                    [i, s],
                )
            );
        })({ guildId: t, userId: l, selectedJoinRequestId: s });
    return 0 === r.length
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(G.E, {
                      className: eo._3,
                      variant: "text-sm/medium",
                      color: "text-muted",
                      children: Q.intl.string(Q.t["hxa+G3"]),
                  }),
                  (0, i.jsx)("div", {
                      className: eo.TT,
                      children: r.map((e) =>
                          (0, i.jsxs)(
                              D.D,
                              {
                                  className: a()(eo.lj, eo.vk),
                                  onClick: () => h.A.setSelectedGuildJoinRequest(t, e),
                                  children: [
                                      (0, i.jsx)(G.E, {
                                          variant: "text-sm/normal",
                                          color: "text-default",
                                          children: (0, en.i$)(new Date(e.createdAt), "LL"),
                                      }),
                                      (0, i.jsx)(ef, { status: e.applicationStatus }),
                                  ],
                              },
                              e.joinRequestId,
                          ),
                      ),
                  }),
              ],
          });
}
function eS(e) {
    let { user: t, joinRequest: l } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(G.E, {
                className: eo._3,
                variant: "text-sm/medium",
                color: "text-muted",
                children: Q.intl.string(Q.t["ldCE/p"]),
            }),
            (0, i.jsxs)("div", {
                className: eo.TT,
                children: [
                    (0, i.jsxs)("div", {
                        className: eo.lj,
                        children: [
                            (0, i.jsx)(G.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: Q.intl.string(Q.t.SaDIpL),
                            }),
                            (0, i.jsx)(G.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: (0, en.i$)(new Date(er.default.extractTimestamp(t.id)), "LL"),
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: eo.lj,
                        children: [
                            (0, i.jsx)(G.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: Q.intl.string(Q.t["Vt4cn+"]),
                            }),
                            (0, i.jsx)(G.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: (0, en.i$)(new Date(l.createdAt), "LL"),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function eN(e) {
    let { guildId: t } = e,
        l = z({ guildId: t }),
        { user: s } = l ?? {},
        r = n.useMemo(() => l?.formResponses ?? [], [l?.formResponses]),
        c = n.useMemo(() => (null != s ? new es.A(s) : null), [s]),
        o = (0, d.bG)([C.A], () => C.A.getGuild(t), [t]);
    return ((0, m.HU)({ subsection: Q.intl.string(Q.t.nqrK8X), location: o?.name }),
    null == l || null == o || null == c || null == s)
        ? null
        : (0, i.jsx)("section", {
              className: eo.pz,
              children: (0, i.jsx)(F.Ip, {
                  children: (0, i.jsxs)("div", {
                      className: eo.WH,
                      children: [
                          (0, i.jsxs)("div", {
                              className: eo.Ui,
                              children: [
                                  (0, i.jsx)(em, { user: c, guildId: t, joinRequest: l }),
                                  l.applicationStatus === A.B5.SUBMITTED &&
                                      null != l.interviewChannelId &&
                                      (0, i.jsx)(eA, { user: c, guildId: t, joinRequest: l }),
                                  l.applicationStatus === A.B5.SUBMITTED &&
                                      (0, i.jsx)(ej, { user: c, guildId: t, joinRequest: l }),
                                  l.applicationStatus === A.B5.REJECTED &&
                                      (0, i.jsx)(eE, { user: c, guildId: t, joinRequest: l }),
                                  l.applicationStatus === A.B5.APPROVED &&
                                      (0, i.jsx)(eg, { user: c, guildId: t, joinRequest: l }),
                              ],
                          }),
                          (0, i.jsxs)("div", {
                              className: a()(eo.Ui, eo.gi),
                              children: [
                                  (0, i.jsx)("div", {
                                      children: (0, i.jsx)(Z, {
                                          guildId: o.id,
                                          formFields: r,
                                          user: c,
                                          showRequirements: !1,
                                      }),
                                  }),
                                  (0, i.jsx)(eS, { guildId: t, user: c, joinRequest: l }),
                                  (0, i.jsx)(ev, { guildId: t, userId: s.id, selectedJoinRequestId: l.joinRequestId }),
                              ],
                          }),
                      ],
                  }),
              }),
          });
}
var eT = l(989349),
    eb = l.n(eT),
    eI = l(990078),
    eR = l(933832),
    eC = l(534514),
    eM = l(530005),
    ep = l(442433),
    e_ = l(966327),
    eD = l(532197),
    eG = l(831084),
    eL = l(494213),
    ey = l(301050),
    eP = l(62255);
function eB(e) {
    let t,
        l,
        { status: s } = e;
    switch (s) {
        case A.B5.REJECTED:
            (t = Q.t["7YSJ6f"]), (l = Q.t.i05OUR);
            break;
        case A.B5.APPROVED:
            (t = Q.t.bv82GS), (l = Q.t.D4OUHT);
            break;
        default:
            (t = Q.t["/wqiSv"]), (l = Q.t.o47YZs);
    }
    return (0, i.jsxs)("div", {
        className: eG.do,
        children: [
            (0, i.jsx)(eR.A, { size: "md", color: "currentColor", className: eG.AI }),
            (0, i.jsx)(eC.D, { variant: "heading-md/medium", children: Q.intl.string(t) }),
            (0, i.jsx)(G.E, { color: "text-muted", variant: "text-sm/medium", children: Q.intl.string(l) }),
        ],
    });
}
function ek(e) {
    let { sortOrder: t, currentTab: l, onSortChange: s } = e,
        n = (0, V.mf)(l) ? Q.t.Z2L8V2 : Q.t.EZ5QWL;
    return (0, i.jsx)("thead", {
        children: (0, i.jsxs)("tr", {
            className: ey.Yk,
            children: [
                (0, i.jsx)("th", {
                    className: eG.e4,
                    children: (0, i.jsx)(G.E, {
                        variant: "eyebrow",
                        color: "interactive-text-default",
                        children: Q.intl.string(Q.t.Es7n9c),
                    }),
                }),
                (0, i.jsx)("th", {
                    className: a()(eG.e4, eP.QB),
                    children: (0, i.jsxs)(D.D, {
                        className: eG.KF,
                        onClick: s,
                        children: [
                            (0, i.jsx)(G.E, {
                                variant: "eyebrow",
                                color: "interactive-text-default",
                                children: Q.intl.string(n),
                            }),
                            t === A._e.TIMESTAMP_ASC
                                ? (0, i.jsx)(eD.A, { className: eG.GM, direction: eD.A.Directions.UP })
                                : (0, i.jsx)(eD.A, { className: eG.GM, direction: eD.A.Directions.DOWN }),
                        ],
                    }),
                }),
                (0, i.jsx)("th", {
                    className: a()(eG.e4, eG.UX),
                    children: (0, i.jsx)(G.E, {
                        variant: "eyebrow",
                        color: "interactive-text-default",
                        children: Q.intl.string(Q.t["5Q9xGr"]),
                    }),
                }),
            ],
        }),
    });
}
let eU = n.memo(function (e) {
        let { joinRequest: t, user: l } = e,
            { joinRequestId: s, guildId: r } = t,
            { analyticsLocations: a } = (0, x.Ay)(),
            d = n.useCallback(
                (e) => {
                    e.stopPropagation(),
                        e.preventDefault(),
                        (0, el.openUserProfileModal)({ userId: l.id, joinRequestId: s, sourceAnalyticsLocations: a });
                },
                [l, s, a],
            );
        return (0, i.jsxs)("div", {
            className: eP.FD,
            children: [
                (0, i.jsx)(D.D, { className: eP.Wn, onClick: d, children: (0, i.jsx)(e_.A, { user: l }) }),
                (0, i.jsx)("div", {
                    className: eP.eg,
                    children: (0, i.jsx)(G.E, {
                        variant: "text-sm/medium",
                        children: (0, i.jsxs)(D.D, {
                            onClick: d,
                            className: eP.VW,
                            children: [
                                l.globalName,
                                (0, i.jsx)(et.Ay, {
                                    primaryGuild: l?.primaryGuild,
                                    userId: l?.id,
                                    contextGuildId: r,
                                    containerClassName: eP.Dz,
                                }),
                            ],
                        }),
                    }),
                }),
                (0, i.jsx)("div", {
                    className: eP.Br,
                    children: (0, i.jsx)(G.E, {
                        variant: "text-xs/normal",
                        color: "text-default",
                        tag: "span",
                        children: (0, i.jsx)(D.D, { onClick: d, tag: "span", children: ea.Ay.getUserTag(l) }),
                    }),
                }),
            ],
        });
    }),
    ew = n.memo(function (e) {
        let { joinRequest: t, onSelect: s } = e,
            { guildId: r, createdAt: c, actionedAt: o, applicationStatus: u } = t,
            x = n.useMemo(() => new es.A(t.user), [t.user]),
            m = (0, V.mf)(u) && null != o ? new Date(er.default.extractTimestamp(o)) : c,
            j = z({ guildId: r }),
            h = (0, d.bG)([C.A], () => C.A.getGuild(r)),
            E = u === A.B5.SUBMITTED;
        return null == x
            ? null
            : (0, i.jsxs)("tr", {
                  onClick: s,
                  className: a()(eP.yF, eP.iA, { [eP.wH]: j?.joinRequestId === t.joinRequestId }),
                  children: [
                      (0, i.jsx)("td", { children: (0, i.jsx)(eU, { joinRequest: t, user: x }) }),
                      (0, i.jsx)("td", {
                          className: eP.QB,
                          children: (0, i.jsx)(G.E, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              children: eb()(m).format("lll"),
                          }),
                      }),
                      (0, i.jsx)("td", {
                          className: eG.UX,
                          children:
                              E &&
                              (0, i.jsx)(eI.m, {
                                  text: Q.intl.string(Q.t.x8Nn4M),
                                  children: (0, i.jsx)(D.D, {
                                      onClick: (e) => {
                                          (0, ep.L3)(
                                              e,
                                              async () => {
                                                  let { default: e } = await l.e("32660").then(l.bind(l, 772063));
                                                  return (t) => (0, i.jsx)(e, { ...t, guild: h, user: x });
                                              },
                                              { position: "bottom", align: "right" },
                                          );
                                      },
                                      className: eP.x6,
                                      children: (0, i.jsx)(eM.F, {
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
            t = `${Math.floor(50 * Math.random()) + 100}px`,
            l = `${Math.floor(25 * Math.random()) + 50}px`;
        return (0, i.jsxs)("tr", {
            className: a()(eP.yF, eP.iA),
            children: [
                (0, i.jsx)("td", {
                    children: (0, i.jsxs)("div", {
                        className: eP.FD,
                        children: [
                            (0, i.jsx)("div", { className: a()(eG.RH, eP.Wn) }),
                            (0, i.jsx)("div", {
                                className: eP.eg,
                                children: (0, i.jsx)("div", { className: eG.RC, style: { width: e } }),
                            }),
                            (0, i.jsx)("div", {
                                className: eP.Br,
                                children: (0, i.jsx)("div", { className: eG.w7, style: { width: t } }),
                            }),
                        ],
                    }),
                }),
                (0, i.jsx)("td", {
                    className: eP.QB,
                    children: (0, i.jsx)("div", { className: eG.RC, style: { width: l } }),
                }),
                (0, i.jsx)("td", { className: eG.UX }),
            ],
        });
    };
function eO(e) {
    let { guildId: t, currentTab: l } = e,
        s = n.useRef(null),
        r = (0, d.bG)([C.A], () => C.A.getGuild(t)),
        a = v({ guildId: t }),
        c = (0, d.bG)([f.A], () => f.A.isFetching()),
        { guildJoinRequests: u } = S({ guildId: t, applicationStatus: l, sortOrder: a }),
        { fetchNextPage: x } = (0, g.K)({ guildId: t, guildJoinRequests: u }),
        m = n.useCallback(async () => {
            let e = a === A._e.TIMESTAMP_ASC ? A._e.TIMESTAMP_DESC : A._e.TIMESTAMP_ASC;
            h.A.setSelectedSortOrder(t, e, l), await x(e, l);
        }, [a, t, x, l]);
    return null == r
        ? null
        : (0, i.jsx)("div", {
              className: eL.FV,
              children: (0, i.jsx)(o.Ch, {
                  className: eL.Hk,
                  ref: s,
                  orientation: "horizontal",
                  children: (0, i.jsxs)("table", {
                      className: eG.tp,
                      children: [
                          (0, i.jsx)(ek, { sortOrder: a, currentTab: l, onSortChange: m }),
                          (0, i.jsx)("tbody", {
                              children:
                                  0 === u.length
                                      ? c
                                          ? [, , , , ,].fill(0).map((e, t) => (0, i.jsx)(eq, {}, `placeholder-${t}`))
                                          : (0, i.jsx)("tr", {
                                                children: (0, i.jsx)("td", {
                                                    colSpan: 3,
                                                    children: (0, i.jsx)(eB, { status: l }),
                                                }),
                                            })
                                      : (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                u.map((e) =>
                                                    (0, i.jsx)(
                                                        ew,
                                                        {
                                                            joinRequest: e,
                                                            onSelect: () => h.A.setSelectedGuildJoinRequest(t, e),
                                                        },
                                                        e.joinRequestId,
                                                    ),
                                                ),
                                                c &&
                                                    [, , , , ,]
                                                        .fill(0)
                                                        .map((e, t) => (0, i.jsx)(eq, {}, `placeholder-${t}`)),
                                            ],
                                        }),
                          }),
                      ],
                  }),
              }),
          });
}
var eF = l(465917),
    eV = l(3666),
    ez = l(462887),
    eW = l(980707),
    eX = l(477782),
    eH = l(922016),
    eJ = l(761508),
    e$ = l(900797),
    eK = l(847374),
    eY = l(770178),
    eQ = l(765548),
    eZ = l(736653),
    e0 = l(256177);
let e7 = (e) => {
    let { tabs: t, selectedTab: l, onTabSelect: s, onClose: n } = e;
    return (0, i.jsx)(eW.W, {
        "data-menu-migrated-auto": !0,
        navId: "members-tabs-overflow-menu",
        "aria-label": Q.intl.string(Q.t.riPnr0),
        hideScroller: !0,
        onClose: n,
        onSelect: n,
        children: (0, i.jsx)(
            eX.rX,
            {
                children: t.map((e) => {
                    let { id: t, label: n } = e;
                    return (0, i.jsx)(
                        eX.Dr,
                        {
                            id: t,
                            label: n,
                            icon: t === l ? B.y : void 0,
                            leadingAccessory: t === l ? { type: "icon", icon: B.y } : void 0,
                            action: () => s(t),
                        },
                        t,
                    );
                }),
            },
            "applications-overflow-tabs",
        ),
    });
};
function e5(e) {
    let { onTabSelect: t, tabs: l, selectedTab: s } = e,
        r = n.useRef(null),
        d = (0, eZ.Ay)(),
        c = (0, ez.M)(d),
        o = n.useMemo(
            () =>
                null !=
                l.find((e) => {
                    let { id: t } = e;
                    return t === s;
                }),
            [s, l],
        ),
        u = o ? "text-strong" : c ? "text-muted" : "text-strong",
        x = o ? O.A.colors.TEXT_STRONG : c ? O.A.colors.TEXT_MUTED : O.A.colors.TEXT_STRONG;
    return (0, i.jsx)(eH.Y, {
        targetElementRef: r,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(e7, { selectedTab: s, onClose: n, tabs: l, onTabSelect: t });
        },
        position: "bottom",
        align: "left",
        children: (e, t) => {
            let { isShown: l } = t;
            return (0, i.jsxs)(eJ.V.Item, {
                ...e,
                id: "more",
                clickableInnerRef: r,
                color: "text-muted",
                className: a()(e0.OS, { [e0.wH]: o }),
                "aria-label": Q.intl.string(Q.t["UKOtz+"]),
                children: [
                    (0, i.jsx)(G.E, { variant: "text-md/medium", color: u, children: Q.intl.string(Q.t["UKOtz+"]) }),
                    l ? (0, i.jsx)(e$.t, { size: "sm", color: x }) : (0, i.jsx)(eK.a, { size: "sm", color: x }),
                ],
            });
        },
    });
}
function e6(e) {
    let t,
        { guildId: l, currentTab: s, onTabSelect: r } = e,
        [a, c] = n.useState(0),
        o = n.useRef(null),
        u = n.useRef(a),
        x =
            ((t = (0, N.H)({ guildId: l }) ?? 0),
            [
                { id: M.ALL_MEMBERS, label: Q.intl.string(Q.t.NOOm1Z) },
                {
                    id: M.PENDING,
                    label:
                        t > 0 ? Q.intl.formatToPlainString(Q.t["Wo+zL0"], { count: t }) : Q.intl.string(Q.t["4eQVBO"]),
                },
                { id: M.REJECTED, label: Q.intl.string(Q.t.bSZkla) },
                { id: M.APPROVED, label: Q.intl.string(Q.t.aURgY2) },
            ]),
        {
            lastVisibleIndex: m,
            onItemLayout: j,
            overflowItemsRef: h,
        } = (0, eV.Wv)({ items: x, itemGapPx: 16, maxLines: 1, containerWidth: a - 200 }),
        A = (0, d.bG)([I.Ay], () => null != I.Ay.getGuildSidebarState(l), [l]),
        E = z({ guildId: l }),
        g = n.useMemo(() => (s === M.ALL_MEMBERS ? A : null != E && null != E.user), [s, A, E]),
        f = n.useMemo(() => x.slice(0, m + 1), [m, x]),
        v = n.useMemo(() => x.slice(m + 1), [m, x]),
        S = (0, eQ.A)((e) => {
            let t = e.contentRect.width;
            null != t && u.current !== t && (c(t), (u.current = t));
        });
    return (
        (0, eY.g)(o, S, [g]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(T.A.Divider, { className: e0.yF }),
                (0, i.jsxs)("div", {
                    className: e0.oB,
                    ref: o,
                    children: [
                        (0, i.jsxs)("div", {
                            className: e0.Kk,
                            children: [
                                x.map((e, t) =>
                                    (0, i.jsx)(
                                        eV.Ae,
                                        {
                                            index: t,
                                            onItemLayout: j,
                                            children: (0, i.jsx)(eJ.V.Item, {
                                                id: e.id,
                                                "aria-label": e.label,
                                                children: e.label,
                                            }),
                                        },
                                        e.id,
                                    ),
                                ),
                                (0, i.jsx)("div", {
                                    ref: h,
                                    children: (0, i.jsx)(e5, { tabs: v, onTabSelect: r, selectedTab: s }),
                                }),
                            ],
                        }),
                        (0, i.jsxs)(eJ.V, {
                            "aria-label": Q.intl.string(Q.t.tcvVXM),
                            selectedItem: s,
                            type: "top-pill",
                            onItemSelect: r,
                            children: [
                                f.map((e) =>
                                    (0, i.jsx)(eJ.V.Item, { id: e.id, "aria-label": e.label, children: e.label }, e.id),
                                ),
                                0 !== v.length ? (0, i.jsx)(e5, { tabs: v, onTabSelect: r, selectedTab: s }) : null,
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
}
var e8 = l(538409),
    e4 = l(138298);
function e2(e) {
    let { guildId: t } = e,
        l = (0, d.bG)([C.A], () => C.A.getGuild(t)),
        { analyticsLocations: s } = (0, x.Ay)(u.A.MEMBER_SAFETY_PAGE),
        r = (0, d.bG)([I.Ay], () => I.Ay.getGuildSidebarState(t), [t]),
        a = n.useCallback(() => {
            e4.A.closeGuildSidebar(t);
        }, [t]),
        c = null != r;
    return null != l && c && null != r
        ? (0, i.jsx)(x.f5, {
              value: s,
              children: (0, i.jsx)("div", {
                  className: e0.__invalid_sidebarContainer,
                  style: { width: ed.da6 },
                  children: (0, i.jsx)(e8.default, {
                      userId: r.details.userId,
                      guildId: r.details.guildId,
                      onClose: a,
                  }),
              }),
          })
        : null;
}
var e3 = l(856768),
    e1 = l(785651),
    e9 = l(702841),
    te = l(717421),
    tt = l(144073),
    tl = l(151781),
    ts = l(189552),
    ti = l(728365),
    tn = l(749060),
    tr = l(779545);
function ta(e) {
    let { guild: t } = e,
        l = (0, tt.Ms)(t.id),
        s = (0, te.z)({ height: 3 * !!l, config: e1.config.stiff });
    return (0, i.jsx)("div", {
        className: eL.NQ,
        children: (0, i.jsx)(e1.animated.div, { className: eL.b0, style: s }),
    });
}
function td(e) {
    let { guild: t, className: l, onPageChange: s, onMemberSelect: r } = e,
        d = t.id,
        c = (0, e9.bG)([tl.A], () => tl.A.getEstimatedMemberSearchCountByGuildId(d), [d]),
        u = (0, tt.Ms)(d),
        x = (0, tt.Wl)(d),
        m = n.useCallback(
            (e) => {
                null != e && r?.(e);
            },
            [r],
        ),
        j = (0, ts.ii)(x, u, c),
        h = n.useRef(null),
        A = n.useRef(null),
        E = n.useCallback(() => {
            h.current?.resetSearchText();
        }, []);
    return (0, i.jsx)("div", {
        className: a()(eL.FV, l),
        children: (0, i.jsxs)(o.Ch, {
            className: eL.Hk,
            ref: A,
            orientation: "horizontal",
            children: [
                (0, i.jsx)(tr.A, { guild: t, ref: h }),
                (0, i.jsx)(ta, { guild: t }),
                (0, i.jsx)(ti.A, { guild: t, onSelectRow: m, searchState: j, onResetForNewMembers: E }),
                j !== ts.IY.SUCCESS_STILL_INDEXING && (0, i.jsx)(tn.A, { guildId: t.id, onPageChange: s }),
            ],
        }),
    });
}
var tc = l(746080),
    to = l(964623);
function tu(e) {
    let { guild: t, currentTab: l, onTabSelect: s } = e,
        n = (0, E.W)(t.id),
        r = Q.intl.string(Q.t.oclz3Z),
        a = Q.intl.string(Q.t.oclz3Z);
    return (
        (0, m.HU)({ location: t.name, subsection: r }),
        (0, i.jsxs)(T.A, {
            className: e0.wx,
            innerClassname: e0.__invalid_innerHeader,
            channelId: tc.VV.MEMBER_SAFETY,
            guildId: t.id,
            hideSearch: !0,
            children: [
                (0, i.jsx)(T.A.Icon, { icon: c.n, "aria-hidden": !0 }),
                (0, i.jsx)(T.A.Title, { children: a }),
                n && (0, i.jsx)(e6, { guildId: t.id, currentTab: l, onTabSelect: s }),
            ],
        })
    );
}
function tx(e) {
    let { guildId: t } = e,
        l = (0, N.H)({ guildId: t }) ?? 0,
        [s, r] = n.useState(l > 0 ? M.PENDING : M.ALL_MEMBERS),
        c = (0, d.bG)([C.A], () => C.A.getGuild(t)),
        { analyticsLocations: m } = (0, x.Ay)(u.A.MEMBER_SAFETY_PAGE),
        E = v({ guildId: t }),
        { guildJoinRequests: f } = S({
            guildId: t,
            applicationStatus: "ALL_MEMBERS" === s ? A.B5.SUBMITTED : s,
            sortOrder: E,
        });
    n.useEffect(() => {
        c?.features.has(ed.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) || r(M.ALL_MEMBERS);
    }, [c]);
    let T = (0, p.fw)(t),
        D = (0, j.q)(t),
        G = n.useRef(null);
    n.useEffect(
        () => (
            _.Cf(t),
            () => {
                _.G9(t);
            }
        ),
        [t],
    );
    let { fetchNextPage: L } = (0, g.K)({ guildId: t, guildJoinRequests: f }),
        y = n.useCallback(async () => {
            if (s === M.ALL_MEMBERS) return;
            let e = G.current?.getScrollerState();
            null == e || (e.scrollHeight - e.scrollTop - e.offsetHeight < 200 && (await L(E, s)));
        }, [s, s, E, L]),
        P = n.useCallback(
            async (e) => {
                s === e || (r(e), h.A.setSelectedGuildJoinRequest(t, null), "ALL_MEMBERS" !== e && (await L(E, e)));
            },
            [s, t, L, E],
        );
    n.useEffect(() => {
        if (!T && null != c) {
            let e = R.Ay.getDefaultChannel(c.id)?.id;
            (0, b.uh)(c.id, e);
        }
    }, [c, T]);
    let B = (0, d.bG)([I.Ay], () => null != I.Ay.getGuildSidebarState(t), [t]);
    return null != c && T
        ? (0, i.jsxs)(x.f5, {
              value: m,
              children: [
                  (0, i.jsxs)("div", {
                      className: a()(to.TE, e0.MY, { [to.js]: B }),
                      children: [
                          (0, i.jsx)(tu, { guild: c, currentTab: s, onTabSelect: P }),
                          (0, i.jsx)(o.Ch, {
                              onScroll: y,
                              ref: G,
                              orientation: "vertical",
                              children: (0, i.jsx)("div", {
                                  className: a()(to.Qs, e0.kL),
                                  children:
                                      s === M.ALL_MEMBERS
                                          ? (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                    (0, i.jsx)(eF.A, { guild: c }),
                                                    (0, i.jsx)(td, { guild: c }),
                                                ],
                                            })
                                          : (0, i.jsx)(eO, { guildId: c.id, currentTab: s }),
                              }),
                          }),
                          (0, i.jsx)(e3.A, { guildId: c.id }),
                      ],
                  }),
                  D && (s === M.ALL_MEMBERS ? (0, i.jsx)(e2, { guildId: c.id }) : (0, i.jsx)(eN, { guildId: c.id })),
              ],
          })
        : null;
}
