"use strict";
n.d(t, { A: () => a });
var r = n(64700),
    i = n(253932),
    s = n(824744);
function a() {
    let [e, t] = r.useState(i.HO.getSetting());
    return {
        volume: e,
        onVolumeChange: r.useCallback((e) => {
            let n = (0, s.w)(e);
            t(n), i.HO.updateSetting(n);
        }, []),
    };
}
