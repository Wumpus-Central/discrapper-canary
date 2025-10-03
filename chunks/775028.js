n.d(t, { Z: () => G }), n(388685), n(539854), n(472816), n(794429);
var l = n(951288),
    r = n(647438),
    i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(704215),
    c = n(692547),
    d = n(28664),
    u = n(755721),
    m = n(481060),
    h = n(239091),
    p = n(111028),
    f = n(266454),
    g = n(66999),
    x = n(549631),
    _ = n(473403),
    C = n(454585),
    b = n(22082),
    j = n(703656),
    v = n(6025),
    y = n(922482),
    O = n(601070),
    N = n(216306),
    Z = n(163),
    I = n(753540),
    w = n(70297),
    P = n(981631),
    E = n(176505),
    S = n(388032),
    T = n(444630),
    k = n(430864);
function B(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let R = new Set([P.d4z.GUILD_FORUM, P.d4z.GUILD_MEDIA]),
    D = new Set([P.d4z.GUILD_VOICE, P.d4z.GUILD_STAGE_VOICE]);
function L(e) {
    let { guild: t, channel: r, onCategoryClick: i } = e,
        o = (0, I.Mf)(t.id, r.id, r.id),
        s = (0, I.t4)(t.id, r.id, r.id);
    return (0, l.jsxs)("div", {
        className: a()(T.categoryRow, { [T.uncategorized]: "null" === r.id }),
        onContextMenu: (e) => {
            (0, h.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e("8965"), n.e("14280")]).then(n.bind(n, 139035));
                return (n) =>
                    (0, l.jsx)(
                        e,
                        A(B({}, n), {
                            channel: r,
                            guild: t,
                        }),
                    );
            });
        },
        children: [
            (0, l.jsx)(m.Text, {
                className: T.categoryText,
                color: "text-muted",
                variant: "text-sm/medium",
                lineClamp: 1,
                children: r.name,
            }),
            "null" !== r.id &&
                !s &&
                (0, l.jsxs)(m.P3F, {
                    className: T.selectAll,
                    onClick: () => {
                        s || i(t.id, r.id, r.id);
                    },
                    children: [
                        (0, l.jsx)(u.$q, {
                            className: T.selectAllCheckbox,
                            size: 14,
                            shape: u.zV.SMALL_BOX,
                            value: o,
                            type: u.M0.INVERTED,
                            displayOnly: !0,
                        }),
                        (0, l.jsx)(m.Text, {
                            color: "text-muted",
                            variant: "text-xs/medium",
                            children: S.intl.string(S.t.mSQwnZ),
                        }),
                    ],
                }),
        ],
    });
}
let M = r.memo(function () {
        return (0, l.jsx)("div", { className: T.separator });
    }),
    H = r.memo(function (e) {
        let { index: t } = e;
        return (0, l.jsx)(
            m.Text,
            {
                variant: "text-xs/normal",
                className: T.subtitleSeparator,
                children: "\xB7",
            },
            "separator-".concat(t),
        );
    }),
    U = r.memo(function (e) {
        let {
                channel: t,
                category: r,
                guild: i,
                isFirstChannel: s,
                isLastChannel: f,
                onChannelClick: Z,
                tooltipDirection: w = "right",
            } = e,
            { isSubscriptionGated: L } = (0, g.Z)(t.id),
            U = (0, I.Mf)(i.id, t.id, r.id),
            G = (0, I.t4)(i.id, t.id, r.id),
            W = (0, I.EH)(i.id, r.id),
            q = (0, o.e7)([O.Z], () => O.Z.getActiveThreadCount(i.id, t.id)),
            F = (0, o.e7)([b.Z], () => b.Z.shouldIndicateNewChannel(i.id, t.id)),
            z = (function (e, t) {
                let n = [];
                return (
                    P.TPd.GUILD_THREADS_ONLY.has(e.type) &&
                        t >= 1 &&
                        n.push(
                            (0, l.jsx)(
                                m.Text,
                                {
                                    variant: "text-xs/normal",
                                    className: T.channelSubtitle,
                                    children: S.intl.format(S.t.z0qMLy, { count: t }),
                                },
                                "thread-count",
                            ),
                        ),
                    D.has(e.type) ||
                        n.push(
                            (0, l.jsx)(
                                m.Text,
                                {
                                    variant: "text-xs/normal",
                                    className: T.channelSubtitle,
                                    children: (0, N.qw)(e.id),
                                },
                                "active",
                            ),
                        ),
                    null != e.topic &&
                        e.topic.length > 0 &&
                        n.push(
                            (0, l.jsx)(
                                p.Z,
                                {
                                    className: k.markup,
                                    children: (0, l.jsx)(m.Text, {
                                        className: T.topic,
                                        variant: "text-xs/normal",
                                        children: C.Z.parseTopic(e.topic, !0, { channelId: e.id }),
                                    }),
                                },
                                "topic",
                            ),
                        ),
                    [n.map((e, t) => [e, (0, l.jsx)(H, { index: t }, "subtitle-separator-".concat(t))])]
                        .flat(2)
                        .slice(0, -1)
                );
            })(t, q),
            X = S.intl.string(S.t.vetGQk);
        t.isGuildStageVoice() || t.isGuildVoice()
            ? (X = S.intl.string(S.t.VJlc0d))
            : t.isForumLikeChannel() && (X = S.intl.string(S.t["3xjX0d"]));
        let V = G ? "text-muted" : "text-default",
            Q = (0, m.dQu)(G ? c.Z.colors.TEXT_MUTED : c.Z.colors.TEXT_DEFAULT).hex();
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(d.u, {
                    text: W,
                    delay: 500,
                    position: w,
                    children: (0, l.jsxs)(m.P3F, {
                        className: a()(T.channelRow, {
                            [T.firstChannel]: s,
                            [T.lastChannel]: f,
                            [T.disabled]: G,
                        }),
                        onClick: (e) => {
                            if (!G) return e.stopPropagation(), Z(i.id, t.id, r.id), !0;
                        },
                        onContextMenu: (e) => {
                            t.isGuildVocal()
                                ? (0, h.jW)(e, async () => {
                                      let { default: e } = await Promise.all([
                                          n.e("79695"),
                                          n.e("18320"),
                                          n.e("83331"),
                                          n.e("81070"),
                                      ]).then(n.bind(n, 213202));
                                      return (n) =>
                                          (0, l.jsx)(
                                              e,
                                              A(B({}, n), {
                                                  channel: t,
                                                  guild: i,
                                              }),
                                          );
                                  })
                                : (0, h.jW)(e, async () => {
                                      let { default: e } = await Promise.all([
                                          n.e("79695"),
                                          n.e("18320"),
                                          n.e("44011"),
                                      ]).then(n.bind(n, 373651));
                                      return (n) =>
                                          (0, l.jsx)(
                                              e,
                                              A(B({}, n), {
                                                  channel: t,
                                                  guild: i,
                                              }),
                                          );
                                  });
                        },
                        children: [
                            (0, l.jsxs)("div", {
                                className: T.channelInfo,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: T.channelName,
                                        children: [
                                            (0, l.jsx)(_._W, {
                                                channel: t,
                                                guild: i,
                                            }),
                                            (0, l.jsx)(p.Z, {
                                                className: T.__invalid_name,
                                                children: (0, l.jsx)(m.Text, {
                                                    className: T.channelText,
                                                    variant: "text-md/medium",
                                                    lineClamp: 1,
                                                    color: V,
                                                    children: t.name,
                                                }),
                                            }),
                                            L
                                                ? (0, l.jsx)(x.Z, {
                                                      color: Q,
                                                      className: T.premiumIcon,
                                                  })
                                                : null,
                                            F
                                                ? (0, l.jsx)(m.IGR, {
                                                      text: S.intl.string(S.t.y2b7CA),
                                                      color: c.Z.unsafe_rawColors.BRAND_260.css,
                                                      className: T.titleBadge,
                                                  })
                                                : null,
                                        ],
                                    }),
                                    (0, l.jsx)("div", {
                                        className: T.channelSubtitles,
                                        children: z,
                                    }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: T.channelActions,
                                children: [
                                    (0, l.jsx)("div", {
                                        className: T.viewChannelButtonWrapper,
                                        children: (0, l.jsx)(m.zxk, {
                                            size: "sm",
                                            variant: "overlay-primary",
                                            onClick: (e) => (
                                                (e.stopPropagation(), R.has(t.type) || e.shiftKey)
                                                    ? (0, j.XU)(i.id, t.id)
                                                    : t.isGuildStageVoice() || t.isGuildVoice()
                                                      ? (0, y.Cq)(t)
                                                      : v.Z.openChannelAsSidebar({
                                                            guildId: t.guild_id,
                                                            channelId: t.id,
                                                            baseChannelId: E.oC.CHANNEL_BROWSER,
                                                        }),
                                                !0
                                            ),
                                            text: X,
                                        }),
                                    }),
                                    (0, l.jsx)(u.$q, {
                                        "aria-checked": U,
                                        value: U,
                                        type: u.M0.INVERTED,
                                        disabled: G,
                                        innerClassName: T.checkboxInner,
                                        displayOnly: !0,
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
                !f && (0, l.jsx)(M, {}),
            ],
        });
    });
function G(e) {
    let { categories: t, guild: n, className: i, innerClassName: o, hasSidebar: c } = e,
        { onChannelClick: d } = (0, Z.Z)(n.id),
        u = (0, f.Nj)(s.z.CHANNEL_BROWSER_NUX) ? 0 : -1,
        h = r.useCallback(
            (e) => {
                let { section: r } = e;
                if (0 === r && -1 === u) return null;
                let i = t._categories[r + u];
                return (0, l.jsx)(
                    L,
                    {
                        channel: i.channel,
                        guild: n,
                        onCategoryClick: d,
                    },
                    i.channel.id,
                );
            },
            [t, n, u, d],
        ),
        p = r.useCallback(
            (e) => {
                let { section: r, row: i } = e;
                if (0 === r && -1 === u) return (0, l.jsx)(w.Z, { guild: n });
                let a = t._categories[r + u],
                    o = t[a.channel.id][i];
                return null == o
                    ? null
                    : (0, l.jsx)(
                          U,
                          {
                              category: a.channel,
                              channel: o.channel,
                              guild: n,
                              isFirstChannel: 0 === i,
                              isLastChannel: t[a.channel.id].length - 1 === i,
                              tooltipDirection: c ? "right" : "top",
                              onChannelClick: d,
                          },
                          o.channel.id,
                      );
            },
            [t, n, u, c, d],
        ),
        g = (0, w.q)(n.id),
        x = (0, N.tn)(n.id, t, 64, g);
    return (0, l.jsx)(
        m._2F,
        {
            className: i,
            innerClassName: a()(o, T.scrollerInner),
            sectionHeight: 48,
            rowHeight: (e) => x[e].rowHeight,
            renderSection: h,
            renderRow: p,
            sections: x.map((e) => e.rowCount),
        },
        "channel-browser-list",
    );
}
