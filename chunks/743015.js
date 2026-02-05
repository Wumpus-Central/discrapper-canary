n.d(t, { A: () => P }), n(321073);
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    d = n(554146),
    c = n(827734),
    o = n(3026),
    u = n(990078),
    _ = n(397927),
    h = n(442433),
    x = n(826673),
    m = n(721592),
    A = n(35275),
    g = n(166444),
    C = n(46054),
    f = n(454058),
    p = n(976860),
    N = n(138298),
    j = n(323443),
    v = n(863005),
    b = n(637248),
    I = n(329255),
    E = n(197843),
    S = n(915644),
    w = n(652215),
    y = n(746080),
    O = n(650583),
    T = n(985018),
    L = n(282627),
    R = n(206314);
let D = new Set([w.rbe.GUILD_FORUM, w.rbe.GUILD_MEDIA]),
    H = new Set([w.rbe.GUILD_VOICE, w.rbe.GUILD_STAGE_VOICE]);
function M(e) {
    let { guild: t, channel: i, onCategoryClick: s } = e,
        r = (0, E.Rg)(t.id, i.id, i.id),
        d = (0, E.eK)(t.id, i.id, i.id);
    return (0, l.jsxs)("div", {
        className: a()(L.Fv, { [L.d0]: "null" === i.id }),
        onContextMenu: (e) => {
            (0, h.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("75149"), n.e("53378")]).then(n.bind(n, 725756));
                return (n) => (0, l.jsx)(e, { ...n, channel: i, guild: t });
            });
        },
        children: [
            (0, l.jsx)(_.Text, {
                className: L.O1,
                color: "text-strong",
                variant: "text-lg/medium",
                lineClamp: 1,
                children: i.name,
            }),
            "null" !== i.id &&
                !d &&
                (0, l.jsx)("div", {
                    children: (0, l.jsx)(_.dOG, {
                        label: T.intl.string(T.t.mSQwnW),
                        checked: r,
                        onChange: () => void (!d && s(t.id, i.id, i.id)),
                    }),
                }),
        ],
    });
}
let G = i.memo(function () {
        return (0, l.jsx)("div", { className: L.me });
    }),
    B = i.memo(function (e) {
        let { index: t } = e;
        return (0, l.jsx)(_.Text, { variant: "text-xs/normal", className: L.Ks, children: "\xb7" }, `separator-${t}`);
    }),
    k = i.memo(function (e) {
        let t,
            {
                channel: i,
                category: s,
                guild: d,
                isFirstChannel: x,
                isLastChannel: I,
                onChannelClick: S,
                tooltipDirection: M = "right",
            } = e,
            { isSubscriptionGated: k } = (0, m.A)(i.id),
            P = (0, E.Rg)(d.id, i.id, s.id),
            U = (0, E.eK)(d.id, i.id, s.id),
            V = (0, E.v)(d.id, s.id),
            F = (0, r.bG)([v.A], () => v.A.getActiveThreadCount(d.id, i.id)),
            W = (0, r.bG)([f.A], () => f.A.shouldIndicateNewChannel(d.id, i.id)),
            q =
                ((t = []),
                w.kvI.GUILD_THREADS_ONLY.has(i.type) &&
                    F >= 1 &&
                    t.push(
                        (0, l.jsx)(
                            _.Text,
                            {
                                variant: "text-xs/normal",
                                className: L.qy,
                                children: T.intl.format(T.t.z0qML2, { count: F }),
                            },
                            "thread-count",
                        ),
                    ),
                H.has(i.type) ||
                    t.push(
                        (0, l.jsx)(
                            _.Text,
                            { variant: "text-xs/normal", className: L.qy, children: (0, b.YC)(i.id) },
                            "active",
                        ),
                    ),
                null != i.topic &&
                    i.topic.length > 0 &&
                    t.push(
                        (0, l.jsx)(
                            o.A,
                            {
                                className: R.PT,
                                children: (0, l.jsx)(_.Text, {
                                    className: L.At,
                                    variant: "text-xs/normal",
                                    children: C.A.parseTopic(i.topic, !0, { channelId: i.id }),
                                }),
                            },
                            "topic",
                        ),
                    ),
                [t.map((e, t) => [e, (0, l.jsx)(B, { index: t }, `subtitle-separator-${t}`)])].flat(2).slice(0, -1)),
            K = (e) => (
                (e.stopPropagation(), D.has(i.type) || e.shiftKey)
                    ? (0, p.uh)(d.id, i.id)
                    : i.isGuildStageVoice() || i.isGuildVoice()
                      ? (0, j.av)(i)
                      : N.A.openChannelAsSidebar({
                            guildId: i.guild_id,
                            channelId: i.id,
                            baseChannelId: y.VV.CHANNEL_BROWSER,
                        }),
                !0
            ),
            Z = T.intl.string(T.t.vetGQs);
        i.isGuildStageVoice() || i.isGuildVoice()
            ? (Z = T.intl.string(T.t.VJlc0S))
            : i.isForumLikeChannel() && (Z = T.intl.string(T.t["3xjX0U"]));
        let Y = U ? "text-muted" : "text-default",
            z = (0, _.rdh)(U ? c.A.colors.TEXT_MUTED : c.A.colors.TEXT_DEFAULT).hex();
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(u.m, {
                    text: V,
                    delay: 500,
                    position: M,
                    children: (0, l.jsxs)(_.DUT, {
                        className: a()(L.WG, { [L.Qn]: x, [L.wp]: I, [L.r9]: U }),
                        onClick: (e) => {
                            if (!U) return e.stopPropagation(), S(d.id, i.id, s.id), !0;
                        },
                        onContextMenu: (e) => {
                            i.isGuildVocal()
                                ? (0, h.L3)(e, async () => {
                                      let { default: e } = await Promise.all([
                                          n.e("97262"),
                                          n.e("57287"),
                                          n.e("40394"),
                                          n.e("30997"),
                                      ]).then(n.bind(n, 698193));
                                      return (t) => (0, l.jsx)(e, { ...t, channel: i, guild: d });
                                  })
                                : (0, h.L3)(e, async () => {
                                      let { default: e } = await Promise.all([
                                          n.e("97262"),
                                          n.e("57287"),
                                          n.e("77666"),
                                      ]).then(n.bind(n, 370372));
                                      return (t) => (0, l.jsx)(e, { ...t, channel: i, guild: d });
                                  });
                        },
                        children: [
                            (0, l.jsxs)("div", {
                                className: L.yW,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: L.HA,
                                        children: [
                                            (0, l.jsx)(g.gm, { channel: i, guild: d }),
                                            (0, l.jsx)(o.A, {
                                                className: L.__invalid_name,
                                                children: (0, l.jsx)(_.Text, {
                                                    className: L.be,
                                                    variant: "text-md/medium",
                                                    lineClamp: 1,
                                                    color: Y,
                                                    children: i.name,
                                                }),
                                            }),
                                            k ? (0, l.jsx)(A.A, { color: z, className: L.PC }) : null,
                                            W
                                                ? (0, l.jsx)(_.LpS, {
                                                      text: T.intl.string(T.t.y2b7CA),
                                                      color: c.A.unsafe_rawColors.BRAND_260.css,
                                                      className: L.wD,
                                                  })
                                                : null,
                                        ],
                                    }),
                                    (0, l.jsx)("div", { className: L.Ze, children: q }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: L.tN,
                                children: [
                                    (0, l.jsx)("div", {
                                        className: L.Kx,
                                        children: (0, l.jsx)(_.Button, {
                                            size: "sm",
                                            variant: "overlay-primary",
                                            onClick: K,
                                            text: Z,
                                            onKeyDown: (e) => {
                                                (e.key === O.dh.ENTER || e.key === O.dh.SPACE) &&
                                                    (e.preventDefault(), e.stopPropagation(), K(e));
                                            },
                                        }),
                                    }),
                                    (0, l.jsx)(_.P7L, { checked: P, disabled: U }),
                                ],
                            }),
                        ],
                    }),
                }),
                !I && (0, l.jsx)(G, {}),
            ],
        });
    });
