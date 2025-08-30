n.d(t, { Z: () => g }), n(388685);
var r = n(381499),
    i = n(846519),
    a = n(147913),
    o = n(246133),
    s = n(734934),
    l = n(695346),
    c = n(675478),
    u = n(885110),
    d = n(981631);
function f(e, t, n) {
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
let _ = new i.V7(),
    p = new i.V7(),
    h = new i.V7();
class m extends a.Z {
    constructor(...e) {
        super(...e),
            f(this, "actions", {
                USER_SETTINGS_PROTO_UPDATE: () => this.handleUpdateProto(),
                POST_CONNECTION_OPEN: () => this.handleUpdateProto(),
            }),
            f(this, "handleUpdateProto", () => {
                this.manageExpiringCustomStatus(),
                    this.manageExpiringStatus(),
                    this.lazilyMigrateStatusCreatedAt(),
                    this.manageExpiringFocusMode();
            }),
            f(this, "manageExpiringCustomStatus", () => {
                let e = l.Ok.getSetting();
                if (null == e) h.stop();
                else if (null != e.expiresAtMs && "0" !== e.expiresAtMs) {
                    let t = new Date(Number(e.expiresAtMs)).getTime() - new Date().getTime();
                    t > 0
                        ? h.start(
                              t,
                              () => {
                                  l.Ok.updateSetting(void 0);
                              },
                              !0,
                          )
                        : (l.Ok.updateSetting(void 0), h.stop());
                } else null != h && h.stop();
            }),
            f(this, "manageExpiringStatus", () => {
                let e = l.Cr.getSetting();
                if (null != e && "0" !== e && u.Z.getStatus() !== d.Skl.ONLINE) {
                    let t = new Date(Number(e)).getTime() - new Date().getTime();
                    t > 0
                        ? _.start(
                              t,
                              () => {
                                  (0, o.Z)({
                                      nextStatus: d.Skl.ONLINE,
                                      analyticsContext: { location: { object: d.qAy.CUSTOM_STATUS_MANAGER } },
                                  });
                              },
                              !0,
                          )
                        : ((0, o.Z)({
                              nextStatus: d.Skl.ONLINE,
                              analyticsContext: { location: { object: d.qAy.CUSTOM_STATUS_MANAGER } },
                          }),
                          _.stop());
                } else null != _ && _.stop();
            }),
            f(this, "lazilyMigrateStatusCreatedAt", () => {
                u.Z.getStatus() !== d.Skl.ONLINE &&
                    null == l.P4.getSetting() &&
                    c.hW.updateAsync(
                        "status",
                        (e) => {
                            e.statusCreatedAtMs = r.wA.create({ value: "".concat(Date.now()) });
                        },
                        c.fy.INFREQUENT_USER_ACTION,
                    );
            }),
            f(this, "manageExpiringFocusMode", () => {
                let e = l.fv.getSetting();
                if (null != e && "0" !== e) {
                    let t = new Date(Number(e)).getTime() - new Date().getTime();
                    t > 0
                        ? p.start(
                              t,
                              () => {
                                  (0, s.oW)(!1);
                              },
                              !0,
                          )
                        : ((0, s.oW)(!1), p.stop());
                } else null != p && p.stop();
            });
    }
}
let g = new m();
