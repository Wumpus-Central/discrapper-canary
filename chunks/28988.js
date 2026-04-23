l.r(t), l.d(t, { default: () => tn });
var n,
    s = l(627968),
    i = l(64700),
    a = l(503698),
    r = l.n(a),
    o = l(17928),
    c = l(177953),
    d = l(689175),
    u = l(793574),
    x = l(688810),
    m = l(726249),
    h = l(985925),
    j = l(624458),
    _ = l(513461),
    g = l(496767),
    f = l(663997),
    A = l(844944);
function E(e) {
    let { guildId: t } = e;
    return (0, o.bG)([A.A], () => A.A.getSelectedSortOrder(t), [t]);
}
function b(e) {
    let { guildId: t, applicationStatus: l, sortOrder: n } = e,
        s = (0, o.bG)([A.A], () => A.A.getRequests(t, l), [l, t]);
    return { guildJoinRequests: i.useMemo(() => (n === _._e.TIMESTAMP_DESC ? [...s].reverse() : s), [n, s]) };
}
var v = l(786180),
    N = l(742589),
    S = l(976860),
    C = l(761640),
    p = l(808728),
    I = l(71393),
    T =
        (((n = {}).ALL_MEMBERS = "ALL_MEMBERS"),
        (n[(n.PENDING = _.B5.SUBMITTED)] = "PENDING"),
        (n[(n.REJECTED = _.B5.REJECTED)] = "REJECTED"),
        (n[(n.APPROVED = _.B5.APPROVED)] = "APPROVED"),
        n),
    R = l(134413),
    M = l(361610),
    y = l(989349),
    D = l.n(y),
    G = l(939249),
    L = l(834730),
    k = l(97808),
    P = l(778712),
    w = l(789645),
    B = l(628284),
    U = l(285796),
    O = l(534890),
    F = l(661531),
    z = l(364522);
function q(e) {
    let { guildId: t } = e;
    return (0, o.bG)([A.A], () => A.A.getSelectedGuildJoinRequest(t), [t]);
}
var H = l(231483),
    V = l(287809),
    W = l(31457),
    Q = l(414626),
    K = l(601047),
    Y = l(273926),
    X = l(453016),
    $ = l(985018);
let J = function (e) {
    let { guildId: t, formFields: l, user: n, showRequirements: i = !0 } = e;
    return null == (0, o.bG)([V.default], () => n ?? V.default.getCurrentUser())
        ? null
        : (0, s.jsxs)(s.Fragment, {
              children: [
                  i && (0, s.jsx)(W.fu, { icon: H.l, text: $.intl.string($.t.v2z4c1), meetsRequirement: !0 }),
                  l.map((e, t) =>
                      (function (e, t) {
                          switch (e.field_type) {
                              case _.rX.TERMS:
                                  return (0, s.jsx)(Y.LK, { formField: e }, t);
                              case _.rX.TEXT_INPUT:
                                  return (0, s.jsx)(X.aS, { formField: e }, t);
                              case _.rX.PARAGRAPH:
                                  return (0, s.jsx)(K.P1, { formField: e }, t);
                              case _.rX.MULTIPLE_CHOICE:
                                  return (0, s.jsx)(Q.CI, { formField: e }, t);
                          }
                      })(e, t),
                  ),
              ],
          });
};
var Z = l(123393),
    ee = l(534400),
    et = l(975732),
    el = l(889227),
    en = l(935208),
    es = l(427262),
    ei = l(652215),
    ea = l(743981),
    er = l(982186),
    eo = l(637498);
