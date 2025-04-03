n.d(t, {
    X9: () => Z,
    b8: () => y,
    hz: () => L
}),
    n(47120),
    n(315314),
    n(309749),
    n(610138),
    n(216116),
    n(78328),
    n(815648);
var l = n(192379),
    i = n(512722),
    u = n.n(i),
    a = n(442837),
    r = n(544891),
    o = n(570140),
    d = n(911969),
    c = n(211266),
    s = n(81897),
    E = n(155268),
    T = n(603721),
    I = n(314897),
    p = n(592125),
    m = n(271383),
    S = n(914010),
    f = n(768581),
    C = n(70956),
    _ = n(709054),
    g = n(970184),
    N = n(471073),
    h = n(892902),
    O = n(981631),
    A = n(388032);
let v = (e) => {
    let t = !0;
    return (
        e.forEach((e) => {
            e() || (t = !1);
        }),
        t
    );
};
function L(e) {
    var t;
    let n = (0, g.CJ)(),
        l = null == n || null == (t = n.modal) ? void 0 : t.components[0];
    return (null == l ? void 0 : l.type) === d.re.ACTION_ROW && l.components[0].id === e;
}
function R(e) {
    return l.useMemo(() => {
        let t = S.Z.getGuildId(),
            n = null != t && null != e.bot ? m.ZP.getMember(t, e.bot.id) : void 0,
            l = f.ZP.getApplicationIconURL({
                id: e.id,
                icon: e.icon,
                botIconFirst: !0,
                bot: null != n ? e.bot : void 0
            });
        return {
            applicationIconURL: l,
            applicationName: null != n && null != e.bot ? e.bot.username : e.name,
            applicationBaseUrl: (0, E.ZP)(e.id)
        };
    }, [e.id, e.icon, e.name, e.bot]);
}
function Z(e, t) {
    let { application: n, customId: i, components: E } = e,
        m = (0, s.Z)(),
        [S, f] = l.useState(null),
        [g, h] = l.useState(null),
        L = (0, a.e7)([N.Z], () => N.Z.getModalState(g), [g]),
        Z = (0, c.Z)(() => new Set()),
        y = l.useCallback(() => {
            f(null),
                h(null),
                v(Z) &&
                    h(
                        (function (e, t) {
                            let n = _.default.fromTimestamp(Date.now()),
                                l = e.channelId,
                                i = p.Z.getChannel(l);
                            u()(null != i, 'expected channel');
                            let a = M(e.customId, e.components);
                            (0, T.kz)(n, {
                                data: {
                                    interactionType: d.B8.MODAL_SUBMIT,
                                    applicationId: e.application.id
                                }
                            });
                            let o = () => {
                                (null != t && t.aborted) ||
                                    r.tn
                                        .post({
                                            url: O.ANM.INTERACTIONS,
                                            body: {
                                                type: d.B8.MODAL_SUBMIT,
                                                application_id: e.application.id,
                                                channel_id: i.id,
                                                guild_id: i.guild_id,
                                                data: {
                                                    id: e.id,
                                                    custom_id: e.customId,
                                                    components: a
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
                        })(e, m)
                    );
        }, [m, e, Z]);
    l.useEffect(() => {
        L === N.i.SUCCEEDED &&
            (o.Z.dispatch({
                type: 'CLEAR_INTERACTION_MODAL_STATE',
                customId: i
            }),
            t()),
            L === N.i.ERRORED && f(A.NW.string(A.t.uJgdEh));
    }, [g, L, t, i]);
    let { applicationIconURL: b, applicationName: P } = R(n);
    return {
        components: E,
        applicationIconURL: b,
        applicationName: P,
        submissionState: L,
        error: S,
        validators: Z,
        onSubmit: y
    };
}
function y(e) {
    let { application: t, customId: n } = e,
        { applicationIconURL: l, applicationName: i, applicationBaseUrl: a } = R(t),
        r = p.Z.getChannel(e.channelId);
    u()(null != r, 'channel should not be null');
    let o = {
        instance_id: ''.concat(e.channelId, ':').concat(t.id, ':').concat(n),
        custom_id: n,
        channel_id: e.channelId
    };
    null != r.guild_id && '' !== r.guild_id && (o.guild_id = r.guild_id);
    let d = new URL(null != a ? a : '');
    return (
        (d.pathname = e.iframePath),
        {
            applicationIconURL: l,
            applicationName: i,
            applicationBaseUrl: a,
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
