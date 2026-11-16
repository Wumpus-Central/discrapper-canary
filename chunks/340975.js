var t = a(582128),
    o = a(855986),
    n = a(506774),
    i = a(73153);
let s = "GlobalBannerAppPreview.v10";
class r extends o.Ay.Store {
    static displayName = "GlobalBannerPreviewStore";
    config;
    getConfig() {
        return (void 0 === this.config && (this.config = n.w.get(s) ?? null), this.config);
    }
    setConfig(e) {
        ((this.config = e), null == e ? n.w.remove(s) : n.w.set(s, e), this.emitChange());
    }
}
let d = new r(i.h),
    u = 221552 == a.j ? d : null;
function c(e) {
    d.setConfig(e);
}
let b = new Set(),
    p = !1;
function m(e) {
    return (
        b.add(e),
        () => {
            b.delete(e);
        }
    );
}
function y(e) {
    if ((e && null != h.pending && g({ ...h, pending: null }), e !== p)) for (let l of ((p = e), b)) l();
}
let v = new Set(),
    h = { pending: null, replayId: 0 },
    x = 0;
function f(e) {
    return (
        v.add(e),
        () => {
            v.delete(e);
        }
    );
}
function g(e) {
    for (let l of ((h = e), v)) l();
}
function V(e) {
    p || g({ ...h, pending: { action: e, id: ++x } });
}
a.d(
    l,
    {},
    {
        Ay: u,
        HF: function () {
            return t.useSyncExternalStore(f, () => h);
        },
        MF: function () {
            V("hide");
        },
        XP: function () {
            return (0, o.bG)([d], () => d.getConfig());
        },
        aL: function () {
            (d.setConfig(null), y(!1));
        },
        dR: function () {
            return t.useSyncExternalStore(m, () => p);
        },
        gQ: function () {
            let { pending: e } = h;
            null != e && g({ pending: null, replayId: "replay" === e.action ? e.id : h.replayId });
        },
        iM: function (e) {
            return e?.isStaff() === !0 || e?.isStaffPersonal() === !0;
        },
        nb: function (e) {
            (c(e), V("replay"));
        },
        nh: c,
        s2: y,
    },
);