function ec(e) {
    let { icon: t, label: l, onClick: n, disabled: i } = e;
    return (0, s.jsxs)(G.D, {
        className: r()(er.hP, { [er.r9]: i }),
        onClick: i ? ei.tEg : n,
        "aria-label": l,
        children: [
            (0, s.jsx)(t, { size: "custom", color: "currentColor", width: 20, height: 20 }),
            (0, s.jsx)(L.E, { variant: "text-sm/normal", color: "none", children: l }),
        ],
    });
}
function ed(e) {
    let { user: t, guildId: l, joinRequest: n } = e,
        { analyticsLocations: i } = (0, x.Ay)(),
        a = () => {
            (0, et.openUserProfileModal)({ userId: t.id, joinRequestId: n.joinRequestId, sourceAnalyticsLocations: i });
        };
    return (0, s.jsxs)("div", {
        className: er.op,
        children: [
            (0, s.jsxs)("div", {
                className: eo.FD,
                children: [
                    (0, s.jsx)(G.D, {
                        onClick: a,
                        className: r()(er.vk, eo.Wn),
                        children: (0, s.jsx)(k.eu, {
                            src: t.getAvatarURL(l, 48),
                            "aria-label": t.username,
                            size: P._3.SIZE_48,
                        }),
                    }),
                    (0, s.jsxs)("div", {
                        className: eo.oS,
                        children: [
                            (0, s.jsxs)("div", {
                                className: eo.K$,
                                children: [
                                    (0, s.jsx)(G.D, {
                                        onClick: a,
                                        className: er.vk,
                                        children: (0, s.jsx)(L.E, {
                                            variant: "text-lg/medium",
                                            children: t?.globalName,
                                        }),
                                    }),
                                    (0, s.jsx)(ee.Ay, {
                                        primaryGuild: t?.primaryGuild,
                                        userId: t?.id,
                                        contextGuildId: l,
                                        badgeSize: ea.Sl.SIZE_16,
                                        textVariant: "heading-md/semibold",
                                        className: eo.Dz,
                                        containerClassName: eo.UL,
                                    }),
                                ],
                            }),
                            (0, s.jsx)(G.D, {
                                onClick: a,
                                className: er.vk,
                                children: (0, s.jsx)(L.E, {
                                    variant: "text-md/medium",
                                    color: "text-default",
                                    children: es.Ay.getUserTag(t),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, s.jsx)(G.D, {
                className: eo.d4,
                onClick: () => j.A.setSelectedGuildJoinRequest(l, null),
                children: (0, s.jsx)(w.P, { size: "md", color: "currentColor" }),
            }),
        ],
    });
}
function eu(e) {
    let { user: t, guildId: l, joinRequest: n } = e,
        {
            approveRequest: i,
            rejectRequest: a,
            handleOpenInterview: r,
            submitting: o,
        } = (0, Z.W)(l, t.id, n.joinRequestId, n.interviewChannelId);
    return (0, s.jsxs)("div", {
        className: er.$l,
        children: [
            (0, s.jsx)(ec, { icon: B.y, label: $.intl.string($.t.BzjDQJ), onClick: i, disabled: o }),
            (0, s.jsx)(ec, { icon: U.a, label: $.intl.string($.t.hDtbsz), onClick: a, disabled: o }),
            (0, s.jsx)(ec, { icon: O.o, label: $.intl.string($.t.KQeYoC), onClick: r, disabled: o }),
        ],
    });
}
function ex(e) {
    let { joinRequest: t } = e,
        { actionedAt: l, actionedByUser: n, rejectionReason: i } = t;
    return (0, s.jsxs)("div", {
        className: er.Ik,
        children: [
            (0, s.jsx)(U.a, {
                size: "lg",
                color: F.A.colors.BACKGROUND_BASE_LOWER,
                secondaryColor: F.A.colors.INTERACTIVE_TEXT_DEFAULT,
            }),
            (0, s.jsxs)("div", {
                children: [
                    (0, s.jsx)(L.E, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        children: $.intl.string($.t.bSZkla),
                    }),
                    null != n && null != l
                        ? (0, s.jsxs)("div", {
                              className: er.Ay,
                              children: [
                                  (0, s.jsx)(L.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: $.intl.formatToPlainString($.t.qnimbL, {
                                          username: n.global_name ?? n.username,
                                      }),
                                  }),
                                  (0, s.jsx)("div", { className: er.Om }),
                                  (0, s.jsx)(L.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: D()(en.default.extractTimestamp(l)).format("ll"),
                                  }),
                              ],
                          })
                        : null,
                    null != i &&
                        (0, s.jsx)(L.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: $.intl.formatToPlainString($.t.fU5PPM, { rejectionReason: i }),
                        }),
                ],
            }),
        ],
    });
}
function em(e) {
    let { joinRequest: t } = e,
        { actionedAt: l, actionedByUser: n } = t;
    return (0, s.jsxs)("div", {
        className: er.Ik,
        children: [
            (0, s.jsx)(B.y, {
                size: "lg",
                color: F.A.colors.STATUS_POSITIVE_BACKGROUND,
                secondaryColor: F.A.colors.STATUS_POSITIVE_TEXT,
            }),
            (0, s.jsxs)("div", {
                children: [
                    (0, s.jsx)(L.E, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        children: $.intl.string($.t.aURgY2),
                    }),
                    null != n && null != l
                        ? (0, s.jsxs)("div", {
                              className: er.Ay,
                              children: [
                                  (0, s.jsx)(L.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: $.intl.formatToPlainString($.t.qnimbL, {
                                          username: n.global_name ?? n.username,
                                      }),
                                  }),
                                  (0, s.jsx)("div", { className: er.Om }),
                                  (0, s.jsx)(L.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: D()(en.default.extractTimestamp(l)).format("ll"),
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
        ],
    });
}
function eh(e) {
    let { user: t, joinRequest: l } = e;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(L.E, {
                className: er._3,
                variant: "text-sm/medium",
                color: "text-muted",
                children: $.intl.string($.t["ldCE/p"]),
            }),
            (0, s.jsxs)("div", {
                className: er.TT,
                children: [
                    (0, s.jsxs)("div", {
                        className: er.lj,
                        children: [
                            (0, s.jsx)(L.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: $.intl.string($.t.SaDIpL),
                            }),
                            (0, s.jsx)(L.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: D()(en.default.extractTimestamp(t.id)).format("ll"),
                            }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: er.lj,
                        children: [
                            (0, s.jsx)(L.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: $.intl.string($.t["Vt4cn+"]),
                            }),
                            (0, s.jsx)(L.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: D()(l.createdAt).format("ll"),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function ej(e) {
    let { guildId: t } = e,
        l = q({ guildId: t }),
        { user: n } = l ?? {},
        a = i.useMemo(() => l?.formResponses ?? [], [l?.formResponses]),
        c = i.useMemo(() => (null != n ? new el.A(n) : null), [n]),
        d = (0, o.bG)([I.A], () => I.A.getGuild(t), [t]);
    return ((0, m.HU)({ subsection: $.intl.string($.t.nqrK8X), location: d?.name }),
    null == l || null == d || null == c || null == n)
        ? null
        : (0, s.jsx)("section", {
              className: er.pz,
              children: (0, s.jsx)(z.Ip, {
                  children: (0, s.jsxs)("div", {
                      className: er.WH,
                      children: [
                          (0, s.jsxs)("div", {
                              className: er.Ui,
                              children: [
                                  (0, s.jsx)(ed, { user: c, guildId: t, joinRequest: l }),
                                  l.applicationStatus === _.B5.SUBMITTED &&
                                      (0, s.jsx)(eu, { user: c, guildId: t, joinRequest: l }),
                                  l.applicationStatus === _.B5.REJECTED && (0, s.jsx)(ex, { joinRequest: l }),
                                  l.applicationStatus === _.B5.APPROVED && (0, s.jsx)(em, { joinRequest: l }),
                              ],
                          }),
                          (0, s.jsxs)("div", {
                              className: r()(er.Ui, er.gi),
                              children: [
                                  (0, s.jsx)(J, { guildId: d.id, formFields: a, user: c, showRequirements: !1 }),
                                  (0, s.jsx)(eh, { guildId: t, user: c, joinRequest: l }),
                              ],
                          }),
                      ],
                  }),
              }),
          });
}
var e_ = l(990078),
    eg = l(933832),
    ef = l(534514),
    eA = l(530005),
    eE = l(442433),
    eb = l(966327),
    ev = l(532197),
    eN = l(831084),
    eS = l(494213),
    eC = l(301050),
    ep = l(62255);
function eI(e) {
    let t,
        l,
        { status: n } = e;
    switch (n) {
        case _.B5.REJECTED:
            (t = $.t["7YSJ6f"]), (l = $.t.i05OUR);
            break;
        case _.B5.APPROVED:
            (t = $.t.bv82GS), (l = $.t.D4OUHT);
            break;
        default:
            (t = $.t["/wqiSv"]), (l = $.t.o47YZs);
    }
    return (0, s.jsxs)("div", {
        className: eN.do,
        children: [
            (0, s.jsx)(eg.A, { size: "md", color: "currentColor", className: eN.AI }),
            (0, s.jsx)(ef.D, { variant: "heading-md/medium", children: $.intl.string(t) }),
            (0, s.jsx)(L.E, { color: "text-muted", variant: "text-sm/medium", children: $.intl.string(l) }),
        ],
    });
}
function eT(e) {
    let { sortOrder: t, onSortChange: l } = e;
    return (0, s.jsx)("thead", {
        children: (0, s.jsxs)("tr", {
            className: eC.Yk,
            children: [
                (0, s.jsx)("th", {
                    className: eN.e4,
                    children: (0, s.jsx)(L.E, {
                        variant: "eyebrow",
                        color: "interactive-text-default",
                        children: $.intl.string($.t.Es7n9c),
                    }),
                }),
                (0, s.jsx)("th", {
                    className: r()(eN.e4, ep.QB),
                    children: (0, s.jsxs)(G.D, {
                        className: eN.KF,
                        onClick: l,
                        children: [
                            (0, s.jsx)(L.E, {
                                variant: "eyebrow",
                                color: "interactive-text-default",
                                children: $.intl.string($.t.EZ5QWL),
                            }),
                            t === _._e.TIMESTAMP_ASC
                                ? (0, s.jsx)(ev.A, { className: eN.GM, direction: ev.A.Directions.UP })
                                : (0, s.jsx)(ev.A, { className: eN.GM, direction: ev.A.Directions.DOWN }),
                        ],
                    }),
                }),
                (0, s.jsx)("th", {
                    className: r()(eN.e4, eN.UX),
                    children: (0, s.jsx)(L.E, {
                        variant: "eyebrow",
                        color: "interactive-text-default",
                        children: $.intl.string($.t["5Q9xGr"]),
                    }),
                }),
            ],
        }),
    });
}
let eR = i.memo(function (e) {
        let { joinRequest: t, user: l } = e,
            { joinRequestId: n, guildId: a } = t,
            { analyticsLocations: r } = (0, x.Ay)(),
            o = i.useCallback(
                (e) => {
                    e.stopPropagation(),
                        e.preventDefault(),
                        (0, et.openUserProfileModal)({ userId: l.id, joinRequestId: n, sourceAnalyticsLocations: r });
                },
                [l, n, r],
            );
        return (0, s.jsxs)("div", {
            className: ep.FD,
            children: [
                (0, s.jsx)(G.D, { className: ep.Wn, onClick: o, children: (0, s.jsx)(eb.A, { user: l }) }),
                (0, s.jsx)("div", {
                    className: ep.eg,
                    children: (0, s.jsx)(L.E, {
                        variant: "text-sm/medium",
                        children: (0, s.jsxs)(G.D, {
                            onClick: o,
                            className: ep.VW,
                            children: [
                                l.globalName,
                                (0, s.jsx)(ee.Ay, {
                                    primaryGuild: l?.primaryGuild,
                                    userId: l?.id,
                                    contextGuildId: a,
                                    containerClassName: ep.Dz,
                                }),
                            ],
                        }),
                    }),
                }),
                (0, s.jsx)("div", {
                    className: ep.Br,
                    children: (0, s.jsx)(L.E, {
                        variant: "text-xs/normal",
                        color: "text-default",
                        tag: "span",
                        children: (0, s.jsx)(G.D, { onClick: o, tag: "span", children: es.Ay.getUserTag(l) }),
                    }),
                }),
            ],
        });
    }),
    eM = i.memo(function (e) {
        let { joinRequest: t, onSelect: n } = e,
            { guildId: a, createdAt: c, applicationStatus: d } = t,
            u = i.useMemo(() => new el.A(t.user), [t.user]),
            x = q({ guildId: a }),
            m = (0, o.bG)([I.A], () => I.A.getGuild(a)),
            h = d === _.B5.SUBMITTED;
        return null == u
            ? null
            : (0, s.jsxs)("tr", {
                  onClick: n,
                  className: r()(ep.yF, ep.iA, { [ep.wH]: x?.joinRequestId === t.joinRequestId }),
                  children: [
                      (0, s.jsx)("td", { children: (0, s.jsx)(eR, { joinRequest: t, user: u }) }),
                      (0, s.jsx)("td", {
                          className: ep.QB,
                          children: (0, s.jsx)(L.E, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              children: D()(c).format("lll"),
                          }),
                      }),
                      (0, s.jsx)("td", {
                          className: eN.UX,
                          children:
                              h &&
                              (0, s.jsx)(e_.m, {
                                  text: $.intl.string($.t.x8Nn4M),
                                  children: (0, s.jsx)(G.D, {
                                      onClick: (e) => {
                                          (0, eE.L3)(
                                              e,
                                              async () => {
                                                  let { default: e } = await l.e("32660").then(l.bind(l, 772063));
                                                  return (t) => (0, s.jsx)(e, { ...t, guild: m, user: u });
                                              },
                                              { position: "bottom", align: "right" },
                                          );
                                      },
                                      className: ep.x6,
                                      children: (0, s.jsx)(eA.F, {
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
            l = `${Math.floor(25 * Math.random()) + 50}px`;
        return (0, s.jsxs)("tr", {
            className: r()(ep.yF, ep.iA),
            children: [
                (0, s.jsx)("td", {
                    children: (0, s.jsxs)("div", {
                        className: ep.FD,
                        children: [
                            (0, s.jsx)("div", { className: r()(eN.RH, ep.Wn) }),
                            (0, s.jsx)("div", {
                                className: ep.eg,
                                children: (0, s.jsx)("div", { className: eN.RC, style: { width: e } }),
                            }),
                            (0, s.jsx)("div", {
                                className: ep.Br,
                                children: (0, s.jsx)("div", { className: eN.w7, style: { width: t } }),
                            }),
                        ],
                    }),
                }),
                (0, s.jsx)("td", {
                    className: ep.QB,
                    children: (0, s.jsx)("div", { className: eN.RC, style: { width: l } }),
                }),
                (0, s.jsx)("td", { className: eN.UX }),
            ],
        });
    };
function eD(e) {
    let { guildId: t, currentTab: l } = e,
        n = i.useRef(null),
        a = (0, o.bG)([I.A], () => I.A.getGuild(t)),
        r = E({ guildId: t }),
        c = (0, o.bG)([A.A], () => A.A.isFetching()),
        { guildJoinRequests: u } = b({ guildId: t, applicationStatus: l, sortOrder: r }),
        { fetchNextPage: x } = (0, f.K)({ guildId: t, guildJoinRequests: u }),
        m = i.useCallback(async () => {
            let e = r === _._e.TIMESTAMP_ASC ? _._e.TIMESTAMP_DESC : _._e.TIMESTAMP_ASC;
            j.A.setSelectedSortOrder(t, e), await x(e, l);
        }, [r, t, x, l]);
    return null == a
        ? null
        : (0, s.jsx)("div", {
              className: eS.FV,
              children: (0, s.jsx)(d.Ch, {
                  className: eS.A0,
                  ref: n,
                  orientation: "horizontal",
                  children: (0, s.jsxs)("table", {
                      className: eN.tp,
                      children: [
                          (0, s.jsx)(eT, { sortOrder: r, onSortChange: m }),
                          (0, s.jsx)("tbody", {
                              children: c
                                  ? [, , , , ,].fill(0).map((e, t) => (0, s.jsx)(ey, {}, `placeholder-${t}`))
                                  : 0 === u.length
                                    ? (0, s.jsx)("td", { colSpan: 3, children: (0, s.jsx)(eI, { status: l }) })
                                    : u.map((e) =>
                                          (0, s.jsx)(
                                              eM,
                                              { joinRequest: e, onSelect: () => j.A.setSelectedGuildJoinRequest(t, e) },
                                              e.joinRequestId,
                                          ),
                                      ),
                          }),
                      ],
                  }),
              }),
          });
}
var eG = l(465917),
    eL = l(3666),
    ek = l(462887),
    eP = l(550079),
    ew = l(477782),
    eB = l(922016),
    eU = l(761508),
    eO = l(900797),
    eF = l(847374),
    ez = l(770178),
    eq = l(765548),
    eH = l(736653),
    eV = l(256177);
let eW = (e) => {
    let { tabs: t, selectedTab: l, onTabSelect: n, onClose: i } = e;
    return (0, s.jsx)(eP.W, {
        "data-menu-migrated-auto": !0,
        navId: "members-tabs-overflow-menu",
        "aria-label": $.intl.string($.t.riPnr0),
        hideScroller: !0,
        onClose: i,
        onSelect: i,
        children: (0, s.jsx)(
            ew.rX,
            {
                children: t.map((e) => {
                    let { id: t, label: i } = e;
                    return (0, s.jsx)(
                        ew.Dr,
                        {
                            id: t,
                            label: i,
                            icon: t === l ? B.y : void 0,
                            leadingAccessory: t === l ? { type: "icon", icon: B.y } : void 0,
                            action: () => n(t),
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
    let { onTabSelect: t, tabs: l, selectedTab: n } = e,
        a = i.useRef(null),
        o = (0, eH.Ay)(),
        c = (0, ek.M)(o),
        d = i.useMemo(
            () =>
                null !=
                l.find((e) => {
                    let { id: t } = e;
                    return t === n;
                }),
            [n, l],
        ),
        u = d ? "text-strong" : c ? "text-muted" : "text-strong",
        x = d ? F.A.colors.TEXT_STRONG : c ? F.A.colors.TEXT_MUTED : F.A.colors.TEXT_STRONG;
    return (0, s.jsx)(eB.Y, {
        targetElementRef: a,
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, s.jsx)(eW, { selectedTab: n, onClose: i, tabs: l, onTabSelect: t });
        },
        position: "bottom",
        align: "left",
        children: (e, t) => {
            let { isShown: l } = t;
            return (0, s.jsxs)(eU.V.Item, {
                ...e,
                id: "more",
                clickableInnerRef: a,
                color: "text-muted",
                className: r()(eV.OS, { [eV.wH]: d }),
                "aria-label": $.intl.string($.t["UKOtz+"]),
                children: [
                    (0, s.jsx)(L.E, { variant: "text-md/medium", color: u, children: $.intl.string($.t["UKOtz+"]) }),
                    l ? (0, s.jsx)(eO.t, { size: "sm", color: x }) : (0, s.jsx)(eF.a, { size: "sm", color: x }),
                ],
            });
        },
    });
}
function eK(e) {
    let t,
        { guildId: l, currentTab: n, onTabSelect: a } = e,
        [r, c] = i.useState(0),
        d = i.useRef(null),
        u = i.useRef(r),
        x =
            ((t = (0, v.H)({ guildId: l }) ?? 0),
            [
                { id: T.ALL_MEMBERS, label: $.intl.string($.t.NOOm1Z) },
                {
                    id: T.PENDING,
                    label:
                        t > 0 ? $.intl.formatToPlainString($.t["Wo+zL0"], { count: t }) : $.intl.string($.t["4eQVBO"]),
                },
                { id: T.REJECTED, label: $.intl.string($.t.bSZkla) },
                { id: T.APPROVED, label: $.intl.string($.t.aURgY2) },
            ]),
        {
            lastVisibleIndex: m,
            onItemLayout: h,
            overflowItemsRef: j,
        } = (0, eL.Wv)({ items: x, itemGapPx: 16, maxLines: 1, containerWidth: r - 200 }),
        _ = (0, o.bG)([C.Ay], () => null != C.Ay.getGuildSidebarState(l), [l]),
        g = q({ guildId: l }),
        f = i.useMemo(() => (n === T.ALL_MEMBERS ? _ : null != g && null != g.user), [n, _, g]),
        A = i.useMemo(() => x.slice(0, m + 1), [m, x]),
        E = i.useMemo(() => x.slice(m + 1), [m, x]),
        b = (0, eq.A)((e) => {
            let t = e.contentRect.width;
            null != t && u.current !== t && (c(t), (u.current = t));
        });
    return (
        (0, ez.g)(d, b, [f]),
        (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(N.A.Divider, { className: eV.yF }),
                (0, s.jsxs)("div", {
                    className: eV.oB,
                    ref: d,
                    children: [
                        (0, s.jsxs)("div", {
                            className: eV.Kk,
                            children: [
                                x.map((e, t) =>
                                    (0, s.jsx)(
                                        eL.Ae,
                                        {
                                            index: t,
                                            onItemLayout: h,
                                            children: (0, s.jsx)(eU.V.Item, {
                                                id: e.id,
                                                "aria-label": e.label,
                                                children: e.label,
                                            }),
                                        },
                                        e.id,
                                    ),
                                ),
                                (0, s.jsx)("div", {
                                    ref: j,
                                    children: (0, s.jsx)(eQ, { tabs: E, onTabSelect: a, selectedTab: n }),
                                }),
                            ],
                        }),
                        (0, s.jsxs)(eU.V, {
                            "aria-label": $.intl.string($.t.tcvVXM),
                            selectedItem: n,
                            type: "top-pill",
                            onItemSelect: a,
                            children: [
                                A.map((e) =>
                                    (0, s.jsx)(eU.V.Item, { id: e.id, "aria-label": e.label, children: e.label }, e.id),
                                ),
                                0 !== E.length ? (0, s.jsx)(eQ, { tabs: E, onTabSelect: a, selectedTab: n }) : null,
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
}
var eY = l(538409),
    eX = l(138298);
function e$(e) {
    let { guildId: t } = e,
        l = (0, o.bG)([I.A], () => I.A.getGuild(t)),
        { analyticsLocations: n } = (0, x.Ay)(u.A.MEMBER_SAFETY_PAGE),
        a = (0, o.bG)([C.Ay], () => C.Ay.getGuildSidebarState(t), [t]),
        r = i.useCallback(() => {
            eX.A.closeGuildSidebar(t);
        }, [t]),
        c = null != a;
    return null != l && c && null != a
        ? (0, s.jsx)(x.f5, {
              value: n,
              children: (0, s.jsx)("div", {
                  className: eV.__invalid_sidebarContainer,
                  style: { width: ei.da6 },
                  children: (0, s.jsx)(eY.default, {
                      userId: a.details.userId,
                      guildId: a.details.guildId,
                      onClose: r,
                  }),
              }),
          })
        : null;
}
var eJ = l(856768),
    eZ = l(419354),
    e0 = l(702841),
    e1 = l(717421),
    e6 = l(144073),
    e9 = l(151781),
    e2 = l(189552),
    e7 = l(728365),
    e4 = l(749060),
    e8 = l(779545);
function e3(e) {
    let { guild: t } = e,
        l = (0, e6.Ms)(t.id),
        n = (0, e1.z)({ height: 3 * !!l, config: eZ.config.stiff });
    return (0, s.jsx)("div", {
        className: eS.NQ,
        children: (0, s.jsx)(eZ.animated.div, { className: eS.b0, style: n }),
    });
}
function e5(e) {
    let { guild: t, className: l, onPageChange: n, onMemberSelect: a } = e,
        o = t.id,
        c = (0, e0.bG)([e9.A], () => e9.A.getEstimatedMemberSearchCountByGuildId(o), [o]),
        u = (0, e6.Ms)(o),
        x = (0, e6.Wl)(o),
        m = i.useCallback(
            (e) => {
                null != e && a?.(e);
            },
            [a],
        ),
        h = (0, e2.ii)(x, u, c),
        j = i.useRef(null),
        _ = i.useRef(null),
        g = i.useCallback(() => {
            j.current?.resetSearchText();
        }, []);
    return (0, s.jsx)("div", {
        className: r()(eS.FV, l),
        children: (0, s.jsxs)(d.Ch, {
            className: eS.A0,
            ref: _,
            orientation: "horizontal",
            children: [
                (0, s.jsx)(e8.A, { guild: t, ref: j }),
                (0, s.jsx)(e3, { guild: t }),
                (0, s.jsx)(e7.A, { guild: t, onSelectRow: m, searchState: h, onResetForNewMembers: g }),
                h !== e2.IY.SUCCESS_STILL_INDEXING && (0, s.jsx)(e4.A, { guildId: t.id, onPageChange: n }),
            ],
        }),
    });
}
var te = l(746080),
    tt = l(964623);
function tl(e) {
    let { guild: t, currentTab: l, onTabSelect: n } = e,
        i = (0, g.W)(t.id),
        a = $.intl.string($.t.oclz3Z),
        r = $.intl.string($.t.oclz3Z);
    return (
        (0, m.HU)({ location: t.name, subsection: a }),
        (0, s.jsxs)(N.A, {
            className: eV.wx,
            innerClassname: eV.__invalid_innerHeader,
            channelId: te.VV.MEMBER_SAFETY,
            guildId: t.id,
            hideSearch: !0,
            children: [
                (0, s.jsx)(N.A.Icon, { icon: c.n, "aria-hidden": !0 }),
                (0, s.jsx)(N.A.Title, { children: r }),
                i && (0, s.jsx)(eK, { guildId: t.id, currentTab: l, onTabSelect: n }),
            ],
        })
    );
}
function tn(e) {
    let { guildId: t } = e,
        l = (0, v.H)({ guildId: t }) ?? 0,
        [n, a] = i.useState(l > 0 ? T.PENDING : T.ALL_MEMBERS),
        c = (0, o.bG)([I.A], () => I.A.getGuild(t)),
        { analyticsLocations: m } = (0, x.Ay)(u.A.MEMBER_SAFETY_PAGE),
        g = E({ guildId: t }),
        { guildJoinRequests: A } = b({
            guildId: t,
            applicationStatus: "ALL_MEMBERS" === n ? _.B5.SUBMITTED : n,
            sortOrder: g,
        });
    i.useEffect(() => {
        c?.features.has(ei.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) || a(T.ALL_MEMBERS);
    }, [c]);
    let N = (0, R.fw)(t),
        y = (0, h.q)(t),
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
    let { fetchNextPage: G } = (0, f.K)({ guildId: t, guildJoinRequests: A }),
        L = i.useCallback(async () => {
            if (n === T.ALL_MEMBERS) return;
            let e = D.current?.getScrollerState();
            null == e || (e.scrollHeight - e.scrollTop - e.offsetHeight < 200 && (await G(g, n)));
        }, [n, n, g, G]),
        k = i.useCallback(
            async (e) => {
                n === e || (a(e), j.A.setSelectedGuildJoinRequest(t, null), "ALL_MEMBERS" !== e && (await G(g, e)));
            },
            [n, t, G, g],
        );
    i.useEffect(() => {
        if (!N && null != c) {
            let e = p.Ay.getDefaultChannel(c.id)?.id;
            (0, S.uh)(c.id, e);
        }
    }, [c, N]);
    let P = (0, o.bG)([C.Ay], () => null != C.Ay.getGuildSidebarState(t), [t]);
    return null != c && N
        ? (0, s.jsxs)(x.f5, {
              value: m,
              children: [
                  (0, s.jsxs)("div", {
                      className: r()(tt.TE, eV.MY, { [tt.js]: P }),
                      children: [
                          (0, s.jsx)(tl, { guild: c, currentTab: n, onTabSelect: k }),
                          (0, s.jsx)(d.Ch, {
                              onScroll: L,
                              ref: D,
                              orientation: "vertical",
                              children: (0, s.jsx)("div", {
                                  className: r()(tt.Qs, eV.kL),
                                  children:
                                      n === T.ALL_MEMBERS
                                          ? (0, s.jsxs)(s.Fragment, {
                                                children: [
                                                    (0, s.jsx)(eG.A, { guild: c }),
                                                    (0, s.jsx)(e5, { guild: c }),
                                                ],
                                            })
                                          : (0, s.jsx)(eD, { guildId: c.id, currentTab: n }),
                              }),
                          }),
                          (0, s.jsx)(eJ.A, { guildId: c.id }),
                      ],
                  }),
                  y && (n === T.ALL_MEMBERS ? (0, s.jsx)(e$, { guildId: c.id }) : (0, s.jsx)(ej, { guildId: c.id })),
              ],
          })
        : null;
}
