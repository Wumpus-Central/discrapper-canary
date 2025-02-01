n.d(t, { Z: () => h }), n(47120);
var i = n(846519),
    r = n(147913),
    a = n(246133),
    s = n(734934),
    o = n(695346),
    l = n(885110),
    u = n(981631);
function c(e, t, n) {
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
let d = new i.V7(),
    f = new i.V7(),
    _ = new i.V7();
class p extends r.Z {
    constructor(...e) {
        super(...e),
            c(this, 'actions', {
                USER_SETTINGS_PROTO_UPDATE: () => this.handleUpdateProto(),
                POST_CONNECTION_OPEN: () => this.handleUpdateProto()
            }),
            c(this, 'handleUpdateProto', () => {
                let e = o.Ok.getSetting();
                if (null == e) _.stop();
                else if (null != e.expiresAtMs && '0' !== e.expiresAtMs) {
                    let t = new Date(Number(e.expiresAtMs)).getTime() - new Date().getTime();
                    t > 0
                        ? _.start(
                              t,
                              () => {
                                  o.Ok.updateSetting(void 0);
                              },
                              !0
                          )
                        : (o.Ok.updateSetting(void 0), _.stop());
                } else null != _ && _.stop();
                let t = o.Cr.getSetting();
                if (null != t && '0' !== t && l.Z.getStatus() !== u.Skl.ONLINE) {
                    let e = new Date(Number(t)).getTime() - new Date().getTime();
                    e > 0
                        ? d.start(
                              e,
                              () => {
                                  (0, a.Z)(u.Skl.ONLINE, l.Z.getStatus(), { location: { object: u.qAy.CUSTOM_STATUS_MANAGER } }, void 0);
                              },
                              !0
                          )
                        : ((0, a.Z)(u.Skl.ONLINE, l.Z.getStatus(), { location: { object: u.qAy.CUSTOM_STATUS_MANAGER } }, void 0), d.stop());
                } else null != d && d.stop();
                let n = o.fv.getSetting();
                if (null != n && '0' !== n) {
                    let e = new Date(Number(n)).getTime() - new Date().getTime();
                    e > 0
                        ? f.start(
                              e,
                              () => {
                                  (0, s.oW)(!1);
                              },
                              !0
                          )
                        : ((0, s.oW)(!1), f.stop());
                } else null != f && f.stop();
            });
    }
}
let h = new p();
