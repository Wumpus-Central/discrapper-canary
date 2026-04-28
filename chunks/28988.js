t.r(l), t.d(l, { default: () => ls });
var s,
    i = t(627968),
    n = t(64700),
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
    E = t(513461),
    A = t(496767),
    g = t(663997),
    f = t(844944);
function v(e) {
    let { guildId: l } = e;
    return (0, d.bG)([f.A], () => f.A.getSelectedSortOrder(l), [l]);
}
function S(e) {
    let { guildId: l, applicationStatus: t, sortOrder: s } = e,
        i = (0, d.bG)([f.A], () => f.A.getRequests(l, t), [t, l]);
    return { guildJoinRequests: n.useMemo(() => (s === E._e.TIMESTAMP_DESC ? [...i].reverse() : i), [s, i]) };
}
var b = t(786180),
    N = t(742589),
    T = t(976860),
    R = t(761640),
    I = t(808728),
    M = t(71393),
    C =
        (((s = {}).ALL_MEMBERS = "ALL_MEMBERS"),
        (s[(s.PENDING = E.B5.SUBMITTED)] = "PENDING"),
        (s[(s.REJECTED = E.B5.REJECTED)] = "REJECTED"),
        (s[(s.APPROVED = E.B5.APPROVED)] = "APPROVED"),
        s),
    p = t(134413),
    _ = t(361610),
    D = t(989349),
    y = t.n(D),
    G = t(939249),
    P = t(834730),
    L = t(97808),
    B = t(778712),
    k = t(789645),
    U = t(628284),
    w = t(285796),
    O = t(534890),
    F = t(661531),
    q = t(364522);
function V(e) {
    let { guildId: l } = e;
    return (0, d.bG)([f.A], () => f.A.getSelectedGuildJoinRequest(l), [l]);
}
var z = t(231483),
    X = t(287809),
    W = t(31457),
    H = t(414626),
    J = t(601047),
    K = t(273926),
    Y = t(453016),
    Q = t(985018);
let Z = function (e) {
    let { guildId: l, formFields: t, user: s, showRequirements: n = !0 } = e;
    return null == (0, d.bG)([X.default], () => s ?? X.default.getCurrentUser())
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  n && (0, i.jsx)(W.fu, { icon: z.l, text: Q.intl.string(Q.t.v2z4c1), meetsRequirement: !0 }),
                  t.map((e, l) =>
                      (function (e, l) {
                          switch (e.field_type) {
                              case E.rX.TERMS:
                                  return (0, i.jsx)(K.LK, { formField: e }, l);
                              case E.rX.TEXT_INPUT:
                                  return (0, i.jsx)(Y.aS, { formField: e }, l);
                              case E.rX.PARAGRAPH:
                                  return (0, i.jsx)(J.P1, { formField: e }, l);
                              case E.rX.MULTIPLE_CHOICE:
                                  return (0, i.jsx)(H.CI, { formField: e }, l);
                          }
                      })(e, l),
                  ),
              ],
          });
};
var $ = t(123393),
    ee = t(534400),
    el = t(975732),
    et = t(889227),
    es = t(935208),
    ei = t(427262),
    en = t(652215),
    er = t(743981),
    ea = t(982186),
    ed = t(637498);
