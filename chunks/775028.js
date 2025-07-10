(t.d(n, { Z: () => U }), t(388685), t(539854), t(472816), t(794429));
var l = t(255367),
    r = t(73800),
    i = t(120356),
    a = t.n(i),
    o = t(442837),
    s = t(704215),
    c = t(692547),
    d = t(755721),
    u = t(481060),
    m = t(239091),
    h = t(111028),
    p = t(266454),
    f = t(66999),
    g = t(549631),
    x = t(473403),
    _ = t(454585),
    C = t(22082),
    j = t(703656),
    b = t(6025),
    v = t(922482),
    y = t(601070),
    O = t(216306),
    I = t(163),
    N = t(753540),
    Z = t(70297),
    w = t(981631),
    P = t(176505),
    E = t(388032),
    S = t(174612),
    T = t(73433);
function B(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            l = Object.keys(t);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            l.forEach(function (n) {
                var l;
                ((l = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = l));
            }));
    }
    return e;
}
function A(e, n) {
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
let k = new Set([w.d4z.GUILD_FORUM, w.d4z.GUILD_MEDIA]),
    R = new Set([w.d4z.GUILD_VOICE, w.d4z.GUILD_STAGE_VOICE]);
function D(e) {
    let { guild: n, channel: r, onCategoryClick: i } = e,
        o = (0, N.Mf)(n.id, r.id, r.id),
        s = (0, N.t4)(n.id, r.id, r.id);
    return (0, l.jsxs)('div', {
        className: a()(S.categoryRow, { [S.uncategorized]: 'null' === r.id }),
        onContextMenu: (e) => {
            (0, m.jW)(e, async () => {
                let { default: e } = await Promise.all([t.e('8965'), t.e('14280')]).then(t.bind(t, 139035));
                return (t) =>
                    (0, l.jsx)(
                        e,
                        A(B({}, t), {
                            channel: r,
                            guild: n
                        })
                    );
            });
        },
        children: [
            (0, l.jsx)(u.Text, {
                className: S.categoryText,
                color: 'text-muted',
                variant: 'text-sm/medium',
                lineClamp: 1,
                children: r.name
            }),
            'null' !== r.id &&
                !s &&
                (0, l.jsxs)(u.P3F, {
                    className: S.selectAll,
                    onClick: () => {
                        s || i(n.id, r.id, r.id);
                    },
                    children: [
                        (0, l.jsx)(u.XZJ, {
                            className: S.selectAllCheckbox,
                            size: 14,
                            shape: u.XZJ.Shapes.SMALL_BOX,
                            value: o,
                            type: u.XZJ.Types.INVERTED,
                            displayOnly: !0
                        }),
                        (0, l.jsx)(u.Text, {
                            color: 'text-muted',
                            variant: 'text-xs/medium',
                            children: E.intl.string(E.t.mSQwnZ)
                        })
                    ]
                })
        ]
    });
}
let L = r.memo(function () {
        return (0, l.jsx)('div', { className: S.separator });
    }),
    M = r.memo(function (e) {
        let { index: n } = e;
        return (0, l.jsx)(
            u.Text,
            {
                variant: 'text-xs/normal',
                className: S.subtitleSeparator,
                children: '\xB7'
            },
            'separator-'.concat(n)
        );
    }),
    H = r.memo(function (e) {
        let { channel: n, category: r, guild: i, isFirstChannel: s, isLastChannel: p, onChannelClick: I, tooltipDirection: Z = 'right' } = e,
            { isSubscriptionGated: D } = (0, f.Z)(n.id),
            H = (0, N.Mf)(i.id, n.id, r.id),
            U = (0, N.t4)(i.id, n.id, r.id),
            G = (0, N.EH)(i.id, r.id),
            W = (0, o.e7)([y.Z], () => y.Z.getActiveThreadCount(i.id, n.id)),
            z = (0, o.e7)([C.Z], () => C.Z.shouldIndicateNewChannel(i.id, n.id)),
            F = (e) => {
                if (!U) return (e.stopPropagation(), I(i.id, n.id, r.id), !0);
            },
            q = (e) => {
                n.isGuildVocal()
                    ? (0, m.jW)(e, async () => {
                          let { default: e } = await Promise.all([t.e('79695'), t.e('18320'), t.e('83331'), t.e('81070')]).then(t.bind(t, 213202));
                          return (t) =>
                              (0, l.jsx)(
                                  e,
                                  A(B({}, t), {
                                      channel: n,
                                      guild: i
                                  })
                              );
                      })
                    : (0, m.jW)(e, async () => {
                          let { default: e } = await Promise.all([t.e('79695'), t.e('18320'), t.e('44011')]).then(t.bind(t, 373651));
                          return (t) =>
                              (0, l.jsx)(
                                  e,
                                  A(B({}, t), {
                                      channel: n,
                                      guild: i
                                  })
                              );
                      });
            },
            X = (function (e, n) {
                let t = [];
                return (
                    w.TPd.GUILD_THREADS_ONLY.has(e.type) &&
                        n >= 1 &&
                        t.push(
                            (0, l.jsx)(
                                u.Text,
                                {
                                    variant: 'text-xs/normal',
                                    className: S.channelSubtitle,
                                    children: E.intl.format(E.t.z0qMLy, { count: n })
                                },
                                'thread-count'
                            )
                        ),
                    R.has(e.type) ||
                        t.push(
                            (0, l.jsx)(
                                u.Text,
                                {
                                    variant: 'text-xs/normal',
                                    className: S.channelSubtitle,
                                    children: (0, O.qw)(e.id)
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
                                    className: T.markup,
                                    children: (0, l.jsx)(u.Text, {
                                        className: S.topic,
                                        variant: 'text-xs/normal',
                                        children: _.Z.parseTopic(e.topic, !0, { channelId: e.id })
                                    })
                                },
                                'topic'
                            )
                        ),
                    [t.map((e, n) => [e, (0, l.jsx)(M, { index: n }, 'subtitle-separator-'.concat(n))])].flat(2).slice(0, -1)
                );
            })(n, W),
            V = (e) => (
                (e.stopPropagation(), k.has(n.type) || e.shiftKey)
                    ? (0, j.XU)(i.id, n.id)
                    : n.isGuildStageVoice() || n.isGuildVoice()
                      ? (0, v.Cq)(n)
                      : b.Z.openChannelAsSidebar({
                            guildId: n.guild_id,
                            channelId: n.id,
                            baseChannelId: P.oC.CHANNEL_BROWSER
                        }),
                !0
            ),
            J = E.intl.string(E.t.vetGQk);
        n.isGuildStageVoice() || n.isGuildVoice() ? (J = E.intl.string(E.t.VJlc0d)) : n.isForumLikeChannel() && (J = E.intl.string(E.t['3xjX0d']));
        let Q = U ? 'text-muted' : 'text-default',
            Y = (0, u.dQu)(U ? c.Z.colors.TEXT_MUTED : c.Z.colors.TEXT_DEFAULT).hex();
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(u.ua7, {
                    text: G,
                    delay: 500,
                    position: Z,
                    children: (e) =>
                        (0, l.jsxs)(
                            u.P3F,
                            A(
                                B(
                                    {
                                        className: a()(S.channelRow, {
                                            [S.firstChannel]: s,
                                            [S.lastChannel]: p,
                                            [S.disabled]: U
                                        })
                                    },
                                    e
                                ),
                                {
                                    onClick: F,
                                    onContextMenu: q,
                                    children: [
                                        (0, l.jsxs)('div', {
                                            className: S.channelInfo,
                                            children: [
                                                (0, l.jsxs)('div', {
                                                    className: S.channelName,
                                                    children: [
                                                        (0, l.jsx)(x._W, {
                                                            channel: n,
                                                            guild: i
                                                        }),
                                                        (0, l.jsx)(h.Z, {
                                                            className: S.__invalid_name,
                                                            children: (0, l.jsx)(u.Text, {
                                                                className: S.channelText,
                                                                variant: 'text-md/medium',
                                                                lineClamp: 1,
                                                                color: Q,
                                                                children: n.name
                                                            })
                                                        }),
                                                        D
                                                            ? (0, l.jsx)(g.Z, {
                                                                  color: Y,
                                                                  className: S.premiumIcon
                                                              })
                                                            : null,
                                                        z
                                                            ? (0, l.jsx)(u.IGR, {
                                                                  text: E.intl.string(E.t.y2b7CA),
                                                                  color: c.Z.unsafe_rawColors.BRAND_260.css,
                                                                  className: S.titleBadge
                                                              })
                                                            : null
                                                    ]
                                                }),
                                                (0, l.jsx)('div', {
                                                    className: S.channelSubtitles,
                                                    children: X
                                                })
                                            ]
                                        }),
                                        (0, l.jsxs)('div', {
                                            className: S.channelActions,
                                            children: [
                                                (0, l.jsx)(d.zx, {
                                                    look: d.iL.OUTLINED,
                                                    color: d.Tt.PRIMARY,
                                                    size: d.Ph.SMALL,
                                                    className: S.viewChannelButton,
                                                    onClick: V,
                                                    children: J
                                                }),
                                                (0, l.jsx)(u.XZJ, {
                                                    'aria-checked': H,
                                                    value: H,
                                                    type: u.XZJ.Types.INVERTED,
                                                    disabled: U,
                                                    innerClassName: S.checkboxInner,
                                                    displayOnly: !0
                                                })
                                            ]
                                        })
                                    ]
                                }
                            )
                        )
                }),
                !p && (0, l.jsx)(L, {})
            ]
        });
    });
