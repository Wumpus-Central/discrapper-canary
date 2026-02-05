n.d(t, { A: () => o });
var i = n(311907),
    r = n(73153);
let a = "UPDATE_NOT_AVAILABLE";
function l(e) {
    a = e.type;
}
class s extends i.Ay.Store {
    static displayName = "AutoUpdateStore";
    getState() {
        return a;
    }
}
let o = new s(r.h, {
    CHECKING_FOR_UPDATES: l,
    UPDATE_NOT_AVAILABLE: l,
    UPDATE_AVAILABLE: l,
    UPDATE_MANUALLY: l,
    UPDATE_ERROR: l,
    UPDATE_DOWNLOADED: l,
});
