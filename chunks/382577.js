n.d(t, { Z: () => o });
var r = n(192379),
    i = n(570140);
function o(e) {
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
                    i.Z.subscribe('OVERLAY_SET_INPUT_LOCKED', e),
                    () => {
                        i.Z.unsubscribe('OVERLAY_SET_INPUT_LOCKED', e);
                    }
                );
            }
        }, []);
}
