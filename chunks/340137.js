n.d(t, {
    A: () => E,
}),
    n(896048);
var r = n(554146),
    i = n(406935),
    a = n(451988),
    s = n(439372),
    o = n(827827),
    l = n(970931),
    c = n(253932),
    u = n(594061),
    d = n(461213),
    f = n(652215);

function p(e, t, n) {
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
let _ = new a.Ep(),
    h = new a.Ep(),
    m = new a.Ep();
class g extends s.A {
    constructor(...e) {
        super(...e),
            p(this, "previousStatus", null),
            p(this, "actions", {
                POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
                USER_SETTINGS_PROTO_UPDATE: () => this.handleUserSettingsProtoUpdate(),
            }),
            p(this, "handlePostConnectionOpen", () => {
                (this.previousStatus = d.A.getStatus()), this.handleCommonUpdates();
            }),
            p(this, "handleUserSettingsProtoUpdate", () => {
                this.handleCommonUpdates(), this.manageDoNotDisturbReminderPopover();
            }),
            p(this, "handleCommonUpdates", () => {
                this.manageExpiringCustomStatus(),
                    this.manageExpiringStatus(),
                    this.lazilyMigrateStatusCreatedAt(),
                    this.manageExpiringFocusMode();
            }),
            p(this, "manageExpiringCustomStatus", () => {
                let e = c.G2.getSetting();
                if (null == e) m.stop();
                else if (null != e.expiresAtMs && "0" !== e.expiresAtMs) {
                    let t = new Date(Number(e.expiresAtMs)).getTime() - new Date().getTime();
                    t > 0
                        ? m.start(
                              t,
                              () => {
                                  c.G2.updateSetting(void 0);
                              },
                              !0,
                          )
                        : (c.G2.updateSetting(void 0), m.stop());
                } else null != m && m.stop();
            }),
            p(this, "manageExpiringStatus", () => {
                let e = c.CY.getSetting();
                if (null != e && "0" !== e && d.A.getStatus() !== f.clD.ONLINE) {
                    let t = new Date(Number(e)).getTime() - new Date().getTime();
                    t > 0
                        ? _.start(
                              t,
                              () => {
                                  (0, o.A)({
                                      nextStatus: f.clD.ONLINE,
                                      analyticsContext: {
                                          location: {
                                              object: f.ZSU.CUSTOM_STATUS_MANAGER,
                                          },
                                      },
                                  });
                              },
                              !0,
                          )
                        : ((0, o.A)({
                              nextStatus: f.clD.ONLINE,
                              analyticsContext: {
                                  location: {
                                      object: f.ZSU.CUSTOM_STATUS_MANAGER,
                                  },
                              },
                          }),
                          _.stop());
                } else null != _ && _.stop();
            }),
            p(this, "lazilyMigrateStatusCreatedAt", () => {
                d.A.getStatus() !== f.clD.ONLINE &&
                    null == c._6.getSetting() &&
                    u.wc.updateAsync(
                        "status",
                        (e) => {
                            e.statusCreatedAtMs = i.ol.create({
                                value: "".concat(Date.now()),
                            });
                        },
                        u.Sb.INFREQUENT_USER_ACTION,
                    );
            }),
            p(this, "manageExpiringFocusMode", () => {
                let e = c.Jr.getSetting();
                if (null != e && "0" !== e) {
                    let t = new Date(Number(e)).getTime() - new Date().getTime();
                    t > 0
                        ? h.start(
                              t,
                              () => {
                                  (0, l.ES)(!1);
                              },
                              !0,
                          )
                        : ((0, l.ES)(!1), h.stop());
                } else null != h && h.stop();
            }),
            p(this, "manageDoNotDisturbReminderPopover", () => {
                if (null == this.previousStatus) {
                    this.previousStatus = d.A.getStatus();
                    return;
                }
                let e = d.A.getStatus();
                this.previousStatus !== f.clD.DND && e === f.clD.DND && (0, u._N)(r.M.DO_NOT_DISTURB_REMINDER_POPOVER),
                    (this.previousStatus = e);
            });
    }
}
let E = new g();
