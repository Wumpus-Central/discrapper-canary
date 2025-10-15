r.d(t, { Z: () => k }), r(781311), r(388685);
var n = r(951288),
    i = r(647438),
    a = r(120356),
    o = r.n(a),
    l = r(624238),
    c = r(481060),
    s = r(313201),
    u = r(810568),
    d = r(168524),
    g = r(594174),
    f = r(5192),
    p = r(785717),
    b = r(86419),
    m = r(747101),
    O = r(817053),
    y = r(248554),
    j = r(879877),
    x = r(533815),
    v = r(919498),
    h = r(388032),
    _ = r(932366),
    w = r(776385);
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
    let o = (0, d.Z)({
        location: "UserProfileWidgetGameDetailsCard",
        applicationId: t,
        source: u.m1.UserProfile,
        sourceUserId: r,
        trackEntryPointImpression: !0,
    });
    return null == o
        ? (0, n.jsx)(c.Heading, I(P({}, a), { children: i }))
        : (0, n.jsx)(
              c.Heading,
              I(P({}, a), {
                  children: (0, n.jsx)(c.P3F, {
                      onClick: o,
                      className: w.clickableText,
                      children: i,
                  }),
              }),
          );
}
function E(e) {
    let { user: t, guildId: r, channelId: i, id: a } = e;
    return (0, n.jsx)(c.nn4, {
        id: a,
        children: h.intl.format(h.t.TM0XDY, { name: f.ZP.getName(r, i, t) }),
    });
}
function T(e) {
    let { text: t, className: r } = e;
    return (0, n.jsx)(c.Text, {
        variant: "text-sm/normal",
        color: "text-tertiary",
        className: r,
        children: t,
    });
}
function D(e) {
    let { text: t, user: r, guildId: i, channelId: a } = e,
        o = (0, s.Dt)();
    return null == t || "" === t.trim()
        ? null
        : (0, n.jsxs)("div", {
              role: "group",
              "aria-labelledby": o,
              children: [
                  (0, n.jsx)(c.PEf, {
                      size: "xxs",
                      color: c.TVs.colors.ICON_TERTIARY,
                      className: w.commentIcon,
                  }),
                  (0, n.jsx)(E, {
                      user: r,
                      guildId: i,
                      channelId: a,
                      id: o,
                  }),
                  (0, n.jsx)(T, { text: t }),
              ],
          });
}
function N(e) {
    let { text: t, user: r, guildId: a, channelId: u, widgetType: d, applicationId: g } = e,
        f = (0, s.Dt)(),
        m = (0, s.Dt)(),
        { trackUserProfileEditAction: O } = (0, p.KZ)(),
        [y, j] = i.useState("idle"),
        [x, v] = i.useState(null != t ? t : ""),
        _ = i.useRef(null),
        P = i.useRef(null),
        I = h.intl.string(h.t.xKSfBT),
        S = null != t && "" !== t.trim(),
        D = i.useCallback(() => {
            O({
                action: "PRESS_ADD_COMMENTARY",
                widgetEdited: d,
            }),
                j("editing");
        }, [d, O]),
        N = i.useCallback(() => {
            let e = x.trim(),
                r = e !== (null != t ? t : "").trim();
            (0, b.Bu)(d, g, "" !== e ? e : void 0),
                j("completed"),
                r &&
                    O({
                        action: "COMMENTARY_EDITED",
                        widgetEdited: d,
                        gameId: g,
                    });
        }, [d, g, x, t, O]),
        k = i.useCallback((e) => {
            v(e);
        }, []);
    return (
        i.useEffect(() => {
            "editing" === y && v(null != t ? t : "");
        }, [t, y]),
        i.useEffect(() => {
            if ("completed" === y) {
                var e;
                null == (e = _.current) || e.focus();
            }
        }, [y]),
        "editing" === y
            ? (0, n.jsxs)("div", {
                  className: w.textAreaContainer,
                  children: [
                      (0, n.jsx)(c.nn4, {
                          tag: "label",
                          htmlFor: f,
                          children: h.intl.string(h.t.JxKXeT),
                      }),
                      (0, n.jsx)(c.Kx8, {
                          id: f,
                          value: x,
                          placeholder: I,
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
                  ref: P,
                  role: "group",
                  "aria-labelledby": m,
                  onClick: D,
                  className: w.editableCommentContainer,
                  children: [
                      (0, n.jsx)(c.vdY, {
                          size: "xxs",
                          color: c.TVs.colors.ICON_TERTIARY,
                          className: w.commentIcon,
                      }),
                      (0, n.jsx)(E, {
                          user: r,
                          guildId: a,
                          channelId: u,
                          id: m,
                      }),
                      (0, n.jsx)(T, {
                          text: null != t ? t : I,
                          className: o()(w.editableCommentText, !S && w.placeholder),
                      }),
                      (0, n.jsx)(c.P3F, {
                          innerRef: _,
                          "aria-label": h.intl.string(h.t.ppb9MJ),
                          onClick: (e) => {
                              e.stopPropagation(), D();
                          },
                          focusProps: { ringTarget: P },
                      }),
                  ],
              })
    );
}
function k(e) {
    let { user: t, guildId: r, channelId: i, game: a, widgetType: o, disableInteraction: l = !1 } = e,
        { gameName: s = h.intl.string(h.t.GIWFlF), imageSrc: u, applicationId: d, comment: f, tags: p } = a,
        E = {
            variant: "heading-sm/medium",
            color: "text-default",
        },
        T = g.default.getCurrentUser(),
        k = (null == T ? void 0 : T.id) === t.id,
        C = !l && k && (0, b.vI)(o);
    return (0, m.kO)(d)
        ? (0, n.jsx)(y.i, {})
        : (0, n.jsxs)("div", {
              className: w.card,
              children: [
                  (0, n.jsx)(O.Z, {
                      className: null == u || l ? void 0 : _.hoverActiveEffect,
                      imageSrc: u,
                      gameName: s,
                      applicationId: d,
                      userId: t.id,
                      disableInteraction: l,
                      hideTooltip: !0,
                  }),
                  (0, n.jsxs)("div", {
                      className: w.details,
                      children: [
                          l
                              ? (0, n.jsx)(c.Heading, I(P({}, E), { children: s }))
                              : (0, n.jsx)(
                                    S,
                                    P(
                                        {
                                            applicationId: d,
                                            userId: t.id,
                                            gameName: s,
                                        },
                                        E,
                                    ),
                                ),
                          C
                              ? (0, n.jsx)(N, {
                                    text: f,
                                    user: t,
                                    guildId: r,
                                    channelId: i,
                                    widgetType: o,
                                    applicationId: d,
                                })
                              : (0, n.jsx)(D, {
                                    text: f,
                                    user: t,
                                    guildId: r,
                                    channelId: i,
                                }),
                          (0, n.jsx)(j.Z, {
                              tags: p,
                              isCurrentUser: k,
                              widgetType: o,
                              applicationId: d,
                              disableInteraction: l,
                              className: w.tags,
                          }),
                          !l &&
                              (0, n.jsx)(v.Z, {
                                  className: w.socialProof,
                                  applicationId: d,
                                  guildId: r,
                                  channelId: i,
                              }),
                      ],
                  }),
                  !l &&
                      k &&
                      (0, n.jsx)(x.Z, {
                          game: a,
                          widgetType: o,
                          className: w.removeGameButton,
                      }),
              ],
          });
}