function U(e) {
    let { categories: n, guild: t, className: i, innerClassName: o, hasSidebar: c } = e,
        { onChannelClick: d } = (0, I.Z)(t.id),
        m = (0, p.Nj)(s.z.CHANNEL_BROWSER_NUX) ? 0 : -1,
        h = r.useCallback(
            (e) => {
                let { section: r } = e;
                if (0 === r && -1 === m) return null;
                let i = n._categories[r + m];
                return (0, l.jsx)(
                    D,
                    {
                        channel: i.channel,
                        guild: t,
                        onCategoryClick: d
                    },
                    i.channel.id
                );
            },
            [n, t, m, d]
        ),
        f = r.useCallback(
            (e) => {
                let { section: r, row: i } = e;
                if (0 === r && -1 === m) return (0, l.jsx)(Z.Z, { guild: t });
                let a = n._categories[r + m],
                    o = n[a.channel.id][i];
                return null == o
                    ? null
                    : (0, l.jsx)(
                          H,
                          {
                              category: a.channel,
                              channel: o.channel,
                              guild: t,
                              isFirstChannel: 0 === i,
                              isLastChannel: n[a.channel.id].length - 1 === i,
                              tooltipDirection: c ? 'right' : 'top',
                              onChannelClick: d
                          },
                          o.channel.id
                      );
            },
            [n, t, m, c, d]
        ),
        g = (0, Z.q)(t.id),
        x = (0, O.tn)(t.id, n, 64, g);
    return (0, l.jsx)(
        u._2F,
        {
            className: i,
            innerClassName: a()(o, S.scrollerInner),
            sectionHeight: 48,
            rowHeight: (e) => x[e].rowHeight,
            renderSection: h,
            renderRow: f,
            sections: x.map((e) => e.rowCount)
        },
        'channel-browser-list'
    );
}
