var t = a(582128),
    o = a(855986),
    n = a(506774),
    i = a(73153);
let s = "GlobalBannerAppPreview.v12";
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
    if ((e && null != v.pending && g({ ...v, pending: null }), e !== p)) for (let l of ((p = e), b)) l();
}
let h = new Set(),
    v = { pending: null, replayId: 0 },
    x = 0;
function f(e) {
    return (
        h.add(e),
        () => {
            h.delete(e);
        }
    );
}
function g(e) {
    for (let l of ((v = e), h)) l();
}
function V(e) {
    p || g({ ...v, pending: { action: e, id: ++x } });
}
a.d(
    l,
    {},
    {
        Ay: u,
        HF: function () {
            return t.useSyncExternalStore(f, () => v);
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
            let { pending: e } = v;
            null != e && g({ pending: null, replayId: "replay" === e.action ? e.id : v.replayId });
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
