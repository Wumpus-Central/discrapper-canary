n.d(t, { A: () => U });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l);
n(926675);
var r = n(534514),
    o = n(939249),
    c = n(140735),
    d = n(834730),
    u = n(216964),
    g = n(827734),
    m = n(260598),
    _ = n(22231),
    f = n(915089),
    x = n(409626),
    p = n(692969),
    I = n(201438),
    A = n(287809),
    h = n(562153),
    E = n(183555),
    v = n(735321),
    j = n(451395),
    N = n(823016),
    b = n(788593),
    C = n(492280),
    S = n(946599),
    T = n(858808),
    O = n(685049),
    k = n(985018),
    P = n(442356),
    L = n(529459);
function R(e) {
    let { index: t, widgetType: n, game: a, children: l, getWidth: s } = e,
        { manageFocusOnReorder: r } = (0, N.r)();
    return (0, i.jsx)(j.mG, {
        index: t,
        itemId: a.applicationId,
        listType: n,
        itemType: "GAME_DETAILS_CARD",
        itemPreviewProps: { game: a, widgetType: n, getWidth: s },
        "aria-label": k.intl.formatToPlainString(k.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, v.Un)(n, e, t),
        onEnd: () => r(a.applicationId),
        className: L.vF,
        dropBeforeClassName: L.A,
        dropAfterClassName: L.Ze,
        draggingClassName: L.Id,
        children: l,
    });
}
function D(e) {
    let { applicationId: t, userId: n, gameName: a, ...l } = e,
        s = (0, p.A)({
            location: "UserProfileWidgetGameDetailsCard",
            applicationId: t,
            source: x.Ob.UserProfile,
            sourceUserId: n,
            trackEntryPointImpression: !0,
        });
    return null == s
        ? (0, i.jsx)(r.D, { ...l, children: a })
        : (0, i.jsx)(r.D, { ...l, children: (0, i.jsx)(o.D, { onClick: s, className: L.sd, children: a }) });
}
function G(e) {
    let { user: t, guildId: n, channelId: a, id: l } = e;
    return (0, i.jsx)(c.A, { id: l, children: k.intl.format(k.t.TM0XDY, { name: h.Ay.getName(n, a, t) }) });
}
function y(e) {
    let { text: t, className: n } = e;
    return (0, i.jsx)(d.E, { variant: "text-sm/normal", color: "text-muted", className: n, children: t });
}
function w(e) {
    let { text: t, user: n, guildId: a, channelId: l } = e,
        s = (0, f.GV)();
    return null == t || "" === t.trim()
        ? null
        : (0, i.jsxs)("div", {
              role: "group",
              "aria-labelledby": s,
              children: [
                  (0, i.jsx)(u.c, { size: "xxs", color: g.A.colors.ICON_MUTED, className: L.Ls }),
                  (0, i.jsx)(G, { user: n, guildId: a, channelId: l, id: s }),
                  (0, i.jsx)(y, { text: t }),
              ],
          });
}
function M(e) {
    let { text: t, user: n, guildId: l, channelId: r, widgetType: d, applicationId: u } = e,
        x = (0, f.GV)(),
        p = (0, f.GV)(),
        { trackUserProfileEditAction: I } = (0, E.NJ)(),
        [A, h] = a.useState("idle"),
        [j, N] = a.useState(t ?? ""),
        b = a.useRef(null),
        C = a.useRef(null),
        S = k.intl.string(k.t.xKSfBT),
        T = null != t && "" !== t.trim(),
        O = a.useCallback(() => {
            I({ action: "PRESS_ADD_COMMENTARY", widgetEdited: d }), h("editing");
        }, [d, I]),
        P = a.useCallback(() => {
            let e = j.trim(),
                n = e !== (t ?? "").trim();
            (0, v.oc)(d, u, "" !== e ? e : void 0),
                h("completed"),
                n && I({ action: "COMMENTARY_EDITED", widgetEdited: d, gameId: u });
        }, [d, u, j, t, I]),
        R = a.useCallback((e) => {
            N(e);
        }, []);
    return (
        a.useEffect(() => {
            "editing" === A && N(t ?? "");
        }, [t, A]),
        a.useEffect(() => {
            "completed" === A && b.current?.focus();
        }, [A]),
        "editing" === A
            ? (0, i.jsxs)("div", {
                  className: L.kS,
                  children: [
                      (0, i.jsx)(c.A, { tag: "label", htmlFor: x, children: k.intl.string(k.t.JxKXeT) }),
                      (0, i.jsx)(m.f, {
                          id: x,
                          value: j,
                          placeholder: S,
                          onChange: R,
                          onBlur: P,
                          rows: 3,
                          autoFocus: "editing" === A,
                          onKeyDown: (e) => {
                              "Enter" !== e.key || e.shiftKey || (e.preventDefault(), P());
                          },
                          maxLength: 200,
                      }),
                  ],
              })
            : (0, i.jsxs)("div", {
                  ref: C,
                  role: "group",
                  "aria-labelledby": p,
                  onClick: O,
                  className: L.Vg,
                  children: [
                      (0, i.jsx)(_.R, { size: "xxs", color: g.A.colors.ICON_MUTED, className: L.Ls }),
                      (0, i.jsx)(G, { user: n, guildId: l, channelId: r, id: p }),
                      (0, i.jsx)(y, { text: t ?? S, className: s()(L.qC, !T && L.qf) }),
                      (0, i.jsx)(o.D, {
                          innerRef: b,
                          "aria-label": k.intl.string(k.t.ppb9MJ),
                          onClick: (e) => {
                              e.stopPropagation(), O();
                          },
                          focusProps: { ringTarget: C },
                      }),
                  ],
              })
    );
}
function U(e) {
    let {
            user: t,
            guildId: n,
            channelId: l,
            game: o,
            widgetType: c,
            disableInteraction: d = !1,
            index: u,
            onRemoveGame: g,
            coverRef: m,
            className: _,
        } = e,
        f = a.useRef(null),
        { applicationId: x, comment: p, tags: h } = o,
        { coverImageUrl: E, gameName: k, isLoading: G } = (0, I.A)(x),
        y = { variant: "heading-sm/medium", color: "text-default" },
        U = A.default.getCurrentUser(),
        F = U?.id === t.id,
        W = 1 === (0, v.cv)(c),
        B = !d && F,
        H = B && (0, v.y9)(c),
        V = B && !W,
        { registerDragHandleRef: X } = (0, N.r)();
    if (G) return (0, i.jsx)(C.E, {});
    let z = () =>
            (0, i.jsx)(b.A, {
                coverRef: m,
                className: null == E || d ? void 0 : P.iL,
                imageSrc: E,
                gameName: k,
                applicationId: x,
                userId: t.id,
                disableInteraction: d,
                hideTooltip: !0,
            }),
        Y = () =>
            (0, i.jsxs)("div", {
                ref: f,
                className: s()(L.Nr, _),
                children: [
                    V
                        ? (0, i.jsxs)("div", {
                              className: L.An,
                              children: [z(), (0, i.jsx)(j.jV, { buttonRef: X(o.applicationId), className: L.BU })],
                          })
                        : z(),
                    (0, i.jsxs)("div", {
                        className: L.zH,
                        children: [
                            d
                                ? (0, i.jsx)(r.D, { ...y, children: k })
                                : (0, i.jsx)(D, { applicationId: x, userId: t.id, gameName: k, ...y }),
                            H
                                ? (0, i.jsx)(M, {
                                      text: p,
                                      user: t,
                                      guildId: n,
                                      channelId: l,
                                      widgetType: c,
                                      applicationId: x,
                                  })
                                : (0, i.jsx)(w, { text: p, user: t, guildId: n, channelId: l }),
                            (0, i.jsx)(S.A, {
                                tags: h,
                                isCurrentUser: F,
                                widgetType: c,
                                applicationId: x,
                                disableInteraction: d,
                                className: L._A,
                            }),
                            !d && (0, i.jsx)(O.o, { className: L.Ez, applicationId: x, guildId: n, channelId: l }),
                        ],
                    }),
                    !d &&
                        F &&
                        (0, i.jsx)(T.A, {
                            game: o,
                            widgetType: c,
                            className: L.vS,
                            onRemove: () => g?.(o.applicationId),
                        }),
                ],
            });
    return V
        ? (0, i.jsx)(R, {
              index: u ?? 0,
              widgetType: c,
              game: o,
              getWidth: () => f.current?.offsetWidth,
              children: Y(),
          })
        : Y();
}
