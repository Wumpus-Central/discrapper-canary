n.d(t, { A: () => U }), n(321073);
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
    x = n(47167),
    m = n(826673),
    A = n(721592),
    g = n(35275),
    C = n(166444),
    f = n(46054),
    p = n(454058),
    N = n(976860),
    j = n(138298),
    v = n(323443),
    b = n(863005),
    I = n(637248),
    E = n(329255),
    S = n(197843),
    w = n(915644),
    y = n(652215),
    O = n(746080),
    T = n(650583),
    L = n(985018),
    R = n(778649),
    D = n(830684);
let H = new Set([y.rbe.GUILD_FORUM, y.rbe.GUILD_MEDIA]),
    M = new Set([y.rbe.GUILD_VOICE, y.rbe.GUILD_STAGE_VOICE]);
function G(e) {
    let { guild: t, channel: i, onCategoryClick: s } = e,
        r = (0, S.Rg)(t.id, i.id, i.id),
        d = (0, S.eK)(t.id, i.id, i.id),
        c = (0, x.Ay)(i);
    return (0, l.jsxs)("div", {
        className: a()(R.Fv, { [R.d0]: "null" === i.id }),
        onContextMenu: (e) => {
            (0, h.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("75149"), n.e("53378")]).then(n.bind(n, 725756));
                return (n) => (0, l.jsx)(e, { ...n, channel: i, guild: t });
            });
        },
        children: [
            (0, l.jsx)(_.Text, {
                className: R.O1,
                color: "text-strong",
                variant: "text-lg/medium",
                lineClamp: 1,
                children: c,
            }),
            "null" !== i.id &&
                !d &&
                (0, l.jsx)("div", {
                    children: (0, l.jsx)(_.dOG, {
                        label: L.intl.string(L.t.mSQwnW),
                        checked: r,
                        onChange: () => void (!d && s(t.id, i.id, i.id)),
                    }),
                }),
        ],
    });
}
let B = i.memo(function () {
        return (0, l.jsx)("div", { className: R.me });
    }),
    k = i.memo(function (e) {
        let { index: t } = e;
        return (0, l.jsx)(_.Text, { variant: "text-xs/normal", className: R.Ks, children: "\xb7" }, `separator-${t}`);
    }),
    P = i.memo(function (e) {
        let t,
            {
                channel: i,
                category: s,
                guild: d,
                isFirstChannel: m,
                isLastChannel: E,
                onChannelClick: w,
                tooltipDirection: G = "right",
            } = e,
            { isSubscriptionGated: P } = (0, A.A)(i.id),
            U = (0, S.Rg)(d.id, i.id, s.id),
            V = (0, S.eK)(d.id, i.id, s.id),
            F = (0, S.v)(d.id, s.id),
            W = (0, x.Ay)(i),
            q = (0, r.bG)([b.A], () => b.A.getActiveThreadCount(d.id, i.id)),
            K = (0, r.bG)([p.A], () => p.A.shouldIndicateNewChannel(d.id, i.id)),
            Z =
                ((t = []),
                y.kvI.GUILD_THREADS_ONLY.has(i.type) &&
                    q >= 1 &&
                    t.push(
                        (0, l.jsx)(
                            _.Text,
                            {
                                variant: "text-xs/normal",
                                className: R.qy,
                                children: L.intl.format(L.t.z0qML2, { count: q }),
                            },
                            "thread-count",
                        ),
                    ),
                M.has(i.type) ||
                    t.push(
                        (0, l.jsx)(
                            _.Text,
                            { variant: "text-xs/normal", className: R.qy, children: (0, I.YC)(i.id) },
                            "active",
                        ),
                    ),
                null != i.topic &&
                    i.topic.length > 0 &&
                    t.push(
                        (0, l.jsx)(
                            o.A,
                            {
                                className: D.PT,
                                children: (0, l.jsx)(_.Text, {
                                    className: R.At,
                                    variant: "text-xs/normal",
                                    children: f.A.parseTopic(i.topic, !0, { channelId: i.id }),
                                }),
                            },
                            "topic",
                        ),
                    ),
                [t.map((e, t) => [e, (0, l.jsx)(k, { index: t }, `subtitle-separator-${t}`)])].flat(2).slice(0, -1)),
            Y = (e) => (
                (e.stopPropagation(), H.has(i.type) || e.shiftKey)
                    ? (0, N.uh)(d.id, i.id)
                    : i.isGuildStageVoice() || i.isGuildVoice()
                      ? (0, v.av)(i)
                      : j.A.openChannelAsSidebar({
                            guildId: i.guild_id,
                            channelId: i.id,
                            baseChannelId: O.VV.CHANNEL_BROWSER,
                        }),
                !0
            ),
            z = L.intl.string(L.t.vetGQs);
        i.isGuildStageVoice() || i.isGuildVoice()
            ? (z = L.intl.string(L.t.VJlc0S))
            : i.isForumLikeChannel() && (z = L.intl.string(L.t["3xjX0U"]));
        let J = V ? "text-muted" : "text-default",
            X = (0, _.rdh)(V ? c.A.colors.TEXT_MUTED : c.A.colors.TEXT_DEFAULT).hex();
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(u.m, {
                    text: F,
                    delay: 500,
                    position: G,
                    children: (0, l.jsxs)(_.DUT, {
                        className: a()(R.WG, { [R.Qn]: m, [R.wp]: E, [R.r9]: V }),
                        onClick: (e) => {
                            if (!V) return e.stopPropagation(), w(d.id, i.id, s.id), !0;
                        },
                        onContextMenu: (e) => {
                            i.isGuildVocal()
                                ? (0, h.L3)(e, async () => {
                                      let { default: e } = await Promise.all([
                                          n.e("97262"),
                                          n.e("2381"),
                                          n.e("40394"),
                                          n.e("30997"),
                                      ]).then(n.bind(n, 698193));
                                      return (t) => (0, l.jsx)(e, { ...t, channel: i, guild: d });
                                  })
                                : (0, h.L3)(e, async () => {
                                      let { default: e } = await Promise.all([
                                          n.e("97262"),
                                          n.e("2381"),
                                          n.e("77666"),
                                      ]).then(n.bind(n, 370372));
                                      return (t) => (0, l.jsx)(e, { ...t, channel: i, guild: d });
                                  });
                        },
                        children: [
                            (0, l.jsxs)("div", {
                                className: R.yW,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: R.HA,
                                        children: [
                                            (0, l.jsx)(C.gm, { channel: i, guild: d }),
                                            (0, l.jsx)(o.A, {
                                                className: R.__invalid_name,
                                                children: (0, l.jsx)(_.Text, {
                                                    className: R.be,
                                                    variant: "text-md/medium",
                                                    lineClamp: 1,
                                                    color: J,
                                                    children: W,
                                                }),
                                            }),
                                            P ? (0, l.jsx)(g.A, { color: X, className: R.PC }) : null,
                                            K
                                                ? (0, l.jsx)(_.LpS, {
                                                      text: L.intl.string(L.t.y2b7CA),
                                                      color: c.A.unsafe_rawColors.BRAND_260.css,
                                                      className: R.wD,
                                                  })
                                                : null,
                                        ],
                                    }),
                                    (0, l.jsx)("div", { className: R.Ze, children: Z }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: R.tN,
                                children: [
                                    (0, l.jsx)("div", {
                                        className: R.Kx,
                                        children: (0, l.jsx)(_.Button, {
                                            size: "sm",
                                            variant: "overlay-primary",
                                            onClick: Y,
                                            text: z,
                                            onKeyDown: (e) => {
                                                (e.key === T.dh.ENTER || e.key === T.dh.SPACE) &&
                                                    (e.preventDefault(), e.stopPropagation(), Y(e));
                                            },
                                        }),
                                    }),
                                    (0, l.jsx)(_.P7L, { checked: U, disabled: V }),
                                ],
                            }),
                        ],
                    }),
                }),
                !E && (0, l.jsx)(B, {}),
            ],
        });
    });
