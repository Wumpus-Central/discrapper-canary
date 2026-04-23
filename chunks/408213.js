n.d(t, { Ay: () => O });
var i = n(636537),
    r = n(228366),
    a = n(157559),
    s = n(442433),
    _ = n(845584),
    l = n(9994),
    o = n(529942),
    E = n(164956),
    d = n(21599),
    c = n(696451),
    u = n(299091),
    I = n(287809),
    A = n(954571),
    T = n(513461),
    S = n(652215),
    N = n(985018);
let O = {
    fetchVerificationForm: async (e, t) => {
        let n = t ?? u.A.getInviteKeyForGuildId(e),
            a = I.default.getCurrentUser(),
            s = !c.Ay.isMember(e, a?.id);
        try {
            let t = await i.Bo.get({
                url: S.Rsh.GUILD_MEMBER_VERIFICATION(e),
                query: { with_guild: s, invite_code: null != n ? (0, d.m0)(n) : void 0 },
                oldFormErrors: !0,
                rejectWithError: !1,
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
                        profile: null != a.profile ? (0, l.wr)(a.profile) : null,
                    },
                }),
                a
            );
        } catch (t) {
            r.h.dispatch({ type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL", guildId: e });
        }
    },
    updateVerificationForm: async (e, t, n, a) => {
        let { body: s } = await i.Bo.patch({
            url: S.Rsh.GUILD_MEMBER_VERIFICATION(e),
            body: { form_fields: t, enabled: n, bulk_action: a },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        r.h.dispatch({
            type: "MEMBER_VERIFICATION_FORM_UPDATE",
            guildId: e,
            form: { version: s.version, description: s.description, formFields: s.form_fields },
        });
    },
    updateVerificationFormFieldsLocal: (e, t) => {
        r.h.dispatch({
            type: "MEMBER_VERIFICATION_FORM_UPDATE",
            guildId: e,
            form: { formFields: t },
            isLocalUpdate: !0,
        });
    },
    updateVerificationFormDescription: async (e, t) => {
        let { body: n } = await i.Bo.patch({
            url: S.Rsh.GUILD_MEMBER_VERIFICATION(e),
            body: { description: t },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        r.h.dispatch({
            type: "MEMBER_VERIFICATION_FORM_UPDATE",
            guildId: e,
            form: { version: n.version, description: n.description, formFields: n.form_fields },
        });
    },
    updateVerificationFormDescriptionLocal: (e, t) => {
        r.h.dispatch({
            type: "MEMBER_VERIFICATION_FORM_UPDATE",
            guildId: e,
            form: { description: t },
            isLocalUpdate: !0,
        });
    },
    enableVerificationForm: async (e, t) => {
        await i.Bo.patch({
            url: S.Rsh.GUILD_MEMBER_VERIFICATION(e),
            body: { enabled: t },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
    },
    submitVerificationForm: async function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 200;
        if (E.A.isFullServerPreview(e)) return void (0, o.Z$)(e, { memberOptions: { isPending: !1 } });
        try {
            let { body: a } = await i.Bo.put({
                url: S.Rsh.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                body: { version: t.version, form_fields: t.formFields },
                rejectWithError: !1,
            });
            return (
                r.h.dispatch({ type: "USER_GUILD_JOIN_REQUEST_UPDATE", guildId: e, request: a }),
                (0, T.j5)(t.formFields) &&
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
                            title: N.intl.string(N.t.MmIrpf),
                            body: N.intl.string(N.t.yjpDQ3),
                            confirmText: N.intl.string(N.t.XNGT1O),
                        }),
                        { ...t, message: N.intl.string(N.t.yjpDQ3) })
                    );
                case 403:
                    throw { ...t, message: N.intl.string(N.t["8T1rxN"]) };
                default:
                    throw { ...t, message: new _.LG(t)?.getAnyErrorMessage() ?? N.intl.string(N.t.R0RpRX) };
            }
        }
    },
    clearCoachmark: function () {
        r.h.dispatch({ type: "USER_GUILD_JOIN_REQUEST_COACHMARK_CLEAR" });
    },
    reportApplication: function (e) {
        let { guild: t, guildJoinRequest: n, guildJoinRequestUser: i, reason: r, reasonOther: a, responses: s } = e;
        A.default.track(S.HAw.GUILD_MEMBER_APPLICATION_REPORTED, {
            application_id: n.joinRequestId,
            applicant_id: i.id,
            guild_id: t.id,
            reason: r,
            reason_other: a,
            responses: s,
        });
    },
};
