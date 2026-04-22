n.d(t, { A: () => eh });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(485584),
    o = n(598748),
    c = n(205338),
    d = n(179771),
    u = n(87075),
    m = n(311907),
    p = n(834730),
    h = n(939249),
    g = n(339350),
    x = n(821609),
    f = n(331322),
    E = n(534514),
    y = n(477782),
    T = n(687966),
    v = n(404778),
    A = n(155718),
    j = n(793574),
    I = n(688810),
    _ = n(362490),
    R = n(369374),
    b = n(531913),
    N = n(385771),
    D = n(789069),
    C = n(429913),
    P = n(409626),
    w = n(692969),
    L = n(207963),
    G = n(953756),
    O = n(647901),
    S = n(371068),
    X = n(61266),
    W = n(731068),
    k = n(619517),
    M = n(339580),
    F = n(961350),
    U = n(760751),
    H = n(403362),
    z = n(183555),
    V = n(622543),
    Y = n(466853),
    B = n(985018),
    Z = n(40355);
function K(e) {
    let { trackUserProfileAction: t } = (0, z.NJ)(),
        { user: n, widget: a, cta: s } = e,
        o = (0, m.bG)([F.default], () => F.default.getId()) === n.id,
        c = (0, C.h)(a.applicationId),
        u = c?.getIconURL(16),
        g = (0, m.bG)([U.A], () => (null != c ? U.A.getGameByApplication(c) : null)),
        x = (0, w.A)({
            location: "UserProfileApplicationWidget",
            applicationId: g?.id,
            source: P.Ob.UserProfile,
            sourceUserId: n.id,
            trackEntryPointImpression: !0,
        }),
        { fetched: f, hasAlreadyLinked: E, canStartAuthorization: y, startAuthorization: T, token: v } = (0, _.RD)(c),
        { analyticsLocations: A } = (0, I.Ay)(j.A.USER_PROFILE_APPLICATION_WIDGET),
        R = l.useCallback(() => {
            y &&
                (t({
                    action: E
                        ? "PRESS_APPLICATION_WIDGET_LINKED_RECONNECT"
                        : "PRESS_APPLICATION_WIDGET_UNLINKED_CONNECT",
                    applicationId: a.applicationId,
                }),
                T({ analyticsLocations: A }));
        }, [y, E, T, t, a.applicationId, A]),
        b = null == s && f && !E && y,
        N =
            null == s &&
            f &&
            E &&
            y &&
            null != v &&
            !v.scopes.includes(d.F.APPLICATION_IDENTITIES_WRITE) &&
            !v.scopes.includes(d.F.SDK_SOCIAL_LAYER) &&
            !v.scopes.includes(d.F.SDK_SOCIAL_LAYER_PRESENCE),
        D = (0, i.jsxs)(i.Fragment, {
            children: [
                null != u
                    ? (0, i.jsx)("img", { className: Z.Z2, src: u, width: 16, height: 16, alt: "" })
                    : (0, i.jsx)("span", { className: Z.qP }),
                (0, i.jsx)(p.E, {
                    variant: "text-sm/medium",
                    children: c?.name != null ? c.name : (0, i.jsx)("div", { className: Z.jC }),
                }),
            ],
        }),
        L =
            null == g
                ? (0, i.jsx)("div", { className: Z.qd, children: D })
                : (0, i.jsx)(h.D, { className: r()(Z.qd, Z.vk), onClick: x, children: D });
    return {
        isCurrentUser: o,
        game: g,
        openGameProfileModal: x,
        handleConnect: R,
        showConnectCta: b,
        showReconnectCta: N,
        headerTitle: L,
    };
}
function q(e) {
    let {
        isCurrentUser: t,
        isLoading: n,
        hasData: l,
        showConnectCta: a,
        showReconnectCta: s,
        handleConnect: o,
        disableCTA: c,
        cta: d,
        v2: u = !1,
    } = e;
    return !t || c
        ? null
        : (0, i.jsxs)("div", {
              className: r()(Z.qr, u && Z.v2),
              children: [
                  n || l || a || s
                      ? null
                      : (0, i.jsxs)("div", {
                            className: Z.o8,
                            children: [
                                (0, i.jsx)(g.Q, { size: "xxs" }),
                                (0, i.jsx)(p.E, {
                                    variant: "text-sm/medium",
                                    color: "text-subtle",
                                    children: B.intl.string(B.t.z5K4Uv),
                                }),
                            ],
                        }),
                  a
                      ? (0, i.jsx)(J, {
                            heading: B.intl.string(B.t.UDPRLO),
                            content: B.intl.string(B.t["OW/2al"]),
                            buttons: (0, i.jsx)(x.$, { text: B.intl.string(B.t.S0W8Z5), onClick: o }),
                        })
                      : s
                        ? (0, i.jsx)(J, {
                              heading: B.intl.string(B.t["9WarGY"]),
                              content: B.intl.string(B.t.qgxnKe),
                              buttons: (0, i.jsx)(x.$, { text: B.intl.string(B.t.vD60Pv), onClick: o }),
                          })
                        : d,
              ],
          });
}
function J(e) {
    return (0, i.jsxs)(f.B, {
        direction: "horizontal",
        gap: 24,
        padding: 12,
        fullWidth: !1,
        className: Z.lO,
        children: [
            (0, i.jsxs)(f.B, {
                gap: 4,
                children: [
                    e.showSuggestedForYou &&
                        (0, i.jsx)(p.E, {
                            variant: "text-xs/medium",
                            color: "text-default",
                            children: B.intl.string(B.t.zMUr6Z),
                        }),
                    (0, i.jsx)(E.D, { variant: "heading-sm/medium", color: "text-default", children: e.heading }),
                    (0, i.jsx)(p.E, { variant: "text-xs/normal", color: "text-subtle", children: e.content }),
                ],
            }),
            (0, i.jsx)(f.B, {
                direction: "horizontal",
                gap: 12,
                align: "center",
                justify: "end",
                fullWidth: !1,
                children: e.buttons,
            }),
        ],
    });
}
let Q = /{{(.*?)}}/g,
    $ = {
        [c.A.MARVEL_RIVALS]: [
            {
                type: "HERO",
                title: "{{username}}",
                image: "{{featured_played_character_image}}",
                body: [
                    {
                        type: "TEXT_WITH_IMAGE",
                        content: "{{season}}: {{rank_name}}",
                        image: "{{rank_image}}",
                        imagePosition: "right",
                    },
                    { type: "TEXT", content: "Top Hero: {{featured_played_character}}" },
                ],
            },
            { type: "SEPARATOR", divider: !1 },
            { type: "SEPARATOR", divider: !1 },
            {
                type: "GRID",
                children: [
                    {
                        type: "FIELD",
                        value: {
                            type: "TEXT_WITH_IMAGE",
                            content: "**{{highest_rank}}**",
                            image: "{{highest_rank_image}}",
                            imagePosition: "right",
                        },
                        name: { type: "TEXT", content: "-# Highest Rank" },
                    },
                    {
                        type: "FIELD",
                        value: { type: "TEXT", content: "**{{playtime_hours}} Hours**" },
                        name: { type: "TEXT", content: "-# Time Played" },
                    },
                    {
                        type: "FIELD",
                        value: { type: "TEXT", content: "**{{total_games}}**" },
                        name: { type: "TEXT", content: "-# Matches Played" },
                    },
                ],
            },
            { type: "SEPARATOR", divider: !1 },
            { type: "SEPARATOR", divider: !1 },
            {
                type: "GRID",
                children: [
                    {
                        type: "FIELD",
                        value: { type: "TEXT", content: "**{{total_wins}}**" },
                        name: { type: "TEXT", content: "-# Wins" },
                    },
                    {
                        type: "FIELD",
                        value: { type: "TEXT", content: "**{{total_kills}}**" },
                        name: { type: "TEXT", content: "-# KOs" },
                    },
                    {
                        type: "FIELD",
                        value: { type: "TEXT", content: "**{{total_assists}}**" },
                        name: { type: "TEXT", content: "-# Assists" },
                    },
                ],
            },
        ],
        [c.A.WUTHERING_WAVES]: [
            {
                type: "HERO",
                title: "{{username}}",
                image: "{{featured_played_character_image}}",
                body: [{ type: "TEXT", content: "Server: {{server_name}}" }],
            },
            { type: "SEPARATOR", divider: !1 },
            { type: "SEPARATOR", divider: !1 },
            {
                type: "GRID",
                children: [
                    {
                        type: "FIELD",
                        value: { type: "TEXT", content: "**{{union_level}}**" },
                        name: { type: "TEXT", content: "-# Union Level" },
                    },
                    {
                        type: "FIELD",
                        value: { type: "TEXT", content: "**{{total_resonators}}**" },
                        name: { type: "TEXT", content: "-# Resonators" },
                    },
                    {
                        type: "FIELD",
                        value: { type: "TEXT", content: "**{{total_achievements}}**" },
                        name: { type: "TEXT", content: "-# Achievements" },
                    },
                ],
            },
            { type: "SEPARATOR", divider: !1 },
            { type: "SEPARATOR", divider: !1 },
            {
                type: "GRID",
                children: [
                    {
                        type: "FIELD",
                        value: { type: "TEXT", content: "**{{total_echoes}}**" },
                        name: { type: "TEXT", content: "-# Echoes" },
                    },
                    {
                        type: "FIELD",
                        value: { type: "TEXT", content: "**{{login_days}}**" },
                        name: { type: "TEXT", content: "-# Login Days" },
                    },
                    {
                        type: "FIELD",
                        value: { type: "TEXT", content: "**{{data_bank_level}}**" },
                        name: { type: "TEXT", content: "-# Data Bank Level" },
                    },
                ],
            },
        ],
    };
