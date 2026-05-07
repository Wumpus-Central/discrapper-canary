n.d(t, { A: () => eh });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(162817),
    o = n(598748),
    c = n(205338),
    d = n(179771),
    u = n(87075),
    m = n(17928),
    p = n(834730),
    h = n(939249),
    g = n(339350),
    x = n(821609),
    f = n(331322),
    E = n(534514),
    y = n(477782),
    T = n(687966),
    j = n(404778),
    v = n(155718),
    I = n(793574),
    A = n(688810),
    _ = n(46225),
    R = n(369374),
    D = n(531913),
    N = n(385771),
    b = n(789069),
    C = n(429913),
    P = n(409626),
    L = n(692969),
    w = n(569926),
    S = n(298236),
    O = n(953756),
    G = n(647901),
    X = n(371068),
    W = n(170226),
    k = n(731068),
    M = n(619517),
    F = n(339580),
    H = n(495544),
    U = n(403362),
    Y = n(183555),
    z = n(841595),
    V = n(623280),
    K = n(375708),
    B = n(40355);
function q(e) {
    let { trackUserProfileAction: t } = (0, Y.NJ)(),
        { user: n, widget: a, cta: s } = e,
        o = (0, m.bG)([H.default], () => H.default.getId()) === n.id,
        c = (0, C.h)(a.applicationId),
        u = c?.getIconURL(16),
        g = (function (e) {
            let t = e?.getCanonicalGameId(),
                { data: n } = (0, w.I)(t);
            return n;
        })(c),
        x = (0, L.A)({
            location: "UserProfileApplicationWidget",
            applicationId: g?.id,
            source: P.Ob.UserProfile,
            sourceUserId: n.id,
            trackEntryPointImpression: !0,
        }),
        { fetched: f, hasAlreadyLinked: E, canStartAuthorization: y, startAuthorization: T, token: j } = (0, _.RD)(c),
        { analyticsLocations: v } = (0, A.Ay)(I.A.USER_PROFILE_APPLICATION_WIDGET),
        R = l.useCallback(() => {
            y &&
                (t({
                    action: E
                        ? "PRESS_APPLICATION_WIDGET_LINKED_RECONNECT"
                        : "PRESS_APPLICATION_WIDGET_UNLINKED_CONNECT",
                    applicationId: a.applicationId,
                }),
                T({ analyticsLocations: v }));
        }, [y, E, T, t, a.applicationId, v]),
        D = null == s && f && !E && y,
        N =
            null == s &&
            f &&
            E &&
            y &&
            null != j &&
            !Array.from(d._.APPLICATION_IDENTITIES_SCOPES).some((e) => j.scopes.includes(e)) &&
            !j.scopes.includes(d.F.SDK_SOCIAL_LAYER) &&
            !j.scopes.includes(d.F.SDK_SOCIAL_LAYER_PRESENCE),
        b = (0, i.jsxs)(i.Fragment, {
            children: [
                null != u
                    ? (0, i.jsx)("img", { className: B.Z2, src: u, width: 16, height: 16, alt: "" })
                    : (0, i.jsx)("span", { className: B.qP }),
                (0, i.jsx)(p.E, {
                    variant: "text-sm/medium",
                    children: c?.name != null ? c.name : (0, i.jsx)("div", { className: B.jC }),
                }),
            ],
        }),
        S =
            null == g
                ? (0, i.jsx)("div", { className: B.qd, children: b })
                : (0, i.jsx)(h.D, { className: r()(B.qd, B.vk), onClick: x, children: b });
    return {
        isCurrentUser: o,
        game: g,
        openGameProfileModal: x,
        handleConnect: R,
        showConnectCta: D,
        showReconnectCta: N,
        headerTitle: S,
    };
}
function Z(e) {
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
              className: r()(B.qr, u && B.v2),
              children: [
                  n || l || a || s
                      ? null
                      : (0, i.jsxs)("div", {
                            className: B.o8,
                            children: [
                                (0, i.jsx)(g.Q, { size: "xxs" }),
                                (0, i.jsx)(p.E, {
                                    variant: "text-sm/medium",
                                    color: "text-subtle",
                                    children: K.intl.string(K.t.z5K4Uv),
                                }),
                            ],
                        }),
                  a
                      ? (0, i.jsx)(J, {
                            heading: K.intl.string(K.t.UDPRLO),
                            content: K.intl.string(K.t["OW/2al"]),
                            buttons: (0, i.jsx)(x.$, { text: K.intl.string(K.t.S0W8Z5), onClick: o }),
                        })
                      : s
                        ? (0, i.jsx)(J, {
                              heading: K.intl.string(K.t["9WarGY"]),
                              content: K.intl.string(K.t.qgxnKe),
                              buttons: (0, i.jsx)(x.$, { text: K.intl.string(K.t.vD60Pv), onClick: o }),
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
        className: B.lO,
        children: [
            (0, i.jsxs)(f.B, {
                gap: 4,
                children: [
                    e.showSuggestedForYou &&
                        (0, i.jsx)(p.E, {
                            variant: "text-xs/medium",
                            color: "text-default",
                            children: K.intl.string(K.t.zMUr6Z),
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
        className: B.mY,
        children: [
            (0, i.jsxs)("div", {
                className: B.TL,
                children: [
                    (0, i.jsx)(p.E, {
                        variant: "text-lg/medium",
                        className: B.ZY,
                        children: null != t ? t : (0, i.jsx)("div", { className: B.jC }),
                    }),
                    (0, i.jsx)(G.x, { color: "muted", children: n }),
                ],
            }),
            (0, b.c)(l)
                ? (0, i.jsx)("div", {
                      className: B.Xr,
                      children: (0, i.jsx)(M.Ay, {
                          src: l.proxyUrl,
                          alt: "",
                          width: l.width,
                          height: l.height,
                          responsive: !0,
                          className: B.c8,
                      }),
                  })
                : null != a
                  ? (0, i.jsx)("div", {
                        className: B.Xr,
                        children: (0, i.jsx)("img", { src: a, alt: "", className: B.c8 }),
                    })
                  : (0, i.jsx)("div", { className: B.Hi }),
        ],
    });
}
function el(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", { className: B.Vg, children: t });
}
function ea(e) {
    let { name: t, value: n } = e;
    return (0, i.jsxs)("div", { children: [n, t] });
}
function er(e) {
    let { content: t } = e,
        n = l.useId(),
        a = (0, G.X)();
    return null != t
        ? (0, i.jsx)(W.A, { type: v.I5.TEXT_DISPLAY, id: n, content: t, className: B.Qq })
        : (0, i.jsx)("div", { className: r()(B.jC, a.className) });
}
function es(e) {
    let { content: t, image: n, imagePosition: l } = e,
        a = (0, G.X)(),
        s = (0, b.c)(n)
            ? (0, i.jsx)("div", {
                  className: r()(B.Sl, a.className),
                  "data-position": l,
                  children: (0, i.jsx)(M.Ay, {
                      src: n.proxyUrl,
                      alt: "",
                      width: n.width,
                      height: n.height,
                      responsive: !0,
                  }),
              })
            : null == t
              ? (0, i.jsx)("div", { className: r()(B.bc, a.className) })
              : null;
    return (0, i.jsxs)("div", {
        className: B.rQ,
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
    return (0, i.jsx)(X.A, {
        type: v.I5.SEPARATOR,
        id: a,
        divider: n,
        spacing: "large" === t ? v.C8.LARGE : v.C8.SMALL,
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
            ? (i += "\u2013\u2013")
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
    return (0, i.jsx)(O.O7.Root, {
        containerInnerWidth: 396,
        children: (0, i.jsx)(S.f5, {
            applicationWidget: n,
            children: (0, i.jsx)(G.x, {
                size: "reduced",
                weight: "reduced",
                children: (0, i.jsx)("div", { className: B.kL, children: t }),
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
        j = q(e),
        {
            isLoading: v,
            hasData: I,
            components: A,
        } = ((t = p.id),
        (n = h.applicationId),
        (a = (0, N.A)()),
        (s = (0, m.bG)([F.A], () => F.A.getUserIdentityByApplication(t, n))),
        (o = (0, m.bG)([z.A], () => z.A.getApplicationWidgetConfig(n))),
        (c = (0, m.bG)([F.A, z.A], () => null == F.A.getUserIdentities(t) || null == z.A.applicationWidgetConfigs)),
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
                                          ? [e.name, { type: "unfurled_media", media: (0, k.Uv)(e.value) }]
                                          : (0, U.xb)(e),
                              ) ?? []),
                              ...Object.entries({ username: e.profile?.username, ...e.profile?.data?.primary })
                                  .filter(U.QE)
                                  .map((e) => {
                                      let [t, n] = e;
                                      if ("object" == typeof n) {
                                          if ("url" in n && "proxy_url" in n && "loading_state" in n)
                                              return [t, { type: "unfurled_media", media: (0, k.Uv)(n) }];
                                      } else if ("string" == typeof n) return [t, { type: "string", value: n }];
                                      else if ("number" == typeof n) return [t, { type: "number", value: n }];
                                      return null;
                                  })
                                  .filter(U.Vq),
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
    return null == A
        ? null
        : (0, i.jsxs)(V.A, {
              ...e,
              userId: p.id,
              widget: h,
              className: r()(B.Y5, { [B.aK]: f, [B.F9]: E }),
              headerTitle: j.headerTitle,
              headerClassName: B.wx,
              additionalManageWidgetMenuItems:
                  null != j.game
                      ? (0, i.jsx)(y.Dr, {
                            id: "view-game-profile",
                            label: "View Game Profile",
                            icon: T._,
                            action: j.openGameProfileModal,
                        })
                      : null,
              children: [
                  (0, i.jsx)(eu, { widget: h, children: (0, i.jsx)(ee, { component: A }) }),
                  (0, i.jsx)(Z, {
                      isCurrentUser: j.isCurrentUser,
                      isLoading: v,
                      hasData: I,
                      showConnectCta: j.showConnectCta,
                      showReconnectCta: j.showReconnectCta,
                      handleConnect: j.handleConnect,
                      disableCTA: g,
                      cta: x,
                  }),
              ],
          });
}
function ep(e) {
    let { user: t, widget: n, disableCTA: l, cta: a, subtle: c = !1, embedded: d = !1 } = e,
        u = q(e),
        m = (0, D.A)(t.id, n.applicationId),
        p = m.surfaceConfigs[o.m.WIDGET_TOP],
        h = m.surfaceConfigs[o.m.WIDGET_BOTTOM];
    return null == p || null == h
        ? null
        : (0, i.jsxs)(V.A, {
              ...e,
              userId: t.id,
              widget: n,
              className: r()(B.Y5, B.v2, { [B.aK]: c, [B.F9]: d }),
              headerClassName: B.vX,
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
                  (0, i.jsx)(j.c, {}),
                  (0, i.jsx)(s.kH, { ...m, surface: o.m.WIDGET_BOTTOM, surfaceConfig: h }),
                  (0, i.jsx)(Z, {
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
