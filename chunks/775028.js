t.d(n, {
    Z: function () {
        return R;
    }
}),
    t(47120),
    t(653041),
    t(536091);
var l = t(200651),
    a = t(192379),
    i = t(120356),
    r = t.n(i),
    o = t(442837),
    s = t(704215),
    c = t(692547),
    d = t(481060),
    u = t(239091),
    h = t(111028),
    m = t(605236),
    f = t(66999),
    p = t(549631),
    x = t(473403),
    C = t(454585),
    g = t(22082),
    _ = t(703656),
    b = t(6025),
    I = t(922482),
    N = t(601070),
    v = t(216306),
    Z = t(163),
    j = t(753540),
    B = t(70297),
    E = t(981631),
    S = t(176505),
    T = t(388032),
    w = t(397405);
let A = new Set([E.d4z.GUILD_FORUM, E.d4z.GUILD_MEDIA]),
    y = new Set([E.d4z.GUILD_VOICE, E.d4z.GUILD_STAGE_VOICE]);
function L(e) {
    let { guild: n, channel: a, onCategoryClick: i } = e,
        o = (0, j.Mf)(n.id, a.id, a.id),
        s = (0, j.t4)(n.id, a.id, a.id);
    return (0, l.jsxs)('div', {
        className: r()(w.categoryRow, { [w.uncategorized]: 'null' === a.id }),
        onContextMenu: (e) => {
            (0, u.jW)(e, async () => {
                let { default: e } = await t.e('8965').then(t.bind(t, 139035));
                return (t) =>
                    (0, l.jsx)(e, {
                        ...t,
                        channel: a,
                        guild: n
                    });
            });
        },
        children: [
            (0, l.jsx)(d.Text, {
                className: w.categoryText,
                color: 'text-muted',
                variant: 'text-xs/semibold',
                lineClamp: 1,
                children: a.name
            }),
            'null' !== a.id &&
                !s &&
                (0, l.jsxs)(d.Clickable, {
                    className: w.selectAll,
                    onClick: () => {
                        !s && i(n.id, a.id, a.id);
                    },
                    children: [
                        (0, l.jsx)(d.Checkbox, {
                            className: w.selectAllCheckbox,
                            size: 14,
                            shape: d.Checkbox.Shapes.SMALL_BOX,
                            value: o,
                            type: d.Checkbox.Types.INVERTED,
                            displayOnly: !0
                        }),
                        (0, l.jsx)(d.Text, {
                            color: 'text-muted',
                            variant: 'text-xs/medium',
                            children: T.intl.string(T.t.mSQwnZ)
                        })
                    ]
                })
        ]
    });
}
let k = a.memo(function () {
        return (0, l.jsx)('div', { className: w.separator });
    }),
    O = a.memo(function (e) {
        let { index: n } = e;
        return (0, l.jsx)(
            d.Text,
            {
                variant: 'text-xs/normal',
                className: w.subtitleSeparator,
                children: '\xB7'
            },
            'separator-'.concat(n)
        );
    }),
    P = a.memo(function (e) {
        let { channel: n, category: a, guild: i, isFirstChannel: s, isLastChannel: m, onChannelClick: Z, tooltipDirection: B = 'right' } = e,
            { isSubscriptionGated: L } = (0, f.Z)(n.id),
            P = (0, j.Mf)(i.id, n.id, a.id),
            R = (0, j.t4)(i.id, n.id, a.id),
            M = (0, j.EH)(i.id, a.id),
            D = (0, o.e7)([N.Z], () => N.Z.getActiveThreadCount(i.id, n.id)),
            H = (0, o.e7)([g.Z], () => g.Z.shouldIndicateNewChannel(i.id, n.id)),
            U = (e) => {
                if (!R) return e.stopPropagation(), Z(i.id, n.id, a.id), !0;
            },
            G = (e) => {
                n.isGuildVocal()
                    ? (0, u.jW)(e, async () => {
                          let { default: e } = await Promise.all([t.e('79695'), t.e('18320'), t.e('83331')]).then(t.bind(t, 213202));
                          return (t) =>
                              (0, l.jsx)(e, {
                                  ...t,
                                  channel: n,
                                  guild: i
                              });
                      })
                    : (0, u.jW)(e, async () => {
                          let { default: e } = await Promise.all([t.e('79695'), t.e('18320'), t.e('54310')]).then(t.bind(t, 373651));
                          return (t) =>
                              (0, l.jsx)(e, {
                                  ...t,
                                  channel: n,
                                  guild: i
                              });
                      });
            },
            W = (function (e, n) {
                let t = [];
                return (
                    E.TPd.GUILD_THREADS_ONLY.has(e.type) &&
                        n >= 1 &&
                        t.push(
                            (0, l.jsx)(
                                d.Text,
                                {
                                    variant: 'text-xs/normal',
                                    className: w.channelSubtitle,
                                    children: T.intl.format(T.t.z0qMLy, { count: n })
                                },
                                'thread-count'
                            )
                        ),
                    !y.has(e.type) &&
                        t.push(
                            (0, l.jsx)(
                                d.Text,
                                {
                                    variant: 'text-xs/normal',
                                    className: w.channelSubtitle,
                                    children: (0, v.qw)(e.id)
                                },
                                'active'
                            )
                        ),
                    null != e.topic &&
                        e.topic.length > 0 &&
                        t.push(
                            (0, l.jsx)(
                                h.Z,
                                {
                                    children: (0, l.jsx)(d.Text, {
                                        className: w.topic,
                                        variant: 'text-xs/normal',
                                        children: C.Z.parseTopic(e.topic, !0, { channelId: e.id })
                                    })
                                },
                                'topic'
                            )
                        ),
                    [t.map((e, n) => [e, (0, l.jsx)(O, { index: n }, 'subtitle-separator-'.concat(n))])].flat(2).slice(0, -1)
                );
            })(n, D),
            z = (e) =>
                (e.stopPropagation(), A.has(n.type) || e.shiftKey)
                    ? ((0, _.XU)(i.id, n.id), !0)
                    : n.isGuildStageVoice() || n.isGuildVoice()
                      ? ((0, I.Cq)(n), !0)
                      : (b.Z.openChannelAsSidebar({
                            guildId: n.guild_id,
                            channelId: n.id,
                            baseChannelId: S.oC.CHANNEL_BROWSER
                        }),
                        !0),
            F = T.intl.string(T.t.vetGQk);
        n.isGuildStageVoice() || n.isGuildVoice() ? (F = T.intl.string(T.t.VJlc0d)) : n.isForumLikeChannel() && (F = T.intl.string(T.t['3xjX0d']));
        let q = R ? 'text-muted' : 'text-normal',
            V = (0, d.useToken)(R ? c.Z.colors.TEXT_MUTED : c.Z.colors.TEXT_NORMAL).hex();
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(d.Tooltip, {
                    text: M,
                    delay: 500,
                    position: B,
                    children: (e) =>
                        (0, l.jsxs)(d.Clickable, {
                            className: r()(w.channelRow, {
                                [w.firstChannel]: s,
                                [w.lastChannel]: m,
                                [w.disabled]: R
                            }),
                            ...e,
                            onClick: U,
                            onContextMenu: G,
                            children: [
                                (0, l.jsxs)('div', {
                                    className: w.channelInfo,
                                    children: [
                                        (0, l.jsxs)('div', {
                                            className: w.channelName,
                                            children: [
                                                (0, l.jsx)(x._, {
                                                    channel: n,
                                                    guild: i
                                                }),
                                                (0, l.jsx)(h.Z, {
                                                    className: w.__invalid_name,
                                                    children: (0, l.jsx)(d.Text, {
                                                        className: w.channelText,
                                                        variant: 'text-md/medium',
                                                        lineClamp: 1,
                                                        color: q,
                                                        children: n.name
                                                    })
                                                }),
                                                L
                                                    ? (0, l.jsx)(p.Z, {
                                                          color: V,
                                                          className: w.premiumIcon
                                                      })
                                                    : null,
                                                H
                                                    ? (0, l.jsx)(d.TextBadge, {
                                                          text: T.intl.string(T.t.y2b7CA),
                                                          color: c.Z.unsafe_rawColors.BRAND_260.css,
                                                          className: w.titleBadge
                                                      })
                                                    : null
                                            ]
                                        }),
                                        (0, l.jsx)('div', {
                                            className: w.channelSubtitles,
                                            children: W
                                        })
                                    ]
                                }),
                                (0, l.jsxs)('div', {
                                    className: w.channelActions,
                                    children: [
                                        (0, l.jsx)(d.Button, {
                                            look: d.ButtonLooks.OUTLINED,
                                            color: d.ButtonColors.PRIMARY,
                                            size: d.ButtonSizes.SMALL,
                                            className: w.viewChannelButton,
                                            onClick: z,
                                            children: F
                                        }),
                                        (0, l.jsx)(d.Checkbox, {
                                            'aria-checked': P,
                                            value: P,
                                            type: d.Checkbox.Types.INVERTED,
                                            disabled: R,
                                            innerClassName: w.checkboxInner,
                                            displayOnly: !0
                                        })
                                    ]
                                })
                            ]
                        })
                }),
                !m && (0, l.jsx)(k, {})
            ]
        });
    });
