n.d(t, {
    D: function () {
        return b;
    },
    Z: function () {
        return Z;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(780384),
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
    C = n(228168),
    x = n(981631),
    v = n(388032),
    _ = n(731218),
    I = n(644197);
let E = (0, s.getAvatarSize)(s.AvatarSizes.SIZE_16);
function b(e) {
    let { user: t, guild: l, nick: c, theme: d, onSelect: p } = e,
        f = t.hasAvatarForGuild(l.id);
    return (0, i.jsxs)(s.Clickable, {
        focusProps: { offset: { right: 8 } },
        className: _.listRow,
        onClick: p,
        onContextMenu: (e) => {
            (0, o.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('63288'), n.e('48835'), n.e('33053'), n.e('15669'), n.e('90508'), n.e('65840'), n.e('7654'), n.e('33862'), n.e('70596'), n.e('98479'), n.e('80284'), n.e('31113'), n.e('20561'), n.e('60696'), n.e('70205'), n.e('58227'), n.e('16114'), n.e('53967'), n.e('1187'), n.e('69174'), n.e('4604'), n.e('93375'), n.e('64679'), n.e('73330'), n.e('21881'), n.e('33213'), n.e('32453')]).then(n.bind(n, 545135));
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
                className: r()(_.listAvatar, null == l.icon ? I.guildAvatarWithoutIcon : null),
                badgeStrokeColor: (0, u.Lq)((0, a.wj)(d) ? x.Ilk.PRIMARY_600 : x.Ilk.WHITE_500),
                badgeTooltipColor: s.TooltipColors.PRIMARY,
                badgeTooltipDelay: C.vB,
                size: h.Z.Sizes.MEDIUM,
                active: !0
            }),
            (0, i.jsxs)('div', {
                className: _.listRowContent,
                children: [
                    (0, i.jsx)('div', {
                        className: _.listName,
                        children: l.toString()
                    }),
                    f || null != c
                        ? (0, i.jsxs)('div', {
                              className: I.guildNick,
                              children: [
                                  f &&
                                      (0, i.jsx)(s.Avatar, {
                                          src: t.getAvatarURL(l.id, E),
                                          size: s.AvatarSizes.SIZE_16,
                                          className: I.guildAvatar,
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
        { mutualGuilds: r, isFetching: a } = (0, g.Z)(t.id),
        o = (0, d.ZP)(),
        u = (e) => {
            (0, p.X)(e), n(), (0, c.xf)();
        };
    return (0, i.jsx)(s.ScrollerThin, {
        className: _.listScroller,
        fade: !0,
        children:
            null == r && a
                ? (0, i.jsx)('div', {
                      className: _.empty,
                      children: (0, i.jsx)(s.Spinner, {})
                  })
                : (null != r || a) && (null == r ? void 0 : r.length) !== 0
                  ? null == r
                      ? void 0
                      : r.map((e) => {
                            let { guild: n, nick: r } = e;
                            return (0, i.jsx)(
                                b,
                                {
                                    user: t,
                                    guild: n,
                                    nick: r,
                                    theme: o,
                                    onSelect: () => {
                                        l({ action: 'PRESS_MUTUAL_GUILD' }), u(n.id);
                                    }
                                },
                                n.id
                            );
                        })
                  : (0, i.jsxs)('div', {
                        className: _.empty,
                        children: [
                            (0, i.jsx)('div', { className: _.emptyIconGuilds }),
                            (0, i.jsx)('div', {
                                className: _.emptyText,
                                children: v.intl.string(v.t.zjVh8v)
                            })
                        ]
                    })
    });
}
