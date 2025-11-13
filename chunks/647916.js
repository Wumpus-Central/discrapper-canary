n.d(e, { Z: () => o });
var i = n(509613),
    l = n(626135),
    u = n(695346),
    r = n(313789),
    s = n(981631),
    a = n(388032);
let o = (0, i.qs)(r.n.CAMERA_PREVIEW_PREFERENCE, {
    useTitle: () => a.intl.string(a.t["3Ppr1h"]),
    useSubtitle: () => a.intl.string(a.t.WNbX4O),
    useValue: u.qF.useSetting,
    setValue: (t) => {
        u.qF.updateSetting(t), l.default.track(s.rMx.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: t });
    },
});
