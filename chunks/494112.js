r.d(t, { l: () => l });
var n = r(862615),
    i = r(518206),
    o = r(478793),
    a = r(809297),
    s = r(928292);
function l(e) {
    if (!e.isConnected) return;
    let t = (0, a.TW)(e);
    if ("virtual" === (0, o.ME)()) {
        let r = (0, i.bq)(t);
        (0, s.v)(() => {
            let o = (0, i.bq)(t);
            (o === r || o === t.body) && e.isConnected && (0, n.e)(e);
        });
    } else (0, n.e)(e);
}
