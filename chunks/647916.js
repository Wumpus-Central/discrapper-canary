n.d(e, { Z: () => o });
var i = n(509613),
    r = n(626135),
    l = n(695346),
    u = n(313789),
    s = n(981631),
    a = n(388032);
let o = (0, i.qs)(u.n.CAMERA_PREVIEW_PREFERENCE, {
    useTitle: () => a.intl.string(a.t["3Ppr1h"]),
    useSubtitle: () => a.intl.string(a.t.WNbX4O),
    useValue: l.qF.useSetting,
    setValue: (t) => {
        l.qF.updateSetting(t), r.default.track(s.rMx.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: t });
    },
});
