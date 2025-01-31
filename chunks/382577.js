n.d(t, { Z: () => a });
var i = n(192379),
    r = n(570140);
function a(e) {
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
                    r.Z.subscribe('OVERLAY_SET_INPUT_LOCKED', e),
                    () => {
                        r.Z.unsubscribe('OVERLAY_SET_INPUT_LOCKED', e);
                    }
                );
            }
        }, []);
}
