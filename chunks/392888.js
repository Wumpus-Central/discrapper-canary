n.d(t, {
    R: () => E,
    Z: () => b
}),
    n(47120);
var r = n(200651);
n(192379);
var i = n(544891),
    o = n(433517),
    a = n(481060),
    s = n(147913),
    l = n(480294),
    c = n(9156),
    u = n(312400),
    d = n(115345),
    f = n(981631);
function _(e, t, n) {
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
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class g extends s.Z {
    handlePostConnectionOpen() {
        !o.K.get('turnedOffNewNotifications') && l.Z.hasConsented(f.pjP.PERSONALIZATION) && u.xT.getCurrentConfig({ location: 'NotificationMigrationManager' }, { autoTrackExposure: !1 }).enabled && (c.ZP.useNewNotifications || (0 > Date.now() && this.checkOldUserExperiment(), this.checkNewUserExperiment()));
    }
    async checkOldUserExperiment() {
        let { logExposure: e, autoOpen: t } = u.fs.getCurrentConfig({ location: 'NotificationMigrationManager' }, { autoTrackExposure: !1 });
        if (!e) return;
        let {
                body: { guild_noise: o, usage: s }
            } = await i.tn.get({
                url: '/users/@me/notification-migration-data2',
                rejectWithError: !1
            }),
            l = (0, d._Y)(s),
            { default: c } = await n.e('53512').then(n.bind(n, 753521));
        !(0, a.$sL)() &&
            (u.fs.trackExposure({ location: 'NotificationMigrationManager' }),
            t &&
                ((0, d.cG)(o, l)
                    ? (0, a.h7j)(
                          (e) =>
                              (0, r.jsx)(
                                  c,
                                  m(p({}, e), {
                                      dismissable: !1,
                                      guildPain: o,
                                      myUsage: l
                                  })
                              ),
                          {
                              onCloseRequest: () => {}
                          }
                      )
                    : (0, d.ly)()));
    }
    checkNewUserExperiment() {
        let { logExposure: e, enabled: t } = u.ad.getCurrentConfig({ location: 'NotificationMigrationManager' }, { autoTrackExposure: !1 });
        e && (u.ad.trackExposure({ location: 'NotificationMigrationManager' }), t && (0, d.ly)());
    }
    constructor(...e) {
        super(...e), _(this, 'actions', { POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen() });
    }
}
async function E(e) {
    let {
            body: { guild_noise: t, usage: o }
        } = await i.tn.get({
            url: '/users/@me/notification-migration-data2',
            rejectWithError: !1
        }),
        s = (0, d._Y)(o);
    (0, a.ZDy)(async () => {
        let { default: i } = await n.e('53512').then(n.bind(n, 753521));
        return (n) =>
            (0, r.jsx)(
                i,
                m(p({}, n), {
                    dismissable: e,
                    guildPain: t,
                    myUsage: s
                })
            );
    });
}
let b = new g();
