"use strict";
n.d(t, { A: () => m });
var i = n(562465),
    s = n(73153),
    r = n(830215),
    l = n(6981),
    a = n(351671),
    o = n(115036),
    c = n(954571),
    d = n(272355),
    u = n(652215);
function _(e, t) {
    c.default.track(u.HAw.BROWSER_HANDOFF_SUCCEEDED, { authenticated: e, handoff_source: t });
}
class h extends d.A {
    _initialize() {
        s.h.subscribe("BROWSER_HANDOFF_END", this.handleEnd),
            s.h.subscribe("BROWSER_HANDOFF_FROM_APP", this.handleHandoff);
    }
    _terminate() {
        s.h.unsubscribe("BROWSER_HANDOFF_END", this.handleEnd),
            s.h.unsubscribe("BROWSER_HANDOFF_FROM_APP", this.handleHandoff);
    }
    handleHandoff(e) {
        let { handoffKey: t, handoffToken: n, fingerprint: s, handoffSource: o } = e;
        null != n
            ? i.Bo.post({ url: u.Rsh.HANDOFF_EXCHANGE, body: { key: t, handoff_token: n }, rejectWithError: !1 }).then(
                  (e) => {
                      let { body: t } = e;
                      (0, l.uA)(t.user), r.A.loginToken(t.token, !1), _(!0, o);
                  },
                  (e) => {
                      null != s && _(!1, o),
                          r.A.setFingerprint(s),
                          (0, l.mZ)(),
                          o === a.L.ROLE_SUBSCRIPTION &&
                              c.default.track(u.HAw.MOBILE_WEB_HANDOFF_FAILURE, {
                                  reason: e.message ?? e.text,
                                  handoff_source: o,
                              });
                  },
              )
            : null != s
              ? (r.A.setFingerprint(s), _(!1, o), (0, l.mZ)())
              : (r.A.setFingerprint(s), (0, l.J0)());
    }
    handleEnd = (e) => {
        let { handoffToken: t, fingerprint: n } = e,
            i = o.A.key;
        null != i && o.A.isHandoffAvailable()
            ? this.handleHandoff({ handoffKey: i, handoffToken: t, fingerprint: n, handoffSource: void 0 })
            : (r.A.setFingerprint(null), (0, l.J0)());
    };
}
let m = new h();