function P(e) {
    let { categories: t, guild: n, className: s, innerClassName: r, hasSidebar: c } = e,
        { onChannelClick: o } = (0, I.A)(n.id),
        u = (0, x.JZ)(d.M.CHANNEL_BROWSER_NUX) ? 0 : -1,
        h = i.useCallback(
            (e) => {
                let { section: i } = e;
                if (0 === i && -1 === u) return null;
                let s = t._categories[i + u];
                return (0, l.jsx)(M, { channel: s.channel, guild: n, onCategoryClick: o }, s.channel.id);
            },
            [t, n, u, o],
        ),
        m = i.useCallback(
            (e) => {
                let { section: i, row: s } = e;
                if (0 === i && -1 === u) return (0, l.jsx)(S.A, { guild: n });
                let a = t._categories[i + u],
                    r = t[a.channel.id][s];
                return null == r
                    ? null
                    : (0, l.jsx)(
                          k,
                          {
                              category: a.channel,
                              channel: r.channel,
                              guild: n,
                              isFirstChannel: 0 === s,
                              isLastChannel: t[a.channel.id].length - 1 === s,
                              tooltipDirection: c ? "right" : "top",
                              onChannelClick: o,
                          },
                          r.channel.id,
                      );
            },
            [t, n, u, c, o],
        ),
        A = (0, S.C)(n.id),
        g = (0, b.zH)(n.id, t, 64, A);
    return (0, l.jsx)(
        _.Eie,
        {
            className: s,
            innerClassName: a()(r, L.bv),
            sectionHeight: 48,
            rowHeight: (e) => g[e].rowHeight,
            renderSection: h,
            renderRow: m,
            sections: g.map((e) => e.rowCount),
        },
        "channel-browser-list",
    );
}
