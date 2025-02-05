t.d(n, { Z: () => O }), t(47120), t(653041), t(536091);
var l = t(200651),
    i = t(192379),
    a = t(120356),
    r = t.n(a),
    o = t(442837),
    s = t(704215),
    d = t(692547),
    c = t(481060),
    u = t(239091),
    m = t(111028),
    h = t(605236),
    x = t(66999),
    _ = t(549631),
    p = t(473403),
    f = t(454585),
    g = t(22082),
    C = t(703656),
    v = t(6025),
    I = t(922482),
    j = t(601070),
    N = t(216306),
    Z = t(163),
    b = t(753540),
    E = t(70297),
    w = t(981631),
    S = t(176505),
    y = t(388032),
    T = t(397405);
let B = new Set([w.d4z.GUILD_FORUM, w.d4z.GUILD_MEDIA]),
    A = new Set([w.d4z.GUILD_VOICE, w.d4z.GUILD_STAGE_VOICE]);
function R(e) {
    let { guild: n, channel: i, onCategoryClick: a } = e,
        o = (0, b.Mf)(n.id, i.id, i.id),
        s = (0, b.t4)(n.id, i.id, i.id);
    return (0, l.jsxs)('div', {
        className: r()(T.categoryRow, { [T.uncategorized]: 'null' === i.id }),
        onContextMenu: (e) => {
            (0, u.jW)(e, async () => {
                let { default: e } = await Promise.all([t.e('8965'), t.e('14280')]).then(t.bind(t, 139035));
                return (t) =>
                    (0, l.jsx)(e, {
                        ...t,
                        channel: i,
                        guild: n
                    });
            });
        },
        children: [
            (0, l.jsx)(c.Text, {
                className: T.categoryText,
                color: 'text-muted',
                variant: 'text-xs/semibold',
                lineClamp: 1,
                children: i.name
            }),
            'null' !== i.id &&
                !s &&
                (0, l.jsxs)(c.P3F, {
                    className: T.selectAll,
                    onClick: () => {
                        s || a(n.id, i.id, i.id);
                    },
                    children: [
                        (0, l.jsx)(c.XZJ, {
                            className: T.selectAllCheckbox,
                            size: 14,
                            shape: c.XZJ.Shapes.SMALL_BOX,
                            value: o,
                            type: c.XZJ.Types.INVERTED,
                            displayOnly: !0
                        }),
                        (0, l.jsx)(c.Text, {
                            color: 'text-muted',
                            variant: 'text-xs/medium',
                            children: y.intl.string(y.t.mSQwnZ)
                        })
                    ]
                })
        ]
    });
}
let P = i.memo(function () {
        return (0, l.jsx)('div', { className: T.separator });
    }),
    k = i.memo(function (e) {
        let { index: n } = e;
        return (0, l.jsx)(
            c.Text,
            {
                variant: 'text-xs/normal',
                className: T.subtitleSeparator,
                children: '\xB7'
            },
            'separator-'.concat(n)
        );
    }),
    L = i.memo(function (e) {
        let { channel: n, category: i, guild: a, isFirstChannel: s, isLastChannel: h, onChannelClick: Z, tooltipDirection: E = 'right' } = e,
            { isSubscriptionGated: R } = (0, x.Z)(n.id),
            L = (0, b.Mf)(a.id, n.id, i.id),
            O = (0, b.t4)(a.id, n.id, i.id),
            M = (0, b.EH)(a.id, i.id),
            D = (0, o.e7)([j.Z], () => j.Z.getActiveThreadCount(a.id, n.id)),
            H = (0, o.e7)([g.Z], () => g.Z.shouldIndicateNewChannel(a.id, n.id)),
            U = (e) => {
                if (!O) return e.stopPropagation(), Z(a.id, n.id, i.id), !0;
            },
            G = (e) => {
                n.isGuildVocal()
                    ? (0, u.jW)(e, async () => {
                          let { default: e } = await Promise.all([t.e('79695'), t.e('18320'), t.e('83331'), t.e('81070')]).then(t.bind(t, 213202));
                          return (t) =>
                              (0, l.jsx)(e, {
                                  ...t,
                                  channel: n,
                                  guild: a
                              });
                      })
                    : (0, u.jW)(e, async () => {
                          let { default: e } = await Promise.all([t.e('79695'), t.e('18320'), t.e('44011')]).then(t.bind(t, 373651));
                          return (t) =>
                              (0, l.jsx)(e, {
                                  ...t,
                                  channel: n,
                                  guild: a
                              });
                      });
            },
            F = (function (e, n) {
                let t = [];
                return (
                    w.TPd.GUILD_THREADS_ONLY.has(e.type) &&
                        n >= 1 &&
                        t.push(
                            (0, l.jsx)(
                                c.Text,
                                {
                                    variant: 'text-xs/normal',
                                    className: T.channelSubtitle,
                                    children: y.intl.format(y.t.z0qMLy, { count: n })
                                },
                                'thread-count'
                            )
                        ),
                    A.has(e.type) ||
                        t.push(
                            (0, l.jsx)(
                                c.Text,
                                {
                                    variant: 'text-xs/normal',
                                    className: T.channelSubtitle,
                                    children: (0, N.qw)(e.id)
                                },
                                'active'
                            )
                        ),
                    null != e.topic &&
                        e.topic.length > 0 &&
                        t.push(
                            (0, l.jsx)(
                                m.Z,
                                {
                                    children: (0, l.jsx)(c.Text, {
                                        className: T.topic,
                                        variant: 'text-xs/normal',
                                        children: f.Z.parseTopic(e.topic, !0, { channelId: e.id })
                                    })
                                },
                                'topic'
                            )
                        ),
                    [t.map((e, n) => [e, (0, l.jsx)(k, { index: n }, 'subtitle-separator-'.concat(n))])].flat(2).slice(0, -1)
                );
            })(n, D),
            W = (e) => (
                (e.stopPropagation(), B.has(n.type) || e.shiftKey)
                    ? (0, C.XU)(a.id, n.id)
                    : n.isGuildStageVoice() || n.isGuildVoice()
                      ? (0, I.Cq)(n)
                      : v.Z.openChannelAsSidebar({
                            guildId: n.guild_id,
                            channelId: n.id,
                            baseChannelId: S.oC.CHANNEL_BROWSER
                        }),
                !0
            ),
            z = y.intl.string(y.t.vetGQk);
        n.isGuildStageVoice() || n.isGuildVoice() ? (z = y.intl.string(y.t.VJlc0d)) : n.isForumLikeChannel() && (z = y.intl.string(y.t['3xjX0d']));
        let q = O ? 'text-muted' : 'text-normal',
            X = (0, c.dQu)(O ? d.Z.colors.TEXT_MUTED : d.Z.colors.TEXT_NORMAL).hex();
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(c.ua7, {
                    text: M,
                    delay: 500,
                    position: E,
                    children: (e) =>
                        (0, l.jsxs)(c.P3F, {
                            className: r()(T.channelRow, {
                                [T.firstChannel]: s,
                                [T.lastChannel]: h,
                                [T.disabled]: O
                            }),
                            ...e,
                            onClick: U,
                            onContextMenu: G,
                            children: [
                                (0, l.jsxs)('div', {
                                    className: T.channelInfo,
                                    children: [
                                        (0, l.jsxs)('div', {
                                            className: T.channelName,
                                            children: [
                                                (0, l.jsx)(p._, {
                                                    channel: n,
                                                    guild: a
                                                }),
                                                (0, l.jsx)(m.Z, {
                                                    className: T.__invalid_name,
                                                    children: (0, l.jsx)(c.Text, {
                                                        className: T.channelText,
                                                        variant: 'text-md/medium',
                                                        lineClamp: 1,
                                                        color: q,
                                                        children: n.name
                                                    })
                                                }),
                                                R
                                                    ? (0, l.jsx)(_.Z, {
                                                          color: X,
                                                          className: T.premiumIcon
                                                      })
                                                    : null,
                                                H
                                                    ? (0, l.jsx)(c.IGR, {
                                                          text: y.intl.string(y.t.y2b7CA),
                                                          color: d.Z.unsafe_rawColors.BRAND_260.css,
                                                          className: T.titleBadge
                                                      })
                                                    : null
                                            ]
                                        }),
                                        (0, l.jsx)('div', {
                                            className: T.channelSubtitles,
                                            children: F
                                        })
                                    ]
                                }),
                                (0, l.jsxs)('div', {
                                    className: T.channelActions,
                                    children: [
                                        (0, l.jsx)(c.zxk, {
                                            look: c.iLD.OUTLINED,
                                            color: c.Ttl.PRIMARY,
                                            size: c.PhG.SMALL,
                                            className: T.viewChannelButton,
                                            onClick: W,
                                            children: z
                                        }),
                                        (0, l.jsx)(c.XZJ, {
                                            'aria-checked': L,
                                            value: L,
                                            type: c.XZJ.Types.INVERTED,
                                            disabled: O,
                                            innerClassName: T.checkboxInner,
                                            displayOnly: !0
                                        })
                                    ]
                                })
                            ]
                        })
                }),
                !h && (0, l.jsx)(P, {})
            ]
        });
    });
