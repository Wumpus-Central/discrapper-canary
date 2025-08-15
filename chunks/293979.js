n.d(t, {
    X9: () => A,
    b8: () => L,
    hz: () => b,
}),
    n(388685),
    n(190126),
    n(368063),
    n(65234),
    n(111804),
    n(490233),
    n(97749);
var l = n(73800),
    i = n(512722),
    r = n.n(i),
    u = n(442837),
    a = n(544891),
    o = n(570140),
    c = n(911969),
    d = n(211266),
    s = n(81897),
    E = n(155268),
    p = n(603721),
    I = n(314897),
    T = n(592125),
    f = n(271383),
    m = n(914010),
    S = n(768581),
    g = n(70956),
    C = n(709054),
    _ = n(970184),
    O = n(471073),
    h = n(892902),
    N = n(981631),
    v = n(388032);
function b(e) {
    var t;
    let n = (0, _.CJ)(),
        l = null == n || null == (t = n.modal) ? void 0 : t.components[0];
    return (null == l ? void 0 : l.type) === c.re.ACTION_ROW && l.components[0].id === e;
}
function y(e) {
    return l.useMemo(() => {
        let t = m.Z.getGuildId(),
            n = null != t && null != e.bot ? f.ZP.getMember(t, e.bot.id) : void 0,
            l = S.ZP.getApplicationIconURL({
                id: e.id,
                icon: e.icon,
                botIconFirst: !0,
                bot: null != n ? e.bot : void 0,
            });
        return {
            applicationIconURL: l,
            applicationName: null != n && null != e.bot ? e.bot.username : e.name,
            applicationBaseUrl: (0, E.ZP)(e.id),
        };
    }, [e.id, e.icon, e.name, e.bot]);
}
function A(e, t) {
    let { application: n, customId: i, components: E } = e,
        f = (0, s.Z)(),
        [m, S] = l.useState(null),
        [_, h] = l.useState(null),
        [b, A] = l.useState({}),
        L = (0, u.e7)([O.Z], () => O.Z.getModalState(_), [_]),
        R = (0, d.Z)(() => new Set()),
        M = l.useCallback(() => {
            let t;
            S(null),
                h(null),
                (t = !0),
                R.forEach((e) => {
                    e() || (t = !1);
                }),
                t &&
                    h(
                        (function (e, t) {
                            let n = C.default.fromTimestamp(Date.now()),
                                l = e.channelId,
                                i = T.Z.getChannel(l);
                            r()(null != i, "expected channel");
                            let u = Z(e.customId, e.components);
                            (0, p.kz)(n, {
                                data: {
                                    interactionType: c.B8.MODAL_SUBMIT,
                                    applicationId: e.application.id,
                                },
                            });
                            let o = () => {
                                (null != t && t.aborted) ||
                                    a.tn
                                        .post({
                                            url: N.ANM.INTERACTIONS,
                                            body: {
                                                type: c.B8.MODAL_SUBMIT,
                                                application_id: e.application.id,
                                                channel_id: i.id,
                                                guild_id: i.guild_id,
                                                data: {
                                                    id: e.id,
                                                    custom_id: e.customId,
                                                    components: u,
                                                },
                                                session_id: I.default.getSessionId(),
                                                nonce: n,
                                            },
                                            signal: t,
                                            rejectWithError: !1,
                                        })
                                        .catch((e) => {
                                            429 === e.status
                                                ? setTimeout(o, e.body.retry_after * g.Z.Millis.SECOND)
                                                : (0, p.yr)(n);
                                        });
                            };
                            return o(), n;
                        })(e, f),
                    );
        }, [f, e, R]);
    l.useEffect(() => {
        L === O.i.SUCCEEDED &&
            (o.Z.dispatch({
                type: "CLEAR_INTERACTION_MODAL_STATE",
                customId: i,
            }),
            t()),
            L === O.i.ERRORED && S(v.intl.string(v.t.uJgdEh));
    }, [_, L, t, i]);
    let { applicationIconURL: P, applicationName: D } = y(n);
    return {
        components: E,
        applicationIconURL: P,
        applicationName: D,
        submissionState: L,
        error: m,
        validators: R,
        validationErrors: b,
        setValidationErrors: A,
        onSubmit: M,
    };
}
function L(e) {
    let { application: t, customId: n } = e,
        { applicationIconURL: l, applicationName: i, applicationBaseUrl: u } = y(t),
        a = T.Z.getChannel(e.channelId);
    r()(null != a, "channel should not be null");
    let o = {
        instance_id: "".concat(e.channelId, ":").concat(t.id, ":").concat(n),
        custom_id: n,
        channel_id: e.channelId,
    };
    null != a.guild_id && "" !== a.guild_id && (o.guild_id = a.guild_id);
    let c = new URL(null != u ? u : "");
    return (
        (c.pathname = e.iframePath),
        {
            applicationIconURL: l,
            applicationName: i,
            applicationBaseUrl: u,
            queryParams: o,
            iframeUrl: c.toString(),
        }
    );
}
let Z = (e, t) =>
    t.map((t) => {
        switch (t.type) {
            case c.re.ACTION_ROW:
                return {
                    type: t.type,
                    components: Z(e, t.components),
                };
            case c.re.TEXT_INPUT: {
                let n = h.Z.getInteractionComponentState(e, t.id);
                return {
                    type: t.type,
                    custom_id: t.customId,
                    value: (null == n ? void 0 : n.type) === t.type ? n.value : null,
                };
            }
            case c.re.STRING_SELECT: {
                let n = h.Z.getInteractionComponentState(e, t.id);
                return {
                    type: t.type,
                    custom_id: t.customId,
                    values: (null == n ? void 0 : n.type) === t.type ? n.values : null,
                };
            }
            case c.re.LABEL:
                return {
                    type: t.type,
                    component: Z(e, [t.component])[0],
                };
            default:
                r()(!1, "unreachable");
        }
    });
