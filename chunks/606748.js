n.d(t, { A: () => d });
var r = n(627968);
n(64700);
var i = n(64983),
    l = n(450510),
    a = n(976860),
    s = n(323443),
    o = n(652215),
    c = n(985018),
    u = n(213242);
let d = (e) => {
    let { channel: t, guild: n } = e;
    return (0, r.jsx)(i.A, {
        guild: n,
        onDismissed: () => {
            (0, l.sF)(l._2.HUB_STUDY_ROOM_NOTICE);
        },
        onClick: () => {
            (0, l.sF)(l._2.HUB_STUDY_ROOM_NOTICE),
                null != t && null != t.getGuildId() && ((0, s.av)(t), (0, a.uh)(t.getGuildId(), t.id));
        },
        title: c.intl.string(c.t["4Y2AS7"]),
        message: c.intl.string(c.t.wTsxTS),
        cta: c.intl.string(c.t.wBoE6L),
        image: u,
        type: o.n5X.HUB_STUDY_ROOM,
    });
};
