"use strict";
n.d(t, { A: () => m });
var r = n(406935),
    i = n(451988),
    s = n(439372),
    a = n(827827),
    o = n(970931),
    l = n(253932),
    u = n(594061),
    c = n(461213),
    d = n(652215);
let _ = new i.Ep(),
    f = new i.Ep(),
    p = new i.Ep();
class h extends s.A {
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
        let e = l.G2.getSetting();
        if (null == e) p.stop();
        else if (null != e.expiresAtMs && "0" !== e.expiresAtMs) {
            let t = new Date(Number(e.expiresAtMs)).getTime() - new Date().getTime();
            t > 0
                ? p.start(
                      t,
                      () => {
                          l.G2.updateSetting(void 0);
                      },
                      !0,
                  )
                : (l.G2.updateSetting(void 0), p.stop());
        } else null != p && p.stop();
    };
    manageExpiringStatus = () => {
        let e = l.CY.getSetting();
        if (null != e && "0" !== e && c.A.getStatus() !== d.clD.ONLINE) {
            let t = new Date(Number(e)).getTime() - new Date().getTime();
            t > 0
                ? _.start(
                      t,
                      () => {
                          (0, a.A)({
                              nextStatus: d.clD.ONLINE,
                              analyticsContext: { location: { object: d.ZSU.CUSTOM_STATUS_MANAGER } },
                          });
                      },
                      !0,
                  )
                : ((0, a.A)({
                      nextStatus: d.clD.ONLINE,
                      analyticsContext: { location: { object: d.ZSU.CUSTOM_STATUS_MANAGER } },
                  }),
                  _.stop());
        } else null != _ && _.stop();
    };
    lazilyMigrateStatusCreatedAt = () => {
        c.A.getStatus() !== d.clD.ONLINE &&
            null == l._6.getSetting() &&
            u.wc.updateAsync(
                "status",
                (e) => {
                    e.statusCreatedAtMs = r.ol.create({ value: `${Date.now()}` });
                },
                u.Sb.INFREQUENT_USER_ACTION,
            );
    };
    manageExpiringFocusMode = () => {
        let e = l.Jr.getSetting();
        if (null != e && "0" !== e) {
            let t = new Date(Number(e)).getTime() - new Date().getTime();
            t > 0
                ? f.start(
                      t,
                      () => {
                          (0, o.ES)(!1);
                      },
                      !0,
                  )
                : ((0, o.ES)(!1), f.stop());
        } else null != f && f.stop();
    };
}
let m = new h();
