n.d(t, { Z: () => b }), n(653041);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(692547),
    o = n(481060),
    c = n(239091),
    d = n(111028),
    u = n(977258),
    m = n(637853),
    h = n(473403),
    g = n(216306),
    x = n(743475),
    p = n(827907),
    _ = n(868814),
    C = n(981631),
    f = n(388032),
    v = n(330448);
function N(e) {
    let { guild: t, channel: r } = e,
        l = (0, p.Mf)(r.id);
    return 'null' === r.id
        ? (0, i.jsx)('div', {
              className: s()(v.categoryRow, v.uncategorized),
              children: (0, i.jsx)(o.Text, {
                  className: v.categoryText,
                  color: 'text-muted',
                  variant: 'text-xs/semibold',
                  lineClamp: 1,
                  children: r.name
              })
          })
        : (0, i.jsxs)(o.P3F, {
              className: s()(v.categoryRow, { [v.uncategorized]: 'null' === r.id }),
              onContextMenu: (e) => {
                  (0, c.jW)(e, async () => {
                      let { default: e } = await Promise.all([n.e('58059'), n.e('38902'), n.e('8965'), n.e('98350')]).then(n.bind(n, 139035));
                      return (n) =>
                          (0, i.jsx)(e, {
                              ...n,
                              channel: r,
                              guild: t
                          });
                  });
              },
              onClick: (e) => (
                  e.stopPropagation(),
                  (0, u.s)(t.id, r.id)
                      ? (0, x.pt)(r.id)
                      : (0, o.ZDy)(async () => {
                            let { default: e } = await n.e('35641').then(n.bind(n, 89216));
                            return (n) =>
                                (0, i.jsx)(e, {
                                    ...n,
                                    guildId: t.id,
                                    startingChannelId: r.id
                                });
                        }),
                  !0
              ),
              children: [
                  (0, i.jsx)(o.Text, {
                      className: v.categoryText,
                      color: 'text-muted',
                      variant: 'text-xs/semibold',
                      lineClamp: 1,
                      children: r.name
                  }),
                  (0, i.jsx)(o.XZJ, {
                      'aria-checked': l,
                      value: l,
                      type: o.XZJ.Types.INVERTED,
                      className: v.checkbox,
                      displayOnly: !0
                  })
              ]
          });
}
let j = r.memo(function () {
        return (0, i.jsx)('div', { className: v.separator });
    }),
    I = r.memo(function (e) {
        let { index: t } = e;
        return (0, i.jsx)(
            o.Text,
            {
                variant: 'text-xs/normal',
                className: v.subtitleSeparator,
                children: '\xB7'
            },
            'separator-'.concat(t)
        );
    }),
    E = r.memo(function (e) {
        let { channel: t, category: r, guild: l, isFirstChannel: g, isLastChannel: N, tooltipDirection: E = 'right' } = e,
            b = (0, p.Mf)(t.id, r.id),
            T = (0, p.t4)(t.id, r.id),
            S = (0, p.EH)(t.id, r.id),
            R = (0, p.lL)(l.id, r.id),
            Z = null != (0, _.Z)(l).find((e) => e.id === t.id),
            y = (0, m.mn)(t.id),
            A = (e) => {
                if (!T)
                    return (
                        e.stopPropagation(),
                        (0, u.s)(l.id, t.id)
                            ? (0, x.pt)(t.id)
                            : (0, o.ZDy)(async () => {
                                  let { default: e } = await n.e('35641').then(n.bind(n, 89216));
                                  return (n) =>
                                      (0, i.jsx)(e, {
                                          ...n,
                                          guildId: l.id,
                                          startingChannelId: t.id
                                      });
                              }),
                        !0
                    );
            },
            L = (e) => {
                t.isGuildVocal()
                    ? (0, c.jW)(e, async () => {
                          let { default: e } = await Promise.all([n.e('79695'), n.e('58059'), n.e('38902'), n.e('95910'), n.e('18320'), n.e('83331'), n.e('48189')]).then(n.bind(n, 213202));
                          return (n) =>
                              (0, i.jsx)(e, {
                                  ...n,
                                  channel: t,
                                  guild: l
                              });
                      })
                    : (0, c.jW)(e, async () => {
                          let { default: e } = await Promise.all([n.e('50506'), n.e('68880'), n.e('99152'), n.e('79695'), n.e('51269'), n.e('22878'), n.e('13351'), n.e('66711'), n.e('78447'), n.e('53937'), n.e('83366'), n.e('6380'), n.e('46097'), n.e('8739'), n.e('58059'), n.e('86282'), n.e('18543'), n.e('28467'), n.e('22173'), n.e('83595'), n.e('30243'), n.e('99393'), n.e('68241'), n.e('78844'), n.e('60691'), n.e('38902'), n.e('84466'), n.e('7590'), n.e('69057'), n.e('75878'), n.e('23919'), n.e('82734'), n.e('84804'), n.e('94989'), n.e('95910'), n.e('37220'), n.e('82158'), n.e('91315'), n.e('81951'), n.e('18320'), n.e('70151'), n.e('74976'), n.e('57308')]).then(n.bind(n, 373651));
                          return (n) =>
                              (0, i.jsx)(e, {
                                  ...n,
                                  channel: t,
                                  guild: l
                              });
                      });
            };
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(o.ua7, {
                    text: null != S ? S : R,
                    delay: 500,
                    position: E,
                    children: (e) =>
                        (0, i.jsxs)(o.P3F, {
                            className: s()(v.channelRow, {
                                [v.firstChannel]: g,
                                [v.lastChannel]: N,
                                [v.disabled]: T
                            }),
                            ...e,
                            onClick: A,
                            onContextMenu: L,
                            children: [
                                (0, i.jsx)('div', {
                                    className: v.channelInfo,
                                    children: (0, i.jsxs)('div', {
                                        className: v.channelName,
                                        children: [
                                            (0, i.jsx)(h._, {
                                                channel: t,
                                                guild: l
                                            }),
                                            (0, i.jsx)(d.Z, {
                                                className: v.__invalid_name,
                                                children: (0, i.jsx)(o.Text, {
                                                    className: v.channelText,
                                                    variant: 'text-md/medium',
                                                    lineClamp: 1,
                                                    color: T ? 'text-muted' : 'text-normal',
                                                    children: t.name
                                                })
                                            }),
                                            Z
                                                ? (0, i.jsxs)(i.Fragment, {
                                                      children: [
                                                          (0, i.jsx)(I, { index: 0 }),
                                                          (0, i.jsx)(o.Text, {
                                                              variant: 'text-xs/medium',
                                                              className: v.channelSubtitle,
                                                              color: 'text-brand',
                                                              children: f.intl.string(f.t.mPxmeH)
                                                          })
                                                      ]
                                                  })
                                                : null
                                        ]
                                    })
                                }),
                                (0, i.jsx)('div', {
                                    className: v.channelActions,
                                    children: (0, u.s)(t.guild_id, t.id)
                                        ? (0, i.jsx)(o.XZJ, {
                                              'aria-checked': b,
                                              value: b,
                                              type: o.XZJ.Types.INVERTED,
                                              disabled: T,
                                              color: y ? a.Z.colors.BG_BRAND.css : a.Z.colors.BUTTON_SECONDARY_BACKGROUND.css,
                                              innerClassName: v.checkboxInner,
                                              displayOnly: !0
                                          })
                                        : (0, i.jsxs)(o.zxk, {
                                              look: o.zxk.Looks.OUTLINED,
                                              color: o.zxk.Colors.PRIMARY,
                                              className: v.lockedPill,
                                              innerClassName: v.lockedPillInner,
                                              onClick: C.dG4,
                                              children: [
                                                  (0, i.jsx)(o.mBM, {
                                                      size: 'xs',
                                                      color: 'currentColor'
                                                  }),
                                                  (0, i.jsx)(o.Text, {
                                                      variant: 'text-sm/medium',
                                                      color: 'none',
                                                      children: f.intl.string(f.t.zA9d1N)
                                                  })
                                              ]
                                          })
                                })
                            ]
                        })
                }),
                !N && (0, i.jsx)(j, {})
            ]
        });
    });
