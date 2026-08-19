"use strict";
n.d(t, { F: () => a });
var i = n(144914),
    r = n(652215);
function a(e, t, n) {
    let a = t.getState(e.id, e.branchId),
        s = n.getQueuePosition(e.id, e.branchId),
        l = n.paused;
    if (null != a) {
        if (null == s || -1 === s)
            switch (a.type) {
                case r.WTw.INSTALLING:
                    return r.Hf6.INSTALL;
                case r.WTw.UPDATING:
                case r.WTw.UPDATE_REQUIRED:
                    return r.Hf6.UPDATE;
            }
        switch (a.type) {
            case r.WTw.INSTALLING:
            case r.WTw.UPDATING:
            case r.WTw.UPDATE_REQUIRED:
            case r.WTw.REPAIRING:
                if (s > 0) return r.Hf6.MOVE_UP;
                if (l) return r.Hf6.RESUME;
                return r.Hf6.PAUSE;
            case r.WTw.UP_TO_DATE:
                return r.Hf6.PLAY;
            case r.WTw.UNINSTALLING:
                return null;
        }
    }
    return null != s && s > 0 ? r.Hf6.MOVE_UP : (0, i.S)() ? r.Hf6.INSTALL : null;
}
