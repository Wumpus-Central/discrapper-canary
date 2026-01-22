n.d(t, { Ay: () => I }), n(228524);
var r = n(562465),
    i = n(73153),
    a = n(157559),
    s = n(442433),
    o = n(198982),
    l = n(9994),
    c = n(529942),
    u = n(164956),
    d = n(21599),
    f = n(696451),
    p = n(299091),
    _ = n(287809),
    h = n(954571),
    m = n(513461),
    g = n(652215),
    E = n(985018);
function b(e, t, n) {
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
function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let v = -1;
function S(e) {
    i.h.dispatch({
        type: "USER_GUILD_JOIN_REQUEST_COACHMARK_SHOW",
        guildId: e,
    });
}
let I = {
    fetchVerificationForm: async (e, t) => {
        let n = null != t ? t : p.A.getInviteKeyForGuildId(e),
            a = _.default.getCurrentUser(),
            s = !f.Ay.isMember(e, null == a ? void 0 : a.id);
        try {
            let t = await r.Bo.get({
                url: g.Rsh.GUILD_MEMBER_VERIFICATION(e),
                query: {
                    with_guild: s,
                    invite_code: null != n ? (0, d.m0)(n) : void 0,
                },
                oldFormErrors: !0,
                rejectWithError: !1,
            });
            if (null == t.body) throw t;
            let { body: a } = t;
            return (
                i.h.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: a.version,
                        description: a.description,
                        formFields: a.form_fields,
                        guild: a.guild,
                        profile: null != a.profile ? (0, l.wr)(a.profile) : null,
                    },
                }),
                a
            );
        } catch (t) {
            i.h.dispatch({
                type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL",
                guildId: e,
            });
        }
    },
    updateVerificationForm: async (e, t, n, a) => {
        let { body: s } = await r.Bo.patch({
            url: g.Rsh.GUILD_MEMBER_VERIFICATION(e),
            body: {
                form_fields: t,
                enabled: n,
                bulk_action: a,
            },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        i.h.dispatch({
            type: "MEMBER_VERIFICATION_FORM_UPDATE",
            guildId: e,
            form: {
                version: s.version,
                description: s.description,
                formFields: s.form_fields,
            },
        });
    },
    updateVerificationFormFieldsLocal: (e, t) => {
        i.h.dispatch({
            type: "MEMBER_VERIFICATION_FORM_UPDATE",
            guildId: e,
            form: { formFields: t },
            isLocalUpdate: !0,
        });
    },
    updateVerificationFormDescription: async (e, t) => {
        let { body: n } = await r.Bo.patch({
            url: g.Rsh.GUILD_MEMBER_VERIFICATION(e),
            body: { description: t },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        i.h.dispatch({
            type: "MEMBER_VERIFICATION_FORM_UPDATE",
            guildId: e,
            form: {
                version: n.version,
                description: n.description,
                formFields: n.form_fields,
            },
        });
    },
    updateVerificationFormDescriptionLocal: (e, t) => {
        i.h.dispatch({
            type: "MEMBER_VERIFICATION_FORM_UPDATE",
            guildId: e,
            form: { description: t },
            isLocalUpdate: !0,
        });
    },
    enableVerificationForm: async (e, t) => {
        await r.Bo.patch({
            url: g.Rsh.GUILD_MEMBER_VERIFICATION(e),
            body: { enabled: t },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
    },
    submitVerificationForm: async function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 200;
        if (u.A.isFullServerPreview(e)) return void (0, c.Z$)(e, { memberOptions: { isPending: !1 } });
        try {
            let { body: a } = await r.Bo.put({
                url: g.Rsh.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                body: {
                    version: t.version,
                    form_fields: t.formFields,
                },
                rejectWithError: !1,
            });
            return (
                i.h.dispatch({
                    type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                    guildId: e,
                    request: a,
                }),
                (0, m.j5)(t.formFields) && n !== v && setTimeout(() => S(e), n),
                a
            );
        } catch (t) {
            let { status: e } = t;
            switch (e) {
                case 429:
                    throw (
                        ((0, s.Z_)(),
                        a.A.show({
                            title: E.intl.string(E.t.MmIrpf),
                            body: E.intl.string(E.t.yjpDQ3),
                            confirmText: E.intl.string(E.t.XNGT1O),
                        }),
                        A(y({}, t), { message: E.intl.string(E.t.yjpDQ3) }))
                    );
                case 403:
                    throw A(y({}, t), { message: E.intl.string(E.t["8T1rxN"]) });
                default:
                    var l, d;
                    throw A(y({}, t), {
                        message:
                            null != (l = ((d = new o.LG(t)), d.getAnyErrorMessage())) ? l : E.intl.string(E.t.R0RpRX),
                    });
            }
        }
    },
    clearCoachmark: function () {
        i.h.dispatch({ type: "USER_GUILD_JOIN_REQUEST_COACHMARK_CLEAR" });
    },
    reportApplication: function (e) {
        let { guild: t, guildJoinRequest: n, guildJoinRequestUser: r, reason: i, reasonOther: a, responses: s } = e;
        h.default.track(g.HAw.GUILD_MEMBER_APPLICATION_REPORTED, {
            application_id: n.joinRequestId,
            applicant_id: r.id,
            guild_id: t.id,
            reason: i,
            reason_other: a,
            responses: s,
        });
    },
};
