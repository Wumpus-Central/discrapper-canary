n.d(
    t,
    {},
    {
        A: function (e) {
            let t = e?.getBoundingClientRect();
            return null == t ? null : { x: t.left, y: t.top };
        },
    },
);
