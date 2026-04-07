t.d(n, { A: () => P }), t(321073);
var l = t(627968),
    i = t(64700),
    s = t(503698),
    a = t.n(s),
    r = t(311907),
    d = t(554146),
    c = t(827734),
    o = t(3026),
    u = t(990078),
    _ = t(397927),
    h = t(442433),
    x = t(826673),
    m = t(721592),
    g = t(35275),
    A = t(166444),
    C = t(46054),
    f = t(454058),
    p = t(976860),
    N = t(138298),
    j = t(323443),
    v = t(863005),
    b = t(637248),
    I = t(329255),
    E = t(197843),
    S = t(693263),
    w = t(652215),
    y = t(746080),
    O = t(650583),
    T = t(985018),
    L = t(412624),
    R = t(782691);
let D = new Set([w.rbe.GUILD_FORUM, w.rbe.GUILD_MEDIA]),
    H = new Set([w.rbe.GUILD_VOICE, w.rbe.GUILD_STAGE_VOICE]);
function M(e) {
    let { guild: n, channel: i, onCategoryClick: s } = e,
        r = (0, E.Rg)(n.id, i.id, i.id),
        d = (0, E.eK)(n.id, i.id, i.id);
    return (0, l.jsxs)("div", {
        className: a()(L.Fv, { [L.d0]: "null" === i.id }),
        onContextMenu: (e) => {
            (0, h.L3)(e, async () => {
                let { default: e } = await Promise.all([t.e("75149"), t.e("53378")]).then(t.bind(t, 725756));
                return (t) => (0, l.jsx)(e, { ...t, channel: i, guild: n });
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
                        onChange: () => void (!d && s(n.id, i.id, i.id)),
                    }),
                }),
        ],
    });
}
let G = i.memo(function () {
        return (0, l.jsx)("div", { className: L.me });
    }),
    B = i.memo(function (e) {
        let { index: n } = e;
        return (0, l.jsx)(_.Text, { variant: "text-xs/normal", className: L.Ks, children: "\xb7" }, `separator-${n}`);
    }),
    k = i.memo(function (e) {
        let n,
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
                ((n = []),
                w.kvI.GUILD_THREADS_ONLY.has(i.type) &&
                    F >= 1 &&
                    n.push(
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
                    n.push(
                        (0, l.jsx)(
                            _.Text,
                            { variant: "text-xs/normal", className: L.qy, children: (0, b.YC)(i.id) },
                            "active",
                        ),
                    ),
                null != i.topic &&
                    i.topic.length > 0 &&
                    n.push(
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
                [n.map((e, n) => [e, (0, l.jsx)(B, { index: n }, `subtitle-separator-${n}`)])].flat(2).slice(0, -1)),
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
                                          t.e("97262"),
                                          t.e("2381"),
                                          t.e("40394"),
                                          t.e("30997"),
                                      ]).then(t.bind(t, 698193));
                                      return (n) => (0, l.jsx)(e, { ...n, channel: i, guild: d });
                                  })
                                : (0, h.L3)(e, async () => {
                                      let { default: e } = await Promise.all([
                                          t.e("97262"),
                                          t.e("2381"),
                                          t.e("77666"),
                                      ]).then(t.bind(t, 370372));
                                      return (n) => (0, l.jsx)(e, { ...n, channel: i, guild: d });
                                  });
                        },
                        children: [
                            (0, l.jsxs)("div", {
                                className: L.yW,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: L.HA,
                                        children: [
                                            (0, l.jsx)(A.gm, { channel: i, guild: d }),
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
                                            k ? (0, l.jsx)(g.A, { color: z, className: L.PC }) : null,
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
    let { categories: n, guild: t, className: s, innerClassName: r, hasSidebar: c } = e,
        { onChannelClick: o } = (0, I.A)(t.id),
        u = (0, x.JZ)(d.M.CHANNEL_BROWSER_NUX) ? 0 : -1,
        h = i.useCallback(
            (e) => {
                let { section: i } = e;
                if (0 === i && -1 === u) return null;
                let s = n._categories[i + u];
                return (0, l.jsx)(M, { channel: s.channel, guild: t, onCategoryClick: o }, s.channel.id);
            },
            [n, t, u, o],
        ),
        m = i.useCallback(
            (e) => {
                let { section: i, row: s } = e;
                if (0 === i && -1 === u) return (0, l.jsx)(S.A, { guild: t });
                let a = n._categories[i + u],
                    r = n[a.channel.id][s];
                return null == r
                    ? null
                    : (0, l.jsx)(
                          k,
                          {
                              category: a.channel,
                              channel: r.channel,
                              guild: t,
                              isFirstChannel: 0 === s,
                              isLastChannel: n[a.channel.id].length - 1 === s,
                              tooltipDirection: c ? "right" : "top",
                              onChannelClick: o,
                          },
                          r.channel.id,
                      );
            },
            [n, t, u, c, o],
        ),
        g = (0, S.C)(t.id),
        A = (0, b.zH)(t.id, n, 64, g);
    return (0, l.jsx)(
        _.Eie,
        {
            className: s,
            innerClassName: a()(r, L.bv),
            sectionHeight: 48,
            rowHeight: (e) => A[e].rowHeight,
            renderSection: h,
            renderRow: m,
            sections: A.map((e) => e.rowCount),
        },
        "channel-browser-list",
    );
}
