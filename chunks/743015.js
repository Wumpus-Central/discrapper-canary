t.d(n, { A: () => Y }), t(321073);
var l = t(627968),
    i = t(64700),
    s = t(503698),
    a = t.n(s),
    r = t(311907),
    d = t(554146),
    c = t(827734),
    o = t(3026),
    u = t(990078),
    _ = t(834730),
    h = t(243721),
    m = t(602853),
    x = t(939249),
    A = t(777666),
    C = t(821609),
    g = t(658675),
    f = t(475825),
    p = t(442433),
    N = t(47167),
    j = t(826673),
    v = t(721592),
    b = t(35275),
    E = t(166444),
    I = t(46054),
    w = t(454058),
    S = t(976860),
    y = t(138298),
    D = t(323443),
    O = t(863005),
    L = t(637248),
    R = t(329255),
    M = t(197843),
    G = t(915644),
    B = t(652215),
    T = t(746080),
    k = t(650583),
    H = t(985018),
    P = t(540864),
    U = t(992595);
let V = new Set([B.rbe.GUILD_FORUM, B.rbe.GUILD_MEDIA]),
    F = new Set([B.rbe.GUILD_VOICE, B.rbe.GUILD_STAGE_VOICE]);
function W(e) {
    let { guild: n, channel: i, onCategoryClick: s } = e,
        r = (0, M.Rg)(n.id, i.id, i.id),
        d = (0, M.eK)(n.id, i.id, i.id),
        c = (0, N.Ay)(i);
    return (0, l.jsxs)("div", {
        className: a()(P.Fv, { [P.d0]: "null" === i.id }),
        onContextMenu: (e) => {
            (0, p.L3)(e, async () => {
                let { default: e } = await Promise.all([t.e("75149"), t.e("30997")]).then(t.bind(t, 725756));
                return (t) => (0, l.jsx)(e, { ...t, channel: i, guild: n });
            });
        },
        children: [
            (0, l.jsx)(_.E, {
                className: P.O1,
                color: "text-strong",
                variant: "text-lg/medium",
                lineClamp: 1,
                children: c,
            }),
            "null" !== i.id &&
                !d &&
                (0, l.jsx)("div", {
                    children: (0, l.jsx)(h.d, {
                        label: H.intl.string(H.t.mSQwnW),
                        checked: r,
                        onChange: () => void (!d && s(n.id, i.id, i.id)),
                    }),
                }),
        ],
    });
}
let q = i.memo(function () {
        return (0, l.jsx)("div", { className: P.me });
    }),
    K = i.memo(function (e) {
        let { index: n } = e;
        return (0, l.jsx)(_.E, { variant: "text-xs/normal", className: P.Ks, children: "\xb7" }, `separator-${n}`);
    }),
    Z = i.memo(function (e) {
        let n,
            {
                channel: i,
                category: s,
                guild: d,
                isFirstChannel: h,
                isLastChannel: f,
                onChannelClick: j,
                tooltipDirection: R = "right",
            } = e,
            { isSubscriptionGated: G } = (0, v.A)(i.id),
            W = (0, M.Rg)(d.id, i.id, s.id),
            Z = (0, M.eK)(d.id, i.id, s.id),
            Y = (0, M.v)(d.id, s.id),
            z = (0, N.Ay)(i),
            J = (0, r.bG)([O.A], () => O.A.getActiveThreadCount(d.id, i.id)),
            X = (0, r.bG)([w.A], () => w.A.shouldIndicateNewChannel(d.id, i.id)),
            Q =
                ((n = []),
                B.kvI.GUILD_THREADS_ONLY.has(i.type) &&
                    J >= 1 &&
                    n.push(
                        (0, l.jsx)(
                            _.E,
                            {
                                variant: "text-xs/normal",
                                className: P.qy,
                                children: H.intl.format(H.t.z0qML2, { count: J }),
                            },
                            "thread-count",
                        ),
                    ),
                F.has(i.type) ||
                    n.push(
                        (0, l.jsx)(
                            _.E,
                            { variant: "text-xs/normal", className: P.qy, children: (0, L.YC)(i.id) },
                            "active",
                        ),
                    ),
                null != i.topic &&
                    i.topic.length > 0 &&
                    n.push(
                        (0, l.jsx)(
                            o.A,
                            {
                                className: U.PT,
                                children: (0, l.jsx)(_.E, {
                                    className: P.At,
                                    variant: "text-xs/normal",
                                    children: I.A.parseTopic(i.topic, !0, { channelId: i.id }),
                                }),
                            },
                            "topic",
                        ),
                    ),
                [n.map((e, n) => [e, (0, l.jsx)(K, { index: n }, `subtitle-separator-${n}`)])].flat(2).slice(0, -1)),
            $ = (e) => (
                (e.stopPropagation(), V.has(i.type) || e.shiftKey)
                    ? (0, S.uh)(d.id, i.id)
                    : i.isGuildStageVoice() || i.isGuildVoice()
                      ? (0, D.av)(i)
                      : y.A.openChannelAsSidebar({
                            guildId: i.guild_id,
                            channelId: i.id,
                            baseChannelId: T.VV.CHANNEL_BROWSER,
                        }),
                !0
            ),
            ee = H.intl.string(H.t.vetGQs);
        i.isGuildStageVoice() || i.isGuildVoice()
            ? (ee = H.intl.string(H.t.VJlc0S))
            : i.isForumLikeChannel() && (ee = H.intl.string(H.t["3xjX0U"]));
        let en = Z ? "text-muted" : "text-default",
            et = (0, m.r)(Z ? c.A.colors.TEXT_MUTED : c.A.colors.TEXT_DEFAULT).hex();
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(u.m, {
                    text: Y,
                    delay: 500,
                    position: R,
                    children: (0, l.jsxs)(x.D, {
                        className: a()(P.WG, { [P.Qn]: h, [P.wp]: f, [P.r9]: Z }),
                        onClick: (e) => {
                            if (!Z) return e.stopPropagation(), j(d.id, i.id, s.id), !0;
                        },
                        onContextMenu: (e) => {
                            i.isGuildVocal()
                                ? (0, p.L3)(e, async () => {
                                      let { default: e } = await Promise.all([
                                          t.e("97262"),
                                          t.e("2381"),
                                          t.e("40394"),
                                          t.e("53378"),
                                      ]).then(t.bind(t, 698193));
                                      return (n) => (0, l.jsx)(e, { ...n, channel: i, guild: d });
                                  })
                                : (0, p.L3)(e, async () => {
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
                                className: P.yW,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: P.HA,
                                        children: [
                                            (0, l.jsx)(E.gm, { channel: i, guild: d }),
                                            (0, l.jsx)(o.A, {
                                                className: P.__invalid_name,
                                                children: (0, l.jsx)(_.E, {
                                                    className: P.be,
                                                    variant: "text-md/medium",
                                                    lineClamp: 1,
                                                    color: en,
                                                    children: z,
                                                }),
                                            }),
                                            G ? (0, l.jsx)(b.A, { color: et, className: P.PC }) : null,
                                            X
                                                ? (0, l.jsx)(A.Lp, {
                                                      text: H.intl.string(H.t.y2b7CA),
                                                      color: c.A.unsafe_rawColors.BRAND_260.css,
                                                      className: P.wD,
                                                  })
                                                : null,
                                        ],
                                    }),
                                    (0, l.jsx)("div", { className: P.Ze, children: Q }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: P.tN,
                                children: [
                                    (0, l.jsx)("div", {
                                        className: P.Kx,
                                        children: (0, l.jsx)(C.$, {
                                            size: "sm",
                                            variant: "overlay-primary",
                                            onClick: $,
                                            text: ee,
                                            onKeyDown: (e) => {
                                                (e.key === k.dh.ENTER || e.key === k.dh.SPACE) &&
                                                    (e.preventDefault(), e.stopPropagation(), $(e));
                                            },
                                        }),
                                    }),
                                    (0, l.jsx)(g.P, { checked: W, disabled: Z }),
                                ],
                            }),
                        ],
                    }),
                }),
                !f && (0, l.jsx)(q, {}),
            ],
        });
    });
