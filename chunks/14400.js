n.d(t, { A: () => l });
var r = n(64700),
    u = n(253932),
    a = n(824744);
function l() {
    let [e, t] = r.useState(u.HO.getSetting());
    return {
        volume: e,
        onVolumeChange: r.useCallback((e) => {
            let n = (0, a.w)(e);
            t(n), u.HO.updateSetting(n);
        }, []),
    };
}
