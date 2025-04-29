n.d(t, { Z: () => u });
var i = n(255367);
n(73800);
var r = n(481060),
    s = n(921801),
    l = n(626135),
    a = n(695346),
    o = n(726985),
    c = n(981631),
    d = n(388032);
function u() {
    let e = a.qF.useSetting();
    return (0, i.jsx)(s.F, {
        setting: o.s6.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW,
        children: (0, i.jsx)(r.j7V, {
            note: d.intl.string(d.t.WNbX4O),
            onChange: (e) => {
                a.qF.updateSetting(e), l.default.track(c.rMx.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e });
            },
            value: e,
            hideBorder: !0,
            children: d.intl.string(d.t['3Ppr1t'])
        })
    });
}
