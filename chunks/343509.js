"use strict";
n.d(t, { A: () => c });
var r = n(73153),
    i = n(439372),
    s = n(927813),
    a = n(966597),
    o = n(85109);
let l = null;
class u extends i.A {
    actions = {
        SAVED_MESSAGES_UPDATE: () => this.handleUpdates(),
        SAVED_MESSAGE_CREATE: () => this.handleUpdates(),
        SAVED_MESSAGE_DELETE: () => this.handleUpdates(),
    };
    handleUpdates = () => {
        !(function e() {
            let { enabled: t } = a.A.getConfig({ location: "MessageRemindersNotificationManager" });
            if (!t) return;
            null != l && clearTimeout(l);
            let n = o.A.getMessageReminders().find((e) => null != e.saveData.dueAt && e.saveData.dueAt > new Date());
            if (n?.saveData?.dueAt == null) {
                l = null;
                return;
            }
            let i = Date.now() + s.A.Millis.WEEK;
            n.saveData.dueAt.getTime() > i ||
                (l = setTimeout(
                    () =>
                        (function (t) {
                            let { enabled: n } = a.A.getConfig({ location: "MessageRemindersNotificationManager" });
                            n && (r.h.dispatch({ type: "MESSAGE_REMINDER_DUE", savedMessage: t }), e());
                        })(n),
                    n.saveData.dueAt.getTime() - Date.now(),
                ));
        })();
    };
}
let c = new u();
