var o = t(876230),
    i = t(931853),
    l = t(792996);
t.d(
    e,
    {},
    {
        b: function (n) {
            let { playerState: e, pauseReason: t } = n;
            return e === o.Q6.PAUSED && (t === o.KB.FOCUS || t === o.KB.PICTURE_IN_PICTURE)
                ? l.intl.string(l.t.w6PeBF)
                : (0, i.u)(n);
        },
    },
);
