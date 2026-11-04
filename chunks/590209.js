var i = n(855986),
    r = n(626584),
    a = n(373954),
    s = n(41984),
    l = n(861862);
(new r.A("OverlayUtils"),
    n.d(
        t,
        {},
        {
            eK: function () {
                let e = n(228342).default,
                    t = [l.default, e, a.default];
                return (0, i.yK)(t, () => {
                    let t = (function (e) {
                        if (__OVERLAY__) return a.default.isInstanceLocked();
                        let t = l.default.getOverlayRenderingTrackedGames();
                        return (
                            0 !== t.length && t.some((t) => t.overlayMethod !== s.Ue.Disabled && e.isInputLocked(t.pid))
                        );
                    })(e);
                    return [t, t ? e.getFocusedPID() : null];
                });
            },
        },
    ));
