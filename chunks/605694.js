n.d(t, { A: () => ea });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(485584),
    o = n(598748),
    d = n(205338),
    c = n(179771),
    u = n(87075),
    h = n(311907),
    A = n(397927),
    _ = n(155718),
    m = n(793574),
    p = n(688810),
    g = n(362490),
    f = n(369374),
    E = n(531913),
    x = n(385771),
    I = n(789069),
    C = n(429913),
    N = n(409626),
    T = n(692969),
    S = n(207963),
    b = n(953756),
    y = n(647901),
    v = n(371068),
    R = n(61266),
    j = n(731068),
    O = n(619517),
    L = n(339580),
    M = n(961350),
    D = n(760751),
    U = n(403362),
    G = n(183555),
    P = n(622543),
    k = n(466853),
    w = n(985018),
    B = n(414675);
function V(e) {
    let { trackUserProfileAction: t } = (0, G.NJ)(),
        { user: n, widget: s, cta: r } = e,
        o = (0, h.bG)([M.default], () => M.default.getId()) === n.id,
        d = (0, C.h)(s.applicationId),
        u = d?.getIconURL(16),
        _ = (0, h.bG)([D.A], () => (null != d ? D.A.getGameByApplication(d) : null)),
        f = (0, T.A)({
            location: "UserProfileApplicationWidget",
            applicationId: _?.id,
            source: N.Ob.UserProfile,
            sourceUserId: n.id,
            trackEntryPointImpression: !0,
        }),
        { fetched: E, hasAlreadyLinked: x, canStartAuthorization: I, startAuthorization: S, token: b } = (0, g.RD)(d),
        { analyticsLocations: y } = (0, p.Ay)(m.A.USER_PROFILE_APPLICATION_WIDGET),
        v = l.useCallback(() => {
            I &&
                (t({
                    action: x
                        ? "PRESS_APPLICATION_WIDGET_LINKED_RECONNECT"
                        : "PRESS_APPLICATION_WIDGET_UNLINKED_CONNECT",
                    applicationId: s.applicationId,
                }),
                S({ analyticsLocations: y }));
        }, [I, x, S, t, s.applicationId, y]),
        R = null == r && E && !x && I,
        j =
            null == r &&
            E &&
            x &&
            I &&
            null != b &&
            !b.scopes.includes(c.F.APPLICATION_IDENTITIES_WRITE) &&
            !b.scopes.includes(c.F.SDK_SOCIAL_LAYER) &&
            !b.scopes.includes(c.F.SDK_SOCIAL_LAYER_PRESENCE),
        O = (0, i.jsxs)(i.Fragment, {
            children: [
                null != u
                    ? (0, i.jsx)("img", { className: B.Z2, src: u, width: 16, height: 16, alt: "" })
                    : (0, i.jsx)("span", { className: B.qP }),
                (0, i.jsx)(A.Text, {
                    variant: "text-sm/medium",
                    children: d?.name != null ? d.name : (0, i.jsx)("div", { className: B.jC }),
                }),
            ],
        }),
        L =
            null == _
                ? (0, i.jsx)("div", { className: B.qd, children: O })
                : (0, i.jsx)(A.DUT, { className: a()(B.qd, B.vk), onClick: f, children: O });
    return {
        isCurrentUser: o,
        game: _,
        openGameProfileModal: f,
        handleConnect: v,
        showConnectCta: R,
        showReconnectCta: j,
        headerTitle: L,
    };
}
function H(e) {
    let {
        isCurrentUser: t,
        isLoading: n,
        hasData: l,
        showConnectCta: s,
        showReconnectCta: r,
        handleConnect: o,
        disableCTA: d,
        cta: c,
        v2: u = !1,
    } = e;
    return !t || d
        ? null
        : (0, i.jsxs)("div", {
              className: a()(B.qr, u && B.v2),
              children: [
                  n || l || s || r
                      ? null
                      : (0, i.jsxs)("div", {
                            className: B.o8,
                            children: [
                                (0, i.jsx)(A.Qfk, { size: "xxs" }),
                                (0, i.jsx)(A.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-subtle",
                                    children: w.intl.string(w.t.z5K4Uv),
                                }),
                            ],
                        }),
                  s
                      ? (0, i.jsx)(F, {
                            heading: w.intl.string(w.t.UDPRLO),
                            content: w.intl.string(w.t["OW/2al"]),
                            buttons: (0, i.jsx)(A.Button, { text: w.intl.string(w.t.S0W8Z5), onClick: o }),
                        })
                      : r
                        ? (0, i.jsx)(F, {
                              heading: w.intl.string(w.t["9WarGY"]),
                              content: w.intl.string(w.t.qgxnKe),
                              buttons: (0, i.jsx)(A.Button, { text: w.intl.string(w.t.vD60Pv), onClick: o }),
                          })
                        : c,
              ],
          });
}
function F(e) {
    return (0, i.jsxs)(A.BJc, {
        direction: "horizontal",
        gap: 24,
        padding: 12,
        fullWidth: !1,
        className: B.lO,
        children: [
            (0, i.jsxs)(A.BJc, {
                gap: 4,
                children: [
                    e.showSuggestedForYou &&
                        (0, i.jsx)(A.Text, {
                            variant: "text-xs/medium",
                            color: "text-default",
                            children: w.intl.string(w.t.zMUr6Z),
                        }),
                    (0, i.jsx)(A.Heading, { variant: "heading-sm/medium", color: "text-default", children: e.heading }),
                    (0, i.jsx)(A.Text, { variant: "text-xs/normal", color: "text-subtle", children: e.content }),
                ],
            }),
            (0, i.jsx)(A.BJc, {
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
let W = /{{(.*?)}}/g,
    K = {
        [d.A.MARVEL_RIVALS]: [
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
        [d.A.WUTHERING_WAVES]: [
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
function Y(e) {
    let { component: t } = e;
    if (Array.isArray(t)) return X(t);
    switch (t.type) {
        case "HERO":
            let { body: n, ...l } = t;
            return (0, i.jsx)(q, { ...l, body: X(n) });
        case "GRID":
            return (0, i.jsx)($, { children: X(t.children) });
        case "FIELD":
            return (0, i.jsx)(J, { value: z(t.value), name: z(t.name) });
        case "TEXT":
            return (0, i.jsx)(Q, { ...t });
        case "TEXT_WITH_IMAGE":
            return (0, i.jsx)(Z, { ...t });
        case "SEPARATOR":
            return (0, i.jsx)(ee, { ...t });
    }
}
function z(e, t) {
    return (0, i.jsx)(Y, { component: e }, t);
}
function X(e) {
    return e.map((e, t) => z(e, t));
}
function q(e) {
    let { title: t, body: n, image: l, imagePlaceholder: s } = e;
    return (0, i.jsxs)("div", {
        className: B.mY,
        children: [
            (0, i.jsxs)("div", {
                className: B.TL,
                children: [
                    (0, i.jsx)(A.Text, {
                        variant: "text-lg/medium",
                        className: B.ZY,
                        children: null != t ? t : (0, i.jsx)("div", { className: B.jC }),
                    }),
                    (0, i.jsx)(y.x, { color: "muted", children: n }),
                ],
            }),
            (0, I.c)(l)
                ? (0, i.jsx)("div", {
                      className: B.Xr,
                      children: (0, i.jsx)(O.Ay, {
                          src: l.proxyUrl,
                          alt: "",
                          width: l.width,
                          height: l.height,
                          responsive: !0,
                          className: B.c8,
                      }),
                  })
                : null != s
                  ? (0, i.jsx)("div", {
                        className: B.Xr,
                        children: (0, i.jsx)("img", { src: s, alt: "", className: B.c8 }),
                    })
                  : (0, i.jsx)("div", { className: B.Hi }),
        ],
    });
}
function $(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", { className: B.Vg, children: t });
}
function J(e) {
    let { name: t, value: n } = e;
    return (0, i.jsxs)("div", { children: [n, t] });
}
function Q(e) {
    let { content: t } = e,
        n = l.useId(),
        s = (0, y.X)();
    return null != t
        ? (0, i.jsx)(R.A, { type: _.I5.TEXT_DISPLAY, id: n, content: t, className: B.Qq })
        : (0, i.jsx)("div", { className: a()(B.jC, s.className) });
}
function Z(e) {
    let { content: t, image: n, imagePosition: l } = e,
        s = (0, y.X)(),
        r = (0, I.c)(n)
            ? (0, i.jsx)("div", {
                  className: a()(B.Sl, s.className),
                  "data-position": l,
                  children: (0, i.jsx)(O.Ay, {
                      src: n.proxyUrl,
                      alt: "",
                      width: n.width,
                      height: n.height,
                      responsive: !0,
                  }),
              })
            : null == t
              ? (0, i.jsx)("div", { className: a()(B.bc, s.className) })
              : null;
    return (0, i.jsxs)("div", {
        className: B.rQ,
        children: [
            null != r && "left" === l ? (0, i.jsxs)(i.Fragment, { children: [r, " "] }) : null,
            (0, i.jsx)(Q, { content: t }),
            null != r && "right" === l ? (0, i.jsxs)(i.Fragment, { children: [" ", r] }) : null,
        ],
    });
}
function ee(e) {
    let { size: t = "small", divider: n = !1 } = e,
        s = l.useId();
    return (0, i.jsx)(v.A, {
        type: _.I5.SEPARATOR,
        id: s,
        divider: n,
        spacing: "large" === t ? _.C8.LARGE : _.C8.SMALL,
    });
}
function et(e, t) {
    if (null == e) return null;
    let n = e.split(W);
    if (1 === n.length) return n[0];
    if ("skeleton" === t.mode) return null;
    let i = "";
    for (let e = 0; e < n.length; e++) {
        let l = n[e];
        if (e % 2 == 0) {
            i += l;
            continue;
        }
        let s = t.variables[l];
        null == s
            ? (i += "––")
            : "unfurled_media" === s.type
              ? (i += s.media.url)
              : "number" === s.type
                ? (i += t.numberFormat.format(s.value))
                : "string" === s.type && (i += s.value);
    }
    return i;
}
function en(e, t) {
    if (null == e || "skeleton" === t.mode) return null;
    let n = e.match(W)?.[0]?.slice(2, -2);
    if (null == n) return null;
    let i = t.variables[n];
    return null == i || "unfurled_media" !== i.type ? null : i.media;
}
function ei(e) {
    let { children: t, widget: n } = e;
    return (0, i.jsx)(b.O7.Root, {
        containerInnerWidth: 396,
        children: (0, i.jsx)(S.f5, {
            applicationWidget: n,
            children: (0, i.jsx)(y.x, {
                size: "reduced",
                weight: "reduced",
                children: (0, i.jsx)("div", { className: B.kL, children: t }),
            }),
        }),
    });
}
function el(e) {
    var t, n;
    let s,
        r,
        o,
        d,
        c,
        { user: _, widget: m, disableCTA: p, cta: g, subtle: f = !1, embedded: E = !1 } = e,
        I = V(e),
        {
            isLoading: C,
            hasData: N,
            components: T,
        } = ((t = _.id),
        (n = m.applicationId),
        (s = (0, x.A)()),
        (r = (0, h.bG)([L.A], () => L.A.getUserIdentityByApplication(t, n))),
        (o = (0, h.bG)([P.A], () => P.A.getApplicationWidgetConfig(n))),
        (d = (0, h.bG)([L.A, P.A], () => null == L.A.getUserIdentities(t) || null == P.A.applicationWidgetConfigs)),
        (c = l.useMemo(() => {
            var e, t;
            if (null == o) return null;
            let n = K[o.widgetTemplateId];
            if (null == n) return null;
            let i =
                ((e = r ?? null),
                (t = o ?? null),
                null == e
                    ? { mode: "skeleton", config: t, numberFormat: s }
                    : {
                          mode: "from_data",
                          variables: Object.fromEntries([
                              ...(e.profile?.data?.dynamic?.map((e) =>
                                  e.type === u.f.STRING
                                      ? [e.name, { type: "string", value: e.value }]
                                      : e.type === u.f.NUMBER
                                        ? [e.name, { type: "number", value: e.value }]
                                        : e.type === u.f.MEDIA
                                          ? [e.name, { type: "unfurled_media", media: (0, j.Uv)(e.value) }]
                                          : (0, U.xb)(e),
                              ) ?? []),
                              ...Object.entries({ username: e.profile?.username, ...e.profile?.data?.primary })
                                  .filter(U.QE)
                                  .map((e) => {
                                      let [t, n] = e;
                                      if ("object" == typeof n) {
                                          if ("url" in n && "proxy_url" in n && "loading_state" in n)
                                              return [t, { type: "unfurled_media", media: (0, j.Uv)(n) }];
                                      } else if ("string" == typeof n) return [t, { type: "string", value: n }];
                                      else if ("number" == typeof n) return [t, { type: "number", value: n }];
                                      return null;
                                  })
                                  .filter(U.Vq),
                          ]),
                          config: t,
                          numberFormat: s,
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
        }, [o, r, s])),
        { isLoading: d, hasData: null != r, components: c });
    return null == T
        ? null
        : (0, i.jsxs)(k.A, {
              ...e,
              userId: _.id,
              widget: m,
              className: a()(B.Y5, { [B.aK]: f, [B.F9]: E }),
              headerTitle: I.headerTitle,
              headerClassName: B.wx,
              additionalManageWidgetMenuItems:
                  null != I.game
                      ? (0, i.jsx)(A.Drp, {
                            id: "view-game-profile",
                            label: "View Game Profile",
                            icon: A._xR,
                            action: I.openGameProfileModal,
                        })
                      : null,
              children: [
                  (0, i.jsx)(ei, { widget: m, children: (0, i.jsx)(Y, { component: T }) }),
                  (0, i.jsx)(H, {
                      isCurrentUser: I.isCurrentUser,
                      isLoading: C,
                      hasData: N,
                      showConnectCta: I.showConnectCta,
                      showReconnectCta: I.showReconnectCta,
                      handleConnect: I.handleConnect,
                      disableCTA: p,
                      cta: g,
                  }),
              ],
          });
}
function es(e) {
    let { user: t, widget: n, disableCTA: l, cta: s, subtle: d = !1, embedded: c = !1 } = e,
        u = V(e),
        h = (0, E.A)(t.id, n.applicationId),
        _ = h.surfaceConfigs[o.m.WIDGET_TOP],
        m = h.surfaceConfigs[o.m.WIDGET_BOTTOM];
    return null == _ || null == m
        ? null
        : (0, i.jsxs)(k.A, {
              ...e,
              userId: t.id,
              widget: n,
              className: a()(B.Y5, B.v2, { [B.aK]: d, [B.F9]: c }),
              headerClassName: B.vX,
              additionalManageWidgetMenuItems:
                  null != u.game
                      ? (0, i.jsx)(A.Drp, {
                            id: "view-game-profile",
                            label: "View Game Profile",
                            icon: A._xR,
                            action: u.openGameProfileModal,
                        })
                      : null,
              children: [
                  (0, i.jsx)(r.kH, { ...h, surface: o.m.WIDGET_TOP, surfaceConfig: _, header: u.headerTitle }),
                  (0, i.jsx)(A.cGx, {}),
                  (0, i.jsx)(r.kH, { ...h, surface: o.m.WIDGET_BOTTOM, surfaceConfig: m }),
                  (0, i.jsx)(H, {
                      isCurrentUser: u.isCurrentUser,
                      isLoading: h.isLoading,
                      hasData: h.hasIdentity,
                      showConnectCta: u.showConnectCta,
                      showReconnectCta: u.showReconnectCta,
                      handleConnect: u.handleConnect,
                      disableCTA: l,
                      cta: s,
                      v2: !0,
                  }),
              ],
          });
}
let ea = Object.assign(
    function (e) {
        let { enabled: t } = f.A.useConfig({ location: "UserProfileApplicationWidget" });
        return t ? (0, i.jsx)(es, { ...e }) : (0, i.jsx)(el, { ...e });
    },
    { Cta: F },
);
