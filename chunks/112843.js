n.d(t, { Z: () => l });
var i = n(192379),
    r = n(399606),
    a = n(745510),
    s = n(351780);
let o = 7;
function l() {
    let { createMultipleConfettiAt: e } = i.useContext(a.h),
        t = (0, r.e7)([s.Z], () => s.Z.getState()),
        n = i.useCallback(
            (e) => ({
                size: {
                    type: 'static-random',
                    minValue: e.confettiSize - o,
                    maxValue: e.confettiSize + o
                }
            }),
            []
        );
    return i.useMemo(
        () => ({
            fire: (i, r, a) => {
                var s, o;
                let l =
                    (null == a ? void 0 : a.settings) != null
                        ? {
                              ...t,
                              ...a.settings
                          }
                        : t;
                e(i, r, n(l), (null !== (s = null == a ? void 0 : a.count) && void 0 !== s ? s : l.confettiCount) * (null !== (o = null == a ? void 0 : a.countMultiplier) && void 0 !== o ? o : 1), { sprite: null == a ? void 0 : a.sprite });
            }
        }),
        [e, n, t]
    );
}
