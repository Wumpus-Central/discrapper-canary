n.d(t, { A: () => _ });
var i = n(17928),
    r = n(73153),
    a = n(91242),
    s = n(818023);
let l = null,
    o = null,
    d = !1,
    c = !1;
class u extends i.Ay.Store {
    initialize() {
        this.waitFor(a.A);
    }
    getBuilderPreviewApplicationId() {
        return l;
    }
    getPhoneLensApplicationId() {
        return o;
    }
    isBuilderPreviewMobile() {
        return d;
    }
    isBuilderPreviewLandscape() {
        return c;
    }
}
let _ = new u(r.h, {
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
        if (n !== s.N7.LANDSCAPE && n !== s.N7.PORTRAIT) return !1;
        let i = a.A.getFrame(t);
        if (null == i || i.applicationId !== o) return !1;
        let r = n === s.N7.LANDSCAPE;
        if (c === r) return !1;
        c = r;
    },
});
