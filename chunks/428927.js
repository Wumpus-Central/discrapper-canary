s.d(l, {
    D: () => S,
    Z: () => I
});
var t = s(200651);
s(192379);
var i = s(120356),
    a = s.n(i),
    n = s(780384),
    r = s(481060),
    c = s(239091),
    o = s(37234),
    d = s(410030),
    u = s(44315),
    m = s(565138),
    x = s(769654),
    v = s(51144),
    j = s(785717),
    h = s(200634),
    p = s(228168),
    f = s(981631),
    N = s(388032),
    g = s(782276),
    Z = s(807697);
let b = (0, r.pxk)(r.EFr.SIZE_16);
function S(e) {
    let { user: l, guild: i, nick: o, theme: d, onSelect: x } = e,
        j = l.hasAvatarForGuild(i.id);
    return (0, t.jsxs)(r.P3F, {
        focusProps: { offset: { right: 8 } },
        className: g.listRow,
        onClick: x,
        onContextMenu: (e) => {
            (0, c.jW)(e, async () => {
                let { default: e } = await Promise.all([s.e('48835'), s.e('25292'), s.e('33053'), s.e('17298'), s.e('90508'), s.e('95477'), s.e('11212'), s.e('88682'), s.e('78258'), s.e('33862'), s.e('80284'), s.e('6009'), s.e('7654'), s.e('60691'), s.e('70205'), s.e('44156'), s.e('71864'), s.e('20364'), s.e('6850'), s.e('58227'), s.e('16114'), s.e('54408'), s.e('35217'), s.e('93375'), s.e('64679'), s.e('64190'), s.e('21881'), s.e('33213'), s.e('75215')]).then(s.bind(s, 963279));
                return (l) =>
                    (0, t.jsx)(e, {
                        ...l,
                        guild: i
                    });
            });
        },
        children: [
            (0, t.jsx)(m.Z, {
                tabIndex: -1,
                guild: i,
                showBadge: !0,
                className: a()(g.listAvatar, null == i.icon ? Z.guildAvatarWithoutIcon : null),
                badgeStrokeColor: (0, u.Lq)((0, n.wj)(d) ? f.Ilk.PRIMARY_600 : f.Ilk.WHITE_500),
                badgeTooltipColor: r.FGA.PRIMARY,
                badgeTooltipDelay: p.vB,
                size: m.Z.Sizes.MEDIUM,
                active: !0
            }),
            (0, t.jsxs)('div', {
                className: g.listRowContent,
                children: [
                    (0, t.jsx)('div', {
                        className: g.listName,
                        children: i.toString()
                    }),
                    j || null != o
                        ? (0, t.jsxs)('div', {
                              className: Z.guildNick,
                              children: [
                                  j &&
                                      (0, t.jsx)(r.qEK, {
                                          src: l.getAvatarURL(i.id, b),
                                          size: r.EFr.SIZE_16,
                                          className: Z.guildAvatar,
                                          'aria-hidden': !0
                                      }),
                                  null != o ? o : v.ZP.getName(l)
                              ]
                          })
                        : null
                ]
            })
        ]
    });
}
function I(e) {
    let { user: l, onClose: s } = e,
        { trackUserProfileAction: i } = (0, j.KZ)(),
        { mutualGuilds: a, isFetching: n } = (0, h.Z)(l.id),
        c = (0, d.ZP)(),
        u = (e) => {
            (0, x.X)(e), s(), (0, o.xf)();
        };
    return (0, t.jsx)(r.zJl, {
        className: g.listScroller,
        fade: !0,
        children:
            null == a && n
                ? (0, t.jsx)('div', {
                      className: g.empty,
                      children: (0, t.jsx)(r.$jN, {})
                  })
                : (null != a || n) && (null == a ? void 0 : a.length) !== 0
                  ? null == a
                      ? void 0
                      : a.map((e) => {
                            let { guild: s, nick: a } = e;
                            return (0, t.jsx)(
                                S,
                                {
                                    user: l,
                                    guild: s,
                                    nick: a,
                                    theme: c,
                                    onSelect: () => {
                                        i({ action: 'PRESS_MUTUAL_GUILD' }), u(s.id);
                                    }
                                },
                                s.id
                            );
                        })
                  : (0, t.jsxs)('div', {
                        className: g.empty,
                        children: [
                            (0, t.jsx)('div', { className: g.emptyIconGuilds }),
                            (0, t.jsx)('div', {
                                className: g.emptyText,
                                children: N.intl.string(N.t.zjVh8v)
                            })
                        ]
                    })
    });
}
