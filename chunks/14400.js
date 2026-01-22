n.d(t, {
    A: () => s,
}),
    n(896048);
var r = n(64700),
    i = n(253932),
    a = n(824744);

function s() {
    let [e, t] = r.useState(i.HO.getSetting());
    return {
        volume: e,
        onVolumeChange: r.useCallback((e) => {
            let n = (0, a.w)(e);
            t(n), i.HO.updateSetting(n);
        }, []),
    };
}
