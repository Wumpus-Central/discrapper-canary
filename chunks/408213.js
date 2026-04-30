n.d(t, { Ay: () => N });
var i = n(636537),
    a = n(228366),
    r = n(157559),
    s = n(442433),
    l = n(845584),
    o = n(9994),
    d = n(529942),
    c = n(164956),
    _ = n(21599),
    E = n(696451),
    u = n(299091),
    A = n(287809),
    I = n(954571),
    T = n(513461),
    h = n(652215),
    S = n(985018);
let N = {
    fetchVerificationForm: async (e, t) => {
        let n = t ?? u.A.getInviteKeyForGuildId(e),
            r = A.default.getCurrentUser(),
            s = !E.Ay.isMember(e, r?.id);
        try {
            let t = await i.Bo.get({
                url: h.Rsh.GUILD_MEMBER_VERIFICATION(e),
                query: { with_guild: s, invite_code: null != n ? (0, _.m0)(n) : void 0 },
                oldFormErrors: !0,
                rejectWithError: !1,
            });
            if (null == t.body) throw t;
            let { body: r } = t;
            return (
                a.h.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: r.version,
                        description: r.description,
                        formFields: r.form_fields,
                        guild: r.guild,
                        profile: null != r.profile ? (0, o.wr)(r.profile) : null,
                    },
                }),
                r
            );
        } catch (t) {
            a.h.dispatch({ type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL", guildId: e });
        }
    },
    updateVerificationForm: async (e, t, n, r) => {
        let { body: s } = await i.Bo.patch({
            url: h.Rsh.GUILD_MEMBER_VERIFICATION(e),
            body: { form_fields: t, enabled: n, bulk_action: r },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        a.h.dispatch({
            type: "MEMBER_VERIFICATION_FORM_UPDATE",
            guildId: e,
            form: { version: s.version, description: s.description, formFields: s.form_fields },
        });
    },
    updateVerificationFormFieldsLocal: (e, t) => {
        a.h.dispatch({
            type: "MEMBER_VERIFICATION_FORM_UPDATE",
            guildId: e,
            form: { formFields: t },
            isLocalUpdate: !0,
        });
    },
    updateVerificationFormDescription: async (e, t) => {
        let { body: n } = await i.Bo.patch({
            url: h.Rsh.GUILD_MEMBER_VERIFICATION(e),
            body: { description: t },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        a.h.dispatch({
            type: "MEMBER_VERIFICATION_FORM_UPDATE",
            guildId: e,
            form: { version: n.version, description: n.description, formFields: n.form_fields },
        });
    },
    updateVerificationFormDescriptionLocal: (e, t) => {
        a.h.dispatch({
            type: "MEMBER_VERIFICATION_FORM_UPDATE",
            guildId: e,
            form: { description: t },
            isLocalUpdate: !0,
        });
    },
    enableVerificationForm: async (e, t) => {
        await i.Bo.patch({
            url: h.Rsh.GUILD_MEMBER_VERIFICATION(e),
            body: { enabled: t },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
    },
    submitVerificationForm: async function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 200;
        if (c.A.isFullServerPreview(e)) return void (0, d.Z$)(e, { memberOptions: { isPending: !1 } });
        try {
            let { body: r } = await i.Bo.put({
                url: h.Rsh.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                body: { version: t.version, form_fields: t.formFields },
                rejectWithError: !1,
            });
            return (
                a.h.dispatch({ type: "USER_GUILD_JOIN_REQUEST_UPDATE", guildId: e, request: r }),
                (0, T.j5)(t.formFields) &&
                    -1 !== n &&
                    setTimeout(() => {
                        var t;
                        return (
                            (t = e), void a.h.dispatch({ type: "USER_GUILD_JOIN_REQUEST_COACHMARK_SHOW", guildId: t })
                        );
                    }, n),
                r
            );
        } catch (t) {
            let { status: e } = t;
            switch (e) {
                case 429:
                    throw (
                        ((0, s.Z_)(),
                        r.A.show({
                            title: S.intl.string(S.t.MmIrpf),
                            body: S.intl.string(S.t.yjpDQ3),
                            confirmText: S.intl.string(S.t.XNGT1O),
                        }),
                        { ...t, message: S.intl.string(S.t.yjpDQ3) })
                    );
                case 403:
                    throw { ...t, message: S.intl.string(S.t["8T1rxN"]) };
                default:
                    throw { ...t, message: new l.LG(t)?.getAnyErrorMessage() ?? S.intl.string(S.t.R0RpRX) };
            }
        }
    },
    clearCoachmark: function () {
        a.h.dispatch({ type: "USER_GUILD_JOIN_REQUEST_COACHMARK_CLEAR" });
    },
    reportApplication: function (e) {
        let { guild: t, guildJoinRequest: n, guildJoinRequestUser: i, reason: a, reasonOther: r, responses: s } = e;
        I.default.track(h.HAw.GUILD_MEMBER_APPLICATION_REPORTED, {
            application_id: n.joinRequestId,
            applicant_id: i.id,
            guild_id: t.id,
            reason: a,
            reason_other: r,
            responses: s,
        });
    },
};
