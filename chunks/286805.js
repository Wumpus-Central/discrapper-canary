n.d(t, { A: () => s });
var i = n(311907),
    l = n(73153);
let a = { matureAgree: !1 };
class r extends i.Ay.Store {
    static displayName = "ApplicationStoreSettingsStore";
    get didMatureAgree() {
        return a.matureAgree;
    }
}
let s = new r(l.h, {
    APPLICATION_STORE_MATURE_AGREE: function () {
        a.matureAgree = !0;
    },
});
