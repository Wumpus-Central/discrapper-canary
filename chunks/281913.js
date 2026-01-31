n.d(t, {
    A: () => o,
});
var r = n(139033),
    i = n(73153),
    l = n(272355),
    a = n(985018);
class s extends l.A {
    _initialize() {
        i.h.subscribe("POGGERMODE_TEMPORARILY_DISABLED", this.handlePoggermodeTemporarilyDisabled);
    }
    _terminate() {
        i.h.unsubscribe("POGGERMODE_TEMPORARILY_DISABLED", this.handlePoggermodeTemporarilyDisabled);
    }
    handlePoggermodeTemporarilyDisabled() {
        (0, r.A)({
            title: a.intl.string(a.t.wDQgnX),
            subtitle: a.intl.string(a.t.OJklbS),
        });
    }
}
let o = new s();
