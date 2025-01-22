r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(192379),
    a = r(399606),
    o = r(745510),
    s = r(351780);
let l = 7;
function u() {
    let { createMultipleConfettiAt: e } = i.useContext(o.h),
        n = (0, a.e7)([s.Z], () => s.Z.getState()),
        r = i.useCallback(
            (e) => ({
                size: {
                    type: 'static-random',
                    minValue: e.confettiSize - l,
                    maxValue: e.confettiSize + l
                }
            }),
            []
        );
    return i.useMemo(
        () => ({
            fire: (i, a, o) => {
                var s, l;
                let u =
                    (null == o ? void 0 : o.settings) != null
                        ? {
                              ...n,
                              ...o.settings
                          }
                        : n;
                e(i, a, r(u), (null !== (s = null == o ? void 0 : o.count) && void 0 !== s ? s : u.confettiCount) * (null !== (l = null == o ? void 0 : o.countMultiplier) && void 0 !== l ? l : 1), { sprite: null == o ? void 0 : o.sprite });
            }
        }),
        [e, r, n]
    );
}
