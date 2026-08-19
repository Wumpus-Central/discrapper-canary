"use strict";
n.d(t, { A: () => I });
var i = n(406935),
    r = n(451988),
    a = n(439372),
    s = n(827827),
    l = n(970931),
    o = n(885386),
    d = n(594061),
    c = n(461213),
    u = n(652215);
let _ = new r.Ep(),
    E = new r.Ep(),
    A = new r.Ep();
class h extends a.A {
    actions = {
        POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
        USER_SETTINGS_PROTO_UPDATE: () => this.handleUserSettingsProtoUpdate(),
    };
    handlePostConnectionOpen = () => {
        this.handleCommonUpdates();
    };
    handleUserSettingsProtoUpdate = () => {
        this.handleCommonUpdates();
    };
    handleCommonUpdates = () => {
        this.manageExpiringCustomStatus(),
            this.manageExpiringStatus(),
            this.lazilyMigrateStatusCreatedAt(),
            this.manageExpiringFocusMode();
    };
    manageExpiringCustomStatus = () => {
        let e = o.G2.getSetting();
        if (null == e) A.stop();
        else if (null != e.expiresAtMs && "0" !== e.expiresAtMs) {
            let t = new Date(Number(e.expiresAtMs)).getTime() - new Date().getTime();
            t > 0
                ? A.start(
                      t,
                      () => {
                          o.G2.updateSetting(void 0);
                      },
                      !0,
                  )
                : (o.G2.updateSetting(void 0), A.stop());
        } else null != A && A.stop();
    };
    manageExpiringStatus = () => {
        let e = o.CY.getSetting();
        if (null != e && "0" !== e && c.A.getStatus() !== u.clD.ONLINE) {
            let t = new Date(Number(e)).getTime() - new Date().getTime();
            t > 0
                ? _.start(
                      t,
                      () => {
                          (0, s.A)({
                              nextStatus: u.clD.ONLINE,
                              analyticsContext: { location: { object: u.ZSU.CUSTOM_STATUS_MANAGER } },
                          });
                      },
                      !0,
                  )
                : ((0, s.A)({
                      nextStatus: u.clD.ONLINE,
                      analyticsContext: { location: { object: u.ZSU.CUSTOM_STATUS_MANAGER } },
                  }),
                  _.stop());
        } else null != _ && _.stop();
    };
    lazilyMigrateStatusCreatedAt = () => {
        c.A.getStatus() !== u.clD.ONLINE &&
            null == o._6.getSetting() &&
            d.wc.updateAsync(
                "status",
                (e) => {
                    e.statusCreatedAtMs = i.ol.create({ value: `${Date.now()}` });
                },
                d.Sb.INFREQUENT_USER_ACTION,
            );
    };
    manageExpiringFocusMode = () => {
        let e = o.Jr.getSetting();
        if (null != e && "0" !== e) {
            let t = new Date(Number(e)).getTime() - new Date().getTime();
            t > 0
                ? E.start(
                      t,
                      () => {
                          (0, l.ES)(!1);
                      },
                      !0,
                  )
                : ((0, l.ES)(!1), E.stop());
        } else null != E && E.stop();
    };
}
let I = new h();
