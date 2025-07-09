n.d(e, { Z: () => r });
var l = n(481060),
    a = n(695346);
function r() {
    switch (a.co.getSetting()) {
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
