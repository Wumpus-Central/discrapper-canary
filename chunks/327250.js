n.d(t, { ZP: () => j });
var r = n(54381);
n(473749);
var l = n(120356),
    i = n.n(l),
    a = n(399606),
    s = n(28664),
    o = n(481060),
    u = n(493683),
    c = n(906732),
    E = n(69882),
    d = n(251794),
    _ = n(386696),
    A = n(946273),
    T = n(910693),
    I = n(172751),
    m = n(314897),
    f = n(271383),
    g = n(430824),
    N = n(496675),
    h = n(158776),
    O = n(885110),
    R = n(594174),
    S = n(572004),
    p = n(5192),
    C = n(51144),
    b = n(131085),
    D = n(388032),
    U = n(433110);
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function M(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function x(e) {
    let { user: t, guildId: n, onClose: l } = e,
        i = t.id,
        s = (0, a.e7)([O.Z, h.Z, m.default], () => (i === m.default.getId() ? O.Z.getStatus() : h.Z.getStatus(i, n)), [
            i,
            n,
        ]);
    return (0, r.jsxs)("div", {
        className: U.topRow,
        children: [
            (0, r.jsxs)("div", {
                className: U.memberNameContainer,
                children: [
                    (0, r.jsx)("div", {
                        className: U.memberAvatar,
                        children: (0, r.jsx)(o.qEK, {
                            src: t.getAvatarURL(n, 48),
                            "aria-label": t.username,
                            size: o.EFr.SIZE_48,
                            status: s,
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: U.memberNameAndTagContainer,
                        children: [
                            (0, r.jsxs)("div", {
                                className: U.memberNameTextContainer,
                                children: [
                                    (0, r.jsx)(o.Text, {
                                        variant: "text-lg/medium",
                                        children: (0, r.jsx)(o.PUh, {
                                            name: p.ZP.getName(n, null, t),
                                            colorString: o.TVs.colors.TEXT_STRONG.css,
                                            colorStrings: null,
                                        }),
                                    }),
                                    (0, r.jsx)(I.ZP, {
                                        primaryGuild: null == t ? void 0 : t.primaryGuild,
                                        userId: null == t ? void 0 : t.id,
                                        contextGuildId: n,
                                        badgeSize: b.Gg.SIZE_16,
                                        textVariant: "heading-md/semibold",
                                        className: U.memberClanTag,
                                        containerClassName: U.memberClanTagContainer,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(o.Text, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: C.ZP.getUserTag(t),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(o.Text, {
                variant: "text-md/medium",
                color: "text-default",
                children: (0, r.jsx)(o.P3F, {
                    className: U.closeAction,
                    onClick: l,
                    children: (0, r.jsx)(o.Dio, {
                        size: "md",
                        color: "currentColor",
                    }),
                }),
            }),
        ],
    });
}
function v(e) {
    var { tag: t = "div", text: n, disabled: l, children: a, onClick: u } = e,
        c = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                    (n = i[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            }
            return l;
        })(e, ["tag", "text", "disabled", "children", "onClick"]);
    return (0, r.jsx)(s.u, {
        text: n,
        children: (0, r.jsx)(
            o.P3F,
            M(L({}, c), {
                tag: t,
                "aria-label": n,
                className: i()(U.bottomRowAction, { [U.bottomRowActionDisabled]: l }),
                onClick: l ? void 0 : u,
                children: (0, r.jsx)("div", {
                    className: U.innerBottomRowAction,
                    children: a,
                }),
            }),
        ),
    });
}
function P(e) {
    let { user: t, member: l, guildId: i, moderatorReportId: s } = e,
        I = (0, a.e7)([g.Z], () => g.Z.getGuild(i)),
        {
            canKickUser: f,
            canBanUser: h,
            canModerateMembers: O,
        } = (0, a.cj)(
            [N.Z, R.default, g.Z],
            () => ({
                canKickUser: (0, A.BK)(t, I),
                canBanUser: (0, A.mm)(t, I),
                canModerateMembers: null != I && (0, _.F)(I.id, t.id, [R.default, g.Z, N.Z]),
            }),
            [t, I],
        ),
        p = (0, E.b)(l),
        { analyticsLocations: C, newestAnalyticsLocation: b } = (0, c.ZP)(),
        x = (0, T.sE)(i, {
            targetUserId: t.id,
            location: b,
            locations: C,
        }),
        P = (0, a.e7)([m.default], () => m.default.getId() === (null == t ? void 0 : t.id));
    return (0, r.jsxs)("div", {
        className: U.bottomRow,
        children: [
            (0, r.jsx)(v, {
                disabled: P,
                text: D.intl.string(D.t["g33r/P"]),
                onClick: () => {
                    u.Z.openPrivateChannel({ recipientIds: t.id });
                },
                children: (0, r.jsx)(o.kBi, {
                    size: "custom",
                    color: "currentColor",
                    width: 24,
                    height: 24,
                }),
            }),
            (0, r.jsx)(v, {
                disabled: !f,
                text: D.intl.string(D.t["3glT6Z"]),
                onClick: () => {
                    (0, o.ZDy)(async () => {
                        let { default: e } = await n.e("76826").then(n.bind(n, 495494));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                M(L({}, n), {
                                    location: b,
                                    guildId: i,
                                    user: t,
                                    modReportId: s,
                                }),
                            );
                    });
                },
                children: (0, r.jsx)(o.I9k, {
                    size: "custom",
                    width: 24,
                    height: 24,
                    color: o.TVs.colors.TEXT_DEFAULT.css,
                }),
            }),
            (0, r.jsx)(v, {
                disabled: !h,
                text: D.intl.string(D.t["5MBJ5M"]),
                onClick: () => {
                    (0, o.ZDy)(async () => {
                        let { default: e } = await n.e("10533").then(n.bind(n, 497880));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                M(L({}, n), {
                                    location: b,
                                    guildId: i,
                                    user: t,
                                    modReportId: s,
                                }),
                            );
                    });
                },
                children: (0, r.jsx)(o.pgN, {
                    size: "custom",
                    width: 24,
                    height: 24,
                    color: o.TVs.colors.TEXT_DEFAULT.css,
                }),
            }),
            (0, r.jsx)(v, {
                disabled: !O,
                text: p ? D.intl.string(D.t.N86XcP) : D.intl.string(D.t.kTlLrz),
                onClick: () => {
                    p
                        ? (0, d.q)({
                              guildId: l.guildId,
                              userId: l.userId,
                              anaylticsLocations: C,
                          })
                        : (0, d.z)({
                              guildId: l.guildId,
                              userId: l.userId,
                              anaylticsLocations: C,
                              modReportId: s,
                          });
                },
                children: (0, r.jsx)(o.YlB, {
                    size: "custom",
                    width: 24,
                    height: 24,
                    color: o.TVs.colors.TEXT_DEFAULT.css,
                }),
            }),
            (0, r.jsx)(v, {
                text: D.intl.string(D.t.IHTjzA),
                onClick: () => {
                    x(T.jQ.COPY_ID), (0, S.JG)(t.id);
                },
                disabled: !S.wS,
                children: (0, r.jsx)(o.VuL, {
                    size: "custom",
                    width: 24,
                    height: 24,
                    color: o.TVs.colors.TEXT_DEFAULT.css,
                }),
            }),
        ],
    });
}
function j(e) {
    let { userId: t, guildId: n, onClose: l, moderatorReportId: i } = e,
        s = (0, a.e7)([R.default], () => R.default.getUser(t), [t]),
        o = (0, a.e7)([f.ZP], () => f.ZP.getMember(n, t), [n, t]);
    return null == s || null == o
        ? null
        : (0, r.jsxs)("div", {
              className: U.container,
              children: [
                  (0, r.jsx)(x, {
                      user: s,
                      guildId: n,
                      onClose: l,
                  }),
                  (0, r.jsx)(P, {
                      user: s,
                      member: o,
                      guildId: n,
                      moderatorReportId: i,
                  }),
              ],
          });
}
