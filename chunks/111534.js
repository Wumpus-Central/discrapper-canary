n.d(t, { A: () => f });
var i = n(17928),
    r = n(73153),
    l = n(91242),
    a = n(818023);
let o = null,
    s = null,
    u = !1,
    d = !1;
class c extends i.Ay.Store {
    initialize() {
        this.waitFor(l.A);
    }
    getBuilderPreviewApplicationId() {
        return o;
    }
    getPhoneLensApplicationId() {
        return s;
    }
    isBuilderPreviewMobile() {
        return u;
    }
    isBuilderPreviewLandscape() {
        return d;
    }
}
let f = new c(r.h, {
    LOGOUT: function () {
        if (null == o && null == s && !u && !d) return !1;
        ((o = null), (s = null), (u = !1), (d = !1));
    },
    CONJURE_BUILDER_PREVIEW_APPLICATION_SET: function (e) {
        let { applicationId: t } = e;
        if (o === t) return !1;
        ((o = t), null != t && (s = t));
    },
    CONJURE_BUILDER_PREVIEW_MOBILE_SET: function (e) {
        let { enabled: t } = e;
        if (u === t) return !1;
        u = t;
    },
    CONJURE_BUILDER_PREVIEW_LANDSCAPE_SET: function (e) {
        let { landscape: t } = e;
        if (d === t) return !1;
        d = t;
    },
    FRAME_SET_ORIENTATION_LOCK_STATE: function (e) {
        let { frameId: t, lockState: n } = e;
        if (n !== a.N7.LANDSCAPE && n !== a.N7.PORTRAIT) return !1;
        let i = l.A.getFrame(t);
        if (null == i || i.applicationId !== s) return !1;
        let r = n === a.N7.LANDSCAPE;
        if (d === r) return !1;
        d = r;
    },
});
