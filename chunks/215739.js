n.d(t, { Z: () => h }), n(388685);
var r = n(846519),
    i = n(147913),
    a = n(246133),
    o = n(734934),
    s = n(695346),
    l = n(885110),
    c = n(981631);
function u(e, t, n) {
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
let d = new r.V7(),
    f = new r.V7(),
    _ = new r.V7();
class p extends i.Z {
    constructor(...e) {
        super(...e),
            u(this, "actions", {
                USER_SETTINGS_PROTO_UPDATE: () => this.handleUpdateProto(),
                POST_CONNECTION_OPEN: () => this.handleUpdateProto(),
            }),
            u(this, "handleUpdateProto", () => {
                this.manageExpiringCustomStatus(),
                    this.manageExpiringStatus(),
                    this.lazilyMigrateStatusCreatedAt(),
                    this.manageExpiringFocusMode();
            }),
            u(this, "manageExpiringCustomStatus", () => {
                let e = s.Ok.getSetting();
                if (null == e) _.stop();
                else if (null != e.expiresAtMs && "0" !== e.expiresAtMs) {
                    let t = new Date(Number(e.expiresAtMs)).getTime() - new Date().getTime();
                    t > 0
                        ? _.start(
                              t,
                              () => {
                                  s.Ok.updateSetting(void 0);
                              },
                              !0,
                          )
                        : (s.Ok.updateSetting(void 0), _.stop());
                } else null != _ && _.stop();
            }),
            u(this, "manageExpiringStatus", () => {
                let e = s.Cr.getSetting();
                if (null != e && "0" !== e && l.Z.getStatus() !== c.Skl.ONLINE) {
                    let t = new Date(Number(e)).getTime() - new Date().getTime();
                    t > 0
                        ? d.start(
                              t,
                              () => {
                                  (0, a.Z)({
                                      nextStatus: c.Skl.ONLINE,
                                      analyticsContext: { location: { object: c.qAy.CUSTOM_STATUS_MANAGER } },
                                  });
                              },
                              !0,
                          )
                        : ((0, a.Z)({
                              nextStatus: c.Skl.ONLINE,
                              analyticsContext: { location: { object: c.qAy.CUSTOM_STATUS_MANAGER } },
                          }),
                          d.stop());
                } else null != d && d.stop();
            }),
            u(this, "lazilyMigrateStatusCreatedAt", () => {
                if (l.Z.getStatus() !== c.Skl.ONLINE && null == s.P4.getSetting()) {
                    let e = s.Cr.getSetting(),
                        t = "0" !== e ? new Date(Number(e)).getTime() - new Date().getTime() : void 0;
                    (0, a.Z)({
                        nextStatus: l.Z.getStatus(),
                        durationMillis: null != t && t > 0 ? t : void 0,
                        disableTracking: !0,
                    });
                }
            }),
            u(this, "manageExpiringFocusMode", () => {
                let e = s.fv.getSetting();
                if (null != e && "0" !== e) {
                    let t = new Date(Number(e)).getTime() - new Date().getTime();
                    t > 0
                        ? f.start(
                              t,
                              () => {
                                  (0, o.oW)(!1);
                              },
                              !0,
                          )
                        : ((0, o.oW)(!1), f.stop());
                } else null != f && f.stop();
            });
    }
}
let h = new p();
