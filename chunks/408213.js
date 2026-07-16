"use strict";
n.d(t, { Ay: () => T });
var i = n(636537),
    r = n(228366),
    a = n(157559),
    s = n(442433),
    l = n(913122),
    o = n(9994),
    d = n(529942),
    c = n(164956),
    u = n(842241),
    _ = n(696451),
    E = n(299091),
    A = n(287809),
    h = n(174459),
    I = n(513461),
    f = n(652215),
    p = n(375708);
let T = {
    fetchVerificationForm: async function e(e, t) {
        let n = t ?? E.A.getInviteKeyForGuildId(e),
            a = A.default.getCurrentUser(),
            s = !_.Ay.isMember(e, a?.id);
        try {
            let t = await i.Bo.get({
                url: f.Rsh.GUILD_MEMBER_VERIFICATION(e),
                query: { with_guild: s, invite_code: null != n ? (0, u.m0)(n) : void 0 },
                oldFormErrors: !0,
                rejectWithError: (0, i.fT)(),
            });
            if (null == t.body) throw t;
            let { body: a } = t;
            return (
                r.h.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: a.version,
                        description: a.description,
                        formFields: a.form_fields,
                        guild: a.guild,
                        profile: null != a.profile ? (0, o.wr)(a.profile) : null,
                    },
                }),
                a
            );
        } catch (t) {
            r.h.dispatch({ type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL", guildId: e });
        }
    },
    updateVerificationForm: async function e(e, t, n, a) {
        let { body: s } = await i.Bo.patch({
            url: f.Rsh.GUILD_MEMBER_VERIFICATION(e),
            body: { form_fields: t, enabled: n, bulk_action: a },
            oldFormErrors: !0,
            rejectWithError: (0, i.fT)(),
        });
        r.h.dispatch({
            type: "MEMBER_VERIFICATION_FORM_UPDATE",
            guildId: e,
            form: { version: s.version, description: s.description, formFields: s.form_fields },
        });
    },
    updateVerificationFormFieldsLocal: function (e, t) {
        r.h.dispatch({
            type: "MEMBER_VERIFICATION_FORM_UPDATE",
            guildId: e,
            form: { formFields: t },
            isLocalUpdate: !0,
        });
    },
    updateVerificationFormDescription: async function e(e, t) {
        let { body: n } = await i.Bo.patch({
            url: f.Rsh.GUILD_MEMBER_VERIFICATION(e),
            body: { description: t },
            oldFormErrors: !0,
            rejectWithError: (0, i.fT)(),
        });
        r.h.dispatch({
            type: "MEMBER_VERIFICATION_FORM_UPDATE",
            guildId: e,
            form: { version: n.version, description: n.description, formFields: n.form_fields },
        });
    },
    updateVerificationFormDescriptionLocal: function (e, t) {
        r.h.dispatch({
            type: "MEMBER_VERIFICATION_FORM_UPDATE",
            guildId: e,
            form: { description: t },
            isLocalUpdate: !0,
        });
    },
    enableVerificationForm: async function e(e, t) {
        await i.Bo.patch({
            url: f.Rsh.GUILD_MEMBER_VERIFICATION(e),
            body: { enabled: t },
            oldFormErrors: !0,
            rejectWithError: (0, i.fT)(),
        });
    },
    submitVerificationForm: async function e(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 200;
        if (c.A.isFullServerPreview(e)) return void (0, d.Z$)(e, { memberOptions: { isPending: !1 } });
        try {
            let { body: a } = await i.Bo.put({
                url: f.Rsh.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                body: { version: t.version, form_fields: t.formFields },
                rejectWithError: (0, i.fT)(),
            });
            return (
                r.h.dispatch({ type: "USER_GUILD_JOIN_REQUEST_UPDATE", guildId: e, request: a }),
                (0, I.j5)(t.formFields) &&
                    -1 !== n &&
                    setTimeout(() => {
                        var t;
                        return (
                            (t = e), void r.h.dispatch({ type: "USER_GUILD_JOIN_REQUEST_COACHMARK_SHOW", guildId: t })
                        );
                    }, n),
                a
            );
        } catch (t) {
            let { status: e } = t;
            switch (e) {
                case 429:
                    throw (
                        ((0, s.Z_)(),
                        a.A.show({
                            title: p.intl.string(p.t.MmIrpf),
                            body: p.intl.string(p.t.yjpDQ3),
                            confirmText: p.intl.string(p.t.XNGT1O),
                        }),
                        { ...t, message: p.intl.string(p.t.yjpDQ3) })
                    );
                case 403:
                    throw { ...t, message: p.intl.string(p.t["8T1rxN"]) };
                default:
                    throw { ...t, message: new l.LG(t)?.getAnyErrorMessage() ?? p.intl.string(p.t.R0RpRX) };
            }
        }
    },
    clearCoachmark: function () {
        r.h.dispatch({ type: "USER_GUILD_JOIN_REQUEST_COACHMARK_CLEAR" });
    },
    reportApplication: function (e) {
        let { guild: t, guildJoinRequest: n, guildJoinRequestUser: i, reason: r, reasonOther: a, responses: s } = e;
        h.default.track(f.HAw.GUILD_MEMBER_APPLICATION_REPORTED, {
            application_id: n.joinRequestId,
            applicant_id: i.id,
            guild_id: t.id,
            reason: r,
            reason_other: a,
            responses: s,
        });
    },
};
