n.d(t, { F: () => d });
var i = n(419954),
    s = n(954571),
    l = n(253932),
    a = n(780964),
    r = n(652215),
    o = n(985018);
let d = (0, i.zD)(a.X.CAMERA_PREVIEW_PREFERENCE, {
    useTitle: () => o.intl.string(o.t["3Ppr1h"]),
    useSubtitle: () => o.intl.string(o.t.WNbX4O),
    useValue: l.bm.useSetting,
    setValue: (e) => {
        l.bm.updateSetting(e), s.default.track(r.HAw.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e });
    },
});
