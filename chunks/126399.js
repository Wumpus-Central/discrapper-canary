n(47120);
var i = n(544891),
    r = n(570140),
    s = n(893776),
    l = n(899742),
    o = n(743142),
    a = n(117240),
    c = n(626135),
    d = n(317770),
    u = n(981631);
function h(e, t) {
    c.default.track(u.rMx.BROWSER_HANDOFF_SUCCEEDED, {
        authenticated: e,
        handoff_source: t
    });
}
class f extends d.Z {
    _initialize() {
        r.Z.subscribe('BROWSER_HANDOFF_END', this.handleEnd), r.Z.subscribe('BROWSER_HANDOFF_FROM_APP', this.handleHandoff);
    }
    _terminate() {
        r.Z.unsubscribe('BROWSER_HANDOFF_END', this.handleEnd), r.Z.unsubscribe('BROWSER_HANDOFF_FROM_APP', this.handleHandoff);
    }
    handleHandoff(e) {
        let { handoffKey: t, handoffToken: n, fingerprint: r, handoffSource: a } = e;
        null != n
            ? i.tn
                  .post({
                      url: u.ANM.HANDOFF_EXCHANGE,
                      body: {
                          key: t,
                          handoff_token: n
                      },
                      rejectWithError: !1
                  })
                  .then(
                      (e) => {
                          let { body: t } = e;
                          (0, l.Vb)(t.user), s.Z.loginToken(t.token, !1), h(!0, a);
                      },
                      (e) => {
                          if ((null != r && h(!1, a), s.Z.setFingerprint(r), (0, l.lx)(), a === o.F.ROLE_SUBSCRIPTION)) {
                              var t;
                              c.default.track(u.rMx.MOBILE_WEB_HANDOFF_FAILURE, {
                                  reason: null !== (t = e.message) && void 0 !== t ? t : e.text,
                                  handoff_source: a
                              });
                          }
                      }
                  )
            : null != r
              ? (s.Z.setFingerprint(r), h(!1, a), (0, l.lx)())
              : (s.Z.setFingerprint(r), (0, l.by)());
    }
    constructor(...e) {
        var t, n, i;
        super(...e),
            (t = this),
            (n = 'handleEnd'),
            (i = (e) => {
                let { handoffToken: t, fingerprint: n } = e,
                    i = a.Z.key;
                null != i && a.Z.isHandoffAvailable()
                    ? this.handleHandoff({
                          handoffKey: i,
                          handoffToken: t,
                          fingerprint: n,
                          handoffSource: void 0
                      })
                    : (s.Z.setFingerprint(null), (0, l.by)());
            }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = i);
    }
}
t.Z = new f();
