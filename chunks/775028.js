t.d(n, { Z: () => G }), t(388685), t(539854), t(472816), t(794429);
var r = t(54381),
    l = t(473749),
    i = t(120356),
    a = t.n(i),
    o = t(442837),
    s = t(704215),
    c = t(692547),
    d = t(194983),
    u = t(28664),
    p = t(755721),
    h = t(481060),
    m = t(239091),
    f = t(266454),
    g = t(66999),
    _ = t(549631),
    x = t(473403),
    b = t(454585),
    C = t(22082),
    j = t(703656),
    O = t(6025),
    v = t(922482),
    y = t(601070),
    N = t(216306),
    I = t(163),
    w = t(753540),
    Z = t(70297),
    P = t(981631),
    S = t(176505),
    E = t(388032),
    T = t(174986),
    B = t(602009);
function A(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            r.forEach(function (n) {
                var r;
                (r = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = r);
            });
    }
    return e;
}
function k(e, n) {
    return (
        (n = null != n ? n : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : (function (e, n) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, r);
                  }
                  return t;
              })(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              }),
        e
    );
}
let D = new Set([P.d4z.GUILD_FORUM, P.d4z.GUILD_MEDIA]),
    R = new Set([P.d4z.GUILD_VOICE, P.d4z.GUILD_STAGE_VOICE]);
