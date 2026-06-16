e.d(l, { A: () => r });
var n = e(652215);
function r(t) {
    return (
        (t.type === n.$pd.LISTENING || t.type === n.$pd.WATCHING) &&
        t.timestamps?.start != null &&
        null != t.timestamps.end
    );
}
