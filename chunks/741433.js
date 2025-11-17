n.d(t, { l: () => i });
var r = n(159447);
function i(e, t) {
    (0, r.b)(() => {
        if (e && e.ref && t)
            return (
                (e.ref.current = t.current),
                () => {
                    e.ref && (e.ref.current = null);
                }
            );
    });
}
