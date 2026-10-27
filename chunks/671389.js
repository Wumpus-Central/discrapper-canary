n.d(t, { Ay: () => y });
var i = n(17928),
    r = n(636537),
    a = n(73153),
    s = n(885576),
    l = n(309010),
    o = n(967198),
    d = n(97005),
    c = n(735769),
    u = n(260498),
    _ = n(189117),
    E = n(652215),
    A = n(746080);
let h = null,
    f = null,
    I = null,
    p = null,
    T = !1;
function m() {
    null != I && (clearTimeout(I), (I = null));
}
function g(e) {
    let t = _.ZR.filter((t) => t !== e);
    return t[Math.floor(Math.random() * t.length)];
}
function S() {
    null != p && (clearTimeout(p), (p = null));
}
function N() {
    return (m(), S(), (h = null), null != f && ((f = null), !0));
}
function C(e) {
    let { withGracePeriod: t } = e;
    if (s.A.isIdle() || (null != h && null == u.Ay.getProject(h))) return N();
    let n = (function () {
        let e = c.A.getShownProjectId();
        if (null != e) return null != u.Ay.getProject(e) ? e : null;
        let t = o.A.getGuildId(),
            n =
                u.Ay.getGlobalSelectedProjectId() ??
                (null != t && l.Ay.getChannelId() === A.VV.CONJURE ? u.Ay.getSelectedProjectId(t) : null);
        return null == n || null == u.Ay.getProject(n) ? null : n;
    })();
    return null == n
        ? null != f && t
            ? (null == I &&
                  (I = setTimeout(() => {
                      ((I = null), N() && L.emitChange());
                  }, 3e4)),
              !1)
            : N()
        : (m(),
          (n !== h || null == f) &&
              ((h = n),
              (f = { type: E.$pd.PLAYING, name: _.Vb, details: g(), timestamps: { start: Date.now() } }),
              !(function e() {
                  (S(),
                      (p = setTimeout(() => {
                          ((p = null), null != f && ((f = { ...f, details: g(f.details) }), e(), L.emitChange()));
                      }, 3e5)));
              })(),
              !0));
}
async function O() {
    if (!T && ((T = !0), (0, d.zN)("conjure_resume")))
        try {
            let [{ body: e }, { ensureConnection: t }] = await Promise.all([
                r.Bo.get({ url: E.Rsh.CONJURE_PROJECTS, rejectWithError: !0 }),
                Promise.all([
                    n.e("661008"),
                    n.e("916758"),
                    n.e("356664"),
                    n.e("473380"),
                    n.e("741111"),
                    n.e("722440"),
                    n.e("778042"),
                    n.e("623927"),
                    n.e("763096"),
                    n.e("736621"),
                    n.e("992166"),
                    n.e("534485"),
                    n.e("667034"),
                ]).then(n.bind(n, 889921)),
            ]);
            e.filter((e) => !0 === e.running)
                .slice(0, 5)
                .forEach((e) => t(e.id));
        } catch {
            T = !1;
        }
}
class R extends i.Ay.Store {
    static displayName = "ConjureRichPresenceStore";
    initialize() {
        this.syncWith([s.A, l.Ay, o.A, u.Ay, c.A], () => C({ withGracePeriod: !0 }));
    }
    getActivity() {
        return f;
    }
}
let L = new R(a.h, {
        CONNECTION_OPEN: () => C({ withGracePeriod: !1 }),
        POST_CONNECTION_OPEN: () => (O(), !1),
        LOGOUT: () => ((T = !1), N()),
    }),
    y = L;
