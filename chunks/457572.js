n.d(t, { Z: () => _ }), n(47120);
var i = n(570140),
    r = n(147913),
    a = n(70956),
    s = n(2818),
    o = n(768943);
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
let u = null;
function c(e) {
    let { enabled: t } = s.Z.getCurrentConfig({ location: 'MessageRemindersNotificationManager' }, { autoTrackExposure: !1 });
    t &&
        (i.Z.dispatch({
            type: 'MESSAGE_REMINDER_DUE',
            savedMessage: e
        }),
        d());
}
function d() {
    var e;
    let { enabled: t } = s.Z.getCurrentConfig({ location: 'MessageRemindersNotificationManager' }, { autoTrackExposure: !1 });
    if (!t) return;
    null != u && clearTimeout(u);
    let n = o.Z.getMessageReminders().find((e) => null != e.saveData.dueAt && e.saveData.dueAt > new Date());
    if ((null == n ? void 0 : null === (e = n.saveData) || void 0 === e ? void 0 : e.dueAt) == null) {
        u = null;
        return;
    }
    let i = Date.now() + a.Z.Millis.WEEK;
    !(n.saveData.dueAt.getTime() > i) && (u = setTimeout(() => c(n), n.saveData.dueAt.getTime() - Date.now()));
}
class f extends r.Z {
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
