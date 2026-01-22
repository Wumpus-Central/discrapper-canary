n.d(t, { e: () => a });
var r = n(661191);
let i = 86400000,
    a = (e) => Math.abs(r.default.extractTimestamp(e.id) - new Date().getTime()) < i;
