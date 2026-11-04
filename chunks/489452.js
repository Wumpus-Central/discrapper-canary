n.d(
    t,
    {},
    {
        A: function (e) {
            let t = e.status;
            return null != t && (429 === t || (t >= 500 && 503 !== t));
        },
    },
);
