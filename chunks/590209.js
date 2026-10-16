n.d(t, { eK: () => o });
var i = n(17928),
    r = n(626584),
    a = n(532294),
    s = n(41984),
    l = n(296027);
function o() {
    let e = n(773371).default,
        t = [l.default, e, a.default];
    return (0, i.yK)(t, () => {
        let t = (function (e) {
            if (__OVERLAY__) return a.default.isInstanceLocked();
            let t = l.default.getOverlayRenderingTrackedGames();
            return 0 !== t.length && t.some((t) => t.overlayMethod !== s.Ue.Disabled && e.isInputLocked(t.pid));
        })(e);
        return [t, t ? e.getFocusedPID() : null];
    });
}
new r.A("OverlayUtils");
