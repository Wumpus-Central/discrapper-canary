n.d(t, { A: () => es });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(485584),
    o = n(598748),
    c = n(205338),
    d = n(179771),
    u = n(87075),
    m = n(311907),
    g = n(397927),
    p = n(155718),
    x = n(793574),
    f = n(688810),
    _ = n(362490),
    h = n(369374),
    A = n(531913),
    I = n(385771),
    v = n(789069),
    j = n(429913),
    E = n(409626),
    T = n(692969),
    N = n(207963),
    C = n(953756),
    b = n(647901),
    S = n(371068),
    y = n(61266),
    R = n(731068),
    O = n(619517),
    w = n(339580),
    k = n(961350),
    L = n(760751),
    D = n(403362),
    P = n(183555),
    G = n(622543),
    U = n(466853),
    F = n(985018),
    M = n(484046);
function W(e) {
    let { trackUserProfileAction: t } = (0, P.NJ)(),
        { user: n, widget: l, cta: r } = e,
        o = (0, m.bG)([k.default], () => k.default.getId()) === n.id,
        c = (0, j.h)(l.applicationId),
        u = c?.getIconURL(16),
        p = (0, m.bG)([L.A], () => (null != c ? L.A.getGameByApplication(c) : null)),
        h = (0, T.A)({
            location: "UserProfileApplicationWidget",
            applicationId: p?.id,
            source: E.Ob.UserProfile,
            sourceUserId: n.id,
            trackEntryPointImpression: !0,
        }),
        { fetched: A, hasAlreadyLinked: I, canStartAuthorization: v, startAuthorization: N, token: C } = (0, _.RD)(c),
        { analyticsLocations: b } = (0, f.Ay)(x.A.USER_PROFILE_APPLICATION_WIDGET),
        S = a.useCallback(() => {
            v &&
                (t({
                    action: I
                        ? "PRESS_APPLICATION_WIDGET_LINKED_RECONNECT"
                        : "PRESS_APPLICATION_WIDGET_UNLINKED_CONNECT",
                    applicationId: l.applicationId,
                }),
                N({ analyticsLocations: b }));
        }, [v, I, N, t, l.applicationId, b]),
        y = null == r && A && !I && v,
        R =
            null == r &&
            A &&
            I &&
            v &&
            null != C &&
            !C.scopes.includes(d.F.APPLICATION_IDENTITIES_WRITE) &&
            !C.scopes.includes(d.F.SDK_SOCIAL_LAYER) &&
            !C.scopes.includes(d.F.SDK_SOCIAL_LAYER_PRESENCE),
        O = (0, i.jsxs)(i.Fragment, {
            children: [
                null != u
                    ? (0, i.jsx)("img", { className: M.Z2, src: u, width: 16, height: 16, alt: "" })
                    : (0, i.jsx)("span", { className: M.qP }),
                (0, i.jsx)(g.Text, {
                    variant: "text-sm/medium",
                    children: c?.name != null ? c.name : (0, i.jsx)("div", { className: M.jC }),
                }),
            ],
        }),
        w =
            null == p
                ? (0, i.jsx)("div", { className: M.qd, children: O })
                : (0, i.jsx)(g.DUT, { className: s()(M.qd, M.vk), onClick: h, children: O });
    return {
        isCurrentUser: o,
        game: p,
        openGameProfileModal: h,
        handleConnect: S,
        showConnectCta: y,
        showReconnectCta: R,
        headerTitle: w,
    };
}
function H(e) {
    let {
        isCurrentUser: t,
        isLoading: n,
        hasData: a,
        showConnectCta: l,
        showReconnectCta: r,
        handleConnect: o,
        cta: c,
        v2: d = !1,
    } = e;
    return t
        ? (0, i.jsxs)("div", {
              className: s()(M.qr, d && M.v2),
              children: [
                  n || a || l || r
                      ? null
                      : (0, i.jsxs)("div", {
                            className: M.o8,
                            children: [
                                (0, i.jsx)(g.Qfk, { size: "xxs" }),
                                (0, i.jsx)(g.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-subtle",
                                    children: F.intl.string(F.t.z5K4Uv),
                                }),
                            ],
                        }),
                  l
                      ? (0, i.jsx)(B, {
                            heading: F.intl.string(F.t.UDPRLO),
                            content: F.intl.string(F.t["OW/2al"]),
                            buttons: (0, i.jsx)(g.Button, { text: F.intl.string(F.t.S0W8Z5), onClick: o }),
                        })
                      : r
                        ? (0, i.jsx)(B, {
                              heading: F.intl.string(F.t["9WarGY"]),
                              content: F.intl.string(F.t.qgxnKe),
                              buttons: (0, i.jsx)(g.Button, { text: F.intl.string(F.t.vD60Pv), onClick: o }),
                          })
                        : c,
              ],
          })
        : null;
}
function B(e) {
    return (0, i.jsxs)(g.BJc, {
        direction: "horizontal",
        gap: 24,
        padding: 12,
        fullWidth: !1,
        className: M.lO,
        children: [
            (0, i.jsxs)(g.BJc, {
                gap: 4,
                children: [
                    e.showSuggestedForYou &&
                        (0, i.jsx)(g.Text, {
                            variant: "text-xs/medium",
                            color: "text-default",
                            children: F.intl.string(F.t.zMUr6Z),
                        }),
                    (0, i.jsx)(g.Heading, { variant: "heading-sm/medium", color: "text-default", children: e.heading }),
                    (0, i.jsx)(g.Text, { variant: "text-xs/normal", color: "text-subtle", children: e.content }),
                ],
            }),
            (0, i.jsx)(g.BJc, {
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
let X = /{{(.*?)}}/g,
    V = {
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
function z(e) {
    let { component: t } = e;
    if (Array.isArray(t)) return K(t);
    switch (t.type) {
        case "HERO":
            let { body: n, ...a } = t;
            return (0, i.jsx)(q, { ...a, body: K(n) });
        case "GRID":
            return (0, i.jsx)(Q, { children: K(t.children) });
        case "FIELD":
            return (0, i.jsx)(J, { value: Y(t.value), name: Y(t.name) });
        case "TEXT":
            return (0, i.jsx)(Z, { ...t });
        case "TEXT_WITH_IMAGE":
            return (0, i.jsx)($, { ...t });
        case "SEPARATOR":
            return (0, i.jsx)(ee, { ...t });
    }
}
function Y(e, t) {
    return (0, i.jsx)(z, { component: e }, t);
}
function K(e) {
    return e.map((e, t) => Y(e, t));
}
function q(e) {
    let { title: t, body: n, image: a, imagePlaceholder: l } = e;
    return (0, i.jsxs)("div", {
        className: M.mY,
        children: [
            (0, i.jsxs)("div", {
                className: M.TL,
                children: [
                    (0, i.jsx)(g.Text, {
                        variant: "text-lg/medium",
                        className: M.ZY,
                        children: null != t ? t : (0, i.jsx)("div", { className: M.jC }),
                    }),
                    (0, i.jsx)(b.x, { color: "muted", children: n }),
                ],
            }),
            (0, v.c)(a)
                ? (0, i.jsx)("div", {
                      className: M.Xr,
                      children: (0, i.jsx)(O.Ay, {
                          src: a.proxyUrl,
                          alt: "",
                          width: a.width,
                          height: a.height,
                          responsive: !0,
                          className: M.c8,
                      }),
                  })
                : null != l
                  ? (0, i.jsx)("div", {
                        className: M.Xr,
                        children: (0, i.jsx)("img", { src: l, alt: "", className: M.c8 }),
                    })
                  : (0, i.jsx)("div", { className: M.Hi }),
        ],
    });
}
function Q(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", { className: M.Vg, children: t });
}
function J(e) {
    let { name: t, value: n } = e;
    return (0, i.jsxs)("div", { children: [n, t] });
}
function Z(e) {
    let { content: t } = e,
        n = a.useId(),
        l = (0, b.X)();
    return null != t
        ? (0, i.jsx)(y.A, { type: p.I5.TEXT_DISPLAY, id: n, content: t, className: M.Qq })
        : (0, i.jsx)("div", { className: s()(M.jC, l.className) });
}
function $(e) {
    let { content: t, image: n, imagePosition: a } = e,
        l = (0, b.X)(),
        r = (0, v.c)(n)
            ? (0, i.jsx)("div", {
                  className: s()(M.Sl, l.className),
                  "data-position": a,
                  children: (0, i.jsx)(O.Ay, {
                      src: n.proxyUrl,
                      alt: "",
                      width: n.width,
                      height: n.height,
                      responsive: !0,
                  }),
              })
            : null == t
              ? (0, i.jsx)("div", { className: s()(M.bc, l.className) })
              : null;
    return (0, i.jsxs)("div", {
        className: M.rQ,
        children: [
            null != r && "left" === a ? (0, i.jsxs)(i.Fragment, { children: [r, " "] }) : null,
            (0, i.jsx)(Z, { content: t }),
            null != r && "right" === a ? (0, i.jsxs)(i.Fragment, { children: [" ", r] }) : null,
        ],
    });
}
function ee(e) {
    let { size: t = "small", divider: n = !1 } = e,
        l = a.useId();
    return (0, i.jsx)(S.A, {
        type: p.I5.SEPARATOR,
        id: l,
        divider: n,
        spacing: "large" === t ? p.C8.LARGE : p.C8.SMALL,
    });
}
function et(e, t) {
    if (null == e) return null;
    let n = e.split(X);
    if (1 === n.length) return n[0];
    if ("skeleton" === t.mode) return null;
    let i = "";
    for (let e = 0; e < n.length; e++) {
        let a = n[e];
        if (e % 2 == 0) {
            i += a;
            continue;
        }
        let l = t.variables[a];
        null == l
            ? (i += "––")
            : "unfurled_media" === l.type
              ? (i += l.media.url)
              : "number" === l.type
                ? (i += t.numberFormat.format(l.value))
                : "string" === l.type && (i += l.value);
    }
    return i;
}
function en(e, t) {
    if (null == e || "skeleton" === t.mode) return null;
    let n = e.match(X)?.[0]?.slice(2, -2);
    if (null == n) return null;
    let i = t.variables[n];
    return null == i || "unfurled_media" !== i.type ? null : i.media;
}
function ei(e) {
    let { children: t, widget: n } = e;
    return (0, i.jsx)(C.O7.Root, {
        containerInnerWidth: 396,
        children: (0, i.jsx)(N.f5, {
            applicationWidget: n,
            children: (0, i.jsx)(b.x, {
                size: "reduced",
                weight: "reduced",
                children: (0, i.jsx)("div", { className: M.kL, children: t }),
            }),
        }),
    });
}
function ea(e) {
    var t, n;
    let l,
        r,
        o,
        c,
        d,
        { user: p, widget: x, cta: f, subtle: _ = !1 } = e,
        h = W(e),
        {
            isLoading: A,
            hasData: v,
            components: j,
        } = ((t = p.id),
        (n = x.applicationId),
        (l = (0, I.A)()),
        (r = (0, m.bG)([w.A], () => w.A.getUserIdentityByApplication(t, n))),
        (o = (0, m.bG)([G.A], () => G.A.getApplicationWidgetConfig(n))),
        (c = (0, m.bG)([w.A, G.A], () => null == w.A.getUserIdentities(t) || null == G.A.applicationWidgetConfigs)),
        (d = a.useMemo(() => {
            var e, t;
            if (null == o) return null;
            let n = V[o.widgetTemplateId];
            if (null == n) return null;
            let i =
                ((e = r ?? null),
                (t = o ?? null),
                null == e
                    ? { mode: "skeleton", config: t, numberFormat: l }
                    : {
                          mode: "from_data",
                          variables: Object.fromEntries([
                              ...(e.profile?.data?.dynamic?.map((e) =>
                                  e.type === u.f.STRING
                                      ? [e.name, { type: "string", value: e.value }]
                                      : e.type === u.f.NUMBER
                                        ? [e.name, { type: "number", value: e.value }]
                                        : e.type === u.f.MEDIA
                                          ? [e.name, { type: "unfurled_media", media: (0, R.Uv)(e.value) }]
                                          : (0, D.xb)(e),
                              ) ?? []),
                              ...Object.entries({ username: e.profile?.username, ...e.profile?.data?.primary })
                                  .filter(D.QE)
                                  .map((e) => {
                                      let [t, n] = e;
                                      if ("object" == typeof n) {
                                          if ("url" in n && "proxy_url" in n && "loading_state" in n)
                                              return [t, { type: "unfurled_media", media: (0, R.Uv)(n) }];
                                      } else if ("string" == typeof n) return [t, { type: "string", value: n }];
                                      else if ("number" == typeof n) return [t, { type: "number", value: n }];
                                      return null;
                                  })
                                  .filter(D.Vq),
                          ]),
                          config: t,
                          numberFormat: l,
                      });
            return n.map(function e(t) {
                switch (t.type) {
                    case "HERO":
                        return {
                            type: "HERO",
                            body: t.body.map(e),
                            title: et(t.title, i),
                            image: en(t.image, i),
                            imagePlaceholder: i.config?.heroPlaceholderImage,
                        };
                    case "GRID":
                        return { type: "GRID", children: t.children.map(e) };
                    case "FIELD":
                        return { type: "FIELD", name: e(t.name), value: e(t.value) };
                    case "TEXT":
                        return { type: "TEXT", content: et(t.content, i) };
                    case "TEXT_WITH_IMAGE":
                        return {
                            type: "TEXT_WITH_IMAGE",
                            content: et(t.content, i),
                            image: en(t.image, i),
                            imagePosition: t.imagePosition,
                        };
                    case "SEPARATOR":
                        return t;
                }
            });
        }, [o, r, l])),
        { isLoading: c, hasData: null != r, components: d });
    return null == j
        ? null
        : (0, i.jsxs)(U.A, {
              ...e,
              userId: p.id,
              widget: x,
              className: s()(M.Y5, _ && M.aK),
              headerTitle: h.headerTitle,
              headerClassName: M.wx,
              additionalManageWidgetMenuItems:
                  null != h.game
                      ? (0, i.jsx)(g.Drp, {
                            id: "view-game-profile",
                            label: "View Game Profile",
                            icon: g._xR,
                            action: h.openGameProfileModal,
                        })
                      : null,
              children: [
                  (0, i.jsx)(ei, { widget: x, children: (0, i.jsx)(z, { component: j }) }),
                  (0, i.jsx)(H, {
                      isCurrentUser: h.isCurrentUser,
                      isLoading: A,
                      hasData: v,
                      showConnectCta: h.showConnectCta,
                      showReconnectCta: h.showReconnectCta,
                      handleConnect: h.handleConnect,
                      cta: f,
                  }),
              ],
          });
}
function el(e) {
    let { user: t, widget: n, cta: a, subtle: l = !1 } = e,
        c = W(e),
        d = (0, A.A)(t.id, n.applicationId),
        u = d.surfaceConfigs[o.m.WIDGET_TOP],
        m = d.surfaceConfigs[o.m.WIDGET_BOTTOM];
    return null == u || null == m
        ? null
        : (0, i.jsxs)(U.A, {
              ...e,
              userId: t.id,
              widget: n,
              className: s()(M.Y5, M.v2, l && M.aK),
              headerClassName: M.vX,
              additionalManageWidgetMenuItems:
                  null != c.game
                      ? (0, i.jsx)(g.Drp, {
                            id: "view-game-profile",
                            label: "View Game Profile",
                            icon: g._xR,
                            action: c.openGameProfileModal,
                        })
                      : null,
              children: [
                  (0, i.jsx)(r.kH, {
                      surface: o.m.WIDGET_TOP,
                      surfaceConfig: u,
                      header: c.headerTitle,
                      data: d.data,
                      locale: d.locale,
                      applicationAssets: d.applicationAssets,
                      localizedStrings: d.localizedStrings,
                  }),
                  (0, i.jsx)(g.cGx, {}),
                  (0, i.jsx)(r.kH, {
                      surface: o.m.WIDGET_BOTTOM,
                      surfaceConfig: m,
                      data: d.data,
                      locale: d.locale,
                      applicationAssets: d.applicationAssets,
                      localizedStrings: d.localizedStrings,
                  }),
                  (0, i.jsx)(H, {
                      isCurrentUser: c.isCurrentUser,
                      isLoading: d.isLoading,
                      hasData: d.hasIdentity,
                      showConnectCta: c.showConnectCta,
                      showReconnectCta: c.showReconnectCta,
                      handleConnect: c.handleConnect,
                      cta: a,
                      v2: !0,
                  }),
              ],
          });
}
let es = Object.assign(
    function (e) {
        let { enabled: t } = h.A.useConfig({ location: "UserProfileApplicationWidget" });
        return t ? (0, i.jsx)(el, { ...e }) : (0, i.jsx)(ea, { ...e });
    },
    { Cta: B },
);
