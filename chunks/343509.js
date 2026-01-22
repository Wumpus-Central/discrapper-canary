n.d(t, {
    A: () => p,
}),
    n(896048);
var r = n(73153),
    i = n(439372),
    a = n(927813),
    s = n(966597),
    o = n(85109);

function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let c = null;

function u(e) {
    let { enabled: t } = s.A.getCurrentConfig(
        {
            location: "MessageRemindersNotificationManager",
        },
        {
            autoTrackExposure: !1,
        },
    );
    t &&
        (r.h.dispatch({
            type: "MESSAGE_REMINDER_DUE",
            savedMessage: e,
        }),
        d());
}

function d() {
    var e;
    let { enabled: t } = s.A.getCurrentConfig(
        {
            location: "MessageRemindersNotificationManager",
        },
        {
            autoTrackExposure: !1,
        },
    );
    if (!t) return;
    null != c && clearTimeout(c);
    let n = o.A.getMessageReminders().find((e) => null != e.saveData.dueAt && e.saveData.dueAt > new Date());
    if ((null == n || null == (e = n.saveData) ? void 0 : e.dueAt) == null) {
        c = null;
        return;
    }
    let r = Date.now() + a.A.Millis.WEEK;
    n.saveData.dueAt.getTime() > r || (c = setTimeout(() => u(n), n.saveData.dueAt.getTime() - Date.now()));
}
class f extends i.A {
    constructor(...e) {
        super(...e),
            l(this, "actions", {
                SAVED_MESSAGES_UPDATE: () => this.handleUpdates(),
                SAVED_MESSAGE_CREATE: () => this.handleUpdates(),
                SAVED_MESSAGE_DELETE: () => this.handleUpdates(),
            }),
            l(this, "handleUpdates", () => {
                d();
            });
    }
}
let p = new f();
