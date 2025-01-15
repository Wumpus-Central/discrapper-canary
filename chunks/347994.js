n(47120);
var i = n(392711),
    r = n.n(i),
    s = n(710845),
    a = n(581883),
    l = n(314897),
    o = n(287328),
    c = n(261875);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let u = new s.Z('UserSettingsProto');
t.Z = new (class e {
    async getAll(e) {
        let t = performance.now(),
            n = await o.Z.userSettings(e).getMany(),
            i = performance.now();
        u.verbose('loaded in '.concat(i - t, 'ms (settings: ').concat(n.length, ')'));
        let r = {};
        for (let e of n) r[e.id] = e.value;
        return r;
    }
    resetInMemoryState() {}
    constructor() {
        d(this, 'actions', {
            CONNECTION_OPEN: () => this.throttledOnChange(),
            USER_SETTINGS_PROTO_UPDATE: () => this.throttledOnChange(),
            USER_SETTINGS_PROTO_ENQUEUE_UPDATE: () => this.throttledOnChange(),
            USER_SETTINGS_PROTO_UPDATE_EDIT_INFO: () => this.throttledOnChange()
        }),
            d(this, 'handleUserSettingsProtoChange', () => {
                let e = l.default.getId(),
                    t = c.Z.database(e);
                null == t ||
                    t.transaction((e) => {
                        var t, n;
                        let i = a.Z.computeState(),
                            r = o.Z.userSettingsTransaction(e);
                        for (let e in i)
                            r.put({
                                id: Number(e),
                                value: i[e]
                            });
                        let s = null !== (n = null === (t = a.Z.settings.versions) || void 0 === t ? void 0 : t.dataVersion) && void 0 !== n ? n : -1;
                        o.Z.nonGuildVersionsTransaction(e).put({
                            id: 'user_settings_version',
                            version: s
                        });
                    }, 'handleUserSettingsProtoChange');
            }),
            d(this, 'throttledOnChange', r().debounce(this.handleUserSettingsProtoChange, 0));
    }
})();
