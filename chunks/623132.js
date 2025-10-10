r.d(t, { Z: () => C }), r(781311), r(388685);
var n = r(951288),
    i = r(647438),
    o = r(120356),
    a = r.n(o),
    l = r(624238),
    c = r(296009),
    s = r(481060),
    u = r(313201),
    d = r(810568),
    f = r(168524),
    g = r(594174),
    p = r(5192),
    b = r(785717),
    m = r(86419),
    O = r(747101),
    y = r(817053),
    j = r(248554),
    x = r(879877),
    h = r(533815),
    v = r(919498),
    _ = r(388032),
    w = r(932366),
    P = r(776385);
function E(e) {
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
function I(e, t) {
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
function S(e) {
    var { applicationId: t, userId: r, gameName: i } = e,
        o = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                i = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        i = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) (r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (n = 0; n < o.length; n++)
                    (r = o[n]),
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
        ? (0, n.jsx)(s.X6q, I(E({}, o), { children: i }))
        : (0, n.jsx)(
              s.X6q,
              I(E({}, o), {
                  children: (0, n.jsx)(s.P3F, {
                      onClick: a,
                      className: P.clickableText,
                      children: i,
                  }),
              }),
          );
}
function T(e) {
    let { user: t, guildId: r, channelId: i, id: o } = e;
    return (0, n.jsx)(s.nn4, {
        id: o,
        children: _.intl.format(_.t.TM0XDQ, { name: p.ZP.getName(r, i, t) }),
    });
}
function D(e) {
    let { text: t, className: r } = e;
    return (0, n.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "text-tertiary",
        className: r,
        children: t,
    });
}
function N(e) {
    let { text: t, user: r, guildId: i, channelId: o } = e,
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
                      className: P.commentIcon,
                  }),
                  (0, n.jsx)(T, {
                      user: r,
                      guildId: i,
                      channelId: o,
                      id: a,
                  }),
                  (0, n.jsx)(D, { text: t }),
              ],
          });
}
function k(e) {
    let { text: t, user: r, guildId: o, channelId: c, widgetType: d, applicationId: f } = e,
        g = (0, u.Dt)(),
        p = (0, u.Dt)(),
        { trackUserProfileEditAction: O } = (0, b.KZ)(),
        [y, j] = i.useState("idle"),
        [x, h] = i.useState(null != t ? t : ""),
        v = i.useRef(null),
        w = i.useRef(null),
        E = _.intl.string(_.t.xKSfBQ),
        I = null != t && "" !== t.trim(),
        S = i.useCallback(() => {
            O({
                action: "PRESS_ADD_COMMENTARY",
                widgetEdited: d,
            }),
                j("editing");
        }, [d, O]),
        N = i.useCallback(() => {
            let e = x.trim(),
                r = e !== (null != t ? t : "").trim();
            (0, m.Bu)(d, f, "" !== e ? e : void 0),
                j("completed"),
                r &&
                    O({
                        action: "COMMENTARY_EDITED",
                        widgetEdited: d,
                        gameId: f,
                    });
        }, [d, f, x, t, O]),
        k = i.useCallback((e) => {
            h(e);
        }, []);
    return (
        i.useEffect(() => {
            "editing" === y && h(null != t ? t : "");
        }, [t, y]),
        i.useEffect(() => {
            if ("completed" === y) {
                var e;
                null == (e = v.current) || e.focus();
            }
        }, [y]),
        "editing" === y
            ? (0, n.jsxs)("div", {
                  className: P.textAreaContainer,
                  children: [
                      (0, n.jsx)(s.nn4, {
                          tag: "label",
                          htmlFor: g,
                          children: _.intl.string(_.t.JxKXeX),
                      }),
                      (0, n.jsx)(s.Kx8, {
                          id: g,
                          value: x,
                          placeholder: E,
                          onChange: k,
                          onBlur: N,
                          rows: 3,
                          autoFocus: "editing" === y,
                          onKeyDown: (e) => {
                              "Enter" !== e.key || e.shiftKey || (e.preventDefault(), N());
                          },
                          maxLength: l.rN,
                      }),
                  ],
              })
            : (0, n.jsxs)("div", {
                  ref: w,
                  role: "group",
                  "aria-labelledby": p,
                  onClick: S,
                  className: P.editableCommentContainer,
                  children: [
                      (0, n.jsx)(s.vdY, {
                          size: "xxs",
                          color: s.TVs.colors.ICON_TERTIARY,
                          className: P.commentIcon,
                      }),
                      (0, n.jsx)(T, {
                          user: r,
                          guildId: o,
                          channelId: c,
                          id: p,
                      }),
                      (0, n.jsx)(D, {
                          text: null != t ? t : E,
                          className: a()(P.editableCommentText, !I && P.placeholder),
                      }),
                      (0, n.jsx)(s.P3F, {
                          innerRef: v,
                          "aria-label": _.intl.string(_.t.ppb9MD),
                          onClick: (e) => {
                              e.stopPropagation(), S();
                          },
                          focusProps: { ringTarget: w },
                      }),
                  ],
              })
    );
}
function C(e) {
    let { user: t, guildId: r, channelId: i, game: o, widgetType: a, disableInteraction: l = !1 } = e,
        { gameName: u = _.intl.string(_.t.GIWFlJ), imageSrc: d, applicationId: f, comment: p, tags: b } = o,
        m = {
            variant: "heading-sm/medium",
            color: "text-default",
        },
        T = g.default.getCurrentUser(),
        D = (null == T ? void 0 : T.id) === t.id,
        C = !l && D && a === c.l.FAVORITE_GAMES;
    return (0, O.kO)(f)
        ? (0, n.jsx)(j.i, {})
        : (0, n.jsxs)("div", {
              className: P.card,
              children: [
                  (0, n.jsx)(y.Z, {
                      className: null == d || l ? void 0 : w.hoverActiveEffect,
                      imageSrc: d,
                      gameName: u,
                      applicationId: f,
                      userId: t.id,
                      disableInteraction: l,
                      hideTooltip: !0,
                  }),
                  (0, n.jsxs)("div", {
                      className: P.details,
                      children: [
                          l
                              ? (0, n.jsx)(s.X6q, I(E({}, m), { children: u }))
                              : (0, n.jsx)(
                                    S,
                                    E(
                                        {
                                            applicationId: f,
                                            userId: t.id,
                                            gameName: u,
                                        },
                                        m,
                                    ),
                                ),
                          C
                              ? (0, n.jsx)(k, {
                                    text: p,
                                    user: t,
                                    guildId: r,
                                    channelId: i,
                                    widgetType: a,
                                    applicationId: f,
                                })
                              : (0, n.jsx)(N, {
                                    text: p,
                                    user: t,
                                    guildId: r,
                                    channelId: i,
                                }),
                          (0, n.jsx)(x.Z, {
                              tags: b,
                              isCurrentUser: D,
                              widgetType: a,
                              applicationId: f,
                              disableInteraction: l,
                              className: P.tags,
                          }),
                          !l &&
                              (0, n.jsx)(v.Z, {
                                  className: P.socialProof,
                                  applicationId: f,
                                  guildId: r,
                                  channelId: i,
                              }),
                      ],
                  }),
                  !l &&
                      D &&
                      (0, n.jsx)(h.Z, {
                          game: o,
                          widgetType: a,
                          className: P.removeGameButton,
                      }),
              ],
          });
}
