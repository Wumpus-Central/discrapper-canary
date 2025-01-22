var i = r(47120);
var a = r(570140),
    o = r(147913),
    s = r(70956),
    l = r(2818),
    u = r(768943);
function c(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let d = null;
function f(e) {
    let { enabled: n } = l.Z.getCurrentConfig({ location: 'MessageRemindersNotificationManager' }, { autoTrackExposure: !1 });
    if (!!n)
        a.Z.dispatch({
            type: 'MESSAGE_REMINDER_DUE',
            savedMessage: e
        }),
            p();
}
function p() {
    var e;
    let { enabled: n } = l.Z.getCurrentConfig({ location: 'MessageRemindersNotificationManager' }, { autoTrackExposure: !1 });
    if (!n) return;
    null != d && clearTimeout(d);
    let r = u.Z.getMessageReminders().find((e) => null != e.saveData.dueAt && e.saveData.dueAt > new Date());
    if ((null == r ? void 0 : null === (e = r.saveData) || void 0 === e ? void 0 : e.dueAt) == null) {
        d = null;
        return;
    }
    let i = Date.now() + s.Z.Millis.WEEK;
    if (!(r.saveData.dueAt.getTime() > i)) d = setTimeout(() => f(r), r.saveData.dueAt.getTime() - Date.now());
}
class h extends o.Z {
    constructor(...e) {
        super(...e),
            c(this, 'actions', {
                SAVED_MESSAGES_UPDATE: () => this.handleUpdates(),
                SAVED_MESSAGE_CREATE: () => this.handleUpdates(),
                SAVED_MESSAGE_DELETE: () => this.handleUpdates()
            }),
            c(this, 'handleUpdates', () => {
                p();
            });
    }
}
n.Z = new h();
