c.d(u, { A: () => t });
var s = c(64700),
    r = c(228366);
function t(e) {
    let u = (0, s.useRef)(e);
    (0, s.useEffect)(() => {
        u.current = e;
    }, [e]),
        (0, s.useEffect)(() => {
            if (__OVERLAY__) {
                function e(e) {
                    e.locked && u.current();
                }
                return (
                    r.h.subscribe("OVERLAY_SET_INPUT_LOCKED", e),
                    () => {
                        r.h.unsubscribe("OVERLAY_SET_INPUT_LOCKED", e);
                    }
                );
            }
        }, []);
}
