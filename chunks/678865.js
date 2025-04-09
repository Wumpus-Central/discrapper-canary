n.d(t, { Z: () => i });
var r = n(481060),
    a = n(695346);
function i() {
    switch (a.co.getSetting()) {
        case r.Skl.IDLE:
            return r.Skl.IDLE;
        case r.Skl.DND:
            return r.Skl.DND;
        case r.Skl.INVISIBLE:
            return r.Skl.INVISIBLE;
        default:
            return r.Skl.ONLINE;
    }
}
