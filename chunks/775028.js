t.d(n, { Z: () => L }), t(47120), t(653041), t(86693), t(536091);
var r = t(200651),
    l = t(192379),
    a = t(120356),
    i = t.n(a),
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
    N = t(601070),
    v = t(216306),
    y = t(163),
    O = t(753540),
    I = t(70297),
    Z = t(981631),
    w = t(176505),
    P = t(388032),
    E = t(174612);
function S(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            r.forEach(function (n) {
                var r;
                (r = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = r);
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
                      var r = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, r);
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
    let { guild: n, channel: l, onCategoryClick: a } = e,
        o = (0, O.Mf)(n.id, l.id, l.id),
        s = (0, O.t4)(n.id, l.id, l.id);
    return (0, r.jsxs)('div', {
        className: i()(E.categoryRow, { [E.uncategorized]: 'null' === l.id }),
        onContextMenu: (e) => {
            (0, u.jW)(e, async () => {
                let { default: e } = await Promise.all([t.e('8965'), t.e('14280')]).then(t.bind(t, 139035));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        T(S({}, t), {
                            channel: l,
                            guild: n
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
                        s || a(n.id, l.id, l.id);
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
        let { index: n } = e;
        return (0, r.jsx)(
            d.Text,
            {
                variant: 'text-xs/normal',
                className: E.subtitleSeparator,
                children: '\xB7'
            },
            'separator-'.concat(n)
        );
    }),
    W = l.memo(function (e) {
        let { channel: n, category: l, guild: a, isFirstChannel: s, isLastChannel: h, onChannelClick: y, tooltipDirection: I = 'right' } = e,
            { isSubscriptionGated: A } = (0, p.Z)(n.id),
            W = (0, O.Mf)(a.id, n.id, l.id),
            L = (0, O.t4)(a.id, n.id, l.id),
            M = (0, O.EH)(a.id, l.id),
            H = (0, o.e7)([N.Z], () => N.Z.getActiveThreadCount(a.id, n.id)),
            U = (0, o.e7)([_.Z], () => _.Z.shouldIndicateNewChannel(a.id, n.id)),
            G = (e) => {
                if (!L) return e.stopPropagation(), y(a.id, n.id, l.id), !0;
            },
            F = (e) => {
                n.isGuildVocal()
                    ? (0, u.jW)(e, async () => {
                          let { default: e } = await Promise.all([t.e('79695'), t.e('18320'), t.e('83331'), t.e('81070')]).then(t.bind(t, 213202));
                          return (t) =>
                              (0, r.jsx)(
                                  e,
                                  T(S({}, t), {
                                      channel: n,
                                      guild: a
                                  })
                              );
                      })
                    : (0, u.jW)(e, async () => {
                          let { default: e } = await Promise.all([t.e('79695'), t.e('18320'), t.e('44011')]).then(t.bind(t, 373651));
                          return (t) =>
                              (0, r.jsx)(
                                  e,
                                  T(S({}, t), {
                                      channel: n,
                                      guild: a
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
                            (0, r.jsx)(
                                d.Text,
                                {
                                    variant: 'text-xs/normal',
                                    className: E.channelSubtitle,
                                    children: P.NW.format(P.t.z0qMLy, { count: n })
                                },
                                'thread-count'
                            )
                        ),
                    k.has(e.type) ||
                        t.push(
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
                        t.push(
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
                    [t.map((e, n) => [e, (0, r.jsx)(D, { index: n }, 'subtitle-separator-'.concat(n))])].flat(2).slice(0, -1)
                );
            })(n, H),
            q = (e) => (
                (e.stopPropagation(), B.has(n.type) || e.shiftKey)
                    ? (0, C.XU)(a.id, n.id)
                    : n.isGuildStageVoice() || n.isGuildVoice()
                      ? (0, b.Cq)(n)
                      : j.Z.openChannelAsSidebar({
                            guildId: n.guild_id,
                            channelId: n.id,
                            baseChannelId: w.oC.CHANNEL_BROWSER
                        }),
                !0
            ),
            X = P.NW.string(P.t.vetGQk);
        n.isGuildStageVoice() || n.isGuildVoice() ? (X = P.NW.string(P.t.VJlc0d)) : n.isForumLikeChannel() && (X = P.NW.string(P.t['3xjX0d']));
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
                            T(
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
                                                            channel: n,
                                                            guild: a
                                                        }),
                                                        (0, r.jsx)(m.Z, {
                                                            className: E.__invalid_name,
                                                            children: (0, r.jsx)(d.Text, {
                                                                className: E.channelText,
                                                                variant: 'text-md/medium',
                                                                lineClamp: 1,
                                                                color: V,
                                                                children: n.name
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
    let { categories: n, guild: t, className: a, innerClassName: o, hasSidebar: c } = e,
        { onChannelClick: u } = (0, y.Z)(t.id),
        m = (0, h.wE)(s.z.CHANNEL_BROWSER_NUX) ? 0 : -1,
        p = l.useCallback(
            (e) => {
                let { section: l } = e;
                if (0 === l && -1 === m) return null;
                let a = n._categories[l + m];
                return (0, r.jsx)(
                    A,
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
        f = l.useCallback(
            (e) => {
                let { section: l, row: a } = e;
                if (0 === l && -1 === m) return (0, r.jsx)(I.Z, { guild: t });
                let i = n._categories[l + m],
                    o = n[i.channel.id][a];
                return null == o
                    ? null
                    : (0, r.jsx)(
                          W,
                          {
                              category: i.channel,
                              channel: o.channel,
                              guild: t,
                              isFirstChannel: 0 === a,
                              isLastChannel: n[i.channel.id].length - 1 === a,
                              tooltipDirection: c ? 'right' : 'top',
                              onChannelClick: u
                          },
                          o.channel.id
                      );
            },
            [n, t, m, c, u]
        ),
        g = (0, I.q)(t.id),
        x = (0, v.tn)(t.id, n, 64, g);
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
