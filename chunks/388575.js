"use strict";
n.d(t, { A: () => o });
var r = n(11057),
    i = n(439372),
    a = n(822382);
class s extends i.A {
    actions = { USER_SETTINGS_PROTO_UPDATE: a.IY, POST_CONNECTION_OPEN: a.IY };
    _unsubscribeIntlLoadingStore;
    _initialize() {
        this._unsubscribeIntlLoadingStore = (0, r.I)(a.IY);
    }
    _terminate() {
        this._unsubscribeIntlLoadingStore?.();
    }
}
let o = new s();
