var i = t(876230),
    l = t(931853),
    a = t(792996);
t.d(
    n,
    {},
    {
        b: function (e) {
            let { playerState: n, pauseReason: t } = e;
            return n === i.Q6.PAUSED && (t === i.KB.FOCUS || t === i.KB.PICTURE_IN_PICTURE)
                ? a.intl.string(a.t.w6PeBF)
                : (0, l.u)(e);
        },
    },
);
