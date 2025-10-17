n.d(t, { Z: () => A }), n(781311), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    l = n.n(a),
    o = n(624238),
    s = n(481060),
    c = n(313201),
    u = n(810568),
    d = n(168524),
    f = n(594174),
    g = n(5192),
    p = n(785717),
    m = n(86419),
    b = n(747101),
    h = n(817053),
    v = n(248554),
    y = n(879877),
    j = n(533815),
    O = n(919498),
    x = n(388032),
    _ = n(932366),
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
function w(e, t) {
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
    let l = (0, d.Z)({
        location: "UserProfileWidgetGameDetailsCard",
        applicationId: t,
        source: u.m1.UserProfile,
        sourceUserId: n,
        trackEntryPointImpression: !0,
    });
    return null == l
        ? (0, r.jsx)(s.Heading, w(I({}, a), { children: i }))
        : (0, r.jsx)(
              s.Heading,
              w(I({}, a), {
                  children: (0, r.jsx)(s.P3F, {
                      onClick: l,
                      className: P.clickableText,
                      children: i,
                  }),
              }),
          );
}
function E(e) {
    let { user: t, guildId: n, channelId: i, id: a } = e;
    return (0, r.jsx)(s.nn4, {
        id: a,
        children: x.intl.format(x.t.TM0XDQ, { name: g.ZP.getName(n, i, t) }),
    });
}
function T(e) {
    let { text: t, className: n } = e;
    return (0, r.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "text-tertiary",
        className: n,
        children: t,
    });
}
function C(e) {
    let { text: t, user: n, guildId: i, channelId: a } = e,
        l = (0, c.Dt)();
    return null == t || "" === t.trim()
        ? null
        : (0, r.jsxs)("div", {
              role: "group",
              "aria-labelledby": l,
              children: [
                  (0, r.jsx)(s.PEf, {
                      size: "xxs",
                      color: s.TVs.colors.ICON_TERTIARY,
                      className: P.commentIcon,
                  }),
                  (0, r.jsx)(E, {
                      user: n,
                      guildId: i,
                      channelId: a,
                      id: l,
                  }),
                  (0, r.jsx)(T, { text: t }),
              ],
          });
}
function N(e) {
    let { text: t, user: n, guildId: a, channelId: u, widgetType: d, applicationId: f } = e,
        g = (0, c.Dt)(),
        b = (0, c.Dt)(),
        { trackUserProfileEditAction: h } = (0, p.KZ)(),
        [v, y] = i.useState("idle"),
        [j, O] = i.useState(null != t ? t : ""),
        _ = i.useRef(null),
        I = i.useRef(null),
        w = x.intl.string(x.t.xKSfBQ),
        S = null != t && "" !== t.trim(),
        C = i.useCallback(() => {
            h({
                action: "PRESS_ADD_COMMENTARY",
                widgetEdited: d,
            }),
                y("editing");
        }, [d, h]),
        N = i.useCallback(() => {
            let e = j.trim(),
                n = e !== (null != t ? t : "").trim();
            (0, m.Bu)(d, f, "" !== e ? e : void 0),
                y("completed"),
                n &&
                    h({
                        action: "COMMENTARY_EDITED",
                        widgetEdited: d,
                        gameId: f,
                    });
        }, [d, f, j, t, h]),
        A = i.useCallback((e) => {
            O(e);
        }, []);
    return (
        i.useEffect(() => {
            "editing" === v && O(null != t ? t : "");
        }, [t, v]),
        i.useEffect(() => {
            if ("completed" === v) {
                var e;
                null == (e = _.current) || e.focus();
            }
        }, [v]),
        "editing" === v
            ? (0, r.jsxs)("div", {
                  className: P.textAreaContainer,
                  children: [
                      (0, r.jsx)(s.nn4, {
                          tag: "label",
                          htmlFor: g,
                          children: x.intl.string(x.t.JxKXeX),
                      }),
                      (0, r.jsx)(s.Kx8, {
                          id: g,
                          value: j,
                          placeholder: w,
                          onChange: A,
                          onBlur: N,
                          rows: 3,
                          autoFocus: "editing" === v,
                          onKeyDown: (e) => {
                              "Enter" !== e.key || e.shiftKey || (e.preventDefault(), N());
                          },
                          maxLength: o.rN,
                      }),
                  ],
              })
            : (0, r.jsxs)("div", {
                  ref: I,
                  role: "group",
                  "aria-labelledby": b,
                  onClick: C,
                  className: P.editableCommentContainer,
                  children: [
                      (0, r.jsx)(s.vdY, {
                          size: "xxs",
                          color: s.TVs.colors.ICON_TERTIARY,
                          className: P.commentIcon,
                      }),
                      (0, r.jsx)(E, {
                          user: n,
                          guildId: a,
                          channelId: u,
                          id: b,
                      }),
                      (0, r.jsx)(T, {
                          text: null != t ? t : w,
                          className: l()(P.editableCommentText, !S && P.placeholder),
                      }),
                      (0, r.jsx)(s.P3F, {
                          innerRef: _,
                          "aria-label": x.intl.string(x.t.ppb9MD),
                          onClick: (e) => {
                              e.stopPropagation(), C();
                          },
                          focusProps: { ringTarget: I },
                      }),
                  ],
              })
    );
}
function A(e) {
    let { user: t, guildId: n, channelId: i, game: a, widgetType: l, disableInteraction: o = !1 } = e,
        { gameName: c = x.intl.string(x.t.GIWFlJ), imageSrc: u, applicationId: d, comment: g, tags: p } = a,
        E = {
            variant: "heading-sm/medium",
            color: "text-default",
        },
        T = f.default.getCurrentUser(),
        A = (null == T ? void 0 : T.id) === t.id,
        D = !o && A && (0, m.vI)(l);
    return (0, b.kO)(d)
        ? (0, r.jsx)(v.i, {})
        : (0, r.jsxs)("div", {
              className: P.card,
              children: [
                  (0, r.jsx)(h.Z, {
                      className: null == u || o ? void 0 : _.hoverActiveEffect,
                      imageSrc: u,
                      gameName: c,
                      applicationId: d,
                      userId: t.id,
                      disableInteraction: o,
                      hideTooltip: !0,
                  }),
                  (0, r.jsxs)("div", {
                      className: P.details,
                      children: [
                          o
                              ? (0, r.jsx)(s.Heading, w(I({}, E), { children: c }))
                              : (0, r.jsx)(
                                    S,
                                    I(
                                        {
                                            applicationId: d,
                                            userId: t.id,
                                            gameName: c,
                                        },
                                        E,
                                    ),
                                ),
                          D
                              ? (0, r.jsx)(N, {
                                    text: g,
                                    user: t,
                                    guildId: n,
                                    channelId: i,
                                    widgetType: l,
                                    applicationId: d,
                                })
                              : (0, r.jsx)(C, {
                                    text: g,
                                    user: t,
                                    guildId: n,
                                    channelId: i,
                                }),
                          (0, r.jsx)(y.Z, {
                              tags: p,
                              isCurrentUser: A,
                              widgetType: l,
                              applicationId: d,
                              disableInteraction: o,
                              className: P.tags,
                          }),
                          !o &&
                              (0, r.jsx)(O.Z, {
                                  className: P.socialProof,
                                  applicationId: d,
                                  guildId: n,
                                  channelId: i,
                              }),
                      ],
                  }),
                  !o &&
                      A &&
                      (0, r.jsx)(j.Z, {
                          game: a,
                          widgetType: l,
                          className: P.removeGameButton,
                      }),
              ],
          });
}
