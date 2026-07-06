l.d(t, { A: () => a });
var n = l(652215);
function a(e) {
    return (
        (e.type === n.$pd.LISTENING || e.type === n.$pd.WATCHING) &&
        e.timestamps?.start != null &&
        null != e.timestamps.end
    );
}
