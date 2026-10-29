n.d(t, { A: () => p });
var r = n(17928),
    i = n(73153),
    l = n(91242),
    u = n(818023);
let A = null,
    a = null,
    c = !1,
    d = !1;
class o extends r.Ay.Store {
    initialize() {
        this.waitFor(l.A);
    }
    getBuilderPreviewApplicationId() {
        return A;
    }
    getPhoneLensApplicationId() {
        return a;
    }
    getLastBuilderPreviewApplicationId() {
        return a;
    }
    isBuilderPreviewMobile() {
        return c;
    }
    isBuilderPreviewLandscape() {
        return d;
    }
}
let p = new o(i.h, {
    LOGOUT: function () {
        if (null == A && null == a && !c && !d) return !1;
        ((A = null), (a = null), (c = !1), (d = !1));
    },
    CONJURE_BUILDER_PREVIEW_APPLICATION_SET: function (e) {
        let { applicationId: t } = e;
        if (A === t) return !1;
        ((A = t), null != t && (a = t));
    },
    CONJURE_BUILDER_PREVIEW_MOBILE_SET: function (e) {
        let { enabled: t } = e;
        if (c === t) return !1;
        c = t;
    },
    CONJURE_BUILDER_PREVIEW_LANDSCAPE_SET: function (e) {
        let { landscape: t } = e;
        if (d === t) return !1;
        d = t;
    },
    FRAME_SET_ORIENTATION_LOCK_STATE: function (e) {
        let { frameId: t, lockState: n } = e;
        if (n !== u.N7.LANDSCAPE && n !== u.N7.PORTRAIT) return !1;
        let r = l.A.getFrame(t);
        if (null == r || r.applicationId !== a) return !1;
        let i = n === u.N7.LANDSCAPE;
        if (d === i) return !1;
        d = i;
    },
});
