n.d(t, { A: () => u, U: () => o });
var i = n(735438),
    s = n.n(i),
    l = n(17928),
    r = n(228366),
    a = n(513461);
let o = { version: "", description: "", formFields: [] },
    c = {};
class d extends l.Ay.Store {
    static displayName = "MemberVerificationFormStore";
    get(e) {
        if (null != e) return c[e];
    }
    getRulesPrompt(e) {
        return s().find(c[e]?.formFields, a.i7);
    }
}
let u = new d(r.h, {
    INVITE_ACCEPT_SUCCESS: function (e) {
        let { invite: t } = e,
            { member_verification_form: n } = t,
            { guild: i } = t;
        return (
            null != i &&
            null != n &&
            ((c[i.id] = { version: n.version, description: n.description ?? "", formFields: n.form_fields, guild: i }),
            !0)
        );
    },
    MEMBER_VERIFICATION_FORM_UPDATE: function (e) {
        let { form: t, guildId: n } = e;
        if (null == t) c[n] = o;
        else {
            let e = c[n] ?? o;
            c[n] = { ...e, ...t };
        }
    },
    MEMBER_VERIFICATION_FORM_FETCH_FAIL: function (e) {
        let { guildId: t } = e;
        c[t] = c[t] ?? o;
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        delete c[t?.id];
    },
});
