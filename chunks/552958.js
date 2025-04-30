n.d(t, { Z: () => s }), n(388685);
var i = n(192379),
    r = n(460181),
    l = n(974180);
function s() {
    let [e, t] = i.useState(),
        n = i.useRef(-1);
    return {
        playSound: i.useCallback((e) => {
            t(e),
                r.GN(
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
