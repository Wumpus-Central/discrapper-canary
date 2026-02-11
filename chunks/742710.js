n.d(t, { A: () => R });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a);
n(926675);
var s = n(397927),
    o = n(915089),
    d = n(409626),
    c = n(692969),
    u = n(287809),
    g = n(562153),
    m = n(183555),
    x = n(735321),
    f = n(451395),
    h = n(823016),
    p = n(788593),
    _ = n(492280),
    A = n(946599),
    I = n(858808),
    v = n(685049),
    j = n(973397),
    T = n(985018),
    b = n(966271),
    E = n(695510);
function y(e) {
    let { index: t, widgetType: n, game: l, children: a } = e,
        { manageFocusOnReorder: r } = (0, h.r)();
    return (0, i.jsx)(f.mG, {
        index: t,
        itemId: l.applicationId,
        listType: n,
        itemType: "GAME_DETAILS_CARD",
        itemPreviewProps: { game: l, widgetType: n },
        "aria-label": T.intl.formatToPlainString(T.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, x.Un)(n, e, t),
        onEnd: () => r(l.applicationId),
        className: E.vF,
        dropBeforeClassName: E.A,
        dropAfterClassName: E.Ze,
        draggingClassName: E.Id,
        children: a,
    });
}
function C(e) {
    let { applicationId: t, userId: n, gameName: l, ...a } = e,
        r = (0, c.A)({
            location: "UserProfileWidgetGameDetailsCard",
            applicationId: t,
            source: d.Ob.UserProfile,
            sourceUserId: n,
            trackEntryPointImpression: !0,
        });
    return null == r
        ? (0, i.jsx)(s.Heading, { ...a, children: l })
        : (0, i.jsx)(s.Heading, { ...a, children: (0, i.jsx)(s.DUT, { onClick: r, className: E.sd, children: l }) });
}
function N(e) {
    let { user: t, guildId: n, channelId: l, id: a } = e;
    return (0, i.jsx)(s.AC4, { id: a, children: T.intl.format(T.t.TM0XDY, { name: g.Ay.getName(n, l, t) }) });
}
function S(e) {
    let { text: t, className: n } = e;
    return (0, i.jsx)(s.Text, { variant: "text-sm/normal", color: "text-muted", className: n, children: t });
}
function w(e) {
    let { text: t, user: n, guildId: l, channelId: a } = e,
        r = (0, o.GV)();
    return null == t || "" === t.trim()
        ? null
        : (0, i.jsxs)("div", {
              role: "group",
              "aria-labelledby": r,
              children: [
                  (0, i.jsx)(s.cyi, { size: "xxs", color: s.LU0.colors.ICON_MUTED, className: E.Ls }),
                  (0, i.jsx)(N, { user: n, guildId: l, channelId: a, id: r }),
                  (0, i.jsx)(S, { text: t }),
              ],
          });
}
function k(e) {
    let { text: t, user: n, guildId: a, channelId: d, widgetType: c, applicationId: u } = e,
        g = (0, o.GV)(),
        f = (0, o.GV)(),
        { trackUserProfileEditAction: h } = (0, m.NJ)(),
        [p, _] = l.useState("idle"),
        [A, I] = l.useState(t ?? ""),
        v = l.useRef(null),
        j = l.useRef(null),
        b = T.intl.string(T.t.xKSfBT),
        y = null != t && "" !== t.trim(),
        C = l.useCallback(() => {
            h({ action: "PRESS_ADD_COMMENTARY", widgetEdited: c }), _("editing");
        }, [c, h]),
        w = l.useCallback(() => {
            let e = A.trim(),
                n = e !== (t ?? "").trim();
            (0, x.oc)(c, u, "" !== e ? e : void 0),
                _("completed"),
                n && h({ action: "COMMENTARY_EDITED", widgetEdited: c, gameId: u });
        }, [c, u, A, t, h]),
        k = l.useCallback((e) => {
            I(e);
        }, []);
    return (
        l.useEffect(() => {
            "editing" === p && I(t ?? "");
        }, [t, p]),
        l.useEffect(() => {
            "completed" === p && v.current?.focus();
        }, [p]),
        "editing" === p
            ? (0, i.jsxs)("div", {
                  className: E.kS,
                  children: [
                      (0, i.jsx)(s.AC4, { tag: "label", htmlFor: g, children: T.intl.string(T.t.JxKXeT) }),
                      (0, i.jsx)(s.fs1, {
                          id: g,
                          value: A,
                          placeholder: b,
                          onChange: k,
                          onBlur: w,
                          rows: 3,
                          autoFocus: "editing" === p,
                          onKeyDown: (e) => {
                              "Enter" !== e.key || e.shiftKey || (e.preventDefault(), w());
                          },
                          maxLength: 200,
                      }),
                  ],
              })
            : (0, i.jsxs)("div", {
                  ref: j,
                  role: "group",
                  "aria-labelledby": f,
                  onClick: C,
                  className: E.Vg,
                  children: [
                      (0, i.jsx)(s.R2l, { size: "xxs", color: s.LU0.colors.ICON_MUTED, className: E.Ls }),
                      (0, i.jsx)(N, { user: n, guildId: a, channelId: d, id: f }),
                      (0, i.jsx)(S, { text: t ?? b, className: r()(E.qC, !y && E.qf) }),
                      (0, i.jsx)(s.DUT, {
                          innerRef: v,
                          "aria-label": T.intl.string(T.t.ppb9MJ),
                          onClick: (e) => {
                              e.stopPropagation(), C();
                          },
                          focusProps: { ringTarget: j },
                      }),
                  ],
              })
    );
}
function R(e) {
    let {
            user: t,
            guildId: n,
            channelId: l,
            game: a,
            widgetType: o,
            disableInteraction: d = !1,
            index: c,
            onRemoveGame: g,
            coverRef: m,
            className: T,
        } = e,
        { applicationId: N, comment: S, tags: R } = a,
        { coverImageUrl: O, gameName: L, isLoading: P } = (0, j.A)(N),
        D = { variant: "heading-sm/medium", color: "text-default" },
        G = u.default.getCurrentUser(),
        M = G?.id === t.id,
        U = 1 === (0, x.cv)(o),
        F = !d && M,
        W = F && (0, x.y9)(o),
        H = F && !U,
        { registerDragHandleRef: B } = (0, h.r)();
    if (P) return (0, i.jsx)(_.E, {});
    let X = () =>
            (0, i.jsx)(p.A, {
                coverRef: m,
                className: null == O || d ? void 0 : b.iL,
                imageSrc: O,
                gameName: L,
                applicationId: N,
                userId: t.id,
                disableInteraction: d,
                hideTooltip: !0,
            }),
        z = () =>
            (0, i.jsxs)("div", {
                className: r()(E.Nr, T),
                children: [
                    H
                        ? (0, i.jsxs)("div", {
                              className: E.An,
                              children: [X(), (0, i.jsx)(f.jV, { buttonRef: B(a.applicationId), className: E.BU })],
                          })
                        : X(),
                    (0, i.jsxs)("div", {
                        className: E.zH,
                        children: [
                            d
                                ? (0, i.jsx)(s.Heading, { ...D, children: L })
                                : (0, i.jsx)(C, { applicationId: N, userId: t.id, gameName: L, ...D }),
                            W
                                ? (0, i.jsx)(k, {
                                      text: S,
                                      user: t,
                                      guildId: n,
                                      channelId: l,
                                      widgetType: o,
                                      applicationId: N,
                                  })
                                : (0, i.jsx)(w, { text: S, user: t, guildId: n, channelId: l }),
                            (0, i.jsx)(A.A, {
                                tags: R,
                                isCurrentUser: M,
                                widgetType: o,
                                applicationId: N,
                                disableInteraction: d,
                                className: E._A,
                            }),
                            !d && (0, i.jsx)(v.o, { className: E.Ez, applicationId: N, guildId: n, channelId: l }),
                        ],
                    }),
                    !d &&
                        M &&
                        (0, i.jsx)(I.A, {
                            game: a,
                            widgetType: o,
                            className: E.vS,
                            onRemove: () => g?.(a.applicationId),
                        }),
                ],
            });
    return H ? (0, i.jsx)(y, { index: c ?? 0, widgetType: o, game: a, children: z() }) : z();
}
