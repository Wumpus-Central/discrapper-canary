n.d(t, { Ay: () => N });
var i = n(17928),
    r = n(73153),
    a = n(885576),
    s = n(309010),
    l = n(967198),
    o = n(260498),
    d = n(189117),
    c = n(652215),
    u = n(746080);
let _ = null,
    E = null,
    A = null,
    h = null;
function I() {
    null != A && (clearTimeout(A), (A = null));
}
function f(e) {
    let t = d.ZR.filter((t) => t !== e);
    return t[Math.floor(Math.random() * t.length)];
}
function p() {
    null != h && (clearTimeout(h), (h = null));
}
function T() {
    return (I(), p(), (_ = null), null != E && ((E = null), !0));
}
function m(e) {
    let { withGracePeriod: t } = e;
    if (a.A.isIdle() || (null != _ && null == o.Ay.getProject(_))) return T();
    let n = (function () {
        if (s.Ay.getChannelId() !== u.VV.CONJURE) return null;
        let e = l.A.getGuildId();
        if (null == e) return null;
        let t = o.Ay.getSelectedProjectId(e);
        return null == t || null == o.Ay.getProject(t) ? null : t;
    })();
    return null == n
        ? null != E && t
            ? (null == A &&
                  (A = setTimeout(() => {
                      ((A = null), T() && S.emitChange());
                  }, 3e4)),
              !1)
            : T()
        : (I(),
          (n !== _ || null == E) &&
              ((_ = n),
              (E = { type: c.$pd.PLAYING, name: d.Vb, details: f(), timestamps: { start: Date.now() } }),
              !(function e() {
                  (p(),
                      (h = setTimeout(() => {
                          ((h = null), null != E && ((E = { ...E, details: f(E.details) }), e(), S.emitChange()));
                      }, 3e5)));
              })(),
              !0));
}
class g extends i.Ay.Store {
    static displayName = "ConjureRichPresenceStore";
    initialize() {
        this.syncWith([a.A, s.Ay, l.A, o.Ay], () => m({ withGracePeriod: !0 }));
    }
    getActivity() {
        return E;
    }
}
let S = new g(r.h, { CONNECTION_OPEN: () => m({ withGracePeriod: !1 }), LOGOUT: T }),
    N = S;