function U(e) {
    let { categories: t, guild: n, className: s, innerClassName: r, hasSidebar: c } = e,
        { onChannelClick: o } = (0, E.A)(n.id),
        u = (0, m.JZ)(d.M.CHANNEL_BROWSER_NUX) ? 0 : -1,
        h = i.useCallback(
            (e) => {
                let { section: i } = e;
                if (0 === i && -1 === u) return null;
                let s = t._categories[i + u];
                return (0, l.jsx)(G, { channel: s.channel, guild: n, onCategoryClick: o }, s.channel.id);
            },
            [t, n, u, o],
        ),
        x = i.useCallback(
            (e) => {
                let { section: i, row: s } = e;
                if (0 === i && -1 === u) return (0, l.jsx)(w.A, { guild: n });
                let a = t._categories[i + u],
                    r = t[a.channel.id][s];
                return null == r
                    ? null
                    : (0, l.jsx)(
                          P,
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
        A = (0, w.C)(n.id),
        g = (0, I.zH)(n.id, t, 64, A);
    return (0, l.jsx)(
        _.Eie,
        {
            className: s,
            innerClassName: a()(r, R.bv),
            sectionHeight: 48,
            rowHeight: (e) => g[e].rowHeight,
            renderSection: h,
            renderRow: x,
            sections: g.map((e) => e.rowCount),
        },
        "channel-browser-list",
    );
}
