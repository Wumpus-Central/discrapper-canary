"use strict";
var r = n(439372),
    i = n(723702),
    s = n(561844),
    a = n(652215),
    o = n(100544);
let l = null,
    u = null;
class c extends r.A {
    actions = { APP_STATE_UPDATE: (e) => this.handleAppStateUpdate(e) };
    handleAppStateUpdate(e) {
        let { state: t } = e;
        return (
            !(0, i.isAndroid)() &&
            null != l &&
            (t === o.g6.ACTIVE && null != u
                ? ((0, s.eA)(
                      l.quest,
                      l.trackingCtx,
                      l.inlineStoreAppId,
                      a.HAw.QUEST_APP_STORE_OVERLAY_RETURNED,
                      Date.now() - u,
                  ),
                  (u = null))
                : t === o.g6.BACKGROUND &&
                  ((0, s.eA)(l.quest, l.trackingCtx, l.inlineStoreAppId, a.HAw.QUEST_APP_STORE_OVERLAY_BACKGROUNDED),
                  (u = Date.now())),
            !1)
        );
    }
}
new c();
