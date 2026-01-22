n.d(t, { A: () => d });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(195043),
    s = n(954571),
    o = n(253932),
    l = n(531525),
    c = n(652215),
    u = n(985018);
function d() {
    let e = o.bm.useSetting();
    return (0, r.jsx)(a.x, {
        setting: l.H.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW,
        children: (0, r.jsx)(i.dOG, {
            label: u.intl.string(u.t["3Ppr1h"]),
            description: u.intl.string(u.t.WNbX4O),
            checked: e,
            onChange: (e) => {
                o.bm.updateSetting(e), s.default.track(c.HAw.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e });
            },
        }),
    });
}
