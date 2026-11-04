var i = n(991690);
n.d(
    t,
    {},
    {
        A: function (e) {
            if (null != e)
                switch (e.type) {
                    case i.U.MAIN:
                    case i.U.APP_CHANNEL:
                    case i.U.VOICE_CHANNEL:
                    case i.U.INTERACTION_MODAL:
                        return e.channelId;
                    case i.U.OVERLAY:
                    default:
                        return;
                }
        },
    },
);
