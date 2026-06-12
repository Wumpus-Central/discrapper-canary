"use strict";
n.d(t, { F: () => s });
var i = n(144914),
    r = n(652215);
function s(e, t, n) {
    let s = t.getState(e.id, e.branchId),
        a = n.getQueuePosition(e.id, e.branchId),
        o = n.paused;
    if (null != s) {
        if (null == a || -1 === a)
            switch (s.type) {
                case r.WTw.INSTALLING:
                    return r.Hf6.INSTALL;
                case r.WTw.UPDATING:
                case r.WTw.UPDATE_REQUIRED:
                    return r.Hf6.UPDATE;
            }
        switch (s.type) {
            case r.WTw.INSTALLING:
            case r.WTw.UPDATING:
            case r.WTw.UPDATE_REQUIRED:
            case r.WTw.REPAIRING:
                if (a > 0) return r.Hf6.MOVE_UP;
                if (o) return r.Hf6.RESUME;
                return r.Hf6.PAUSE;
            case r.WTw.UP_TO_DATE:
                return r.Hf6.PLAY;
            case r.WTw.UNINSTALLING:
                return null;
        }
    }
    return null != a && a > 0 ? r.Hf6.MOVE_UP : (0, i.S)() ? r.Hf6.INSTALL : null;
}
