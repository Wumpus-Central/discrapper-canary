n.d(t, { Z: () => U }), n(388685), n(539854), n(472816), n(794429);
var l = n(951288),
    r = n(647438),
    i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(704215),
    c = n(692547),
    d = n(755721),
    u = n(481060),
    m = n(239091),
    h = n(111028),
    p = n(266454),
    f = n(66999),
    g = n(549631),
    x = n(473403),
    _ = n(454585),
    C = n(22082),
    b = n(703656),
    j = n(6025),
    v = n(922482),
    y = n(601070),
    O = n(216306),
    N = n(163),
    Z = n(753540),
    I = n(70297),
    w = n(981631),
    P = n(176505),
    E = n(388032),
    S = n(444630),
    T = n(430864);
function A(e) {
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
function k(e, t) {
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
let B = new Set([w.d4z.GUILD_FORUM, w.d4z.GUILD_MEDIA]),
    R = new Set([w.d4z.GUILD_VOICE, w.d4z.GUILD_STAGE_VOICE]);
function D(e) {
    let { guild: t, channel: r, onCategoryClick: i } = e,
        o = (0, Z.Mf)(t.id, r.id, r.id),
        s = (0, Z.t4)(t.id, r.id, r.id);
    return (0, l.jsxs)("div", {
        className: a()(S.categoryRow, { [S.uncategorized]: "null" === r.id }),
        onContextMenu: (e) => {
            (0, m.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e("8965"), n.e("14280")]).then(n.bind(n, 139035));
                return (n) =>
                    (0, l.jsx)(
                        e,
                        k(A({}, n), {
                            channel: r,
                            guild: t,
                        }),
                    );
            });
        },
        children: [
            (0, l.jsx)(u.Text, {
                className: S.categoryText,
                color: "text-muted",
                variant: "text-sm/medium",
                lineClamp: 1,
                children: r.name,
            }),
            "null" !== r.id &&
                !s &&
                (0, l.jsxs)(u.P3F, {
                    className: S.selectAll,
                    onClick: () => {
                        s || i(t.id, r.id, r.id);
                    },
                    children: [
                        (0, l.jsx)(d.$q, {
                            className: S.selectAllCheckbox,
                            size: 14,
                            shape: d.zV.SMALL_BOX,
                            value: o,
                            type: d.M0.INVERTED,
                            displayOnly: !0,
                        }),
                        (0, l.jsx)(u.Text, {
                            color: "text-muted",
                            variant: "text-xs/medium",
                            children: E.intl.string(E.t.mSQwnZ),
                        }),
                    ],
                }),
        ],
    });
}
let L = r.memo(function () {
        return (0, l.jsx)("div", { className: S.separator });
    }),
    M = r.memo(function (e) {
        let { index: t } = e;
        return (0, l.jsx)(
            u.Text,
            {
                variant: "text-xs/normal",
                className: S.subtitleSeparator,
                children: "\xB7",
            },
            "separator-".concat(t),
        );
    }),
    H = r.memo(function (e) {
        let {
                channel: t,
                category: r,
                guild: i,
                isFirstChannel: s,
                isLastChannel: p,
                onChannelClick: N,
                tooltipDirection: I = "right",
            } = e,
            { isSubscriptionGated: D } = (0, f.Z)(t.id),
            H = (0, Z.Mf)(i.id, t.id, r.id),
            U = (0, Z.t4)(i.id, t.id, r.id),
            G = (0, Z.EH)(i.id, r.id),
            W = (0, o.e7)([y.Z], () => y.Z.getActiveThreadCount(i.id, t.id)),
            q = (0, o.e7)([C.Z], () => C.Z.shouldIndicateNewChannel(i.id, t.id)),
            F = (e) => {
                if (!U) return e.stopPropagation(), N(i.id, t.id, r.id), !0;
            },
            z = (e) => {
                t.isGuildVocal()
                    ? (0, m.jW)(e, async () => {
                          let { default: e } = await Promise.all([
                              n.e("79695"),
                              n.e("18320"),
                              n.e("83331"),
                              n.e("81070"),
                          ]).then(n.bind(n, 213202));
                          return (n) =>
                              (0, l.jsx)(
                                  e,
                                  k(A({}, n), {
                                      channel: t,
                                      guild: i,
                                  }),
                              );
                      })
                    : (0, m.jW)(e, async () => {
                          let { default: e } = await Promise.all([n.e("79695"), n.e("18320"), n.e("44011")]).then(
                              n.bind(n, 373651),
                          );
                          return (n) =>
                              (0, l.jsx)(
                                  e,
                                  k(A({}, n), {
                                      channel: t,
                                      guild: i,
                                  }),
                              );
                      });
            },
            X = (function (e, t) {
                let n = [];
                return (
                    w.TPd.GUILD_THREADS_ONLY.has(e.type) &&
                        t >= 1 &&
                        n.push(
                            (0, l.jsx)(
                                u.Text,
                                {
                                    variant: "text-xs/normal",
                                    className: S.channelSubtitle,
                                    children: E.intl.format(E.t.z0qMLy, { count: t }),
                                },
                                "thread-count",
                            ),
                        ),
                    R.has(e.type) ||
                        n.push(
                            (0, l.jsx)(
                                u.Text,
                                {
                                    variant: "text-xs/normal",
                                    className: S.channelSubtitle,
                                    children: (0, O.qw)(e.id),
                                },
                                "active",
                            ),
                        ),
                    null != e.topic &&
                        e.topic.length > 0 &&
                        n.push(
                            (0, l.jsx)(
                                h.Z,
                                {
                                    className: T.markup,
                                    children: (0, l.jsx)(u.Text, {
                                        className: S.topic,
                                        variant: "text-xs/normal",
                                        children: _.Z.parseTopic(e.topic, !0, { channelId: e.id }),
                                    }),
                                },
                                "topic",
                            ),
                        ),
                    [n.map((e, t) => [e, (0, l.jsx)(M, { index: t }, "subtitle-separator-".concat(t))])]
                        .flat(2)
                        .slice(0, -1)
                );
            })(t, W),
            V = (e) => (
                (e.stopPropagation(), B.has(t.type) || e.shiftKey)
                    ? (0, b.XU)(i.id, t.id)
                    : t.isGuildStageVoice() || t.isGuildVoice()
                      ? (0, v.Cq)(t)
                      : j.Z.openChannelAsSidebar({
                            guildId: t.guild_id,
                            channelId: t.id,
                            baseChannelId: P.oC.CHANNEL_BROWSER,
                        }),
                !0
            ),
            Q = E.intl.string(E.t.vetGQk);
        t.isGuildStageVoice() || t.isGuildVoice()
            ? (Q = E.intl.string(E.t.VJlc0d))
            : t.isForumLikeChannel() && (Q = E.intl.string(E.t["3xjX0d"]));
        let Y = U ? "text-muted" : "text-default",
            K = (0, u.dQu)(U ? c.Z.colors.TEXT_MUTED : c.Z.colors.TEXT_DEFAULT).hex();
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(u.ua7, {
                    text: G,
                    delay: 500,
                    position: I,
                    children: (e) =>
                        (0, l.jsxs)(
                            u.P3F,
                            k(
                                A(
                                    {
                                        className: a()(S.channelRow, {
                                            [S.firstChannel]: s,
                                            [S.lastChannel]: p,
                                            [S.disabled]: U,
                                        }),
                                    },
                                    e,
                                ),
                                {
                                    onClick: F,
                                    onContextMenu: z,
                                    children: [
                                        (0, l.jsxs)("div", {
                                            className: S.channelInfo,
                                            children: [
                                                (0, l.jsxs)("div", {
                                                    className: S.channelName,
                                                    children: [
                                                        (0, l.jsx)(x._W, {
                                                            channel: t,
                                                            guild: i,
                                                        }),
                                                        (0, l.jsx)(h.Z, {
                                                            className: S.__invalid_name,
                                                            children: (0, l.jsx)(u.Text, {
                                                                className: S.channelText,
                                                                variant: "text-md/medium",
                                                                lineClamp: 1,
                                                                color: Y,
                                                                children: t.name,
                                                            }),
                                                        }),
                                                        D
                                                            ? (0, l.jsx)(g.Z, {
                                                                  color: K,
                                                                  className: S.premiumIcon,
                                                              })
                                                            : null,
                                                        q
                                                            ? (0, l.jsx)(u.IGR, {
                                                                  text: E.intl.string(E.t.y2b7CA),
                                                                  color: c.Z.unsafe_rawColors.BRAND_260.css,
                                                                  className: S.titleBadge,
                                                              })
                                                            : null,
                                                    ],
                                                }),
                                                (0, l.jsx)("div", {
                                                    className: S.channelSubtitles,
                                                    children: X,
                                                }),
                                            ],
                                        }),
                                        (0, l.jsxs)("div", {
                                            className: S.channelActions,
                                            children: [
                                                (0, l.jsx)("div", {
                                                    className: S.viewChannelButtonWrapper,
                                                    children: (0, l.jsx)(u.zxk, {
                                                        size: "sm",
                                                        variant: "overlay-primary",
                                                        onClick: V,
                                                        text: Q,
                                                    }),
                                                }),
                                                (0, l.jsx)(d.$q, {
                                                    "aria-checked": H,
                                                    value: H,
                                                    type: d.M0.INVERTED,
                                                    disabled: U,
                                                    innerClassName: S.checkboxInner,
                                                    displayOnly: !0,
                                                }),
                                            ],
                                        }),
                                    ],
                                },
                            ),
                        ),
                }),
                !p && (0, l.jsx)(L, {}),
            ],
        });
    });
