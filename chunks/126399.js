n.d(t, { Z: () => m }), n(47120);
var i = n(544891),
    r = n(570140),
    a = n(893776),
    l = n(899742),
    o = n(743142),
    s = n(117240),
    c = n(626135),
    d = n(317770),
    u = n(981631);
function h(e, t) {
    c.default.track(u.rMx.BROWSER_HANDOFF_SUCCEEDED, {
        authenticated: e,
        handoff_source: t
    });
}
class _ extends d.Z {
    _initialize() {
        r.Z.subscribe('BROWSER_HANDOFF_END', this.handleEnd), r.Z.subscribe('BROWSER_HANDOFF_FROM_APP', this.handleHandoff);
    }
    _terminate() {
        r.Z.unsubscribe('BROWSER_HANDOFF_END', this.handleEnd), r.Z.unsubscribe('BROWSER_HANDOFF_FROM_APP', this.handleHandoff);
    }
    handleHandoff(e) {
        let { handoffKey: t, handoffToken: n, fingerprint: r, handoffSource: s } = e;
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
                          (0, l.Vb)(t.user), a.Z.loginToken(t.token, !1), h(!0, s);
                      },
                      (e) => {
                          if ((null != r && h(!1, s), a.Z.setFingerprint(r), (0, l.lx)(), s === o.F.ROLE_SUBSCRIPTION)) {
                              var t;
                              c.default.track(u.rMx.MOBILE_WEB_HANDOFF_FAILURE, {
                                  reason: null !== (t = e.message) && void 0 !== t ? t : e.text,
                                  handoff_source: s
                              });
                          }
                      }
                  )
            : null != r
              ? (a.Z.setFingerprint(r), h(!1, s), (0, l.lx)())
              : (a.Z.setFingerprint(r), (0, l.by)());
    }
    constructor(...e) {
        var t, n;
        super(...e),
            (t = 'handleEnd'),
            (n = (e) => {
                let { handoffToken: t, fingerprint: n } = e,
                    i = s.Z.key;
                null != i && s.Z.isHandoffAvailable()
                    ? this.handleHandoff({
                          handoffKey: i,
                          handoffToken: t,
                          fingerprint: n,
                          handoffSource: void 0
                      })
                    : (a.Z.setFingerprint(null), (0, l.by)());
            }),
            t in this
                ? Object.defineProperty(this, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (this[t] = n);
    }
}
let m = new _();
