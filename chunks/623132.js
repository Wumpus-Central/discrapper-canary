n.d(t, { Z: () => k }), n(781311), n(388685);
var r = n(951288),
    i = n(647438),
    o = n(120356),
    a = n.n(o),
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
    v = n(879877),
    h = n(533815),
    x = n(919498),
    P = n(388032),
    _ = n(932366),
    w = n(776385);
function E(e) {
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
function I(e, t) {
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
function S(e) {
    var { applicationId: t, userId: n, gameName: i } = e,
        o = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++)
                    (n = o[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ["applicationId", "userId", "gameName"]);
    let a = (0, f.Z)({
        location: "UserProfileWidgetGameDetailsCard",
        applicationId: t,
        source: d.m1.UserProfile,
        sourceUserId: n,
        trackEntryPointImpression: !0,
    });
    return null == a
        ? (0, r.jsx)(s.X6q, I(E({}, o), { children: i }))
        : (0, r.jsx)(
              s.X6q,
              I(E({}, o), {
                  children: (0, r.jsx)(s.P3F, {
                      onClick: a,
                      className: w.clickableText,
                      children: i,
                  }),
              }),
          );
}
function T(e) {
    let { user: t, guildId: n, channelId: i, id: o } = e;
    return (0, r.jsx)(s.nn4, {
        id: o,
        children: P.intl.format(P.t.TM0XDQ, { name: p.ZP.getName(n, i, t) }),
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
function N(e) {
    let { text: t, user: n, guildId: i, channelId: o } = e,
        a = (0, u.Dt)();
    return null == t || "" === t.trim()
        ? null
        : (0, r.jsxs)("div", {
              role: "group",
              "aria-labelledby": a,
              children: [
                  (0, r.jsx)(s.PEf, {
                      size: "xxs",
                      color: s.TVs.colors.ICON_TERTIARY,
                      className: w.commentIcon,
                  }),
                  (0, r.jsx)(T, {
                      user: n,
                      guildId: i,
                      channelId: o,
                      id: a,
                  }),
                  (0, r.jsx)(D, { text: t }),
              ],
          });
}
function A(e) {
    let { text: t, user: n, guildId: o, channelId: c, widgetType: d, applicationId: f } = e,
        g = (0, u.Dt)(),
        p = (0, u.Dt)(),
        { trackUserProfileEditAction: O } = (0, b.KZ)(),
        [y, j] = i.useState("idle"),
        [v, h] = i.useState(null != t ? t : ""),
        x = i.useRef(null),
        _ = i.useRef(null),
        E = P.intl.string(P.t.xKSfBQ),
        I = null != t && "" !== t.trim(),
        S = i.useCallback(() => {
            O({
                action: "PRESS_ADD_COMMENTARY",
                widgetEdited: d,
            }),
                j("editing");
        }, [d, O]),
        N = i.useCallback(() => {
            let e = v.trim(),
                n = e !== (null != t ? t : "").trim();
            (0, m.Bu)(d, f, "" !== e ? e : void 0),
                j("completed"),
                n &&
                    O({
                        action: "COMMENTARY_EDITED",
                        widgetEdited: d,
                        gameId: f,
                    });
        }, [d, f, v, t, O]),
        A = i.useCallback((e) => {
            h(e);
        }, []);
    return (
        i.useEffect(() => {
            "editing" === y && h(null != t ? t : "");
        }, [t, y]),
        i.useEffect(() => {
            if ("completed" === y) {
                var e;
                null == (e = x.current) || e.focus();
            }
        }, [y]),
        "editing" === y
            ? (0, r.jsxs)("div", {
                  className: w.textAreaContainer,
                  children: [
                      (0, r.jsx)(s.nn4, {
                          tag: "label",
                          htmlFor: g,
                          children: P.intl.string(P.t.JxKXeX),
                      }),
                      (0, r.jsx)(s.Kx8, {
                          id: g,
                          value: v,
                          placeholder: E,
                          onChange: A,
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
            : (0, r.jsxs)("div", {
                  ref: _,
                  role: "group",
                  "aria-labelledby": p,
                  onClick: S,
                  className: w.editableCommentContainer,
                  children: [
                      (0, r.jsx)(s.vdY, {
                          size: "xxs",
                          color: s.TVs.colors.ICON_TERTIARY,
                          className: w.commentIcon,
                      }),
                      (0, r.jsx)(T, {
                          user: n,
                          guildId: o,
                          channelId: c,
                          id: p,
                      }),
                      (0, r.jsx)(D, {
                          text: null != t ? t : E,
                          className: a()(w.editableCommentText, !I && w.placeholder),
                      }),
                      (0, r.jsx)(s.P3F, {
                          innerRef: x,
                          "aria-label": P.intl.string(P.t.ppb9MD),
                          onClick: (e) => {
                              e.stopPropagation(), S();
                          },
                          focusProps: { ringTarget: _ },
                      }),
                  ],
              })
    );
}
function k(e) {
    let { user: t, guildId: n, channelId: i, game: o, widgetType: a, disableInteraction: l = !1 } = e,
        { gameName: u = P.intl.string(P.t.GIWFlJ), imageSrc: d, applicationId: f, comment: p, tags: b } = o,
        m = {
            variant: "heading-sm/medium",
            color: "text-default",
        },
        T = g.default.getCurrentUser(),
        D = (null == T ? void 0 : T.id) === t.id,
        k = !l && D && a === c.l.FAVORITE_GAMES;
    return (0, O.kO)(f)
        ? (0, r.jsx)(j.i, {})
        : (0, r.jsxs)("div", {
              className: w.card,
              children: [
                  (0, r.jsx)(y.Z, {
                      className: null == d || l ? void 0 : _.hoverActiveEffect,
                      imageSrc: d,
                      gameName: u,
                      applicationId: f,
                      userId: t.id,
                      disableInteraction: l,
                      hideTooltip: !0,
                  }),
                  (0, r.jsxs)("div", {
                      className: w.details,
                      children: [
                          l
                              ? (0, r.jsx)(s.X6q, I(E({}, m), { children: u }))
                              : (0, r.jsx)(
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
                          k
                              ? (0, r.jsx)(A, {
                                    text: p,
                                    user: t,
                                    guildId: n,
                                    channelId: i,
                                    widgetType: a,
                                    applicationId: f,
                                })
                              : (0, r.jsx)(N, {
                                    text: p,
                                    user: t,
                                    guildId: n,
                                    channelId: i,
                                }),
                          (0, r.jsx)(v.Z, {
                              tags: b,
                              isCurrentUser: D,
                              widgetType: a,
                              applicationId: f,
                              disableInteraction: l,
                              className: w.tags,
                          }),
                          !l &&
                              (0, r.jsx)(x.Z, {
                                  className: w.socialProof,
                                  applicationId: f,
                                  guildId: n,
                                  channelId: i,
                              }),
                      ],
                  }),
                  !l &&
                      D &&
                      (0, r.jsx)(h.Z, {
                          game: o,
                          widgetType: a,
                          className: w.removeGameButton,
                      }),
              ],
          });
}
