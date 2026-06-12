t.d(i, { A: () => f, U: () => d });
var n = t(735438),
    r = t.n(n),
    l = t(17928),
    s = t(228366),
    o = t(513461);
let d = { version: "", description: "", formFields: [] },
    c = {};
class u extends l.Ay.Store {
    static displayName = "MemberVerificationFormStore";
    get(e) {
        if (null != e) return c[e];
    }
    getRulesPrompt(e) {
        return r().find(c[e]?.formFields, o.i7);
    }
}
let f = new u(s.h, {
    INVITE_ACCEPT_SUCCESS: function (e) {
        let { invite: i } = e,
            { member_verification_form: t } = i,
            { guild: n } = i;
        return (
            null != n &&
            null != t &&
            ((c[n.id] = { version: t.version, description: t.description ?? "", formFields: t.form_fields, guild: n }),
            !0)
        );
    },
    MEMBER_VERIFICATION_FORM_UPDATE: function (e) {
        let { form: i, guildId: t } = e;
        if (null == i) c[t] = d;
        else {
            let e = c[t] ?? d;
            c[t] = { ...e, ...i };
        }
    },
    MEMBER_VERIFICATION_FORM_FETCH_FAIL: function (e) {
        let { guildId: i } = e;
        c[i] = c[i] ?? d;
    },
    GUILD_DELETE: function (e) {
        let { guild: i } = e;
        delete c[i?.id];
    },
});
