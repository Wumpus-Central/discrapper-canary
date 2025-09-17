n.d(t, { Z: () => E }), n(388685);
var r = n(704215),
    i = n(381499),
    a = n(846519),
    o = n(147913),
    s = n(246133),
    l = n(734934),
    c = n(695346),
    u = n(675478),
    d = n(885110),
    f = n(981631);
function _(e, t, n) {
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
let p = new a.V7(),
    h = new a.V7(),
    m = new a.V7();
class g extends o.Z {
    constructor(...e) {
        super(...e),
            _(this, "previousStatus", null),
            _(this, "actions", {
                POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
                USER_SETTINGS_PROTO_UPDATE: () => this.handleUserSettingsProtoUpdate(),
            }),
            _(this, "handlePostConnectionOpen", () => {
                (this.previousStatus = d.Z.getStatus()), this.handleCommonUpdates();
            }),
            _(this, "handleUserSettingsProtoUpdate", () => {
                this.handleCommonUpdates(), this.manageDoNotDisturbReminderPopover();
            }),
            _(this, "handleCommonUpdates", () => {
                this.manageExpiringCustomStatus(),
                    this.manageExpiringStatus(),
                    this.lazilyMigrateStatusCreatedAt(),
                    this.manageExpiringFocusMode();
            }),
            _(this, "manageExpiringCustomStatus", () => {
                let e = c.Ok.getSetting();
                if (null == e) m.stop();
                else if (null != e.expiresAtMs && "0" !== e.expiresAtMs) {
                    let t = new Date(Number(e.expiresAtMs)).getTime() - new Date().getTime();
                    t > 0
                        ? m.start(
                              t,
                              () => {
                                  c.Ok.updateSetting(void 0);
                              },
                              !0,
                          )
                        : (c.Ok.updateSetting(void 0), m.stop());
                } else null != m && m.stop();
            }),
            _(this, "manageExpiringStatus", () => {
                let e = c.Cr.getSetting();
                if (null != e && "0" !== e && d.Z.getStatus() !== f.Skl.ONLINE) {
                    let t = new Date(Number(e)).getTime() - new Date().getTime();
                    t > 0
                        ? p.start(
                              t,
                              () => {
                                  (0, s.Z)({
                                      nextStatus: f.Skl.ONLINE,
                                      analyticsContext: { location: { object: f.qAy.CUSTOM_STATUS_MANAGER } },
                                  });
                              },
                              !0,
                          )
                        : ((0, s.Z)({
                              nextStatus: f.Skl.ONLINE,
                              analyticsContext: { location: { object: f.qAy.CUSTOM_STATUS_MANAGER } },
                          }),
                          p.stop());
                } else null != p && p.stop();
            }),
            _(this, "lazilyMigrateStatusCreatedAt", () => {
                d.Z.getStatus() !== f.Skl.ONLINE &&
                    null == c.P4.getSetting() &&
                    u.hW.updateAsync(
                        "status",
                        (e) => {
                            e.statusCreatedAtMs = i.wA.create({ value: "".concat(Date.now()) });
                        },
                        u.fy.INFREQUENT_USER_ACTION,
                    );
            }),
            _(this, "manageExpiringFocusMode", () => {
                let e = c.fv.getSetting();
                if (null != e && "0" !== e) {
                    let t = new Date(Number(e)).getTime() - new Date().getTime();
                    t > 0
                        ? h.start(
                              t,
                              () => {
                                  (0, l.oW)(!1);
                              },
                              !0,
                          )
                        : ((0, l.oW)(!1), h.stop());
                } else null != h && h.stop();
            }),
            _(this, "manageDoNotDisturbReminderPopover", () => {
                if (null == this.previousStatus) {
                    this.previousStatus = d.Z.getStatus();
                    return;
                }
                let e = d.Z.getStatus();
                this.previousStatus !== f.Skl.DND && e === f.Skl.DND && (0, u.Z1)(r.z.DO_NOT_DISTURB_REMINDER_POPOVER),
                    (this.previousStatus = e);
            });
    }
}
let E = new g();
