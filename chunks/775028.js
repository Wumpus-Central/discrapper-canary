(n.d(t, { Z: () => H }), n(388685), n(539854), n(472816), n(794429));
var l = n(255367),
    r = n(73800),
    i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(704215),
    c = n(692547),
    d = n(481060),
    u = n(239091),
    m = n(111028),
    h = n(266454),
    p = n(66999),
    f = n(549631),
    g = n(473403),
    x = n(454585),
    _ = n(22082),
    C = n(703656),
    j = n(6025),
    b = n(922482),
    v = n(601070),
    y = n(216306),
    O = n(163),
    Z = n(753540),
    N = n(70297),
    I = n(981631),
    w = n(176505),
    P = n(388032),
    E = n(174612),
    S = n(73433);
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            l.forEach(function (t) {
                var l;
                ((l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = l));
            }));
    }
    return e;
}
function A(e, t) {
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
let B = new Set([I.d4z.GUILD_FORUM, I.d4z.GUILD_MEDIA]),
    k = new Set([I.d4z.GUILD_VOICE, I.d4z.GUILD_STAGE_VOICE]);
function R(e) {
    let { guild: t, channel: r, onCategoryClick: i } = e,
        o = (0, Z.Mf)(t.id, r.id, r.id),
        s = (0, Z.t4)(t.id, r.id, r.id);
    return (0, l.jsxs)('div', {
        className: a()(E.categoryRow, { [E.uncategorized]: 'null' === r.id }),
        onContextMenu: (e) => {
            (0, u.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('8965'), n.e('14280')]).then(n.bind(n, 139035));
                return (n) =>
                    (0, l.jsx)(
                        e,
                        A(T({}, n), {
                            channel: r,
                            guild: t
                        })
                    );
            });
        },
        children: [
            (0, l.jsx)(d.Text, {
                className: E.categoryText,
                color: 'text-muted',
                variant: 'text-sm/medium',
                lineClamp: 1,
                children: r.name
            }),
            'null' !== r.id &&
                !s &&
                (0, l.jsxs)(d.P3F, {
                    className: E.selectAll,
                    onClick: () => {
                        s || i(t.id, r.id, r.id);
                    },
                    children: [
                        (0, l.jsx)(d.XZJ, {
                            className: E.selectAllCheckbox,
                            size: 14,
                            shape: d.XZJ.Shapes.SMALL_BOX,
                            value: o,
                            type: d.XZJ.Types.INVERTED,
                            displayOnly: !0
                        }),
                        (0, l.jsx)(d.Text, {
                            color: 'text-muted',
                            variant: 'text-xs/medium',
                            children: P.intl.string(P.t.mSQwnZ)
                        })
                    ]
                })
        ]
    });
}
let D = r.memo(function () {
        return (0, l.jsx)('div', { className: E.separator });
    }),
    L = r.memo(function (e) {
        let { index: t } = e;
        return (0, l.jsx)(
            d.Text,
            {
                variant: 'text-xs/normal',
                className: E.subtitleSeparator,
                children: '\xB7'
            },
            'separator-'.concat(t)
        );
    }),
    M = r.memo(function (e) {
        let { channel: t, category: r, guild: i, isFirstChannel: s, isLastChannel: h, onChannelClick: O, tooltipDirection: N = 'right' } = e,
            { isSubscriptionGated: R } = (0, p.Z)(t.id),
            M = (0, Z.Mf)(i.id, t.id, r.id),
            H = (0, Z.t4)(i.id, t.id, r.id),
            U = (0, Z.EH)(i.id, r.id),
            G = (0, o.e7)([v.Z], () => v.Z.getActiveThreadCount(i.id, t.id)),
            W = (0, o.e7)([_.Z], () => _.Z.shouldIndicateNewChannel(i.id, t.id)),
            F = (e) => {
                if (!H) return (e.stopPropagation(), O(i.id, t.id, r.id), !0);
            },
            q = (e) => {
                t.isGuildVocal()
                    ? (0, u.jW)(e, async () => {
                          let { default: e } = await Promise.all([n.e('79695'), n.e('18320'), n.e('83331'), n.e('81070')]).then(n.bind(n, 213202));
                          return (n) =>
                              (0, l.jsx)(
                                  e,
                                  A(T({}, n), {
                                      channel: t,
                                      guild: i
                                  })
                              );
                      })
                    : (0, u.jW)(e, async () => {
                          let { default: e } = await Promise.all([n.e('79695'), n.e('18320'), n.e('44011')]).then(n.bind(n, 373651));
                          return (n) =>
                              (0, l.jsx)(
                                  e,
                                  A(T({}, n), {
                                      channel: t,
                                      guild: i
                                  })
                              );
                      });
            },
            z = (function (e, t) {
                let n = [];
                return (
                    I.TPd.GUILD_THREADS_ONLY.has(e.type) &&
                        t >= 1 &&
                        n.push(
                            (0, l.jsx)(
                                d.Text,
                                {
                                    variant: 'text-xs/normal',
                                    className: E.channelSubtitle,
                                    children: P.intl.format(P.t.z0qMLy, { count: t })
                                },
                                'thread-count'
                            )
                        ),
                    k.has(e.type) ||
                        n.push(
                            (0, l.jsx)(
                                d.Text,
                                {
                                    variant: 'text-xs/normal',
                                    className: E.channelSubtitle,
                                    children: (0, y.qw)(e.id)
                                },
                                'active'
                            )
                        ),
                    null != e.topic &&
                        e.topic.length > 0 &&
                        n.push(
                            (0, l.jsx)(
                                m.Z,
                                {
                                    className: S.markup,
                                    children: (0, l.jsx)(d.Text, {
                                        className: E.topic,
                                        variant: 'text-xs/normal',
                                        children: x.Z.parseTopic(e.topic, !0, { channelId: e.id })
                                    })
                                },
                                'topic'
                            )
                        ),
                    [n.map((e, t) => [e, (0, l.jsx)(L, { index: t }, 'subtitle-separator-'.concat(t))])].flat(2).slice(0, -1)
                );
            })(t, G),
            X = (e) => (
                (e.stopPropagation(), B.has(t.type) || e.shiftKey)
                    ? (0, C.XU)(i.id, t.id)
                    : t.isGuildStageVoice() || t.isGuildVoice()
                      ? (0, b.Cq)(t)
                      : j.Z.openChannelAsSidebar({
                            guildId: t.guild_id,
                            channelId: t.id,
                            baseChannelId: w.oC.CHANNEL_BROWSER
                        }),
                !0
            ),
            V = P.intl.string(P.t.vetGQk);
        t.isGuildStageVoice() || t.isGuildVoice() ? (V = P.intl.string(P.t.VJlc0d)) : t.isForumLikeChannel() && (V = P.intl.string(P.t['3xjX0d']));
        let J = H ? 'text-muted' : 'text-default',
            Q = (0, d.dQu)(H ? c.Z.colors.TEXT_MUTED : c.Z.colors.TEXT_DEFAULT).hex();
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(d.ua7, {
                    text: U,
                    delay: 500,
                    position: N,
                    children: (e) =>
                        (0, l.jsxs)(
                            d.P3F,
                            A(
                                T(
                                    {
                                        className: a()(E.channelRow, {
                                            [E.firstChannel]: s,
                                            [E.lastChannel]: h,
                                            [E.disabled]: H
                                        })
                                    },
                                    e
                                ),
                                {
                                    onClick: F,
                                    onContextMenu: q,
                                    children: [
                                        (0, l.jsxs)('div', {
                                            className: E.channelInfo,
                                            children: [
                                                (0, l.jsxs)('div', {
                                                    className: E.channelName,
                                                    children: [
                                                        (0, l.jsx)(g._W, {
                                                            channel: t,
                                                            guild: i
                                                        }),
                                                        (0, l.jsx)(m.Z, {
                                                            className: E.__invalid_name,
                                                            children: (0, l.jsx)(d.Text, {
                                                                className: E.channelText,
                                                                variant: 'text-md/medium',
                                                                lineClamp: 1,
                                                                color: J,
                                                                children: t.name
                                                            })
                                                        }),
                                                        R
                                                            ? (0, l.jsx)(f.Z, {
                                                                  color: Q,
                                                                  className: E.premiumIcon
                                                              })
                                                            : null,
                                                        W
                                                            ? (0, l.jsx)(d.IGR, {
                                                                  text: P.intl.string(P.t.y2b7CA),
                                                                  color: c.Z.unsafe_rawColors.BRAND_260.css,
                                                                  className: E.titleBadge
                                                              })
                                                            : null
                                                    ]
                                                }),
                                                (0, l.jsx)('div', {
                                                    className: E.channelSubtitles,
                                                    children: z
                                                })
                                            ]
                                        }),
                                        (0, l.jsxs)('div', {
                                            className: E.channelActions,
                                            children: [
                                                (0, l.jsx)('div', {
                                                    className: E.viewChannelButtonWrapper,
                                                    children: (0, l.jsx)(d.zxk, {
                                                        size: 'sm',
                                                        variant: 'overlay-primary',
                                                        onClick: X,
                                                        text: V
                                                    })
                                                }),
                                                (0, l.jsx)(d.XZJ, {
                                                    'aria-checked': M,
                                                    value: M,
                                                    type: d.XZJ.Types.INVERTED,
                                                    disabled: H,
                                                    innerClassName: E.checkboxInner,
                                                    displayOnly: !0
                                                })
                                            ]
                                        })
                                    ]
                                }
                            )
                        )
                }),
                !h && (0, l.jsx)(D, {})
            ]
        });
    });
