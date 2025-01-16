var i = n(200651);
n(192379);
var s = n(442837),
    l = n(481060),
    r = n(204418),
    o = n(594174),
    a = n(113434),
    u = n(182294),
    c = n(443763);
let d = (e) => {
    let { questConfig: t, fallback: n, isFocused: d } = e,
        m = (0, s.e7)([o.default], () => o.default.getCurrentUser()),
        { avatarDecoration: x, isFetching: h } = (0, a.DU)(t);
    return h
        ? (0, i.jsx)('div', {
              className: c.questsCollectibleReward,
              children: (0, i.jsx)(l.Spinner, {})
          })
        : null == m || null == x
          ? n
          : (0, i.jsx)('div', {
                className: c.questsCollectibleReward,
                children: (0, i.jsx)(r.Z, {
                    avatarSize: u.EF.SIZE_56,
                    user: m,
                    guildId: null,
                    avatarDecorationOverride: x,
                    animateOnHover: !d
                })
            });
};
t.Z = (e) => (0, i.jsx)(d, { ...e });
