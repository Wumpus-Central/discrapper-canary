var r = n(855986),
    i = n(349435);
n.d(
    t,
    {},
    {
        Y: function (e) {
            return (0, r.bG)([i.Ay], () => i.Ay.getChannelSafetyWarnings(e), [e]).filter(
                (e) =>
                    e.type === i._j.INAPPROPRIATE_CONVERSATION_TIER_1 ||
                    e.type === i._j.INAPPROPRIATE_CONVERSATION_TIER_2,
            );
        },
    },
);
