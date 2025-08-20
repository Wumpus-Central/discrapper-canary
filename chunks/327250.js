t.d(e, { ZP: () => x });
var n = t(951288);
t(647438);
var r = t(120356),
    l = t.n(r),
    i = t(399606),
    s = t(481060),
    a = t(493683),
    o = t(906732),
    g = t(69882),
    c = t(251794),
    f = t(386696),
    v = t(946273),
    h = t(910693),
    u = t(172751),
    d = t(314897),
    E = t(592125),
    C = t(271383),
    B = t(430824),
    w = t(496675),
    D = t(158776),
    M = t(944486),
    p = t(885110),
    I = t(594174),
    H = t(572004),
    b = t(5192),
    Q = t(51144),
    O = t(131085),
    P = t(388032),
    V = t(428331);
function j(A) {
    for (var e = 1; e < arguments.length; e++) {
        var t = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(t).filter(function (A) {
                    return Object.getOwnPropertyDescriptor(t, A).enumerable;
                }),
            )),
            n.forEach(function (e) {
                var n;
                (n = t[e]),
                    e in A
                        ? Object.defineProperty(A, e, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (A[e] = n);
            });
    }
    return A;
}
function m(A, e) {
    return (
        (e = null != e ? e : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(e))
            : (function (A, e) {
                  var t = Object.keys(A);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(A);
                      t.push.apply(t, n);
                  }
                  return t;
              })(Object(e)).forEach(function (t) {
                  Object.defineProperty(A, t, Object.getOwnPropertyDescriptor(e, t));
              }),
        A
    );
}
function T(A) {
    let { user: e, guildId: t, onClose: r } = A,
        l = e.id,
        a = (0, i.e7)([p.Z, D.Z, d.default], () => (l === d.default.getId() ? p.Z.getStatus() : D.Z.getStatus(l, t)), [
            l,
            t,
        ]);
    return (0, n.jsxs)("div", {
        className: V.topRow,
        children: [
            (0, n.jsxs)("div", {
                className: V.memberNameContainer,
                children: [
                    (0, n.jsx)("div", {
                        className: V.memberAvatar,
                        children: (0, n.jsx)(s.qEK, {
                            src: e.getAvatarURL(t, 48),
                            "aria-label": e.username,
                            size: s.EFr.SIZE_48,
                            status: a,
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        className: V.memberNameAndTagContainer,
                        children: [
                            (0, n.jsxs)("div", {
                                className: V.memberNameTextContainer,
                                children: [
                                    (0, n.jsx)(s.Text, {
                                        variant: "text-lg/medium",
                                        children: (0, n.jsx)(s.PUh, {
                                            name: b.ZP.getName(t, null, e),
                                            colorString: s.TVs.colors.HEADER_PRIMARY.css,
                                            colorStrings: null,
                                        }),
                                    }),
                                    (0, n.jsx)(u.ZP, {
                                        primaryGuild: null == e ? void 0 : e.primaryGuild,
                                        userId: null == e ? void 0 : e.id,
                                        contextGuildId: t,
                                        badgeSize: O.Gg.SIZE_16,
                                        textVariant: "heading-md/semibold",
                                        className: V.memberClanTag,
                                        containerClassName: V.memberClanTagContainer,
                                    }),
                                ],
                            }),
                            (0, n.jsx)(s.Text, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: Q.ZP.getUserTag(e),
                            }),
                        ],
                    }),
                ],
            }),
            (0, n.jsx)(s.Text, {
                variant: "text-md/medium",
                color: "text-default",
                children: (0, n.jsx)(s.P3F, {
                    className: V.closeAction,
                    onClick: r,
                    children: (0, n.jsx)(s.Dio, {
                        size: "md",
                        color: "currentColor",
                    }),
                }),
            }),
        ],
    });
}
function y(A) {
    var { tag: e = "div", text: t, disabled: r, children: i, onClick: a } = A,
        o = (function (A, e) {
            if (null == A) return {};
            var t,
                n,
                r = (function (A, e) {
                    if (null == A) return {};
                    var t,
                        n,
                        r = {},
                        l = Object.keys(A);
                    for (n = 0; n < l.length; n++) (t = l[n]), e.indexOf(t) >= 0 || (r[t] = A[t]);
                    return r;
                })(A, e);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(A);
                for (n = 0; n < l.length; n++)
                    (t = l[n]),
                        !(e.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(A, t) && (r[t] = A[t]);
            }
            return r;
        })(A, ["tag", "text", "disabled", "children", "onClick"]);
    return (0, n.jsx)(s.ua7, {
        text: t,
        children: (A) =>
            (0, n.jsx)(
                s.P3F,
                m(j({}, o, A), {
                    tag: e,
                    "aria-label": t,
                    className: l()(V.bottomRowAction, { [V.bottomRowActionDisabled]: r }),
                    onClick: r ? void 0 : a,
                    children: (0, n.jsx)("div", {
                        className: V.innerBottomRowAction,
                        children: i,
                    }),
                }),
            ),
    });
}
function L(A) {
    let { user: e, member: r, guildId: l } = A,
        u = (0, i.e7)([B.Z], () => B.Z.getGuild(l)),
        {
            canKickUser: C,
            canBanUser: D,
            canModerateMembers: p,
        } = (0, i.cj)(
            [w.Z, I.default, B.Z],
            () => ({
                canKickUser: (0, v.BK)(e, u),
                canBanUser: (0, v.mm)(e, u),
                canModerateMembers: null != u && (0, f.F)(u.id, e.id, [I.default, B.Z, w.Z]),
            }),
            [e, u],
        ),
        b = (0, g.b)(r),
        { analyticsLocations: Q, newestAnalyticsLocation: O } = (0, o.ZP)(),
        T = (0, h.sE)(l, {
            targetUserId: e.id,
            location: O,
            locations: Q,
        }),
        L = (0, i.e7)([d.default], () => d.default.getId() === (null == e ? void 0 : e.id)),
        x = (0, i.e7)([M.Z, E.Z], () => {
            let A = M.Z.getChannelId(l),
                e = null != A ? E.Z.getChannel(A) : null,
                t = null != e && e.isModeratorReportChannel() ? A : void 0;
            return null != t ? t : void 0;
        }, [l]);
    return (0, n.jsxs)("div", {
        className: V.bottomRow,
        children: [
            (0, n.jsx)(y, {
                disabled: L,
                text: P.intl.string(P.t["g33r/P"]),
                onClick: () => {
                    a.Z.openPrivateChannel({ recipientIds: e.id });
                },
                children: (0, n.jsx)(s.kBi, {
                    size: "custom",
                    color: "currentColor",
                    width: 24,
                    height: 24,
                }),
            }),
            (0, n.jsx)(y, {
                disabled: !C,
                text: P.intl.string(P.t["3glT6e"]),
                onClick: () => {
                    (0, s.ZDy)(async () => {
                        let { default: A } = await t.e("5454").then(t.bind(t, 854360));
                        return (t) =>
                            (0, n.jsx)(
                                A,
                                m(j({}, t), {
                                    location: O,
                                    guildId: l,
                                    user: e,
                                    modReportId: x,
                                }),
                            );
                    });
                },
                children: (0, n.jsx)(s.I9k, {
                    size: "custom",
                    width: 24,
                    height: 24,
                    color: s.TVs.colors.TEXT_DEFAULT.css,
                }),
            }),
            (0, n.jsx)(y, {
                disabled: !D,
                text: P.intl.string(P.t["5MBJ5O"]),
                onClick: () => {
                    (0, s.ZDy)(async () => {
                        let { default: A } = await t.e("43350").then(t.bind(t, 98746));
                        return (t) =>
                            (0, n.jsx)(
                                A,
                                m(j({}, t), {
                                    location: O,
                                    guildId: l,
                                    user: e,
                                    modReportId: x,
                                }),
                            );
                    });
                },
                children: (0, n.jsx)(s.pgN, {
                    size: "custom",
                    width: 24,
                    height: 24,
                    color: s.TVs.colors.TEXT_DEFAULT.css,
                }),
            }),
            (0, n.jsx)(y, {
                disabled: !p,
                text: b ? P.intl.string(P.t.N86XcH) : P.intl.string(P.t.kTlLr6),
                onClick: () => {
                    b
                        ? (0, c.q)({
                              guildId: r.guildId,
                              userId: r.userId,
                              anaylticsLocations: Q,
                          })
                        : (0, c.z)({
                              guildId: r.guildId,
                              userId: r.userId,
                              anaylticsLocations: Q,
                              modReportId: x,
                          });
                },
                children: (0, n.jsx)(s.YlB, {
                    size: "custom",
                    width: 24,
                    height: 24,
                    color: s.TVs.colors.TEXT_DEFAULT.css,
                }),
            }),
            (0, n.jsx)(y, {
                text: P.intl.string(P.t.IHTjzM),
                onClick: () => {
                    T(h.jQ.COPY_ID), (0, H.JG)(e.id);
                },
                disabled: !H.wS,
                children: (0, n.jsx)(s.VuL, {
                    size: "custom",
                    width: 24,
                    height: 24,
                    color: s.TVs.colors.TEXT_DEFAULT.css,
                }),
            }),
        ],
    });
}
function x(A) {
    let { userId: e, guildId: t, onClose: r } = A,
        l = (0, i.e7)([I.default], () => I.default.getUser(e), [e]),
        s = (0, i.e7)([C.ZP], () => C.ZP.getMember(t, e), [t, e]);
    return null == l || null == s
        ? null
        : (0, n.jsxs)("div", {
              className: V.container,
              children: [
                  (0, n.jsx)(T, {
                      user: l,
                      guildId: t,
                      onClose: r,
                  }),
                  (0, n.jsx)(L, {
                      user: l,
                      member: s,
                      guildId: t,
                  }),
              ],
          });
}
