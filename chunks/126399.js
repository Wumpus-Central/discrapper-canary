n.d(t, { Z: () => p }), n(388685);
var r = n(544891),
    i = n(570140),
    s = n(893776),
    l = n(899742),
    a = n(743142),
    o = n(117240),
    c = n(626135),
    u = n(317770),
    d = n(981631);
function h(e, t) {
    c.default.track(d.rMx.BROWSER_HANDOFF_SUCCEEDED, {
        authenticated: e,
        handoff_source: t,
    });
}
class g extends u.Z {
    _initialize() {
        i.Z.subscribe("BROWSER_HANDOFF_END", this.handleEnd),
            i.Z.subscribe("BROWSER_HANDOFF_FROM_APP", this.handleHandoff);
    }
    _terminate() {
        i.Z.unsubscribe("BROWSER_HANDOFF_END", this.handleEnd),
            i.Z.unsubscribe("BROWSER_HANDOFF_FROM_APP", this.handleHandoff);
    }
    handleHandoff(e) {
        let { handoffKey: t, handoffToken: n, fingerprint: i, handoffSource: o } = e;
        null != n
            ? r.tn
                  .post({
                      url: d.ANM.HANDOFF_EXCHANGE,
                      body: {
                          key: t,
                          handoff_token: n,
                      },
                      rejectWithError: !1,
                  })
                  .then(
                      (e) => {
                          let { body: t } = e;
                          (0, l.Vb)(t.user), s.Z.loginToken(t.token, !1), h(!0, o);
                      },
                      (e) => {
                          if (
                              (null != i && h(!1, o), s.Z.setFingerprint(i), (0, l.lx)(), o === a.F.ROLE_SUBSCRIPTION)
                          ) {
                              var t;
                              c.default.track(d.rMx.MOBILE_WEB_HANDOFF_FAILURE, {
                                  reason: null != (t = e.message) ? t : e.text,
                                  handoff_source: o,
                              });
                          }
                      },
                  )
            : null != i
              ? (s.Z.setFingerprint(i), h(!1, o), (0, l.lx)())
              : (s.Z.setFingerprint(i), (0, l.by)());
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
                    r = o.Z.key;
                null != r && o.Z.isHandoffAvailable()
                    ? this.handleHandoff({
                          handoffKey: r,
                          handoffToken: t,
                          fingerprint: n,
                          handoffSource: void 0,
                      })
                    : (s.Z.setFingerprint(null), (0, l.by)());
            });
    }
}
let p = new g();
