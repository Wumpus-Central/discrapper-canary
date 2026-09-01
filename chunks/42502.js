"use strict";
function i(e) {
    if (null != e.duration_secs && null != e.clip_sync_timestamp)
        return { duration: e.duration_secs, syncTimestamp: Date.parse(e.clip_sync_timestamp) };
}
n.d(t, { A: () => i });