function O(e) {
    let { categories: n, guild: t, className: a, innerClassName: o, hasSidebar: d } = e,
        { onChannelClick: u } = (0, Z.Z)(t.id),
        m = (0, h.wE)(s.z.CHANNEL_BROWSER_NUX) ? 0 : -1,
        x = i.useCallback(
            (e) => {
                let { section: i } = e;
                if (0 === i && -1 === m) return null;
                let a = n._categories[i + m];
                return (0, l.jsx)(
                    R,
                    {
                        channel: a.channel,
                        guild: t,
                        onCategoryClick: u
                    },
                    a.channel.id
                );
            },
            [n, t, m, u]
        ),
        _ = i.useCallback(
            (e) => {
                let { section: i, row: a } = e;
                if (0 === i && -1 === m) return (0, l.jsx)(E.Z, { guild: t });
                let r = n._categories[i + m],
                    o = n[r.channel.id][a];
                return null == o
                    ? null
                    : (0, l.jsx)(
                          L,
                          {
                              category: r.channel,
                              channel: o.channel,
                              guild: t,
                              isFirstChannel: 0 === a,
                              isLastChannel: n[r.channel.id].length - 1 === a,
                              tooltipDirection: d ? 'right' : 'top',
                              onChannelClick: u
                          },
                          o.channel.id
                      );
            },
            [n, t, m, d, u]
        ),
        p = (0, E.q)(t.id),
        f = (0, N.tn)(t.id, n, 64, p);
    return (0, l.jsx)(
        c._2F,
        {
            className: a,
            innerClassName: r()(o, T.scrollerInner),
            sectionHeight: 48,
            rowHeight: (e) => f[e].rowHeight,
            renderSection: x,
            renderRow: _,
            sections: f.map((e) => e.rowCount)
        },
        'channel-browser-list'
    );
}
