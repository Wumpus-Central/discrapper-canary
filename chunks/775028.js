t.d(n, { Z: () => M }), t(388685), t(539854), t(472816), t(794429);
var l = t(255367),
    r = t(73800),
    i = t(120356),
    a = t.n(i),
    o = t(442837),
    s = t(704215),
    c = t(692547),
    d = t(481060),
    u = t(239091),
    m = t(111028),
    h = t(605236),
    p = t(66999),
    f = t(549631),
    g = t(473403),
    x = t(454585),
    _ = t(22082),
    C = t(703656),
    j = t(6025),
    b = t(922482),
    v = t(601070),
    y = t(216306),
    O = t(163),
    I = t(753540),
    N = t(70297),
    Z = t(981631),
    w = t(176505),
    P = t(388032),
    E = t(174612);
function S(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            l = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            l.forEach(function (n) {
                var l;
                (l = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = l);
            });
    }
    return e;
}
function T(e, n) {
    return (
        (n = null != n ? n : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : (function (e, n) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, l);
                  }
                  return t;
              })(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              }),
        e
    );
}
let B = new Set([Z.d4z.GUILD_FORUM, Z.d4z.GUILD_MEDIA]),
    k = new Set([Z.d4z.GUILD_VOICE, Z.d4z.GUILD_STAGE_VOICE]);
