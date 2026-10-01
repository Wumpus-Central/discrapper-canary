n.d(e, { A: () => i });
var l = n(652215);
function i(t) {
    return (
        (t.type === l.$pd.LISTENING || t.type === l.$pd.WATCHING) &&
        t.timestamps?.start != null &&
        null != t.timestamps.end
    );
}
