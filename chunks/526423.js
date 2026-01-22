n.d(t, { A: () => p }), n(896048);
var r = n(562465),
    i = n(73153),
    s = n(830215),
    l = n(6981),
    a = n(351671),
    o = n(115036),
    c = n(954571),
    u = n(272355),
    d = n(652215);
function h(e, t) {
    c.default.track(d.HAw.BROWSER_HANDOFF_SUCCEEDED, {
        authenticated: e,
        handoff_source: t,
    });
}
class f extends u.A {
    _initialize() {
        i.h.subscribe("BROWSER_HANDOFF_END", this.handleEnd),
            i.h.subscribe("BROWSER_HANDOFF_FROM_APP", this.handleHandoff);
    }
    _terminate() {
        i.h.unsubscribe("BROWSER_HANDOFF_END", this.handleEnd),
            i.h.unsubscribe("BROWSER_HANDOFF_FROM_APP", this.handleHandoff);
    }
    handleHandoff(e) {
        let { handoffKey: t, handoffToken: n, fingerprint: i, handoffSource: o } = e;
        null != n
            ? r.Bo.post({
                  url: d.Rsh.HANDOFF_EXCHANGE,
                  body: {
                      key: t,
                      handoff_token: n,
                  },
                  rejectWithError: !1,
              }).then(
                  (e) => {
                      let { body: t } = e;
                      (0, l.uA)(t.user), s.A.loginToken(t.token, !1), h(!0, o);
                  },
                  (e) => {
                      if ((null != i && h(!1, o), s.A.setFingerprint(i), (0, l.mZ)(), o === a.L.ROLE_SUBSCRIPTION)) {
                          var t;
                          c.default.track(d.HAw.MOBILE_WEB_HANDOFF_FAILURE, {
                              reason: null != (t = e.message) ? t : e.text,
                              handoff_source: o,
                          });
                      }
                  },
              )
            : null != i
              ? (s.A.setFingerprint(i), h(!1, o), (0, l.mZ)())
              : (s.A.setFingerprint(i), (0, l.J0)());
    }
    constructor(...e) {
        super(...e),
            (function (e, t, n) {
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n);
            })(this, "handleEnd", (e) => {
                let { handoffToken: t, fingerprint: n } = e,
                    r = o.A.key;
                null != r && o.A.isHandoffAvailable()
                    ? this.handleHandoff({
                          handoffKey: r,
                          handoffToken: t,
                          fingerprint: n,
                          handoffSource: void 0,
                      })
                    : (s.A.setFingerprint(null), (0, l.J0)());
            });
    }
}
let p = new f();
