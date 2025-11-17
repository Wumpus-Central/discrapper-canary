n.d(t, { Z: () => d });
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(921801),
    o = n(626135),
    s = n(695346),
    l = n(726985),
    c = n(981631),
    u = n(388032);
function d() {
    let e = s.qF.useSetting();
    return (0, r.jsx)(a.F, {
        setting: l.s6.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW,
        children: (0, r.jsx)(i.rsf, {
            label: u.intl.string(u.t["3Ppr1h"]),
            description: u.intl.string(u.t.WNbX4O),
            checked: e,
            onChange: (e) => {
                s.qF.updateSetting(e), o.default.track(c.rMx.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e });
            },
        }),
    });
}
