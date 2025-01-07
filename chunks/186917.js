var i = r(493773),
    a = r(580747),
    s = r(607789);
let o = (e, n) => {
    let r = (0, a.Z)('profile_effect_debug_controls'),
        { id: o, preset: l, increment: u, decrement: c } = (0, s.Z)(e);
    return (
        (0, i.Z)(() => {
            if (!r) return;
            let e = (e) => {
                'ArrowUp' === e.key && (u(), e.preventDefault()), 'ArrowDown' === e.key && (c(), e.preventDefault()), 'r' === e.key && (null == n || n(), e.preventDefault());
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
            preset: l
        }
    );
};
n.Z = o;