function A(e) {
    let { guild: n, channel: r, onCategoryClick: i } = e,
        o = (0, I.Mf)(n.id, r.id, r.id),
        s = (0, I.t4)(n.id, r.id, r.id);
    return (0, l.jsxs)('div', {
        className: a()(E.categoryRow, { [E.uncategorized]: 'null' === r.id }),
        onContextMenu: (e) => {
            (0, u.jW)(e, async () => {
                let { default: e } = await Promise.all([t.e('8965'), t.e('14280')]).then(t.bind(t, 139035));
                return (t) =>
                    (0, l.jsx)(
                        e,
                        T(S({}, t), {
                            channel: r,
                            guild: n
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
                        s || i(n.id, r.id, r.id);
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
let R = r.memo(function () {
        return (0, l.jsx)('div', { className: E.separator });
    }),
    D = r.memo(function (e) {
        let { index: n } = e;
        return (0, l.jsx)(
            d.Text,
            {
                variant: 'text-xs/normal',
                className: E.subtitleSeparator,
                children: '\xB7'
            },
            'separator-'.concat(n)
        );
    }),
    L = r.memo(function (e) {
        let { channel: n, category: r, guild: i, isFirstChannel: s, isLastChannel: h, onChannelClick: O, tooltipDirection: N = 'right' } = e,
            { isSubscriptionGated: A } = (0, p.Z)(n.id),
            L = (0, I.Mf)(i.id, n.id, r.id),
            M = (0, I.t4)(i.id, n.id, r.id),
            H = (0, I.EH)(i.id, r.id),
            U = (0, o.e7)([v.Z], () => v.Z.getActiveThreadCount(i.id, n.id)),
            G = (0, o.e7)([_.Z], () => _.Z.shouldIndicateNewChannel(i.id, n.id)),
            W = (e) => {
                if (!M) return e.stopPropagation(), O(i.id, n.id, r.id), !0;
            },
            F = (e) => {
                n.isGuildVocal()
                    ? (0, u.jW)(e, async () => {
                          let { default: e } = await Promise.all([t.e('79695'), t.e('18320'), t.e('83331'), t.e('81070')]).then(t.bind(t, 213202));
                          return (t) =>
                              (0, l.jsx)(
                                  e,
                                  T(S({}, t), {
                                      channel: n,
                                      guild: i
                                  })
                              );
                      })
                    : (0, u.jW)(e, async () => {
                          let { default: e } = await Promise.all([t.e('79695'), t.e('18320'), t.e('44011')]).then(t.bind(t, 373651));
                          return (t) =>
                              (0, l.jsx)(
                                  e,
                                  T(S({}, t), {
                                      channel: n,
                                      guild: i
                                  })
                              );
                      });
            },
            z = (function (e, n) {
                let t = [];
                return (
                    Z.TPd.GUILD_THREADS_ONLY.has(e.type) &&
                        n >= 1 &&
                        t.push(
                            (0, l.jsx)(
                                d.Text,
                                {
                                    variant: 'text-xs/normal',
                                    className: E.channelSubtitle,
                                    children: P.intl.format(P.t.z0qMLy, { count: n })
                                },
                                'thread-count'
                            )
                        ),
                    k.has(e.type) ||
                        t.push(
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
                        t.push(
                            (0, l.jsx)(
                                m.Z,
                                {
                                    children: (0, l.jsx)(d.Text, {
                                        className: E.topic,
                                        variant: 'text-xs/normal',
                                        children: x.Z.parseTopic(e.topic, !0, { channelId: e.id })
                                    })
                                },
                                'topic'
                            )
                        ),
                    [t.map((e, n) => [e, (0, l.jsx)(D, { index: n }, 'subtitle-separator-'.concat(n))])].flat(2).slice(0, -1)
                );
            })(n, U),
            q = (e) => (
                (e.stopPropagation(), B.has(n.type) || e.shiftKey)
                    ? (0, C.XU)(i.id, n.id)
                    : n.isGuildStageVoice() || n.isGuildVoice()
                      ? (0, b.Cq)(n)
                      : j.Z.openChannelAsSidebar({
                            guildId: n.guild_id,
                            channelId: n.id,
                            baseChannelId: w.oC.CHANNEL_BROWSER
                        }),
                !0
            ),
            X = P.intl.string(P.t.vetGQk);
        n.isGuildStageVoice() || n.isGuildVoice() ? (X = P.intl.string(P.t.VJlc0d)) : n.isForumLikeChannel() && (X = P.intl.string(P.t['3xjX0d']));
        let V = M ? 'text-muted' : 'text-normal',
            J = (0, d.dQu)(M ? c.Z.colors.TEXT_MUTED : c.Z.colors.TEXT_NORMAL).hex();
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(d.ua7, {
                    text: H,
                    delay: 500,
                    position: N,
                    children: (e) =>
                        (0, l.jsxs)(
                            d.P3F,
                            T(
                                S(
                                    {
                                        className: a()(E.channelRow, {
                                            [E.firstChannel]: s,
                                            [E.lastChannel]: h,
                                            [E.disabled]: M
                                        })
                                    },
                                    e
                                ),
                                {
                                    onClick: W,
                                    onContextMenu: F,
                                    children: [
                                        (0, l.jsxs)('div', {
                                            className: E.channelInfo,
                                            children: [
                                                (0, l.jsxs)('div', {
                                                    className: E.channelName,
                                                    children: [
                                                        (0, l.jsx)(g._W, {
                                                            channel: n,
                                                            guild: i
                                                        }),
                                                        (0, l.jsx)(m.Z, {
                                                            className: E.__invalid_name,
                                                            children: (0, l.jsx)(d.Text, {
                                                                className: E.channelText,
                                                                variant: 'text-md/medium',
                                                                lineClamp: 1,
                                                                color: V,
                                                                children: n.name
                                                            })
                                                        }),
                                                        A
                                                            ? (0, l.jsx)(f.Z, {
                                                                  color: J,
                                                                  className: E.premiumIcon
                                                              })
                                                            : null,
                                                        G
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
                                                (0, l.jsx)(d.zxk, {
                                                    look: d.iLD.OUTLINED,
                                                    color: d.Ttl.PRIMARY,
                                                    size: d.PhG.SMALL,
                                                    className: E.viewChannelButton,
                                                    onClick: q,
                                                    children: X
                                                }),
                                                (0, l.jsx)(d.XZJ, {
                                                    'aria-checked': L,
                                                    value: L,
                                                    type: d.XZJ.Types.INVERTED,
                                                    disabled: M,
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
                !h && (0, l.jsx)(R, {})
            ]
        });
    });
function M(e) {
    let { categories: n, guild: t, className: i, innerClassName: o, hasSidebar: c } = e,
        { onChannelClick: u } = (0, O.Z)(t.id),
        m = (0, h.wE)(s.z.CHANNEL_BROWSER_NUX) ? 0 : -1,
        p = r.useCallback(
            (e) => {
                let { section: r } = e;
                if (0 === r && -1 === m) return null;
                let i = n._categories[r + m];
                return (0, l.jsx)(
                    A,
                    {
                        channel: i.channel,
                        guild: t,
                        onCategoryClick: u
                    },
                    i.channel.id
                );
            },
            [n, t, m, u]
        ),
        f = r.useCallback(
            (e) => {
                let { section: r, row: i } = e;
                if (0 === r && -1 === m) return (0, l.jsx)(N.Z, { guild: t });
                let a = n._categories[r + m],
                    o = n[a.channel.id][i];
                return null == o
                    ? null
                    : (0, l.jsx)(
                          L,
                          {
                              category: a.channel,
                              channel: o.channel,
                              guild: t,
                              isFirstChannel: 0 === i,
                              isLastChannel: n[a.channel.id].length - 1 === i,
                              tooltipDirection: c ? 'right' : 'top',
                              onChannelClick: u
                          },
                          o.channel.id
                      );
            },
            [n, t, m, c, u]
        ),
        g = (0, N.q)(t.id),
        x = (0, y.tn)(t.id, n, 64, g);
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
