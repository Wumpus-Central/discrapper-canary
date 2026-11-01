n.d(t, { A: () => f });
var r = n(397962),
    u = n(17928),
    l = n(73153),
    i = n(91242);
let a = null,
    c = null,
    o = !1,
    A = !1;
class d extends u.Ay.Store {
    initialize() {
        this.waitFor(i.A);
    }
    getBuilderPreviewApplicationId() {
        return a;
    }
    getPhoneLensApplicationId() {
        return c;
    }
    getLastBuilderPreviewApplicationId() {
        return c;
    }
    isBuilderPreviewMobile() {
        return o;
    }
    isBuilderPreviewLandscape() {
        return A;
    }
}
let f = new d(l.h, {
    LOGOUT: function () {
        if (null == a && null == c && !o && !A) return !1;
        ((a = null), (c = null), (o = !1), (A = !1));
    },
    CONJURE_BUILDER_PREVIEW_APPLICATION_SET: function (e) {
        let { applicationId: t } = e;
        if (a === t) return !1;
        ((a = t), null != t && (c = t));
    },
    CONJURE_BUILDER_PREVIEW_MOBILE_SET: function (e) {
        let { enabled: t } = e;
        if (o === t) return !1;
        o = t;
    },
    CONJURE_BUILDER_PREVIEW_LANDSCAPE_SET: function (e) {
        let { landscape: t } = e;
        if (A === t) return !1;
        A = t;
    },
    FRAME_SET_ORIENTATION_LOCK_STATE: function (e) {
        let { frameId: t, lockState: n } = e;
        if (n !== r.o.LANDSCAPE && n !== r.o.PORTRAIT) return !1;
        let u = i.A.getFrame(t);
        if (null == u || u.applicationId !== c) return !1;
        let l = n === r.o.LANDSCAPE;
        if (A === l) return !1;
        A = l;
    },
});
