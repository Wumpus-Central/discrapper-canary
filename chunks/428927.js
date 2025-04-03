r.d(t, {
    D: () => N,
    Z: () => P
});
var n = r(200651);
r(192379);
var l = r(120356),
    s = r.n(l),
    i = r(780384),
    a = r(481060),
    c = r(239091),
    o = r(37234),
    u = r(410030),
    d = r(44315),
    m = r(565138),
    p = r(769654),
    f = r(51144),
    j = r(785717),
    b = r(806729),
    x = r(228168),
    v = r(981631),
    g = r(388032),
    h = r(301150),
    y = r(67487);
let O = (0, a.pxk)(a.EFr.SIZE_16);
function N(e) {
    let { user: t, guild: l, nick: o, theme: u, onSelect: p } = e,
        j = t.hasAvatarForGuild(l.id);
    return (0, n.jsxs)(a.P3F, {
        focusProps: { offset: { right: 8 } },
        className: h.listRow,
        onClick: p,
        onContextMenu: (e) => {
            (0, c.jW)(e, async () => {
                let { default: e } = await Promise.all([r.e('48835'), r.e('25292'), r.e('95477'), r.e('90508'), r.e('11212'), r.e('35397'), r.e('80284'), r.e('20875'), r.e('9710'), r.e('24967'), r.e('7654'), r.e('62117'), r.e('60691'), r.e('76607'), r.e('70205'), r.e('49049'), r.e('44156'), r.e('87185'), r.e('49286'), r.e('6850'), r.e('55666'), r.e('16114'), r.e('58227'), r.e('44088'), r.e('39149'), r.e('93375'), r.e('64679'), r.e('15327'), r.e('21881'), r.e('69760'), r.e('33213'), r.e('79213')]).then(r.bind(r, 545135));
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
                        (s = s = { guild: l }),
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
            (0, n.jsx)(m.Z, {
                tabIndex: -1,
                guild: l,
                showBadge: !0,
                className: s()(h.listAvatar, null == l.icon ? y.guildAvatarWithoutIcon : null),
                badgeStrokeColor: (0, d.Lq)((0, i.wj)(u) ? v.Ilk.PRIMARY_600 : v.Ilk.WHITE_500),
                badgeTooltipColor: a.FGA.PRIMARY,
                badgeTooltipDelay: x.vB,
                size: m.Z.Sizes.MEDIUM,
                active: !0
            }),
            (0, n.jsxs)('div', {
                className: h.listRowContent,
                children: [
                    (0, n.jsx)('div', {
                        className: h.listName,
                        children: l.toString()
                    }),
                    j || null != o
                        ? (0, n.jsxs)('div', {
                              className: y.guildNick,
                              children: [
                                  j &&
                                      (0, n.jsx)(a.qEK, {
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
function P(e) {
    let { user: t, onClose: r } = e,
        { trackUserProfileAction: l } = (0, j.KZ)(),
        { mutualGuilds: s, isFetching: i } = (0, b.Z)(t),
        c = (0, u.ZP)(),
        d = (e) => {
            (0, p.X)(e), r(), (0, o.xf)();
        };
    return (0, n.jsx)(a.zJl, {
        className: h.listScroller,
        fade: !0,
        children:
            null == s && i
                ? (0, n.jsx)('div', {
                      className: h.empty,
                      children: (0, n.jsx)(a.$jN, {})
                  })
                : (null != s || i) && (null == s ? void 0 : s.length) !== 0
                  ? null == s
                      ? void 0
                      : s.map((e) => {
                            let { guild: r, nick: s } = e;
                            return (0, n.jsx)(
                                N,
                                {
                                    user: t,
                                    guild: r,
                                    nick: s,
                                    theme: c,
                                    onSelect: () => {
                                        l({ action: 'PRESS_MUTUAL_GUILD' }), d(r.id);
                                    }
                                },
                                r.id
                            );
                        })
                  : (0, n.jsxs)('div', {
                        className: h.empty,
                        children: [
                            (0, n.jsx)('div', { className: h.emptyIconGuilds }),
                            (0, n.jsx)('div', {
                                className: h.emptyText,
                                children: g.NW.string(g.t.zjVh8v)
                            })
                        ]
                    })
    });
}