function ee(e) {
    let { component: t } = e;
    if (Array.isArray(t)) return en(t);
    switch (t.type) {
        case "HERO":
            let { body: n, ...l } = t;
            return (0, i.jsx)(ei, { ...l, body: en(n) });
        case "GRID":
            return (0, i.jsx)(el, { children: en(t.children) });
        case "FIELD":
            return (0, i.jsx)(ea, { value: et(t.value), name: et(t.name) });
        case "TEXT":
            return (0, i.jsx)(er, { ...t });
        case "TEXT_WITH_IMAGE":
            return (0, i.jsx)(es, { ...t });
        case "SEPARATOR":
            return (0, i.jsx)(eo, { ...t });
    }
}
function et(e, t) {
    return (0, i.jsx)(ee, { component: e }, t);
}
function en(e) {
    return e.map((e, t) => et(e, t));
}
function ei(e) {
    let { title: t, body: n, image: l, imagePlaceholder: a } = e;
    return (0, i.jsxs)("div", {
        className: Z.mY,
        children: [
            (0, i.jsxs)("div", {
                className: Z.TL,
                children: [
                    (0, i.jsx)(p.E, {
                        variant: "text-lg/medium",
                        className: Z.ZY,
                        children: null != t ? t : (0, i.jsx)("div", { className: Z.jC }),
                    }),
                    (0, i.jsx)(O.x, { color: "muted", children: n }),
                ],
            }),
            (0, D.c)(l)
                ? (0, i.jsx)("div", {
                      className: Z.Xr,
                      children: (0, i.jsx)(k.Ay, {
                          src: l.proxyUrl,
                          alt: "",
                          width: l.width,
                          height: l.height,
                          responsive: !0,
                          className: Z.c8,
                      }),
                  })
                : null != a
                  ? (0, i.jsx)("div", {
                        className: Z.Xr,
                        children: (0, i.jsx)("img", { src: a, alt: "", className: Z.c8 }),
                    })
                  : (0, i.jsx)("div", { className: Z.Hi }),
        ],
    });
}
function el(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", { className: Z.Vg, children: t });
}
function ea(e) {
    let { name: t, value: n } = e;
    return (0, i.jsxs)("div", { children: [n, t] });
}
function er(e) {
    let { content: t } = e,
        n = l.useId(),
        a = (0, O.X)();
    return null != t
        ? (0, i.jsx)(X.A, { type: A.I5.TEXT_DISPLAY, id: n, content: t, className: Z.Qq })
        : (0, i.jsx)("div", { className: r()(Z.jC, a.className) });
}
function es(e) {
    let { content: t, image: n, imagePosition: l } = e,
        a = (0, O.X)(),
        s = (0, D.c)(n)
            ? (0, i.jsx)("div", {
                  className: r()(Z.Sl, a.className),
                  "data-position": l,
                  children: (0, i.jsx)(k.Ay, {
                      src: n.proxyUrl,
                      alt: "",
                      width: n.width,
                      height: n.height,
                      responsive: !0,
                  }),
              })
            : null == t
              ? (0, i.jsx)("div", { className: r()(Z.bc, a.className) })
              : null;
    return (0, i.jsxs)("div", {
        className: Z.rQ,
        children: [
            null != s && "left" === l ? (0, i.jsxs)(i.Fragment, { children: [s, " "] }) : null,
            (0, i.jsx)(er, { content: t }),
            null != s && "right" === l ? (0, i.jsxs)(i.Fragment, { children: [" ", s] }) : null,
        ],
    });
}
function eo(e) {
    let { size: t = "small", divider: n = !1 } = e,
        a = l.useId();
    return (0, i.jsx)(S.A, {
        type: A.I5.SEPARATOR,
        id: a,
        divider: n,
        spacing: "large" === t ? A.C8.LARGE : A.C8.SMALL,
    });
}
function ec(e, t) {
    if (null == e) return null;
    let n = e.split(Q);
    if (1 === n.length) return n[0];
    if ("skeleton" === t.mode) return null;
    let i = "";
    for (let e = 0; e < n.length; e++) {
        let l = n[e];
        if (e % 2 == 0) {
            i += l;
            continue;
        }
        let a = t.variables[l];
        null == a
            ? (i += "––")
            : "unfurled_media" === a.type
              ? (i += a.media.url)
              : "number" === a.type
                ? (i += t.numberFormat.format(a.value))
                : "string" === a.type && (i += a.value);
    }
    return i;
}
function ed(e, t) {
    if (null == e || "skeleton" === t.mode) return null;
    let n = e.match(Q)?.[0]?.slice(2, -2);
    if (null == n) return null;
    let i = t.variables[n];
    return null == i || "unfurled_media" !== i.type ? null : i.media;
}
function eu(e) {
    let { children: t, widget: n } = e;
    return (0, i.jsx)(G.O7.Root, {
        containerInnerWidth: 396,
        children: (0, i.jsx)(L.f5, {
            applicationWidget: n,
            children: (0, i.jsx)(O.x, {
                size: "reduced",
                weight: "reduced",
                children: (0, i.jsx)("div", { className: Z.kL, children: t }),
            }),
        }),
    });
}
function em(e) {
    var t, n;
    let a,
        s,
        o,
        c,
        d,
        { user: p, widget: h, disableCTA: g, cta: x, subtle: f = !1, embedded: E = !1 } = e,
        v = K(e),
        {
            isLoading: A,
            hasData: j,
            components: I,
        } = ((t = p.id),
        (n = h.applicationId),
        (a = (0, N.A)()),
        (s = (0, m.bG)([M.A], () => M.A.getUserIdentityByApplication(t, n))),
        (o = (0, m.bG)([V.A], () => V.A.getApplicationWidgetConfig(n))),
        (c = (0, m.bG)([M.A, V.A], () => null == M.A.getUserIdentities(t) || null == V.A.applicationWidgetConfigs)),
        (d = l.useMemo(() => {
            var e, t;
            if (null == o) return null;
            let n = $[o.widgetTemplateId];
            if (null == n) return null;
            let i =
                ((e = s ?? null),
                (t = o ?? null),
                null == e
                    ? { mode: "skeleton", config: t, numberFormat: a }
                    : {
                          mode: "from_data",
                          variables: Object.fromEntries([
                              ...(e.profile?.data?.dynamic?.map((e) =>
                                  e.type === u.f.STRING
                                      ? [e.name, { type: "string", value: e.value }]
                                      : e.type === u.f.NUMBER
                                        ? [e.name, { type: "number", value: e.value }]
                                        : e.type === u.f.MEDIA
                                          ? [e.name, { type: "unfurled_media", media: (0, W.Uv)(e.value) }]
                                          : (0, H.xb)(e),
                              ) ?? []),
                              ...Object.entries({ username: e.profile?.username, ...e.profile?.data?.primary })
                                  .filter(H.QE)
                                  .map((e) => {
                                      let [t, n] = e;
                                      if ("object" == typeof n) {
                                          if ("url" in n && "proxy_url" in n && "loading_state" in n)
                                              return [t, { type: "unfurled_media", media: (0, W.Uv)(n) }];
                                      } else if ("string" == typeof n) return [t, { type: "string", value: n }];
                                      else if ("number" == typeof n) return [t, { type: "number", value: n }];
                                      return null;
                                  })
                                  .filter(H.Vq),
                          ]),
                          config: t,
                          numberFormat: a,
                      });
            return n.map(function e(t) {
                switch (t.type) {
                    case "HERO":
                        return {
                            type: "HERO",
                            body: t.body.map(e),
                            title: ec(t.title, i),
                            image: ed(t.image, i),
                            imagePlaceholder: i.config?.heroPlaceholderImage,
                        };
                    case "GRID":
                        return { type: "GRID", children: t.children.map(e) };
                    case "FIELD":
                        return { type: "FIELD", name: e(t.name), value: e(t.value) };
                    case "TEXT":
                        return { type: "TEXT", content: ec(t.content, i) };
                    case "TEXT_WITH_IMAGE":
                        return {
                            type: "TEXT_WITH_IMAGE",
                            content: ec(t.content, i),
                            image: ed(t.image, i),
                            imagePosition: t.imagePosition,
                        };
                    case "SEPARATOR":
                        return t;
                }
            });
        }, [o, s, a])),
        { isLoading: c, hasData: null != s, components: d });
    return null == I
        ? null
        : (0, i.jsxs)(Y.A, {
              ...e,
              userId: p.id,
              widget: h,
              className: r()(Z.Y5, { [Z.aK]: f, [Z.F9]: E }),
              headerTitle: v.headerTitle,
              headerClassName: Z.wx,
              additionalManageWidgetMenuItems:
                  null != v.game
                      ? (0, i.jsx)(y.Dr, {
                            id: "view-game-profile",
                            label: "View Game Profile",
                            icon: T._,
                            action: v.openGameProfileModal,
                        })
                      : null,
              children: [
                  (0, i.jsx)(eu, { widget: h, children: (0, i.jsx)(ee, { component: I }) }),
                  (0, i.jsx)(q, {
                      isCurrentUser: v.isCurrentUser,
                      isLoading: A,
                      hasData: j,
                      showConnectCta: v.showConnectCta,
                      showReconnectCta: v.showReconnectCta,
                      handleConnect: v.handleConnect,
                      disableCTA: g,
                      cta: x,
                  }),
              ],
          });
}
function ep(e) {
    let { user: t, widget: n, disableCTA: l, cta: a, subtle: c = !1, embedded: d = !1 } = e,
        u = K(e),
        m = (0, b.A)(t.id, n.applicationId),
        p = m.surfaceConfigs[o.m.WIDGET_TOP],
        h = m.surfaceConfigs[o.m.WIDGET_BOTTOM];
    return null == p || null == h
        ? null
        : (0, i.jsxs)(Y.A, {
              ...e,
              userId: t.id,
              widget: n,
              className: r()(Z.Y5, Z.v2, { [Z.aK]: c, [Z.F9]: d }),
              headerClassName: Z.vX,
              additionalManageWidgetMenuItems:
                  null != u.game
                      ? (0, i.jsx)(y.Dr, {
                            id: "view-game-profile",
                            label: "View Game Profile",
                            icon: T._,
                            action: u.openGameProfileModal,
                        })
                      : null,
              children: [
                  (0, i.jsx)(s.kH, { ...m, surface: o.m.WIDGET_TOP, surfaceConfig: p, header: u.headerTitle }),
                  (0, i.jsx)(v.c, {}),
                  (0, i.jsx)(s.kH, { ...m, surface: o.m.WIDGET_BOTTOM, surfaceConfig: h }),
                  (0, i.jsx)(q, {
                      isCurrentUser: u.isCurrentUser,
                      isLoading: m.isLoading,
                      hasData: m.hasIdentity,
                      showConnectCta: u.showConnectCta,
                      showReconnectCta: u.showReconnectCta,
                      handleConnect: u.handleConnect,
                      disableCTA: l,
                      cta: a,
                      v2: !0,
                  }),
              ],
          });
}
let eh = Object.assign(
    function (e) {
        let { enabled: t } = R.A.useConfig({ location: "UserProfileApplicationWidget" });
        return t ? (0, i.jsx)(ep, { ...e }) : (0, i.jsx)(em, { ...e });
    },
    { Cta: J },
);
