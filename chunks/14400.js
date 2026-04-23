n.d(t, { A: () => l });
var i = n(64700),
    r = n(253932),
    a = n(824744);
function l() {
    let [e, t] = i.useState(r.HO.getSetting());
    return {
        volume: e,
        onVolumeChange: i.useCallback((e) => {
            let n = (0, a.w)(e);
            t(n), r.HO.updateSetting(n);
        }, []),
    };
}
