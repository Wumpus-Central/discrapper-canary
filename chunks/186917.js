n.d(t, { Z: () => a });
var r = n(493773),
    i = n(580747),
    o = n(607789);
let a = (e, t) => {
    let n = (0, i.Z)('profile_effect_debug_controls'),
        { id: a, preset: s, increment: l, decrement: c } = (0, o.Z)(e);
    return (
        (0, r.ZP)(() => {
            if (!n) return;
            let e = (e) => {
                'ArrowUp' === e.key && (l(), e.preventDefault()), 'ArrowDown' === e.key && (c(), e.preventDefault()), 'r' === e.key && (null == t || t(), e.preventDefault());
            };
            return (
                window.addEventListener('keydown', e),
                () => {
                    window.removeEventListener('keydown', e);
                }
            );
        }),
        {
            id: null != a ? a : null,
            preset: s
        }
    );
};
