var l = t(876230),
    o = t(931853),
    i = t(792996);
t.d(
    e,
    {},
    {
        b: function (n) {
            let { playerState: e, pauseReason: t } = n;
            return e === l.Q6.PAUSED && (t === l.KB.FOCUS || t === l.KB.PICTURE_IN_PICTURE)
                ? i.intl.string(i.t.w6PeBF)
                : (0, o.u)(n);
        },
    },
);
