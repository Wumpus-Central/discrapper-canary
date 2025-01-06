n.d(t, {
    Z: function () {
        return b;
    }
}),
    n(653041);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(692547),
    o = n(481060),
    c = n(239091),
    d = n(111028),
    u = n(977258),
    m = n(637853),
    h = n(473403),
    g = n(216306),
    x = n(743475),
    p = n(827907),
    f = n(868814),
    C = n(981631),
    v = n(388032),
    _ = n(683559);
function I(e) {
    let { guild: t, channel: r } = e,
        l = (0, p.Mf)(r.id);
    return 'null' === r.id
        ? (0, i.jsx)('div', {
              className: a()(_.categoryRow, _.uncategorized),
              children: (0, i.jsx)(o.Text, {
                  className: _.categoryText,
                  color: 'text-muted',
                  variant: 'text-xs/semibold',
                  lineClamp: 1,
                  children: r.name
              })
          })
        : (0, i.jsxs)(o.Clickable, {
              className: a()(_.categoryRow, { [_.uncategorized]: 'null' === r.id }),
              onContextMenu: (e) => {
                  (0, c.jW)(e, async () => {
                      let { default: e } = await Promise.all([n.e('38902'), n.e('58059'), n.e('8965'), n.e('98350')]).then(n.bind(n, 139035));
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
                      : (0, o.openModalLazy)(async () => {
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
                      className: _.categoryText,
                      color: 'text-muted',
                      variant: 'text-xs/semibold',
                      lineClamp: 1,
                      children: r.name
                  }),
                  (0, i.jsx)(o.Checkbox, {
                      'aria-checked': l,
                      value: l,
                      type: o.Checkbox.Types.INVERTED,
                      className: _.checkbox,
                      displayOnly: !0
                  })
              ]
          });
}
let N = r.memo(function () {
        return (0, i.jsx)('div', { className: _.separator });
    }),
    T = r.memo(function (e) {
        let { index: t } = e;
        return (0, i.jsx)(
            o.Text,
            {
                variant: 'text-xs/normal',
                className: _.subtitleSeparator,
                children: '\xB7'
            },
            'separator-'.concat(t)
        );
    }),
    j = r.memo(function (e) {
        let { channel: t, category: r, guild: l, isFirstChannel: g, isLastChannel: I, tooltipDirection: j = 'right' } = e,
            b = (0, p.Mf)(t.id, r.id),
            S = (0, p.t4)(t.id, r.id),
            E = (0, p.EH)(t.id, r.id),
            R = (0, p.lL)(l.id, r.id),
            y = null != (0, f.Z)(l).find((e) => e.id === t.id),
            A = (0, m.mn)(t.id),
            Z = (e) => {
                if (!S)
                    return (
                        e.stopPropagation(),
                        (0, u.s)(l.id, t.id)
                            ? (0, x.pt)(t.id)
                            : (0, o.openModalLazy)(async () => {
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
                          let { default: e } = await Promise.all([n.e('79695'), n.e('38902'), n.e('58059'), n.e('61447'), n.e('18320'), n.e('83331'), n.e('87031')]).then(n.bind(n, 213202));
                          return (n) =>
                              (0, i.jsx)(e, {
                                  ...n,
                                  channel: t,
                                  guild: l
                              });
                      })
                    : (0, c.jW)(e, async () => {
                          let { default: e } = await Promise.all([n.e('77298'), n.e('23357'), n.e('50506'), n.e('96211'), n.e('99152'), n.e('79695'), n.e('12013'), n.e('73503'), n.e('52249'), n.e('68956'), n.e('6380'), n.e('72181'), n.e('26182'), n.e('18543'), n.e('95900'), n.e('51269'), n.e('32776'), n.e('66711'), n.e('13351'), n.e('86282'), n.e('21628'), n.e('95393'), n.e('38902'), n.e('87624'), n.e('74421'), n.e('25788'), n.e('46097'), n.e('8739'), n.e('58059'), n.e('18895'), n.e('24391'), n.e('57674'), n.e('99393'), n.e('99008'), n.e('7590'), n.e('39701'), n.e('34935'), n.e('69174'), n.e('78447'), n.e('86778'), n.e('69057'), n.e('77564'), n.e('67762'), n.e('90225'), n.e('84804'), n.e('37220'), n.e('61447'), n.e('82158'), n.e('91315'), n.e('64222'), n.e('18320'), n.e('27974')]).then(n.bind(n, 373651));
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
                (0, i.jsx)(o.Tooltip, {
                    text: null != E ? E : R,
                    delay: 500,
                    position: j,
                    children: (e) =>
                        (0, i.jsxs)(o.Clickable, {
                            className: a()(_.channelRow, {
                                [_.firstChannel]: g,
                                [_.lastChannel]: I,
                                [_.disabled]: S
                            }),
                            ...e,
                            onClick: Z,
                            onContextMenu: L,
                            children: [
                                (0, i.jsx)('div', {
                                    className: _.channelInfo,
                                    children: (0, i.jsxs)('div', {
                                        className: _.channelName,
                                        children: [
                                            (0, i.jsx)(h._, {
                                                channel: t,
                                                guild: l
                                            }),
                                            (0, i.jsx)(d.Z, {
                                                className: _.__invalid_name,
                                                children: (0, i.jsx)(o.Text, {
                                                    className: _.channelText,
                                                    variant: 'text-md/medium',
                                                    lineClamp: 1,
                                                    color: S ? 'text-muted' : 'text-normal',
                                                    children: t.name
                                                })
                                            }),
                                            y
                                                ? (0, i.jsxs)(i.Fragment, {
                                                      children: [
                                                          (0, i.jsx)(T, { index: 0 }),
                                                          (0, i.jsx)(o.Text, {
                                                              variant: 'text-xs/medium',
                                                              className: _.channelSubtitle,
                                                              color: 'text-brand',
                                                              children: v.intl.string(v.t.mPxmeH)
                                                          })
                                                      ]
                                                  })
                                                : null
                                        ]
                                    })
                                }),
                                (0, i.jsx)('div', {
                                    className: _.channelActions,
                                    children: (0, u.s)(t.guild_id, t.id)
                                        ? (0, i.jsx)(o.Checkbox, {
                                              'aria-checked': b,
                                              value: b,
                                              type: o.Checkbox.Types.INVERTED,
                                              disabled: S,
                                              color: A ? s.Z.colors.TEXT_BRAND.css : s.Z.colors.BUTTON_SECONDARY_BACKGROUND.css,
                                              innerClassName: _.checkboxInner,
                                              displayOnly: !0
                                          })
                                        : (0, i.jsxs)(o.Button, {
                                              look: o.Button.Looks.OUTLINED,
                                              color: o.Button.Colors.PRIMARY,
                                              className: _.lockedPill,
                                              innerClassName: _.lockedPillInner,
                                              onClick: C.dG4,
                                              children: [
                                                  (0, i.jsx)(o.LockIcon, {
                                                      size: 'xs',
                                                      color: 'currentColor'
                                                  }),
                                                  (0, i.jsx)(o.Text, {
                                                      variant: 'text-sm/medium',
                                                      color: 'none',
                                                      children: v.intl.string(v.t.zA9d1N)
                                                  })
                                              ]
                                          })
                                })
                            ]
                        })
                }),
                !I && (0, i.jsx)(N, {})
            ]
        });
    });
function b(e) {
    let { categories: t, guild: n, className: l, hasSidebar: a } = e,
        s = r.useCallback(
            (e) => {
                let r = t._categories[e];
                return (0, i.jsx)(
                    I,
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
                    s = t[l.channel.id][r];
                return null == s
                    ? null
                    : (0, i.jsx)(
                          j,
                          {
                              category: l.channel,
                              channel: s.channel,
                              guild: n,
                              isFirstChannel: 0 === r,
                              isLastChannel: t[l.channel.id].length - 1 === r,
                              tooltipDirection: a ? 'right' : 'top'
                          },
                          s.channel.id
                      );
            },
            [t, n, a]
        ),
        c = (0, g.tn)(n.id, t, 64);
    return (0, i.jsx)('div', {
        className: l,
        children: c.map((e, t) => {
            let n = s(t),
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
