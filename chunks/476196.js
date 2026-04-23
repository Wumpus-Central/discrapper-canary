n.d(t, { A: () => A });
var i = n(735438),
    r = n.n(i),
    a = n(626584),
    l = n(617617),
    s = n(961350),
    o = n(723176),
    d = n(989950);
let u = new a.A("UserSettingsProto");
class c {
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
        u.verbose(`loaded in ${i - t}ms (settings: ${n.length})`);
        let r = {};
        for (let e of n) r[e.id] = e.value;
        return r;
    }
    handleUserSettingsProtoChange = () => {
        let e = s.default.getId(),
            t = d.A.database(e);
        t?.transaction((e) => {
            let t = l.A.computeState(),
                n = o.A.userSettingsTransaction(e);
            for (let e in t) n.put({ id: Number(e), value: t[e] });
            let i = l.A.settings.versions?.dataVersion ?? -1;
            o.A.nonGuildVersionsTransaction(e).put({ id: "user_settings_version", version: i });
        }, "handleUserSettingsProtoChange");
    };
    throttledOnChange = r().debounce(this.handleUserSettingsProtoChange, 0);
    resetInMemoryState() {}
}
let A = new c();
