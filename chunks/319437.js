"use strict";
n.d(t, { A: () => s });
var r = n(64700),
    i = n(73153);
function s(e) {
    let t = (0, r.useRef)(e);
    (0, r.useEffect)(() => {
        t.current = e;
    }, [e]),
        (0, r.useEffect)(() => {
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
