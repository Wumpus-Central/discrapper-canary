r.d(t, {
    D: () => P,
    Z: () => w
});
var n = r(200651);
r(192379);
var i = r(120356),
    s = r.n(i),
    l = r(780384),
    a = r(481060),
    c = r(239091),
    o = r(37234),
    u = r(410030),
    d = r(44315),
    p = r(565138),
    f = r(769654),
    m = r(51144),
    j = r(785717),
    b = r(806729),
    g = r(228168),
    v = r(981631),
    x = r(388032),
    y = r(301150),
    O = r(67487);
let h = (0, a.pxk)(a.EFr.SIZE_16);
function P(e) {
    let { user: t, guild: i, nick: o, theme: u, onSelect: f } = e,
        j = t.hasAvatarForGuild(i.id);
    return (0, n.jsxs)(a.P3F, {
        focusProps: { offset: { right: 8 } },
        className: y.listRow,
        onClick: f,
        onContextMenu: (e) => {
            (0, c.jW)(e, async () => {
                let { default: e } = await Promise.all([r.e('48835'), r.e('25292'), r.e('90508'), r.e('95477'), r.e('91245'), r.e('20875'), r.e('80284'), r.e('27146'), r.e('60691'), r.e('2286'), r.e('31975'), r.e('7654'), r.e('70205'), r.e('62117'), r.e('49049'), r.e('44156'), r.e('76346'), r.e('49286'), r.e('32652'), r.e('6850'), r.e('58227'), r.e('54408'), r.e('80728'), r.e('50629'), r.e('93375'), r.e('64679'), r.e('44606'), r.e('56534'), r.e('87154'), r.e('33213'), r.e('44612')]).then(r.bind(r, 545135));
                return (t) => {
                    var r, s;
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
                        (s = s = { guild: i }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(s))
                            : (function (e, t) {
                                  var r = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var n = Object.getOwnPropertySymbols(e);
                                      r.push.apply(r, n);
                                  }
                                  return r;
                              })(Object(s)).forEach(function (e) {
                                  Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(s, e));
                              }),
                        r)
                    );
                };
            });
        },
        children: [
            (0, n.jsx)(p.Z, {
                tabIndex: -1,
                guild: i,
                showBadge: !0,
                className: s()(y.listAvatar, null == i.icon ? O.guildAvatarWithoutIcon : null),
                badgeStrokeColor: (0, d.Lq)((0, l.wj)(u) ? v.Ilk.PRIMARY_600 : v.Ilk.WHITE_500),
                badgeTooltipColor: a.FGA.PRIMARY,
                badgeTooltipDelay: g.vB,
                size: p.Z.Sizes.MEDIUM,
                active: !0
            }),
            (0, n.jsxs)('div', {
                className: y.listRowContent,
                children: [
                    (0, n.jsx)('div', {
                        className: y.listName,
                        children: i.toString()
                    }),
                    j || null != o
                        ? (0, n.jsxs)('div', {
                              className: O.guildNick,
                              children: [
                                  j &&
                                      (0, n.jsx)(a.qEK, {
                                          src: t.getAvatarURL(i.id, h),
                                          size: a.EFr.SIZE_16,
                                          className: O.guildAvatar,
                                          'aria-hidden': !0
                                      }),
                                  null != o ? o : m.ZP.getName(t)
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
        { trackUserProfileAction: i } = (0, j.KZ)(),
        { mutualGuilds: s, isFetching: l } = (0, b.Z)(t),
        c = (0, u.ZP)(),
        d = (e) => {
            (0, f.X)(e), r(), (0, o.xf)();
        };
    return (0, n.jsx)(a.zJl, {
        className: y.listScroller,
        fade: !0,
        children:
            null == s && l
                ? (0, n.jsx)('div', {
                      className: y.empty,
                      children: (0, n.jsx)(a.$jN, {})
                  })
                : (null != s || l) && (null == s ? void 0 : s.length) !== 0
                  ? null == s
                      ? void 0
                      : s.map((e) => {
                            let { guild: r, nick: s } = e;
                            return (0, n.jsx)(
                                P,
                                {
                                    user: t,
                                    guild: r,
                                    nick: s,
                                    theme: c,
                                    onSelect: () => {
                                        i({ action: 'PRESS_MUTUAL_GUILD' }), d(r.id);
                                    }
                                },
                                r.id
                            );
                        })
                  : (0, n.jsxs)('div', {
                        className: y.empty,
                        children: [
                            (0, n.jsx)('div', { className: y.emptyIconGuilds }),
                            (0, n.jsx)('div', {
                                className: y.emptyText,
                                children: x.intl.string(x.t.zjVh8v)
                            })
                        ]
                    })
    });
}
