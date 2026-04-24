n.d(t, { A: () => eh });
var a = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    r = n(435428),
    c = n(598748),
    o = n(205338),
    u = n(179771),
    d = n(87075),
    m = n(17928),
    p = n(834730),
    h = n(939249),
    T = n(339350),
    y = n(821609),
    g = n(331322),
    E = n(534514),
    f = n(477782),
    x = n(687966),
    I = n(404778),
    A = n(155718),
    v = n(793574),
    j = n(688810),
    _ = n(46225),
    R = n(369374),
    C = n(531913),
    D = n(385771),
    N = n(789069),
    P = n(429913),
    b = n(409626),
    L = n(692969),
    O = n(569926),
    X = n(298236),
    G = n(953756),
    S = n(647901),
    w = n(371068),
    F = n(170226),
    W = n(731068),
    k = n(619517),
    U = n(339580),
    M = n(495544),
    H = n(403362),
    K = n(183555),
    Y = n(841595),
    B = n(623280),
    q = n(985018),
    z = n(40355);
function V(e) {
    let { trackUserProfileAction: t } = (0, K.NJ)(),
        { user: n, widget: i, cta: r } = e,
        c = (0, m.bG)([M.default], () => M.default.getId()) === n.id,
        o = (0, P.h)(i.applicationId),
        d = o?.getIconURL(16),
        T = (function (e) {
            let t = e?.getCanonicalGameId(),
                { data: n } = (0, O.I)(t);
            return n;
        })(o),
        y = (0, L.A)({
            location: "UserProfileApplicationWidget",
            applicationId: T?.id,
            source: b.Ob.UserProfile,
            sourceUserId: n.id,
            trackEntryPointImpression: !0,
        }),
        { fetched: g, hasAlreadyLinked: E, canStartAuthorization: f, startAuthorization: x, token: I } = (0, _.RD)(o),
        { analyticsLocations: A } = (0, j.Ay)(v.A.USER_PROFILE_APPLICATION_WIDGET),
        R = l.useCallback(() => {
            f &&
                (t({
                    action: E
                        ? "PRESS_APPLICATION_WIDGET_LINKED_RECONNECT"
                        : "PRESS_APPLICATION_WIDGET_UNLINKED_CONNECT",
                    applicationId: i.applicationId,
                }),
                x({ analyticsLocations: A }));
        }, [f, E, x, t, i.applicationId, A]),
        C = null == r && g && !E && f,
        D =
            null == r &&
            g &&
            E &&
            f &&
            null != I &&
            !I.scopes.includes(u.F.APPLICATION_IDENTITIES_WRITE) &&
            !I.scopes.includes(u.F.SDK_SOCIAL_LAYER) &&
            !I.scopes.includes(u.F.SDK_SOCIAL_LAYER_PRESENCE),
        N = (0, a.jsxs)(a.Fragment, {
            children: [
                null != d
                    ? (0, a.jsx)("img", { className: z.Z2, src: d, width: 16, height: 16, alt: "" })
                    : (0, a.jsx)("span", { className: z.qP }),
                (0, a.jsx)(p.E, {
                    variant: "text-sm/medium",
                    children: o?.name != null ? o.name : (0, a.jsx)("div", { className: z.jC }),
                }),
            ],
        }),
        X =
            null == T
                ? (0, a.jsx)("div", { className: z.qd, children: N })
                : (0, a.jsx)(h.D, { className: s()(z.qd, z.vk), onClick: y, children: N });
    return {
        isCurrentUser: c,
        game: T,
        openGameProfileModal: y,
        handleConnect: R,
        showConnectCta: C,
        showReconnectCta: D,
        headerTitle: X,
    };
}
function Q(e) {
    let {
        isCurrentUser: t,
        isLoading: n,
        hasData: l,
        showConnectCta: i,
        showReconnectCta: r,
        handleConnect: c,
        disableCTA: o,
        cta: u,
        v2: d = !1,
    } = e;
    return !t || o
        ? null
        : (0, a.jsxs)("div", {
              className: s()(z.qr, d && z.v2),
              children: [
                  n || l || i || r
                      ? null
                      : (0, a.jsxs)("div", {
                            className: z.o8,
                            children: [
                                (0, a.jsx)(T.Q, { size: "xxs" }),
                                (0, a.jsx)(p.E, {
                                    variant: "text-sm/medium",
                                    color: "text-subtle",
                                    children: q.intl.string(q.t.z5K4Uv),
                                }),
                            ],
                        }),
                  i
                      ? (0, a.jsx)(Z, {
                            heading: q.intl.string(q.t.UDPRLO),
                            content: q.intl.string(q.t["OW/2al"]),
                            buttons: (0, a.jsx)(y.$, { text: q.intl.string(q.t.S0W8Z5), onClick: c }),
                        })
                      : r
                        ? (0, a.jsx)(Z, {
                              heading: q.intl.string(q.t["9WarGY"]),
                              content: q.intl.string(q.t.qgxnKe),
                              buttons: (0, a.jsx)(y.$, { text: q.intl.string(q.t.vD60Pv), onClick: c }),
                          })
                        : u,
              ],
          });
}
function Z(e) {
    return (0, a.jsxs)(g.B, {
        direction: "horizontal",
        gap: 24,
        padding: 12,
        fullWidth: !1,
        className: z.lO,
        children: [
            (0, a.jsxs)(g.B, {
                gap: 4,
                children: [
                    e.showSuggestedForYou &&
                        (0, a.jsx)(p.E, {
                            variant: "text-xs/medium",
                            color: "text-default",
                            children: q.intl.string(q.t.zMUr6Z),
                        }),
                    (0, a.jsx)(E.D, { variant: "heading-sm/medium", color: "text-default", children: e.heading }),
                    (0, a.jsx)(p.E, { variant: "text-xs/normal", color: "text-subtle", children: e.content }),
                ],
            }),
            (0, a.jsx)(g.B, {
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
let $ = /{{(.*?)}}/g,
    J = {
        [o.A.MARVEL_RIVALS]: [
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
        [o.A.WUTHERING_WAVES]: [
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
            return (0, a.jsx)(ea, { ...l, body: en(n) });
        case "GRID":
            return (0, a.jsx)(el, { children: en(t.children) });
        case "FIELD":
            return (0, a.jsx)(ei, { value: et(t.value), name: et(t.name) });
        case "TEXT":
            return (0, a.jsx)(es, { ...t });
        case "TEXT_WITH_IMAGE":
            return (0, a.jsx)(er, { ...t });
        case "SEPARATOR":
            return (0, a.jsx)(ec, { ...t });
    }
}
function et(e, t) {
    return (0, a.jsx)(ee, { component: e }, t);
}
function en(e) {
    return e.map((e, t) => et(e, t));
}
function ea(e) {
    let { title: t, body: n, image: l, imagePlaceholder: i } = e;
    return (0, a.jsxs)("div", {
        className: z.mY,
        children: [
            (0, a.jsxs)("div", {
                className: z.TL,
                children: [
                    (0, a.jsx)(p.E, {
                        variant: "text-lg/medium",
                        className: z.ZY,
                        children: null != t ? t : (0, a.jsx)("div", { className: z.jC }),
                    }),
                    (0, a.jsx)(S.x, { color: "muted", children: n }),
                ],
            }),
            (0, N.c)(l)
                ? (0, a.jsx)("div", {
                      className: z.Xr,
                      children: (0, a.jsx)(k.Ay, {
                          src: l.proxyUrl,
                          alt: "",
                          width: l.width,
                          height: l.height,
                          responsive: !0,
                          className: z.c8,
                      }),
                  })
                : null != i
                  ? (0, a.jsx)("div", {
                        className: z.Xr,
                        children: (0, a.jsx)("img", { src: i, alt: "", className: z.c8 }),
                    })
                  : (0, a.jsx)("div", { className: z.Hi }),
        ],
    });
}
function el(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: z.Vg, children: t });
}
function ei(e) {
    let { name: t, value: n } = e;
    return (0, a.jsxs)("div", { children: [n, t] });
}
function es(e) {
    let { content: t } = e,
        n = l.useId(),
        i = (0, S.X)();
    return null != t
        ? (0, a.jsx)(F.A, { type: A.I5.TEXT_DISPLAY, id: n, content: t, className: z.Qq })
        : (0, a.jsx)("div", { className: s()(z.jC, i.className) });
}
function er(e) {
    let { content: t, image: n, imagePosition: l } = e,
        i = (0, S.X)(),
        r = (0, N.c)(n)
            ? (0, a.jsx)("div", {
                  className: s()(z.Sl, i.className),
                  "data-position": l,
                  children: (0, a.jsx)(k.Ay, {
                      src: n.proxyUrl,
                      alt: "",
                      width: n.width,
                      height: n.height,
                      responsive: !0,
                  }),
              })
            : null == t
              ? (0, a.jsx)("div", { className: s()(z.bc, i.className) })
              : null;
    return (0, a.jsxs)("div", {
        className: z.rQ,
        children: [
            null != r && "left" === l ? (0, a.jsxs)(a.Fragment, { children: [r, " "] }) : null,
            (0, a.jsx)(es, { content: t }),
            null != r && "right" === l ? (0, a.jsxs)(a.Fragment, { children: [" ", r] }) : null,
        ],
    });
}
function ec(e) {
    let { size: t = "small", divider: n = !1 } = e,
        i = l.useId();
    return (0, a.jsx)(w.A, {
        type: A.I5.SEPARATOR,
        id: i,
        divider: n,
        spacing: "large" === t ? A.C8.LARGE : A.C8.SMALL,
    });
}
function eo(e, t) {
    if (null == e) return null;
    let n = e.split($);
    if (1 === n.length) return n[0];
    if ("skeleton" === t.mode) return null;
    let a = "";
    for (let e = 0; e < n.length; e++) {
        let l = n[e];
        if (e % 2 == 0) {
            a += l;
            continue;
        }
        let i = t.variables[l];
        null == i
            ? (a += "––")
            : "unfurled_media" === i.type
              ? (a += i.media.url)
              : "number" === i.type
                ? (a += t.numberFormat.format(i.value))
                : "string" === i.type && (a += i.value);
    }
    return a;
}
function eu(e, t) {
    if (null == e || "skeleton" === t.mode) return null;
    let n = e.match($)?.[0]?.slice(2, -2);
    if (null == n) return null;
    let a = t.variables[n];
    return null == a || "unfurled_media" !== a.type ? null : a.media;
}
function ed(e) {
    let { children: t, widget: n } = e;
    return (0, a.jsx)(G.O7.Root, {
        containerInnerWidth: 396,
        children: (0, a.jsx)(X.f5, {
            applicationWidget: n,
            children: (0, a.jsx)(S.x, {
                size: "reduced",
                weight: "reduced",
                children: (0, a.jsx)("div", { className: z.kL, children: t }),
            }),
        }),
    });
}
function em(e) {
    var t, n;
    let i,
        r,
        c,
        o,
        u,
        { user: p, widget: h, disableCTA: T, cta: y, subtle: g = !1, embedded: E = !1 } = e,
        I = V(e),
        {
            isLoading: A,
            hasData: v,
            components: j,
        } = ((t = p.id),
        (n = h.applicationId),
        (i = (0, D.A)()),
        (r = (0, m.bG)([U.A], () => U.A.getUserIdentityByApplication(t, n))),
        (c = (0, m.bG)([Y.A], () => Y.A.getApplicationWidgetConfig(n))),
        (o = (0, m.bG)([U.A, Y.A], () => null == U.A.getUserIdentities(t) || null == Y.A.applicationWidgetConfigs)),
        (u = l.useMemo(() => {
            var e, t;
            if (null == c) return null;
            let n = J[c.widgetTemplateId];
            if (null == n) return null;
            let a =
                ((e = r ?? null),
                (t = c ?? null),
                null == e
                    ? { mode: "skeleton", config: t, numberFormat: i }
                    : {
                          mode: "from_data",
                          variables: Object.fromEntries([
                              ...(e.profile?.data?.dynamic?.map((e) =>
                                  e.type === d.f.STRING
                                      ? [e.name, { type: "string", value: e.value }]
                                      : e.type === d.f.NUMBER
                                        ? [e.name, { type: "number", value: e.value }]
                                        : e.type === d.f.MEDIA
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
                          numberFormat: i,
                      });
            return n.map(function e(t) {
                switch (t.type) {
                    case "HERO":
                        return {
                            type: "HERO",
                            body: t.body.map(e),
                            title: eo(t.title, a),
                            image: eu(t.image, a),
                            imagePlaceholder: a.config?.heroPlaceholderImage,
                        };
                    case "GRID":
                        return { type: "GRID", children: t.children.map(e) };
                    case "FIELD":
                        return { type: "FIELD", name: e(t.name), value: e(t.value) };
                    case "TEXT":
                        return { type: "TEXT", content: eo(t.content, a) };
                    case "TEXT_WITH_IMAGE":
                        return {
                            type: "TEXT_WITH_IMAGE",
                            content: eo(t.content, a),
                            image: eu(t.image, a),
                            imagePosition: t.imagePosition,
                        };
                    case "SEPARATOR":
                        return t;
                }
            });
        }, [c, r, i])),
        { isLoading: o, hasData: null != r, components: u });
    return null == j
        ? null
        : (0, a.jsxs)(B.A, {
              ...e,
              userId: p.id,
              widget: h,
              className: s()(z.Y5, { [z.aK]: g, [z.F9]: E }),
              headerTitle: I.headerTitle,
              headerClassName: z.wx,
              additionalManageWidgetMenuItems:
                  null != I.game
                      ? (0, a.jsx)(f.Dr, {
                            id: "view-game-profile",
                            label: "View Game Profile",
                            icon: x._,
                            action: I.openGameProfileModal,
                        })
                      : null,
              children: [
                  (0, a.jsx)(ed, { widget: h, children: (0, a.jsx)(ee, { component: j }) }),
                  (0, a.jsx)(Q, {
                      isCurrentUser: I.isCurrentUser,
                      isLoading: A,
                      hasData: v,
                      showConnectCta: I.showConnectCta,
                      showReconnectCta: I.showReconnectCta,
                      handleConnect: I.handleConnect,
                      disableCTA: T,
                      cta: y,
                  }),
              ],
          });
}
function ep(e) {
    let { user: t, widget: n, disableCTA: l, cta: i, subtle: o = !1, embedded: u = !1 } = e,
        d = V(e),
        m = (0, C.A)(t.id, n.applicationId),
        p = m.surfaceConfigs[c.m.WIDGET_TOP],
        h = m.surfaceConfigs[c.m.WIDGET_BOTTOM];
    return null == p || null == h
        ? null
        : (0, a.jsxs)(B.A, {
              ...e,
              userId: t.id,
              widget: n,
              className: s()(z.Y5, z.v2, { [z.aK]: o, [z.F9]: u }),
              headerClassName: z.vX,
              additionalManageWidgetMenuItems:
                  null != d.game
                      ? (0, a.jsx)(f.Dr, {
                            id: "view-game-profile",
                            label: "View Game Profile",
                            icon: x._,
                            action: d.openGameProfileModal,
                        })
                      : null,
              children: [
                  (0, a.jsx)(r.kH, { ...m, surface: c.m.WIDGET_TOP, surfaceConfig: p, header: d.headerTitle }),
                  (0, a.jsx)(I.c, {}),
                  (0, a.jsx)(r.kH, { ...m, surface: c.m.WIDGET_BOTTOM, surfaceConfig: h }),
                  (0, a.jsx)(Q, {
                      isCurrentUser: d.isCurrentUser,
                      isLoading: m.isLoading,
                      hasData: m.hasIdentity,
                      showConnectCta: d.showConnectCta,
                      showReconnectCta: d.showReconnectCta,
                      handleConnect: d.handleConnect,
                      disableCTA: l,
                      cta: i,
                      v2: !0,
                  }),
              ],
          });
}
let eh = Object.assign(
    function (e) {
        let { enabled: t } = R.A.useConfig({ location: "UserProfileApplicationWidget" });
        return t ? (0, a.jsx)(ep, { ...e }) : (0, a.jsx)(em, { ...e });
    },
    { Cta: Z },
);
