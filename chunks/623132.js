r.d(t, { Z: () => R }), r(781311), r(388685);
var n = r(951288),
    i = r(647438),
    l = r(120356),
    o = r.n(l),
    a = r(624238),
    c = r(296009),
    s = r(481060),
    u = r(313201),
    d = r(810568),
    f = r(168524),
    g = r(594174),
    b = r(5192),
    p = r(785717),
    O = r(86419),
    y = r(747101),
    j = r(971082),
    m = r(817053),
    v = r(248554),
    x = r(879877),
    h = r(533815),
    w = r(853072),
    P = r(388032),
    E = r(932366),
    S = r(776385);
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function D(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
function T(e) {
    var { applicationId: t, userId: r, gameName: i } = e,
        l = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                i = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        i = {},
                        l = Object.keys(e);
                    for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (n = 0; n < l.length; n++)
                    (r = l[n]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            }
            return i;
        })(e, ["applicationId", "userId", "gameName"]);
    let o = (0, f.Z)({
        location: "UserProfileWidgetGameDetailsCard",
        applicationId: t,
        source: d.m1.UserProfile,
        sourceUserId: r,
        trackEntryPointImpression: !0,
    });
    return null == o
        ? (0, n.jsx)(s.X6q, D(I({}, l), { children: i }))
        : (0, n.jsx)(
              s.X6q,
              D(I({}, l), {
                  children: (0, n.jsx)(s.P3F, {
                      onClick: o,
                      className: S.clickableText,
                      children: i,
                  }),
              }),
          );
}
function N(e) {
    let { user: t, guildId: r, channelId: i, id: l } = e;
    return (0, n.jsx)(s.nn4, {
        id: l,
        children: P.intl.format(P.t.TM0XDQ, { name: b.ZP.getName(r, i, t) }),
    });
}
function k(e) {
    let { text: t, className: r } = e;
    return (0, n.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "text-tertiary",
        className: r,
        children: t,
    });
}
function _(e) {
    let { text: t, user: r, guildId: i, channelId: l } = e,
        o = (0, u.Dt)();
    return null == t || "" === t.trim()
        ? null
        : (0, n.jsxs)("div", {
              role: "group",
              "aria-labelledby": o,
              children: [
                  (0, n.jsx)(s.PEf, {
                      size: "xxs",
                      color: s.TVs.colors.ICON_TERTIARY,
                      className: S.commentIcon,
                  }),
                  (0, n.jsx)(N, {
                      user: r,
                      guildId: i,
                      channelId: l,
                      id: o,
                  }),
                  (0, n.jsx)(k, { text: t }),
              ],
          });
}
function Z(e) {
    let { text: t, user: r, guildId: l, channelId: c, widgetType: d, applicationId: f } = e,
        g = (0, u.Dt)(),
        b = (0, u.Dt)(),
        { trackUserProfileEditAction: y } = (0, p.KZ)(),
        [j, m] = i.useState("idle"),
        [v, x] = i.useState(null != t ? t : ""),
        h = i.useRef(null),
        w = i.useRef(null),
        E = P.intl.string(P.t.xKSfBQ),
        I = null != t && "" !== t.trim(),
        D = i.useCallback(() => {
            y({
                action: "PRESS_ADD_COMMENTARY",
                widgetEdited: d,
            }),
                m("editing");
        }, [d, y]),
        T = i.useCallback(() => {
            let e = v.trim(),
                r = e !== (null != t ? t : "").trim();
            (0, O.Bu)(d, f, "" !== e ? e : void 0),
                m("completed"),
                r &&
                    y({
                        action: "COMMENTARY_EDITED",
                        widgetEdited: d,
                        gameId: f,
                    });
        }, [d, f, v, t, y]),
        _ = i.useCallback((e) => {
            x(e);
        }, []);
    return (
        i.useEffect(() => {
            "editing" === j && x(null != t ? t : "");
        }, [t, j]),
        i.useEffect(() => {
            if ("completed" === j) {
                var e;
                null == (e = h.current) || e.focus();
            }
        }, [j]),
        "editing" === j
            ? (0, n.jsxs)("div", {
                  className: S.textAreaContainer,
                  children: [
                      (0, n.jsx)(s.nn4, {
                          tag: "label",
                          htmlFor: g,
                          children: P.intl.string(P.t.JxKXeX),
                      }),
                      (0, n.jsx)(s.Kx8, {
                          id: g,
                          value: v,
                          placeholder: E,
                          onChange: _,
                          onBlur: T,
                          rows: 3,
                          autoFocus: "editing" === j,
                          onKeyDown: (e) => {
                              "Enter" !== e.key || e.shiftKey || (e.preventDefault(), T());
                          },
                          maxLength: a.rN,
                      }),
                  ],
              })
            : (0, n.jsxs)("div", {
                  ref: w,
                  role: "group",
                  "aria-labelledby": b,
                  onClick: D,
                  className: S.editableCommentContainer,
                  children: [
                      (0, n.jsx)(s.vdY, {
                          size: "xxs",
                          color: s.TVs.colors.ICON_TERTIARY,
                          className: S.commentIcon,
                      }),
                      (0, n.jsx)(N, {
                          user: r,
                          guildId: l,
                          channelId: c,
                          id: b,
                      }),
                      (0, n.jsx)(k, {
                          text: null != t ? t : E,
                          className: o()(S.editableCommentText, !I && S.placeholder),
                      }),
                      (0, n.jsx)(s.P3F, {
                          innerRef: h,
                          "aria-label": P.intl.string(P.t.ppb9MD),
                          onClick: (e) => {
                              e.stopPropagation(), D();
                          },
                          focusProps: { ringTarget: w },
                      }),
                  ],
              })
    );
}
function A(e) {
    let { applicationId: t, guildId: r, channelId: i, className: l } = e,
        o = (0, w.Z)(t);
    return o.length > 0
        ? (0, n.jsx)(j.Z, {
              label: P.intl.formatToPlainString(P.t.ujhJdH, { numFriends: o.length }),
              className: l,
              users: o,
              guildId: r,
              channelId: i,
          })
        : null;
}
function R(e) {
    let { user: t, guildId: r, channelId: i, game: l, widgetType: o, disableInteraction: a = !1 } = e,
        { gameName: u = P.intl.string(P.t.GIWFlJ), imageSrc: d, applicationId: f, comment: b, tags: p } = l,
        O = {
            variant: "heading-sm/medium",
            color: "text-default",
        },
        j = g.default.getCurrentUser(),
        w = (null == j ? void 0 : j.id) === t.id,
        N = !a && w && o === c.l.FAVORITE_GAMES;
    return (0, y.kO)(f)
        ? (0, n.jsx)(v.i, {})
        : (0, n.jsxs)("div", {
              className: S.card,
              children: [
                  (0, n.jsx)(m.Z, {
                      className: null == d || a ? void 0 : E.hoverActiveEffect,
                      imageSrc: d,
                      gameName: u,
                      applicationId: f,
                      userId: t.id,
                      disableInteraction: a,
                      hideTooltip: !0,
                  }),
                  (0, n.jsxs)("div", {
                      className: S.details,
                      children: [
                          a
                              ? (0, n.jsx)(s.X6q, D(I({}, O), { children: u }))
                              : (0, n.jsx)(
                                    T,
                                    I(
                                        {
                                            applicationId: f,
                                            userId: t.id,
                                            gameName: u,
                                        },
                                        O,
                                    ),
                                ),
                          N
                              ? (0, n.jsx)(Z, {
                                    text: b,
                                    user: t,
                                    guildId: r,
                                    channelId: i,
                                    widgetType: o,
                                    applicationId: f,
                                })
                              : (0, n.jsx)(_, {
                                    text: b,
                                    user: t,
                                    guildId: r,
                                    channelId: i,
                                }),
                          (0, n.jsx)(x.Z, {
                              tags: p,
                              isCurrentUser: w,
                              widgetType: o,
                              applicationId: f,
                              disableInteraction: a,
                              className: S.tags,
                          }),
                          !a &&
                              (0, n.jsx)(A, {
                                  className: S.socialProof,
                                  applicationId: f,
                                  guildId: r,
                                  channelId: i,
                              }),
                      ],
                  }),
                  !a &&
                      w &&
                      (0, n.jsx)(h.Z, {
                          game: l,
                          widgetType: o,
                          className: S.removeGameButton,
                      }),
              ],
          });
}
