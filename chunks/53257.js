e.d(n, { A: () => r });
var l = e(652215);
function r(t) {
    return (
        (t.type === l.$pd.LISTENING || t.type === l.$pd.WATCHING) &&
        t.timestamps?.start != null &&
        null != t.timestamps.end
    );
}
