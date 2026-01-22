n.d(t, { A: () => i });
var r = n(652215);
function i(e) {
    var t;
    return (
        (e.type === r.$pd.LISTENING || e.type === r.$pd.WATCHING) &&
        (null == (t = e.timestamps) ? void 0 : t.start) != null &&
        null != e.timestamps.end
    );
}
