n.d(t, { A: () => c });
var o = n(435558),
    r = n.n(o),
    s = n(636401),
    i = n(652215);
class c {
    source;
    version;
    encoding;
    id = r().uniqueId();
    authorization = { authing: !1, scopes: [], accessToken: null, expires: new Date(0) };
    application = { id: null, name: null, icon: null };
    abortController = new AbortController();
    constructor(e, t, n) {
        (this.source = e), (this.version = t), (this.encoding = n), this.checkRpcVersion(t);
    }
    checkRpcVersion(e) {
        if (null == e || e > i.dL4 || e < 1)
            throw new s.A({ closeCode: i.YI$.INVALID_VERSION }, `Invalid Version: ${e}`);
    }
    get transport() {
        return this.source.type;
    }
}
