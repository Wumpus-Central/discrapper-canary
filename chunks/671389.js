n.d(t, { Ay: () => L });
var i = n(17928),
    r = n(636537),
    a = n(73153),
    s = n(885576),
    l = n(309010),
    o = n(967198),
    d = n(793480),
    c = n(260498),
    u = n(189117),
    _ = n(652215),
    E = n(746080);
let A = null,
    h = null,
    f = null,
    I = null,
    p = !1;
function T() {
    null != f && (clearTimeout(f), (f = null));
}
function m(e) {
    let t = u.ZR.filter((t) => t !== e);
    return t[Math.floor(Math.random() * t.length)];
}
function g() {
    null != I && (clearTimeout(I), (I = null));
}
function S() {
    return (T(), g(), (A = null), null != h && ((h = null), !0));
}
function N(e) {
    let { withGracePeriod: t } = e;
    if (s.A.isIdle() || (null != A && null == c.Ay.getProject(A))) return S();
    let n = (function () {
        if (l.Ay.getChannelId() !== E.VV.CONJURE) return null;
        let e = o.A.getGuildId();
        if (null == e) return null;
        let t = c.Ay.getSelectedProjectId(e);
        return null == t || null == c.Ay.getProject(t) ? null : t;
    })();
    return null == n
        ? null != h && t
            ? (null == f &&
                  (f = setTimeout(() => {
                      ((f = null), S() && R.emitChange());
                  }, 3e4)),
              !1)
            : S()
        : (T(),
          (n !== A || null == h) &&
              ((A = n),
              (h = { type: _.$pd.PLAYING, name: u.Vb, details: m(), timestamps: { start: Date.now() } }),
              !(function e() {
                  (g(),
                      (I = setTimeout(() => {
                          ((I = null), null != h && ((h = { ...h, details: m(h.details) }), e(), R.emitChange()));
                      }, 3e5)));
              })(),
              !0));
}
async function C() {
    if (!p && ((p = !0), (0, d.zN)("conjure_resume")))
        try {
            let [{ body: e }, { ensureConnection: t }] = await Promise.all([
                r.Bo.get({ url: _.Rsh.CONJURE_PROJECTS, rejectWithError: !0 }),
                Promise.all([
                    n.e("661008"),
                    n.e("265696"),
                    n.e("201050"),
                    n.e("356664"),
                    n.e("399624"),
                    n.e("722440"),
                    n.e("337341"),
                    n.e("405449"),
                    n.e("736621"),
                ]).then(n.bind(n, 723312)),
            ]);
            e.filter((e) => !0 === e.running)
                .slice(0, 5)
                .forEach((e) => t(e.id));
        } catch {
            p = !1;
        }
}
class O extends i.Ay.Store {
    static displayName = "ConjureRichPresenceStore";
    initialize() {
        this.syncWith([s.A, l.Ay, o.A, c.Ay], () => N({ withGracePeriod: !0 }));
    }
    getActivity() {
        return h;
    }
}
let R = new O(a.h, {
        CONNECTION_OPEN: () => N({ withGracePeriod: !1 }),
        POST_CONNECTION_OPEN: () => (C(), !1),
        LOGOUT: () => ((p = !1), S()),
    }),
    L = R;
