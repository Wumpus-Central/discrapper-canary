n.d(t, { Z: () => m });
var s = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    a = n(204418),
    r = n(594174),
    o = n(113434),
    d = n(182294),
    u = n(443763);
let c = (e) => {
        let { questConfig: t, fallback: n, isFocused: c } = e,
            m = (0, i.e7)([r.default], () => r.default.getCurrentUser()),
            { avatarDecoration: x, isFetching: h } = (0, o.DU)(t);
        return h
            ? (0, s.jsx)('div', {
                  className: u.questsCollectibleReward,
                  children: (0, s.jsx)(l.$jN, {})
              })
            : null == m || null == x
              ? n
              : (0, s.jsx)('div', {
                    className: u.questsCollectibleReward,
                    children: (0, s.jsx)(a.Z, {
                        avatarSize: d.EF.SIZE_56,
                        user: m,
                        guildId: null,
                        avatarDecorationOverride: x,
                        animateOnHover: !c
                    })
                });
    },
    m = (e) => (0, s.jsx)(c, { ...e });
