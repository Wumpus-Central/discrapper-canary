var r = n(168186),
    i = n(46653),
    u = n(403362),
    a = n(372598),
    l = n(753738),
    o = n(928348),
    E = n(850216),
    A = n(890634),
    s = n(792996);
function S(e) {
    return e?.triggerType === A.uh.KEYWORD;
}
function c(e) {
    return e?.triggerType === A.uh.MENTION_SPAM;
}
function f(e) {
    return e?.triggerType === A.uh.APPLICATION;
}
function h(e, t) {
    if (e.length > t) throw Error(s.intl.formatToPlainString(s.t.mee4qd, { limit: t }));
    e.forEach((e) => {
        if (e.length > 60 || e.length < 1)
            throw new l.lH(s.intl.formatToPlainString(s.t.rbRvGe, { keyword: e, max: 60, min: 1 }));
    });
}
function _(e) {
    return (0, r.hT)(e?.id ?? "INVALID_SNOWFLAKE");
}
n.d(
    t,
    {},
    {
        AR: c,
        JJ: function (e) {
            return e?.triggerType === A.uh.USER_PROFILE;
        },
        KU: S,
        PZ: function (e) {
            switch (e) {
                case A.AH.BLOCK_MESSAGE:
                    return s.intl.string(s.t.d1ab8n);
                case A.AH.FLAG_TO_CHANNEL:
                    return s.intl.string(s.t["Y+VmvU"]);
                case A.AH.USER_COMMUNICATION_DISABLED:
                    return s.intl.string(s.t["6WPxY2"]);
                case A.AH.QUARANTINE_USER:
                    return s.intl.string(s.t.NPO8ee);
                default:
                    return s.intl.string(s.t.SP9BBx);
            }
        },
        X3: function (e) {
            switch (e) {
                case A.Mc.MESSAGE_SEND:
                    return s.intl.string(s.t.NlQW4P);
                case A.Mc.GUILD_MEMBER_JOIN_OR_UPDATE:
                    return s.intl.string(s.t["Q+68IX"]);
                default:
                    return s.intl.string(s.t.SP9BBx);
            }
        },
        ZG: function (e) {
            return e?.triggerType === A.uh.DEFAULT_KEYWORD_LIST;
        },
        _I: function (e, t) {
            let n = E.i$[t],
                r = (0, E.kT)(t, e),
                u = {
                    id: `${e}-${t}-new-rule`,
                    name: n.getDefaultRuleName(),
                    guildId: e,
                    eventType: n.eventType,
                    triggerType: t,
                    triggerMetadata: r,
                    enabled: !0,
                    creatorId: i.default.getId(),
                    actions: (0, a.dL)(n),
                    position: 0,
                    exemptChannels: new Set(),
                    exemptRoles: new Set(),
                };
            if (_(u)) throw Error(s.intl.string(s.t["A/nX8D"]));
            let l = (0, o.p3)(e, t);
            return (l > 0 && (u.name += ` ${l + 1}`), u);
        },
        n3: f,
        nl: function (e) {
            switch (e) {
                case A.uh.KEYWORD:
                    return s.intl.string(s.t.ffR2cM);
                case A.uh.ML_SPAM:
                    return s.intl.string(s.t["puF/Os"]);
                case A.uh.DEFAULT_KEYWORD_LIST:
                    return s.intl.string(s.t.LnGhZv);
                case A.uh.MENTION_SPAM:
                    return s.intl.string(s.t.pX7i6n);
                case A.uh.USER_PROFILE:
                    return s.intl.string(s.t.q1L2v8);
                case A.uh.APPLICATION:
                    return s.intl.string(s.t.VxE3o6);
                default:
                    return s.intl.string(s.t.SP9BBx);
            }
        },
        r3: function (e) {
            return e?.triggerType === A.uh.ML_SPAM;
        },
        sh: function (e) {
            return Object.values(e ?? {})
                .flat()
                .filter(u.Vq);
        },
        uV: function (e) {
            var t;
            if (c(e) && !(Number.isInteger((t = e.triggerMetadata.mentionTotalLimit)) && t >= 1 && t <= 50))
                throw Error(s.intl.formatToPlainString(s.t["8Y5zsp"], { minimum: 1, maximum: 50 }));
            if (S(e)) {
                let t = e.triggerMetadata.keywordFilter ?? [],
                    n = e.triggerMetadata.regexPatterns ?? [];
                if (0 === t.length && 0 === n.length) throw Error(s.intl.string(s.t.kz2Av3));
                h(t, 1e3);
                if (n.length > 10) throw Error(s.intl.formatToPlainString(s.t.tDjhF1, { limit: 10 }));
                n.forEach((e) => {
                    if (e.length > 260 || e.length < 1)
                        throw new l.Nr(s.intl.formatToPlainString(s.t.WR0m9w, { regex: e, max: 260, min: 1 }));
                });
            }
            if (f(e)) {
                if (null == e.triggerMetadata.applicationId) throw Error(s.intl.string(s.t["6NbEkN"]));
                return;
            }
            if (0 === e.actions.length) throw Error(s.intl.string(s.t["t+gj5V"]));
        },
        uz: function (e) {
            switch (e) {
                case A.uh.KEYWORD:
                case A.uh.USER_PROFILE:
                    return !0;
                default:
                    return !1;
            }
        },
        wC: _,
        wk: h,
    },
);