function ec(e) {
    let { icon: l, label: t, onClick: s, disabled: n } = e;
    return (0, i.jsxs)(G.D, {
        className: a()(ea.hP, { [ea.r9]: n }),
        onClick: n ? en.tEg : s,
        "aria-label": t,
        children: [
            (0, i.jsx)(l, { size: "custom", color: "currentColor", width: 20, height: 20 }),
            (0, i.jsx)(P.E, { variant: "text-sm/normal", color: "none", children: t }),
        ],
    });
}
function eo(e) {
    let { user: l, guildId: t, joinRequest: s } = e,
        { analyticsLocations: n } = (0, x.Ay)(),
        r = () => {
            (0, el.openUserProfileModal)({ userId: l.id, joinRequestId: s.joinRequestId, sourceAnalyticsLocations: n });
        };
    return (0, i.jsxs)("div", {
        className: ea.op,
        children: [
            (0, i.jsxs)("div", {
                className: ed.FD,
                children: [
                    (0, i.jsx)(G.D, {
                        onClick: r,
                        className: a()(ea.vk, ed.Wn),
                        children: (0, i.jsx)(L.eu, {
                            src: l.getAvatarURL(t, 48),
                            "aria-label": l.username,
                            size: B._3.SIZE_48,
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        className: ed.oS,
                        children: [
                            (0, i.jsxs)("div", {
                                className: ed.K$,
                                children: [
                                    (0, i.jsx)(G.D, {
                                        onClick: r,
                                        className: ea.vk,
                                        children: (0, i.jsx)(P.E, {
                                            variant: "text-lg/medium",
                                            children: l?.globalName,
                                        }),
                                    }),
                                    (0, i.jsx)(ee.Ay, {
                                        primaryGuild: l?.primaryGuild,
                                        userId: l?.id,
                                        contextGuildId: t,
                                        badgeSize: er.Sl.SIZE_16,
                                        textVariant: "heading-md/semibold",
                                        className: ed.Dz,
                                        containerClassName: ed.UL,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(G.D, {
                                onClick: r,
                                className: ea.vk,
                                children: (0, i.jsx)(P.E, {
                                    variant: "text-md/medium",
                                    color: "text-default",
                                    children: ei.Ay.getUserTag(l),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(G.D, {
                className: ed.d4,
                onClick: () => h.A.setSelectedGuildJoinRequest(t, null),
                children: (0, i.jsx)(k.P, { size: "md", color: "currentColor" }),
            }),
        ],
    });
}
function eu(e) {
    let { user: l, guildId: t, joinRequest: s } = e,
        {
            approveRequest: n,
            rejectRequest: r,
            handleOpenInterview: a,
            submitting: d,
        } = (0, $.W)(t, l.id, s.joinRequestId, s.interviewChannelId);
    return (0, i.jsxs)("div", {
        className: ea.$l,
        children: [
            (0, i.jsx)(ec, { icon: U.y, label: Q.intl.string(Q.t.BzjDQJ), onClick: n, disabled: d }),
            (0, i.jsx)(ec, { icon: w.a, label: Q.intl.string(Q.t.hDtbsz), onClick: r, disabled: d }),
            (0, i.jsx)(ec, { icon: O.o, label: Q.intl.string(Q.t.KQeYoC), onClick: a, disabled: d }),
        ],
    });
}
function ex(e) {
    let { joinRequest: l } = e,
        { actionedAt: t, actionedByUser: s, rejectionReason: n } = l;
    return (0, i.jsxs)("div", {
        className: ea.Ik,
        children: [
            (0, i.jsx)(w.a, {
                size: "lg",
                color: F.A.colors.BACKGROUND_BASE_LOWER,
                secondaryColor: F.A.colors.INTERACTIVE_TEXT_DEFAULT,
            }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(P.E, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        children: Q.intl.string(Q.t.bSZkla),
                    }),
                    null != s && null != t
                        ? (0, i.jsxs)("div", {
                              className: ea.Ay,
                              children: [
                                  (0, i.jsx)(P.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: Q.intl.formatToPlainString(Q.t.qnimbL, {
                                          username: s.global_name ?? s.username,
                                      }),
                                  }),
                                  (0, i.jsx)("div", { className: ea.Om }),
                                  (0, i.jsx)(P.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: y()(es.default.extractTimestamp(t)).format("ll"),
                                  }),
                              ],
                          })
                        : null,
                    null != n &&
                        (0, i.jsx)(P.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: Q.intl.formatToPlainString(Q.t.fU5PPM, { rejectionReason: n }),
                        }),
                ],
            }),
        ],
    });
}
function em(e) {
    let { joinRequest: l } = e,
        { actionedAt: t, actionedByUser: s } = l;
    return (0, i.jsxs)("div", {
        className: ea.Ik,
        children: [
            (0, i.jsx)(U.y, {
                size: "lg",
                color: F.A.colors.STATUS_POSITIVE_BACKGROUND,
                secondaryColor: F.A.colors.STATUS_POSITIVE_TEXT,
            }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(P.E, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        children: Q.intl.string(Q.t.aURgY2),
                    }),
                    null != s && null != t
                        ? (0, i.jsxs)("div", {
                              className: ea.Ay,
                              children: [
                                  (0, i.jsx)(P.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: Q.intl.formatToPlainString(Q.t.qnimbL, {
                                          username: s.global_name ?? s.username,
                                      }),
                                  }),
                                  (0, i.jsx)("div", { className: ea.Om }),
                                  (0, i.jsx)(P.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: y()(es.default.extractTimestamp(t)).format("ll"),
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
        ],
    });
}
function ej(e) {
    let { user: l, joinRequest: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(P.E, {
                className: ea._3,
                variant: "text-sm/medium",
                color: "text-muted",
                children: Q.intl.string(Q.t["ldCE/p"]),
            }),
            (0, i.jsxs)("div", {
                className: ea.TT,
                children: [
                    (0, i.jsxs)("div", {
                        className: ea.lj,
                        children: [
                            (0, i.jsx)(P.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: Q.intl.string(Q.t.SaDIpL),
                            }),
                            (0, i.jsx)(P.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: y()(es.default.extractTimestamp(l.id)).format("ll"),
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: ea.lj,
                        children: [
                            (0, i.jsx)(P.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: Q.intl.string(Q.t["Vt4cn+"]),
                            }),
                            (0, i.jsx)(P.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: y()(t.createdAt).format("ll"),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function eh(e) {
    let { guildId: l } = e,
        t = V({ guildId: l }),
        { user: s } = t ?? {},
        r = n.useMemo(() => t?.formResponses ?? [], [t?.formResponses]),
        c = n.useMemo(() => (null != s ? new et.A(s) : null), [s]),
        o = (0, d.bG)([M.A], () => M.A.getGuild(l), [l]);
    return ((0, m.HU)({ subsection: Q.intl.string(Q.t.nqrK8X), location: o?.name }),
    null == t || null == o || null == c || null == s)
        ? null
        : (0, i.jsx)("section", {
              className: ea.pz,
              children: (0, i.jsx)(q.Ip, {
                  children: (0, i.jsxs)("div", {
                      className: ea.WH,
                      children: [
                          (0, i.jsxs)("div", {
                              className: ea.Ui,
                              children: [
                                  (0, i.jsx)(eo, { user: c, guildId: l, joinRequest: t }),
                                  t.applicationStatus === E.B5.SUBMITTED &&
                                      (0, i.jsx)(eu, { user: c, guildId: l, joinRequest: t }),
                                  t.applicationStatus === E.B5.REJECTED && (0, i.jsx)(ex, { joinRequest: t }),
                                  t.applicationStatus === E.B5.APPROVED && (0, i.jsx)(em, { joinRequest: t }),
                              ],
                          }),
                          (0, i.jsxs)("div", {
                              className: a()(ea.Ui, ea.gi),
                              children: [
                                  (0, i.jsx)(Z, { guildId: o.id, formFields: r, user: c, showRequirements: !1 }),
                                  (0, i.jsx)(ej, { guildId: l, user: c, joinRequest: t }),
                              ],
                          }),
                      ],
                  }),
              }),
          });
}
var eE = t(990078),
    eA = t(933832),
    eg = t(534514),
    ef = t(530005),
    ev = t(442433),
    eS = t(966327),
    eb = t(532197),
    eN = t(831084),
    eT = t(494213),
    eR = t(301050),
    eI = t(62255);
function eM(e) {
    let l,
        t,
        { status: s } = e;
    switch (s) {
        case E.B5.REJECTED:
            (l = Q.t["7YSJ6f"]), (t = Q.t.i05OUR);
            break;
        case E.B5.APPROVED:
            (l = Q.t.bv82GS), (t = Q.t.D4OUHT);
            break;
        default:
            (l = Q.t["/wqiSv"]), (t = Q.t.o47YZs);
    }
    return (0, i.jsxs)("div", {
        className: eN.do,
        children: [
            (0, i.jsx)(eA.A, { size: "md", color: "currentColor", className: eN.AI }),
            (0, i.jsx)(eg.D, { variant: "heading-md/medium", children: Q.intl.string(l) }),
            (0, i.jsx)(P.E, { color: "text-muted", variant: "text-sm/medium", children: Q.intl.string(t) }),
        ],
    });
}
function eC(e) {
    let { sortOrder: l, onSortChange: t } = e;
    return (0, i.jsx)("thead", {
        children: (0, i.jsxs)("tr", {
            className: eR.Yk,
            children: [
                (0, i.jsx)("th", {
                    className: eN.e4,
                    children: (0, i.jsx)(P.E, {
                        variant: "eyebrow",
                        color: "interactive-text-default",
                        children: Q.intl.string(Q.t.Es7n9c),
                    }),
                }),
                (0, i.jsx)("th", {
                    className: a()(eN.e4, eI.QB),
                    children: (0, i.jsxs)(G.D, {
                        className: eN.KF,
                        onClick: t,
                        children: [
                            (0, i.jsx)(P.E, {
                                variant: "eyebrow",
                                color: "interactive-text-default",
                                children: Q.intl.string(Q.t.EZ5QWL),
                            }),
                            l === E._e.TIMESTAMP_ASC
                                ? (0, i.jsx)(eb.A, { className: eN.GM, direction: eb.A.Directions.UP })
                                : (0, i.jsx)(eb.A, { className: eN.GM, direction: eb.A.Directions.DOWN }),
                        ],
                    }),
                }),
                (0, i.jsx)("th", {
                    className: a()(eN.e4, eN.UX),
                    children: (0, i.jsx)(P.E, {
                        variant: "eyebrow",
                        color: "interactive-text-default",
                        children: Q.intl.string(Q.t["5Q9xGr"]),
                    }),
                }),
            ],
        }),
    });
}
let ep = n.memo(function (e) {
        let { joinRequest: l, user: t } = e,
            { joinRequestId: s, guildId: r } = l,
            { analyticsLocations: a } = (0, x.Ay)(),
            d = n.useCallback(
                (e) => {
                    e.stopPropagation(),
                        e.preventDefault(),
                        (0, el.openUserProfileModal)({ userId: t.id, joinRequestId: s, sourceAnalyticsLocations: a });
                },
                [t, s, a],
            );
        return (0, i.jsxs)("div", {
            className: eI.FD,
            children: [
                (0, i.jsx)(G.D, { className: eI.Wn, onClick: d, children: (0, i.jsx)(eS.A, { user: t }) }),
                (0, i.jsx)("div", {
                    className: eI.eg,
                    children: (0, i.jsx)(P.E, {
                        variant: "text-sm/medium",
                        children: (0, i.jsxs)(G.D, {
                            onClick: d,
                            className: eI.VW,
                            children: [
                                t.globalName,
                                (0, i.jsx)(ee.Ay, {
                                    primaryGuild: t?.primaryGuild,
                                    userId: t?.id,
                                    contextGuildId: r,
                                    containerClassName: eI.Dz,
                                }),
                            ],
                        }),
                    }),
                }),
                (0, i.jsx)("div", {
                    className: eI.Br,
                    children: (0, i.jsx)(P.E, {
                        variant: "text-xs/normal",
                        color: "text-default",
                        tag: "span",
                        children: (0, i.jsx)(G.D, { onClick: d, tag: "span", children: ei.Ay.getUserTag(t) }),
                    }),
                }),
            ],
        });
    }),
    e_ = n.memo(function (e) {
        let { joinRequest: l, onSelect: s } = e,
            { guildId: r, createdAt: c, applicationStatus: o } = l,
            u = n.useMemo(() => new et.A(l.user), [l.user]),
            x = V({ guildId: r }),
            m = (0, d.bG)([M.A], () => M.A.getGuild(r)),
            j = o === E.B5.SUBMITTED;
        return null == u
            ? null
            : (0, i.jsxs)("tr", {
                  onClick: s,
                  className: a()(eI.yF, eI.iA, { [eI.wH]: x?.joinRequestId === l.joinRequestId }),
                  children: [
                      (0, i.jsx)("td", { children: (0, i.jsx)(ep, { joinRequest: l, user: u }) }),
                      (0, i.jsx)("td", {
                          className: eI.QB,
                          children: (0, i.jsx)(P.E, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              children: y()(c).format("lll"),
                          }),
                      }),
                      (0, i.jsx)("td", {
                          className: eN.UX,
                          children:
                              j &&
                              (0, i.jsx)(eE.m, {
                                  text: Q.intl.string(Q.t.x8Nn4M),
                                  children: (0, i.jsx)(G.D, {
                                      onClick: (e) => {
                                          (0, ev.L3)(
                                              e,
                                              async () => {
                                                  let { default: e } = await t.e("32660").then(t.bind(t, 772063));
                                                  return (l) => (0, i.jsx)(e, { ...l, guild: m, user: u });
                                              },
                                              { position: "bottom", align: "right" },
                                          );
                                      },
                                      className: eI.x6,
                                      children: (0, i.jsx)(ef.F, {
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
    eD = () => {
        let e = `${Math.floor(50 * Math.random()) + 100}px`,
            l = `${Math.floor(50 * Math.random()) + 100}px`,
            t = `${Math.floor(25 * Math.random()) + 50}px`;
        return (0, i.jsxs)("tr", {
            className: a()(eI.yF, eI.iA),
            children: [
                (0, i.jsx)("td", {
                    children: (0, i.jsxs)("div", {
                        className: eI.FD,
                        children: [
                            (0, i.jsx)("div", { className: a()(eN.RH, eI.Wn) }),
                            (0, i.jsx)("div", {
                                className: eI.eg,
                                children: (0, i.jsx)("div", { className: eN.RC, style: { width: e } }),
                            }),
                            (0, i.jsx)("div", {
                                className: eI.Br,
                                children: (0, i.jsx)("div", { className: eN.w7, style: { width: l } }),
                            }),
                        ],
                    }),
                }),
                (0, i.jsx)("td", {
                    className: eI.QB,
                    children: (0, i.jsx)("div", { className: eN.RC, style: { width: t } }),
                }),
                (0, i.jsx)("td", { className: eN.UX }),
            ],
        });
    };
function ey(e) {
    let { guildId: l, currentTab: t } = e,
        s = n.useRef(null),
        r = (0, d.bG)([M.A], () => M.A.getGuild(l)),
        a = v({ guildId: l }),
        c = (0, d.bG)([f.A], () => f.A.isFetching()),
        { guildJoinRequests: u } = S({ guildId: l, applicationStatus: t, sortOrder: a }),
        { fetchNextPage: x } = (0, g.K)({ guildId: l, guildJoinRequests: u }),
        m = n.useCallback(async () => {
            let e = a === E._e.TIMESTAMP_ASC ? E._e.TIMESTAMP_DESC : E._e.TIMESTAMP_ASC;
            h.A.setSelectedSortOrder(l, e), await x(e, t);
        }, [a, l, x, t]);
    return null == r
        ? null
        : (0, i.jsx)("div", {
              className: eT.FV,
              children: (0, i.jsx)(o.Ch, {
                  className: eT.A0,
                  ref: s,
                  orientation: "horizontal",
                  children: (0, i.jsxs)("table", {
                      className: eN.tp,
                      children: [
                          (0, i.jsx)(eC, { sortOrder: a, onSortChange: m }),
                          (0, i.jsx)("tbody", {
                              children: c
                                  ? [, , , , ,].fill(0).map((e, l) => (0, i.jsx)(eD, {}, `placeholder-${l}`))
                                  : 0 === u.length
                                    ? (0, i.jsx)("td", { colSpan: 3, children: (0, i.jsx)(eM, { status: t }) })
                                    : u.map((e) =>
                                          (0, i.jsx)(
                                              e_,
                                              { joinRequest: e, onSelect: () => h.A.setSelectedGuildJoinRequest(l, e) },
                                              e.joinRequestId,
                                          ),
                                      ),
                          }),
                      ],
                  }),
              }),
          });
}
var eG = t(465917),
    eP = t(3666),
    eL = t(462887),
    eB = t(550079),
    ek = t(477782),
    eU = t(922016),
    ew = t(761508),
    eO = t(900797),
    eF = t(847374),
    eq = t(770178),
    eV = t(765548),
    ez = t(736653),
    eX = t(256177);
let eW = (e) => {
    let { tabs: l, selectedTab: t, onTabSelect: s, onClose: n } = e;
    return (0, i.jsx)(eB.W, {
        "data-menu-migrated-auto": !0,
        navId: "members-tabs-overflow-menu",
        "aria-label": Q.intl.string(Q.t.riPnr0),
        hideScroller: !0,
        onClose: n,
        onSelect: n,
        children: (0, i.jsx)(
            ek.rX,
            {
                children: l.map((e) => {
                    let { id: l, label: n } = e;
                    return (0, i.jsx)(
                        ek.Dr,
                        {
                            id: l,
                            label: n,
                            icon: l === t ? U.y : void 0,
                            leadingAccessory: l === t ? { type: "icon", icon: U.y } : void 0,
                            action: () => s(l),
                        },
                        l,
                    );
                }),
            },
            "applications-overflow-tabs",
        ),
    });
};
function eH(e) {
    let { onTabSelect: l, tabs: t, selectedTab: s } = e,
        r = n.useRef(null),
        d = (0, ez.Ay)(),
        c = (0, eL.M)(d),
        o = n.useMemo(
            () =>
                null !=
                t.find((e) => {
                    let { id: l } = e;
                    return l === s;
                }),
            [s, t],
        ),
        u = o ? "text-strong" : c ? "text-muted" : "text-strong",
        x = o ? F.A.colors.TEXT_STRONG : c ? F.A.colors.TEXT_MUTED : F.A.colors.TEXT_STRONG;
    return (0, i.jsx)(eU.Y, {
        targetElementRef: r,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(eW, { selectedTab: s, onClose: n, tabs: t, onTabSelect: l });
        },
        position: "bottom",
        align: "left",
        children: (e, l) => {
            let { isShown: t } = l;
            return (0, i.jsxs)(ew.V.Item, {
                ...e,
                id: "more",
                clickableInnerRef: r,
                color: "text-muted",
                className: a()(eX.OS, { [eX.wH]: o }),
                "aria-label": Q.intl.string(Q.t["UKOtz+"]),
                children: [
                    (0, i.jsx)(P.E, { variant: "text-md/medium", color: u, children: Q.intl.string(Q.t["UKOtz+"]) }),
                    t ? (0, i.jsx)(eO.t, { size: "sm", color: x }) : (0, i.jsx)(eF.a, { size: "sm", color: x }),
                ],
            });
        },
    });
}
function eJ(e) {
    let l,
        { guildId: t, currentTab: s, onTabSelect: r } = e,
        [a, c] = n.useState(0),
        o = n.useRef(null),
        u = n.useRef(a),
        x =
            ((l = (0, b.H)({ guildId: t }) ?? 0),
            [
                { id: C.ALL_MEMBERS, label: Q.intl.string(Q.t.NOOm1Z) },
                {
                    id: C.PENDING,
                    label:
                        l > 0 ? Q.intl.formatToPlainString(Q.t["Wo+zL0"], { count: l }) : Q.intl.string(Q.t["4eQVBO"]),
                },
                { id: C.REJECTED, label: Q.intl.string(Q.t.bSZkla) },
                { id: C.APPROVED, label: Q.intl.string(Q.t.aURgY2) },
            ]),
        {
            lastVisibleIndex: m,
            onItemLayout: j,
            overflowItemsRef: h,
        } = (0, eP.Wv)({ items: x, itemGapPx: 16, maxLines: 1, containerWidth: a - 200 }),
        E = (0, d.bG)([R.Ay], () => null != R.Ay.getGuildSidebarState(t), [t]),
        A = V({ guildId: t }),
        g = n.useMemo(() => (s === C.ALL_MEMBERS ? E : null != A && null != A.user), [s, E, A]),
        f = n.useMemo(() => x.slice(0, m + 1), [m, x]),
        v = n.useMemo(() => x.slice(m + 1), [m, x]),
        S = (0, eV.A)((e) => {
            let l = e.contentRect.width;
            null != l && u.current !== l && (c(l), (u.current = l));
        });
    return (
        (0, eq.g)(o, S, [g]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(N.A.Divider, { className: eX.yF }),
                (0, i.jsxs)("div", {
                    className: eX.oB,
                    ref: o,
                    children: [
                        (0, i.jsxs)("div", {
                            className: eX.Kk,
                            children: [
                                x.map((e, l) =>
                                    (0, i.jsx)(
                                        eP.Ae,
                                        {
                                            index: l,
                                            onItemLayout: j,
                                            children: (0, i.jsx)(ew.V.Item, {
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
                                    children: (0, i.jsx)(eH, { tabs: v, onTabSelect: r, selectedTab: s }),
                                }),
                            ],
                        }),
                        (0, i.jsxs)(ew.V, {
                            "aria-label": Q.intl.string(Q.t.tcvVXM),
                            selectedItem: s,
                            type: "top-pill",
                            onItemSelect: r,
                            children: [
                                f.map((e) =>
                                    (0, i.jsx)(ew.V.Item, { id: e.id, "aria-label": e.label, children: e.label }, e.id),
                                ),
                                0 !== v.length ? (0, i.jsx)(eH, { tabs: v, onTabSelect: r, selectedTab: s }) : null,
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
}
var eK = t(538409),
    eY = t(138298);
function eQ(e) {
    let { guildId: l } = e,
        t = (0, d.bG)([M.A], () => M.A.getGuild(l)),
        { analyticsLocations: s } = (0, x.Ay)(u.A.MEMBER_SAFETY_PAGE),
        r = (0, d.bG)([R.Ay], () => R.Ay.getGuildSidebarState(l), [l]),
        a = n.useCallback(() => {
            eY.A.closeGuildSidebar(l);
        }, [l]),
        c = null != r;
    return null != t && c && null != r
        ? (0, i.jsx)(x.f5, {
              value: s,
              children: (0, i.jsx)("div", {
                  className: eX.__invalid_sidebarContainer,
                  style: { width: en.da6 },
                  children: (0, i.jsx)(eK.default, {
                      userId: r.details.userId,
                      guildId: r.details.guildId,
                      onClose: a,
                  }),
              }),
          })
        : null;
}
var eZ = t(856768),
    e$ = t(123924),
    e0 = t(702841),
    e7 = t(717421),
    e8 = t(144073),
    e4 = t(151781),
    e6 = t(189552),
    e5 = t(728365),
    e2 = t(749060),
    e9 = t(779545);
function e3(e) {
    let { guild: l } = e,
        t = (0, e8.Ms)(l.id),
        s = (0, e7.z)({ height: 3 * !!t, config: e$.config.stiff });
    return (0, i.jsx)("div", {
        className: eT.NQ,
        children: (0, i.jsx)(e$.animated.div, { className: eT.b0, style: s }),
    });
}
function e1(e) {
    let { guild: l, className: t, onPageChange: s, onMemberSelect: r } = e,
        d = l.id,
        c = (0, e0.bG)([e4.A], () => e4.A.getEstimatedMemberSearchCountByGuildId(d), [d]),
        u = (0, e8.Ms)(d),
        x = (0, e8.Wl)(d),
        m = n.useCallback(
            (e) => {
                null != e && r?.(e);
            },
            [r],
        ),
        j = (0, e6.ii)(x, u, c),
        h = n.useRef(null),
        E = n.useRef(null),
        A = n.useCallback(() => {
            h.current?.resetSearchText();
        }, []);
    return (0, i.jsx)("div", {
        className: a()(eT.FV, t),
        children: (0, i.jsxs)(o.Ch, {
            className: eT.A0,
            ref: E,
            orientation: "horizontal",
            children: [
                (0, i.jsx)(e9.A, { guild: l, ref: h }),
                (0, i.jsx)(e3, { guild: l }),
                (0, i.jsx)(e5.A, { guild: l, onSelectRow: m, searchState: j, onResetForNewMembers: A }),
                j !== e6.IY.SUCCESS_STILL_INDEXING && (0, i.jsx)(e2.A, { guildId: l.id, onPageChange: s }),
            ],
        }),
    });
}
var le = t(746080),
    ll = t(964623);
function lt(e) {
    let { guild: l, currentTab: t, onTabSelect: s } = e,
        n = (0, A.W)(l.id),
        r = Q.intl.string(Q.t.oclz3Z),
        a = Q.intl.string(Q.t.oclz3Z);
    return (
        (0, m.HU)({ location: l.name, subsection: r }),
        (0, i.jsxs)(N.A, {
            className: eX.wx,
            innerClassname: eX.__invalid_innerHeader,
            channelId: le.VV.MEMBER_SAFETY,
            guildId: l.id,
            hideSearch: !0,
            children: [
                (0, i.jsx)(N.A.Icon, { icon: c.n, "aria-hidden": !0 }),
                (0, i.jsx)(N.A.Title, { children: a }),
                n && (0, i.jsx)(eJ, { guildId: l.id, currentTab: t, onTabSelect: s }),
            ],
        })
    );
}
function ls(e) {
    let { guildId: l } = e,
        t = (0, b.H)({ guildId: l }) ?? 0,
        [s, r] = n.useState(t > 0 ? C.PENDING : C.ALL_MEMBERS),
        c = (0, d.bG)([M.A], () => M.A.getGuild(l)),
        { analyticsLocations: m } = (0, x.Ay)(u.A.MEMBER_SAFETY_PAGE),
        A = v({ guildId: l }),
        { guildJoinRequests: f } = S({
            guildId: l,
            applicationStatus: "ALL_MEMBERS" === s ? E.B5.SUBMITTED : s,
            sortOrder: A,
        });
    n.useEffect(() => {
        c?.features.has(en.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) || r(C.ALL_MEMBERS);
    }, [c]);
    let N = (0, p.fw)(l),
        D = (0, j.q)(l),
        y = n.useRef(null);
    n.useEffect(
        () => (
            _.Cf(l),
            () => {
                _.G9(l);
            }
        ),
        [l],
    );
    let { fetchNextPage: G } = (0, g.K)({ guildId: l, guildJoinRequests: f }),
        P = n.useCallback(async () => {
            if (s === C.ALL_MEMBERS) return;
            let e = y.current?.getScrollerState();
            null == e || (e.scrollHeight - e.scrollTop - e.offsetHeight < 200 && (await G(A, s)));
        }, [s, s, A, G]),
        L = n.useCallback(
            async (e) => {
                s === e || (r(e), h.A.setSelectedGuildJoinRequest(l, null), "ALL_MEMBERS" !== e && (await G(A, e)));
            },
            [s, l, G, A],
        );
    n.useEffect(() => {
        if (!N && null != c) {
            let e = I.Ay.getDefaultChannel(c.id)?.id;
            (0, T.uh)(c.id, e);
        }
    }, [c, N]);
    let B = (0, d.bG)([R.Ay], () => null != R.Ay.getGuildSidebarState(l), [l]);
    return null != c && N
        ? (0, i.jsxs)(x.f5, {
              value: m,
              children: [
                  (0, i.jsxs)("div", {
                      className: a()(ll.TE, eX.MY, { [ll.js]: B }),
                      children: [
                          (0, i.jsx)(lt, { guild: c, currentTab: s, onTabSelect: L }),
                          (0, i.jsx)(o.Ch, {
                              onScroll: P,
                              ref: y,
                              orientation: "vertical",
                              children: (0, i.jsx)("div", {
                                  className: a()(ll.Qs, eX.kL),
                                  children:
                                      s === C.ALL_MEMBERS
                                          ? (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                    (0, i.jsx)(eG.A, { guild: c }),
                                                    (0, i.jsx)(e1, { guild: c }),
                                                ],
                                            })
                                          : (0, i.jsx)(ey, { guildId: c.id, currentTab: s }),
                              }),
                          }),
                          (0, i.jsx)(eZ.A, { guildId: c.id }),
                      ],
                  }),
                  D && (s === C.ALL_MEMBERS ? (0, i.jsx)(eQ, { guildId: c.id }) : (0, i.jsx)(eh, { guildId: c.id })),
              ],
          })
        : null;
}
