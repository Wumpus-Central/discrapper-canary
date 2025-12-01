r.d(t, { y: () => i });
var n = r(617726),
    a = r(101284);
function i(e, t, r) {
    let i = [
        { type: "client_report" },
        {
            timestamp: r || (0, a.yW)(),
            discarded_events: e,
        },
    ];
    return (0, n.Jd)(t ? { dsn: t } : {}, [i]);
}
