a.d(e, { y: () => _ });
var r = a(617726),
    n = a(101284);
function _(t, e, a) {
    let _ = [
        { type: 'client_report' },
        {
            timestamp: a || (0, n.yW)(),
            discarded_events: t
        }
    ];
    return (0, r.Jd)(e ? { dsn: e } : {}, [_]);
}
