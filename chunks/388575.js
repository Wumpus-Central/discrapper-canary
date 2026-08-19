"use strict";
n.d(t, { A: () => l });
var i = n(724066),
    r = n(439372),
    a = n(822382);
class s extends r.A {
    actions = { USER_SETTINGS_PROTO_UPDATE: a.IY, POST_CONNECTION_OPEN: a.IY };
    _unsubscribeIntlLoadingStore;
    _initialize() {
        this._unsubscribeIntlLoadingStore = (0, i.I)(a.IY);
    }
    _terminate() {
        this._unsubscribeIntlLoadingStore?.();
    }
}
let l = new s();
