n.d(t, { Z: () => p }), n(388685);
var r = n(392711),
    i = n.n(r),
    a = n(710845),
    o = n(581883),
    s = n(314897),
    l = n(287328),
    c = n(261875);
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
let d = new a.Z("UserSettingsProto");
class f {
    async getAll(e) {
        let t = performance.now(),
            n = await l.Z.userSettings(e).getMany(),
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
                let e = s.default.getId(),
                    t = c.Z.database(e);
                null == t ||
                    t.transaction((e) => {
                        var t, n;
                        let r = o.Z.computeState(),
                            i = l.Z.userSettingsTransaction(e);
                        for (let e in r)
                            i.put({
                                id: Number(e),
                                value: r[e],
                            });
                        let a = null != (n = null == (t = o.Z.settings.versions) ? void 0 : t.dataVersion) ? n : -1;
                        l.Z.nonGuildVersionsTransaction(e).put({
                            id: "user_settings_version",
                            version: a,
                        });
                    }, "handleUserSettingsProtoChange");
            }),
            u(this, "throttledOnChange", i().debounce(this.handleUserSettingsProtoChange, 0));
    }
}
let p = new f();
