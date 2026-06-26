n.d(t, { A: () => eh });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(285674),
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
    T = n(477782),
    y = n(687966),
    j = n(404778),
    I = n(155718),
    v = n(793574),
    A = n(688810),
    _ = n(46225),
    R = n(369374),
    b = n(531913),
    D = n(385771),
    N = n(789069),
    C = n(429913),
    P = n(409626),
    w = n(692969),
    L = n(569926),
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
        { user: n, widget: l, cta: s } = e,
        o = (0, m.bG)([H.default], () => H.default.getId()) === n.id,
        c = (0, C.h)(l.applicationId),
        u = c?.getIconURL(16),
        g = (function (e) {
            let t = e?.getCanonicalGameId(),
                { data: n } = (0, L.I)(t);
            return n;
        })(c),
        x = (0, w.A)({
            location: "UserProfileApplicationWidget",
            applicationId: g?.id,
            source: P.Ob.UserProfile,
            sourceUserId: n.id,
            trackEntryPointImpression: !0,
        }),
        { fetched: f, hasAlreadyLinked: E, canStartAuthorization: T, startAuthorization: y, token: j } = (0, _.RD)(c),
        { analyticsLocations: I } = (0, A.Ay)(v.A.USER_PROFILE_APPLICATION_WIDGET),
        R = a.useCallback(() => {
            T &&
                (t({
                    action: E
                        ? "PRESS_APPLICATION_WIDGET_LINKED_RECONNECT"
                        : "PRESS_APPLICATION_WIDGET_UNLINKED_CONNECT",
                    applicationId: l.applicationId,
                }),
                y({ analyticsLocations: I }));
        }, [T, E, y, t, l.applicationId, I]),
        b = null == s && f && !E && T,
        D =
            null == s &&
            f &&
            E &&
            T &&
            null != j &&
            !Array.from(d._.APPLICATION_IDENTITIES_SCOPES).some((e) => j.scopes.includes(e)) &&
            !j.scopes.includes(d.F.SDK_SOCIAL_LAYER) &&
            !j.scopes.includes(d.F.SDK_SOCIAL_LAYER_PRESENCE),
        N = (0, i.jsxs)(i.Fragment, {
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
                ? (0, i.jsx)("div", { className: B.qd, children: N })
                : (0, i.jsx)(h.D, { className: r()(B.qd, B.vk), onClick: x, children: N });
    return {
        isCurrentUser: o,
        game: g,
        openGameProfileModal: x,
        handleConnect: R,
        showConnectCta: b,
        showReconnectCta: D,
        headerTitle: S,
    };
}
function Z(e) {
    let {
        isCurrentUser: t,
        isLoading: n,
        hasData: a,
        showConnectCta: l,
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
                  n || a || l || s
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
                  l
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
            let { body: n, ...a } = t;
            return (0, i.jsx)(ei, { ...a, body: en(n) });
        case "GRID":
            return (0, i.jsx)(ea, { children: en(t.children) });
        case "FIELD":
            return (0, i.jsx)(el, { value: et(t.value), name: et(t.name) });
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
    let { title: t, body: n, image: a, imagePlaceholder: l } = e;
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
            (0, N.c)(a)
                ? (0, i.jsx)("div", {
                      className: B.Xr,
                      children: (0, i.jsx)(M.Ay, {
                          src: a.proxyUrl,
                          alt: "",
                          width: a.width,
                          height: a.height,
                          responsive: !0,
                          className: B.c8,
                      }),
                  })
                : null != l
                  ? (0, i.jsx)("div", {
                        className: B.Xr,
                        children: (0, i.jsx)("img", { src: l, alt: "", className: B.c8 }),
                    })
                  : (0, i.jsx)("div", { className: B.Hi }),
        ],
    });
}
function ea(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", { className: B.Vg, children: t });
}
function el(e) {
    let { name: t, value: n } = e;
    return (0, i.jsxs)("div", { children: [n, t] });
}
function er(e) {
    let { content: t } = e,
        n = a.useId(),
        l = (0, G.X)();
    return null != t
        ? (0, i.jsx)(W.A, { type: I.I5.TEXT_DISPLAY, id: n, content: t, className: B.Qq })
        : (0, i.jsx)("div", { className: r()(B.jC, l.className) });
}
function es(e) {
    let { content: t, image: n, imagePosition: a } = e,
        l = (0, G.X)(),
        s = (0, N.c)(n)
            ? (0, i.jsx)("div", {
                  className: r()(B.Sl, l.className),
                  "data-position": a,
                  children: (0, i.jsx)(M.Ay, {
                      src: n.proxyUrl,
                      alt: "",
                      width: n.width,
                      height: n.height,
                      responsive: !0,
                  }),
              })
            : null == t
              ? (0, i.jsx)("div", { className: r()(B.bc, l.className) })
              : null;
    return (0, i.jsxs)("div", {
        className: B.rQ,
        children: [
            null != s && "left" === a ? (0, i.jsxs)(i.Fragment, { children: [s, " "] }) : null,
            (0, i.jsx)(er, { content: t }),
            null != s && "right" === a ? (0, i.jsxs)(i.Fragment, { children: [" ", s] }) : null,
        ],
    });
}
function eo(e) {
    let { size: t = "small", divider: n = !1 } = e,
        l = a.useId();
    return (0, i.jsx)(X.A, {
        type: I.I5.SEPARATOR,
        id: l,
        divider: n,
        spacing: "large" === t ? I.C8.LARGE : I.C8.SMALL,
    });
}
function ec(e, t) {
    if (null == e) return null;
    let n = e.split(Q);
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
        if (null == l) i += "\u2013\u2013";
        else
            switch (l.type) {
                case "unfurled_media":
                    i += l.media.url;
                    break;
                case "number":
                    i += t.numberFormat.format(l.value);
                    break;
                case "string":
                    i += l.value;
            }
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
    let l,
        s,
        o,
        c,
        d,
        {
            user: p,
            widget: h,
            disableCTA: g,
            cta: x,
            subtle: f = !1,
            embedded: E = !1,
            allowEditing: j,
            disableInteraction: I,
            index: v,
            trailingContent: A,
        } = e,
        _ = q(e),
        {
            isLoading: R,
            hasData: b,
            components: N,
        } = ((t = p.id),
        (n = h.applicationId),
        (l = (0, D.A)()),
        (s = (0, m.bG)([F.A], () => F.A.getUserIdentityByApplication(t, n))),
        (o = (0, m.bG)([z.A], () => z.A.getApplicationWidgetConfig(n))),
        (c = (0, m.bG)([F.A, z.A], () => null == F.A.getUserIdentities(t) || null == z.A.applicationWidgetConfigs)),
        (d = a.useMemo(() => {
            var e, t;
            if (null == o) return null;
            let n = $[o.widgetTemplateId];
            if (null == n) return null;
            let i =
                ((e = s ?? null),
                (t = o ?? null),
                null == e
                    ? { mode: "skeleton", config: t, numberFormat: l }
                    : {
                          mode: "from_data",
                          variables: Object.fromEntries([
                              ...(e.profile?.data?.dynamic?.map((e) => {
                                  switch (e.type) {
                                      case u.f.STRING:
                                          return [e.name, { type: "string", value: e.value }];
                                      case u.f.NUMBER:
                                          return [e.name, { type: "number", value: e.value }];
                                      case u.f.MEDIA:
                                          return [e.name, { type: "unfurled_media", media: (0, k.Uv)(e.value) }];
                                      default:
                                          return (0, U.xb)(e);
                                  }
                              }) ?? []),
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
                          numberFormat: l,
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
        }, [o, s, l])),
        { isLoading: c, hasData: null != s, components: d });
    return null == N
        ? null
        : (0, i.jsxs)(V.A, {
              userId: p.id,
              widget: h,
              allowEditing: j,
              disableInteraction: I,
              index: v,
              trailingContent: A,
              className: r()(B.Y5, { [B.aK]: f, [B.F9]: E }),
              headerTitle: _.headerTitle,
              headerClassName: B.wx,
              additionalManageWidgetMenuItems:
                  null != _.game
                      ? (0, i.jsx)(T.Dr, {
                            id: "view-game-profile",
                            label: "View Game Profile",
                            icon: y._,
                            action: _.openGameProfileModal,
                        })
                      : null,
              children: [
                  (0, i.jsx)(eu, { widget: h, children: (0, i.jsx)(ee, { component: N }) }),
                  (0, i.jsx)(Z, {
                      isCurrentUser: _.isCurrentUser,
                      isLoading: R,
                      hasData: b,
                      showConnectCta: _.showConnectCta,
                      showReconnectCta: _.showReconnectCta,
                      handleConnect: _.handleConnect,
                      disableCTA: g,
                      cta: x,
                  }),
              ],
          });
}
function ep(e) {
    let {
            user: t,
            widget: n,
            disableCTA: a,
            cta: l,
            subtle: c = !1,
            embedded: d = !1,
            allowEditing: u,
            disableInteraction: m,
            index: p,
            trailingContent: h,
        } = e,
        g = q(e),
        x = (0, b.A)(t.id, n.applicationId),
        f = x.surfaceConfigs[o.m.WIDGET_TOP],
        E = x.surfaceConfigs[o.m.WIDGET_BOTTOM];
    return null == f || null == E
        ? null
        : (0, i.jsxs)(V.A, {
              userId: t.id,
              widget: n,
              allowEditing: u,
              disableInteraction: m,
              index: p,
              trailingContent: h,
              className: r()(B.Y5, B.v2, { [B.aK]: c, [B.F9]: d }),
              headerClassName: B.vX,
              additionalManageWidgetMenuItems:
                  null != g.game
                      ? (0, i.jsx)(T.Dr, {
                            id: "view-game-profile",
                            label: "View Game Profile",
                            icon: y._,
                            action: g.openGameProfileModal,
                        })
                      : null,
              children: [
                  (0, i.jsx)(s.kH, { ...x, surface: o.m.WIDGET_TOP, surfaceConfig: f, header: g.headerTitle }),
                  (0, i.jsx)(j.c, {}),
                  (0, i.jsx)(s.kH, { ...x, surface: o.m.WIDGET_BOTTOM, surfaceConfig: E }),
                  (0, i.jsx)(Z, {
                      isCurrentUser: g.isCurrentUser,
                      isLoading: x.isLoading,
                      hasData: x.hasIdentity,
                      showConnectCta: g.showConnectCta,
                      showReconnectCta: g.showReconnectCta,
                      handleConnect: g.handleConnect,
                      disableCTA: a,
                      cta: l,
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