function Y(e) {
    let { categories: n, guild: t, className: s, innerClassName: r, hasSidebar: c } = e,
        { onChannelClick: o } = (0, R.A)(t.id),
        u = (0, j.JZ)(d.M.CHANNEL_BROWSER_NUX) ? 0 : -1,
        _ = i.useCallback(
            (e) => {
                let { section: i } = e;
                if (0 === i && -1 === u) return null;
                let s = n._categories[i + u];
                return (0, l.jsx)(W, { channel: s.channel, guild: t, onCategoryClick: o }, s.channel.id);
            },
            [n, t, u, o],
        ),
        h = i.useCallback(
            (e) => {
                let { section: i, row: s } = e;
                if (0 === i && -1 === u) return (0, l.jsx)(G.A, { guild: t });
                let a = n._categories[i + u],
                    r = n[a.channel.id][s];
                return null == r
                    ? null
                    : (0, l.jsx)(
                          Z,
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
        m = (0, G.C)(t.id),
        x = (0, L.zH)(t.id, n, 64, m);
    return (0, l.jsx)(
        f.Ei,
        {
            className: s,
            innerClassName: a()(r, P.bv),
            sectionHeight: 48,
            rowHeight: (e) => x[e].rowHeight,
            renderSection: _,
            renderRow: h,
            sections: x.map((e) => e.rowCount),
        },
        "channel-browser-list",
    );
}
