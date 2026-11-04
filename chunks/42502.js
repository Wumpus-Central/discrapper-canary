n.d(
    t,
    {},
    {
        A: function (e) {
            if (null != e.duration_secs && null != e.clip_sync_timestamp)
                return { duration: e.duration_secs, syncTimestamp: Date.parse(e.clip_sync_timestamp) };
        },
    },
);
