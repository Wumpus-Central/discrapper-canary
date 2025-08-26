r.d(t, { Z: () => A }), r(781311), r(388685);
var n = r(951288),
    a = r(647438),
    i = r(120356),
    l = r.n(i),
    o = r(624238),
    c = r(296009),
    s = r(481060),
    u = r(313201),
    d = r(810568),
    f = r(168524),
    g = r(594174),
    b = r(5192),
    p = r(86419),
    m = r(971082),
    O = r(817053),
    j = r(248554),
    y = r(879877),
    v = r(533815),
    x = r(853072),
    h = r(388032),
    _ = r(932366),
    P = r(776385);
function w(e) {
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
    var { applicationId: t, userId: r, gameName: a } = e,
        i = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                a = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        a = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    (r = i[n]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
            }
            return a;
        })(e, ["applicationId", "userId", "gameName"]);
    let l = (0, f.Z)({
        location: "UserProfileWidgetGameDetailsCard",
        applicationId: t,
        source: d.m1.UserProfile,
        sourceUserId: r,
        trackEntryPointImpression: !0,
    });
    return null == l
        ? (0, n.jsx)(s.X6q, S(w({}, i), { children: a }))
        : (0, n.jsx)(
              s.X6q,
              S(w({}, i), {
                  children: (0, n.jsx)(s.P3F, {
                      onClick: l,
                      className: P.clickableText,
                      children: a,
                  }),
              }),
          );
}
function I(e) {
    let { user: t, guildId: r, channelId: a, id: i } = e;
    return (0, n.jsx)(s.nn4, {
        id: i,
        children: h.intl.format(h.t.TM0XDQ, { name: b.ZP.getName(r, a, t) }),
    });
}
function T(e) {
    let { text: t, className: r } = e;
    return (0, n.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "text-tertiary",
        className: r,
        children: t,
    });
}
function N(e) {
    let { text: t, user: r, guildId: a, channelId: i } = e,
        l = (0, u.Dt)();
    return null == t || "" === t.trim()
        ? null
        : (0, n.jsxs)("div", {
              role: "group",
              "aria-labelledby": l,
              children: [
                  (0, n.jsx)(s.PEf, {
                      size: "xxs",
                      color: s.TVs.colors.ICON_TERTIARY,
                      className: P.commentIcon,
                  }),
                  (0, n.jsx)(I, {
                      user: r,
                      guildId: a,
                      channelId: i,
                      id: l,
                  }),
                  (0, n.jsx)(T, { text: t }),
              ],
          });
}
function k(e) {
    let { text: t, user: r, guildId: i, channelId: c, widgetType: d, applicationId: f } = e,
        g = (0, u.Dt)(),
        b = (0, u.Dt)(),
        [m, O] = a.useState("idle"),
        [j, y] = a.useState(null != t ? t : ""),
        v = a.useRef(null),
        x = a.useRef(null),
        _ = h.intl.string(h.t.xKSfBQ),
        w = null != t && "" !== t.trim(),
        S = a.useCallback(() => {
            O("editing");
        }, []),
        E = a.useCallback(() => {
            let e = j.trim();
            (0, p.Bu)(d, f, "" !== e ? e : void 0), O("completed");
        }, [d, f, j]),
        N = a.useCallback((e) => {
            y(e);
        }, []);
    return (
        a.useEffect(() => {
            "editing" === m && y(null != t ? t : "");
        }, [t, m]),
        a.useEffect(() => {
            if ("completed" === m) {
                var e;
                null == (e = v.current) || e.focus();
            }
        }, [m]),
        "editing" === m
            ? (0, n.jsxs)("div", {
                  className: P.textAreaContainer,
                  children: [
                      (0, n.jsx)(s.nn4, {
                          tag: "label",
                          htmlFor: g,
                          children: h.intl.string(h.t.JxKXeX),
                      }),
                      (0, n.jsx)(s.Kx8, {
                          id: g,
                          value: j,
                          placeholder: _,
                          onChange: N,
                          onBlur: E,
                          rows: 3,
                          autoFocus: "editing" === m,
                          onKeyDown: (e) => {
                              "Enter" !== e.key || e.shiftKey || (e.preventDefault(), E());
                          },
                          maxLength: o.r,
                      }),
                  ],
              })
            : (0, n.jsxs)("div", {
                  ref: x,
                  role: "group",
                  "aria-labelledby": b,
                  onClick: S,
                  className: P.editableCommentContainer,
                  children: [
                      (0, n.jsx)(s.vdY, {
                          size: "xxs",
                          color: s.TVs.colors.ICON_TERTIARY,
                          className: P.commentIcon,
                      }),
                      (0, n.jsx)(I, {
                          user: r,
                          guildId: i,
                          channelId: c,
                          id: b,
                      }),
                      (0, n.jsx)(T, {
                          text: null != t ? t : _,
                          className: l()(P.editableCommentText, !w && P.placeholder),
                      }),
                      (0, n.jsx)(s.P3F, {
                          innerRef: v,
                          "aria-label": h.intl.string(h.t.ppb9MD),
                          onClick: (e) => {
                              e.stopPropagation(), S();
                          },
                          focusProps: { ringTarget: x },
                      }),
                  ],
              })
    );
}
function C(e) {
    let { applicationId: t, guildId: r, channelId: a, className: i } = e,
        l = (0, x.Z)(t);
    return l.length > 0
        ? (0, n.jsx)(m.Z, {
              label: h.intl.formatToPlainString(h.t.ujhJdH, { numFriends: l.length }),
              className: i,
              users: l,
              guildId: r,
              channelId: a,
          })
        : null;
}
function A(e) {
    let { user: t, guildId: r, channelId: a, game: i, widgetType: l, loading: o = !1, disableInteraction: u = !1 } = e,
        { gameName: d = h.intl.string(h.t.GIWFlJ), imageSrc: f, applicationId: b, comment: p, tags: m } = i,
        x = {
            variant: "heading-sm/medium",
            color: "text-default",
        },
        I = g.default.getCurrentUser(),
        T = (null == I ? void 0 : I.id) === t.id,
        A = !u && T && l === c.l.FAVORITE_GAMES;
    return o
        ? (0, n.jsx)(j.i, {})
        : (0, n.jsxs)("div", {
              className: P.card,
              children: [
                  (0, n.jsx)(O.Z, {
                      className: null == f || u ? void 0 : _.hoverActiveEffect,
                      imageSrc: f,
                      gameName: d,
                      applicationId: b,
                      userId: t.id,
                      disableInteraction: u,
                      hideTooltip: !0,
                  }),
                  (0, n.jsxs)("div", {
                      className: P.details,
                      children: [
                          u
                              ? (0, n.jsx)(s.X6q, S(w({}, x), { children: d }))
                              : (0, n.jsx)(
                                    E,
                                    w(
                                        {
                                            applicationId: b,
                                            userId: t.id,
                                            gameName: d,
                                        },
                                        x,
                                    ),
                                ),
                          A
                              ? (0, n.jsx)(k, {
                                    text: p,
                                    user: t,
                                    guildId: r,
                                    channelId: a,
                                    widgetType: l,
                                    applicationId: b,
                                })
                              : (0, n.jsx)(N, {
                                    text: p,
                                    user: t,
                                    guildId: r,
                                    channelId: a,
                                }),
                          (0, n.jsx)(y.Z, {
                              tags: m,
                              isCurrentUser: T,
                              widgetType: l,
                              applicationId: b,
                              disableInteraction: u,
                          }),
                          !u &&
                              (0, n.jsx)(C, {
                                  className: P.socialProof,
                                  applicationId: b,
                                  guildId: r,
                                  channelId: a,
                              }),
                      ],
                  }),
                  !u &&
                      T &&
                      (0, n.jsx)(v.Z, {
                          game: i,
                          widgetType: l,
                          className: P.removeGameButton,
                      }),
              ],
          });
}
