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
    p = r(785717),
    m = r(86419),
    O = r(971082),
    j = r(817053),
    y = r(248554),
    v = r(879877),
    x = r(533815),
    h = r(853072),
    _ = r(388032),
    P = r(932366),
    w = r(776385);
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
        ? (0, n.jsx)(s.X6q, S(I({}, i), { children: a }))
        : (0, n.jsx)(
              s.X6q,
              S(I({}, i), {
                  children: (0, n.jsx)(s.P3F, {
                      onClick: l,
                      className: w.clickableText,
                      children: a,
                  }),
              }),
          );
}
function T(e) {
    let { user: t, guildId: r, channelId: a, id: i } = e;
    return (0, n.jsx)(s.nn4, {
        id: i,
        children: _.intl.format(_.t.TM0XDQ, { name: b.ZP.getName(r, a, t) }),
    });
}
function N(e) {
    let { text: t, className: r } = e;
    return (0, n.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "text-tertiary",
        className: r,
        children: t,
    });
}
function k(e) {
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
                      className: w.commentIcon,
                  }),
                  (0, n.jsx)(T, {
                      user: r,
                      guildId: a,
                      channelId: i,
                      id: l,
                  }),
                  (0, n.jsx)(N, { text: t }),
              ],
          });
}
function C(e) {
    let { text: t, user: r, guildId: i, channelId: c, widgetType: d, applicationId: f } = e,
        g = (0, u.Dt)(),
        b = (0, u.Dt)(),
        { trackUserProfileAction: O } = (0, p.KZ)(),
        [j, y] = a.useState("idle"),
        [v, x] = a.useState(null != t ? t : ""),
        h = a.useRef(null),
        P = a.useRef(null),
        I = _.intl.string(_.t.xKSfBQ),
        S = null != t && "" !== t.trim(),
        E = a.useCallback(() => {
            y("editing");
        }, []),
        k = a.useCallback(() => {
            let e = v.trim();
            (0, m.Bu)(d, f, "" !== e ? e : void 0), y("completed"), O({ action: "EDIT_ACTION" });
        }, [d, f, v, O]),
        C = a.useCallback((e) => {
            x(e);
        }, []);
    return (
        a.useEffect(() => {
            "editing" === j && x(null != t ? t : "");
        }, [t, j]),
        a.useEffect(() => {
            if ("completed" === j) {
                var e;
                null == (e = h.current) || e.focus();
            }
        }, [j]),
        "editing" === j
            ? (0, n.jsxs)("div", {
                  className: w.textAreaContainer,
                  children: [
                      (0, n.jsx)(s.nn4, {
                          tag: "label",
                          htmlFor: g,
                          children: _.intl.string(_.t.JxKXeX),
                      }),
                      (0, n.jsx)(s.Kx8, {
                          id: g,
                          value: v,
                          placeholder: I,
                          onChange: C,
                          onBlur: k,
                          rows: 3,
                          autoFocus: "editing" === j,
                          onKeyDown: (e) => {
                              "Enter" !== e.key || e.shiftKey || (e.preventDefault(), k());
                          },
                          maxLength: o.r,
                      }),
                  ],
              })
            : (0, n.jsxs)("div", {
                  ref: P,
                  role: "group",
                  "aria-labelledby": b,
                  onClick: E,
                  className: w.editableCommentContainer,
                  children: [
                      (0, n.jsx)(s.vdY, {
                          size: "xxs",
                          color: s.TVs.colors.ICON_TERTIARY,
                          className: w.commentIcon,
                      }),
                      (0, n.jsx)(T, {
                          user: r,
                          guildId: i,
                          channelId: c,
                          id: b,
                      }),
                      (0, n.jsx)(N, {
                          text: null != t ? t : I,
                          className: l()(w.editableCommentText, !S && w.placeholder),
                      }),
                      (0, n.jsx)(s.P3F, {
                          innerRef: h,
                          "aria-label": _.intl.string(_.t.ppb9MD),
                          onClick: (e) => {
                              e.stopPropagation(), E();
                          },
                          focusProps: { ringTarget: P },
                      }),
                  ],
              })
    );
}
function D(e) {
    let { applicationId: t, guildId: r, channelId: a, className: i } = e,
        l = (0, h.Z)(t);
    return l.length > 0
        ? (0, n.jsx)(O.Z, {
              label: _.intl.formatToPlainString(_.t.ujhJdH, { numFriends: l.length }),
              className: i,
              users: l,
              guildId: r,
              channelId: a,
          })
        : null;
}
function A(e) {
    let { user: t, guildId: r, channelId: a, game: i, widgetType: l, loading: o = !1, disableInteraction: u = !1 } = e,
        { gameName: d = _.intl.string(_.t.GIWFlJ), imageSrc: f, applicationId: b, comment: p, tags: m } = i,
        O = {
            variant: "heading-sm/medium",
            color: "text-default",
        },
        h = g.default.getCurrentUser(),
        T = (null == h ? void 0 : h.id) === t.id,
        N = !u && T && l === c.l.FAVORITE_GAMES;
    return o
        ? (0, n.jsx)(y.i, {})
        : (0, n.jsxs)("div", {
              className: w.card,
              children: [
                  (0, n.jsx)(j.Z, {
                      className: null == f || u ? void 0 : P.hoverActiveEffect,
                      imageSrc: f,
                      gameName: d,
                      applicationId: b,
                      userId: t.id,
                      disableInteraction: u,
                      hideTooltip: !0,
                  }),
                  (0, n.jsxs)("div", {
                      className: w.details,
                      children: [
                          u
                              ? (0, n.jsx)(s.X6q, S(I({}, O), { children: d }))
                              : (0, n.jsx)(
                                    E,
                                    I(
                                        {
                                            applicationId: b,
                                            userId: t.id,
                                            gameName: d,
                                        },
                                        O,
                                    ),
                                ),
                          N
                              ? (0, n.jsx)(C, {
                                    text: p,
                                    user: t,
                                    guildId: r,
                                    channelId: a,
                                    widgetType: l,
                                    applicationId: b,
                                })
                              : (0, n.jsx)(k, {
                                    text: p,
                                    user: t,
                                    guildId: r,
                                    channelId: a,
                                }),
                          (0, n.jsx)(v.Z, {
                              tags: m,
                              isCurrentUser: T,
                              widgetType: l,
                              applicationId: b,
                              disableInteraction: u,
                              className: w.tags,
                          }),
                          !u &&
                              (0, n.jsx)(D, {
                                  className: w.socialProof,
                                  applicationId: b,
                                  guildId: r,
                                  channelId: a,
                              }),
                      ],
                  }),
                  !u &&
                      T &&
                      (0, n.jsx)(x.Z, {
                          game: i,
                          widgetType: l,
                          className: w.removeGameButton,
                      }),
              ],
          });
}
