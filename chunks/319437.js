n.d(t, { A: () => a });
var l = n(64700),
    i = n(73153);
function a(e) {
    let t = (0, l.useRef)(e);
    (0, l.useEffect)(() => {
        t.current = e;
    }, [e]),
        (0, l.useEffect)(() => {
            if (__OVERLAY__) {
                function e(e) {
                    e.locked && t.current();
                }
                return (
                    i.h.subscribe("OVERLAY_SET_INPUT_LOCKED", e),
                    () => {
                        i.h.unsubscribe("OVERLAY_SET_INPUT_LOCKED", e);
                    }
                );
            }
        }, []);
}
