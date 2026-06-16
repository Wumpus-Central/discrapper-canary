"use strict";
n.d(t, { A: () => o });
var i = n(735438),
    r = n.n(i),
    s = n(636401),
    a = n(652215);
class o {
    transport;
    version;
    encoding;
    id = r().uniqueId();
    authorization = { authing: !1, scopes: [], accessToken: null, expires: new Date(0) };
    application = { id: null, name: null, icon: null };
    abortController = new AbortController();
    constructor(e, t, n) {
        (this.transport = e), (this.version = t), (this.encoding = n), this.checkRpcVersion(t);
    }
    checkRpcVersion(e) {
        if (null == e || e > a.dL4 || e < 1)
            throw new s.A({ closeCode: a.YI$.INVALID_VERSION }, `Invalid Version: ${e}`);
    }
}
