(n.d(t, { Z: () => E }), n(539854));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(692547),
    o = n(481060),
    c = n(239091),
    d = n(111028),
    u = n(977258),
    m = n(637853),
    g = n(473403),
    p = n(216306),
    h = n(743475),
    f = n(827907),
    x = n(868814),
    b = n(981631),
    j = n(388032),
    v = n(448021);
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function O(e, t) {
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
function y(e) {
    let { guild: t, channel: i } = e,
        l = (0, f.Mf)(i.id);
    return 'null' === i.id
        ? (0, r.jsx)('div', {
              className: a()(v.categoryRow, v.uncategorized),
              children: (0, r.jsx)(o.Text, {
                  className: v.categoryText,
                  color: 'text-muted',
                  variant: 'text-xs/semibold',
                  lineClamp: 1,
                  children: i.name
              })
          })
        : (0, r.jsxs)(o.P3F, {
              className: a()(v.categoryRow, { [v.uncategorized]: 'null' === i.id }),
              onContextMenu: (e) => {
                  (0, c.jW)(e, async () => {
                      let { default: e } = await Promise.all([n.e('68294'), n.e('8965'), n.e('34204')]).then(n.bind(n, 139035));
                      return (n) =>
                          (0, r.jsx)(
                              e,
                              O(_({}, n), {
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
                                    O(_({}, n), {
                                        guildId: t.id,
                                        startingChannelId: i.id
                                    })
                                );
                        }),
                  !0
              ),
              children: [
                  (0, r.jsx)(o.Text, {
                      className: v.categoryText,
                      color: 'text-muted',
                      variant: 'text-xs/semibold',
                      lineClamp: 1,
                      children: i.name
                  }),
                  (0, r.jsx)(o.XZJ, {
                      'aria-checked': l,
                      value: l,
                      type: o.XZJ.Types.INVERTED,
                      className: v.checkbox,
                      displayOnly: !0
                  })
              ]
          });
}
let C = i.memo(function () {
        return (0, r.jsx)('div', { className: v.separator });
    }),
    N = i.memo(function (e) {
        let { index: t } = e;
        return (0, r.jsx)(
            o.Text,
            {
                variant: 'text-xs/normal',
                className: v.subtitleSeparator,
                children: '\xB7'
            },
            'separator-'.concat(t)
        );
    }),
    I = i.memo(function (e) {
        let { channel: t, category: i, guild: l, isFirstChannel: p, isLastChannel: y, tooltipDirection: I = 'right' } = e,
            E = (0, f.Mf)(t.id, i.id),
            S = (0, f.t4)(t.id, i.id),
            T = (0, f.EH)(t.id, i.id),
            P = (0, f.lL)(l.id, i.id),
            w = null != (0, x.Z)(l).find((e) => e.id === t.id),
            R = (0, m.mn)(t.id),
            Z = (e) => {
                if (!S)
                    return (
                        e.stopPropagation(),
                        (0, u.s)(l.id, t.id)
                            ? (0, h.pt)(t.id)
                            : (0, o.ZDy)(async () => {
                                  let { default: e } = await n.e('35641').then(n.bind(n, 89216));
                                  return (n) =>
                                      (0, r.jsx)(
                                          e,
                                          O(_({}, n), {
                                              guildId: l.id,
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
                          let { default: e } = await Promise.all([n.e('79695'), n.e('42743'), n.e('68294'), n.e('18320'), n.e('67096'), n.e('83331'), n.e('29929')]).then(n.bind(n, 213202));
                          return (n) =>
                              (0, r.jsx)(
                                  e,
                                  O(_({}, n), {
                                      channel: t,
                                      guild: l
                                  })
                              );
                      })
                    : (0, c.jW)(e, async () => {
                          let { default: e } = await Promise.all([n.e('14006'), n.e('8381'), n.e('40095'), n.e('79695'), n.e('80417'), n.e('66005'), n.e('68114'), n.e('64838'), n.e('83075'), n.e('42743'), n.e('50874'), n.e('7590'), n.e('68294'), n.e('16705'), n.e('15114'), n.e('1268'), n.e('35755'), n.e('24255'), n.e('37220'), n.e('46653'), n.e('91315'), n.e('18320'), n.e('67096'), n.e('60173'), n.e('47218'), n.e('63830')]).then(n.bind(n, 373651));
                          return (n) =>
                              (0, r.jsx)(
                                  e,
                                  O(_({}, n), {
                                      channel: t,
                                      guild: l
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
                            O(
                                _(
                                    {
                                        className: a()(v.channelRow, {
                                            [v.firstChannel]: p,
                                            [v.lastChannel]: y,
                                            [v.disabled]: S
                                        })
                                    },
                                    e
                                ),
                                {
                                    onClick: Z,
                                    onContextMenu: D,
                                    children: [
                                        (0, r.jsx)('div', {
                                            className: v.channelInfo,
                                            children: (0, r.jsxs)('div', {
                                                className: v.channelName,
                                                children: [
                                                    (0, r.jsx)(g._W, {
                                                        channel: t,
                                                        guild: l
                                                    }),
                                                    (0, r.jsx)(d.Z, {
                                                        className: v.__invalid_name,
                                                        children: (0, r.jsx)(o.Text, {
                                                            className: v.channelText,
                                                            variant: 'text-md/medium',
                                                            lineClamp: 1,
                                                            color: S ? 'text-muted' : 'text-default',
                                                            children: t.name
                                                        })
                                                    }),
                                                    w
                                                        ? (0, r.jsxs)(r.Fragment, {
                                                              children: [
                                                                  (0, r.jsx)(N, { index: 0 }),
                                                                  (0, r.jsx)(o.Text, {
                                                                      variant: 'text-xs/medium',
                                                                      className: v.channelSubtitle,
                                                                      color: 'text-brand',
                                                                      children: j.intl.string(j.t.mPxmeH)
                                                                  })
                                                              ]
                                                          })
                                                        : null
                                                ]
                                            })
                                        }),
                                        (0, r.jsx)('div', {
                                            className: v.channelActions,
                                            children: (0, u.s)(t.guild_id, t.id)
                                                ? (0, r.jsx)(o.XZJ, {
                                                      'aria-checked': E,
                                                      value: E,
                                                      type: o.XZJ.Types.INVERTED,
                                                      disabled: S,
                                                      color: R ? s.Z.colors.BG_BRAND.css : s.Z.colors.BUTTON_SECONDARY_BACKGROUND.css,
                                                      innerClassName: v.checkboxInner,
                                                      displayOnly: !0
                                                  })
                                                : (0, r.jsx)(o.zxk, {
                                                      size: 'sm',
                                                      variant: 'secondary',
                                                      text: j.intl.string(j.t.zA9d1N),
                                                      icon: o.mBM,
                                                      onClick: b.dG4
                                                  })
                                        })
                                    ]
                                }
                            )
                        )
                }),
                !y && (0, r.jsx)(C, {})
            ]
        });
    });
function E(e) {
    let { categories: t, guild: n, className: l, hasSidebar: a } = e,
        s = i.useCallback(
            (e) => {
                let i = t._categories[e];
                return (0, r.jsx)(
                    y,
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
                let l = t._categories[e],
                    s = t[l.channel.id][i];
                return null == s
                    ? null
                    : (0, r.jsx)(
                          I,
                          {
                              category: l.channel,
                              channel: s.channel,
                              guild: n,
                              isFirstChannel: 0 === i,
                              isLastChannel: t[l.channel.id].length - 1 === i,
                              tooltipDirection: a ? 'right' : 'top'
                          },
                          s.channel.id
                      );
            },
            [t, n, a]
        ),
        c = (0, p.tn)(n.id, t, 64);
    return (0, r.jsx)('div', {
        className: l,
        children: c.map((e, t) => {
            let n = s(t),
                i = [],
                l = e.rowCount;
            if (0 === l) return null;
            for (let e = 0; e < l; e++) i.push(o(t, e));
            return (0, r.jsxs)(r.Fragment, {
                children: [n, i]
            });
        })
    });
}
