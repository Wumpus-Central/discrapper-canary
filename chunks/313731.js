n.d(t, { A: () => s });
var i = n(735438),
    r = n.n(i),
    a = n(636401),
    l = n(652215);
class s {
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
        if (null == e || e > l.dL4 || e < 1)
            throw new a.A({ closeCode: l.YI$.INVALID_VERSION }, `Invalid Version: ${e}`);
    }
}
