s.d(
    l,
    {},
    {
        A: function (e) {
            let l = e?.getBoundingClientRect();
            return null == l ? null : { x: l.left, y: l.top };
        },
    },
);
