n.d(t, {
    A: () => p,
    U: () => d,
}),
    n(228524);
var r,
    i = n(735438),
    l = n.n(i),
    s = n(311907),
    c = n(73153),
    a = n(513461);

function o(e, t, n) {
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
let d = {
        version: "",
        description: "",
        formFields: [],
    },
    u = {};
class f extends (r = s.Ay.Store) {
    get(e) {
        if (null != e) return u[e];
    }
    getRulesPrompt(e) {
        var t;
        return l().find(null == (t = u[e]) ? void 0 : t.formFields, a.i7);
    }
}
o(f, "displayName", "MemberVerificationFormStore");
let p = new f(c.h, {
    INVITE_ACCEPT_SUCCESS: function (e) {
        let { invite: t } = e,
            { member_verification_form: n } = t,
            { guild: r } = t;
        if (null != r && null != n) {
            var i;
            return (
                (u[r.id] = {
                    version: n.version,
                    description: null != (i = n.description) ? i : "",
                    formFields: n.form_fields,
                    guild: r,
                }),
                !0
            );
        }
        return !1;
    },
    MEMBER_VERIFICATION_FORM_UPDATE: function (e) {
        let { form: t, guildId: n } = e;
        if (null == t) u[n] = d;
        else {
            var r;
            let e = null != (r = u[n]) ? r : d;
            u[n] = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        r.forEach(function (t) {
                            o(e, t, n[t]);
                        });
                }
                return e;
            })({}, e, t);
        }
    },
    MEMBER_VERIFICATION_FORM_FETCH_FAIL: function (e) {
        var t;
        let { guildId: n } = e;
        u[n] = null != (t = u[n]) ? t : d;
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        delete u[null == t ? void 0 : t.id];
    },
});
