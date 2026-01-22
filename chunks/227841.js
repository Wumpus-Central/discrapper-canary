n.d(t, {
    F: () => a,
});
var r = n(144914),
    i = n(652215);

function a(e, t, n) {
    let a = t.getState(e.id, e.branchId),
        s = n.getQueuePosition(e.id, e.branchId),
        o = n.paused;
    if (null != a) {
        if (null == s || -1 === s)
            switch (a.type) {
                case i.WTw.INSTALLING:
                    return i.Hf6.INSTALL;
                case i.WTw.UPDATING:
                case i.WTw.UPDATE_REQUIRED:
                    return i.Hf6.UPDATE;
            }
        switch (a.type) {
            case i.WTw.INSTALLING:
            case i.WTw.UPDATING:
            case i.WTw.UPDATE_REQUIRED:
            case i.WTw.REPAIRING:
                if (s > 0) return i.Hf6.MOVE_UP;
                if (o) return i.Hf6.RESUME;
                return i.Hf6.PAUSE;
            case i.WTw.UP_TO_DATE:
                return i.Hf6.PLAY;
            case i.WTw.UNINSTALLING:
                return null;
        }
    }
    return null != s && s > 0 ? i.Hf6.MOVE_UP : (0, r.S)() ? i.Hf6.INSTALL : null;
}
