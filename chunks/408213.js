"use strict";
n.d(t, { Ay: () => T });
var r = n(562465),
    i = n(73153),
    a = n(157559),
    s = n(442433),
    o = n(198982),
    l = n(9994),
    u = n(529942),
    c = n(164956),
    d = n(21599),
    _ = n(696451),
    f = n(299091),
    p = n(287809),
    h = n(954571),
    m = n(513461),
    g = n(652215),
    E = n(985018);
let A = -1;
function I(e) {
    i.h.dispatch({ type: "USER_GUILD_JOIN_REQUEST_COACHMARK_SHOW", guildId: e });
}
let T = {
    fetchVerificationForm: async (e, t) => {
        let n = t ?? f.A.getInviteKeyForGuildId(e),
            a = p.default.getCurrentUser(),
            s = !_.Ay.isMember(e, a?.id);
        try {
            let t = await r.Bo.get({
                url: g.Rsh.GUILD_MEMBER_VERIFICATION(e),
                query: { with_guild: s, invite_code: null != n ? (0, d.m0)(n) : void 0 },
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
            i.h.dispatch({ type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL", guildId: e });
        }
    },
    updateVerificationForm: async (e, t, n, a) => {
        let { body: s } = await r.Bo.patch({
            url: g.Rsh.GUILD_MEMBER_VERIFICATION(e),
            body: { form_fields: t, enabled: n, bulk_action: a },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        i.h.dispatch({
            type: "MEMBER_VERIFICATION_FORM_UPDATE",
            guildId: e,
            form: { version: s.version, description: s.description, formFields: s.form_fields },
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
            form: { version: n.version, description: n.description, formFields: n.form_fields },
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
        if (c.A.isFullServerPreview(e)) return void (0, u.Z$)(e, { memberOptions: { isPending: !1 } });
        try {
            let { body: a } = await r.Bo.put({
                url: g.Rsh.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                body: { version: t.version, form_fields: t.formFields },
                rejectWithError: !1,
            });
            return (
                i.h.dispatch({ type: "USER_GUILD_JOIN_REQUEST_UPDATE", guildId: e, request: a }),
                (0, m.j5)(t.formFields) && n !== A && setTimeout(() => I(e), n),
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
                        { ...t, message: E.intl.string(E.t.yjpDQ3) })
                    );
                case 403:
                    throw { ...t, message: E.intl.string(E.t["8T1rxN"]) };
                default:
                    throw { ...t, message: new o.LG(t)?.getAnyErrorMessage() ?? E.intl.string(E.t.R0RpRX) };
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
