var l = n(164636),
    i = n(287809);
n.d(
    t,
    {},
    {
        A: function (e) {
            return (0, l.bG)(
                [i.default],
                () =>
                    null != e &&
                    e.isDM() &&
                    1 === e.recipients.length &&
                    i.default.getUser(e.recipients[0])?.bot === !0,
            );
        },
    },
);
