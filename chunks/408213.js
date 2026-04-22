"use strict";
n.d(t, { Ay: () => A });
var r = n(562465),
    i = n(73153),
    s = n(157559),
    a = n(442433),
    o = n(198982),
    l = n(9994),
    u = n(529942),
    d = n(164956),
    c = n(21599),
    _ = n(696451),
    f = n(299091),
    E = n(287809),
    h = n(954571),
    p = n(513461),
    m = n(652215),
    g = n(985018);
let A = {
    fetchVerificationForm: async (e, t) => {
        let n = t ?? f.A.getInviteKeyForGuildId(e),
            s = E.default.getCurrentUser(),
            a = !_.Ay.isMember(e, s?.id);
        try {
            let t = await r.Bo.get({
                url: m.Rsh.GUILD_MEMBER_VERIFICATION(e),
                query: { with_guild: a, invite_code: null != n ? (0, c.m0)(n) : void 0 },
                oldFormErrors: !0,
                rejectWithError: !1,
            });
            if (null == t.body) throw t;
            let { body: s } = t;
            return (
                i.h.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: s.version,
                        description: s.description,
                        formFields: s.form_fields,
                        guild: s.guild,
                        profile: null != s.profile ? (0, l.wr)(s.profile) : null,
                    },
                }),
                s
            );
        } catch (t) {
            i.h.dispatch({ type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL", guildId: e });
        }
    },
    updateVerificationForm: async (e, t, n, s) => {
        let { body: a } = await r.Bo.patch({
            url: m.Rsh.GUILD_MEMBER_VERIFICATION(e),
            body: { form_fields: t, enabled: n, bulk_action: s },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        i.h.dispatch({
            type: "MEMBER_VERIFICATION_FORM_UPDATE",
            guildId: e,
            form: { version: a.version, description: a.description, formFields: a.form_fields },
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
            url: m.Rsh.GUILD_MEMBER_VERIFICATION(e),
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
            url: m.Rsh.GUILD_MEMBER_VERIFICATION(e),
            body: { enabled: t },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
    },
    submitVerificationForm: async function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 200;
        if (d.A.isFullServerPreview(e)) return void (0, u.Z$)(e, { memberOptions: { isPending: !1 } });
        try {
            let { body: s } = await r.Bo.put({
                url: m.Rsh.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                body: { version: t.version, form_fields: t.formFields },
                rejectWithError: !1,
            });
            return (
                i.h.dispatch({ type: "USER_GUILD_JOIN_REQUEST_UPDATE", guildId: e, request: s }),
                (0, p.j5)(t.formFields) &&
                    -1 !== n &&
                    setTimeout(() => {
                        var t;
                        return (
                            (t = e), void i.h.dispatch({ type: "USER_GUILD_JOIN_REQUEST_COACHMARK_SHOW", guildId: t })
                        );
                    }, n),
                s
            );
        } catch (t) {
            let { status: e } = t;
            switch (e) {
                case 429:
                    throw (
                        ((0, a.Z_)(),
                        s.A.show({
                            title: g.intl.string(g.t.MmIrpf),
                            body: g.intl.string(g.t.yjpDQ3),
                            confirmText: g.intl.string(g.t.XNGT1O),
                        }),
                        { ...t, message: g.intl.string(g.t.yjpDQ3) })
                    );
                case 403:
                    throw { ...t, message: g.intl.string(g.t["8T1rxN"]) };
                default:
                    throw { ...t, message: new o.LG(t)?.getAnyErrorMessage() ?? g.intl.string(g.t.R0RpRX) };
            }
        }
    },
    clearCoachmark: function () {
        i.h.dispatch({ type: "USER_GUILD_JOIN_REQUEST_COACHMARK_CLEAR" });
    },
    reportApplication: function (e) {
        let { guild: t, guildJoinRequest: n, guildJoinRequestUser: r, reason: i, reasonOther: s, responses: a } = e;
        h.default.track(m.HAw.GUILD_MEMBER_APPLICATION_REPORTED, {
            application_id: n.joinRequestId,
            applicant_id: r.id,
            guild_id: t.id,
            reason: i,
            reason_other: s,
            responses: a,
        });
    },
};
