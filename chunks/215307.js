n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var r = n(311907),
    a = n(713654),
    l = n(289357),
    s = n(607567),
    o = n(985018),
    d = n(158796);
let c = function (e) {
    let { name: t, channel: n } = e,
        c = (0, r.yK)(
            [s.Ay],
            () =>
                s.Ay.getVoiceStatesForChannel(n).map((e) => {
                    let { user: t } = e;
                    return t;
                }),
            [n],
        ),
        u = (0, a.gU)(n);
    return (0, i.jsx)(l.Qv, {
        heading: o.intl.string(o.t["X2K3/4"]),
        topic: t,
        location: o.intl.string(o.t.LZA6Na),
        locationIcon: null != u ? (0, i.jsx)(u, { size: "xs", color: "currentColor", className: d.K }) : null,
        children: (0, i.jsx)(l.$i, { channel: n, speakers: c, voiceType: l.SY.STUDY_ROOM }),
    });
};
