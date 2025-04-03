n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(481060),
    s = n(921801),
    a = n(626135),
    l = n(695346),
    o = n(726985),
    c = n(981631),
    d = n(388032);
function u() {
    let e = l.qF.useSetting();
    return (0, r.jsx)(s.F, {
        setting: o.s6.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW,
        children: (0, r.jsx)(i.j7V, {
            note: d.NW.string(d.t.WNbX4O),
            onChange: (e) => {
                l.qF.updateSetting(e), a.default.track(c.rMx.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e });
            },
            value: e,
            hideBorder: !0,
            children: d.NW.string(d.t['3Ppr1t'])
        })
    });
}
