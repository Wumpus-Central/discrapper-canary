var n = r(811390);
r.d(
    t,
    {},
    {
        w: function (e, t) {
            (0, n.N)(() => {
                if (e && e.ref && t)
                    return (
                        (e.ref.current = t.current),
                        () => {
                            e.ref && (e.ref.current = null);
                        }
                    );
            });
        },
    },
);
