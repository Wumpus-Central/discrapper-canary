n.d(t, { A: () => g });
var l = n(636537),
    r = n(228366),
    a = n(830215),
    i = n(6981),
    s = n(351671),
    o = n(115036),
    u = n(954571),
    c = n(272355),
    d = n(652215);
function h(e, t) {
    u.default.track(d.HAw.BROWSER_HANDOFF_SUCCEEDED, { authenticated: e, handoff_source: t });
}
class m extends c.A {
    _initialize() {
        r.h.subscribe("BROWSER_HANDOFF_END", this.handleEnd),
            r.h.subscribe("BROWSER_HANDOFF_FROM_APP", this.handleHandoff);
    }
    _terminate() {
        r.h.unsubscribe("BROWSER_HANDOFF_END", this.handleEnd),
            r.h.unsubscribe("BROWSER_HANDOFF_FROM_APP", this.handleHandoff);
    }
    handleHandoff(e) {
        let { handoffKey: t, handoffToken: n, fingerprint: r, handoffSource: o } = e;
        null != n
            ? l.Bo.post({ url: d.Rsh.HANDOFF_EXCHANGE, body: { key: t, handoff_token: n }, rejectWithError: !1 }).then(
                  (e) => {
                      let { body: t } = e;
                      (0, i.uA)(t.user), a.A.loginToken(t.token, !1), h(!0, o);
                  },
                  (e) => {
                      null != r && h(!1, o),
                          a.A.setFingerprint(r),
                          (0, i.mZ)(),
                          o === s.L.ROLE_SUBSCRIPTION &&
                              u.default.track(d.HAw.MOBILE_WEB_HANDOFF_FAILURE, {
                                  reason: e.message ?? e.text,
                                  handoff_source: o,
                              });
                  },
              )
            : null != r
              ? (a.A.setFingerprint(r), h(!1, o), (0, i.mZ)())
              : (a.A.setFingerprint(r), (0, i.J0)());
    }
    handleEnd = (e) => {
        let { handoffToken: t, fingerprint: n } = e,
            l = o.A.key;
        null != l && o.A.isHandoffAvailable()
            ? this.handleHandoff({ handoffKey: l, handoffToken: t, fingerprint: n, handoffSource: void 0 })
            : (a.A.setFingerprint(null), (0, i.J0)());
    };
}
let g = new m();
