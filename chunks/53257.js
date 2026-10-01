e.d(n, { A: () => i });
var l = e(652215);
function i(t) {
    return (
        (t.type === l.$pd.LISTENING || t.type === l.$pd.WATCHING) &&
        t.timestamps?.start != null &&
        null != t.timestamps.end
    );
}
