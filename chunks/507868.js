let i, r, a;
n.d(t, { A: () => u });
var s = n(17928),
    l = n(228366),
    o = n(287809);
function d() {
    ((i = new Map()), (r = !1), (a = !1));
}
d();
class c extends s.Ay.Store {
    static displayName = "ClipsAutoclipsCapabilitiesStore";
    initialize() {
        this.waitFor(o.default);
    }
    hasLoadedCapabilities() {
        return r;
    }
    getGameCapabilities() {
        return i;
    }
    getCapabilities(e) {
        return null == e ? 0 : (i.get(e) ?? 0);
    }
    isStaffBypassActive() {
        if (a) return !1;
        let e = o.default.getCurrentUser();
        return e?.isStaff() === !0 || e?.isStaffPersonal() === !0;
    }
    isStaffBypassDisabled() {
        return a;
    }
    isGameAllowed(e) {
        return !!this.isStaffBypassActive() || 0 !== this.getCapabilities(e);
    }
}
let u = new c(l.h, {
    CLIPS_AUTOCLIPS_CAPABILITIES_UPDATE: function (e) {
        let { gameId: t, capabilities: n } = e;
        ((i = new Map(i).set(t, n)), (r = !0));
    },
    CLIPS_AUTOCLIPS_STAFF_BYPASS_OVERRIDE: function (e) {
        let { disabled: t } = e;
        a = t;
    },
    LOGOUT: function () {
        d();
    },
});
