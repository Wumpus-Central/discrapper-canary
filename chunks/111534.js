n.d(t, { A: () => p });
var r = n(397962),
    i = n(17928),
    l = n(73153),
    u = n(91242);
let A = null,
    a = null,
    c = !1,
    o = !1;
class d extends i.Ay.Store {
    initialize() {
        this.waitFor(u.A);
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
        return o;
    }
}
let p = new d(l.h, {
    LOGOUT: function () {
        if (null == A && null == a && !c && !o) return !1;
        ((A = null), (a = null), (c = !1), (o = !1));
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
        if (o === t) return !1;
        o = t;
    },
    FRAME_SET_ORIENTATION_LOCK_STATE: function (e) {
        let { frameId: t, lockState: n } = e;
        if (n !== r.o.LANDSCAPE && n !== r.o.PORTRAIT) return !1;
        let i = u.A.getFrame(t);
        if (null == i || i.applicationId !== a) return !1;
        let l = n === r.o.LANDSCAPE;
        if (o === l) return !1;
        o = l;
    },
});
