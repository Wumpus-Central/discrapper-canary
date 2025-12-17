n.d(t, { Z: () => d });
var r = n(54381);
n(473749);
var i = n(82950),
    l = n(536442),
    a = n(703656),
    o = n(922482),
    s = n(981631),
    c = n(388032),
    u = n(882977);
let d = (e) => {
    let { channel: t, guild: n } = e;
    return (0, r.jsx)(i.Z, {
        guild: n,
        onDismissed: () => {
            (0, l.Kw)(l.v6.HUB_STUDY_ROOM_NOTICE);
        },
        onClick: () => {
            (0, l.Kw)(l.v6.HUB_STUDY_ROOM_NOTICE),
                null != t && null != t.getGuildId() && ((0, o.Cq)(t), (0, a.XU)(t.getGuildId(), t.id));
        },
        title: c.intl.string(c.t["4Y2AS7"]),
        message: c.intl.string(c.t.wTsxTS),
        cta: c.intl.string(c.t.wBoE6L),
        image: u,
        type: s.vID.HUB_STUDY_ROOM,
    });
};
