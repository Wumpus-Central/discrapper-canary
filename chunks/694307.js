i.d(e, { F: () => o });
var n = i(419954),
    l = i(954571),
    s = i(253932),
    r = i(780964),
    u = i(652215),
    a = i(985018);
let o = (0, n.zD)(r.X.CAMERA_PREVIEW_PREFERENCE, {
    useTitle: () => a.intl.string(a.t["3Ppr1h"]),
    useSubtitle: () => a.intl.string(a.t.WNbX4O),
    useValue: s.bm.useSetting,
    setValue: (t) => {
        s.bm.updateSetting(t), l.default.track(u.HAw.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: t });
    },
});
