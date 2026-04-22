l.d(e, { A: () => a });
var n = l(652215);
function a(t) {
    return (
        (t.type === n.$pd.LISTENING || t.type === n.$pd.WATCHING) &&
        t.timestamps?.start != null &&
        null != t.timestamps.end
    );
}
