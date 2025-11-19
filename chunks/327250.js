n.d(t, { ZP: () => G });
var r = n(54381);
n(473749);
var l = n(120356),
    i = n.n(l),
    s = n(399606),
    a = n(28664),
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
    g = n(592125),
    N = n(271383),
    h = n(430824),
    O = n(496675),
    f = n(158776),
    R = n(944486),
    S = n(885110),
    p = n(594174),
    C = n(572004),
    D = n(5192),
    U = n(51144),
    L = n(131085),
    M = n(388032),
    x = n(428331);
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
function v(e, t) {
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
function P(e) {
    let { user: t, guildId: n, onClose: l } = e,
        i = t.id,
        a = (0, s.e7)([S.Z, f.Z, m.default], () => (i === m.default.getId() ? S.Z.getStatus() : f.Z.getStatus(i, n)), [
            i,
            n,
        ]);
    return (0, r.jsxs)("div", {
        className: x.topRow,
        children: [
            (0, r.jsxs)("div", {
                className: x.memberNameContainer,
                children: [
                    (0, r.jsx)("div", {
                        className: x.memberAvatar,
                        children: (0, r.jsx)(o.qEK, {
                            src: t.getAvatarURL(n, 48),
                            "aria-label": t.username,
                            size: o.EFr.SIZE_48,
                            status: a,
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: x.memberNameAndTagContainer,
                        children: [
                            (0, r.jsxs)("div", {
                                className: x.memberNameTextContainer,
                                children: [
                                    (0, r.jsx)(o.Text, {
                                        variant: "text-lg/medium",
                                        children: (0, r.jsx)(o.PUh, {
                                            name: D.ZP.getName(n, null, t),
                                            colorString: o.TVs.colors.HEADER_PRIMARY.css,
                                            colorStrings: null,
                                        }),
                                    }),
                                    (0, r.jsx)(I.ZP, {
                                        primaryGuild: null == t ? void 0 : t.primaryGuild,
                                        userId: null == t ? void 0 : t.id,
                                        contextGuildId: n,
                                        badgeSize: L.Gg.SIZE_16,
                                        textVariant: "heading-md/semibold",
                                        className: x.memberClanTag,
                                        containerClassName: x.memberClanTagContainer,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(o.Text, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: U.ZP.getUserTag(t),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(o.Text, {
                variant: "text-md/medium",
                color: "text-default",
                children: (0, r.jsx)(o.P3F, {
                    className: x.closeAction,
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
function j(e) {
    var { tag: t = "div", text: n, disabled: l, children: s, onClick: u } = e,
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
    return (0, r.jsx)(a.u, {
        text: n,
        children: (0, r.jsx)(
            o.P3F,
            v(b({}, c), {
                tag: t,
                "aria-label": n,
                className: i()(x.bottomRowAction, { [x.bottomRowActionDisabled]: l }),
                onClick: l ? void 0 : u,
                children: (0, r.jsx)("div", {
                    className: x.innerBottomRowAction,
                    children: s,
                }),
            }),
        ),
    });
}
function y(e) {
    let { user: t, member: l, guildId: i } = e,
        a = (0, s.e7)([h.Z], () => h.Z.getGuild(i)),
        {
            canKickUser: I,
            canBanUser: N,
            canModerateMembers: f,
        } = (0, s.cj)(
            [O.Z, p.default, h.Z],
            () => ({
                canKickUser: (0, A.BK)(t, a),
                canBanUser: (0, A.mm)(t, a),
                canModerateMembers: null != a && (0, _.F)(a.id, t.id, [p.default, h.Z, O.Z]),
            }),
            [t, a],
        ),
        S = (0, E.b)(l),
        { analyticsLocations: D, newestAnalyticsLocation: U } = (0, c.ZP)(),
        L = (0, T.sE)(i, {
            targetUserId: t.id,
            location: U,
            locations: D,
        }),
        P = (0, s.e7)([m.default], () => m.default.getId() === (null == t ? void 0 : t.id)),
        y = (0, s.e7)([R.Z, g.Z], () => {
            let e = R.Z.getChannelId(i),
                t = null != e ? g.Z.getChannel(e) : null,
                n = null != t && t.isModeratorReportChannel() ? e : void 0;
            return null != n ? n : void 0;
        }, [i]);
    return (0, r.jsxs)("div", {
        className: x.bottomRow,
        children: [
            (0, r.jsx)(j, {
                disabled: P,
                text: M.intl.string(M.t["g33r/P"]),
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
            (0, r.jsx)(j, {
                disabled: !I,
                text: M.intl.string(M.t["3glT6Z"]),
                onClick: () => {
                    (0, o.ZDy)(async () => {
                        let { default: e } = await n.e("76826").then(n.bind(n, 495494));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                v(b({}, n), {
                                    location: U,
                                    guildId: i,
                                    user: t,
                                    modReportId: y,
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
            (0, r.jsx)(j, {
                disabled: !N,
                text: M.intl.string(M.t["5MBJ5M"]),
                onClick: () => {
                    (0, o.ZDy)(async () => {
                        let { default: e } = await n.e("10533").then(n.bind(n, 497880));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                v(b({}, n), {
                                    location: U,
                                    guildId: i,
                                    user: t,
                                    modReportId: y,
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
            (0, r.jsx)(j, {
                disabled: !f,
                text: S ? M.intl.string(M.t.N86XcP) : M.intl.string(M.t.kTlLrz),
                onClick: () => {
                    S
                        ? (0, d.q)({
                              guildId: l.guildId,
                              userId: l.userId,
                              anaylticsLocations: D,
                          })
                        : (0, d.z)({
                              guildId: l.guildId,
                              userId: l.userId,
                              anaylticsLocations: D,
                              modReportId: y,
                          });
                },
                children: (0, r.jsx)(o.YlB, {
                    size: "custom",
                    width: 24,
                    height: 24,
                    color: o.TVs.colors.TEXT_DEFAULT.css,
                }),
            }),
            (0, r.jsx)(j, {
                text: M.intl.string(M.t.IHTjzA),
                onClick: () => {
                    L(T.jQ.COPY_ID), (0, C.JG)(t.id);
                },
                disabled: !C.wS,
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
function G(e) {
    let { userId: t, guildId: n, onClose: l } = e,
        i = (0, s.e7)([p.default], () => p.default.getUser(t), [t]),
        a = (0, s.e7)([N.ZP], () => N.ZP.getMember(n, t), [n, t]);
    return null == i || null == a
        ? null
        : (0, r.jsxs)("div", {
              className: x.container,
              children: [
                  (0, r.jsx)(P, {
                      user: i,
                      guildId: n,
                      onClose: l,
                  }),
                  (0, r.jsx)(y, {
                      user: i,
                      member: a,
                      guildId: n,
                  }),
              ],
          });
}
