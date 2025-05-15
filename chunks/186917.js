n.d(t, { Z: () => o });
var r = n(493773),
    i = n(580747),
    a = n(607789);
let o = (e, t) => {
    let n = (0, i.Z)('profile_effect_debug_controls'),
        { id: o, preset: s, increment: l, decrement: c } = (0, a.Z)(e);
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
            id: null != o ? o : null,
            preset: s
        }
    );
};
