r.d(n, { A: () => d });
var t = r(17928),
    i = r(73153),
    l = r(91242),
    u = r(818023);
let a = null,
    o = null,
    c = !1,
    A = !1;
class p extends t.Ay.Store {
    initialize() {
        this.waitFor(l.A);
    }
    getBuilderPreviewApplicationId() {
        return a;
    }
    getPhoneLensApplicationId() {
        return o;
    }
    getLastBuilderPreviewApplicationId() {
        return o;
    }
    isBuilderPreviewMobile() {
        return c;
    }
    isBuilderPreviewLandscape() {
        return A;
    }
}
let d = new p(i.h, {
    LOGOUT: function () {
        if (null == a && null == o && !c && !A) return !1;
        ((a = null), (o = null), (c = !1), (A = !1));
    },
    CONJURE_BUILDER_PREVIEW_APPLICATION_SET: function (e) {
        let { applicationId: n } = e;
        if (a === n) return !1;
        ((a = n), null != n && (o = n));
    },
    CONJURE_BUILDER_PREVIEW_MOBILE_SET: function (e) {
        let { enabled: n } = e;
        if (c === n) return !1;
        c = n;
    },
    CONJURE_BUILDER_PREVIEW_LANDSCAPE_SET: function (e) {
        let { landscape: n } = e;
        if (A === n) return !1;
        A = n;
    },
    FRAME_SET_ORIENTATION_LOCK_STATE: function (e) {
        let { frameId: n, lockState: r } = e;
        if (r !== u.N7.LANDSCAPE && r !== u.N7.PORTRAIT) return !1;
        let t = l.A.getFrame(n);
        if (null == t || t.applicationId !== o) return !1;
        let i = r === u.N7.LANDSCAPE;
        if (A === i) return !1;
        A = i;
    },
});
