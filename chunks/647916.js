n.d(e, { Z: () => o });
var i = n(509613),
    r = n(626135),
    l = n(695346),
    s = n(313789),
    u = n(981631),
    a = n(388032);
let o = (0, i.qs)(s.n.CAMERA_PREVIEW_PREFERENCE, {
    useTitle: () => a.intl.string(a.t["3Ppr1h"]),
    useSubtitle: () => a.intl.string(a.t.WNbX4O),
    useValue: l.qF.useSetting,
    setValue: (t) => {
        l.qF.updateSetting(t), r.default.track(u.rMx.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: t });
    },
});