function R(e) {
    let { categories: n, guild: t, className: i, innerClassName: o, hasSidebar: c } = e,
        { onChannelClick: u } = (0, Z.Z)(t.id),
        h = (0, m.wE)(s.z.CHANNEL_BROWSER_NUX) ? 0 : -1,
        f = a.useCallback(
            (e) => {
                let { section: a } = e;
                if (0 === a && -1 === h) return null;
                let i = n._categories[a + h];
                return (0, l.jsx)(
                    L,
                    {
                        channel: i.channel,
                        guild: t,
                        onCategoryClick: u
                    },
                    i.channel.id
                );
            },
            [n, t, h, u]
        ),
        p = a.useCallback(
            (e) => {
                let { section: a, row: i } = e;
                if (0 === a && -1 === h) return (0, l.jsx)(B.Z, { guild: t });
                let r = n._categories[a + h],
                    o = n[r.channel.id][i];
                return null == o
                    ? null
                    : (0, l.jsx)(
                          P,
                          {
                              category: r.channel,
                              channel: o.channel,
                              guild: t,
                              isFirstChannel: 0 === i,
                              isLastChannel: n[r.channel.id].length - 1 === i,
                              tooltipDirection: c ? 'right' : 'top',
                              onChannelClick: u
                          },
                          o.channel.id
                      );
            },
            [n, t, h, c, u]
        ),
        x = (0, B.q)(t.id),
        C = (0, v.tn)(t.id, n, 64, x);
    return (0, l.jsx)(
        d.ListAuto,
        {
            className: i,
            innerClassName: r()(o, w.scrollerInner),
            sectionHeight: 48,
            rowHeight: (e) => C[e].rowHeight,
            renderSection: f,
            renderRow: p,
            sections: C.map((e) => e.rowCount)
        },
        'channel-browser-list'
    );
}
