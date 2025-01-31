a.d(e, { y: () => o });
var r = a(617726),
    n = a(101284);
function o(t, e, a) {
    let o = [
        { type: 'client_report' },
        {
            timestamp: a || (0, n.yW)(),
            discarded_events: t
        }
    ];
    return (0, r.Jd)(e ? { dsn: e } : {}, [o]);
}
