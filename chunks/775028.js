t.d(n, { Z: () => W }), t(388685), t(539854), t(472816), t(794429);
var l = t(951288),
    r = t(647438),
    i = t(120356),
    a = t.n(i),
    o = t(442837),
    s = t(704215),
    c = t(692547),
    d = t(194983),
    u = t(28664),
    m = t(755721),
    h = t(481060),
    p = t(239091),
    f = t(266454),
    g = t(66999),
    x = t(549631),
    _ = t(473403),
    C = t(454585),
    b = t(22082),
    j = t(703656),
    v = t(6025),
    y = t(922482),
    O = t(601070),
    N = t(216306),
    Z = t(163),
    I = t(753540),
    w = t(70297),
    P = t(981631),
    E = t(176505),
    S = t(388032),
    T = t(444630),
    B = t(430864);
function A(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            l = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            l.forEach(function (n) {
                var l;
                (l = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = l);
            });
    }
    return e;
}
function R(e, n) {
    return (
        (n = null != n ? n : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : (function (e, n) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, l);
                  }
                  return t;
              })(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              }),
        e
    );
}
let k = new Set([P.d4z.GUILD_FORUM, P.d4z.GUILD_MEDIA]),
    D = new Set([P.d4z.GUILD_VOICE, P.d4z.GUILD_STAGE_VOICE]);
