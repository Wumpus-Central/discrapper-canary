n.d(t, { A: () => l });
var i = n(435558),
    o = n.n(i),
    r = n(636401),
    s = n(652215);
class l {
    source;
    version;
    encoding;
    id = o().uniqueId();
    authorization = { authing: !1, scopes: new Set(), accessToken: null, expires: new Date(0) };
    application = { id: null, name: null, icon: null };
    abortController = new AbortController();
    constructor(e, t, n) {
        ((this.source = e), (this.version = t), (this.encoding = n), this.checkRpcVersion(t));
    }
    checkRpcVersion(e) {
        if (null == e || e > s.dL4 || e < 1)
            throw new r.A({ closeCode: s.YI$.INVALID_VERSION }, `Invalid Version: ${e}`);
    }
    get transport() {
        return this.source.type;
    }
}
