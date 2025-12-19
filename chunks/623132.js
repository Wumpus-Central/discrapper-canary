n.d(t, { Z: () => Z }), n(781311), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    l = n.n(a),
    o = n(624238),
    c = n(481060),
    s = n(313201),
    u = n(810568),
    d = n(168524),
    f = n(594174),
    g = n(5192),
    p = n(785717),
    b = n(86419),
    m = n(780899),
    h = n(733231),
    y = n(817053),
    v = n(248554),
    O = n(879877),
    j = n(533815),
    x = n(919498),
    P = n(394606),
    I = n(388032),
    w = n(713603),
    S = n(447921);
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
function T(e, t) {
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
function _(e) {
    let { index: t, widgetType: n, game: i, children: a } = e,
        { manageFocusOnReorder: l } = (0, h.C)();
    return (0, r.jsx)(m.yW, {
        index: t,
        itemId: i.applicationId,
        listType: n,
        itemType: "GAME_DETAILS_CARD",
        itemPreviewProps: {
            game: i,
            widgetType: n,
        },
        "aria-label": I.intl.formatToPlainString(I.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, b.Eq)(n, e, t),
        onEnd: () => l(i.applicationId),
        className: S.dropTarget,
        dropBeforeClassName: S.dropIndicatorBefore,
        dropAfterClassName: S.dropIndicatorAfter,
        draggingClassName: S.isDragging,
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
        ? (0, r.jsx)(c.Heading, T(E({}, a), { children: i }))
        : (0, r.jsx)(
              c.Heading,
              T(E({}, a), {
                  children: (0, r.jsx)(c.P3F, {
                      onClick: l,
                      className: S.clickableText,
                      children: i,
                  }),
              }),
          );
}
function D(e) {
    let { user: t, guildId: n, channelId: i, id: a } = e;
    return (0, r.jsx)(c.nn4, {
        id: a,
        children: I.intl.format(I.t.TM0XDY, { name: g.ZP.getName(n, i, t) }),
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
    let { text: t, user: n, guildId: i, channelId: a } = e,
        l = (0, s.Dt)();
    return null == t || "" === t.trim()
        ? null
        : (0, r.jsxs)("div", {
              role: "group",
              "aria-labelledby": l,
              children: [
                  (0, r.jsx)(c.PEf, {
                      size: "xxs",
                      color: c.TVs.colors.ICON_MUTED,
                      className: S.commentIcon,
                  }),
                  (0, r.jsx)(D, {
                      user: n,
                      guildId: i,
                      channelId: a,
                      id: l,
                  }),
                  (0, r.jsx)(k, { text: t }),
              ],
          });
}
function A(e) {
    let { text: t, user: n, guildId: a, channelId: u, widgetType: d, applicationId: f } = e,
        g = (0, s.Dt)(),
        m = (0, s.Dt)(),
        { trackUserProfileEditAction: h } = (0, p.KZ)(),
        [y, v] = i.useState("idle"),
        [O, j] = i.useState(null != t ? t : ""),
        x = i.useRef(null),
        P = i.useRef(null),
        w = I.intl.string(I.t.xKSfBT),
        E = null != t && "" !== t.trim(),
        T = i.useCallback(() => {
            h({
                action: "PRESS_ADD_COMMENTARY",
                widgetEdited: d,
            }),
                v("editing");
        }, [d, h]),
        _ = i.useCallback(() => {
            let e = O.trim(),
                n = e !== (null != t ? t : "").trim();
            (0, b.Bu)(d, f, "" !== e ? e : void 0),
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
                  className: S.textAreaContainer,
                  children: [
                      (0, r.jsx)(c.nn4, {
                          tag: "label",
                          htmlFor: g,
                          children: I.intl.string(I.t.JxKXeT),
                      }),
                      (0, r.jsx)(c.Kx8, {
                          id: g,
                          value: O,
                          placeholder: w,
                          onChange: C,
                          onBlur: _,
                          rows: 3,
                          autoFocus: "editing" === y,
                          onKeyDown: (e) => {
                              "Enter" !== e.key || e.shiftKey || (e.preventDefault(), _());
                          },
                          maxLength: o.rN,
                      }),
                  ],
              })
            : (0, r.jsxs)("div", {
                  ref: P,
                  role: "group",
                  "aria-labelledby": m,
                  onClick: T,
                  className: S.editableCommentContainer,
                  children: [
                      (0, r.jsx)(c.vdY, {
                          size: "xxs",
                          color: c.TVs.colors.ICON_MUTED,
                          className: S.commentIcon,
                      }),
                      (0, r.jsx)(D, {
                          user: n,
                          guildId: a,
                          channelId: u,
                          id: m,
                      }),
                      (0, r.jsx)(k, {
                          text: null != t ? t : w,
                          className: l()(S.editableCommentText, !E && S.placeholder),
                      }),
                      (0, r.jsx)(c.P3F, {
                          innerRef: x,
                          "aria-label": I.intl.string(I.t.ppb9MJ),
                          onClick: (e) => {
                              e.stopPropagation(), T();
                          },
                          focusProps: { ringTarget: P },
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
            game: a,
            widgetType: o,
            disableInteraction: s = !1,
            index: u,
            onRemoveGame: d,
            coverRef: g,
            className: p,
        } = e,
        { applicationId: I, comment: D, tags: k } = a,
        { coverImageUrl: Z, gameName: R, isLoading: G } = (0, P.Z)(I),
        M = {
            variant: "heading-sm/medium",
            color: "text-default",
        },
        L = f.default.getCurrentUser(),
        B = (null == L ? void 0 : L.id) === t.id,
        F = 1 === (0, b.Gv)(o),
        U = !s && B,
        W = U && (0, b.vI)(o),
        H = U && !F,
        { registerDragHandleRef: z } = (0, h.C)();
    if (G) return (0, r.jsx)(v.i, {});
    let K = () =>
            (0, r.jsx)(y.Z, {
                coverRef: g,
                className: null == Z || s ? void 0 : w.hoverActiveEffect,
                imageSrc: Z,
                gameName: R,
                applicationId: I,
                userId: t.id,
                disableInteraction: s,
                hideTooltip: !0,
            }),
        q = () =>
            (0, r.jsxs)("div", {
                className: l()(S.card, p),
                children: [
                    H
                        ? (0, r.jsxs)("div", {
                              className: S.dragHandleContainer,
                              children: [
                                  K(),
                                  (0, r.jsx)(m.e_, {
                                      buttonRef: z(a.applicationId),
                                      className: S.dragHandle,
                                  }),
                              ],
                          })
                        : K(),
                    (0, r.jsxs)("div", {
                        className: S.details,
                        children: [
                            s
                                ? (0, r.jsx)(c.Heading, T(E({}, M), { children: R }))
                                : (0, r.jsx)(
                                      C,
                                      E(
                                          {
                                              applicationId: I,
                                              userId: t.id,
                                              gameName: R,
                                          },
                                          M,
                                      ),
                                  ),
                            W
                                ? (0, r.jsx)(A, {
                                      text: D,
                                      user: t,
                                      guildId: n,
                                      channelId: i,
                                      widgetType: o,
                                      applicationId: I,
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
                                applicationId: I,
                                disableInteraction: s,
                                className: S.tags,
                            }),
                            !s &&
                                (0, r.jsx)(x.F, {
                                    className: S.socialProof,
                                    applicationId: I,
                                    guildId: n,
                                    channelId: i,
                                }),
                        ],
                    }),
                    !s &&
                        B &&
                        (0, r.jsx)(j.Z, {
                            game: a,
                            widgetType: o,
                            className: S.removeGameButton,
                            onRemove: () => (null == d ? void 0 : d(a.applicationId)),
                        }),
                ],
            });
    return H
        ? (0, r.jsx)(_, {
              index: null != u ? u : 0,
              widgetType: o,
              game: a,
              children: q(),
          })
        : q();
}
