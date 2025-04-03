n.d(t, { Z: () => E }), n(653041);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(692547),
    o = n(481060),
    c = n(239091),
    d = n(111028),
    u = n(977258),
    m = n(637853),
    g = n(473403),
    p = n(216306),
    h = n(743475),
    f = n(827907),
    b = n(868814),
    x = n(981631),
    j = n(388032),
    N = n(448021);
function _(e) {
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
function v(e, t) {
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
function C(e) {
    let { guild: t, channel: i } = e,
        s = (0, f.Mf)(i.id);
    return 'null' === i.id
        ? (0, r.jsx)('div', {
              className: a()(N.categoryRow, N.uncategorized),
              children: (0, r.jsx)(o.Text, {
                  className: N.categoryText,
                  color: 'text-muted',
                  variant: 'text-xs/semibold',
                  lineClamp: 1,
                  children: i.name
              })
          })
        : (0, r.jsxs)(o.P3F, {
              className: a()(N.categoryRow, { [N.uncategorized]: 'null' === i.id }),
              onContextMenu: (e) => {
                  (0, c.jW)(e, async () => {
                      let { default: e } = await Promise.all([n.e('58059'), n.e('8965'), n.e('98350')]).then(n.bind(n, 139035));
                      return (n) =>
                          (0, r.jsx)(
                              e,
                              v(_({}, n), {
                                  channel: i,
                                  guild: t
                              })
                          );
                  });
              },
              onClick: (e) => (
                  e.stopPropagation(),
                  (0, u.s)(t.id, i.id)
                      ? (0, h.pt)(i.id)
                      : (0, o.ZDy)(async () => {
                            let { default: e } = await n.e('35641').then(n.bind(n, 89216));
                            return (n) =>
                                (0, r.jsx)(
                                    e,
                                    v(_({}, n), {
                                        guildId: t.id,
                                        startingChannelId: i.id
                                    })
                                );
                        }),
                  !0
              ),
              children: [
                  (0, r.jsx)(o.Text, {
                      className: N.categoryText,
                      color: 'text-muted',
                      variant: 'text-xs/semibold',
                      lineClamp: 1,
                      children: i.name
                  }),
                  (0, r.jsx)(o.XZJ, {
                      'aria-checked': s,
                      value: s,
                      type: o.XZJ.Types.INVERTED,
                      className: N.checkbox,
                      displayOnly: !0
                  })
              ]
          });
}
let O = i.memo(function () {
        return (0, r.jsx)('div', { className: N.separator });
    }),
    y = i.memo(function (e) {
        let { index: t } = e;
        return (0, r.jsx)(
            o.Text,
            {
                variant: 'text-xs/normal',
                className: N.subtitleSeparator,
                children: '\xB7'
            },
            'separator-'.concat(t)
        );
    }),
    I = i.memo(function (e) {
        let { channel: t, category: i, guild: s, isFirstChannel: p, isLastChannel: C, tooltipDirection: I = 'right' } = e,
            E = (0, f.Mf)(t.id, i.id),
            S = (0, f.t4)(t.id, i.id),
            T = (0, f.EH)(t.id, i.id),
            P = (0, f.lL)(s.id, i.id),
            w = null != (0, b.Z)(s).find((e) => e.id === t.id),
            R = (0, m.mn)(t.id),
            Z = (e) => {
                if (!S)
                    return (
                        e.stopPropagation(),
                        (0, u.s)(s.id, t.id)
                            ? (0, h.pt)(t.id)
                            : (0, o.ZDy)(async () => {
                                  let { default: e } = await n.e('35641').then(n.bind(n, 89216));
                                  return (n) =>
                                      (0, r.jsx)(
                                          e,
                                          v(_({}, n), {
                                              guildId: s.id,
                                              startingChannelId: t.id
                                          })
                                      );
                              }),
                        !0
                    );
            },
            D = (e) => {
                t.isGuildVocal()
                    ? (0, c.jW)(e, async () => {
                          let { default: e } = await Promise.all([n.e('79695'), n.e('58059'), n.e('42743'), n.e('84181'), n.e('18320'), n.e('83331'), n.e('67180')]).then(n.bind(n, 213202));
                          return (n) =>
                              (0, r.jsx)(
                                  e,
                                  v(_({}, n), {
                                      channel: t,
                                      guild: s
                                  })
                              );
                      })
                    : (0, c.jW)(e, async () => {
                          let { default: e } = await Promise.all([n.e('50506'), n.e('68880'), n.e('99152'), n.e('79695'), n.e('22878'), n.e('13351'), n.e('74891'), n.e('6380'), n.e('46097'), n.e('8739'), n.e('18543'), n.e('58059'), n.e('28467'), n.e('86282'), n.e('18895'), n.e('30243'), n.e('37447'), n.e('53937'), n.e('6208'), n.e('85574'), n.e('68631'), n.e('93602'), n.e('60691'), n.e('64838'), n.e('69606'), n.e('42743'), n.e('19948'), n.e('7590'), n.e('3589'), n.e('78447'), n.e('98254'), n.e('22356'), n.e('35755'), n.e('94458'), n.e('94989'), n.e('75862'), n.e('37220'), n.e('82158'), n.e('84181'), n.e('91315'), n.e('89107'), n.e('18320'), n.e('55196'), n.e('45260'), n.e('83562')]).then(n.bind(n, 373651));
                          return (n) =>
                              (0, r.jsx)(
                                  e,
                                  v(_({}, n), {
                                      channel: t,
                                      guild: s
                                  })
                              );
                      });
            };
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(o.ua7, {
                    text: null != T ? T : P,
                    delay: 500,
                    position: I,
                    children: (e) =>
                        (0, r.jsxs)(
                            o.P3F,
                            v(
                                _(
                                    {
                                        className: a()(N.channelRow, {
                                            [N.firstChannel]: p,
                                            [N.lastChannel]: C,
                                            [N.disabled]: S
                                        })
                                    },
                                    e
                                ),
                                {
                                    onClick: Z,
                                    onContextMenu: D,
                                    children: [
                                        (0, r.jsx)('div', {
                                            className: N.channelInfo,
                                            children: (0, r.jsxs)('div', {
                                                className: N.channelName,
                                                children: [
                                                    (0, r.jsx)(g._W, {
                                                        channel: t,
                                                        guild: s
                                                    }),
                                                    (0, r.jsx)(d.Z, {
                                                        className: N.__invalid_name,
                                                        children: (0, r.jsx)(o.Text, {
                                                            className: N.channelText,
                                                            variant: 'text-md/medium',
                                                            lineClamp: 1,
                                                            color: S ? 'text-muted' : 'text-normal',
                                                            children: t.name
                                                        })
                                                    }),
                                                    w
                                                        ? (0, r.jsxs)(r.Fragment, {
                                                              children: [
                                                                  (0, r.jsx)(y, { index: 0 }),
                                                                  (0, r.jsx)(o.Text, {
                                                                      variant: 'text-xs/medium',
                                                                      className: N.channelSubtitle,
                                                                      color: 'text-brand',
                                                                      children: j.NW.string(j.t.mPxmeH)
                                                                  })
                                                              ]
                                                          })
                                                        : null
                                                ]
                                            })
                                        }),
                                        (0, r.jsx)('div', {
                                            className: N.channelActions,
                                            children: (0, u.s)(t.guild_id, t.id)
                                                ? (0, r.jsx)(o.XZJ, {
                                                      'aria-checked': E,
                                                      value: E,
                                                      type: o.XZJ.Types.INVERTED,
                                                      disabled: S,
                                                      color: R ? l.Z.colors.BG_BRAND.css : l.Z.colors.BUTTON_SECONDARY_BACKGROUND.css,
                                                      innerClassName: N.checkboxInner,
                                                      displayOnly: !0
                                                  })
                                                : (0, r.jsxs)(o.zxk, {
                                                      look: o.zxk.Looks.OUTLINED,
                                                      color: o.zxk.Colors.PRIMARY,
                                                      className: N.lockedPill,
                                                      innerClassName: N.lockedPillInner,
                                                      onClick: x.dG4,
                                                      children: [
                                                          (0, r.jsx)(o.mBM, {
                                                              size: 'xs',
                                                              color: 'currentColor'
                                                          }),
                                                          (0, r.jsx)(o.Text, {
                                                              variant: 'text-sm/medium',
                                                              color: 'none',
                                                              children: j.NW.string(j.t.zA9d1N)
                                                          })
                                                      ]
                                                  })
                                        })
                                    ]
                                }
                            )
                        )
                }),
                !C && (0, r.jsx)(O, {})
            ]
        });
    });
