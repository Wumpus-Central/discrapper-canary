n.d(t, { A: () => l });
var i = n(735438),
    a = n.n(i),
    r = n(636401),
    s = n(652215);
class l {
    transport;
    version;
    encoding;
    id = a().uniqueId();
    authorization = { authing: !1, scopes: [], accessToken: null, expires: new Date(0) };
    application = { id: null, name: null, icon: null };
    abortController = new AbortController();
    constructor(e, t, n) {
        (this.transport = e), (this.version = t), (this.encoding = n), this.checkRpcVersion(t);
    }
    checkRpcVersion(e) {
        if (null == e || e > s.dL4 || e < 1)
            throw new r.A({ closeCode: s.YI$.INVALID_VERSION }, `Invalid Version: ${e}`);
    }
}
