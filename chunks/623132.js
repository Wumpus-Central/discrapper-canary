r.d(t, { Z: () => C }), r(781311), r(388685);
var n = r(951288),
    i = r(647438),
    a = r(120356),
    o = r.n(a),
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
    v = r(533815),
    h = r(919498),
    _ = r(388032),
    w = r(932366),
    P = r(776385);
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
function S(e, t) {
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
function E(e) {
    var { applicationId: t, userId: r, gameName: i } = e,
        a = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                i = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        i = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (n = 0; n < a.length; n++)
                    (r = a[n]),
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
        ? (0, n.jsx)(s.X6q, S(I({}, a), { children: i }))
        : (0, n.jsx)(
              s.X6q,
              S(I({}, a), {
                  children: (0, n.jsx)(s.P3F, {
                      onClick: o,
                      className: P.clickableText,
                      children: i,
                  }),
              }),
          );
}
function T(e) {
    let { user: t, guildId: r, channelId: i, id: a } = e;
    return (0, n.jsx)(s.nn4, {
        id: a,
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
function k(e) {
    let { text: t, user: r, guildId: i, channelId: a } = e,
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
                      className: P.commentIcon,
                  }),
                  (0, n.jsx)(T, {
                      user: r,
                      guildId: i,
                      channelId: a,
                      id: o,
                  }),
                  (0, n.jsx)(D, { text: t }),
              ],
          });
}
function N(e) {
    let { text: t, user: r, guildId: a, channelId: c, widgetType: d, applicationId: f } = e,
        g = (0, u.Dt)(),
        p = (0, u.Dt)(),
        { trackUserProfileEditAction: O } = (0, b.KZ)(),
        [y, j] = i.useState("idle"),
        [x, v] = i.useState(null != t ? t : ""),
        h = i.useRef(null),
        w = i.useRef(null),
        I = _.intl.string(_.t.xKSfBQ),
        S = null != t && "" !== t.trim(),
        E = i.useCallback(() => {
            O({
                action: "PRESS_ADD_COMMENTARY",
                widgetEdited: d,
            }),
                j("editing");
        }, [d, O]),
        k = i.useCallback(() => {
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
        N = i.useCallback((e) => {
            v(e);
        }, []);
    return (
        i.useEffect(() => {
            "editing" === y && v(null != t ? t : "");
        }, [t, y]),
        i.useEffect(() => {
            if ("completed" === y) {
                var e;
                null == (e = h.current) || e.focus();
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
                          placeholder: I,
                          onChange: N,
                          onBlur: k,
                          rows: 3,
                          autoFocus: "editing" === y,
                          onKeyDown: (e) => {
                              "Enter" !== e.key || e.shiftKey || (e.preventDefault(), k());
                          },
                          maxLength: l.rN,
                      }),
                  ],
              })
            : (0, n.jsxs)("div", {
                  ref: w,
                  role: "group",
                  "aria-labelledby": p,
                  onClick: E,
                  className: P.editableCommentContainer,
                  children: [
                      (0, n.jsx)(s.vdY, {
                          size: "xxs",
                          color: s.TVs.colors.ICON_TERTIARY,
                          className: P.commentIcon,
                      }),
                      (0, n.jsx)(T, {
                          user: r,
                          guildId: a,
                          channelId: c,
                          id: p,
                      }),
                      (0, n.jsx)(D, {
                          text: null != t ? t : I,
                          className: o()(P.editableCommentText, !S && P.placeholder),
                      }),
                      (0, n.jsx)(s.P3F, {
                          innerRef: h,
                          "aria-label": _.intl.string(_.t.ppb9MD),
                          onClick: (e) => {
                              e.stopPropagation(), E();
                          },
                          focusProps: { ringTarget: w },
                      }),
                  ],
              })
    );
}
function C(e) {
    let { user: t, guildId: r, channelId: i, game: a, widgetType: o, disableInteraction: l = !1 } = e,
        { gameName: u = _.intl.string(_.t.GIWFlJ), imageSrc: d, applicationId: f, comment: p, tags: b } = a,
        m = {
            variant: "heading-sm/medium",
            color: "text-default",
        },
        T = g.default.getCurrentUser(),
        D = (null == T ? void 0 : T.id) === t.id,
        C = !l && D && o === c.l.FAVORITE_GAMES;
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
                              ? (0, n.jsx)(s.X6q, S(I({}, m), { children: u }))
                              : (0, n.jsx)(
                                    E,
                                    I(
                                        {
                                            applicationId: f,
                                            userId: t.id,
                                            gameName: u,
                                        },
                                        m,
                                    ),
                                ),
                          C
                              ? (0, n.jsx)(N, {
                                    text: p,
                                    user: t,
                                    guildId: r,
                                    channelId: i,
                                    widgetType: o,
                                    applicationId: f,
                                })
                              : (0, n.jsx)(k, {
                                    text: p,
                                    user: t,
                                    guildId: r,
                                    channelId: i,
                                }),
                          (0, n.jsx)(x.Z, {
                              tags: b,
                              isCurrentUser: D,
                              widgetType: o,
                              applicationId: f,
                              disableInteraction: l,
                              className: P.tags,
                          }),
                          !l &&
                              (0, n.jsx)(h.Z, {
                                  className: P.socialProof,
                                  applicationId: f,
                                  guildId: r,
                                  channelId: i,
                              }),
                      ],
                  }),
                  !l &&
                      D &&
                      (0, n.jsx)(v.Z, {
                          game: a,
                          widgetType: o,
                          className: P.removeGameButton,
                      }),
              ],
          });
}
