a.d(e, { y: () => n });
var r = a(617726),
    _ = a(101284);
function n(t, e, a) {
    let n = [
        { type: 'client_report' },
        {
            timestamp: a || (0, _.yW)(),
            discarded_events: t
        }
    ];
    return (0, r.Jd)(e ? { dsn: e } : {}, [n]);
}
