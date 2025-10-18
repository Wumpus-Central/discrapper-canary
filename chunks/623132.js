n.d(t, { Z: () => Z }), n(781311), n(388685);
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
    h = n(780899),
    v = n(733231),
    y = n(817053),
    j = n(248554),
    O = n(879877),
    x = n(533815),
    _ = n(919498),
    I = n(388032),
    P = n(932366),
    w = n(776385);
function S(e) {
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
function E(e, t) {
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
function T(e) {
    let { index: t, widgetType: n, game: i, children: a } = e,
        { manageFocusOnReorder: l } = (0, v.C)();
    return (0, r.jsx)(h.yW, {
        index: t,
        itemId: i.applicationId,
        listType: n,
        itemType: "GAME_DETAILS_CARD",
        itemPreviewProps: {
            game: i,
            widgetType: n,
        },
        "aria-label": I.intl.formatToPlainString(I.t["0dR3g4"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, m.Eq)(n, e, t),
        onEnd: () => l(i.applicationId),
        className: w.dropTarget,
        dropBeforeClassName: w.dropIndicatorBefore,
        dropAfterClassName: w.dropIndicatorAfter,
        draggingClassName: w.isDragging,
        children: a,
    });
}
function C(e) {
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
        ? (0, r.jsx)(s.Heading, E(S({}, a), { children: i }))
        : (0, r.jsx)(
              s.Heading,
              E(S({}, a), {
                  children: (0, r.jsx)(s.P3F, {
                      onClick: l,
                      className: w.clickableText,
                      children: i,
                  }),
              }),
          );
}
function N(e) {
    let { user: t, guildId: n, channelId: i, id: a } = e;
    return (0, r.jsx)(s.nn4, {
        id: a,
        children: I.intl.format(I.t.TM0XDQ, { name: g.ZP.getName(n, i, t) }),
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
function A(e) {
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
                      className: w.commentIcon,
                  }),
                  (0, r.jsx)(N, {
                      user: n,
                      guildId: i,
                      channelId: a,
                      id: l,
                  }),
                  (0, r.jsx)(D, { text: t }),
              ],
          });
}
function k(e) {
    let { text: t, user: n, guildId: a, channelId: u, widgetType: d, applicationId: f } = e,
        g = (0, c.Dt)(),
        b = (0, c.Dt)(),
        { trackUserProfileEditAction: h } = (0, p.KZ)(),
        [v, y] = i.useState("idle"),
        [j, O] = i.useState(null != t ? t : ""),
        x = i.useRef(null),
        _ = i.useRef(null),
        P = I.intl.string(I.t.xKSfBQ),
        S = null != t && "" !== t.trim(),
        E = i.useCallback(() => {
            h({
                action: "PRESS_ADD_COMMENTARY",
                widgetEdited: d,
            }),
                y("editing");
        }, [d, h]),
        T = i.useCallback(() => {
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
        C = i.useCallback((e) => {
            O(e);
        }, []);
    return (
        i.useEffect(() => {
            "editing" === v && O(null != t ? t : "");
        }, [t, v]),
        i.useEffect(() => {
            if ("completed" === v) {
                var e;
                null == (e = x.current) || e.focus();
            }
        }, [v]),
        "editing" === v
            ? (0, r.jsxs)("div", {
                  className: w.textAreaContainer,
                  children: [
                      (0, r.jsx)(s.nn4, {
                          tag: "label",
                          htmlFor: g,
                          children: I.intl.string(I.t.JxKXeX),
                      }),
                      (0, r.jsx)(s.Kx8, {
                          id: g,
                          value: j,
                          placeholder: P,
                          onChange: C,
                          onBlur: T,
                          rows: 3,
                          autoFocus: "editing" === v,
                          onKeyDown: (e) => {
                              "Enter" !== e.key || e.shiftKey || (e.preventDefault(), T());
                          },
                          maxLength: o.rN,
                      }),
                  ],
              })
            : (0, r.jsxs)("div", {
                  ref: _,
                  role: "group",
                  "aria-labelledby": b,
                  onClick: E,
                  className: w.editableCommentContainer,
                  children: [
                      (0, r.jsx)(s.vdY, {
                          size: "xxs",
                          color: s.TVs.colors.ICON_TERTIARY,
                          className: w.commentIcon,
                      }),
                      (0, r.jsx)(N, {
                          user: n,
                          guildId: a,
                          channelId: u,
                          id: b,
                      }),
                      (0, r.jsx)(D, {
                          text: null != t ? t : P,
                          className: l()(w.editableCommentText, !S && w.placeholder),
                      }),
                      (0, r.jsx)(s.P3F, {
                          innerRef: x,
                          "aria-label": I.intl.string(I.t.ppb9MD),
                          onClick: (e) => {
                              e.stopPropagation(), E();
                          },
                          focusProps: { ringTarget: _ },
                      }),
                  ],
              })
    );
}
function Z(e) {
    let {
            user: t,
            guildId: n,
            channelId: a,
            game: o,
            widgetType: c,
            disableInteraction: u = !1,
            index: d,
            onRemoveGame: g,
            coverRef: p,
            className: N,
        } = e,
        { gameName: D = I.intl.string(I.t.GIWFlJ), imageSrc: Z, applicationId: R, comment: L, tags: G } = o,
        B = {
            variant: "heading-sm/medium",
            color: "text-default",
        },
        M = f.default.getCurrentUser(),
        F = (null == M ? void 0 : M.id) === t.id,
        W = 1 === (0, m.Gv)(c),
        U = !u && F,
        H = U && (0, m.vI)(c),
        z = U && !W,
        K = (0, b.kO)(R),
        { registerDragHandleRef: V } = (0, v.C)(),
        q = i.useRef(null);
    if (K) return (0, r.jsx)(j.i, {});
    let Y = () =>
            (0, r.jsx)(y.Z, {
                coverRef: p,
                className: null == Z || u ? void 0 : P.hoverActiveEffect,
                imageSrc: Z,
                gameName: D,
                applicationId: R,
                userId: t.id,
                disableInteraction: u,
                hideTooltip: !0,
            }),
        X = () =>
            (0, r.jsxs)("div", {
                className: l()(w.card, N),
                children: [
                    z
                        ? (0, r.jsxs)("div", {
                              ref: q,
                              className: w.dragHandleContainer,
                              children: [
                                  Y(),
                                  (0, r.jsx)(h.e_, {
                                      buttonRef: V(o.applicationId),
                                      className: w.dragHandle,
                                      focusProps: { ringTarget: q },
                                  }),
                              ],
                          })
                        : Y(),
                    (0, r.jsxs)("div", {
                        className: w.details,
                        children: [
                            u
                                ? (0, r.jsx)(s.Heading, E(S({}, B), { children: D }))
                                : (0, r.jsx)(
                                      C,
                                      S(
                                          {
                                              applicationId: R,
                                              userId: t.id,
                                              gameName: D,
                                          },
                                          B,
                                      ),
                                  ),
                            H
                                ? (0, r.jsx)(k, {
                                      text: L,
                                      user: t,
                                      guildId: n,
                                      channelId: a,
                                      widgetType: c,
                                      applicationId: R,
                                  })
                                : (0, r.jsx)(A, {
                                      text: L,
                                      user: t,
                                      guildId: n,
                                      channelId: a,
                                  }),
                            (0, r.jsx)(O.Z, {
                                tags: G,
                                isCurrentUser: F,
                                widgetType: c,
                                applicationId: R,
                                disableInteraction: u,
                                className: w.tags,
                            }),
                            !u &&
                                (0, r.jsx)(_.Z, {
                                    className: w.socialProof,
                                    applicationId: R,
                                    guildId: n,
                                    channelId: a,
                                }),
                        ],
                    }),
                    !u &&
                        F &&
                        (0, r.jsx)(x.Z, {
                            game: o,
                            widgetType: c,
                            className: w.removeGameButton,
                            onRemove: () => (null == g ? void 0 : g(o.applicationId)),
                        }),
                ],
            });
    return z
        ? (0, r.jsx)(T, {
              index: null != d ? d : 0,
              widgetType: c,
              game: o,
              children: X(),
          })
        : X();
}
