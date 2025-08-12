n.d(t, { ZP: () => y });
var r = n(255367);
n(73800);
var l = n(120356),
    s = n.n(l),
    i = n(399606),
    a = n(481060),
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
    f = n(430824),
    N = n(496675),
    h = n(158776),
    O = n(944486),
    p = n(885110),
    R = n(594174),
    S = n(572004),
    C = n(5192),
    v = n(51144),
    D = n(131085),
    b = n(388032),
    L = n(466314);
function x(e) {
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
function U(e, t) {
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
function M(e) {
    let { user: t, guildId: n, onClose: l } = e,
        s = t.id,
        o = (0, i.e7)([p.Z, h.Z, m.default], () => (s === m.default.getId() ? p.Z.getStatus() : h.Z.getStatus(s, n)), [
            s,
            n,
        ]);
    return (0, r.jsxs)("div", {
        className: L.topRow,
        children: [
            (0, r.jsxs)("div", {
                className: L.memberNameContainer,
                children: [
                    (0, r.jsx)("div", {
                        className: L.memberAvatar,
                        children: (0, r.jsx)(a.qEK, {
                            src: t.getAvatarURL(n, 48),
                            "aria-label": t.username,
                            size: a.EFr.SIZE_48,
                            status: o,
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: L.memberNameAndTagContainer,
                        children: [
                            (0, r.jsxs)("div", {
                                className: L.memberNameTextContainer,
                                children: [
                                    (0, r.jsx)(a.Text, {
                                        variant: "text-lg/medium",
                                        children: (0, r.jsx)(a.PUh, {
                                            name: C.ZP.getName(n, null, t),
                                            colorString: a.TVs.colors.HEADER_PRIMARY.css,
                                            colorStrings: null,
                                        }),
                                    }),
                                    (0, r.jsx)(T.ZP, {
                                        primaryGuild: null == t ? void 0 : t.primaryGuild,
                                        userId: null == t ? void 0 : t.id,
                                        contextGuildId: n,
                                        badgeSize: D.Gg.SIZE_16,
                                        textVariant: "heading-md/semibold",
                                        className: L.memberClanTag,
                                        containerClassName: L.memberClanTagContainer,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: v.ZP.getUserTag(t),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(a.Text, {
                variant: "text-md/medium",
                color: "text-default",
                children: (0, r.jsx)(a.P3F, {
                    className: L.closeAction,
                    onClick: l,
                    children: (0, r.jsx)(a.Dio, {
                        size: "md",
                        color: "currentColor",
                    }),
                }),
            }),
        ],
    });
}
function P(e) {
    var { tag: t = "div", text: n, disabled: l, children: i, onClick: o } = e,
        u = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        s = Object.keys(e);
                    for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (r = 0; r < s.length; r++)
                    (n = s[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            }
            return l;
        })(e, ["tag", "text", "disabled", "children", "onClick"]);
    return (0, r.jsx)(a.ua7, {
        text: n,
        children: (e) =>
            (0, r.jsx)(
                a.P3F,
                U(x({}, u, e), {
                    tag: t,
                    "aria-label": n,
                    className: s()(L.bottomRowAction, { [L.bottomRowActionDisabled]: l }),
                    onClick: l ? void 0 : o,
                    children: (0, r.jsx)("div", {
                        className: L.innerBottomRowAction,
                        children: i,
                    }),
                }),
            ),
    });
}
function j(e) {
    let { user: t, member: l, guildId: s } = e,
        T = (0, i.e7)([f.Z], () => f.Z.getGuild(s)),
        {
            canKickUser: g,
            canBanUser: h,
            canModerateMembers: p,
        } = (0, i.cj)(
            [N.Z, R.default, f.Z],
            () => ({
                canKickUser: (0, _.BK)(t, T),
                canBanUser: (0, _.mm)(t, T),
                canModerateMembers: null != T && (0, d.F)(T.id, t.id, [R.default, f.Z, N.Z]),
            }),
            [t, T],
        ),
        C = (0, c.b)(l),
        { analyticsLocations: v, newestAnalyticsLocation: D } = (0, u.ZP)(),
        M = (0, A.sE)(s, {
            targetUserId: t.id,
            location: D,
            locations: v,
        }),
        j = (0, i.e7)([m.default], () => m.default.getId() === (null == t ? void 0 : t.id)),
        y = (0, i.e7)([O.Z, I.Z], () => {
            let e = O.Z.getChannelId(s),
                t = null != e ? I.Z.getChannel(e) : null,
                n = null != t && t.isModeratorReportChannel() ? e : void 0;
            return null != n ? n : void 0;
        }, [s]);
    return (0, r.jsxs)("div", {
        className: L.bottomRow,
        children: [
            (0, r.jsx)(P, {
                disabled: j,
                text: b.intl.string(b.t["g33r/P"]),
                onClick: () => {
                    o.Z.openPrivateChannel({ recipientIds: t.id });
                },
                children: (0, r.jsx)(a.kBi, {
                    size: "custom",
                    color: "currentColor",
                    width: 24,
                    height: 24,
                }),
            }),
            (0, r.jsx)(P, {
                disabled: !g,
                text: b.intl.string(b.t["3glT6e"]),
                onClick: () => {
                    (0, a.ZDy)(async () => {
                        let { default: e } = await n.e("5454").then(n.bind(n, 854360));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                U(x({}, n), {
                                    location: D,
                                    guildId: s,
                                    user: t,
                                    modReportId: y,
                                }),
                            );
                    });
                },
                children: (0, r.jsx)(a.I9k, {
                    size: "custom",
                    width: 24,
                    height: 24,
                    color: a.TVs.colors.TEXT_DEFAULT.css,
                }),
            }),
            (0, r.jsx)(P, {
                disabled: !h,
                text: b.intl.string(b.t["5MBJ5O"]),
                onClick: () => {
                    (0, a.ZDy)(async () => {
                        let { default: e } = await n.e("43350").then(n.bind(n, 98746));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                U(x({}, n), {
                                    location: D,
                                    guildId: s,
                                    user: t,
                                    modReportId: y,
                                }),
                            );
                    });
                },
                children: (0, r.jsx)(a.pgN, {
                    size: "custom",
                    width: 24,
                    height: 24,
                    color: a.TVs.colors.TEXT_DEFAULT.css,
                }),
            }),
            (0, r.jsx)(P, {
                disabled: !p,
                text: C ? b.intl.string(b.t.N86XcH) : b.intl.string(b.t.kTlLr6),
                onClick: () => {
                    C
                        ? (0, E.q)({
                              guildId: l.guildId,
                              userId: l.userId,
                              anaylticsLocations: v,
                          })
                        : (0, E.z)({
                              guildId: l.guildId,
                              userId: l.userId,
                              anaylticsLocations: v,
                              modReportId: y,
                          });
                },
                children: (0, r.jsx)(a.YlB, {
                    size: "custom",
                    width: 24,
                    height: 24,
                    color: a.TVs.colors.TEXT_DEFAULT.css,
                }),
            }),
            (0, r.jsx)(P, {
                text: b.intl.string(b.t.IHTjzM),
                onClick: () => {
                    M(A.jQ.COPY_ID), (0, S.JG)(t.id);
                },
                disabled: !S.wS,
                children: (0, r.jsx)(a.VuL, {
                    size: "custom",
                    width: 24,
                    height: 24,
                    color: a.TVs.colors.TEXT_DEFAULT.css,
                }),
            }),
        ],
    });
}
function y(e) {
    let { userId: t, guildId: n, onClose: l } = e,
        s = (0, i.e7)([R.default], () => R.default.getUser(t), [t]),
        a = (0, i.e7)([g.ZP], () => g.ZP.getMember(n, t), [n, t]);
    return null == s || null == a
        ? null
        : (0, r.jsxs)("div", {
              className: L.container,
              children: [
                  (0, r.jsx)(M, {
                      user: s,
                      guildId: n,
                      onClose: l,
                  }),
                  (0, r.jsx)(j, {
                      user: s,
                      member: a,
                      guildId: n,
                  }),
              ],
          });
}
