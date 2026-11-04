r.r(t);
var n = !1;
r.d(
    t,
    {},
    {
        deprecateInterpolate: function () {
            n ||
                ((n = !0),
                console.warn('react-spring: The "interpolate" function is deprecated in v10 (use "to" instead)'));
        },
    },
);
