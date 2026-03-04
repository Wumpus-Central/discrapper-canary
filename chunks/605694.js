n.d(t, { A: () => Q });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(205338),
    o = n(87075),
    c = n(311907),
    d = n(397927),
    u = n(155718),
    m = n(793574),
    g = n(688810),
    x = n(362490),
    f = n(385771),
    p = n(789069),
    h = n(429913),
    _ = n(409626),
    A = n(692969),
    I = n(207963),
    j = n(953756),
    v = n(647901),
    E = n(371068),
    T = n(61266),
    b = n(731068),
    y = n(619517),
    N = n(339580),
    S = n(961350),
    C = n(760751),
    k = n(403362),
    R = n(183555),
    w = n(622543),
    O = n(466853),
    L = n(985018),
    P = n(442716);
let D = /{{(.*?)}}/g,
    G = {
        [r.A.MARVEL_RIVALS]: [
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
        [r.A.WUTHERING_WAVES]: [
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
function M(e) {
    let { component: t } = e;
    if (Array.isArray(t)) return F(t);
    switch (t.type) {
        case "HERO":
            let { body: n, ...l } = t;
            return (0, i.jsx)(W, { ...l, body: F(n) });
        case "GRID":
            return (0, i.jsx)(H, { children: F(t.children) });
        case "FIELD":
            return (0, i.jsx)(B, { value: U(t.value), name: U(t.name) });
        case "TEXT":
            return (0, i.jsx)(X, { ...t });
        case "TEXT_WITH_IMAGE":
            return (0, i.jsx)(z, { ...t });
        case "SEPARATOR":
            return (0, i.jsx)(V, { ...t });
    }
}
function U(e, t) {
    return (0, i.jsx)(M, { component: e }, t);
}
function F(e) {
    return e.map((e, t) => U(e, t));
}
function W(e) {
    let { title: t, body: n, image: l, imagePlaceholder: a } = e;
    return (0, i.jsxs)("div", {
        className: P.mY,
        children: [
            (0, i.jsxs)("div", {
                className: P.TL,
                children: [
                    (0, i.jsx)(d.Text, {
                        variant: "text-lg/medium",
                        className: P.ZY,
                        children: null != t ? t : (0, i.jsx)("div", { className: P.jC }),
                    }),
                    (0, i.jsx)(v.x, { color: "muted", children: n }),
                ],
            }),
            (0, p.c)(l)
                ? (0, i.jsx)("div", {
                      className: P.Xr,
                      children: (0, i.jsx)(y.Ay, {
                          src: l.proxyUrl,
                          alt: "",
                          width: l.width,
                          height: l.height,
                          responsive: !0,
                          className: P.c8,
                      }),
                  })
                : null != a
                  ? (0, i.jsx)("div", {
                        className: P.Xr,
                        children: (0, i.jsx)("img", { src: a, alt: "", className: P.c8 }),
                    })
                  : (0, i.jsx)("div", { className: P.Hi }),
        ],
    });
}
function H(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", { className: P.Vg, children: t });
}
function B(e) {
    let { name: t, value: n } = e;
    return (0, i.jsxs)("div", { children: [n, t] });
}
function X(e) {
    let { content: t } = e,
        n = l.useId(),
        a = (0, v.X)();
    return null != t
        ? (0, i.jsx)(T.A, { type: u.I5.TEXT_DISPLAY, id: n, content: t, className: P.Qq })
        : (0, i.jsx)("div", { className: s()(P.jC, a.className) });
}
function z(e) {
    let { content: t, image: n, imagePosition: l } = e,
        a = (0, v.X)(),
        r = (0, p.c)(n)
            ? (0, i.jsx)("div", {
                  className: s()(P.Sl, a.className),
                  "data-position": l,
                  children: (0, i.jsx)(y.Ay, {
                      src: n.proxyUrl,
                      alt: "",
                      width: n.width,
                      height: n.height,
                      responsive: !0,
                  }),
              })
            : null == t
              ? (0, i.jsx)("div", { className: s()(P.bc, a.className) })
              : null;
    return (0, i.jsxs)("div", {
        className: P.rQ,
        children: [
            null != r && "left" === l ? (0, i.jsxs)(i.Fragment, { children: [r, " "] }) : null,
            (0, i.jsx)(X, { content: t }),
            null != r && "right" === l ? (0, i.jsxs)(i.Fragment, { children: [" ", r] }) : null,
        ],
    });
}
function V(e) {
    let { size: t = "small", divider: n = !1 } = e,
        a = l.useId();
    return (0, i.jsx)(E.A, {
        type: u.I5.SEPARATOR,
        id: a,
        divider: n,
        spacing: "large" === t ? u.C8.LARGE : u.C8.SMALL,
    });
}
function Y(e, t) {
    if (null == e) return null;
    let n = e.split(D);
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
function K(e, t) {
    if (null == e || "skeleton" === t.mode) return null;
    let n = e.match(D)?.[0]?.slice(2, -2);
    if (null == n) return null;
    let i = t.variables[n];
    return null == i || "unfurled_media" !== i.type ? null : i.media;
}
function q(e) {
    let { children: t, widget: n } = e;
    return (0, i.jsx)(j.O7.Root, {
        containerInnerWidth: 396,
        children: (0, i.jsx)(I.f5, {
            applicationWidget: n,
            children: (0, i.jsx)(v.x, {
                size: "reduced",
                weight: "reduced",
                children: (0, i.jsx)("div", { className: P.kL, children: t }),
            }),
        }),
    });
}
function J(e) {
    return (0, i.jsxs)(d.BJc, {
        direction: "horizontal",
        gap: 24,
        padding: 12,
        fullWidth: !1,
        className: P.lO,
        children: [
            (0, i.jsxs)(d.BJc, {
                gap: 4,
                children: [
                    e.showSuggestedForYou &&
                        (0, i.jsx)(d.Text, {
                            variant: "text-xs/medium",
                            color: "text-default",
                            children: L.intl.string(L.t.zMUr6Z),
                        }),
                    (0, i.jsx)(d.Heading, { variant: "heading-sm/medium", color: "text-default", children: e.heading }),
                    (0, i.jsx)(d.Text, { variant: "text-xs/normal", color: "text-subtle", children: e.content }),
                ],
            }),
            (0, i.jsx)(d.BJc, {
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
let Q = Object.assign(
    function (e) {
        var t, n;
        let a,
            r,
            u,
            p,
            I,
            { trackUserProfileAction: j } = (0, R.NJ)(),
            { user: v, widget: E, cta: T, subtle: y = !1 } = e,
            D = (0, c.bG)([S.default], () => S.default.getId()) === v.id,
            U = (0, h.h)(E.applicationId),
            F = U?.getIconURL(16),
            W = (0, c.bG)([C.A], () => (null != U ? C.A.getGameByApplication(U) : null)),
            H = (0, A.A)({
                location: "UserProfileApplicationWidget",
                applicationId: W?.id,
                source: _.Ob.UserProfile,
                sourceUserId: v.id,
                trackEntryPointImpression: !0,
            }),
            { fetched: B, hasAlreadyLinked: X, canStartAuthorization: z, startAuthorization: V } = (0, x.RD)(U),
            { analyticsLocations: Q } = (0, g.Ay)(m.A.USER_PROFILE_APPLICATION_WIDGET),
            Z = l.useCallback(() => {
                z &&
                    (j({ action: "PRESS_APPLICATION_WIDGET_UNLINKED_CONNECT", applicationId: E.applicationId }),
                    V({ analyticsLocations: Q }));
            }, [z, V, j, E.applicationId, Q]),
            $ = null == T && B && !X && z,
            ee = (0, i.jsxs)(i.Fragment, {
                children: [
                    null != F
                        ? (0, i.jsx)("img", { className: P.Z2, src: F, width: 16, height: 16, alt: "" })
                        : (0, i.jsx)("span", { className: P.qP }),
                    (0, i.jsx)(d.Text, {
                        variant: "text-sm/medium",
                        children: U?.name != null ? U.name : (0, i.jsx)("div", { className: P.jC }),
                    }),
                ],
            }),
            et =
                null == W
                    ? (0, i.jsx)("div", { className: P.qd, children: ee })
                    : (0, i.jsx)(d.DUT, { className: s()(P.qd, P.vk), onClick: H, children: ee }),
            {
                isLoading: en,
                hasData: ei,
                components: el,
            } = ((t = v.id),
            (n = E.applicationId),
            (a = (0, f.A)()),
            (r = (0, c.bG)([N.A], () => N.A.getUserIdentityByApplication(t, n))),
            (u = (0, c.bG)([w.A], () => w.A.getApplicationWidgetConfig(n))),
            (p = (0, c.bG)([N.A, w.A], () => null == N.A.getUserIdentities(t) || null == w.A.applicationWidgetConfigs)),
            (I = l.useMemo(() => {
                var e, t;
                if (null == u) return null;
                let n = G[u.widgetTemplateId];
                if (null == n) return null;
                let i =
                    ((e = r ?? null),
                    (t = u ?? null),
                    null == e
                        ? { mode: "skeleton", config: t, numberFormat: a }
                        : {
                              mode: "from_data",
                              variables: Object.fromEntries([
                                  ...(e.profile?.data?.dynamic?.map((e) =>
                                      e.type === o.f.STRING
                                          ? [e.name, { type: "string", value: e.value }]
                                          : e.type === o.f.NUMBER
                                            ? [e.name, { type: "number", value: e.value }]
                                            : e.type === o.f.MEDIA
                                              ? [e.name, { type: "unfurled_media", media: (0, b.Uv)(e.value) }]
                                              : (0, k.xb)(e),
                                  ) ?? []),
                                  ...Object.entries({ username: e.profile?.username, ...e.profile?.data?.primary })
                                      .filter(k.QE)
                                      .map((e) => {
                                          let [t, n] = e;
                                          if ("object" == typeof n) {
                                              if ("url" in n && "proxy_url" in n && "loading_state" in n)
                                                  return [t, { type: "unfurled_media", media: (0, b.Uv)(n) }];
                                          } else if ("string" == typeof n) return [t, { type: "string", value: n }];
                                          else if ("number" == typeof n) return [t, { type: "number", value: n }];
                                          return null;
                                      })
                                      .filter(k.Vq),
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
                                title: Y(t.title, i),
                                image: K(t.image, i),
                                imagePlaceholder: i.config?.heroPlaceholderImage,
                            };
                        case "GRID":
                            return { type: "GRID", children: t.children.map(e) };
                        case "FIELD":
                            return { type: "FIELD", name: e(t.name), value: e(t.value) };
                        case "TEXT":
                            return { type: "TEXT", content: Y(t.content, i) };
                        case "TEXT_WITH_IMAGE":
                            return {
                                type: "TEXT_WITH_IMAGE",
                                content: Y(t.content, i),
                                image: K(t.image, i),
                                imagePosition: t.imagePosition,
                            };
                        case "SEPARATOR":
                            return t;
                    }
                });
            }, [u, r, a])),
            { isLoading: p, hasData: null != r, components: I });
        return null == el
            ? null
            : (0, i.jsxs)(O.A, {
                  ...e,
                  userId: v.id,
                  widget: E,
                  className: s()(P.Y5, y && P.aK),
                  headerTitle: et,
                  headerClassName: P.wx,
                  additionalManageWidgetMenuItems:
                      null != W
                          ? (0, i.jsx)(d.Drp, {
                                id: "view-game-profile",
                                label: "View Game Profile",
                                icon: d._xR,
                                action: H,
                            })
                          : null,
                  children: [
                      (0, i.jsx)(q, { widget: E, children: (0, i.jsx)(M, { component: el }) }),
                      D &&
                          (0, i.jsxs)("div", {
                              className: P.qr,
                              children: [
                                  en || ei || $
                                      ? null
                                      : (0, i.jsxs)("div", {
                                            className: P.o8,
                                            children: [
                                                (0, i.jsx)(d.Qfk, { size: "xxs" }),
                                                (0, i.jsx)(d.Text, {
                                                    variant: "text-sm/medium",
                                                    color: "text-subtle",
                                                    children: L.intl.string(L.t.z5K4Uv),
                                                }),
                                            ],
                                        }),
                                  $
                                      ? (0, i.jsx)(J, {
                                            heading: L.intl.string(L.t.UDPRLO),
                                            content: L.intl.string(L.t["OW/2al"]),
                                            buttons: (0, i.jsx)(d.Button, {
                                                text: L.intl.string(L.t.S0W8Z5),
                                                onClick: Z,
                                            }),
                                        })
                                      : T,
                              ],
                          }),
                  ],
              });
    },
    { Cta: J },
);
