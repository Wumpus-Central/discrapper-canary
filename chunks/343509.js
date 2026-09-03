n.d(t, { A: () => c });
var i = n(228366),
    r = n(439372),
    a = n(927813),
    s = n(269073),
    l = n(85109);
let o = null;
class d extends r.A {
    actions = {
        SAVED_MESSAGES_UPDATE: () => this.handleUpdates(),
        SAVED_MESSAGE_CREATE: () => this.handleUpdates(),
        SAVED_MESSAGE_DELETE: () => this.handleUpdates(),
    };
    handleUpdates = () => {
        !(function e() {
            if (!(0, s.A9)("MessageRemindersNotificationManager")) return;
            null != o && clearTimeout(o);
            let t = l.A.getMessageReminders().find((e) => null != e.saveData.dueAt && e.saveData.dueAt > new Date());
            if (t?.saveData?.dueAt == null) {
                o = null;
                return;
            }
            let n = Date.now() + a.A.Millis.WEEK;
            t.saveData.dueAt.getTime() > n ||
                (o = setTimeout(() => {
                    (0, s.A9)("MessageRemindersNotificationManager") &&
                        (i.h.dispatch({ type: "MESSAGE_REMINDER_DUE", savedMessage: t }), e());
                }, t.saveData.dueAt.getTime() - Date.now()));
        })();
    };
}
let c = new d();
