"use strict";
n.d(t, { A: () => _ });
var r = n(73153),
    i = n(439372),
    a = n(927813),
    s = n(966597),
    o = n(85109);
let l = null;
function u(e) {
    let { enabled: t } = s.A.getCurrentConfig(
        { location: "MessageRemindersNotificationManager" },
        { autoTrackExposure: !1 },
    );
    t && (r.h.dispatch({ type: "MESSAGE_REMINDER_DUE", savedMessage: e }), c());
}
function c() {
    let { enabled: e } = s.A.getCurrentConfig(
        { location: "MessageRemindersNotificationManager" },
        { autoTrackExposure: !1 },
    );
    if (!e) return;
    null != l && clearTimeout(l);
    let t = o.A.getMessageReminders().find((e) => null != e.saveData.dueAt && e.saveData.dueAt > new Date());
    if (t?.saveData?.dueAt == null) {
        l = null;
        return;
    }
    let n = Date.now() + a.A.Millis.WEEK;
    t.saveData.dueAt.getTime() > n || (l = setTimeout(() => u(t), t.saveData.dueAt.getTime() - Date.now()));
}
class d extends i.A {
    actions = {
        SAVED_MESSAGES_UPDATE: () => this.handleUpdates(),
        SAVED_MESSAGE_CREATE: () => this.handleUpdates(),
        SAVED_MESSAGE_DELETE: () => this.handleUpdates(),
    };
    handleUpdates = () => {
        c();
    };
}
let _ = new d();
