e.d(i, { default: () => r });
var s = e(255367);
e(73800);
var n = e(82659),
    l = e(430824),
    a = e(614812),
    c = e(388032);
let r = (t) => {
    let { onClose: i, guildId: e } = t,
        r = c.intl.format(c.t.ZqkXsL, { helpdeskArticle: a.z }),
        d = l.Z.getGuild(e);
    return (
        null != d &&
            (r = c.intl.format(c.t.jn0Xy8, {
                guildName: d.name,
                helpdeskArticle: a.z
            })),
        (0, s.jsx)(n.Modal, {
            transitionState: t.transitionState,
            onClose: i,
            title: c.intl.string(c.t.kJwpBQ),
            subtitle: r,
            actions: [
                {
                    text: c.intl.string(c.t.BddRzc),
                    onClick: i
                }
            ]
        })
    );
};
