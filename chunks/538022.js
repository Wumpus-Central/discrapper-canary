_.d(e, { y: () => n });
var a = _(617726),
    r = _(101284);
function n(t, e, _) {
    let n = [
        { type: "client_report" },
        {
            timestamp: _ || (0, r.yW)(),
            discarded_events: t,
        },
    ];
    return (0, a.Jd)(e ? { dsn: e } : {}, [n]);
}
