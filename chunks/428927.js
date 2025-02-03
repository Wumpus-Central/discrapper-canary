n.d(t, {
    D: () => b,
    Z: () => Z
});
var i = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    r = n(780384),
    s = n(481060),
    o = n(239091),
    c = n(37234),
    d = n(410030),
    u = n(44315),
    h = n(565138),
    p = n(769654),
    m = n(51144),
    f = n(785717),
    g = n(200634),
    _ = n(228168),
    C = n(981631),
    x = n(388032),
    v = n(731218),
    E = n(644197);
let I = (0, s.pxk)(s.EFr.SIZE_16);
function b(e) {
    let { user: t, guild: l, nick: c, theme: d, onSelect: p } = e,
        f = t.hasAvatarForGuild(l.id);
    return (0, i.jsxs)(s.P3F, {
        focusProps: { offset: { right: 8 } },
        className: v.listRow,
        onClick: p,
        onContextMenu: (e) => {
            (0, o.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('48835'), n.e('90508'), n.e('68445'), n.e('7654'), n.e('80284'), n.e('54515'), n.e('33862'), n.e('60691'), n.e('44156'), n.e('86133'), n.e('53967'), n.e('16806'), n.e('60696'), n.e('70205'), n.e('58227'), n.e('16114'), n.e('12672'), n.e('93375'), n.e('64679'), n.e('75255'), n.e('94107'), n.e('33213'), n.e('42994')]).then(n.bind(n, 545135));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        guild: l
                    });
            });
        },
        children: [
            (0, i.jsx)(h.Z, {
                tabIndex: -1,
                guild: l,
                showBadge: !0,
                className: a()(v.listAvatar, null == l.icon ? E.guildAvatarWithoutIcon : null),
                badgeStrokeColor: (0, u.Lq)((0, r.wj)(d) ? C.Ilk.PRIMARY_600 : C.Ilk.WHITE_500),
                badgeTooltipColor: s.FGA.PRIMARY,
                badgeTooltipDelay: _.vB,
                size: h.Z.Sizes.MEDIUM,
                active: !0
            }),
            (0, i.jsxs)('div', {
                className: v.listRowContent,
                children: [
                    (0, i.jsx)('div', {
                        className: v.listName,
                        children: l.toString()
                    }),
                    f || null != c
                        ? (0, i.jsxs)('div', {
                              className: E.guildNick,
                              children: [
                                  f &&
                                      (0, i.jsx)(s.qEK, {
                                          src: t.getAvatarURL(l.id, I),
                                          size: s.EFr.SIZE_16,
                                          className: E.guildAvatar,
                                          'aria-hidden': !0
                                      }),
                                  null != c ? c : m.ZP.getName(t)
                              ]
                          })
                        : null
                ]
            })
        ]
    });
}
function Z(e) {
    let { user: t, onClose: n } = e,
        { trackUserProfileAction: l } = (0, f.KZ)(),
        { mutualGuilds: a, isFetching: r } = (0, g.Z)(t.id),
        o = (0, d.ZP)(),
        u = (e) => {
            (0, p.X)(e), n(), (0, c.xf)();
        };
    return (0, i.jsx)(s.zJl, {
        className: v.listScroller,
        fade: !0,
        children:
            null == a && r
                ? (0, i.jsx)('div', {
                      className: v.empty,
                      children: (0, i.jsx)(s.$jN, {})
                  })
                : (null != a || r) && (null == a ? void 0 : a.length) !== 0
                  ? null == a
                      ? void 0
                      : a.map((e) => {
                            let { guild: n, nick: a } = e;
                            return (0, i.jsx)(
                                b,
                                {
                                    user: t,
                                    guild: n,
                                    nick: a,
                                    theme: o,
                                    onSelect: () => {
                                        l({ action: 'PRESS_MUTUAL_GUILD' }), u(n.id);
                                    }
                                },
                                n.id
                            );
                        })
                  : (0, i.jsxs)('div', {
                        className: v.empty,
                        children: [
                            (0, i.jsx)('div', { className: v.emptyIconGuilds }),
                            (0, i.jsx)('div', {
                                className: v.emptyText,
                                children: x.intl.string(x.t.zjVh8v)
                            })
                        ]
                    })
    });
}
