r.d(t, {
    D: () => P,
    Z: () => w
});
var n = r(200651);
r(192379);
var s = r(120356),
    i = r.n(s),
    l = r(780384),
    c = r(481060),
    a = r(239091),
    o = r(37234),
    u = r(410030),
    d = r(44315),
    p = r(565138),
    f = r(769654),
    b = r(51144),
    j = r(785717),
    m = r(806729),
    y = r(228168),
    O = r(981631),
    g = r(388032),
    v = r(301150),
    x = r(67487);
let h = (0, c.pxk)(c.EFr.SIZE_16);
function P(e) {
    let { user: t, guild: s, nick: o, theme: u, onSelect: f } = e,
        j = t.hasAvatarForGuild(s.id);
    return (0, n.jsxs)(c.P3F, {
        focusProps: { offset: { right: 8 } },
        className: v.listRow,
        onClick: f,
        onContextMenu: (e) => {
            (0, a.jW)(e, async () => {
                let { default: e } = await Promise.all([r.e('48835'), r.e('25292'), r.e('90508'), r.e('95477'), r.e('91245'), r.e('20875'), r.e('80284'), r.e('27146'), r.e('60691'), r.e('2286'), r.e('94928'), r.e('7654'), r.e('70205'), r.e('62117'), r.e('49049'), r.e('44156'), r.e('86133'), r.e('49286'), r.e('32652'), r.e('6850'), r.e('58227'), r.e('54408'), r.e('80728'), r.e('50629'), r.e('93375'), r.e('64679'), r.e('44606'), r.e('56534'), r.e('87154'), r.e('33213'), r.e('20849')]).then(r.bind(r, 545135));
                return (t) => {
                    var r, i;
                    return (0, n.jsx)(
                        e,
                        ((r = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {},
                                    n = Object.keys(r);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (n = n.concat(
                                        Object.getOwnPropertySymbols(r).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                        })
                                    )),
                                    n.forEach(function (t) {
                                        var n;
                                        (n = r[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: n,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = n);
                                    });
                            }
                            return e;
                        })({}, t)),
                        (i = i = { guild: s }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
                            : (function (e, t) {
                                  var r = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var n = Object.getOwnPropertySymbols(e);
                                      r.push.apply(r, n);
                                  }
                                  return r;
                              })(Object(i)).forEach(function (e) {
                                  Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
                              }),
                        r)
                    );
                };
            });
        },
        children: [
            (0, n.jsx)(p.Z, {
                tabIndex: -1,
                guild: s,
                showBadge: !0,
                className: i()(v.listAvatar, null == s.icon ? x.guildAvatarWithoutIcon : null),
                badgeStrokeColor: (0, d.Lq)((0, l.wj)(u) ? O.Ilk.PRIMARY_600 : O.Ilk.WHITE_500),
                badgeTooltipColor: c.FGA.PRIMARY,
                badgeTooltipDelay: y.vB,
                size: p.Z.Sizes.MEDIUM,
                active: !0
            }),
            (0, n.jsxs)('div', {
                className: v.listRowContent,
                children: [
                    (0, n.jsx)('div', {
                        className: v.listName,
                        children: s.toString()
                    }),
                    j || null != o
                        ? (0, n.jsxs)('div', {
                              className: x.guildNick,
                              children: [
                                  j &&
                                      (0, n.jsx)(c.qEK, {
                                          src: t.getAvatarURL(s.id, h),
                                          size: c.EFr.SIZE_16,
                                          className: x.guildAvatar,
                                          'aria-hidden': !0
                                      }),
                                  null != o ? o : b.ZP.getName(t)
                              ]
                          })
                        : null
                ]
            })
        ]
    });
}
function w(e) {
    let { user: t, onClose: r } = e,
        { trackUserProfileAction: s } = (0, j.KZ)(),
        { mutualGuilds: i, isFetching: l } = (0, m.Z)(t),
        a = (0, u.ZP)(),
        d = (e) => {
            (0, f.X)(e), r(), (0, o.xf)();
        };
    return (0, n.jsx)(c.zJl, {
        className: v.listScroller,
        fade: !0,
        children:
            null == i && l
                ? (0, n.jsx)('div', {
                      className: v.empty,
                      children: (0, n.jsx)(c.$jN, {})
                  })
                : (null != i || l) && (null == i ? void 0 : i.length) !== 0
                  ? null == i
                      ? void 0
                      : i.map((e) => {
                            let { guild: r, nick: i } = e;
                            return (0, n.jsx)(
                                P,
                                {
                                    user: t,
                                    guild: r,
                                    nick: i,
                                    theme: a,
                                    onSelect: () => {
                                        s({ action: 'PRESS_MUTUAL_GUILD' }), d(r.id);
                                    }
                                },
                                r.id
                            );
                        })
                  : (0, n.jsxs)('div', {
                        className: v.empty,
                        children: [
                            (0, n.jsx)('div', { className: v.emptyIconGuilds }),
                            (0, n.jsx)('div', {
                                className: v.emptyText,
                                children: g.intl.string(g.t.zjVh8v)
                            })
                        ]
                    })
    });
}
