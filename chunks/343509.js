"use strict";
n.d(t, { A: () => _ });
var r = n(73153),
    i = n(439372),
    s = n(927813),
    a = n(966597),
    o = n(85109);
let l = null;
function u(e) {
    let { enabled: t } = a.A.getConfig({ location: "MessageRemindersNotificationManager" });
    t && (r.h.dispatch({ type: "MESSAGE_REMINDER_DUE", savedMessage: e }), c());
}
function c() {
    let { enabled: e } = a.A.getConfig({ location: "MessageRemindersNotificationManager" });
    if (!e) return;
    null != l && clearTimeout(l);
    let t = o.A.getMessageReminders().find((e) => null != e.saveData.dueAt && e.saveData.dueAt > new Date());
    if (t?.saveData?.dueAt == null) {
        l = null;
        return;
    }
    let n = Date.now() + s.A.Millis.WEEK;
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