function H(e) {
    let { categories: t, guild: n, className: i, innerClassName: o, hasSidebar: c } = e,
        { onChannelClick: u } = (0, O.Z)(n.id),
        m = (0, h.Nj)(s.z.CHANNEL_BROWSER_NUX) ? 0 : -1,
        p = r.useCallback(
            (e) => {
                let { section: r } = e;
                if (0 === r && -1 === m) return null;
                let i = t._categories[r + m];
                return (0, l.jsx)(
                    R,
                    {
                        channel: i.channel,
                        guild: n,
                        onCategoryClick: u
                    },
                    i.channel.id
                );
            },
            [t, n, m, u]
        ),
        f = r.useCallback(
            (e) => {
                let { section: r, row: i } = e;
                if (0 === r && -1 === m) return (0, l.jsx)(N.Z, { guild: n });
                let a = t._categories[r + m],
                    o = t[a.channel.id][i];
                return null == o
                    ? null
                    : (0, l.jsx)(
                          M,
                          {
                              category: a.channel,
                              channel: o.channel,
                              guild: n,
                              isFirstChannel: 0 === i,
                              isLastChannel: t[a.channel.id].length - 1 === i,
                              tooltipDirection: c ? 'right' : 'top',
                              onChannelClick: u
                          },
                          o.channel.id
                      );
            },
            [t, n, m, c, u]
        ),
        g = (0, N.q)(n.id),
        x = (0, y.tn)(n.id, t, 64, g);
    return (0, l.jsx)(
        d._2F,
        {
            className: i,
            innerClassName: a()(o, E.scrollerInner),
            sectionHeight: 48,
            rowHeight: (e) => x[e].rowHeight,
            renderSection: p,
            renderRow: f,
            sections: x.map((e) => e.rowCount)
        },
        'channel-browser-list'
    );
}
