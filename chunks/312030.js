n.d(t, { h: () => l }), n(388685);
var r = n(473749);
let l = (e) => {
    let [t, n] = r.useState(1);
    return {
        currentPage: t,
        handlePageChange: r.useCallback(
            (t) => {
                var r;
                n(t), null == (r = e.current) || r.scrollTo({ to: 0 });
            },
            [e, n],
        ),
    };
};
