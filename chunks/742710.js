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
    _ = n(827734),
    g = n(260598),
    f = n(22231),
    m = n(915089),
    x = n(409626),
    p = n(692969),
    I = n(201438),
    A = n(287809),
    h = n(562153),
    E = n(183555),
    v = n(735321),
    C = n(451395),
    b = n(823016),
    j = n(788593),
    T = n(492280),
    N = n(946599),
    S = n(858808),
    k = n(685049),
    O = n(985018),
    L = n(442356),
    P = n(529459);
function R(e) {
    let { index: t, widgetType: n, game: a, children: l, getWidth: s } = e,
        { manageFocusOnReorder: r } = (0, b.r)();
    return (0, i.jsx)(C.mG, {
        index: t,
        itemId: a.applicationId,
        listType: n,
        itemType: "GAME_DETAILS_CARD",
        itemPreviewProps: { game: a, widgetType: n, getWidth: s },
        "aria-label": O.intl.formatToPlainString(O.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, v.Un)(n, e, t),
        onEnd: () => r(a.applicationId),
        className: P.vF,
        dropBeforeClassName: P.A,
        dropAfterClassName: P.Ze,
        draggingClassName: P.Id,
        children: l,
    });
}
function w(e) {
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
        : (0, i.jsx)(r.D, { ...l, children: (0, i.jsx)(o.D, { onClick: s, className: P.sd, children: a }) });
}
function D(e) {
    let { user: t, guildId: n, channelId: a, id: l } = e;
    return (0, i.jsx)(c.A, { id: l, children: O.intl.format(O.t.TM0XDY, { name: h.Ay.getName(n, a, t) }) });
}
function G(e) {
    let { text: t, className: n } = e;
    return (0, i.jsx)(d.E, { variant: "text-sm/normal", color: "text-muted", className: n, children: t });
}
function y(e) {
    let { text: t, user: n, guildId: a, channelId: l } = e,
        s = (0, m.GV)();
    return null == t || "" === t.trim()
        ? null
        : (0, i.jsxs)("div", {
              role: "group",
              "aria-labelledby": s,
              children: [
                  (0, i.jsx)(u.c, { size: "xxs", color: _.A.colors.ICON_MUTED, className: P.Ls }),
                  (0, i.jsx)(D, { user: n, guildId: a, channelId: l, id: s }),
                  (0, i.jsx)(G, { text: t }),
              ],
          });
}
function M(e) {
    let { text: t, user: n, guildId: l, channelId: r, widgetType: d, applicationId: u } = e,
        x = (0, m.GV)(),
        p = (0, m.GV)(),
        { trackUserProfileEditAction: I } = (0, E.NJ)(),
        [A, h] = a.useState("idle"),
        [C, b] = a.useState(t ?? ""),
        j = a.useRef(null),
        T = a.useRef(null),
        N = O.intl.string(O.t.xKSfBT),
        S = null != t && "" !== t.trim(),
        k = a.useCallback(() => {
            I({ action: "PRESS_ADD_COMMENTARY", widgetEdited: d }), h("editing");
        }, [d, I]),
        L = a.useCallback(() => {
            let e = C.trim(),
                n = e !== (t ?? "").trim();
            (0, v.oc)(d, u, "" !== e ? e : void 0),
                h("completed"),
                n && I({ action: "COMMENTARY_EDITED", widgetEdited: d, gameId: u });
        }, [d, u, C, t, I]),
        R = a.useCallback((e) => {
            b(e);
        }, []);
    return (
        a.useEffect(() => {
            "editing" === A && b(t ?? "");
        }, [t, A]),
        a.useEffect(() => {
            "completed" === A && j.current?.focus();
        }, [A]),
        "editing" === A
            ? (0, i.jsxs)("div", {
                  className: P.kS,
                  children: [
                      (0, i.jsx)(c.A, { tag: "label", htmlFor: x, children: O.intl.string(O.t.JxKXeT) }),
                      (0, i.jsx)(g.f, {
                          id: x,
                          value: C,
                          placeholder: N,
                          onChange: R,
                          onBlur: L,
                          rows: 3,
                          autoFocus: "editing" === A,
                          onKeyDown: (e) => {
                              "Enter" !== e.key || e.shiftKey || (e.preventDefault(), L());
                          },
                          maxLength: 200,
                      }),
                  ],
              })
            : (0, i.jsxs)("div", {
                  ref: T,
                  role: "group",
                  "aria-labelledby": p,
                  onClick: k,
                  className: P.Vg,
                  children: [
                      (0, i.jsx)(f.R, { size: "xxs", color: _.A.colors.ICON_MUTED, className: P.Ls }),
                      (0, i.jsx)(D, { user: n, guildId: l, channelId: r, id: p }),
                      (0, i.jsx)(G, { text: t ?? N, className: s()(P.qC, !S && P.qf) }),
                      (0, i.jsx)(o.D, {
                          innerRef: j,
                          "aria-label": O.intl.string(O.t.ppb9MJ),
                          onClick: (e) => {
                              e.stopPropagation(), k();
                          },
                          focusProps: { ringTarget: T },
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
            onRemoveGame: _,
            coverRef: g,
            className: f,
        } = e,
        m = a.useRef(null),
        { applicationId: x, comment: p, tags: h } = o,
        { coverImageUrl: E, gameName: O, isLoading: D } = (0, I.A)(x),
        G = { variant: "heading-sm/medium", color: "text-default" },
        U = A.default.getCurrentUser(),
        F = U?.id === t.id,
        W = 1 === (0, v.cv)(c),
        H = !d && F,
        B = H && (0, v.y9)(c),
        V = H && !W,
        { registerDragHandleRef: X } = (0, b.r)();
    if (D) return (0, i.jsx)(T.E, {});
    let z = () =>
            (0, i.jsx)(j.A, {
                coverRef: g,
                className: null == E || d ? void 0 : L.iL,
                imageSrc: E,
                gameName: O,
                applicationId: x,
                userId: t.id,
                disableInteraction: d,
                hideTooltip: !0,
            }),
        Y = () =>
            (0, i.jsxs)("div", {
                ref: m,
                className: s()(P.Nr, f),
                children: [
                    V
                        ? (0, i.jsxs)("div", {
                              className: P.An,
                              children: [z(), (0, i.jsx)(C.jV, { buttonRef: X(o.applicationId), className: P.BU })],
                          })
                        : z(),
                    (0, i.jsxs)("div", {
                        className: P.zH,
                        children: [
                            d
                                ? (0, i.jsx)(r.D, { ...G, children: O })
                                : (0, i.jsx)(w, { applicationId: x, userId: t.id, gameName: O, ...G }),
                            B
                                ? (0, i.jsx)(M, {
                                      text: p,
                                      user: t,
                                      guildId: n,
                                      channelId: l,
                                      widgetType: c,
                                      applicationId: x,
                                  })
                                : (0, i.jsx)(y, { text: p, user: t, guildId: n, channelId: l }),
                            (0, i.jsx)(N.A, {
                                tags: h,
                                isCurrentUser: F,
                                widgetType: c,
                                applicationId: x,
                                disableInteraction: d,
                                className: P._A,
                            }),
                            !d && (0, i.jsx)(k.o, { className: P.Ez, applicationId: x, guildId: n, channelId: l }),
                        ],
                    }),
                    !d &&
                        F &&
                        (0, i.jsx)(S.A, {
                            game: o,
                            widgetType: c,
                            className: P.vS,
                            onRemove: () => _?.(o.applicationId),
                        }),
                ],
            });
    return V
        ? (0, i.jsx)(R, {
              index: u ?? 0,
              widgetType: c,
              game: o,
              getWidth: () => m.current?.offsetWidth,
              children: Y(),
          })
        : Y();
}
