e.d(i, { default: () => c });
var s = e(54381);
e(473749);
var n = e(793030),
    l = e(430824),
    a = e(614812),
    r = e(388032);
let c = (t) => {
    let { onClose: i, guildId: e } = t,
        c = r.intl.format(r.t.ZqkXsC, { helpdeskArticle: a.z }),
        d = l.Z.getGuild(e);
    return (
        null != d &&
            (c = r.intl.format(r.t.jn0Xyx, {
                guildName: d.name,
                helpdeskArticle: a.z,
            })),
        (0, s.jsx)(n.Modal, {
            transitionState: t.transitionState,
            onClose: i,
            title: r.intl.string(r.t.kJwpBW),
            subtitle: c,
            actions: [
                {
                    text: r.intl.string(r.t.BddRzS),
                    onClick: i,
                },
            ],
        })
    );
};