function E(e) {
    let { categories: t, guild: n, className: s, hasSidebar: a } = e,
        l = i.useCallback(
            (e) => {
                let i = t._categories[e];
                return (0, r.jsx)(
                    C,
                    {
                        channel: i.channel,
                        guild: n
                    },
                    i.channel.id
                );
            },
            [t, n]
        ),
        o = i.useCallback(
            (e, i) => {
                let s = t._categories[e],
                    l = t[s.channel.id][i];
                return null == l
                    ? null
                    : (0, r.jsx)(
                          I,
                          {
                              category: s.channel,
                              channel: l.channel,
                              guild: n,
                              isFirstChannel: 0 === i,
                              isLastChannel: t[s.channel.id].length - 1 === i,
                              tooltipDirection: a ? 'right' : 'top'
                          },
                          l.channel.id
                      );
            },
            [t, n, a]
        ),
        c = (0, p.tn)(n.id, t, 64);
    return (0, r.jsx)('div', {
        className: s,
        children: c.map((e, t) => {
            let n = l(t),
                i = [],
                s = e.rowCount;
            if (0 === s) return null;
            for (let e = 0; e < s; e++) i.push(o(t, e));
            return (0, r.jsxs)(r.Fragment, {
                children: [n, i]
            });
        })
    });
}
