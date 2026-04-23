i.d(e, { default: () => d });
var s = i(627968);
i(64700);
var l = i(189213),
    n = i(71393),
    a = i(66604),
    r = i(985018);
let d = (t) => {
    let { onClose: e, guildId: i } = t,
        d = r.intl.format(r.t.ZqkXsC, { helpdeskArticle: a.V }),
        c = n.A.getGuild(i);
    return (
        null != c && (d = r.intl.format(r.t.jn0Xyx, { guildName: c.name, helpdeskArticle: a.V })),
        (0, s.jsx)(l.Modal, {
            transitionState: t.transitionState,
            onClose: e,
            title: r.intl.string(r.t.kJwpBW),
            subtitle: d,
            actions: [{ text: r.intl.string(r.t.BddRzS), onClick: e }],
        })
    );
};
