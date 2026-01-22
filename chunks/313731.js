n.d(t, {
    A: () => o,
});
var r = n(735438),
    i = n.n(r),
    l = n(636401),
    a = n(652215);

function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class o {
    checkRpcVersion(e) {
        if (null == e || e > a.dL4 || e < 1)
            throw new l.A(
                {
                    closeCode: a.YI$.INVALID_VERSION,
                },
                "Invalid Version: ".concat(e),
            );
    }
    constructor(e, t, n) {
        s(this, "transport", void 0),
            s(this, "version", void 0),
            s(this, "encoding", void 0),
            s(this, "id", void 0),
            s(this, "authorization", void 0),
            s(this, "application", void 0),
            s(this, "abortController", void 0),
            (this.transport = e),
            (this.version = t),
            (this.encoding = n),
            (this.id = i().uniqueId()),
            (this.authorization = {
                authing: !1,
                scopes: [],
                accessToken: null,
                expires: new Date(0),
            }),
            (this.application = {
                id: null,
                name: null,
                icon: null,
            }),
            (this.abortController = new AbortController()),
            this.checkRpcVersion(t);
    }
}
