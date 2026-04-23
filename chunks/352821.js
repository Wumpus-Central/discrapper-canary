n.d(t, { A: () => g });
var i = n(17928),
    l = n(228366),
    s = n(591552),
    a = n(555337),
    r = n(539916);
let o = [],
    d = !1,
    c = [];
function u() {
    let e = a.A.getGuildId();
    if (null == e) {
        (o = []), (c = []), (d = !1);
        return;
    }
    (o = [...s.A.getConnections(e)]), (c = []), (d = !1);
}
class m extends i.Ay.Store {
    static displayName = "GuildSettingsOnboardingConnectionsStore";
    initialize() {
        this.waitFor(s.A, a.A);
    }
    getEditedConnections() {
        return o;
    }
    getErrors() {
        return c;
    }
    isSubmitting() {
        return d;
    }
    hasChanges() {
        let e = a.A.getGuildId();
        if (null == e) return !1;
        let t = s.A.getConnections(e);
        return (
            o.length !== t.length ||
            o.some((e, n) => {
                let i = t[n];
                return (
                    null == i ||
                    e.connection_type !== i.connection_type ||
                    e.application_id !== i.application_id ||
                    e.provider_id !== i.provider_id ||
                    e.description !== i.description
                );
            })
        );
    }
    showNotice() {
        return this.hasChanges();
    }
    hasValidationErrors() {
        return c.length > 0;
    }
}
let g = new m(l.h, {
    GUILD_SETTINGS_INIT: u,
    GUILD_SETTINGS_SET_SECTION: u,
    GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: u,
    GUILD_SETTINGS_ONBOARDING_CONNECTIONS_ADD: function (e) {
        let { connection: t } = e;
        if (o.length >= r.pA) {
            c = [`Maximum ${r.pA} connections allowed`];
            return;
        }
        (o = [...o, t]), (c = (0, r.n4)(o));
    },
    GUILD_SETTINGS_ONBOARDING_CONNECTIONS_REMOVE: function (e) {
        let { index: t } = e;
        (o = o.filter((e, n) => n !== t)), (c = (0, r.n4)(o));
    },
    GUILD_SETTINGS_ONBOARDING_CONNECTIONS_UPDATE: function (e) {
        let { index: t, updates: n } = e;
        (o = o.map((e, i) => (i === t ? { ...e, ...n } : e))), (c = (0, r.n4)(o));
    },
    GUILD_SETTINGS_ONBOARDING_CONNECTIONS_REORDER: function (e) {
        let { connections: t } = e;
        (o = [...t]), (c = (0, r.n4)(o));
    },
    GUILD_SETTINGS_ONBOARDING_CONNECTIONS_RESET: function () {
        let e = a.A.getGuildId();
        if (null == e) {
            (o = []), (c = []);
            return;
        }
        (o = [...s.A.getConnections(e)]), (c = []);
    },
    GUILD_SETTINGS_ONBOARDING_CONNECTIONS_SUBMIT: function () {
        (d = !0), (c = (0, r.n4)(o));
    },
    GUILD_SETTINGS_ONBOARDING_CONNECTIONS_SAVE_SUCCESS: function (e) {
        let { connections: t } = e;
        (d = !1), (c = []), (o = [...t]);
    },
    GUILD_SETTINGS_ONBOARDING_CONNECTIONS_SAVE_FAILED: function (e) {
        let { errors: t } = e;
        (d = !1), (c = t);
    },
});
