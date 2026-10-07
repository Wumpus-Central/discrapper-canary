n.d(t, { A: () => d });
var i = n(73153),
    r = n(439372),
    a = n(927813),
    s = n(85109);
let l = null;
class o extends r.A {
    actions = {
        SAVED_MESSAGES_UPDATE: () => this.handleUpdates(),
        SAVED_MESSAGE_CREATE: () => this.handleUpdates(),
        SAVED_MESSAGE_DELETE: () => this.handleUpdates(),
    };
    handleUpdates = () => {
        !(function e() {
            null != l && clearTimeout(l);
            let t = s.A.getMessageReminders().find((e) => null != e.saveData.dueAt && e.saveData.dueAt > new Date());
            if (t?.saveData?.dueAt == null) {
                l = null;
                return;
            }
            let n = Date.now() + a.A.Millis.WEEK;
            t.saveData.dueAt.getTime() > n ||
                (l = setTimeout(() => {
                    (i.h.dispatch({ type: "MESSAGE_REMINDER_DUE", savedMessage: t }), e());
                }, t.saveData.dueAt.getTime() - Date.now()));
        })();
    };
}
let d = new o();
