n.d(
    t,
    {},
    {
        N: function (e, t) {
            let n = new Image();
            ((n.src = e), (n.onload = () => t?.(e)));
        },
    },
);
