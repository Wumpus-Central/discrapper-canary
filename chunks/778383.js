var i = n(350835),
    r = n(765379),
    a = n(487887);
n.d(
    t,
    {},
    {
        A: function (e) {
            return (
                null != e &&
                null != e.application_id &&
                e.type === i.$.PLAYING &&
                !(0, r.A)(e) &&
                e.application_id !== a.$W
            );
        },
    },
);
