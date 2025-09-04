r.d(t, { Z: () => A }), r(781311), r(388685);
var n = r(951288),
    i = r(647438),
    l = r(120356),
    a = r.n(l),
    o = r(624238),
    c = r(296009),
    s = r(481060),
    u = r(313201),
    d = r(810568),
    f = r(168524),
    g = r(594174),
    b = r(5192),
    p = r(785717),
    m = r(86419),
    O = r(747101),
    y = r(971082),
    j = r(817053),
    v = r(248554),
    x = r(879877),
    h = r(533815),
    w = r(853072),
    P = r(388032),
    S = r(932366),
    E = r(776385);
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
function k(e) {
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
    let a = (0, f.Z)({
        location: "UserProfileWidgetGameDetailsCard",
        applicationId: t,
        source: d.m1.UserProfile,
        sourceUserId: r,
        trackEntryPointImpression: !0,
    });
    return null == a
        ? (0, n.jsx)(s.X6q, D(I({}, l), { children: i }))
        : (0, n.jsx)(
              s.X6q,
              D(I({}, l), {
                  children: (0, n.jsx)(s.P3F, {
                      onClick: a,
                      className: E.clickableText,
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
function Z(e) {
    let { text: t, className: r } = e;
    return (0, n.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "text-tertiary",
        className: r,
        children: t,
    });
}
function T(e) {
    let { text: t, user: r, guildId: i, channelId: l } = e,
        a = (0, u.Dt)();
    return null == t || "" === t.trim()
        ? null
        : (0, n.jsxs)("div", {
              role: "group",
              "aria-labelledby": a,
              children: [
                  (0, n.jsx)(s.PEf, {
                      size: "xxs",
                      color: s.TVs.colors.ICON_TERTIARY,
                      className: E.commentIcon,
                  }),
                  (0, n.jsx)(N, {
                      user: r,
                      guildId: i,
                      channelId: l,
                      id: a,
                  }),
                  (0, n.jsx)(Z, { text: t }),
              ],
          });
}
function C(e) {
    let { text: t, user: r, guildId: l, channelId: c, widgetType: d, applicationId: f } = e,
        g = (0, u.Dt)(),
        b = (0, u.Dt)(),
        { trackUserProfileEditAction: O } = (0, p.KZ)(),
        [y, j] = i.useState("idle"),
        [v, x] = i.useState(null != t ? t : ""),
        h = i.useRef(null),
        w = i.useRef(null),
        S = P.intl.string(P.t.xKSfBQ),
        I = null != t && "" !== t.trim(),
        D = i.useCallback(() => {
            O({
                action: "PRESS_ADD_COMMENTARY",
                widgetEdited: d,
            }),
                j("editing");
        }, [d, O]),
        k = i.useCallback(() => {
            let e = v.trim(),
                r = e !== (null != t ? t : "").trim();
            (0, m.Bu)(d, f, "" !== e ? e : void 0),
                j("completed"),
                r &&
                    O({
                        action: "COMMENTARY_EDITED",
                        widgetEdited: d,
                        gameId: f,
                    });
        }, [d, f, v, t, O]),
        T = i.useCallback((e) => {
            x(e);
        }, []);
    return (
        i.useEffect(() => {
            "editing" === y && x(null != t ? t : "");
        }, [t, y]),
        i.useEffect(() => {
            if ("completed" === y) {
                var e;
                null == (e = h.current) || e.focus();
            }
        }, [y]),
        "editing" === y
            ? (0, n.jsxs)("div", {
                  className: E.textAreaContainer,
                  children: [
                      (0, n.jsx)(s.nn4, {
                          tag: "label",
                          htmlFor: g,
                          children: P.intl.string(P.t.JxKXeX),
                      }),
                      (0, n.jsx)(s.Kx8, {
                          id: g,
                          value: v,
                          placeholder: S,
                          onChange: T,
                          onBlur: k,
                          rows: 3,
                          autoFocus: "editing" === y,
                          onKeyDown: (e) => {
                              "Enter" !== e.key || e.shiftKey || (e.preventDefault(), k());
                          },
                          maxLength: o.r,
                      }),
                  ],
              })
            : (0, n.jsxs)("div", {
                  ref: w,
                  role: "group",
                  "aria-labelledby": b,
                  onClick: D,
                  className: E.editableCommentContainer,
                  children: [
                      (0, n.jsx)(s.vdY, {
                          size: "xxs",
                          color: s.TVs.colors.ICON_TERTIARY,
                          className: E.commentIcon,
                      }),
                      (0, n.jsx)(N, {
                          user: r,
                          guildId: l,
                          channelId: c,
                          id: b,
                      }),
                      (0, n.jsx)(Z, {
                          text: null != t ? t : S,
                          className: a()(E.editableCommentText, !I && E.placeholder),
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
function R(e) {
    let { applicationId: t, guildId: r, channelId: i, className: l } = e,
        a = (0, w.Z)(t);
    return a.length > 0
        ? (0, n.jsx)(y.Z, {
              label: P.intl.formatToPlainString(P.t.ujhJdH, { numFriends: a.length }),
              className: l,
              users: a,
              guildId: r,
              channelId: i,
          })
        : null;
}
function A(e) {
    let { user: t, guildId: r, channelId: i, game: l, widgetType: a, disableInteraction: o = !1 } = e,
        { gameName: u = P.intl.string(P.t.GIWFlJ), imageSrc: d, applicationId: f, comment: b, tags: p } = l,
        m = {
            variant: "heading-sm/medium",
            color: "text-default",
        },
        y = g.default.getCurrentUser(),
        w = (null == y ? void 0 : y.id) === t.id,
        N = !o && w && a === c.l.FAVORITE_GAMES;
    return (0, O.kO)(f)
        ? (0, n.jsx)(v.i, {})
        : (0, n.jsxs)("div", {
              className: E.card,
              children: [
                  (0, n.jsx)(j.Z, {
                      className: null == d || o ? void 0 : S.hoverActiveEffect,
                      imageSrc: d,
                      gameName: u,
                      applicationId: f,
                      userId: t.id,
                      disableInteraction: o,
                      hideTooltip: !0,
                  }),
                  (0, n.jsxs)("div", {
                      className: E.details,
                      children: [
                          o
                              ? (0, n.jsx)(s.X6q, D(I({}, m), { children: u }))
                              : (0, n.jsx)(
                                    k,
                                    I(
                                        {
                                            applicationId: f,
                                            userId: t.id,
                                            gameName: u,
                                        },
                                        m,
                                    ),
                                ),
                          N
                              ? (0, n.jsx)(C, {
                                    text: b,
                                    user: t,
                                    guildId: r,
                                    channelId: i,
                                    widgetType: a,
                                    applicationId: f,
                                })
                              : (0, n.jsx)(T, {
                                    text: b,
                                    user: t,
                                    guildId: r,
                                    channelId: i,
                                }),
                          (0, n.jsx)(x.Z, {
                              tags: p,
                              isCurrentUser: w,
                              widgetType: a,
                              applicationId: f,
                              disableInteraction: o,
                              className: E.tags,
                          }),
                          !o &&
                              (0, n.jsx)(R, {
                                  className: E.socialProof,
                                  applicationId: f,
                                  guildId: r,
                                  channelId: i,
                              }),
                      ],
                  }),
                  !o &&
                      w &&
                      (0, n.jsx)(h.Z, {
                          game: l,
                          widgetType: a,
                          className: E.removeGameButton,
                      }),
              ],
          });
}
