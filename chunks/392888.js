n.d(t, {
    R: () => h,
    Z: () => m
}),
    n(47120);
var i = n(200651);
n(192379);
var r = n(544891),
    a = n(433517),
    s = n(481060),
    o = n(147913),
    l = n(480294),
    u = n(9156),
    c = n(312400),
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
class p extends o.Z {
    handlePostConnectionOpen() {
        if (!a.K.get('turnedOffNewNotifications') && l.Z.hasConsented(f.pjP.PERSONALIZATION)) {
            if (c.xT.getCurrentConfig({ location: 'NotificationMigrationManager' }, { autoTrackExposure: !1 }).enabled && !u.ZP.useNewNotifications) 0 > Date.now() && this.checkOldUserExperiment(), this.checkNewUserExperiment();
        }
    }
    async checkOldUserExperiment() {
        let { logExposure: e, autoOpen: t } = c.fs.getCurrentConfig({ location: 'NotificationMigrationManager' }, { autoTrackExposure: !1 });
        if (!e) return;
        let {
                body: { guild_noise: a, usage: o }
            } = await r.tn.get({
                url: '/users/@me/notification-migration-data2',
                rejectWithError: !1
            }),
            l = (0, d._Y)(o),
            { default: u } = await n.e('53512').then(n.bind(n, 753521));
        if (!(0, s.$sL)())
            c.fs.trackExposure({ location: 'NotificationMigrationManager' }),
                t &&
                    ((0, d.cG)(a, l)
                        ? (0, s.h7j)(
                              (e) =>
                                  (0, i.jsx)(u, {
                                      ...e,
                                      dismissable: !1,
                                      guildPain: a,
                                      myUsage: l
                                  }),
                              {
                                  onCloseRequest: () => {}
                              }
                          )
                        : (0, d.ly)());
    }
    checkNewUserExperiment() {
        let { logExposure: e, enabled: t } = c.ad.getCurrentConfig({ location: 'NotificationMigrationManager' }, { autoTrackExposure: !1 });
        e && (c.ad.trackExposure({ location: 'NotificationMigrationManager' }), t && (0, d.ly)());
    }
    constructor(...e) {
        super(...e), _(this, 'actions', { POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen() });
    }
}
async function h(e) {
    let {
            body: { guild_noise: t, usage: a }
        } = await r.tn.get({
            url: '/users/@me/notification-migration-data2',
            rejectWithError: !1
        }),
        o = (0, d._Y)(a);
    (0, s.ZDy)(async () => {
        let { default: r } = await n.e('53512').then(n.bind(n, 753521));
        return (n) =>
            (0, i.jsx)(r, {
                ...n,
                dismissable: e,
                guildPain: t,
                myUsage: o
            });
    });
}
let m = new p();
