n.d(t, { Z: () => Z }), n(781311), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(624238),
    c = n(481060),
    s = n(313201),
    u = n(810568),
    d = n(168524),
    f = n(594174),
    g = n(5192),
    p = n(785717),
    m = n(86419),
    b = n(780899),
    h = n(733231),
    y = n(817053),
    v = n(248554),
    O = n(879877),
    j = n(533815),
    x = n(919498),
    _ = n(394606),
    P = n(388032),
    I = n(932366),
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
    let { index: t, widgetType: n, game: i, children: l } = e,
        { manageFocusOnReorder: a } = (0, h.C)();
    return (0, r.jsx)(b.yW, {
        index: t,
        itemId: i.applicationId,
        listType: n,
        itemType: "GAME_DETAILS_CARD",
        itemPreviewProps: {
            game: i,
            widgetType: n,
        },
        "aria-label": P.intl.formatToPlainString(P.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, m.Eq)(n, e, t),
        onEnd: () => a(i.applicationId),
        className: w.dropTarget,
        dropBeforeClassName: w.dropIndicatorBefore,
        dropAfterClassName: w.dropIndicatorAfter,
        draggingClassName: w.isDragging,
        children: l,
    });
}
function C(e) {
    var { applicationId: t, userId: n, gameName: i } = e,
        l = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ["applicationId", "userId", "gameName"]);
    let a = (0, d.Z)({
        location: "UserProfileWidgetGameDetailsCard",
        applicationId: t,
        source: u.m1.UserProfile,
        sourceUserId: n,
        trackEntryPointImpression: !0,
    });
    return null == a
        ? (0, r.jsx)(c.Heading, E(S({}, l), { children: i }))
        : (0, r.jsx)(
              c.Heading,
              E(S({}, l), {
                  children: (0, r.jsx)(c.P3F, {
                      onClick: a,
                      className: w.clickableText,
                      children: i,
                  }),
              }),
          );
}
function D(e) {
    let { user: t, guildId: n, channelId: i, id: l } = e;
    return (0, r.jsx)(c.nn4, {
        id: l,
        children: P.intl.format(P.t.TM0XDY, { name: g.ZP.getName(n, i, t) }),
    });
}
function k(e) {
    let { text: t, className: n } = e;
    return (0, r.jsx)(c.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: n,
        children: t,
    });
}
function N(e) {
    let { text: t, user: n, guildId: i, channelId: l } = e,
        a = (0, s.Dt)();
    return null == t || "" === t.trim()
        ? null
        : (0, r.jsxs)("div", {
              role: "group",
              "aria-labelledby": a,
              children: [
                  (0, r.jsx)(c.PEf, {
                      size: "xxs",
                      color: c.TVs.colors.ICON_TERTIARY,
                      className: w.commentIcon,
                  }),
                  (0, r.jsx)(D, {
                      user: n,
                      guildId: i,
                      channelId: l,
                      id: a,
                  }),
                  (0, r.jsx)(k, { text: t }),
              ],
          });
}
function A(e) {
    let { text: t, user: n, guildId: l, channelId: u, widgetType: d, applicationId: f } = e,
        g = (0, s.Dt)(),
        b = (0, s.Dt)(),
        { trackUserProfileEditAction: h } = (0, p.KZ)(),
        [y, v] = i.useState("idle"),
        [O, j] = i.useState(null != t ? t : ""),
        x = i.useRef(null),
        _ = i.useRef(null),
        I = P.intl.string(P.t.xKSfBT),
        S = null != t && "" !== t.trim(),
        E = i.useCallback(() => {
            h({
                action: "PRESS_ADD_COMMENTARY",
                widgetEdited: d,
            }),
                v("editing");
        }, [d, h]),
        T = i.useCallback(() => {
            let e = O.trim(),
                n = e !== (null != t ? t : "").trim();
            (0, m.Bu)(d, f, "" !== e ? e : void 0),
                v("completed"),
                n &&
                    h({
                        action: "COMMENTARY_EDITED",
                        widgetEdited: d,
                        gameId: f,
                    });
        }, [d, f, O, t, h]),
        C = i.useCallback((e) => {
            j(e);
        }, []);
    return (
        i.useEffect(() => {
            "editing" === y && j(null != t ? t : "");
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
                      (0, r.jsx)(c.nn4, {
                          tag: "label",
                          htmlFor: g,
                          children: P.intl.string(P.t.JxKXeT),
                      }),
                      (0, r.jsx)(c.Kx8, {
                          id: g,
                          value: O,
                          placeholder: I,
                          onChange: C,
                          onBlur: T,
                          rows: 3,
                          autoFocus: "editing" === y,
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
                      (0, r.jsx)(c.vdY, {
                          size: "xxs",
                          color: c.TVs.colors.ICON_TERTIARY,
                          className: w.commentIcon,
                      }),
                      (0, r.jsx)(D, {
                          user: n,
                          guildId: l,
                          channelId: u,
                          id: b,
                      }),
                      (0, r.jsx)(k, {
                          text: null != t ? t : I,
                          className: a()(w.editableCommentText, !S && w.placeholder),
                      }),
                      (0, r.jsx)(c.P3F, {
                          innerRef: x,
                          "aria-label": P.intl.string(P.t.ppb9MJ),
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
            channelId: i,
            game: l,
            widgetType: o,
            disableInteraction: s = !1,
            index: u,
            onRemoveGame: d,
            coverRef: g,
            className: p,
        } = e,
        { applicationId: P, comment: D, tags: k } = l,
        { coverImageUrl: Z, gameName: R, isLoading: G } = (0, _.Z)(P),
        L = {
            variant: "heading-sm/medium",
            color: "text-default",
        },
        M = f.default.getCurrentUser(),
        B = (null == M ? void 0 : M.id) === t.id,
        F = 1 === (0, m.Gv)(o),
        U = !s && B,
        W = U && (0, m.vI)(o),
        H = U && !F,
        { registerDragHandleRef: z } = (0, h.C)();
    if (G) return (0, r.jsx)(v.i, {});
    let K = () =>
            (0, r.jsx)(y.Z, {
                coverRef: g,
                className: null == Z || s ? void 0 : I.hoverActiveEffect,
                imageSrc: Z,
                gameName: R,
                applicationId: P,
                userId: t.id,
                disableInteraction: s,
                hideTooltip: !0,
            }),
        V = () =>
            (0, r.jsxs)("div", {
                className: a()(w.card, p),
                children: [
                    H
                        ? (0, r.jsxs)("div", {
                              className: w.dragHandleContainer,
                              children: [
                                  K(),
                                  (0, r.jsx)(b.e_, {
                                      buttonRef: z(l.applicationId),
                                      className: w.dragHandle,
                                  }),
                              ],
                          })
                        : K(),
                    (0, r.jsxs)("div", {
                        className: w.details,
                        children: [
                            s
                                ? (0, r.jsx)(c.Heading, E(S({}, L), { children: R }))
                                : (0, r.jsx)(
                                      C,
                                      S(
                                          {
                                              applicationId: P,
                                              userId: t.id,
                                              gameName: R,
                                          },
                                          L,
                                      ),
                                  ),
                            W
                                ? (0, r.jsx)(A, {
                                      text: D,
                                      user: t,
                                      guildId: n,
                                      channelId: i,
                                      widgetType: o,
                                      applicationId: P,
                                  })
                                : (0, r.jsx)(N, {
                                      text: D,
                                      user: t,
                                      guildId: n,
                                      channelId: i,
                                  }),
                            (0, r.jsx)(O.Z, {
                                tags: k,
                                isCurrentUser: B,
                                widgetType: o,
                                applicationId: P,
                                disableInteraction: s,
                                className: w.tags,
                            }),
                            !s &&
                                (0, r.jsx)(x.F, {
                                    className: w.socialProof,
                                    applicationId: P,
                                    guildId: n,
                                    channelId: i,
                                }),
                        ],
                    }),
                    !s &&
                        B &&
                        (0, r.jsx)(j.Z, {
                            game: l,
                            widgetType: o,
                            className: w.removeGameButton,
                            onRemove: () => (null == d ? void 0 : d(l.applicationId)),
                        }),
                ],
            });
    return H
        ? (0, r.jsx)(T, {
              index: null != u ? u : 0,
              widgetType: o,
              game: l,
              children: V(),
          })
        : V();
}
