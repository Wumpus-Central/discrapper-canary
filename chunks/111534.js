n.d(t, { A: () => _ });
var i = n(397962),
    r = n(17928),
    a = n(73153),
    s = n(91242);
let l = null,
    o = null,
    d = !1,
    c = !1;
class u extends r.Ay.Store {
    initialize() {
        this.waitFor(s.A);
    }
    getBuilderPreviewApplicationId() {
        return l;
    }
    getPhoneLensApplicationId() {
        return o;
    }
    getLastBuilderPreviewApplicationId() {
        return o;
    }
    isBuilderPreviewMobile() {
        return d;
    }
    isBuilderPreviewLandscape() {
        return c;
    }
}
let _ = new u(a.h, {
    LOGOUT: function () {
        if (null == l && null == o && !d && !c) return !1;
        ((l = null), (o = null), (d = !1), (c = !1));
    },
    CONJURE_BUILDER_PREVIEW_APPLICATION_SET: function (e) {
        let { applicationId: t } = e;
        if (l === t) return !1;
        ((l = t), null != t && (o = t));
    },
    CONJURE_BUILDER_PREVIEW_MOBILE_SET: function (e) {
        let { enabled: t } = e;
        if (d === t) return !1;
        d = t;
    },
    CONJURE_BUILDER_PREVIEW_LANDSCAPE_SET: function (e) {
        let { landscape: t } = e;
        if (c === t) return !1;
        c = t;
    },
    FRAME_SET_ORIENTATION_LOCK_STATE: function (e) {
        let { frameId: t, lockState: n } = e;
        if (n !== i.o.LANDSCAPE && n !== i.o.PORTRAIT) return !1;
        let r = s.A.getFrame(t);
        if (null == r || r.applicationId !== o) return !1;
        let a = n === i.o.LANDSCAPE;
        if (c === a) return !1;
        c = a;
    },
});
