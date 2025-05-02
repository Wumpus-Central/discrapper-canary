n.d(e, { Z: () => a });
var l = n(481060),
    r = n(695346);
function a() {
    switch (r.co.getSetting()) {
        case l.Skl.IDLE:
            return l.Skl.IDLE;
        case l.Skl.DND:
            return l.Skl.DND;
        case l.Skl.INVISIBLE:
            return l.Skl.INVISIBLE;
        default:
            return l.Skl.ONLINE;
    }
}
