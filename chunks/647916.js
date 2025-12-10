n.d(e, { W: () => o });
var i = n(509613),
    l = n(626135),
    s = n(695346),
    u = n(313789),
    r = n(981631),
    a = n(388032);
let o = (0, i.qs)(u.n.CAMERA_PREVIEW_PREFERENCE, {
    useTitle: () => a.intl.string(a.t["3Ppr1h"]),
    useSubtitle: () => a.intl.string(a.t.WNbX4O),
    useValue: s.qF.useSetting,
    setValue: (t) => {
        s.qF.updateSetting(t), l.default.track(r.rMx.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: t });
    },
});
