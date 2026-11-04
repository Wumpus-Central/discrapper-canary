var i = n(127258),
    s = n(155718);
n.d(
    t,
    {},
    {
        V: function (e) {
            return (
                e.interactionMetadata?.type === i.G.APPLICATION_COMMAND &&
                e.interactionMetadata?.command_type === s.kc.PRIMARY_ENTRY_POINT
            );
        },
        _: function (e) {
            return null != e.interactionMetadata;
        },
    },
);
