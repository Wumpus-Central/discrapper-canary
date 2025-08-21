t.d(n, { Z: () => _ }), t(388685);
var i = t(647438),
    o = t(460181),
    a = t(974180);
function _() {
    let [e, n] = i.useState(),
        t = i.useRef(-1);
    return {
        playSound: i.useCallback((e) => {
            n(e),
                o.GN(
                    a.Ay,
                    a.yk,
                    () => {
                        clearTimeout(t.current),
                            (t.current = setTimeout(() => {
                                n(void 0);
                            }, 500));
                    },
                    e,
                );
        }, []),
        isPlaying: null != e,
        soundpackPlaying: e,
    };
}
