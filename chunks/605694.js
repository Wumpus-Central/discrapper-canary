n.d(t, { A: () => Z });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(205338),
    o = n(179771),
    c = n(87075),
    d = n(311907),
    u = n(397927),
    g = n(155718),
    m = n(793574),
    x = n(688810),
    f = n(362490),
    p = n(385771),
    h = n(789069),
    _ = n(429913),
    A = n(409626),
    I = n(692969),
    j = n(207963),
    v = n(953756),
    E = n(647901),
    T = n(371068),
    b = n(61266),
    N = n(731068),
    y = n(619517),
    S = n(339580),
    C = n(961350),
    k = n(760751),
    R = n(403362),
    w = n(183555),
    O = n(622543),
    L = n(466853),
    P = n(985018),
    D = n(442716);
let G = /{{(.*?)}}/g,
    M = {
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
function U(e) {
    let { component: t } = e;
    if (Array.isArray(t)) return W(t);
    switch (t.type) {
        case "HERO":
            let { body: n, ...l } = t;
            return (0, i.jsx)(H, { ...l, body: W(n) });
        case "GRID":
            return (0, i.jsx)(B, { children: W(t.children) });
        case "FIELD":
            return (0, i.jsx)(X, { value: F(t.value), name: F(t.name) });
        case "TEXT":
            return (0, i.jsx)(z, { ...t });
        case "TEXT_WITH_IMAGE":
            return (0, i.jsx)(V, { ...t });
        case "SEPARATOR":
            return (0, i.jsx)(Y, { ...t });
    }
}
function F(e, t) {
    return (0, i.jsx)(U, { component: e }, t);
}
function W(e) {
    return e.map((e, t) => F(e, t));
}
function H(e) {
    let { title: t, body: n, image: l, imagePlaceholder: a } = e;
    return (0, i.jsxs)("div", {
        className: D.mY,
        children: [
            (0, i.jsxs)("div", {
                className: D.TL,
                children: [
                    (0, i.jsx)(u.Text, {
                        variant: "text-lg/medium",
                        className: D.ZY,
                        children: null != t ? t : (0, i.jsx)("div", { className: D.jC }),
                    }),
                    (0, i.jsx)(E.x, { color: "muted", children: n }),
                ],
            }),
            (0, h.c)(l)
                ? (0, i.jsx)("div", {
                      className: D.Xr,
                      children: (0, i.jsx)(y.Ay, {
                          src: l.proxyUrl,
                          alt: "",
                          width: l.width,
                          height: l.height,
                          responsive: !0,
                          className: D.c8,
                      }),
                  })
                : null != a
                  ? (0, i.jsx)("div", {
                        className: D.Xr,
                        children: (0, i.jsx)("img", { src: a, alt: "", className: D.c8 }),
                    })
                  : (0, i.jsx)("div", { className: D.Hi }),
        ],
    });
}
function B(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", { className: D.Vg, children: t });
}
function X(e) {
    let { name: t, value: n } = e;
    return (0, i.jsxs)("div", { children: [n, t] });
}
function z(e) {
    let { content: t } = e,
        n = l.useId(),
        a = (0, E.X)();
    return null != t
        ? (0, i.jsx)(b.A, { type: g.I5.TEXT_DISPLAY, id: n, content: t, className: D.Qq })
        : (0, i.jsx)("div", { className: s()(D.jC, a.className) });
}
function V(e) {
    let { content: t, image: n, imagePosition: l } = e,
        a = (0, E.X)(),
        r = (0, h.c)(n)
            ? (0, i.jsx)("div", {
                  className: s()(D.Sl, a.className),
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
              ? (0, i.jsx)("div", { className: s()(D.bc, a.className) })
              : null;
    return (0, i.jsxs)("div", {
        className: D.rQ,
        children: [
            null != r && "left" === l ? (0, i.jsxs)(i.Fragment, { children: [r, " "] }) : null,
            (0, i.jsx)(z, { content: t }),
            null != r && "right" === l ? (0, i.jsxs)(i.Fragment, { children: [" ", r] }) : null,
        ],
    });
}
function Y(e) {
    let { size: t = "small", divider: n = !1 } = e,
        a = l.useId();
    return (0, i.jsx)(T.A, {
        type: g.I5.SEPARATOR,
        id: a,
        divider: n,
        spacing: "large" === t ? g.C8.LARGE : g.C8.SMALL,
    });
}
function K(e, t) {
    if (null == e) return null;
    let n = e.split(G);
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
function q(e, t) {
    if (null == e || "skeleton" === t.mode) return null;
    let n = e.match(G)?.[0]?.slice(2, -2);
    if (null == n) return null;
    let i = t.variables[n];
    return null == i || "unfurled_media" !== i.type ? null : i.media;
}
function J(e) {
    let { children: t, widget: n } = e;
    return (0, i.jsx)(v.O7.Root, {
        containerInnerWidth: 396,
        children: (0, i.jsx)(j.f5, {
            applicationWidget: n,
            children: (0, i.jsx)(E.x, {
                size: "reduced",
                weight: "reduced",
                children: (0, i.jsx)("div", { className: D.kL, children: t }),
            }),
        }),
    });
}
function Q(e) {
    return (0, i.jsxs)(u.BJc, {
        direction: "horizontal",
        gap: 24,
        padding: 12,
        fullWidth: !1,
        className: D.lO,
        children: [
            (0, i.jsxs)(u.BJc, {
                gap: 4,
                children: [
                    e.showSuggestedForYou &&
                        (0, i.jsx)(u.Text, {
                            variant: "text-xs/medium",
                            color: "text-default",
                            children: P.intl.string(P.t.zMUr6Z),
                        }),
                    (0, i.jsx)(u.Heading, { variant: "heading-sm/medium", color: "text-default", children: e.heading }),
                    (0, i.jsx)(u.Text, { variant: "text-xs/normal", color: "text-subtle", children: e.content }),
                ],
            }),
            (0, i.jsx)(u.BJc, {
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
let Z = Object.assign(
    function (e) {
        var t, n;
        let a,
            r,
            g,
            h,
            j,
            { trackUserProfileAction: v } = (0, w.NJ)(),
            { user: E, widget: T, cta: b, subtle: y = !1 } = e,
            G = (0, d.bG)([C.default], () => C.default.getId()) === E.id,
            F = (0, _.h)(T.applicationId),
            W = F?.getIconURL(16),
            H = (0, d.bG)([k.A], () => (null != F ? k.A.getGameByApplication(F) : null)),
            B = (0, I.A)({
                location: "UserProfileApplicationWidget",
                applicationId: H?.id,
                source: A.Ob.UserProfile,
                sourceUserId: E.id,
                trackEntryPointImpression: !0,
            }),
            {
                fetched: X,
                hasAlreadyLinked: z,
                canStartAuthorization: V,
                startAuthorization: Y,
                token: Z,
            } = (0, f.RD)(F),
            { analyticsLocations: $ } = (0, x.Ay)(m.A.USER_PROFILE_APPLICATION_WIDGET),
            ee = l.useCallback(() => {
                V &&
                    (v({
                        action: z
                            ? "PRESS_APPLICATION_WIDGET_LINKED_RECONNECT"
                            : "PRESS_APPLICATION_WIDGET_UNLINKED_CONNECT",
                        applicationId: T.applicationId,
                    }),
                    Y({ analyticsLocations: $ }));
            }, [V, z, Y, v, T.applicationId, $]),
            et = null == b && X && !z && V,
            en =
                null == b &&
                X &&
                z &&
                V &&
                null != Z &&
                !Z.scopes.includes(o.F.APPLICATION_IDENTITIES_WRITE) &&
                !Z.scopes.includes(o.F.SDK_SOCIAL_LAYER) &&
                !Z.scopes.includes(o.F.SDK_SOCIAL_LAYER_PRESENCE),
            ei = (0, i.jsxs)(i.Fragment, {
                children: [
                    null != W
                        ? (0, i.jsx)("img", { className: D.Z2, src: W, width: 16, height: 16, alt: "" })
                        : (0, i.jsx)("span", { className: D.qP }),
                    (0, i.jsx)(u.Text, {
                        variant: "text-sm/medium",
                        children: F?.name != null ? F.name : (0, i.jsx)("div", { className: D.jC }),
                    }),
                ],
            }),
            el =
                null == H
                    ? (0, i.jsx)("div", { className: D.qd, children: ei })
                    : (0, i.jsx)(u.DUT, { className: s()(D.qd, D.vk), onClick: B, children: ei }),
            {
                isLoading: ea,
                hasData: es,
                components: er,
            } = ((t = E.id),
            (n = T.applicationId),
            (a = (0, p.A)()),
            (r = (0, d.bG)([S.A], () => S.A.getUserIdentityByApplication(t, n))),
            (g = (0, d.bG)([O.A], () => O.A.getApplicationWidgetConfig(n))),
            (h = (0, d.bG)([S.A, O.A], () => null == S.A.getUserIdentities(t) || null == O.A.applicationWidgetConfigs)),
            (j = l.useMemo(() => {
                var e, t;
                if (null == g) return null;
                let n = M[g.widgetTemplateId];
                if (null == n) return null;
                let i =
                    ((e = r ?? null),
                    (t = g ?? null),
                    null == e
                        ? { mode: "skeleton", config: t, numberFormat: a }
                        : {
                              mode: "from_data",
                              variables: Object.fromEntries([
                                  ...(e.profile?.data?.dynamic?.map((e) =>
                                      e.type === c.f.STRING
                                          ? [e.name, { type: "string", value: e.value }]
                                          : e.type === c.f.NUMBER
                                            ? [e.name, { type: "number", value: e.value }]
                                            : e.type === c.f.MEDIA
                                              ? [e.name, { type: "unfurled_media", media: (0, N.Uv)(e.value) }]
                                              : (0, R.xb)(e),
                                  ) ?? []),
                                  ...Object.entries({ username: e.profile?.username, ...e.profile?.data?.primary })
                                      .filter(R.QE)
                                      .map((e) => {
                                          let [t, n] = e;
                                          if ("object" == typeof n) {
                                              if ("url" in n && "proxy_url" in n && "loading_state" in n)
                                                  return [t, { type: "unfurled_media", media: (0, N.Uv)(n) }];
                                          } else if ("string" == typeof n) return [t, { type: "string", value: n }];
                                          else if ("number" == typeof n) return [t, { type: "number", value: n }];
                                          return null;
                                      })
                                      .filter(R.Vq),
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
                                title: K(t.title, i),
                                image: q(t.image, i),
                                imagePlaceholder: i.config?.heroPlaceholderImage,
                            };
                        case "GRID":
                            return { type: "GRID", children: t.children.map(e) };
                        case "FIELD":
                            return { type: "FIELD", name: e(t.name), value: e(t.value) };
                        case "TEXT":
                            return { type: "TEXT", content: K(t.content, i) };
                        case "TEXT_WITH_IMAGE":
                            return {
                                type: "TEXT_WITH_IMAGE",
                                content: K(t.content, i),
                                image: q(t.image, i),
                                imagePosition: t.imagePosition,
                            };
                        case "SEPARATOR":
                            return t;
                    }
                });
            }, [g, r, a])),
            { isLoading: h, hasData: null != r, components: j });
        return null == er
            ? null
            : (0, i.jsxs)(L.A, {
                  ...e,
                  userId: E.id,
                  widget: T,
                  className: s()(D.Y5, y && D.aK),
                  headerTitle: el,
                  headerClassName: D.wx,
                  additionalManageWidgetMenuItems:
                      null != H
                          ? (0, i.jsx)(u.Drp, {
                                id: "view-game-profile",
                                label: "View Game Profile",
                                icon: u._xR,
                                action: B,
                            })
                          : null,
                  children: [
                      (0, i.jsx)(J, { widget: T, children: (0, i.jsx)(U, { component: er }) }),
                      G &&
                          (0, i.jsxs)("div", {
                              className: D.qr,
                              children: [
                                  ea || es || et || en
                                      ? null
                                      : (0, i.jsxs)("div", {
                                            className: D.o8,
                                            children: [
                                                (0, i.jsx)(u.Qfk, { size: "xxs" }),
                                                (0, i.jsx)(u.Text, {
                                                    variant: "text-sm/medium",
                                                    color: "text-subtle",
                                                    children: P.intl.string(P.t.z5K4Uv),
                                                }),
                                            ],
                                        }),
                                  et
                                      ? (0, i.jsx)(Q, {
                                            heading: P.intl.string(P.t.UDPRLO),
                                            content: P.intl.string(P.t["OW/2al"]),
                                            buttons: (0, i.jsx)(u.Button, {
                                                text: P.intl.string(P.t.S0W8Z5),
                                                onClick: ee,
                                            }),
                                        })
                                      : en
                                        ? (0, i.jsx)(Q, {
                                              heading: P.intl.string(P.t["9WarGY"]),
                                              content: P.intl.string(P.t.qgxnKe),
                                              buttons: (0, i.jsx)(u.Button, {
                                                  text: P.intl.string(P.t.vD60Pv),
                                                  onClick: ee,
                                              }),
                                          })
                                        : b,
                              ],
                          }),
                  ],
              });
    },
    { Cta: Q },
);
