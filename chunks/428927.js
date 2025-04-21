n.d(t, {
    D: () => P,
    Z: () => N
});
var r = n(200651);
n(192379);
var l = n(120356),
    i = n.n(l),
    s = n(780384),
    a = n(481060),
    c = n(239091),
    o = n(37234),
    u = n(410030),
    d = n(44315),
    m = n(565138),
    p = n(769654),
    f = n(51144),
    j = n(785717),
    b = n(806729),
    x = n(228168),
    v = n(981631),
    g = n(388032),
    h = n(301150),
    y = n(67487);
let O = (0, a.pxk)(a.EFr.SIZE_16);
function P(e) {
    let { user: t, guild: l, nick: o, theme: u, onSelect: p } = e,
        j = t.hasAvatarForGuild(l.id);
    return (0, r.jsxs)(a.P3F, {
        focusProps: { offset: { right: 8 } },
        className: h.listRow,
        onClick: p,
        onContextMenu: (e) => {
            (0, c.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('48835'), n.e('25292'), n.e('90508'), n.e('95477'), n.e('91245'), n.e('20875'), n.e('80284'), n.e('27146'), n.e('85679'), n.e('2286'), n.e('63958'), n.e('7654'), n.e('70205'), n.e('62117'), n.e('49049'), n.e('44156'), n.e('76346'), n.e('49286'), n.e('6850'), n.e('32652'), n.e('58227'), n.e('54408'), n.e('10923'), n.e('93375'), n.e('64679'), n.e('44606'), n.e('56534'), n.e('87154'), n.e('33213'), n.e('44612')]).then(n.bind(n, 545135));
                return (t) => {
                    var n, i;
                    return (0, r.jsx)(
                        e,
                        ((n = (function (e) {
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
                        })({}, t)),
                        (i = i = { guild: l }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(i)).forEach(function (e) {
                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                              }),
                        n)
                    );
                };
            });
        },
        children: [
            (0, r.jsx)(m.Z, {
                tabIndex: -1,
                guild: l,
                showBadge: !0,
                className: i()(h.listAvatar, null == l.icon ? y.guildAvatarWithoutIcon : null),
                badgeStrokeColor: (0, d.Lq)((0, s.wj)(u) ? v.Ilk.PRIMARY_600 : v.Ilk.WHITE_500),
                badgeTooltipColor: a.FGA.PRIMARY,
                badgeTooltipDelay: x.vB,
                size: m.Z.Sizes.MEDIUM,
                active: !0
            }),
            (0, r.jsxs)('div', {
                className: h.listRowContent,
                children: [
                    (0, r.jsx)('div', {
                        className: h.listName,
                        children: l.toString()
                    }),
                    j || null != o
                        ? (0, r.jsxs)('div', {
                              className: y.guildNick,
                              children: [
                                  j &&
                                      (0, r.jsx)(a.qEK, {
                                          src: t.getAvatarURL(l.id, O),
                                          size: a.EFr.SIZE_16,
                                          className: y.guildAvatar,
                                          'aria-hidden': !0
                                      }),
                                  null != o ? o : f.ZP.getName(t)
                              ]
                          })
                        : null
                ]
            })
        ]
    });
}
function N(e) {
    let { user: t, onClose: n } = e,
        { trackUserProfileAction: l } = (0, j.KZ)(),
        { mutualGuilds: i, isFetching: s } = (0, b.Z)(t),
        c = (0, u.ZP)(),
        d = (e) => {
            (0, p.X)(e), n(), (0, o.xf)();
        };
    return (0, r.jsx)(a.zJl, {
        className: h.listScroller,
        fade: !0,
        children:
            null == i && s
                ? (0, r.jsx)('div', {
                      className: h.empty,
                      children: (0, r.jsx)(a.$jN, {})
                  })
                : (null != i || s) && (null == i ? void 0 : i.length) !== 0
                  ? null == i
                      ? void 0
                      : i.map((e) => {
                            let { guild: n, nick: i } = e;
                            return (0, r.jsx)(
                                P,
                                {
                                    user: t,
                                    guild: n,
                                    nick: i,
                                    theme: c,
                                    onSelect: () => {
                                        l({ action: 'PRESS_MUTUAL_GUILD' }), d(n.id);
                                    }
                                },
                                n.id
                            );
                        })
                  : (0, r.jsxs)('div', {
                        className: h.empty,
                        children: [
                            (0, r.jsx)('div', { className: h.emptyIconGuilds }),
                            (0, r.jsx)('div', {
                                className: h.emptyText,
                                children: g.intl.string(g.t.zjVh8v)
                            })
                        ]
                    })
    });
}
