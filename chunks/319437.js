n.d(t, { A: () => l });
var i = n(64700),
    r = n(228366);
function l(e) {
    let t = (0, i.useRef)(e);
    (0, i.useEffect)(() => {
        t.current = e;
    }, [e]),
        (0, i.useEffect)(() => {
            if (__OVERLAY__) {
                function e(e) {
                    e.locked && t.current();
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
