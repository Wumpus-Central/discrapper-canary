n.d(t, { Z: () => L }), n(388685), n(539854), n(472816), n(794429);
var r = n(200651),
    l = n(192379),
    a = n(120356),
    i = n.n(a),
    o = n(442837),
    s = n(704215),
    c = n(692547),
    d = n(481060),
    u = n(239091),
    m = n(111028),
    h = n(605236),
    p = n(66999),
    f = n(549631),
    g = n(473403),
    x = n(454585),
    _ = n(22082),
    C = n(703656),
    b = n(6025),
    j = n(922482),
    N = n(601070),
    v = n(216306),
    y = n(163),
    O = n(753540),
    I = n(70297),
    Z = n(981631),
    w = n(176505),
    P = n(388032),
    E = n(174612);
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
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
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let T = new Set([Z.d4z.GUILD_FORUM, Z.d4z.GUILD_MEDIA]),
    B = new Set([Z.d4z.GUILD_VOICE, Z.d4z.GUILD_STAGE_VOICE]);
function A(e) {
    let { guild: t, channel: l, onCategoryClick: a } = e,
        o = (0, O.Mf)(t.id, l.id, l.id),
        s = (0, O.t4)(t.id, l.id, l.id);
    return (0, r.jsxs)('div', {
        className: i()(E.categoryRow, { [E.uncategorized]: 'null' === l.id }),
        onContextMenu: (e) => {
            (0, u.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('8965'), n.e('14280')]).then(n.bind(n, 139035));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        k(S({}, n), {
                            channel: l,
                            guild: t
                        })
                    );
            });
        },
        children: [
            (0, r.jsx)(d.Text, {
                className: E.categoryText,
                color: 'text-muted',
                variant: 'text-sm/medium',
                lineClamp: 1,
                children: l.name
            }),
            'null' !== l.id &&
                !s &&
                (0, r.jsxs)(d.P3F, {
                    className: E.selectAll,
                    onClick: () => {
                        s || a(t.id, l.id, l.id);
                    },
                    children: [
                        (0, r.jsx)(d.XZJ, {
                            className: E.selectAllCheckbox,
                            size: 14,
                            shape: d.XZJ.Shapes.SMALL_BOX,
                            value: o,
                            type: d.XZJ.Types.INVERTED,
                            displayOnly: !0
                        }),
                        (0, r.jsx)(d.Text, {
                            color: 'text-muted',
                            variant: 'text-xs/medium',
                            children: P.NW.string(P.t.mSQwnZ)
                        })
                    ]
                })
        ]
    });
}
let R = l.memo(function () {
        return (0, r.jsx)('div', { className: E.separator });
    }),
    D = l.memo(function (e) {
        let { index: t } = e;
        return (0, r.jsx)(
            d.Text,
            {
                variant: 'text-xs/normal',
                className: E.subtitleSeparator,
                children: '\xB7'
            },
            'separator-'.concat(t)
        );
    }),
    W = l.memo(function (e) {
        let { channel: t, category: l, guild: a, isFirstChannel: s, isLastChannel: h, onChannelClick: y, tooltipDirection: I = 'right' } = e,
            { isSubscriptionGated: A } = (0, p.Z)(t.id),
            W = (0, O.Mf)(a.id, t.id, l.id),
            L = (0, O.t4)(a.id, t.id, l.id),
            M = (0, O.EH)(a.id, l.id),
            H = (0, o.e7)([N.Z], () => N.Z.getActiveThreadCount(a.id, t.id)),
            U = (0, o.e7)([_.Z], () => _.Z.shouldIndicateNewChannel(a.id, t.id)),
            G = (e) => {
                if (!L) return e.stopPropagation(), y(a.id, t.id, l.id), !0;
            },
            F = (e) => {
                t.isGuildVocal()
                    ? (0, u.jW)(e, async () => {
                          let { default: e } = await Promise.all([n.e('79695'), n.e('18320'), n.e('83331'), n.e('81070')]).then(n.bind(n, 213202));
                          return (n) =>
                              (0, r.jsx)(
                                  e,
                                  k(S({}, n), {
                                      channel: t,
                                      guild: a
                                  })
                              );
                      })
                    : (0, u.jW)(e, async () => {
                          let { default: e } = await Promise.all([n.e('79695'), n.e('18320'), n.e('44011')]).then(n.bind(n, 373651));
                          return (n) =>
                              (0, r.jsx)(
                                  e,
                                  k(S({}, n), {
                                      channel: t,
                                      guild: a
                                  })
                              );
                      });
            },
            z = (function (e, t) {
                let n = [];
                return (
                    Z.TPd.GUILD_THREADS_ONLY.has(e.type) &&
                        t >= 1 &&
                        n.push(
                            (0, r.jsx)(
                                d.Text,
                                {
                                    variant: 'text-xs/normal',
                                    className: E.channelSubtitle,
                                    children: P.NW.format(P.t.z0qMLy, { count: t })
                                },
                                'thread-count'
                            )
                        ),
                    B.has(e.type) ||
                        n.push(
                            (0, r.jsx)(
                                d.Text,
                                {
                                    variant: 'text-xs/normal',
                                    className: E.channelSubtitle,
                                    children: (0, v.qw)(e.id)
                                },
                                'active'
                            )
                        ),
                    null != e.topic &&
                        e.topic.length > 0 &&
                        n.push(
                            (0, r.jsx)(
                                m.Z,
                                {
                                    children: (0, r.jsx)(d.Text, {
                                        className: E.topic,
                                        variant: 'text-xs/normal',
                                        children: x.Z.parseTopic(e.topic, !0, { channelId: e.id })
                                    })
                                },
                                'topic'
                            )
                        ),
                    [n.map((e, t) => [e, (0, r.jsx)(D, { index: t }, 'subtitle-separator-'.concat(t))])].flat(2).slice(0, -1)
                );
            })(t, H),
            q = (e) => (
                (e.stopPropagation(), T.has(t.type) || e.shiftKey)
                    ? (0, C.XU)(a.id, t.id)
                    : t.isGuildStageVoice() || t.isGuildVoice()
                      ? (0, j.Cq)(t)
                      : b.Z.openChannelAsSidebar({
                            guildId: t.guild_id,
                            channelId: t.id,
                            baseChannelId: w.oC.CHANNEL_BROWSER
                        }),
                !0
            ),
            X = P.NW.string(P.t.vetGQk);
        t.isGuildStageVoice() || t.isGuildVoice() ? (X = P.NW.string(P.t.VJlc0d)) : t.isForumLikeChannel() && (X = P.NW.string(P.t['3xjX0d']));
        let V = L ? 'text-muted' : 'text-normal',
            J = (0, d.dQu)(L ? c.Z.colors.TEXT_MUTED : c.Z.colors.TEXT_NORMAL).hex();
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(d.ua7, {
                    text: M,
                    delay: 500,
                    position: I,
                    children: (e) =>
                        (0, r.jsxs)(
                            d.P3F,
                            k(
                                S(
                                    {
                                        className: i()(E.channelRow, {
                                            [E.firstChannel]: s,
                                            [E.lastChannel]: h,
                                            [E.disabled]: L
                                        })
                                    },
                                    e
                                ),
                                {
                                    onClick: G,
                                    onContextMenu: F,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: E.channelInfo,
                                            children: [
                                                (0, r.jsxs)('div', {
                                                    className: E.channelName,
                                                    children: [
                                                        (0, r.jsx)(g._W, {
                                                            channel: t,
                                                            guild: a
                                                        }),
                                                        (0, r.jsx)(m.Z, {
                                                            className: E.__invalid_name,
                                                            children: (0, r.jsx)(d.Text, {
                                                                className: E.channelText,
                                                                variant: 'text-md/medium',
                                                                lineClamp: 1,
                                                                color: V,
                                                                children: t.name
                                                            })
                                                        }),
                                                        A
                                                            ? (0, r.jsx)(f.Z, {
                                                                  color: J,
                                                                  className: E.premiumIcon
                                                              })
                                                            : null,
                                                        U
                                                            ? (0, r.jsx)(d.IGR, {
                                                                  text: P.NW.string(P.t.y2b7CA),
                                                                  color: c.Z.unsafe_rawColors.BRAND_260.css,
                                                                  className: E.titleBadge
                                                              })
                                                            : null
                                                    ]
                                                }),
                                                (0, r.jsx)('div', {
                                                    className: E.channelSubtitles,
                                                    children: z
                                                })
                                            ]
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: E.channelActions,
                                            children: [
                                                (0, r.jsx)(d.zxk, {
                                                    look: d.iLD.OUTLINED,
                                                    color: d.Ttl.PRIMARY,
                                                    size: d.PhG.SMALL,
                                                    className: E.viewChannelButton,
                                                    onClick: q,
                                                    children: X
                                                }),
                                                (0, r.jsx)(d.XZJ, {
                                                    'aria-checked': W,
                                                    value: W,
                                                    type: d.XZJ.Types.INVERTED,
                                                    disabled: L,
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
                !h && (0, r.jsx)(R, {})
            ]
        });
    });
function L(e) {
    let { categories: t, guild: n, className: a, innerClassName: o, hasSidebar: c } = e,
        { onChannelClick: u } = (0, y.Z)(n.id),
        m = (0, h.wE)(s.z.CHANNEL_BROWSER_NUX) ? 0 : -1,
        p = l.useCallback(
            (e) => {
                let { section: l } = e;
                if (0 === l && -1 === m) return null;
                let a = t._categories[l + m];
                return (0, r.jsx)(
                    A,
                    {
                        channel: a.channel,
                        guild: n,
                        onCategoryClick: u
                    },
                    a.channel.id
                );
            },
            [t, n, m, u]
        ),
        f = l.useCallback(
            (e) => {
                let { section: l, row: a } = e;
                if (0 === l && -1 === m) return (0, r.jsx)(I.Z, { guild: n });
                let i = t._categories[l + m],
                    o = t[i.channel.id][a];
                return null == o
                    ? null
                    : (0, r.jsx)(
                          W,
                          {
                              category: i.channel,
                              channel: o.channel,
                              guild: n,
                              isFirstChannel: 0 === a,
                              isLastChannel: t[i.channel.id].length - 1 === a,
                              tooltipDirection: c ? 'right' : 'top',
                              onChannelClick: u
                          },
                          o.channel.id
                      );
            },
            [t, n, m, c, u]
        ),
        g = (0, I.q)(n.id),
        x = (0, v.tn)(n.id, t, 64, g);
    return (0, r.jsx)(
        d._2F,
        {
            className: a,
            innerClassName: i()(o, E.scrollerInner),
            sectionHeight: 48,
            rowHeight: (e) => x[e].rowHeight,
            renderSection: p,
            renderRow: f,
            sections: x.map((e) => e.rowCount)
        },
        'channel-browser-list'
    );
}
