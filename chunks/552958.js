t.d(n, { Z: () => c }), t(47120);
var i = t(192379),
    a = t(460181),
    o = t(974180);
function c() {
    let [e, n] = i.useState(),
        t = i.useRef(-1);
    return {
        playSound: i.useCallback((e) => {
            n(e),
                a.GN(
                    o.Ay,
                    o.yk,
                    () => {
                        clearTimeout(t.current),
                            (t.current = setTimeout(() => {
                                n(void 0);
                            }, 500));
                    },
                    e
                );
        }, []),
        isPlaying: null != e,
        soundpackPlaying: e
    };
}
