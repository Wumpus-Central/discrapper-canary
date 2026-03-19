n.d(t, { A: () => L });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a);
n(926675);
var r = n(397927),
    o = n(915089),
    d = n(152621),
    c = n(409626),
    u = n(692969),
    g = n(287809),
    m = n(562153),
    x = n(183555),
    p = n(735321),
    f = n(451395),
    h = n(823016),
    _ = n(788593),
    A = n(492280),
    I = n(946599),
    j = n(858808),
    v = n(685049),
    E = n(985018),
    T = n(966271),
    b = n(695510);
function N(e) {
    let { index: t, widgetType: n, game: l, children: a } = e,
        { manageFocusOnReorder: s } = (0, h.r)();
    return (0, i.jsx)(f.mG, {
        index: t,
        itemId: l.applicationId,
        listType: n,
        itemType: "GAME_DETAILS_CARD",
        itemPreviewProps: { game: l, widgetType: n },
        "aria-label": E.intl.formatToPlainString(E.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, p.Un)(n, e, t),
        onEnd: () => s(l.applicationId),
        className: b.vF,
        dropBeforeClassName: b.A,
        dropAfterClassName: b.Ze,
        draggingClassName: b.Id,
        children: a,
    });
}
function y(e) {
    let { applicationId: t, userId: n, gameName: l, ...a } = e,
        s = (0, u.A)({
            location: "UserProfileWidgetGameDetailsCard",
            applicationId: t,
            source: c.Ob.UserProfile,
            sourceUserId: n,
            trackEntryPointImpression: !0,
        });
    return null == s
        ? (0, i.jsx)(r.Heading, { ...a, children: l })
        : (0, i.jsx)(r.Heading, { ...a, children: (0, i.jsx)(r.DUT, { onClick: s, className: b.sd, children: l }) });
}
function S(e) {
    let { user: t, guildId: n, channelId: l, id: a } = e;
    return (0, i.jsx)(r.AC4, { id: a, children: E.intl.format(E.t.TM0XDY, { name: m.Ay.getName(n, l, t) }) });
}
function C(e) {
    let { text: t, className: n } = e;
    return (0, i.jsx)(r.Text, { variant: "text-sm/normal", color: "text-muted", className: n, children: t });
}
function R(e) {
    let { text: t, user: n, guildId: l, channelId: a } = e,
        s = (0, o.GV)();
    return null == t || "" === t.trim()
        ? null
        : (0, i.jsxs)("div", {
              role: "group",
              "aria-labelledby": s,
              children: [
                  (0, i.jsx)(r.cyi, { size: "xxs", color: r.LU0.colors.ICON_MUTED, className: b.Ls }),
                  (0, i.jsx)(S, { user: n, guildId: l, channelId: a, id: s }),
                  (0, i.jsx)(C, { text: t }),
              ],
          });
}
function k(e) {
    let { text: t, user: n, guildId: a, channelId: d, widgetType: c, applicationId: u } = e,
        g = (0, o.GV)(),
        m = (0, o.GV)(),
        { trackUserProfileEditAction: f } = (0, x.NJ)(),
        [h, _] = l.useState("idle"),
        [A, I] = l.useState(t ?? ""),
        j = l.useRef(null),
        v = l.useRef(null),
        T = E.intl.string(E.t.xKSfBT),
        N = null != t && "" !== t.trim(),
        y = l.useCallback(() => {
            f({ action: "PRESS_ADD_COMMENTARY", widgetEdited: c }), _("editing");
        }, [c, f]),
        R = l.useCallback(() => {
            let e = A.trim(),
                n = e !== (t ?? "").trim();
            (0, p.oc)(c, u, "" !== e ? e : void 0),
                _("completed"),
                n && f({ action: "COMMENTARY_EDITED", widgetEdited: c, gameId: u });
        }, [c, u, A, t, f]),
        k = l.useCallback((e) => {
            I(e);
        }, []);
    return (
        l.useEffect(() => {
            "editing" === h && I(t ?? "");
        }, [t, h]),
        l.useEffect(() => {
            "completed" === h && j.current?.focus();
        }, [h]),
        "editing" === h
            ? (0, i.jsxs)("div", {
                  className: b.kS,
                  children: [
                      (0, i.jsx)(r.AC4, { tag: "label", htmlFor: g, children: E.intl.string(E.t.JxKXeT) }),
                      (0, i.jsx)(r.fs1, {
                          id: g,
                          value: A,
                          placeholder: T,
                          onChange: k,
                          onBlur: R,
                          rows: 3,
                          autoFocus: "editing" === h,
                          onKeyDown: (e) => {
                              "Enter" !== e.key || e.shiftKey || (e.preventDefault(), R());
                          },
                          maxLength: 200,
                      }),
                  ],
              })
            : (0, i.jsxs)("div", {
                  ref: v,
                  role: "group",
                  "aria-labelledby": m,
                  onClick: y,
                  className: b.Vg,
                  children: [
                      (0, i.jsx)(r.R2l, { size: "xxs", color: r.LU0.colors.ICON_MUTED, className: b.Ls }),
                      (0, i.jsx)(S, { user: n, guildId: a, channelId: d, id: m }),
                      (0, i.jsx)(C, { text: t ?? T, className: s()(b.qC, !N && b.qf) }),
                      (0, i.jsx)(r.DUT, {
                          innerRef: j,
                          "aria-label": E.intl.string(E.t.ppb9MJ),
                          onClick: (e) => {
                              e.stopPropagation(), y();
                          },
                          focusProps: { ringTarget: v },
                      }),
                  ],
              })
    );
}
function L(e) {
    let {
            user: t,
            guildId: n,
            channelId: l,
            game: a,
            widgetType: o,
            disableInteraction: c = !1,
            index: u,
            onRemoveGame: m,
            coverRef: x,
            className: E,
        } = e,
        { applicationId: S, comment: C, tags: L } = a,
        { coverImageUrl: w, gameName: O, isLoading: P } = (0, d.A)(S),
        D = { variant: "heading-sm/medium", color: "text-default" },
        G = g.default.getCurrentUser(),
        M = G?.id === t.id,
        U = 1 === (0, p.cv)(o),
        F = !c && M,
        W = F && (0, p.y9)(o),
        H = F && !U,
        { registerDragHandleRef: B } = (0, h.r)();
    if (P) return (0, i.jsx)(A.E, {});
    let X = () =>
            (0, i.jsx)(_.A, {
                coverRef: x,
                className: null == w || c ? void 0 : T.iL,
                imageSrc: w,
                gameName: O,
                applicationId: S,
                userId: t.id,
                disableInteraction: c,
                hideTooltip: !0,
            }),
        z = () =>
            (0, i.jsxs)("div", {
                className: s()(b.Nr, E),
                children: [
                    H
                        ? (0, i.jsxs)("div", {
                              className: b.An,
                              children: [X(), (0, i.jsx)(f.jV, { buttonRef: B(a.applicationId), className: b.BU })],
                          })
                        : X(),
                    (0, i.jsxs)("div", {
                        className: b.zH,
                        children: [
                            c
                                ? (0, i.jsx)(r.Heading, { ...D, children: O })
                                : (0, i.jsx)(y, { applicationId: S, userId: t.id, gameName: O, ...D }),
                            W
                                ? (0, i.jsx)(k, {
                                      text: C,
                                      user: t,
                                      guildId: n,
                                      channelId: l,
                                      widgetType: o,
                                      applicationId: S,
                                  })
                                : (0, i.jsx)(R, { text: C, user: t, guildId: n, channelId: l }),
                            (0, i.jsx)(I.A, {
                                tags: L,
                                isCurrentUser: M,
                                widgetType: o,
                                applicationId: S,
                                disableInteraction: c,
                                className: b._A,
                            }),
                            !c && (0, i.jsx)(v.o, { className: b.Ez, applicationId: S, guildId: n, channelId: l }),
                        ],
                    }),
                    !c &&
                        M &&
                        (0, i.jsx)(j.A, {
                            game: a,
                            widgetType: o,
                            className: b.vS,
                            onRemove: () => m?.(a.applicationId),
                        }),
                ],
            });
    return H ? (0, i.jsx)(N, { index: u ?? 0, widgetType: o, game: a, children: z() }) : z();
}
