var i = S(665260),
    r = S(355097);
function t(n) {
    return i.iE(n, r.vv.UNREADS_ALL_MESSAGES, r.vv.UNREADS_ONLY_MENTIONS);
}
S.d(
    E,
    {},
    {
        PW: t,
        mD: function (n, E) {
            return i.UI(t(n), E);
        },
        md: function (n, E) {
            return i.UI(i.iE(n, r.n3.UNREADS_ALL_MESSAGES, r.n3.UNREADS_ONLY_MENTIONS), E);
        },
    },
);
