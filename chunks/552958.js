n.d(t, { Z: () => a }), n(388685);
var r = n(192379),
    i = n(460181),
    l = n(974180);
function a() {
    let [e, t] = r.useState(),
        n = r.useRef(-1);
    return {
        playSound: r.useCallback((e) => {
            t(e),
                i.GN(
                    l.Ay,
                    l.yk,
                    () => {
                        clearTimeout(n.current),
                            (n.current = setTimeout(() => {
                                t(void 0);
                            }, 500));
                    },
                    e
                );
        }, []),
        isPlaying: null != e,
        soundpackPlaying: e
    };
}
