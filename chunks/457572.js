n.d(t, { Z: () => _ }), n(388685);
var r = n(570140),
    i = n(147913),
    o = n(70956),
    a = n(2818),
    s = n(768943);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let c = null;
function u(e) {
    let { enabled: t } = a.Z.getCurrentConfig({ location: 'MessageRemindersNotificationManager' }, { autoTrackExposure: !1 });
    t &&
        (r.Z.dispatch({
            type: 'MESSAGE_REMINDER_DUE',
            savedMessage: e
        }),
        d());
}
function d() {
    var e;
    let { enabled: t } = a.Z.getCurrentConfig({ location: 'MessageRemindersNotificationManager' }, { autoTrackExposure: !1 });
    if (!t) return;
    null != c && clearTimeout(c);
    let n = s.Z.getMessageReminders().find((e) => null != e.saveData.dueAt && e.saveData.dueAt > new Date());
    if ((null == n || null == (e = n.saveData) ? void 0 : e.dueAt) == null) {
        c = null;
        return;
    }
    let r = Date.now() + o.Z.Millis.WEEK;
    n.saveData.dueAt.getTime() > r || (c = setTimeout(() => u(n), n.saveData.dueAt.getTime() - Date.now()));
}
class f extends i.Z {
    constructor(...e) {
        super(...e),
            l(this, 'actions', {
                SAVED_MESSAGES_UPDATE: () => this.handleUpdates(),
                SAVED_MESSAGE_CREATE: () => this.handleUpdates(),
                SAVED_MESSAGE_DELETE: () => this.handleUpdates()
            }),
            l(this, 'handleUpdates', () => {
                d();
            });
    }
}
let _ = new f();
