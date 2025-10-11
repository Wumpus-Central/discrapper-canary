n.d(t, { Z: () => C }), n(781311), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    l = n(624238),
    c = n(296009),
    s = n(481060),
    u = n(313201),
    d = n(810568),
    f = n(168524),
    g = n(594174),
    p = n(5192),
    b = n(785717),
    m = n(86419),
    O = n(747101),
    y = n(817053),
    j = n(248554),
    x = n(879877),
    v = n(533815),
    h = n(919498),
    _ = n(388032),
    w = n(932366),
    P = n(776385);
function I(e) {
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
function S(e, t) {
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
function E(e) {
    var { applicationId: t, userId: n, gameName: i } = e,
        a = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++)
                    (n = a[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ["applicationId", "userId", "gameName"]);
    let o = (0, f.Z)({
        location: "UserProfileWidgetGameDetailsCard",
        applicationId: t,
        source: d.m1.UserProfile,
        sourceUserId: n,
        trackEntryPointImpression: !0,
    });
    return null == o
        ? (0, r.jsx)(s.Heading, S(I({}, a), { children: i }))
        : (0, r.jsx)(
              s.Heading,
              S(I({}, a), {
                  children: (0, r.jsx)(s.P3F, {
                      onClick: o,
                      className: P.clickableText,
                      children: i,
                  }),
              }),
          );
}
function T(e) {
    let { user: t, guildId: n, channelId: i, id: a } = e;
    return (0, r.jsx)(s.nn4, {
        id: a,
        children: _.intl.format(_.t.TM0XDQ, { name: p.ZP.getName(n, i, t) }),
    });
}
function D(e) {
    let { text: t, className: n } = e;
    return (0, r.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "text-tertiary",
        className: n,
        children: t,
    });
}
function k(e) {
    let { text: t, user: n, guildId: i, channelId: a } = e,
        o = (0, u.Dt)();
    return null == t || "" === t.trim()
        ? null
        : (0, r.jsxs)("div", {
              role: "group",
              "aria-labelledby": o,
              children: [
                  (0, r.jsx)(s.PEf, {
                      size: "xxs",
                      color: s.TVs.colors.ICON_TERTIARY,
                      className: P.commentIcon,
                  }),
                  (0, r.jsx)(T, {
                      user: n,
                      guildId: i,
                      channelId: a,
                      id: o,
                  }),
                  (0, r.jsx)(D, { text: t }),
              ],
          });
}
function N(e) {
    let { text: t, user: n, guildId: a, channelId: c, widgetType: d, applicationId: f } = e,
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
                n = e !== (null != t ? t : "").trim();
            (0, m.Bu)(d, f, "" !== e ? e : void 0),
                j("completed"),
                n &&
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
            ? (0, r.jsxs)("div", {
                  className: P.textAreaContainer,
                  children: [
                      (0, r.jsx)(s.nn4, {
                          tag: "label",
                          htmlFor: g,
                          children: _.intl.string(_.t.JxKXeX),
                      }),
                      (0, r.jsx)(s.Kx8, {
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
            : (0, r.jsxs)("div", {
                  ref: w,
                  role: "group",
                  "aria-labelledby": p,
                  onClick: E,
                  className: P.editableCommentContainer,
                  children: [
                      (0, r.jsx)(s.vdY, {
                          size: "xxs",
                          color: s.TVs.colors.ICON_TERTIARY,
                          className: P.commentIcon,
                      }),
                      (0, r.jsx)(T, {
                          user: n,
                          guildId: a,
                          channelId: c,
                          id: p,
                      }),
                      (0, r.jsx)(D, {
                          text: null != t ? t : I,
                          className: o()(P.editableCommentText, !S && P.placeholder),
                      }),
                      (0, r.jsx)(s.P3F, {
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
    let { user: t, guildId: n, channelId: i, game: a, widgetType: o, disableInteraction: l = !1 } = e,
        { gameName: u = _.intl.string(_.t.GIWFlJ), imageSrc: d, applicationId: f, comment: p, tags: b } = a,
        m = {
            variant: "heading-sm/medium",
            color: "text-default",
        },
        T = g.default.getCurrentUser(),
        D = (null == T ? void 0 : T.id) === t.id,
        C = !l && D && o === c.l.FAVORITE_GAMES;
    return (0, O.kO)(f)
        ? (0, r.jsx)(j.i, {})
        : (0, r.jsxs)("div", {
              className: P.card,
              children: [
                  (0, r.jsx)(y.Z, {
                      className: null == d || l ? void 0 : w.hoverActiveEffect,
                      imageSrc: d,
                      gameName: u,
                      applicationId: f,
                      userId: t.id,
                      disableInteraction: l,
                      hideTooltip: !0,
                  }),
                  (0, r.jsxs)("div", {
                      className: P.details,
                      children: [
                          l
                              ? (0, r.jsx)(s.Heading, S(I({}, m), { children: u }))
                              : (0, r.jsx)(
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
                              ? (0, r.jsx)(N, {
                                    text: p,
                                    user: t,
                                    guildId: n,
                                    channelId: i,
                                    widgetType: o,
                                    applicationId: f,
                                })
                              : (0, r.jsx)(k, {
                                    text: p,
                                    user: t,
                                    guildId: n,
                                    channelId: i,
                                }),
                          (0, r.jsx)(x.Z, {
                              tags: b,
                              isCurrentUser: D,
                              widgetType: o,
                              applicationId: f,
                              disableInteraction: l,
                              className: P.tags,
                          }),
                          !l &&
                              (0, r.jsx)(h.Z, {
                                  className: P.socialProof,
                                  applicationId: f,
                                  guildId: n,
                                  channelId: i,
                              }),
                      ],
                  }),
                  !l &&
                      D &&
                      (0, r.jsx)(v.Z, {
                          game: a,
                          widgetType: o,
                          className: P.removeGameButton,
                      }),
              ],
          });
}
