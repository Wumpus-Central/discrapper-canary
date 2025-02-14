n.d(t, { Z: () => m }), n(47120);
var i = n(392711),
    s = n.n(i),
    r = n(710845),
    l = n(581883),
    a = n(314897),
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
let u = new r.Z('UserSettingsProto'),
    m = new (class {
        async getAll(e) {
            let t = performance.now(),
                n = await o.Z.userSettings(e).getMany(),
                i = performance.now();
            u.verbose('loaded in '.concat(i - t, 'ms (settings: ').concat(n.length, ')'));
            let s = {};
            for (let e of n) s[e.id] = e.value;
            return s;
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
                    let e = a.default.getId(),
                        t = c.Z.database(e);
                    null == t ||
                        t.transaction((e) => {
                            var t, n;
                            let i = l.Z.computeState(),
                                s = o.Z.userSettingsTransaction(e);
                            for (let e in i)
                                s.put({
                                    id: Number(e),
                                    value: i[e]
                                });
                            let r = null !== (n = null === (t = l.Z.settings.versions) || void 0 === t ? void 0 : t.dataVersion) && void 0 !== n ? n : -1;
                            o.Z.nonGuildVersionsTransaction(e).put({
                                id: 'user_settings_version',
                                version: r
                            });
                        }, 'handleUserSettingsProtoChange');
                }),
                d(this, 'throttledOnChange', s().debounce(this.handleUserSettingsProtoChange, 0));
        }
    })();
