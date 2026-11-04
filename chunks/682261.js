var i = n(350835);
n.d(
    t,
    {},
    {
        A: function (e) {
            return (
                null != e &&
                e.type !== i.$.CUSTOM_STATUS &&
                (null != e.details ||
                    (null != e.assets && (null != e.assets.large_image || null != e.assets.small_text)) ||
                    null != e.party ||
                    null != e.secrets ||
                    null != e.state)
            );
        },
    },
);
