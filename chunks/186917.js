n.d(t, { Z: () => s });
var i = n(493773),
    r = n(580747),
    a = n(607789);
let s = (e, t) => {
    let n = (0, r.Z)('profile_effect_debug_controls'),
        { id: s, preset: o, increment: l, decrement: u } = (0, a.Z)(e);
    return (
        (0, i.ZP)(() => {
            if (!n) return;
            let e = (e) => {
                'ArrowUp' === e.key && (l(), e.preventDefault()), 'ArrowDown' === e.key && (u(), e.preventDefault()), 'r' === e.key && (null == t || t(), e.preventDefault());
            };
            return (
                window.addEventListener('keydown', e),
                () => {
                    window.removeEventListener('keydown', e);
                }
            );
        }),
        {
            id: null != s ? s : null,
            preset: o
        }
    );
};
