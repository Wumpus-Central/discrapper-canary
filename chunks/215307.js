n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var r = n(311907),
    a = n(713654),
    l = n(289357),
    s = n(607567),
    o = n(985018),
    d = n(994190);
let u = function (e) {
    let { name: t, channel: n } = e,
        u = (0, r.yK)(
            [s.Ay],
            () =>
                s.Ay.getVoiceStatesForChannel(n).map((e) => {
                    let { user: t } = e;
                    return t;
                }),
            [n],
        ),
        c = (0, a.gU)(n);
    return (0, i.jsx)(l.Qv, {
        heading: o.intl.string(o.t["X2K3/4"]),
        topic: t,
        location: o.intl.string(o.t.LZA6Na),
        locationIcon: null != c ? (0, i.jsx)(c, { size: "xs", color: "currentColor", className: d.K }) : null,
        children: (0, i.jsx)(l.$i, { channel: n, speakers: u, voiceType: l.SY.STUDY_ROOM }),
    });
};
