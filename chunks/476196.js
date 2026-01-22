n.d(t, { A: () => p }), n(896048);
var r = n(735438),
    i = n.n(r),
    a = n(626584),
    s = n(617617),
    o = n(961350),
    l = n(723176),
    c = n(989950);
function u(e, t, n) {
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
let d = new a.A("UserSettingsProto");
class f {
    async getAll(e) {
        let t = performance.now(),
            n = await l.A.userSettings(e).getMany(),
            r = performance.now();
        d.verbose("loaded in ".concat(r - t, "ms (settings: ").concat(n.length, ")"));
        let i = {};
        for (let e of n) i[e.id] = e.value;
        return i;
    }
    resetInMemoryState() {}
    constructor() {
        u(this, "actions", {
            CONNECTION_OPEN: () => this.throttledOnChange(),
            USER_SETTINGS_PROTO_UPDATE: () => this.throttledOnChange(),
            USER_SETTINGS_PROTO_ENQUEUE_UPDATE: () => this.throttledOnChange(),
            USER_SETTINGS_PROTO_UPDATE_EDIT_INFO: () => this.throttledOnChange(),
        }),
            u(this, "handleUserSettingsProtoChange", () => {
                let e = o.default.getId(),
                    t = c.A.database(e);
                null == t ||
                    t.transaction((e) => {
                        var t, n;
                        let r = s.A.computeState(),
                            i = l.A.userSettingsTransaction(e);
                        for (let e in r)
                            i.put({
                                id: Number(e),
                                value: r[e],
                            });
                        let a = null != (t = null == (n = s.A.settings.versions) ? void 0 : n.dataVersion) ? t : -1;
                        l.A.nonGuildVersionsTransaction(e).put({
                            id: "user_settings_version",
                            version: a,
                        });
                    }, "handleUserSettingsProtoChange");
            }),
            u(this, "throttledOnChange", i().debounce(this.handleUserSettingsProtoChange, 0));
    }
}
let p = new f();
