n(775443);
var i = n(350835),
    r = n(855986),
    a = n(73153),
    s = n(46653),
    l = n(885576),
    o = n(309010),
    d = n(967198),
    c = n(513425),
    u = n(886540),
    _ = n(499466),
    E = n(735769),
    A = n(260498),
    f = n(313537),
    h = n(189117),
    I = n(746080);
let p = null,
    m = null,
    T = null,
    g = null,
    S = !1;
function N() {
    null != T && (clearTimeout(T), (T = null));
}
function C(e) {
    let t = h.ZR.filter((t) => t !== e);
    return t[Math.floor(Math.random() * t.length)];
}
function O() {
    null != g && (clearTimeout(g), (g = null));
}
function R() {
    return (N(), O(), (p = null), null != m && ((m = null), !0));
}
function L(e) {
    if (null == m || (m.party?.id ?? null) === e) return !1;
    let { party: t, ...n } = m;
    return ((m = null != e ? { ...n, party: { id: e } } : n), !0);
}
function y(e) {
    let { withGracePeriod: t } = e;
    if (l.A.isIdle() || (null != p && null == A.Ay.getProject(p))) return R();
    let n = (function () {
        let e = E.A.getShownProjectId();
        if (null != e) return null != A.Ay.getProject(e) ? e : null;
        let t = d.A.getGuildId(),
            n =
                A.Ay.getGlobalSelectedProjectId() ??
                (null != t && o.Ay.getChannelId() === I.VV.CONJURE ? A.Ay.getSelectedProjectId(t) : null);
        return null == n || null == A.Ay.getProject(n) ? null : n;
    })();
    if (null == n)
        return null != m && t
            ? (null == T &&
                  (T = setTimeout(() => {
                      ((T = null), R() && b.emitChange());
                  }, 3e4)),
              !1)
            : R();
    N();
    let r = (function (e) {
        let t = A.Ay.getProject(e);
        if (null == t || null == (0, f.DC)(t)) return null;
        let n = c.A.getMessages(e),
            i = (0, u.Ji)(n);
        if (null == i) return null;
        let r = n.slice(0, n.lastIndexOf(i)).findLast((e) => "user" === e.role);
        return (r?.user_id ?? t.owner_user_id) === s.default.getId() ? e : null;
    })(n);
    return n === p && null != m
        ? L(r)
        : ((p = n),
          (m = { type: i.$.PLAYING, name: h.Vb, details: C(), timestamps: { start: Date.now() } }),
          L(r),
          !(function e() {
              (O(),
                  (g = setTimeout(() => {
                      ((g = null), null != m && ((m = { ...m, details: C(m.details) }), e(), b.emitChange()));
                  }, 3e5)));
          })(),
          !0);
}
class D extends r.Ay.Store {
    static displayName = "ConjureRichPresenceStore";
    initialize() {
        (this.waitFor(s.default, c.A, E.A, A.Ay, l.A, o.Ay, d.A),
            this.syncWith([l.A, o.Ay, d.A, A.Ay, E.A, c.A], () => y({ withGracePeriod: !0 })));
    }
    getActivity() {
        return m;
    }
}
let b = new D(a.h, {
    CONNECTION_OPEN: () => y({ withGracePeriod: !1 }),
    POST_CONNECTION_OPEN: () => (
        !(async function () {
            if (!S && ((S = !0), (0, _.zN)("conjure_resume")))
                try {
                    let [e, { ensureConnection: t }] = await Promise.all([
                        (async function () {
                            if ("success" !== A.Ay.getOwnedProjectsFetchState()) {
                                let { listProjects: e } = await Promise.resolve().then(n.bind(n, 233470));
                                (await e(),
                                    await new Promise((e) => {
                                        function t() {
                                            let n = A.Ay.getOwnedProjectsFetchState();
                                            ("success" === n || "error" === n) && (A.Ay.removeChangeListener(t), e());
                                        }
                                        (A.Ay.addChangeListener(t), t());
                                    }));
                            }
                            if ("success" !== A.Ay.getOwnedProjectsFetchState())
                                throw Error("Conjure projects fetch failed");
                            return A.Ay.getOwnedProjects();
                        })(),
                        Promise.all([
                            n.e(661008),
                            n.e(916758),
                            n.e(356664),
                            n.e(741111),
                            n.e(421060),
                            n.e(763096),
                            n.e(386594),
                            n.e(967874),
                            n.e(736621),
                            n.e(117928),
                        ]).then(n.bind(n, 540665)),
                    ]);
                    e.filter((e) => !0 === e.running)
                        .slice(0, 5)
                        .forEach((e) => t(e.id));
                } catch {
                    S = !1;
                }
        })(),
        !1
    ),
    LOGOUT: () => ((S = !1), R()),
});
n.d(t, {}, { Ay: b });
