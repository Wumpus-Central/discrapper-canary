e.d(t, { Z: () => a }), e(47120);
var i = e(192379),
    l = e(974180),
    r = e(557177);
function a() {
    let [n, t] = i.useState(),
        e = i.useRef(-1);
    return {
        playSound: i.useCallback((n) => {
            t(n),
                r.GN(
                    l.Ay,
                    l.yk,
                    () => {
                        clearTimeout(e.current),
                            (e.current = setTimeout(() => {
                                t(void 0);
                            }, 500));
                    },
                    n
                );
        }, []),
        isPlaying: null != n,
        soundpackPlaying: n
    };
}
