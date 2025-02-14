n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var l = n(324262),
    r = n(536442),
    a = n(703656),
    s = n(922482),
    o = n(981631),
    d = n(388032),
    c = n(882977);
let u = (e) => {
    let { channel: t, guild: n } = e;
    return (0, i.jsx)(l.Z, {
        guild: n,
        onDismissed: () => {
            (0, r.Kw)(r.v6.HUB_STUDY_ROOM_NOTICE);
        },
        onClick: () => {
            (0, r.Kw)(r.v6.HUB_STUDY_ROOM_NOTICE), null != t && null != t.getGuildId() && ((0, s.Cq)(t), (0, a.XU)(t.getGuildId(), t.id));
        },
        title: d.intl.string(d.t['4Y2AS0']),
        message: d.intl.string(d.t.wTsxTU),
        cta: d.intl.string(d.t.wBoE6O),
        image: c,
        type: o.vID.HUB_STUDY_ROOM
    });
};
