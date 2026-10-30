n.d(t, { Ay: () => y });
var i = n(350835),
    r = n(17928),
    a = n(73153),
    s = n(885576),
    l = n(309010),
    o = n(967198),
    d = n(97005),
    c = n(735769),
    u = n(260498),
    _ = n(189117),
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
    let t = _.ZR.filter((t) => t !== e);
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
    if (s.A.isIdle() || (null != A && null == u.Ay.getProject(A))) return S();
    let n = (function () {
        let e = c.A.getShownProjectId();
        if (null != e) return null != u.Ay.getProject(e) ? e : null;
        let t = o.A.getGuildId(),
            n =
                u.Ay.getGlobalSelectedProjectId() ??
                (null != t && l.Ay.getChannelId() === E.VV.CONJURE ? u.Ay.getSelectedProjectId(t) : null);
        return null == n || null == u.Ay.getProject(n) ? null : n;
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
              (h = { type: i.$.PLAYING, name: _.Vb, details: m(), timestamps: { start: Date.now() } }),
              !(function e() {
                  (g(),
                      (I = setTimeout(() => {
                          ((I = null), null != h && ((h = { ...h, details: m(h.details) }), e(), L.emitChange()));
                      }, 3e5)));
              })(),
              !0));
}
async function C() {
    if ("success" !== u.Ay.getOwnedProjectsFetchState()) {
        let { listProjects: e } = await Promise.resolve().then(n.bind(n, 371169));
        (await e(),
            await new Promise((e) => {
                function t() {
                    let n = u.Ay.getOwnedProjectsFetchState();
                    ("success" === n || "error" === n) && (u.Ay.removeChangeListener(t), e());
                }
                (u.Ay.addChangeListener(t), t());
            }));
    }
    if ("success" !== u.Ay.getOwnedProjectsFetchState()) throw Error("Conjure projects fetch failed");
    return u.Ay.getOwnedProjects();
}
async function O() {
    if (!p && ((p = !0), (0, d.zN)("conjure_resume")))
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
                    n.e("11312"),
                    n.e("623927"),
                    n.e("763096"),
                    n.e("736621"),
                    n.e("534485"),
                    n.e("992166"),
                    n.e("667034"),
                    n.e("722440"),
                ]).then(n.bind(n, 322227)),
            ]);
            e.filter((e) => !0 === e.running)
                .slice(0, 5)
                .forEach((e) => t(e.id));
        } catch {
            p = !1;
        }
}
class R extends r.Ay.Store {
    static displayName = "ConjureRichPresenceStore";
    initialize() {
        this.syncWith([s.A, l.Ay, o.A, u.Ay, c.A], () => N({ withGracePeriod: !0 }));
    }
    getActivity() {
        return h;
    }
}
let L = new R(a.h, {
        CONNECTION_OPEN: () => N({ withGracePeriod: !1 }),
        POST_CONNECTION_OPEN: () => (O(), !1),
        LOGOUT: () => ((p = !1), S()),
    }),
    y = L;
