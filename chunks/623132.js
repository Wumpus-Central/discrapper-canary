r.d(t, { Z: () => C }), r(781311), r(388685);
var n = r(951288),
    i = r(647438),
    a = r(120356),
    l = r.n(a),
    o = r(296009),
    c = r(481060),
    s = r(313201),
    u = r(810568),
    d = r(168524),
    f = r(594174),
    g = r(5192),
    b = r(86419),
    p = r(971082),
    m = r(817053),
    O = r(248554),
    j = r(879877),
    y = r(533815),
    v = r(853072),
    x = r(388032),
    h = r(932366),
    _ = r(776385);
function P(e) {
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
function w(e, t) {
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
    let l = (0, d.Z)({
        location: "UserProfileWidgetGameDetailsCard",
        applicationId: t,
        source: u.m1.UserProfile,
        sourceUserId: r,
        trackEntryPointImpression: !0,
    });
    return null == l
        ? (0, n.jsx)(c.X6q, w(P({}, a), { children: i }))
        : (0, n.jsx)(
              c.X6q,
              w(P({}, a), {
                  children: (0, n.jsx)(c.P3F, {
                      onClick: l,
                      className: _.clickableText,
                      children: i,
                  }),
              }),
          );
}
function E(e) {
    let { user: t, guildId: r, channelId: i, id: a } = e;
    return (0, n.jsx)(c.nn4, {
        id: a,
        children: x.intl.format(x.t.TM0XDQ, { name: g.ZP.getName(r, i, t) }),
    });
}
function I(e) {
    let { text: t, className: r } = e;
    return (0, n.jsx)(c.Text, {
        variant: "text-sm/normal",
        color: "text-tertiary",
        className: r,
        children: t,
    });
}
function T(e) {
    let { text: t, user: r, guildId: i, channelId: a } = e,
        l = (0, s.Dt)();
    return null == t || "" === t.trim()
        ? null
        : (0, n.jsxs)("div", {
              role: "group",
              "aria-labelledby": l,
              children: [
                  (0, n.jsx)(c.PEf, {
                      size: "xxs",
                      color: c.TVs.colors.ICON_TERTIARY,
                      className: _.commentIcon,
                  }),
                  (0, n.jsx)(E, {
                      user: r,
                      guildId: i,
                      channelId: a,
                      id: l,
                  }),
                  (0, n.jsx)(I, { text: t }),
              ],
          });
}
function N(e) {
    let { text: t, user: r, guildId: a, channelId: o, widgetType: u, applicationId: d } = e,
        f = (0, s.Dt)(),
        g = (0, s.Dt)(),
        [p, m] = i.useState("idle"),
        [O, j] = i.useState(null != t ? t : ""),
        y = i.useRef(null),
        v = i.useRef(null),
        h = x.intl.string(x.t.xKSfBQ),
        P = null != t && "" !== t.trim(),
        w = i.useCallback(() => {
            m("editing");
        }, []),
        S = i.useCallback(() => {
            let e = O.trim();
            (0, b.Bu)(u, d, "" !== e ? e : void 0), m("completed");
        }, [u, d, O]),
        T = i.useCallback((e) => {
            j(e);
        }, []);
    return (
        i.useEffect(() => {
            "editing" === p && j(null != t ? t : "");
        }, [t, p]),
        i.useEffect(() => {
            if ("completed" === p) {
                var e;
                null == (e = y.current) || e.focus();
            }
        }, [p]),
        "editing" === p
            ? (0, n.jsxs)("div", {
                  className: _.textAreaContainer,
                  children: [
                      (0, n.jsx)(c.nn4, {
                          tag: "label",
                          htmlFor: f,
                          children: x.intl.string(x.t.JxKXeX),
                      }),
                      (0, n.jsx)(c.Kx8, {
                          id: f,
                          value: O,
                          placeholder: h,
                          onChange: T,
                          onBlur: S,
                          rows: 3,
                          autoFocus: "editing" === p,
                          onKeyDown: (e) => {
                              "Enter" !== e.key || e.shiftKey || (e.preventDefault(), S());
                          },
                      }),
                  ],
              })
            : (0, n.jsxs)("div", {
                  ref: v,
                  role: "group",
                  "aria-labelledby": g,
                  onClick: w,
                  className: _.editableCommentContainer,
                  children: [
                      (0, n.jsx)(c.vdY, {
                          size: "xxs",
                          color: c.TVs.colors.ICON_TERTIARY,
                          className: _.commentIcon,
                      }),
                      (0, n.jsx)(E, {
                          user: r,
                          guildId: a,
                          channelId: o,
                          id: g,
                      }),
                      (0, n.jsx)(I, {
                          text: null != t ? t : h,
                          className: l()(_.editableCommentText, !P && _.placeholder),
                      }),
                      (0, n.jsx)(c.P3F, {
                          innerRef: y,
                          "aria-label": x.intl.string(x.t.ppb9MD),
                          onClick: (e) => {
                              e.stopPropagation(), w();
                          },
                          focusProps: { ringTarget: v },
                      }),
                  ],
              })
    );
}
function k(e) {
    let { applicationId: t, guildId: r, channelId: i, className: a } = e,
        l = (0, v.Z)(t);
    return l.length > 0
        ? (0, n.jsx)(p.Z, {
              label: x.intl.formatToPlainString(x.t.ujhJdH, { numFriends: l.length }),
              className: a,
              users: l,
              guildId: r,
              channelId: i,
          })
        : null;
}
function C(e) {
    let { user: t, guildId: r, channelId: i, game: a, widgetType: l, loading: s = !1, disableInteraction: u = !1 } = e,
        { gameName: d = x.intl.string(x.t.GIWFlJ), imageSrc: g, applicationId: b, comment: p, tags: v } = a,
        E = {
            variant: "heading-sm/medium",
            color: "text-default",
        },
        I = f.default.getCurrentUser(),
        C = (null == I ? void 0 : I.id) === t.id,
        A = !u && C && l === o.l.FAVORITE_GAMES;
    return s
        ? (0, n.jsx)(O.i, {})
        : (0, n.jsxs)("div", {
              className: _.card,
              children: [
                  (0, n.jsx)(m.Z, {
                      className: null == g || u ? void 0 : h.hoverActiveEffect,
                      imageSrc: g,
                      gameName: d,
                      applicationId: b,
                      userId: t.id,
                      disableInteraction: u,
                      hideTooltip: !0,
                  }),
                  (0, n.jsxs)("div", {
                      className: _.details,
                      children: [
                          u
                              ? (0, n.jsx)(c.X6q, w(P({}, E), { children: d }))
                              : (0, n.jsx)(
                                    S,
                                    P(
                                        {
                                            applicationId: b,
                                            userId: t.id,
                                            gameName: d,
                                        },
                                        E,
                                    ),
                                ),
                          A
                              ? (0, n.jsx)(N, {
                                    text: p,
                                    user: t,
                                    guildId: r,
                                    channelId: i,
                                    widgetType: l,
                                    applicationId: b,
                                })
                              : (0, n.jsx)(T, {
                                    text: p,
                                    user: t,
                                    guildId: r,
                                    channelId: i,
                                }),
                          (0, n.jsx)(j.Z, {
                              tags: v,
                              isCurrentUser: C,
                              widgetType: l,
                              applicationId: b,
                              disableInteraction: u,
                          }),
                          !u &&
                              (0, n.jsx)(k, {
                                  className: _.socialProof,
                                  applicationId: b,
                                  guildId: r,
                                  channelId: i,
                              }),
                      ],
                  }),
                  !u &&
                      C &&
                      (0, n.jsx)(y.Z, {
                          game: a,
                          widgetType: l,
                          className: _.removeGameButton,
                      }),
              ],
          });
}
