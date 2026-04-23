n.d(t, { A: () => o });
var i = n(139033),
    r = n(73153),
    a = n(272355),
    l = n(985018);
class s extends a.A {
    _initialize() {
        r.h.subscribe("POGGERMODE_TEMPORARILY_DISABLED", this.handlePoggermodeTemporarilyDisabled);
    }
    _terminate() {
        r.h.unsubscribe("POGGERMODE_TEMPORARILY_DISABLED", this.handlePoggermodeTemporarilyDisabled);
    }
    handlePoggermodeTemporarilyDisabled() {
        (0, i.A)({ title: l.intl.string(l.t.wDQgnX), subtitle: l.intl.string(l.t.OJklbS) });
    }
}
let o = new s();