function U(e) {
    let { categories: t, guild: n, className: i, innerClassName: o, hasSidebar: c } = e,
        { onChannelClick: d } = (0, N.Z)(n.id),
        m = (0, p.Nj)(s.z.CHANNEL_BROWSER_NUX) ? 0 : -1,
        h = r.useCallback(
            (e) => {
                let { section: r } = e;
                if (0 === r && -1 === m) return null;
                let i = t._categories[r + m];
                return (0, l.jsx)(
                    D,
                    {
                        channel: i.channel,
                        guild: n,
                        onCategoryClick: d,
                    },
                    i.channel.id,
                );
            },
            [t, n, m, d],
        ),
        f = r.useCallback(
            (e) => {
                let { section: r, row: i } = e;
                if (0 === r && -1 === m) return (0, l.jsx)(I.Z, { guild: n });
                let a = t._categories[r + m],
                    o = t[a.channel.id][i];
                return null == o
                    ? null
                    : (0, l.jsx)(
                          H,
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
            [t, n, m, c, d],
        ),
        g = (0, I.q)(n.id),
        x = (0, O.tn)(n.id, t, 64, g);
    return (0, l.jsx)(
        u._2F,
        {
            className: i,
            innerClassName: a()(o, S.scrollerInner),
            sectionHeight: 48,
            rowHeight: (e) => x[e].rowHeight,
            renderSection: h,
            renderRow: f,
            sections: x.map((e) => e.rowCount),
        },
        "channel-browser-list",
    );
}
