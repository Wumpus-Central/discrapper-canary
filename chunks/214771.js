"use strict";
n.d(t, { A: () => c });
var r = n(735438),
    i = n.n(r),
    s = n(937724),
    a = n(626584),
    o = n(967198),
    l = n(927813),
    u = n(723176);
let d = new a.A("NonGuildVersions"),
    c = new (class {
        constructor() {
            if (!(0, s.O)()) return;
            o.A.addChangeListener(
                i().throttle(() => {
                    u.A.database()?.transaction((e) => {
                        let t = o.A.getGuildId();
                        null == t || isNaN(Number(t))
                            ? u.A.nonGuildVersionsTransaction(e).delete("initial_guild_id")
                            : u.A.nonGuildVersionsTransaction(e).put({ id: "initial_guild_id", versionString: t });
                    });
                }, 10 * l.A.Millis.SECOND),
            );
        }
        actions = {
            CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
            BACKGROUND_SYNC: (e, t) => this.handleConnectionOpen(e, t),
        };
        async getCommittedVersions() {
            try {
                let e = u.A.nonGuildVersions();
                if (null == e) return {};
                let t = (await e.getMany()).map((e) => [e.id, "version" in e ? e.version : e.versionString]);
                return Object.fromEntries(t ?? []);
            } catch (e) {
                return d.warn("couldn't load guild versions", e), {};
            }
        }
        handleConnectionOpen(e, t) {
            null != e.apiCodeVersion &&
                u.A.nonGuildVersionsTransaction(t).put({ id: "api_code_version", version: e.apiCodeVersion });
        }
        resetInMemoryState() {}
    })();
