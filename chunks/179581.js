var i = e(309010),
    l = e(746080);
e.d(
    n,
    {},
    {
        N: function () {
            let t = i.Ay.getCurrentlySelectedChannelId() ?? void 0;
            return null != t && (0, l.jq)(t) ? { channel_static_route: t } : { channel_id: t };
        },
    },
);
