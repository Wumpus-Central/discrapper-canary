var i = r(493773),
    a = r(580747),
    o = r(607789);
let s = (e, n) => {
    let r = (0, a.Z)('profile_effect_debug_controls'),
        { id: s, preset: l, increment: u, decrement: c } = (0, o.Z)(e);
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
            id: null != s ? s : null,
            preset: l
        }
    );
};
n.Z = s;
