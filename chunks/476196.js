n.d(t, { A: () => _ });
var i = n(735438),
    s = n.n(i),
    r = n(626584),
    a = n(617617),
    l = n(961350),
    o = n(723176),
    c = n(989950);
let d = new r.A("UserSettingsProto");
class u {
    actions = {
        CONNECTION_OPEN: () => this.throttledOnChange(),
        USER_SETTINGS_PROTO_UPDATE: () => this.throttledOnChange(),
        USER_SETTINGS_PROTO_ENQUEUE_UPDATE: () => this.throttledOnChange(),
        USER_SETTINGS_PROTO_UPDATE_EDIT_INFO: () => this.throttledOnChange(),
    };
    async getAll(e) {
        let t = performance.now(),
            n = await o.A.userSettings(e).getMany(),
            i = performance.now();
        d.verbose(`loaded in ${i - t}ms (settings: ${n.length})`);
        let s = {};
        for (let e of n) s[e.id] = e.value;
        return s;
    }
    handleUserSettingsProtoChange = () => {
        let e = l.default.getId(),
            t = c.A.database(e);
        t?.transaction((e) => {
            let t = a.A.computeState(),
                n = o.A.userSettingsTransaction(e);
            for (let e in t) n.put({ id: Number(e), value: t[e] });
            let i = a.A.settings.versions?.dataVersion ?? -1;
            o.A.nonGuildVersionsTransaction(e).put({ id: "user_settings_version", version: i });
        }, "handleUserSettingsProtoChange");
    };
    throttledOnChange = s().debounce(this.handleUserSettingsProtoChange, 0);
    resetInMemoryState() {}
}
let _ = new u();
