e.d(t, { Z: () => a }), e(47120);
var i = e(192379),
    l = e(460181),
    r = e(974180);
function a() {
    let [n, t] = i.useState(),
        e = i.useRef(-1);
    return {
        playSound: i.useCallback((n) => {
            t(n),
                l.GN(
                    r.Ay,
                    r.yk,
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
