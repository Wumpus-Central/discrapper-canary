n.d(t, { A: () => V }), n(896048), n(321073), n(864466), n(443073);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(311907),
    c = n(554146),
    d = n(827734),
    o = n(3026),
    u = n(990078),
    f = n(397927),
    b = n(442433),
    h = n(826673),
    p = n(721592),
    g = n(35275),
    m = n(166444),
    x = n(46054),
    A = n(454058),
    j = n(976860),
    O = n(138298),
    C = n(323443),
    y = n(863005),
    v = n(637248),
    _ = n(329255),
    N = n(197843),
    w = n(915644),
    E = n(652215),
    S = n(746080),
    I = n(650583),
    P = n(985018),
    D = n(282627),
    R = n(206314);
function L(e) {
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
function T(e, t) {
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
let G = new Set([E.rbe.GUILD_FORUM, E.rbe.GUILD_MEDIA]),
    H = new Set([E.rbe.GUILD_VOICE, E.rbe.GUILD_STAGE_VOICE]);
function M(e) {
    let { guild: t, channel: r, onCategoryClick: i } = e,
        s = (0, N.Rg)(t.id, r.id, r.id),
        c = (0, N.eK)(t.id, r.id, r.id);
    return (0, l.jsxs)("div", {
        className: a()(D.Fv, { [D.d0]: "null" === r.id }),
        onContextMenu: (e) => {
            (0, b.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("75149"), n.e("30997")]).then(n.bind(n, 725756));
                return (n) =>
                    (0, l.jsx)(
                        e,
                        T(L({}, n), {
                            channel: r,
                            guild: t,
                        }),
                    );
            });
        },
        children: [
            (0, l.jsx)(f.Text, {
                className: D.O1,
                color: "text-strong",
                variant: "text-lg/medium",
                lineClamp: 1,
                children: r.name,
            }),
            "null" !== r.id &&
                !c &&
                (0, l.jsx)("div", {
                    children: (0, l.jsx)(f.dOG, {
                        label: P.intl.string(P.t.mSQwnW),
                        checked: s,
                        onChange: () => void (!c && i(t.id, r.id, r.id)),
                    }),
                }),
        ],
    });
}
let k = r.memo(function () {
        return (0, l.jsx)("div", { className: D.me });
    }),
    U = r.memo(function (e) {
        let { index: t } = e;
        return (0, l.jsx)(
            f.Text,
            {
                variant: "text-xs/normal",
                className: D.Ks,
                children: "\xB7",
            },
            "separator-".concat(t),
        );
    }),
    B = r.memo(function (e) {
        let t,
            {
                channel: r,
                category: i,
                guild: c,
                isFirstChannel: h,
                isLastChannel: _,
                onChannelClick: w,
                tooltipDirection: M = "right",
            } = e,
            { isSubscriptionGated: B } = (0, p.A)(r.id),
            V = (0, N.Rg)(c.id, r.id, i.id),
            F = (0, N.eK)(c.id, r.id, i.id),
            W = (0, N.v)(c.id, i.id),
            q = (0, s.bG)([y.A], () => y.A.getActiveThreadCount(c.id, r.id)),
            K = (0, s.bG)([A.A], () => A.A.shouldIndicateNewChannel(c.id, r.id)),
            Z =
                ((t = []),
                E.kvI.GUILD_THREADS_ONLY.has(r.type) &&
                    q >= 1 &&
                    t.push(
                        (0, l.jsx)(
                            f.Text,
                            {
                                variant: "text-xs/normal",
                                className: D.qy,
                                children: P.intl.format(P.t.z0qML2, { count: q }),
                            },
                            "thread-count",
                        ),
                    ),
                H.has(r.type) ||
                    t.push(
                        (0, l.jsx)(
                            f.Text,
                            {
                                variant: "text-xs/normal",
                                className: D.qy,
                                children: (0, v.YC)(r.id),
                            },
                            "active",
                        ),
                    ),
                null != r.topic &&
                    r.topic.length > 0 &&
                    t.push(
                        (0, l.jsx)(
                            o.A,
                            {
                                className: R.PT,
                                children: (0, l.jsx)(f.Text, {
                                    className: D.At,
                                    variant: "text-xs/normal",
                                    children: x.A.parseTopic(r.topic, !0, { channelId: r.id }),
                                }),
                            },
                            "topic",
                        ),
                    ),
                [t.map((e, t) => [e, (0, l.jsx)(U, { index: t }, "subtitle-separator-".concat(t))])]
                    .flat(2)
                    .slice(0, -1)),
            Y = (e) => (
                (e.stopPropagation(), G.has(r.type) || e.shiftKey)
                    ? (0, j.uh)(c.id, r.id)
                    : r.isGuildStageVoice() || r.isGuildVoice()
                      ? (0, C.av)(r)
                      : O.A.openChannelAsSidebar({
                            guildId: r.guild_id,
                            channelId: r.id,
                            baseChannelId: S.VV.CHANNEL_BROWSER,
                        }),
                !0
            ),
            J = P.intl.string(P.t.vetGQs);
        r.isGuildStageVoice() || r.isGuildVoice()
            ? (J = P.intl.string(P.t.VJlc0S))
            : r.isForumLikeChannel() && (J = P.intl.string(P.t["3xjX0U"]));
        let z = F ? "text-muted" : "text-default",
            X = (0, f.rdh)(F ? d.A.colors.TEXT_MUTED : d.A.colors.TEXT_DEFAULT).hex();
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(u.m, {
                    text: W,
                    delay: 500,
                    position: M,
                    children: (0, l.jsxs)(f.DUT, {
                        className: a()(D.WG, {
                            [D.Qn]: h,
                            [D.wp]: _,
                            [D.r9]: F,
                        }),
                        onClick: (e) => {
                            if (!F) return e.stopPropagation(), w(c.id, r.id, i.id), !0;
                        },
                        onContextMenu: (e) => {
                            r.isGuildVocal()
                                ? (0, b.L3)(e, async () => {
                                      let { default: e } = await Promise.all([
                                          n.e("97262"),
                                          n.e("57287"),
                                          n.e("40394"),
                                          n.e("53378"),
                                      ]).then(n.bind(n, 698193));
                                      return (t) =>
                                          (0, l.jsx)(
                                              e,
                                              T(L({}, t), {
                                                  channel: r,
                                                  guild: c,
                                              }),
                                          );
                                  })
                                : (0, b.L3)(e, async () => {
                                      let { default: e } = await Promise.all([
                                          n.e("97262"),
                                          n.e("57287"),
                                          n.e("77666"),
                                      ]).then(n.bind(n, 370372));
                                      return (t) =>
                                          (0, l.jsx)(
                                              e,
                                              T(L({}, t), {
                                                  channel: r,
                                                  guild: c,
                                              }),
                                          );
                                  });
                        },
                        children: [
                            (0, l.jsxs)("div", {
                                className: D.yW,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: D.HA,
                                        children: [
                                            (0, l.jsx)(m.gm, {
                                                channel: r,
                                                guild: c,
                                            }),
                                            (0, l.jsx)(o.A, {
                                                className: D.__invalid_name,
                                                children: (0, l.jsx)(f.Text, {
                                                    className: D.be,
                                                    variant: "text-md/medium",
                                                    lineClamp: 1,
                                                    color: z,
                                                    children: r.name,
                                                }),
                                            }),
                                            B
                                                ? (0, l.jsx)(g.A, {
                                                      color: X,
                                                      className: D.PC,
                                                  })
                                                : null,
                                            K
                                                ? (0, l.jsx)(f.LpS, {
                                                      text: P.intl.string(P.t.y2b7CA),
                                                      color: d.A.unsafe_rawColors.BRAND_260.css,
                                                      className: D.wD,
                                                  })
                                                : null,
                                        ],
                                    }),
                                    (0, l.jsx)("div", {
                                        className: D.Ze,
                                        children: Z,
                                    }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: D.tN,
                                children: [
                                    (0, l.jsx)("div", {
                                        className: D.Kx,
                                        children: (0, l.jsx)(f.Button, {
                                            size: "sm",
                                            variant: "overlay-primary",
                                            onClick: Y,
                                            text: J,
                                            onKeyDown: (e) => {
                                                (e.key === I.dh.ENTER || e.key === I.dh.SPACE) &&
                                                    (e.preventDefault(), e.stopPropagation(), Y(e));
                                            },
                                        }),
                                    }),
                                    (0, l.jsx)(f.P7L, {
                                        checked: V,
                                        disabled: F,
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
                !_ && (0, l.jsx)(k, {}),
            ],
        });
    });
function V(e) {
    let { categories: t, guild: n, className: i, innerClassName: s, hasSidebar: d } = e,
        { onChannelClick: o } = (0, _.A)(n.id),
        u = (0, h.JZ)(c.M.CHANNEL_BROWSER_NUX) ? 0 : -1,
        b = r.useCallback(
            (e) => {
                let { section: r } = e;
                if (0 === r && -1 === u) return null;
                let i = t._categories[r + u];
                return (0, l.jsx)(
                    M,
                    {
                        channel: i.channel,
                        guild: n,
                        onCategoryClick: o,
                    },
                    i.channel.id,
                );
            },
            [t, n, u, o],
        ),
        p = r.useCallback(
            (e) => {
                let { section: r, row: i } = e;
                if (0 === r && -1 === u) return (0, l.jsx)(w.A, { guild: n });
                let a = t._categories[r + u],
                    s = t[a.channel.id][i];
                return null == s
                    ? null
                    : (0, l.jsx)(
                          B,
                          {
                              category: a.channel,
                              channel: s.channel,
                              guild: n,
                              isFirstChannel: 0 === i,
                              isLastChannel: t[a.channel.id].length - 1 === i,
                              tooltipDirection: d ? "right" : "top",
                              onChannelClick: o,
                          },
                          s.channel.id,
                      );
            },
            [t, n, u, d, o],
        ),
        g = (0, w.C)(n.id),
        m = (0, v.zH)(n.id, t, 64, g);
    return (0, l.jsx)(
        f.Eie,
        {
            className: i,
            innerClassName: a()(s, D.bv),
            sectionHeight: 48,
            rowHeight: (e) => m[e].rowHeight,
            renderSection: b,
            renderRow: p,
            sections: m.map((e) => e.rowCount),
        },
        "channel-browser-list",
    );
}
