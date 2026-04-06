n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var a = n(926466),
    r = n(450510),
    l = n(976860),
    s = n(323443),
    o = n(652215),
    d = n(985018),
    c = n(213242);
let u = (e) => {
    let { channel: t, guild: n } = e;
    return (0, i.jsx)(a.A, {
        guild: n,
        onDismissed: () => {
            (0, r.sF)(r._2.HUB_STUDY_ROOM_NOTICE);
        },
        onClick: () => {
            (0, r.sF)(r._2.HUB_STUDY_ROOM_NOTICE),
                null != t && null != t.getGuildId() && ((0, s.av)(t), (0, l.uh)(t.getGuildId(), t.id));
        },
        title: d.intl.string(d.t["4Y2AS7"]),
        message: d.intl.string(d.t.wTsxTS),
        cta: d.intl.string(d.t.wBoE6L),
        image: c,
        type: o.n5X.HUB_STUDY_ROOM,
    });
};
