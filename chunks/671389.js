n.d(t, { Ay: () => y });
var i = n(17928),
    r = n(73153),
    a = n(885576),
    s = n(309010),
    l = n(967198),
    o = n(97005),
    d = n(735769),
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
    if (a.A.isIdle() || (null != A && null == c.Ay.getProject(A))) return S();
    let n = (function () {
        let e = d.A.getShownProjectId();
        if (null != e) return null != c.Ay.getProject(e) ? e : null;
        let t = l.A.getGuildId(),
            n =
                c.Ay.getGlobalSelectedProjectId() ??
                (null != t && s.Ay.getChannelId() === E.VV.CONJURE ? c.Ay.getSelectedProjectId(t) : null);
        return null == n || null == c.Ay.getProject(n) ? null : n;
    })();
    return null == n
        ? null != h && t
            ? (null == f &&
                  (f = setTimeout(() => {
                      ((f = null), S() && L.emitChange());
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
                          ((I = null), null != h && ((h = { ...h, details: m(h.details) }), e(), L.emitChange()));
                      }, 3e5)));
              })(),
              !0));
}
async function C() {
    if ("success" !== c.Ay.getOwnedProjectsFetchState()) {
        let { listProjects: e } = await Promise.resolve().then(n.bind(n, 371169));
        (await e(),
            await new Promise((e) => {
                function t() {
                    let n = c.Ay.getOwnedProjectsFetchState();
                    ("success" === n || "error" === n) && (c.Ay.removeChangeListener(t), e());
                }
                (c.Ay.addChangeListener(t), t());
            }));
    }
    if ("success" !== c.Ay.getOwnedProjectsFetchState()) throw Error("Conjure projects fetch failed");
    return c.Ay.getOwnedProjects();
}
async function O() {
    if (!p && ((p = !0), (0, o.zN)("conjure_resume")))
        try {
            let [e, { ensureConnection: t }] = await Promise.all([
                C(),
                Promise.all([
                    n.e("661008"),
                    n.e("202622"),
                    n.e("916758"),
                    n.e("947802"),
                    n.e("741111"),
                    n.e("421060"),
                    n.e("778042"),
                    n.e("623927"),
                    n.e("763096"),
                    n.e("736621"),
                    n.e("534485"),
                    n.e("992166"),
                    n.e("667034"),
                    n.e("722440"),
                ]).then(n.bind(n, 889921)),
            ]);
            e.filter((e) => !0 === e.running)
                .slice(0, 5)
                .forEach((e) => t(e.id));
        } catch {
            p = !1;
        }
}
class R extends i.Ay.Store {
    static displayName = "ConjureRichPresenceStore";
    initialize() {
        this.syncWith([a.A, s.Ay, l.A, c.Ay, d.A], () => N({ withGracePeriod: !0 }));
    }
    getActivity() {
        return h;
    }
}
let L = new R(r.h, {
        CONNECTION_OPEN: () => N({ withGracePeriod: !1 }),
        POST_CONNECTION_OPEN: () => (O(), !1),
        LOGOUT: () => ((p = !1), S()),
    }),
    y = L;
