n.d(t, {
    A: () => _,
}),
    n(896048);
var r = n(735438),
    i = n.n(r),
    l = n(626584),
    s = n(617617),
    a = n(961350),
    o = n(723176),
    c = n(989950);

function d(e, t, n) {
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
let u = new l.A("UserSettingsProto"),
    _ = new (class {
        async getAll(e) {
            let t = performance.now(),
                n = await o.A.userSettings(e).getMany(),
                r = performance.now();
            u.verbose("loaded in ".concat(r - t, "ms (settings: ").concat(n.length, ")"));
            let i = {};
            for (let e of n) i[e.id] = e.value;
            return i;
        }
        resetInMemoryState() {}
        constructor() {
            d(this, "actions", {
                CONNECTION_OPEN: () => this.throttledOnChange(),
                USER_SETTINGS_PROTO_UPDATE: () => this.throttledOnChange(),
                USER_SETTINGS_PROTO_ENQUEUE_UPDATE: () => this.throttledOnChange(),
                USER_SETTINGS_PROTO_UPDATE_EDIT_INFO: () => this.throttledOnChange(),
            }),
                d(this, "handleUserSettingsProtoChange", () => {
                    let e = a.default.getId(),
                        t = c.A.database(e);
                    null == t ||
                        t.transaction((e) => {
                            var t, n;
                            let r = s.A.computeState(),
                                i = o.A.userSettingsTransaction(e);
                            for (let e in r)
                                i.put({
                                    id: Number(e),
                                    value: r[e],
                                });
                            let l = null != (t = null == (n = s.A.settings.versions) ? void 0 : n.dataVersion) ? t : -1;
                            o.A.nonGuildVersionsTransaction(e).put({
                                id: "user_settings_version",
                                version: l,
                            });
                        }, "handleUserSettingsProtoChange");
                }),
                d(this, "throttledOnChange", i().debounce(this.handleUserSettingsProtoChange, 0));
        }
    })();
