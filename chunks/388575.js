"use strict";
n.d(t, { A: () => o });
var i = n(724066),
    r = n(439372),
    s = n(822382);
class a extends r.A {
    actions = { USER_SETTINGS_PROTO_UPDATE: s.IY, POST_CONNECTION_OPEN: s.IY };
    _unsubscribeIntlLoadingStore;
    _initialize() {
        this._unsubscribeIntlLoadingStore = (0, i.I)(s.IY);
    }
    _terminate() {
        this._unsubscribeIntlLoadingStore?.();
    }
}
let o = new a();
