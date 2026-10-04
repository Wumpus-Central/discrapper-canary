n.d(t, { A: () => s });
var i = n(17928),
    r = n(73153);
let l = null,
    a = !1;
class o extends i.Ay.Store {
    getBuilderPreviewApplicationId() {
        return l;
    }
    isBuilderPreviewMobile() {
        return a;
    }
}
let s = new o(r.h, {
    LOGOUT: function () {
        if (null == l && !a) return !1;
        ((l = null), (a = !1));
    },
    VIBEGRATIONS_BUILDER_PREVIEW_APPLICATION_SET: function (e) {
        let { applicationId: t } = e;
        if (l === t) return !1;
        l = t;
    },
    VIBEGRATIONS_BUILDER_PREVIEW_MOBILE_SET: function (e) {
        let { enabled: t } = e;
        if (a === t) return !1;
        a = t;
    },
});
