n.d(t, { A: () => L });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a);
n(926675);
var r = n(397927),
    o = n(915089),
    c = n(152621),
    d = n(409626),
    u = n(692969),
    g = n(287809),
    m = n(562153),
    x = n(183555),
    f = n(735321),
    p = n(451395),
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
    return (0, i.jsx)(p.mG, {
        index: t,
        itemId: l.applicationId,
        listType: n,
        itemType: "GAME_DETAILS_CARD",
        itemPreviewProps: { game: l, widgetType: n },
        "aria-label": E.intl.formatToPlainString(E.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, f.Un)(n, e, t),
        onEnd: () => s(l.applicationId),
        className: b.vF,
        dropBeforeClassName: b.A,
        dropAfterClassName: b.Ze,
        draggingClassName: b.Id,
        children: a,
    });
}
function S(e) {
    let { applicationId: t, userId: n, gameName: l, ...a } = e,
        s = (0, u.A)({
            location: "UserProfileWidgetGameDetailsCard",
            applicationId: t,
            source: d.Ob.UserProfile,
            sourceUserId: n,
            trackEntryPointImpression: !0,
        });
    return null == s
        ? (0, i.jsx)(r.Heading, { ...a, children: l })
        : (0, i.jsx)(r.Heading, { ...a, children: (0, i.jsx)(r.DUT, { onClick: s, className: b.sd, children: l }) });
}
function y(e) {
    let { user: t, guildId: n, channelId: l, id: a } = e;
    return (0, i.jsx)(r.AC4, { id: a, children: E.intl.format(E.t.TM0XDY, { name: m.Ay.getName(n, l, t) }) });
}
function C(e) {
    let { text: t, className: n } = e;
    return (0, i.jsx)(r.Text, { variant: "text-sm/normal", color: "text-muted", className: n, children: t });
}
function k(e) {
    let { text: t, user: n, guildId: l, channelId: a } = e,
        s = (0, o.GV)();
    return null == t || "" === t.trim()
        ? null
        : (0, i.jsxs)("div", {
              role: "group",
              "aria-labelledby": s,
              children: [
                  (0, i.jsx)(r.cyi, { size: "xxs", color: r.LU0.colors.ICON_MUTED, className: b.Ls }),
                  (0, i.jsx)(y, { user: n, guildId: l, channelId: a, id: s }),
                  (0, i.jsx)(C, { text: t }),
              ],
          });
}
function R(e) {
    let { text: t, user: n, guildId: a, channelId: c, widgetType: d, applicationId: u } = e,
        g = (0, o.GV)(),
        m = (0, o.GV)(),
        { trackUserProfileEditAction: p } = (0, x.NJ)(),
        [h, _] = l.useState("idle"),
        [A, I] = l.useState(t ?? ""),
        j = l.useRef(null),
        v = l.useRef(null),
        T = E.intl.string(E.t.xKSfBT),
        N = null != t && "" !== t.trim(),
        S = l.useCallback(() => {
            p({ action: "PRESS_ADD_COMMENTARY", widgetEdited: d }), _("editing");
        }, [d, p]),
        k = l.useCallback(() => {
            let e = A.trim(),
                n = e !== (t ?? "").trim();
            (0, f.oc)(d, u, "" !== e ? e : void 0),
                _("completed"),
                n && p({ action: "COMMENTARY_EDITED", widgetEdited: d, gameId: u });
        }, [d, u, A, t, p]),
        R = l.useCallback((e) => {
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
                          onChange: R,
                          onBlur: k,
                          rows: 3,
                          autoFocus: "editing" === h,
                          onKeyDown: (e) => {
                              "Enter" !== e.key || e.shiftKey || (e.preventDefault(), k());
                          },
                          maxLength: 200,
                      }),
                  ],
              })
            : (0, i.jsxs)("div", {
                  ref: v,
                  role: "group",
                  "aria-labelledby": m,
                  onClick: S,
                  className: b.Vg,
                  children: [
                      (0, i.jsx)(r.R2l, { size: "xxs", color: r.LU0.colors.ICON_MUTED, className: b.Ls }),
                      (0, i.jsx)(y, { user: n, guildId: a, channelId: c, id: m }),
                      (0, i.jsx)(C, { text: t ?? T, className: s()(b.qC, !N && b.qf) }),
                      (0, i.jsx)(r.DUT, {
                          innerRef: j,
                          "aria-label": E.intl.string(E.t.ppb9MJ),
                          onClick: (e) => {
                              e.stopPropagation(), S();
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
            disableInteraction: d = !1,
            index: u,
            onRemoveGame: m,
            coverRef: x,
            className: E,
        } = e,
        { applicationId: y, comment: C, tags: L } = a,
        { coverImageUrl: O, gameName: w, isLoading: D } = (0, c.A)(y),
        P = { variant: "heading-sm/medium", color: "text-default" },
        G = g.default.getCurrentUser(),
        M = G?.id === t.id,
        U = 1 === (0, f.cv)(o),
        F = !d && M,
        W = F && (0, f.y9)(o),
        H = F && !U,
        { registerDragHandleRef: B } = (0, h.r)();
    if (D) return (0, i.jsx)(A.E, {});
    let X = () =>
            (0, i.jsx)(_.A, {
                coverRef: x,
                className: null == O || d ? void 0 : T.iL,
                imageSrc: O,
                gameName: w,
                applicationId: y,
                userId: t.id,
                disableInteraction: d,
                hideTooltip: !0,
            }),
        z = () =>
            (0, i.jsxs)("div", {
                className: s()(b.Nr, E),
                children: [
                    H
                        ? (0, i.jsxs)("div", {
                              className: b.An,
                              children: [X(), (0, i.jsx)(p.jV, { buttonRef: B(a.applicationId), className: b.BU })],
                          })
                        : X(),
                    (0, i.jsxs)("div", {
                        className: b.zH,
                        children: [
                            d
                                ? (0, i.jsx)(r.Heading, { ...P, children: w })
                                : (0, i.jsx)(S, { applicationId: y, userId: t.id, gameName: w, ...P }),
                            W
                                ? (0, i.jsx)(R, {
                                      text: C,
                                      user: t,
                                      guildId: n,
                                      channelId: l,
                                      widgetType: o,
                                      applicationId: y,
                                  })
                                : (0, i.jsx)(k, { text: C, user: t, guildId: n, channelId: l }),
                            (0, i.jsx)(I.A, {
                                tags: L,
                                isCurrentUser: M,
                                widgetType: o,
                                applicationId: y,
                                disableInteraction: d,
                                className: b._A,
                            }),
                            !d && (0, i.jsx)(v.o, { className: b.Ez, applicationId: y, guildId: n, channelId: l }),
                        ],
                    }),
                    !d &&
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