function L(e) {
    let { guild: n, channel: l, onCategoryClick: i } = e,
        o = (0, w.Mf)(n.id, l.id, l.id),
        s = (0, w.t4)(n.id, l.id, l.id);
    return (0, r.jsxs)("div", {
        className: a()(T.categoryRow, { [T.uncategorized]: "null" === l.id }),
        onContextMenu: (e) => {
            (0, m.jW)(e, async () => {
                let { default: e } = await Promise.all([t.e("8965"), t.e("14280")]).then(t.bind(t, 139035));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        k(A({}, t), {
                            channel: l,
                            guild: n,
                        }),
                    );
            });
        },
        children: [
            (0, r.jsx)(h.Text, {
                className: T.categoryText,
                color: "text-muted",
                variant: "text-sm/medium",
                lineClamp: 1,
                children: l.name,
            }),
            "null" !== l.id &&
                !s &&
                (0, r.jsxs)(h.P3F, {
                    className: T.selectAll,
                    onClick: () => {
                        s || i(n.id, l.id, l.id);
                    },
                    children: [
                        (0, r.jsx)(p.$q, {
                            className: T.selectAllCheckbox,
                            size: 14,
                            shape: p.zV.SMALL_BOX,
                            value: o,
                            type: p.M0.INVERTED,
                            displayOnly: !0,
                        }),
                        (0, r.jsx)(h.Text, {
                            color: "text-muted",
                            variant: "text-xs/medium",
                            children: E.intl.string(E.t.mSQwnW),
                        }),
                    ],
                }),
        ],
    });
}
let H = l.memo(function () {
        return (0, r.jsx)("div", { className: T.separator });
    }),
    M = l.memo(function (e) {
        let { index: n } = e;
        return (0, r.jsx)(
            h.Text,
            {
                variant: "text-xs/normal",
                className: T.subtitleSeparator,
                children: "\xB7",
            },
            "separator-".concat(n),
        );
    }),
    U = l.memo(function (e) {
        let {
                channel: n,
                category: l,
                guild: i,
                isFirstChannel: s,
                isLastChannel: f,
                onChannelClick: I,
                tooltipDirection: Z = "right",
            } = e,
            { isSubscriptionGated: L } = (0, g.Z)(n.id),
            U = (0, w.Mf)(i.id, n.id, l.id),
            G = (0, w.t4)(i.id, n.id, l.id),
            W = (0, w.EH)(i.id, l.id),
            F = (0, o.e7)([y.Z], () => y.Z.getActiveThreadCount(i.id, n.id)),
            q = (0, o.e7)([C.Z], () => C.Z.shouldIndicateNewChannel(i.id, n.id)),
            z = (function (e, n) {
                let t = [];
                return (
                    P.TPd.GUILD_THREADS_ONLY.has(e.type) &&
                        n >= 1 &&
                        t.push(
                            (0, r.jsx)(
                                h.Text,
                                {
                                    variant: "text-xs/normal",
                                    className: T.channelSubtitle,
                                    children: E.intl.format(E.t.z0qML2, { count: n }),
                                },
                                "thread-count",
                            ),
                        ),
                    R.has(e.type) ||
                        t.push(
                            (0, r.jsx)(
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
                            (0, r.jsx)(
                                d.Z,
                                {
                                    className: B.markup,
                                    children: (0, r.jsx)(h.Text, {
                                        className: T.topic,
                                        variant: "text-xs/normal",
                                        children: b.Z.parseTopic(e.topic, !0, { channelId: e.id }),
                                    }),
                                },
                                "topic",
                            ),
                        ),
                    [t.map((e, n) => [e, (0, r.jsx)(M, { index: n }, "subtitle-separator-".concat(n))])]
                        .flat(2)
                        .slice(0, -1)
                );
            })(n, F),
            V = E.intl.string(E.t.vetGQs);
        n.isGuildStageVoice() || n.isGuildVoice()
            ? (V = E.intl.string(E.t.VJlc0S))
            : n.isForumLikeChannel() && (V = E.intl.string(E.t["3xjX0U"]));
        let X = G ? "text-muted" : "text-default",
            Q = (0, h.dQu)(G ? c.Z.colors.TEXT_MUTED : c.Z.colors.TEXT_DEFAULT).hex();
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(u.u, {
                    text: W,
                    delay: 500,
                    position: Z,
                    children: (0, r.jsxs)(h.P3F, {
                        className: a()(T.channelRow, {
                            [T.firstChannel]: s,
                            [T.lastChannel]: f,
                            [T.disabled]: G,
                        }),
                        onClick: (e) => {
                            if (!G) return e.stopPropagation(), I(i.id, n.id, l.id), !0;
                        },
                        onContextMenu: (e) => {
                            n.isGuildVocal()
                                ? (0, m.jW)(e, async () => {
                                      let { default: e } = await Promise.all([
                                          t.e("79695"),
                                          t.e("18320"),
                                          t.e("83331"),
                                          t.e("81070"),
                                      ]).then(t.bind(t, 213202));
                                      return (t) =>
                                          (0, r.jsx)(
                                              e,
                                              k(A({}, t), {
                                                  channel: n,
                                                  guild: i,
                                              }),
                                          );
                                  })
                                : (0, m.jW)(e, async () => {
                                      let { default: e } = await Promise.all([
                                          t.e("79695"),
                                          t.e("18320"),
                                          t.e("44011"),
                                      ]).then(t.bind(t, 373651));
                                      return (t) =>
                                          (0, r.jsx)(
                                              e,
                                              k(A({}, t), {
                                                  channel: n,
                                                  guild: i,
                                              }),
                                          );
                                  });
                        },
                        children: [
                            (0, r.jsxs)("div", {
                                className: T.channelInfo,
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: T.channelName,
                                        children: [
                                            (0, r.jsx)(x._W, {
                                                channel: n,
                                                guild: i,
                                            }),
                                            (0, r.jsx)(d.Z, {
                                                className: T.__invalid_name,
                                                children: (0, r.jsx)(h.Text, {
                                                    className: T.channelText,
                                                    variant: "text-md/medium",
                                                    lineClamp: 1,
                                                    color: X,
                                                    children: n.name,
                                                }),
                                            }),
                                            L
                                                ? (0, r.jsx)(_.Z, {
                                                      color: Q,
                                                      className: T.premiumIcon,
                                                  })
                                                : null,
                                            q
                                                ? (0, r.jsx)(h.IGR, {
                                                      text: E.intl.string(E.t.y2b7CA),
                                                      color: c.Z.unsafe_rawColors.BRAND_260.css,
                                                      className: T.titleBadge,
                                                  })
                                                : null,
                                        ],
                                    }),
                                    (0, r.jsx)("div", {
                                        className: T.channelSubtitles,
                                        children: z,
                                    }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: T.channelActions,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: T.viewChannelButtonWrapper,
                                        children: (0, r.jsx)(h.Button, {
                                            size: "sm",
                                            variant: "overlay-primary",
                                            onClick: (e) => (
                                                (e.stopPropagation(), D.has(n.type) || e.shiftKey)
                                                    ? (0, j.XU)(i.id, n.id)
                                                    : n.isGuildStageVoice() || n.isGuildVoice()
                                                      ? (0, v.Cq)(n)
                                                      : O.Z.openChannelAsSidebar({
                                                            guildId: n.guild_id,
                                                            channelId: n.id,
                                                            baseChannelId: S.oC.CHANNEL_BROWSER,
                                                        }),
                                                !0
                                            ),
                                            text: V,
                                        }),
                                    }),
                                    (0, r.jsx)(p.$q, {
                                        "aria-checked": U,
                                        value: U,
                                        type: p.M0.INVERTED,
                                        disabled: G,
                                        innerClassName: T.checkboxInner,
                                        displayOnly: !0,
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
                !f && (0, r.jsx)(H, {}),
            ],
        });
    });
function G(e) {
    let { categories: n, guild: t, className: i, innerClassName: o, hasSidebar: c } = e,
        { onChannelClick: d } = (0, I.Z)(t.id),
        u = (0, f.Nj)(s.z.CHANNEL_BROWSER_NUX) ? 0 : -1,
        p = l.useCallback(
            (e) => {
                let { section: l } = e;
                if (0 === l && -1 === u) return null;
                let i = n._categories[l + u];
                return (0, r.jsx)(
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
        m = l.useCallback(
            (e) => {
                let { section: l, row: i } = e;
                if (0 === l && -1 === u) return (0, r.jsx)(Z.Z, { guild: t });
                let a = n._categories[l + u],
                    o = n[a.channel.id][i];
                return null == o
                    ? null
                    : (0, r.jsx)(
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
        g = (0, Z.q)(t.id),
        _ = (0, N.tn)(t.id, n, 64, g);
    return (0, r.jsx)(
        h._2F,
        {
            className: i,
            innerClassName: a()(o, T.scrollerInner),
            sectionHeight: 48,
            rowHeight: (e) => _[e].rowHeight,
            renderSection: p,
            renderRow: m,
            sections: _.map((e) => e.rowCount),
        },
        "channel-browser-list",
    );
}
