"use strict";
n.d(t, { A: () => g });
var r = n(554146),
    i = n(406935),
    a = n(451988),
    s = n(439372),
    o = n(827827),
    l = n(970931),
    u = n(253932),
    c = n(594061),
    d = n(461213),
    _ = n(652215);
let f = new a.Ep(),
    p = new a.Ep(),
    h = new a.Ep();
class m extends s.A {
    previousStatus = null;
    actions = {
        POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
        USER_SETTINGS_PROTO_UPDATE: () => this.handleUserSettingsProtoUpdate(),
    };
    handlePostConnectionOpen = () => {
        (this.previousStatus = d.A.getStatus()), this.handleCommonUpdates();
    };
    handleUserSettingsProtoUpdate = () => {
        this.handleCommonUpdates(), this.manageDoNotDisturbReminderPopover();
    };
    handleCommonUpdates = () => {
        this.manageExpiringCustomStatus(),
            this.manageExpiringStatus(),
            this.lazilyMigrateStatusCreatedAt(),
            this.manageExpiringFocusMode();
    };
    manageExpiringCustomStatus = () => {
        let e = u.G2.getSetting();
        if (null == e) h.stop();
        else if (null != e.expiresAtMs && "0" !== e.expiresAtMs) {
            let t = new Date(Number(e.expiresAtMs)).getTime() - new Date().getTime();
            t > 0
                ? h.start(
                      t,
                      () => {
                          u.G2.updateSetting(void 0);
                      },
                      !0,
                  )
                : (u.G2.updateSetting(void 0), h.stop());
        } else null != h && h.stop();
    };
    manageExpiringStatus = () => {
        let e = u.CY.getSetting();
        if (null != e && "0" !== e && d.A.getStatus() !== _.clD.ONLINE) {
            let t = new Date(Number(e)).getTime() - new Date().getTime();
            t > 0
                ? f.start(
                      t,
                      () => {
                          (0, o.A)({
                              nextStatus: _.clD.ONLINE,
                              analyticsContext: { location: { object: _.ZSU.CUSTOM_STATUS_MANAGER } },
                          });
                      },
                      !0,
                  )
                : ((0, o.A)({
                      nextStatus: _.clD.ONLINE,
                      analyticsContext: { location: { object: _.ZSU.CUSTOM_STATUS_MANAGER } },
                  }),
                  f.stop());
        } else null != f && f.stop();
    };
    lazilyMigrateStatusCreatedAt = () => {
        d.A.getStatus() !== _.clD.ONLINE &&
            null == u._6.getSetting() &&
            c.wc.updateAsync(
                "status",
                (e) => {
                    e.statusCreatedAtMs = i.ol.create({ value: `${Date.now()}` });
                },
                c.Sb.INFREQUENT_USER_ACTION,
            );
    };
    manageExpiringFocusMode = () => {
        let e = u.Jr.getSetting();
        if (null != e && "0" !== e) {
            let t = new Date(Number(e)).getTime() - new Date().getTime();
            t > 0
                ? p.start(
                      t,
                      () => {
                          (0, l.ES)(!1);
                      },
                      !0,
                  )
                : ((0, l.ES)(!1), p.stop());
        } else null != p && p.stop();
    };
    manageDoNotDisturbReminderPopover = () => {
        if (null == this.previousStatus) {
            this.previousStatus = d.A.getStatus();
            return;
        }
        let e = d.A.getStatus();
        this.previousStatus !== _.clD.DND && e === _.clD.DND && (0, c._N)(r.M.DO_NOT_DISTURB_REMINDER_POPOVER),
            (this.previousStatus = e);
    };
}
let g = new m();
