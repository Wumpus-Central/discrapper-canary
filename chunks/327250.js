n.d(t, { ZP: () => y });
var r = n(951288);
n(647438);
var l = n(120356),
    i = n.n(l),
    a = n(399606),
    s = n(481060),
    o = n(493683),
    u = n(906732),
    c = n(69882),
    E = n(251794),
    d = n(386696),
    _ = n(946273),
    A = n(910693),
    T = n(172751),
    m = n(314897),
    I = n(592125),
    g = n(271383),
    h = n(430824),
    N = n(496675),
    O = n(158776),
    f = n(944486),
    p = n(885110),
    R = n(594174),
    S = n(572004),
    C = n(5192),
    L = n(51144),
    D = n(131085),
    U = n(388032),
    M = n(428331);
function b(e) {
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
function x(e, t) {
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
function v(e) {
    let { user: t, guildId: n, onClose: l } = e,
        i = t.id,
        o = (0, a.e7)([p.Z, O.Z, m.default], () => (i === m.default.getId() ? p.Z.getStatus() : O.Z.getStatus(i, n)), [
            i,
            n,
        ]);
    return (0, r.jsxs)("div", {
        className: M.topRow,
        children: [
            (0, r.jsxs)("div", {
                className: M.memberNameContainer,
                children: [
                    (0, r.jsx)("div", {
                        className: M.memberAvatar,
                        children: (0, r.jsx)(s.qEK, {
                            src: t.getAvatarURL(n, 48),
                            "aria-label": t.username,
                            size: s.EFr.SIZE_48,
                            status: o,
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: M.memberNameAndTagContainer,
                        children: [
                            (0, r.jsxs)("div", {
                                className: M.memberNameTextContainer,
                                children: [
                                    (0, r.jsx)(s.Text, {
                                        variant: "text-lg/medium",
                                        children: (0, r.jsx)(s.PUh, {
                                            name: C.ZP.getName(n, null, t),
                                            colorString: s.TVs.colors.HEADER_PRIMARY.css,
                                            colorStrings: null,
                                        }),
                                    }),
                                    (0, r.jsx)(T.ZP, {
                                        primaryGuild: null == t ? void 0 : t.primaryGuild,
                                        userId: null == t ? void 0 : t.id,
                                        contextGuildId: n,
                                        badgeSize: D.Gg.SIZE_16,
                                        textVariant: "heading-md/semibold",
                                        className: M.memberClanTag,
                                        containerClassName: M.memberClanTagContainer,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(s.Text, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: L.ZP.getUserTag(t),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(s.Text, {
                variant: "text-md/medium",
                color: "text-default",
                children: (0, r.jsx)(s.P3F, {
                    className: M.closeAction,
                    onClick: l,
                    children: (0, r.jsx)(s.Dio, {
                        size: "md",
                        color: "currentColor",
                    }),
                }),
            }),
        ],
    });
}
function P(e) {
    var { tag: t = "div", text: n, disabled: l, children: a, onClick: o } = e,
        u = (function (e, t) {
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
    return (0, r.jsx)(s.ua7, {
        text: n,
        children: (e) =>
            (0, r.jsx)(
                s.P3F,
                x(b({}, u, e), {
                    tag: t,
                    "aria-label": n,
                    className: i()(M.bottomRowAction, { [M.bottomRowActionDisabled]: l }),
                    onClick: l ? void 0 : o,
                    children: (0, r.jsx)("div", {
                        className: M.innerBottomRowAction,
                        children: a,
                    }),
                }),
            ),
    });
}
function j(e) {
    let { user: t, member: l, guildId: i } = e,
        T = (0, a.e7)([h.Z], () => h.Z.getGuild(i)),
        {
            canKickUser: g,
            canBanUser: O,
            canModerateMembers: p,
        } = (0, a.cj)(
            [N.Z, R.default, h.Z],
            () => ({
                canKickUser: (0, _.BK)(t, T),
                canBanUser: (0, _.mm)(t, T),
                canModerateMembers: null != T && (0, d.F)(T.id, t.id, [R.default, h.Z, N.Z]),
            }),
            [t, T],
        ),
        C = (0, c.b)(l),
        { analyticsLocations: L, newestAnalyticsLocation: D } = (0, u.ZP)(),
        v = (0, A.sE)(i, {
            targetUserId: t.id,
            location: D,
            locations: L,
        }),
        j = (0, a.e7)([m.default], () => m.default.getId() === (null == t ? void 0 : t.id)),
        y = (0, a.e7)([f.Z, I.Z], () => {
            let e = f.Z.getChannelId(i),
                t = null != e ? I.Z.getChannel(e) : null,
                n = null != t && t.isModeratorReportChannel() ? e : void 0;
            return null != n ? n : void 0;
        }, [i]);
    return (0, r.jsxs)("div", {
        className: M.bottomRow,
        children: [
            (0, r.jsx)(P, {
                disabled: j,
                text: U.intl.string(U.t["g33r/P"]),
                onClick: () => {
                    o.Z.openPrivateChannel({ recipientIds: t.id });
                },
                children: (0, r.jsx)(s.kBi, {
                    size: "custom",
                    color: "currentColor",
                    width: 24,
                    height: 24,
                }),
            }),
            (0, r.jsx)(P, {
                disabled: !g,
                text: U.intl.string(U.t["3glT6e"]),
                onClick: () => {
                    (0, s.ZDy)(async () => {
                        let { default: e } = await n.e("5454").then(n.bind(n, 854360));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                x(b({}, n), {
                                    location: D,
                                    guildId: i,
                                    user: t,
                                    modReportId: y,
                                }),
                            );
                    });
                },
                children: (0, r.jsx)(s.I9k, {
                    size: "custom",
                    width: 24,
                    height: 24,
                    color: s.TVs.colors.TEXT_DEFAULT.css,
                }),
            }),
            (0, r.jsx)(P, {
                disabled: !O,
                text: U.intl.string(U.t["5MBJ5O"]),
                onClick: () => {
                    (0, s.ZDy)(async () => {
                        let { default: e } = await n.e("43350").then(n.bind(n, 98746));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                x(b({}, n), {
                                    location: D,
                                    guildId: i,
                                    user: t,
                                    modReportId: y,
                                }),
                            );
                    });
                },
                children: (0, r.jsx)(s.pgN, {
                    size: "custom",
                    width: 24,
                    height: 24,
                    color: s.TVs.colors.TEXT_DEFAULT.css,
                }),
            }),
            (0, r.jsx)(P, {
                disabled: !p,
                text: C ? U.intl.string(U.t.N86XcH) : U.intl.string(U.t.kTlLr6),
                onClick: () => {
                    C
                        ? (0, E.q)({
                              guildId: l.guildId,
                              userId: l.userId,
                              anaylticsLocations: L,
                          })
                        : (0, E.z)({
                              guildId: l.guildId,
                              userId: l.userId,
                              anaylticsLocations: L,
                              modReportId: y,
                          });
                },
                children: (0, r.jsx)(s.YlB, {
                    size: "custom",
                    width: 24,
                    height: 24,
                    color: s.TVs.colors.TEXT_DEFAULT.css,
                }),
            }),
            (0, r.jsx)(P, {
                text: U.intl.string(U.t.IHTjzM),
                onClick: () => {
                    v(A.jQ.COPY_ID), (0, S.JG)(t.id);
                },
                disabled: !S.wS,
                children: (0, r.jsx)(s.VuL, {
                    size: "custom",
                    width: 24,
                    height: 24,
                    color: s.TVs.colors.TEXT_DEFAULT.css,
                }),
            }),
        ],
    });
}
function y(e) {
    let { userId: t, guildId: n, onClose: l } = e,
        i = (0, a.e7)([R.default], () => R.default.getUser(t), [t]),
        s = (0, a.e7)([g.ZP], () => g.ZP.getMember(n, t), [n, t]);
    return null == i || null == s
        ? null
        : (0, r.jsxs)("div", {
              className: M.container,
              children: [
                  (0, r.jsx)(v, {
                      user: i,
                      guildId: n,
                      onClose: l,
                  }),
                  (0, r.jsx)(j, {
                      user: i,
                      member: s,
                      guildId: n,
                  }),
              ],
          });
}
