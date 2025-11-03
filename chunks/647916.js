n.d(e, { Z: () => o });
var i = n(509613),
    l = n(626135),
    r = n(695346),
    u = n(313789),
    s = n(981631),
    a = n(388032);
let o = (0, i.qs)(u.n.CAMERA_PREVIEW_PREFERENCE, {
    useTitle: () => a.intl.string(a.t["3Ppr1h"]),
    useSubtitle: () => a.intl.string(a.t.WNbX4O),
    useValue: r.qF.useSetting,
    setValue: (t) => {
        r.qF.updateSetting(t), l.default.track(s.rMx.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: t });
    },
});
