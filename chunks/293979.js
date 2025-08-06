n.d(t, {
    X9: () => R,
    b8: () => P,
    hz: () => N,
}),
    n(388685),
    n(190126),
    n(368063),
    n(65234),
    n(111804),
    n(490233),
    n(97749);
var r = n(73800),
    i = n(512722),
    o = n.n(i),
    a = n(442837),
    s = n(544891),
    l = n(570140),
    c = n(911969),
    u = n(211266),
    d = n(81897),
    f = n(155268),
    _ = n(603721),
    p = n(314897),
    h = n(592125),
    m = n(271383),
    g = n(914010),
    E = n(768581),
    b = n(70956),
    y = n(709054),
    O = n(970184),
    v = n(471073),
    I = n(892902),
    T = n(981631),
    S = n(388032);
let A = (e) => {
    let t = !0;
    return (
        e.forEach((e) => {
            e() || (t = !1);
        }),
        t
    );
};
function N(e) {
    var t;
    let n = (0, O.CJ)(),
        r = null == n || null == (t = n.modal) ? void 0 : t.components[0];
    return (null == r ? void 0 : r.type) === c.re.ACTION_ROW && r.components[0].id === e;
}
function C(e) {
    return r.useMemo(() => {
        let t = g.Z.getGuildId(),
            n = null != t && null != e.bot ? m.ZP.getMember(t, e.bot.id) : void 0,
            r = E.ZP.getApplicationIconURL({
                id: e.id,
                icon: e.icon,
                botIconFirst: !0,
                bot: null != n ? e.bot : void 0,
            });
        return {
            applicationIconURL: r,
            applicationName: null != n && null != e.bot ? e.bot.username : e.name,
            applicationBaseUrl: (0, f.ZP)(e.id),
        };
    }, [e.id, e.icon, e.name, e.bot]);
}
function R(e, t) {
    let { application: n, customId: i, components: o } = e,
        s = (0, d.Z)(),
        [c, f] = r.useState(null),
        [_, p] = r.useState(null),
        [h, m] = r.useState({}),
        g = (0, a.e7)([v.Z], () => v.Z.getModalState(_), [_]),
        E = (0, u.Z)(() => new Set()),
        b = r.useCallback(() => {
            f(null), p(null), A(E) && p(D(e, s));
        }, [s, e, E]);
    r.useEffect(() => {
        g === v.i.SUCCEEDED &&
            (l.Z.dispatch({
                type: "CLEAR_INTERACTION_MODAL_STATE",
                customId: i,
            }),
            t()),
            g === v.i.ERRORED && f(S.intl.string(S.t.uJgdEh));
    }, [_, g, t, i]);
    let { applicationIconURL: y, applicationName: O } = C(n);
    return {
        components: o,
        applicationIconURL: y,
        applicationName: O,
        submissionState: g,
        error: c,
        validators: E,
        validationErrors: h,
        setValidationErrors: m,
        onSubmit: b,
    };
}
function P(e) {
    let { application: t, customId: n } = e,
        { applicationIconURL: r, applicationName: i, applicationBaseUrl: a } = C(t),
        s = h.Z.getChannel(e.channelId);
    o()(null != s, "channel should not be null");
    let l = {
        instance_id: "".concat(e.channelId, ":").concat(t.id, ":").concat(n),
        custom_id: n,
        channel_id: e.channelId,
    };
    null != s.guild_id && "" !== s.guild_id && (l.guild_id = s.guild_id);
    let c = new URL(null != a ? a : "");
    return (
        (c.pathname = e.iframePath),
        {
            applicationIconURL: r,
            applicationName: i,
            applicationBaseUrl: a,
            queryParams: l,
            iframeUrl: c.toString(),
        }
    );
}
let w = (e, t) =>
    t.map((t) => {
        switch (t.type) {
            case c.re.ACTION_ROW:
                return {
                    type: t.type,
                    components: w(e, t.components),
                };
            case c.re.TEXT_INPUT: {
                let n = I.Z.getInteractionComponentState(e, t.id);
                return {
                    type: t.type,
                    custom_id: t.customId,
                    value: (null == n ? void 0 : n.type) === t.type ? n.value : null,
                };
            }
            case c.re.STRING_SELECT: {
                let n = I.Z.getInteractionComponentState(e, t.id);
                return {
                    type: t.type,
                    custom_id: t.customId,
                    values: (null == n ? void 0 : n.type) === t.type ? n.values : null,
                };
            }
            case c.re.LABEL:
                return {
                    type: t.type,
                    component: w(e, [t.component])[0],
                };
            default:
                o()(!1, "unreachable");
        }
    });
function D(e, t) {
    let n = y.default.fromTimestamp(Date.now()),
        r = e.channelId,
        i = h.Z.getChannel(r);
    o()(null != i, "expected channel");
    let a = w(e.customId, e.components);
    (0, _.kz)(n, {
        data: {
            interactionType: c.B8.MODAL_SUBMIT,
            applicationId: e.application.id,
        },
    });
    let l = () => {
        (null != t && t.aborted) ||
            s.tn
                .post({
                    url: T.ANM.INTERACTIONS,
                    body: {
                        type: c.B8.MODAL_SUBMIT,
                        application_id: e.application.id,
                        channel_id: i.id,
                        guild_id: i.guild_id,
                        data: {
                            id: e.id,
                            custom_id: e.customId,
                            components: a,
                        },
                        session_id: p.default.getSessionId(),
                        nonce: n,
                    },
                    signal: t,
                    rejectWithError: !1,
                })
                .catch((e) => {
                    429 === e.status ? setTimeout(l, e.body.retry_after * b.Z.Millis.SECOND) : (0, _.yr)(n);
                });
    };
    return l(), n;
}
