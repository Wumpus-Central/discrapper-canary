"use strict";
n.r(t), n.d(t, { default: () => ts });
var s,
    l = n(627968),
    i = n(64700),
    a = n(503698),
    r = n.n(a),
    o = n(17928),
    c = n(177953),
    d = n(689175),
    u = n(793574),
    _ = n(688810),
    m = n(726249),
    x = n(985925),
    f = n(624458),
    h = n(513461),
    g = n(496767),
    b = n(663997),
    A = n(844944);
function j(e) {
    let { guildId: t } = e;
    return (0, o.bG)([A.A], () => A.A.getSelectedSortOrder(t), [t]);
}
function p(e) {
    let { guildId: t, applicationStatus: n, sortOrder: s } = e,
        l = (0, o.bG)([A.A], () => A.A.getRequests(t, n), [n, t]);
    return { guildJoinRequests: i.useMemo(() => (s === h._e.TIMESTAMP_DESC ? [...l].reverse() : l), [s, l]) };
}
var E = n(786180),
    v = n(742589),
    C = n(976860),
    R = n(761640),
    T = n(808728),
    I = n(71393),
    S =
        (((s = {}).ALL_MEMBERS = "ALL_MEMBERS"),
        (s[(s.PENDING = h.B5.SUBMITTED)] = "PENDING"),
        (s[(s.REJECTED = h.B5.REJECTED)] = "REJECTED"),
        (s[(s.APPROVED = h.B5.APPROVED)] = "APPROVED"),
        s),
    N = n(134413),
    M = n(361610),
    y = n(989349),
    D = n.n(y),
    L = n(939249),
    k = n(834730),
    P = n(97808),
    G = n(778712),
    w = n(789645),
    B = n(628284),
    O = n(285796),
    U = n(534890),
    F = n(661531),
    z = n(364522);
function H(e) {
    let { guildId: t } = e;
    return (0, o.bG)([A.A], () => A.A.getSelectedGuildJoinRequest(t), [t]);
}
var q = n(231483),
    V = n(287809),
    W = n(31457),
    Q = n(414626),
    X = n(601047),
    J = n(273926),
    K = n(453016),
    Y = n(985018);
let Z = function (e) {
    let { guildId: t, formFields: n, user: s, showRequirements: i = !0 } = e;
    return null == (0, o.bG)([V.default], () => s ?? V.default.getCurrentUser())
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  i && (0, l.jsx)(W.fu, { icon: q.l, text: Y.intl.string(Y.t.v2z4c1), meetsRequirement: !0 }),
                  n.map((e, t) =>
                      (function (e, t) {
                          switch (e.field_type) {
                              case h.rX.TERMS:
                                  return (0, l.jsx)(J.LK, { formField: e }, t);
                              case h.rX.TEXT_INPUT:
                                  return (0, l.jsx)(K.aS, { formField: e }, t);
                              case h.rX.PARAGRAPH:
                                  return (0, l.jsx)(X.P1, { formField: e }, t);
                              case h.rX.MULTIPLE_CHOICE:
                                  return (0, l.jsx)(Q.CI, { formField: e }, t);
                          }
                      })(e, t),
                  ),
              ],
          });
};
var $ = n(123393),
    ee = n(534400),
    et = n(975732),
    en = n(889227),
    es = n(935208),
    el = n(427262),
    ei = n(652215),
    ea = n(743981),
    er = n(982186),
    eo = n(637498);
