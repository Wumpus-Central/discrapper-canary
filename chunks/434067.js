n.d(t, { w: () => i });
var r = n(3388);
function i(e, t) {
    (0, r.N)(() => {
        if (e && e.ref && t)
            return (
                (e.ref.current = t.current),
                () => {
                    e.ref && (e.ref.current = null);
                }
            );
    });
}
