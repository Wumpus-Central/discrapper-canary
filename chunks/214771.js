"use strict";
n.d(t, { A: () => u });
var i = n(435558),
    r = n.n(i),
    a = n(937724),
    s = n(626584),
    l = n(967198),
    o = n(927813),
    d = n(723176);
let c = new s.A("NonGuildVersions"),
    u = new (class {
        constructor() {
            if (!(0, a.O)()) return;
            l.A.addChangeListener(
                r().throttle(() => {
                    d.A.database()?.transaction((e) => {
                        let t = l.A.getGuildId();
                        null == t || isNaN(Number(t))
                            ? d.A.nonGuildVersionsTransaction(e).delete("initial_guild_id")
                            : d.A.nonGuildVersionsTransaction(e).put({ id: "initial_guild_id", versionString: t });
                    });
                }, 10 * o.A.Millis.SECOND),
            );
        }
        actions = {
            CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
            BACKGROUND_SYNC: (e, t) => this.handleConnectionOpen(e, t),
        };
        async getCommittedVersions() {
            try {
                let e = d.A.nonGuildVersions();
                if (null == e) return {};
                let t = (await e.getMany()).map((e) => [e.id, "version" in e ? e.version : e.versionString]);
                return Object.fromEntries(t ?? []);
            } catch (e) {
                return c.warn("couldn't load guild versions", e), {};
            }
        }
        handleConnectionOpen(e, t) {
            null != e.apiCodeVersion &&
                d.A.nonGuildVersionsTransaction(t).put({ id: "api_code_version", version: e.apiCodeVersion });
        }
        resetInMemoryState() {}
    })();