function ec(e) {
    let { icon: t, label: n, onClick: s, disabled: i } = e;
    return (0, l.jsxs)(L.D, {
        className: r()(er.hP, { [er.r9]: i }),
        onClick: i ? ei.tEg : s,
        "aria-label": n,
        children: [
            (0, l.jsx)(t, { size: "custom", color: "currentColor", width: 20, height: 20 }),
            (0, l.jsx)(k.E, { variant: "text-sm/normal", color: "none", children: n }),
        ],
    });
}
function ed(e) {
    let { user: t, guildId: n, joinRequest: s } = e,
        { analyticsLocations: i } = (0, _.Ay)(),
        a = () => {
            (0, et.openUserProfileModal)({ userId: t.id, joinRequestId: s.joinRequestId, sourceAnalyticsLocations: i });
        };
    return (0, l.jsxs)("div", {
        className: er.op,
        children: [
            (0, l.jsxs)("div", {
                className: eo.FD,
                children: [
                    (0, l.jsx)(L.D, {
                        onClick: a,
                        className: r()(er.vk, eo.Wn),
                        children: (0, l.jsx)(P.eu, {
                            src: t.getAvatarURL(n, 48),
                            "aria-label": t.username,
                            size: G._3.SIZE_48,
                        }),
                    }),
                    (0, l.jsxs)("div", {
                        className: eo.oS,
                        children: [
                            (0, l.jsxs)("div", {
                                className: eo.K$,
                                children: [
                                    (0, l.jsx)(L.D, {
                                        onClick: a,
                                        className: er.vk,
                                        children: (0, l.jsx)(k.E, {
                                            variant: "text-lg/medium",
                                            children: t?.globalName,
                                        }),
                                    }),
                                    (0, l.jsx)(ee.Ay, {
                                        primaryGuild: t?.primaryGuild,
                                        userId: t?.id,
                                        contextGuildId: n,
                                        badgeSize: ea.Sl.SIZE_16,
                                        textVariant: "heading-md/semibold",
                                        className: eo.Dz,
                                        containerClassName: eo.UL,
                                    }),
                                ],
                            }),
                            (0, l.jsx)(L.D, {
                                onClick: a,
                                className: er.vk,
                                children: (0, l.jsx)(k.E, {
                                    variant: "text-md/medium",
                                    color: "text-default",
                                    children: el.Ay.getUserTag(t),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)(L.D, {
                className: eo.d4,
                onClick: () => f.A.setSelectedGuildJoinRequest(n, null),
                children: (0, l.jsx)(w.P, { size: "md", color: "currentColor" }),
            }),
        ],
    });
}
function eu(e) {
    let { user: t, guildId: n, joinRequest: s } = e,
        {
            approveRequest: i,
            rejectRequest: a,
            handleOpenInterview: r,
            submitting: o,
        } = (0, $.W)(n, t.id, s.joinRequestId, s.interviewChannelId);
    return (0, l.jsxs)("div", {
        className: er.$l,
        children: [
            (0, l.jsx)(ec, { icon: B.y, label: Y.intl.string(Y.t.BzjDQJ), onClick: i, disabled: o }),
            (0, l.jsx)(ec, { icon: O.a, label: Y.intl.string(Y.t.hDtbsz), onClick: a, disabled: o }),
            (0, l.jsx)(ec, { icon: U.o, label: Y.intl.string(Y.t.KQeYoC), onClick: r, disabled: o }),
        ],
    });
}
function e_(e) {
    let { joinRequest: t } = e,
        { actionedAt: n, actionedByUser: s, rejectionReason: i } = t;
    return (0, l.jsxs)("div", {
        className: er.Ik,
        children: [
            (0, l.jsx)(O.a, {
                size: "lg",
                color: F.A.colors.BACKGROUND_BASE_LOWER,
                secondaryColor: F.A.colors.INTERACTIVE_TEXT_DEFAULT,
            }),
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(k.E, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        children: Y.intl.string(Y.t.bSZkla),
                    }),
                    null != s && null != n
                        ? (0, l.jsxs)("div", {
                              className: er.Ay,
                              children: [
                                  (0, l.jsx)(k.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: Y.intl.formatToPlainString(Y.t.qnimbL, {
                                          username: s.global_name ?? s.username,
                                      }),
                                  }),
                                  (0, l.jsx)("div", { className: er.Om }),
                                  (0, l.jsx)(k.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: D()(es.default.extractTimestamp(n)).format("ll"),
                                  }),
                              ],
                          })
                        : null,
                    null != i &&
                        (0, l.jsx)(k.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: Y.intl.formatToPlainString(Y.t.fU5PPM, { rejectionReason: i }),
                        }),
                ],
            }),
        ],
    });
}
function em(e) {
    let { joinRequest: t } = e,
        { actionedAt: n, actionedByUser: s } = t;
    return (0, l.jsxs)("div", {
        className: er.Ik,
        children: [
            (0, l.jsx)(B.y, {
                size: "lg",
                color: F.A.colors.STATUS_POSITIVE_BACKGROUND,
                secondaryColor: F.A.colors.STATUS_POSITIVE_TEXT,
            }),
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(k.E, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        children: Y.intl.string(Y.t.aURgY2),
                    }),
                    null != s && null != n
                        ? (0, l.jsxs)("div", {
                              className: er.Ay,
                              children: [
                                  (0, l.jsx)(k.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: Y.intl.formatToPlainString(Y.t.qnimbL, {
                                          username: s.global_name ?? s.username,
                                      }),
                                  }),
                                  (0, l.jsx)("div", { className: er.Om }),
                                  (0, l.jsx)(k.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: D()(es.default.extractTimestamp(n)).format("ll"),
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
        ],
    });
}
function ex(e) {
    let { user: t, joinRequest: n } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(k.E, {
                className: er._3,
                variant: "text-sm/medium",
                color: "text-muted",
                children: Y.intl.string(Y.t["ldCE/p"]),
            }),
            (0, l.jsxs)("div", {
                className: er.TT,
                children: [
                    (0, l.jsxs)("div", {
                        className: er.lj,
                        children: [
                            (0, l.jsx)(k.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: Y.intl.string(Y.t.SaDIpL),
                            }),
                            (0, l.jsx)(k.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: D()(es.default.extractTimestamp(t.id)).format("ll"),
                            }),
                        ],
                    }),
                    (0, l.jsxs)("div", {
                        className: er.lj,
                        children: [
                            (0, l.jsx)(k.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: Y.intl.string(Y.t["Vt4cn+"]),
                            }),
                            (0, l.jsx)(k.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: D()(n.createdAt).format("ll"),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function ef(e) {
    let { guildId: t } = e,
        n = H({ guildId: t }),
        { user: s } = n ?? {},
        a = i.useMemo(() => n?.formResponses ?? [], [n?.formResponses]),
        c = i.useMemo(() => (null != s ? new en.A(s) : null), [s]),
        d = (0, o.bG)([I.A], () => I.A.getGuild(t), [t]);
    return ((0, m.HU)({ subsection: Y.intl.string(Y.t.nqrK8X), location: d?.name }),
    null == n || null == d || null == c || null == s)
        ? null
        : (0, l.jsx)("section", {
              className: er.pz,
              children: (0, l.jsx)(z.Ip, {
                  children: (0, l.jsxs)("div", {
                      className: er.WH,
                      children: [
                          (0, l.jsxs)("div", {
                              className: er.Ui,
                              children: [
                                  (0, l.jsx)(ed, { user: c, guildId: t, joinRequest: n }),
                                  n.applicationStatus === h.B5.SUBMITTED &&
                                      (0, l.jsx)(eu, { user: c, guildId: t, joinRequest: n }),
                                  n.applicationStatus === h.B5.REJECTED && (0, l.jsx)(e_, { joinRequest: n }),
                                  n.applicationStatus === h.B5.APPROVED && (0, l.jsx)(em, { joinRequest: n }),
                              ],
                          }),
                          (0, l.jsxs)("div", {
                              className: r()(er.Ui, er.gi),
                              children: [
                                  (0, l.jsx)(Z, { guildId: d.id, formFields: a, user: c, showRequirements: !1 }),
                                  (0, l.jsx)(ex, { guildId: t, user: c, joinRequest: n }),
                              ],
                          }),
                      ],
                  }),
              }),
          });
}
var eh = n(990078),
    eg = n(933832),
    eb = n(534514),
    eA = n(530005),
    ej = n(442433),
    ep = n(966327),
    eE = n(532197),
    ev = n(831084),
    eC = n(494213),
    eR = n(301050),
    eT = n(62255);
function eI(e) {
    let t,
        n,
        { status: s } = e;
    switch (s) {
        case h.B5.REJECTED:
            (t = Y.t["7YSJ6f"]), (n = Y.t.i05OUR);
            break;
        case h.B5.APPROVED:
            (t = Y.t.bv82GS), (n = Y.t.D4OUHT);
            break;
        default:
            (t = Y.t["/wqiSv"]), (n = Y.t.o47YZs);
    }
    return (0, l.jsxs)("div", {
        className: ev.do,
        children: [
            (0, l.jsx)(eg.A, { size: "md", color: "currentColor", className: ev.AI }),
            (0, l.jsx)(eb.D, { variant: "heading-md/medium", children: Y.intl.string(t) }),
            (0, l.jsx)(k.E, { color: "text-muted", variant: "text-sm/medium", children: Y.intl.string(n) }),
        ],
    });
}
function eS(e) {
    let { sortOrder: t, onSortChange: n } = e;
    return (0, l.jsx)("thead", {
        children: (0, l.jsxs)("tr", {
            className: eR.Yk,
            children: [
                (0, l.jsx)("th", {
                    className: ev.e4,
                    children: (0, l.jsx)(k.E, {
                        variant: "eyebrow",
                        color: "interactive-text-default",
                        children: Y.intl.string(Y.t.Es7n9c),
                    }),
                }),
                (0, l.jsx)("th", {
                    className: r()(ev.e4, eT.QB),
                    children: (0, l.jsxs)(L.D, {
                        className: ev.KF,
                        onClick: n,
                        children: [
                            (0, l.jsx)(k.E, {
                                variant: "eyebrow",
                                color: "interactive-text-default",
                                children: Y.intl.string(Y.t.EZ5QWL),
                            }),
                            t === h._e.TIMESTAMP_ASC
                                ? (0, l.jsx)(eE.A, { className: ev.GM, direction: eE.A.Directions.UP })
                                : (0, l.jsx)(eE.A, { className: ev.GM, direction: eE.A.Directions.DOWN }),
                        ],
                    }),
                }),
                (0, l.jsx)("th", {
                    className: r()(ev.e4, ev.UX),
                    children: (0, l.jsx)(k.E, {
                        variant: "eyebrow",
                        color: "interactive-text-default",
                        children: Y.intl.string(Y.t["5Q9xGr"]),
                    }),
                }),
            ],
        }),
    });
}
let eN = i.memo(function (e) {
        let { joinRequest: t, user: n } = e,
            { joinRequestId: s, guildId: a } = t,
            { analyticsLocations: r } = (0, _.Ay)(),
            o = i.useCallback(
                (e) => {
                    e.stopPropagation(),
                        e.preventDefault(),
                        (0, et.openUserProfileModal)({ userId: n.id, joinRequestId: s, sourceAnalyticsLocations: r });
                },
                [n, s, r],
            );
        return (0, l.jsxs)("div", {
            className: eT.FD,
            children: [
                (0, l.jsx)(L.D, { className: eT.Wn, onClick: o, children: (0, l.jsx)(ep.A, { user: n }) }),
                (0, l.jsx)("div", {
                    className: eT.eg,
                    children: (0, l.jsx)(k.E, {
                        variant: "text-sm/medium",
                        children: (0, l.jsxs)(L.D, {
                            onClick: o,
                            className: eT.VW,
                            children: [
                                n.globalName,
                                (0, l.jsx)(ee.Ay, {
                                    primaryGuild: n?.primaryGuild,
                                    userId: n?.id,
                                    contextGuildId: a,
                                    containerClassName: eT.Dz,
                                }),
                            ],
                        }),
                    }),
                }),
                (0, l.jsx)("div", {
                    className: eT.Br,
                    children: (0, l.jsx)(k.E, {
                        variant: "text-xs/normal",
                        color: "text-default",
                        tag: "span",
                        children: (0, l.jsx)(L.D, { onClick: o, tag: "span", children: el.Ay.getUserTag(n) }),
                    }),
                }),
            ],
        });
    }),
    eM = i.memo(function (e) {
        let { joinRequest: t, onSelect: s } = e,
            { guildId: a, createdAt: c, applicationStatus: d } = t,
            u = i.useMemo(() => new en.A(t.user), [t.user]),
            _ = H({ guildId: a }),
            m = (0, o.bG)([I.A], () => I.A.getGuild(a)),
            x = d === h.B5.SUBMITTED;
        return null == u
            ? null
            : (0, l.jsxs)("tr", {
                  onClick: s,
                  className: r()(eT.yF, eT.iA, { [eT.wH]: _?.joinRequestId === t.joinRequestId }),
                  children: [
                      (0, l.jsx)("td", { children: (0, l.jsx)(eN, { joinRequest: t, user: u }) }),
                      (0, l.jsx)("td", {
                          className: eT.QB,
                          children: (0, l.jsx)(k.E, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              children: D()(c).format("lll"),
                          }),
                      }),
                      (0, l.jsx)("td", {
                          className: ev.UX,
                          children:
                              x &&
                              (0, l.jsx)(eh.m, {
                                  text: Y.intl.string(Y.t.x8Nn4M),
                                  children: (0, l.jsx)(L.D, {
                                      onClick: (e) => {
                                          (0, ej.L3)(
                                              e,
                                              async () => {
                                                  let { default: e } = await n.e("32660").then(n.bind(n, 772063));
                                                  return (t) => (0, l.jsx)(e, { ...t, guild: m, user: u });
                                              },
                                              { position: "bottom", align: "right" },
                                          );
                                      },
                                      className: eT.x6,
                                      children: (0, l.jsx)(eA.F, {
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
    ey = () => {
        let e = `${Math.floor(50 * Math.random()) + 100}px`,
            t = `${Math.floor(50 * Math.random()) + 100}px`,
            n = `${Math.floor(25 * Math.random()) + 50}px`;
        return (0, l.jsxs)("tr", {
            className: r()(eT.yF, eT.iA),
            children: [
                (0, l.jsx)("td", {
                    children: (0, l.jsxs)("div", {
                        className: eT.FD,
                        children: [
                            (0, l.jsx)("div", { className: r()(ev.RH, eT.Wn) }),
                            (0, l.jsx)("div", {
                                className: eT.eg,
                                children: (0, l.jsx)("div", { className: ev.RC, style: { width: e } }),
                            }),
                            (0, l.jsx)("div", {
                                className: eT.Br,
                                children: (0, l.jsx)("div", { className: ev.w7, style: { width: t } }),
                            }),
                        ],
                    }),
                }),
                (0, l.jsx)("td", {
                    className: eT.QB,
                    children: (0, l.jsx)("div", { className: ev.RC, style: { width: n } }),
                }),
                (0, l.jsx)("td", { className: ev.UX }),
            ],
        });
    };
function eD(e) {
    let { guildId: t, currentTab: n } = e,
        s = i.useRef(null),
        a = (0, o.bG)([I.A], () => I.A.getGuild(t)),
        r = j({ guildId: t }),
        c = (0, o.bG)([A.A], () => A.A.isFetching()),
        { guildJoinRequests: u } = p({ guildId: t, applicationStatus: n, sortOrder: r }),
        { fetchNextPage: _ } = (0, b.K)({ guildId: t, guildJoinRequests: u }),
        m = i.useCallback(async () => {
            let e = r === h._e.TIMESTAMP_ASC ? h._e.TIMESTAMP_DESC : h._e.TIMESTAMP_ASC;
            f.A.setSelectedSortOrder(t, e), await _(e, n);
        }, [r, t, _, n]);
    return null == a
        ? null
        : (0, l.jsx)("div", {
              className: eC.FV,
              children: (0, l.jsx)(d.Ch, {
                  className: eC.A0,
                  ref: s,
                  orientation: "horizontal",
                  children: (0, l.jsxs)("table", {
                      className: ev.tp,
                      children: [
                          (0, l.jsx)(eS, { sortOrder: r, onSortChange: m }),
                          (0, l.jsx)("tbody", {
                              children: c
                                  ? [, , , , ,].fill(0).map((e, t) => (0, l.jsx)(ey, {}, `placeholder-${t}`))
                                  : 0 === u.length
                                    ? (0, l.jsx)("td", { colSpan: 3, children: (0, l.jsx)(eI, { status: n }) })
                                    : u.map((e) =>
                                          (0, l.jsx)(
                                              eM,
                                              { joinRequest: e, onSelect: () => f.A.setSelectedGuildJoinRequest(t, e) },
                                              e.joinRequestId,
                                          ),
                                      ),
                          }),
                      ],
                  }),
              }),
          });
}
var eL = n(465917),
    ek = n(3666),
    eP = n(462887),
    eG = n(550079),
    ew = n(477782),
    eB = n(922016),
    eO = n(761508),
    eU = n(900797),
    eF = n(847374),
    ez = n(770178),
    eH = n(765548),
    eq = n(736653),
    eV = n(256177);
let eW = (e) => {
    let { tabs: t, selectedTab: n, onTabSelect: s, onClose: i } = e;
    return (0, l.jsx)(eG.W, {
        "data-menu-migrated-auto": !0,
        navId: "members-tabs-overflow-menu",
        "aria-label": Y.intl.string(Y.t.riPnr0),
        hideScroller: !0,
        onClose: i,
        onSelect: i,
        children: (0, l.jsx)(
            ew.rX,
            {
                children: t.map((e) => {
                    let { id: t, label: i } = e;
                    return (0, l.jsx)(
                        ew.Dr,
                        {
                            id: t,
                            label: i,
                            icon: t === n ? B.y : void 0,
                            leadingAccessory: t === n ? { type: "icon", icon: B.y } : void 0,
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
function eQ(e) {
    let { onTabSelect: t, tabs: n, selectedTab: s } = e,
        a = i.useRef(null),
        o = (0, eq.Ay)(),
        c = (0, eP.M)(o),
        d = i.useMemo(
            () =>
                null !=
                n.find((e) => {
                    let { id: t } = e;
                    return t === s;
                }),
            [s, n],
        ),
        u = d ? "text-strong" : c ? "text-muted" : "text-strong",
        _ = d ? F.A.colors.TEXT_STRONG : c ? F.A.colors.TEXT_MUTED : F.A.colors.TEXT_STRONG;
    return (0, l.jsx)(eB.Y, {
        targetElementRef: a,
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, l.jsx)(eW, { selectedTab: s, onClose: i, tabs: n, onTabSelect: t });
        },
        position: "bottom",
        align: "left",
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, l.jsxs)(eO.V.Item, {
                ...e,
                id: "more",
                clickableInnerRef: a,
                color: "text-muted",
                className: r()(eV.OS, { [eV.wH]: d }),
                "aria-label": Y.intl.string(Y.t["UKOtz+"]),
                children: [
                    (0, l.jsx)(k.E, { variant: "text-md/medium", color: u, children: Y.intl.string(Y.t["UKOtz+"]) }),
                    n ? (0, l.jsx)(eU.t, { size: "sm", color: _ }) : (0, l.jsx)(eF.a, { size: "sm", color: _ }),
                ],
            });
        },
    });
}
function eX(e) {
    let t,
        { guildId: n, currentTab: s, onTabSelect: a } = e,
        [r, c] = i.useState(0),
        d = i.useRef(null),
        u = i.useRef(r),
        _ =
            ((t = (0, E.H)({ guildId: n }) ?? 0),
            [
                { id: S.ALL_MEMBERS, label: Y.intl.string(Y.t.NOOm1Z) },
                {
                    id: S.PENDING,
                    label:
                        t > 0 ? Y.intl.formatToPlainString(Y.t["Wo+zL0"], { count: t }) : Y.intl.string(Y.t["4eQVBO"]),
                },
                { id: S.REJECTED, label: Y.intl.string(Y.t.bSZkla) },
                { id: S.APPROVED, label: Y.intl.string(Y.t.aURgY2) },
            ]),
        {
            lastVisibleIndex: m,
            onItemLayout: x,
            overflowItemsRef: f,
        } = (0, ek.Wv)({ items: _, itemGapPx: 16, maxLines: 1, containerWidth: r - 200 }),
        h = (0, o.bG)([R.Ay], () => null != R.Ay.getGuildSidebarState(n), [n]),
        g = H({ guildId: n }),
        b = i.useMemo(() => (s === S.ALL_MEMBERS ? h : null != g && null != g.user), [s, h, g]),
        A = i.useMemo(() => _.slice(0, m + 1), [m, _]),
        j = i.useMemo(() => _.slice(m + 1), [m, _]),
        p = (0, eH.A)((e) => {
            let t = e.contentRect.width;
            null != t && u.current !== t && (c(t), (u.current = t));
        });
    return (
        (0, ez.g)(d, p, [b]),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(v.A.Divider, { className: eV.yF }),
                (0, l.jsxs)("div", {
                    className: eV.oB,
                    ref: d,
                    children: [
                        (0, l.jsxs)("div", {
                            className: eV.Kk,
                            children: [
                                _.map((e, t) =>
                                    (0, l.jsx)(
                                        ek.Ae,
                                        {
                                            index: t,
                                            onItemLayout: x,
                                            children: (0, l.jsx)(eO.V.Item, {
                                                id: e.id,
                                                "aria-label": e.label,
                                                children: e.label,
                                            }),
                                        },
                                        e.id,
                                    ),
                                ),
                                (0, l.jsx)("div", {
                                    ref: f,
                                    children: (0, l.jsx)(eQ, { tabs: j, onTabSelect: a, selectedTab: s }),
                                }),
                            ],
                        }),
                        (0, l.jsxs)(eO.V, {
                            "aria-label": Y.intl.string(Y.t.tcvVXM),
                            selectedItem: s,
                            type: "top-pill",
                            onItemSelect: a,
                            children: [
                                A.map((e) =>
                                    (0, l.jsx)(eO.V.Item, { id: e.id, "aria-label": e.label, children: e.label }, e.id),
                                ),
                                0 !== j.length ? (0, l.jsx)(eQ, { tabs: j, onTabSelect: a, selectedTab: s }) : null,
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
}
var eJ = n(538409),
    eK = n(138298);
function eY(e) {
    let { guildId: t } = e,
        n = (0, o.bG)([I.A], () => I.A.getGuild(t)),
        { analyticsLocations: s } = (0, _.Ay)(u.A.MEMBER_SAFETY_PAGE),
        a = (0, o.bG)([R.Ay], () => R.Ay.getGuildSidebarState(t), [t]),
        r = i.useCallback(() => {
            eK.A.closeGuildSidebar(t);
        }, [t]),
        c = null != a;
    return null != n && c && null != a
        ? (0, l.jsx)(_.f5, {
              value: s,
              children: (0, l.jsx)("div", {
                  className: eV.__invalid_sidebarContainer,
                  style: { width: ei.da6 },
                  children: (0, l.jsx)(eJ.default, {
                      userId: a.details.userId,
                      guildId: a.details.guildId,
                      onClose: r,
                  }),
              }),
          })
        : null;
}
var eZ = n(856768),
    e$ = n(419354),
    e0 = n(702841),
    e9 = n(717421),
    e1 = n(144073),
    e2 = n(151781),
    e7 = n(189552),
    e4 = n(728365),
    e6 = n(749060),
    e5 = n(779545);
function e8(e) {
    let { guild: t } = e,
        n = (0, e1.Ms)(t.id),
        s = (0, e9.z)({ height: 3 * !!n, config: e$.config.stiff });
    return (0, l.jsx)("div", {
        className: eC.NQ,
        children: (0, l.jsx)(e$.animated.div, { className: eC.b0, style: s }),
    });
}
function e3(e) {
    let { guild: t, className: n, onPageChange: s, onMemberSelect: a } = e,
        o = t.id,
        c = (0, e0.bG)([e2.A], () => e2.A.getEstimatedMemberSearchCountByGuildId(o), [o]),
        u = (0, e1.Ms)(o),
        _ = (0, e1.Wl)(o),
        m = i.useCallback(
            (e) => {
                null != e && a?.(e);
            },
            [a],
        ),
        x = (0, e7.ii)(_, u, c),
        f = i.useRef(null),
        h = i.useRef(null),
        g = i.useCallback(() => {
            f.current?.resetSearchText();
        }, []);
    return (0, l.jsx)("div", {
        className: r()(eC.FV, n),
        children: (0, l.jsxs)(d.Ch, {
            className: eC.A0,
            ref: h,
            orientation: "horizontal",
            children: [
                (0, l.jsx)(e5.A, { guild: t, ref: f }),
                (0, l.jsx)(e8, { guild: t }),
                (0, l.jsx)(e4.A, { guild: t, onSelectRow: m, searchState: x, onResetForNewMembers: g }),
                x !== e7.IY.SUCCESS_STILL_INDEXING && (0, l.jsx)(e6.A, { guildId: t.id, onPageChange: s }),
            ],
        }),
    });
}
var te = n(746080),
    tt = n(964623);
function tn(e) {
    let { guild: t, currentTab: n, onTabSelect: s } = e,
        i = (0, g.W)(t.id),
        a = Y.intl.string(Y.t.oclz3Z),
        r = Y.intl.string(Y.t.oclz3Z);
    return (
        (0, m.HU)({ location: t.name, subsection: a }),
        (0, l.jsxs)(v.A, {
            className: eV.wx,
            innerClassname: eV.__invalid_innerHeader,
            channelId: te.VV.MEMBER_SAFETY,
            guildId: t.id,
            hideSearch: !0,
            children: [
                (0, l.jsx)(v.A.Icon, { icon: c.n, "aria-hidden": !0 }),
                (0, l.jsx)(v.A.Title, { children: r }),
                i && (0, l.jsx)(eX, { guildId: t.id, currentTab: n, onTabSelect: s }),
            ],
        })
    );
}
function ts(e) {
    let { guildId: t } = e,
        n = (0, E.H)({ guildId: t }) ?? 0,
        [s, a] = i.useState(n > 0 ? S.PENDING : S.ALL_MEMBERS),
        c = (0, o.bG)([I.A], () => I.A.getGuild(t)),
        { analyticsLocations: m } = (0, _.Ay)(u.A.MEMBER_SAFETY_PAGE),
        g = j({ guildId: t }),
        { guildJoinRequests: A } = p({
            guildId: t,
            applicationStatus: "ALL_MEMBERS" === s ? h.B5.SUBMITTED : s,
            sortOrder: g,
        });
    i.useEffect(() => {
        c?.features.has(ei.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) || a(S.ALL_MEMBERS);
    }, [c]);
    let v = (0, N.fw)(t),
        y = (0, x.q)(t),
        D = i.useRef(null);
    i.useEffect(
        () => (
            M.Cf(t),
            () => {
                M.G9(t);
            }
        ),
        [t],
    );
    let { fetchNextPage: L } = (0, b.K)({ guildId: t, guildJoinRequests: A }),
        k = i.useCallback(async () => {
            if (s === S.ALL_MEMBERS) return;
            let e = D.current?.getScrollerState();
            null == e || (e.scrollHeight - e.scrollTop - e.offsetHeight < 200 && (await L(g, s)));
        }, [s, s, g, L]),
        P = i.useCallback(
            async (e) => {
                s === e || (a(e), f.A.setSelectedGuildJoinRequest(t, null), "ALL_MEMBERS" !== e && (await L(g, e)));
            },
            [s, t, L, g],
        );
    i.useEffect(() => {
        if (!v && null != c) {
            let e = T.Ay.getDefaultChannel(c.id)?.id;
            (0, C.uh)(c.id, e);
        }
    }, [c, v]);
    let G = (0, o.bG)([R.Ay], () => null != R.Ay.getGuildSidebarState(t), [t]);
    return null != c && v
        ? (0, l.jsxs)(_.f5, {
              value: m,
              children: [
                  (0, l.jsxs)("div", {
                      className: r()(tt.TE, eV.MY, { [tt.js]: G }),
                      children: [
                          (0, l.jsx)(tn, { guild: c, currentTab: s, onTabSelect: P }),
                          (0, l.jsx)(d.Ch, {
                              onScroll: k,
                              ref: D,
                              orientation: "vertical",
                              children: (0, l.jsx)("div", {
                                  className: r()(tt.Qs, eV.kL),
                                  children:
                                      s === S.ALL_MEMBERS
                                          ? (0, l.jsxs)(l.Fragment, {
                                                children: [
                                                    (0, l.jsx)(eL.A, { guild: c }),
                                                    (0, l.jsx)(e3, { guild: c }),
                                                ],
                                            })
                                          : (0, l.jsx)(eD, { guildId: c.id, currentTab: s }),
                              }),
                          }),
                          (0, l.jsx)(eZ.A, { guildId: c.id }),
                      ],
                  }),
                  y && (s === S.ALL_MEMBERS ? (0, l.jsx)(eY, { guildId: c.id }) : (0, l.jsx)(ef, { guildId: c.id })),
              ],
          })
        : null;
}
