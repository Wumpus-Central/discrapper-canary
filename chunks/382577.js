r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(192379),
    a = r(570140);
function o(e) {
    let n = (0, i.useRef)(e);
    (0, i.useEffect)(() => {
        n.current = e;
    }, [e]),
        (0, i.useEffect)(() => {
            if (__OVERLAY__) {
                function e(e) {
                    e.locked && n.current();
                }
                return (
                    a.Z.subscribe('OVERLAY_SET_INPUT_LOCKED', e),
                    () => {
                        a.Z.unsubscribe('OVERLAY_SET_INPUT_LOCKED', e);
                    }
                );
            }
        }, []);
}
