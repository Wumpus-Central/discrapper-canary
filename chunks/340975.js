var t = a(582128),
    o = a(855986),
    n = a(506774),
    i = a(73153);
let s = "GlobalBannerAppPreview.v5";
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
let u = new r(i.h),
    d = 221552 == a.j ? u : null,
    c = new Set(),
    b = !1;
function p(e) {
    return (
        c.add(e),
        () => {
            c.delete(e);
        }
    );
}
function m(e) {
    if (e !== b) for (let l of ((b = e), c)) l();
}
a.d(
    l,
    {},
    {
        Ay: d,
        XP: function () {
            return (0, o.bG)([u], () => u.getConfig());
        },
        aL: function () {
            (u.setConfig(null), m(!1));
        },
        dR: function () {
            return t.useSyncExternalStore(p, () => b);
        },
        nh: function (e) {
            u.setConfig(e);
        },
        s2: m,
    },
);