function b(e) {
    let { categories: t, guild: n, className: l, hasSidebar: s } = e,
        a = r.useCallback(
            (e) => {
                let r = t._categories[e];
                return (0, i.jsx)(
                    N,
                    {
                        channel: r.channel,
                        guild: n
                    },
                    r.channel.id
                );
            },
            [t, n]
        ),
        o = r.useCallback(
            (e, r) => {
                let l = t._categories[e],
                    a = t[l.channel.id][r];
                return null == a
                    ? null
                    : (0, i.jsx)(
                          E,
                          {
                              category: l.channel,
                              channel: a.channel,
                              guild: n,
                              isFirstChannel: 0 === r,
                              isLastChannel: t[l.channel.id].length - 1 === r,
                              tooltipDirection: s ? 'right' : 'top'
                          },
                          a.channel.id
                      );
            },
            [t, n, s]
        ),
        c = (0, g.tn)(n.id, t, 64);
    return (0, i.jsx)('div', {
        className: l,
        children: c.map((e, t) => {
            let n = a(t),
                r = [],
                l = e.rowCount;
            if (0 === l) return null;
            for (let e = 0; e < l; e++) r.push(o(t, e));
            return (0, i.jsxs)(i.Fragment, {
                children: [n, r]
            });
        })
    });
}
