n.d(t, {
    X9: function () {
        return Z;
    },
    b8: function () {
        return y;
    },
    hz: function () {
        return L;
    }
}),
    n(47120),
    n(315314),
    n(610138),
    n(216116),
    n(78328),
    n(815648);
var l = n(192379),
    i = n(512722),
    u = n.n(i),
    r = n(442837),
    a = n(544891),
    o = n(570140),
    d = n(911969),
    c = n(211266),
    s = n(81897),
    E = n(155268),
    T = n(603721),
    I = n(314897),
    f = n(592125),
    p = n(271383),
    m = n(914010),
    S = n(768581),
    C = n(70956),
    _ = n(709054),
    g = n(970184),
    N = n(471073),
    h = n(892902),
    v = n(981631),
    O = n(388032);
let A = (e) => {
    let t = !0;
    return (
        e.forEach((e) => {
            !e() && (t = !1);
        }),
        t
    );
};
function L(e) {
    var t;
    let n = (0, g.CJ)(),
        l = null == n ? void 0 : null === (t = n.modal) || void 0 === t ? void 0 : t.components[0];
    return (null == l ? void 0 : l.type) === d.re.ACTION_ROW && l.components[0].id === e;
}
function R(e) {
    return l.useMemo(() => {
        let t = m.Z.getGuildId(),
            n = null != t && null != e.bot ? p.ZP.getMember(t, e.bot.id) : void 0,
            l = S.ZP.getApplicationIconURL({
                id: e.id,
                icon: e.icon,
                botIconFirst: !0,
                bot: null != n ? e.bot : void 0
            }),
            i = null != n && null != e.bot ? e.bot.username : e.name;
        return {
            applicationIconURL: l,
            applicationName: i,
            applicationBaseUrl: (0, E.Z)(e.id)
        };
    }, [e.id, e.icon, e.name, e.bot]);
}
function Z(e, t) {
    let { application: n, customId: i, components: E } = e,
        p = (0, s.Z)(),
        [m, S] = l.useState(null),
        [g, h] = l.useState(null),
        L = (0, r.e7)([N.Z], () => N.Z.getModalState(g), [g]),
        Z = (0, c.Z)(() => new Set()),
        y = l.useCallback(() => {
            S(null),
                h(null),
                A(Z) &&
                    h(
                        (function (e, t) {
                            let n = _.default.fromTimestamp(Date.now()),
                                l = e.channelId,
                                i = f.Z.getChannel(l);
                            u()(null != i, 'expected channel');
                            let r = M(e.customId, e.components);
                            (0, T.kz)(n, { data: { interactionType: d.B8.MODAL_SUBMIT } });
                            let o = () => {
                                (null == t || !t.aborted) &&
                                    a.tn
                                        .post({
                                            url: v.ANM.INTERACTIONS,
                                            body: {
                                                type: d.B8.MODAL_SUBMIT,
                                                application_id: e.application.id,
                                                channel_id: i.id,
                                                guild_id: i.guild_id,
                                                data: {
                                                    id: e.id,
                                                    custom_id: e.customId,
                                                    components: r
                                                },
                                                session_id: I.default.getSessionId(),
                                                nonce: n
                                            },
                                            signal: t,
                                            rejectWithError: !1
                                        })
                                        .catch((e) => {
                                            429 === e.status ? setTimeout(o, e.body.retry_after * C.Z.Millis.SECOND) : (0, T.yr)(n);
                                        });
                            };
                            return o(), n;
                        })(e, p)
                    );
        }, [p, e, Z]);
    l.useEffect(() => {
        L === N.i.SUCCEEDED &&
            (o.Z.dispatch({
                type: 'CLEAR_INTERACTION_MODAL_STATE',
                customId: i
            }),
            t()),
            L === N.i.ERRORED && S(O.intl.string(O.t.uJgdEh));
    }, [g, L, t, i]);
    let { applicationIconURL: b, applicationName: D } = R(n);
    return {
        components: E,
        applicationIconURL: b,
        applicationName: D,
        submissionState: L,
        error: m,
        validators: Z,
        onSubmit: y
    };
}
function y(e) {
    let { application: t, customId: n } = e,
        { applicationIconURL: l, applicationName: i, applicationBaseUrl: r } = R(t),
        a = f.Z.getChannel(e.channelId);
    u()(null != a, 'channel should not be null');
    let o = {
        instance_id: ''.concat(e.channelId, ':').concat(t.id, ':').concat(n),
        custom_id: n,
        channel_id: e.channelId
    };
    null != a.guild_id && '' !== a.guild_id && (o.guild_id = a.guild_id);
    let d = new URL(null != r ? r : '');
    return (
        (d.pathname = e.iframePath),
        {
            applicationIconURL: l,
            applicationName: i,
            applicationBaseUrl: r,
            queryParams: o,
            iframeUrl: d.toString()
        }
    );
}
let M = (e, t) =>
    t.map((t) => {
        switch (t.type) {
            case d.re.ACTION_ROW:
                return {
                    type: t.type,
                    components: M(e, t.components)
                };
            case d.re.TEXT_INPUT: {
                let n = h.Z.getInteractionComponentState(e, t.id);
                return {
                    type: t.type,
                    custom_id: t.customId,
                    value: (null == n ? void 0 : n.type) === t.type ? n.value : null
                };
            }
            case d.re.STRING_SELECT: {
                let n = h.Z.getInteractionComponentState(e, t.id);
                return {
                    type: t.type,
                    custom_id: t.customId,
                    values: (null == n ? void 0 : n.type) === t.type ? n.values : null
                };
            }
            default:
                u()(!1, 'unreachable');
        }
    });
