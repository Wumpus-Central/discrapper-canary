var n = t(582128);
t.d(
    e,
    {},
    {
        A: function (r) {
            let e = n.useRef(r);
            return (
                n.useInsertionEffect(() => {
                    e.current = r;
                }),
                n.useCallback(function () {
                    for (var r = arguments.length, t = Array(r), n = 0; n < r; n++) t[n] = arguments[n];
                    return e.current(...t);
                }, [])
            );
        },
    },
);
