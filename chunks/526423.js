n.d(t, { A: () => m });
var r = n(636537),
    l = n(228366),
    i = n(830215),
    a = n(6981),
    s = n(351671),
    o = n(115036),
    u = n(954571),
    c = n(272355),
    d = n(652215);
function _(e, t) {
    u.default.track(d.HAw.BROWSER_HANDOFF_SUCCEEDED, { authenticated: e, handoff_source: t });
}
class h extends c.A {
    _initialize() {
        l.h.subscribe("BROWSER_HANDOFF_END", this.handleEnd),
            l.h.subscribe("BROWSER_HANDOFF_FROM_APP", this.handleHandoff);
    }
    _terminate() {
        l.h.unsubscribe("BROWSER_HANDOFF_END", this.handleEnd),
            l.h.unsubscribe("BROWSER_HANDOFF_FROM_APP", this.handleHandoff);
    }
    handleHandoff(e) {
        let { handoffKey: t, handoffToken: n, fingerprint: l, handoffSource: o } = e;
        null != n
            ? r.Bo.post({ url: d.Rsh.HANDOFF_EXCHANGE, body: { key: t, handoff_token: n }, rejectWithError: !1 }).then(
                  (e) => {
                      let { body: t } = e;
                      (0, a.uA)(t.user), i.A.loginToken(t.token, !1), _(!0, o);
                  },
                  (e) => {
                      null != l && _(!1, o),
                          i.A.setFingerprint(l),
                          (0, a.mZ)(),
                          o === s.L.ROLE_SUBSCRIPTION &&
                              u.default.track(d.HAw.MOBILE_WEB_HANDOFF_FAILURE, {
                                  reason: e.message ?? e.text,
                                  handoff_source: o,
                              });
                  },
              )
            : null != l
              ? (i.A.setFingerprint(l), _(!1, o), (0, a.mZ)())
              : (i.A.setFingerprint(l), (0, a.J0)());
    }
    handleEnd = (e) => {
        let { handoffToken: t, fingerprint: n } = e,
            r = o.A.key;
        null != r && o.A.isHandoffAvailable()
            ? this.handleHandoff({ handoffKey: r, handoffToken: t, fingerprint: n, handoffSource: void 0 })
            : (i.A.setFingerprint(null), (0, a.J0)());
    };
}
let m = new h();
