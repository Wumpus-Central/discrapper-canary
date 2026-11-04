n.d(
    t,
    {},
    {
        A: function () {
            if (null == Intl.DateTimeFormat) return null;
            let e = Intl.DateTimeFormat();
            return null == e.resolvedOptions ? null : e.resolvedOptions().timeZone;
        },
    },
);
