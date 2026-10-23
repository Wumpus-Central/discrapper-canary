t.d(e, { A: () => s });
var r = t(17928),
    i = t(73153),
    l = t(91242),
    u = t(818023);
let a = null,
    o = null,
    c = !1,
    A = !1;
class p extends r.Ay.Store {
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
let s = new p(i.h, {
    LOGOUT: function () {
        if (null == a && null == o && !c && !A) return !1;
        ((a = null), (o = null), (c = !1), (A = !1));
    },
    CONJURE_BUILDER_PREVIEW_APPLICATION_SET: function (n) {
        let { applicationId: e } = n;
        if (a === e) return !1;
        ((a = e), null != e && (o = e));
    },
    CONJURE_BUILDER_PREVIEW_MOBILE_SET: function (n) {
        let { enabled: e } = n;
        if (c === e) return !1;
        c = e;
    },
    CONJURE_BUILDER_PREVIEW_LANDSCAPE_SET: function (n) {
        let { landscape: e } = n;
        if (A === e) return !1;
        A = e;
    },
    FRAME_SET_ORIENTATION_LOCK_STATE: function (n) {
        let { frameId: e, lockState: t } = n;
        if (t !== u.N7.LANDSCAPE && t !== u.N7.PORTRAIT) return !1;
        let r = l.A.getFrame(e);
        if (null == r || r.applicationId !== o) return !1;
        let i = t === u.N7.LANDSCAPE;
        if (A === i) return !1;
        A = i;
    },
});
