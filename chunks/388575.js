"use strict";
n.d(t, { A: () => o });
var r = n(11057),
    i = n(439372),
    s = n(822382);
class a extends i.A {
    actions = { USER_SETTINGS_PROTO_UPDATE: s.IY, POST_CONNECTION_OPEN: s.IY };
    _unsubscribeIntlLoadingStore;
    _initialize() {
        this._unsubscribeIntlLoadingStore = (0, r.I)(s.IY);
    }
    _terminate() {
        this._unsubscribeIntlLoadingStore?.();
    }
}
let o = new a();