function L(e) {
    let { guild: n, channel: r, onCategoryClick: i } = e,
        o = (0, I.Mf)(n.id, r.id, r.id),
        s = (0, I.t4)(n.id, r.id, r.id);
    return (0, l.jsxs)("div", {
        className: a()(T.categoryRow, { [T.uncategorized]: "null" === r.id }),
        onContextMenu: (e) => {
            (0, p.jW)(e, async () => {
                let { default: e } = await Promise.all([t.e("8965"), t.e("14280")]).then(t.bind(t, 139035));
                return (t) =>
                    (0, l.jsx)(
                        e,
                        R(A({}, t), {
                            channel: r,
                            guild: n,
                        }),
                    );
            });
        },
        children: [
            (0, l.jsx)(h.Text, {
                className: T.categoryText,
                color: "text-muted",
                variant: "text-sm/medium",
                lineClamp: 1,
                children: r.name,
            }),
            "null" !== r.id &&
                !s &&
                (0, l.jsxs)(h.P3F, {
                    className: T.selectAll,
                    onClick: () => {
                        s || i(n.id, r.id, r.id);
                    },
                    children: [
                        (0, l.jsx)(m.$q, {
                            className: T.selectAllCheckbox,
                            size: 14,
                            shape: m.zV.SMALL_BOX,
                            value: o,
                            type: m.M0.INVERTED,
                            displayOnly: !0,
                        }),
                        (0, l.jsx)(h.Text, {
                            color: "text-muted",
                            variant: "text-xs/medium",
                            children: S.intl.string(S.t.mSQwnW),
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
        let { index: n } = e;
        return (0, l.jsx)(
            h.Text,
            {
                variant: "text-xs/normal",
                className: T.subtitleSeparator,
                children: "\xB7",
            },
            "separator-".concat(n),
        );
    }),
    U = r.memo(function (e) {
        let {
                channel: n,
                category: r,
                guild: i,
                isFirstChannel: s,
                isLastChannel: f,
                onChannelClick: Z,
                tooltipDirection: w = "right",
            } = e,
            { isSubscriptionGated: L } = (0, g.Z)(n.id),
            U = (0, I.Mf)(i.id, n.id, r.id),
            W = (0, I.t4)(i.id, n.id, r.id),
            G = (0, I.EH)(i.id, r.id),
            F = (0, o.e7)([O.Z], () => O.Z.getActiveThreadCount(i.id, n.id)),
            q = (0, o.e7)([b.Z], () => b.Z.shouldIndicateNewChannel(i.id, n.id)),
            z = (function (e, n) {
                let t = [];
                return (
                    P.TPd.GUILD_THREADS_ONLY.has(e.type) &&
                        n >= 1 &&
                        t.push(
                            (0, l.jsx)(
                                h.Text,
                                {
                                    variant: "text-xs/normal",
                                    className: T.channelSubtitle,
                                    children: S.intl.format(S.t.z0qML2, { count: n }),
                                },
                                "thread-count",
                            ),
                        ),
                    D.has(e.type) ||
                        t.push(
                            (0, l.jsx)(
                                h.Text,
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
                        t.push(
                            (0, l.jsx)(
                                d.Z,
                                {
                                    className: B.markup,
                                    children: (0, l.jsx)(h.Text, {
                                        className: T.topic,
                                        variant: "text-xs/normal",
                                        children: C.Z.parseTopic(e.topic, !0, { channelId: e.id }),
                                    }),
                                },
                                "topic",
                            ),
                        ),
                    [t.map((e, n) => [e, (0, l.jsx)(H, { index: n }, "subtitle-separator-".concat(n))])]
                        .flat(2)
                        .slice(0, -1)
                );
            })(n, F),
            V = S.intl.string(S.t.vetGQs);
        n.isGuildStageVoice() || n.isGuildVoice()
            ? (V = S.intl.string(S.t.VJlc0S))
            : n.isForumLikeChannel() && (V = S.intl.string(S.t["3xjX0U"]));
        let X = W ? "text-muted" : "text-default",
            Q = (0, h.dQu)(W ? c.Z.colors.TEXT_MUTED : c.Z.colors.TEXT_DEFAULT).hex();
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(u.u, {
                    text: G,
                    delay: 500,
                    position: w,
                    children: (0, l.jsxs)(h.P3F, {
                        className: a()(T.channelRow, {
                            [T.firstChannel]: s,
                            [T.lastChannel]: f,
                            [T.disabled]: W,
                        }),
                        onClick: (e) => {
                            if (!W) return e.stopPropagation(), Z(i.id, n.id, r.id), !0;
                        },
                        onContextMenu: (e) => {
                            n.isGuildVocal()
                                ? (0, p.jW)(e, async () => {
                                      let { default: e } = await Promise.all([
                                          t.e("79695"),
                                          t.e("18320"),
                                          t.e("83331"),
                                          t.e("81070"),
                                      ]).then(t.bind(t, 213202));
                                      return (t) =>
                                          (0, l.jsx)(
                                              e,
                                              R(A({}, t), {
                                                  channel: n,
                                                  guild: i,
                                              }),
                                          );
                                  })
                                : (0, p.jW)(e, async () => {
                                      let { default: e } = await Promise.all([
                                          t.e("79695"),
                                          t.e("18320"),
                                          t.e("44011"),
                                      ]).then(t.bind(t, 373651));
                                      return (t) =>
                                          (0, l.jsx)(
                                              e,
                                              R(A({}, t), {
                                                  channel: n,
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
                                                channel: n,
                                                guild: i,
                                            }),
                                            (0, l.jsx)(d.Z, {
                                                className: T.__invalid_name,
                                                children: (0, l.jsx)(h.Text, {
                                                    className: T.channelText,
                                                    variant: "text-md/medium",
                                                    lineClamp: 1,
                                                    color: X,
                                                    children: n.name,
                                                }),
                                            }),
                                            L
                                                ? (0, l.jsx)(x.Z, {
                                                      color: Q,
                                                      className: T.premiumIcon,
                                                  })
                                                : null,
                                            q
                                                ? (0, l.jsx)(h.IGR, {
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
                                        children: (0, l.jsx)(h.Button, {
                                            size: "sm",
                                            variant: "overlay-primary",
                                            onClick: (e) => (
                                                (e.stopPropagation(), k.has(n.type) || e.shiftKey)
                                                    ? (0, j.XU)(i.id, n.id)
                                                    : n.isGuildStageVoice() || n.isGuildVoice()
                                                      ? (0, y.Cq)(n)
                                                      : v.Z.openChannelAsSidebar({
                                                            guildId: n.guild_id,
                                                            channelId: n.id,
                                                            baseChannelId: E.oC.CHANNEL_BROWSER,
                                                        }),
                                                !0
                                            ),
                                            text: V,
                                        }),
                                    }),
                                    (0, l.jsx)(m.$q, {
                                        "aria-checked": U,
                                        value: U,
                                        type: m.M0.INVERTED,
                                        disabled: W,
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
function W(e) {
    let { categories: n, guild: t, className: i, innerClassName: o, hasSidebar: c } = e,
        { onChannelClick: d } = (0, Z.Z)(t.id),
        u = (0, f.Nj)(s.z.CHANNEL_BROWSER_NUX) ? 0 : -1,
        m = r.useCallback(
            (e) => {
                let { section: r } = e;
                if (0 === r && -1 === u) return null;
                let i = n._categories[r + u];
                return (0, l.jsx)(
                    L,
                    {
                        channel: i.channel,
                        guild: t,
                        onCategoryClick: d,
                    },
                    i.channel.id,
                );
            },
            [n, t, u, d],
        ),
        p = r.useCallback(
            (e) => {
                let { section: r, row: i } = e;
                if (0 === r && -1 === u) return (0, l.jsx)(w.Z, { guild: t });
                let a = n._categories[r + u],
                    o = n[a.channel.id][i];
                return null == o
                    ? null
                    : (0, l.jsx)(
                          U,
                          {
                              category: a.channel,
                              channel: o.channel,
                              guild: t,
                              isFirstChannel: 0 === i,
                              isLastChannel: n[a.channel.id].length - 1 === i,
                              tooltipDirection: c ? "right" : "top",
                              onChannelClick: d,
                          },
                          o.channel.id,
                      );
            },
            [n, t, u, c, d],
        ),
        g = (0, w.q)(t.id),
        x = (0, N.tn)(t.id, n, 64, g);
    return (0, l.jsx)(
        h._2F,
        {
            className: i,
            innerClassName: a()(o, T.scrollerInner),
            sectionHeight: 48,
            rowHeight: (e) => x[e].rowHeight,
            renderSection: m,
            renderRow: p,
            sections: x.map((e) => e.rowCount),
        },
        "channel-browser-list",
    );
}
