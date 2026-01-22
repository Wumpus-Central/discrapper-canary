n.d(t, {
    A: () => u,
});
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(713654),
    a = n(289357),
    s = n(607567),
    o = n(985018),
    c = n(158796);
let u = function (e) {
    let { name: t, channel: n } = e,
        u = (0, i.yK)(
            [s.Ay],
            () =>
                s.Ay.getVoiceStatesForChannel(n).map((e) => {
                    let { user: t } = e;
                    return t;
                }),
            [n],
        ),
        d = (0, l.gU)(n);
    return (0, r.jsx)(a.Qv, {
        heading: o.intl.string(o.t["X2K3/4"]),
        topic: t,
        location: o.intl.string(o.t.LZA6Na),
        locationIcon:
            null != d
                ? (0, r.jsx)(d, {
                      size: "xs",
                      color: "currentColor",
                      className: c.K,
                  })
                : null,
        children: (0, r.jsx)(a.$i, {
            channel: n,
            speakers: u,
            voiceType: a.SY.STUDY_ROOM,
        }),
    });
};
