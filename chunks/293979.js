n.d(t, {
    X9: () => L,
    b8: () => j,
    hz: () => D,
}),
    n(388685),
    n(190126),
    n(368063),
    n(65234),
    n(111804),
    n(490233),
    n(97749);
var r = n(647438),
    i = n(512722),
    a = n.n(i),
    o = n(442837),
    s = n(544891),
    l = n(570140),
    c = n(166459),
    u = n(911969),
    d = n(211266),
    f = n(81897),
    _ = n(155268),
    p = n(603721),
    h = n(314897),
    m = n(592125),
    g = n(703558),
    E = n(271383),
    b = n(914010),
    y = n(117530),
    O = n(768581),
    v = n(70956),
    I = n(709054),
    T = n(861990),
    S = n(970184),
    A = n(292419),
    C = n(471073),
    N = n(892902),
    R = n(981631),
    P = n(388032);
let w = (e) => {
    let t = !0;
    return (
        e.forEach((e) => {
            e() || (t = !1);
        }),
        t
    );
};
function D(e) {
    var t;
    let n = (0, S.CJ)(),
        r = null == n || null == (t = n.modal) ? void 0 : t.components[0];
    return (null == r ? void 0 : r.type) === u.re.ACTION_ROW && r.components[0].id === e;
}
function x(e) {
    return r.useMemo(() => {
        let t = b.Z.getGuildId(),
            n = null != t && null != e.bot ? E.ZP.getMember(t, e.bot.id) : void 0,
            r = O.ZP.getApplicationIconURL({
                id: e.id,
                icon: e.icon,
                botIconFirst: !0,
                bot: null != n ? e.bot : void 0,
            });
        return {
            applicationIconURL: r,
            applicationName: null != n && null != e.bot ? e.bot.username : e.name,
            applicationBaseUrl: (0, _.ZP)(e.id),
        };
    }, [e.id, e.icon, e.name, e.bot]);
}
function L(e, t) {
    let { application: n, customId: i, components: a } = e,
        s = (0, f.Z)(),
        [u, _] = r.useState(null),
        [p, h] = r.useState(null),
        [m, E] = r.useState({}),
        b = (0, o.e7)([C.Z], () => C.Z.getModalState(p), [p]),
        y = (0, d.Z)(() => new Set()),
        O = r.useCallback(() => {
            _(null), h(null), w(y) && h(U(e, s));
        }, [s, e, y]);
    r.useEffect(() => {
        b === C.i.SUCCEEDED &&
            (l.Z.dispatch({
                type: "CLEAR_INTERACTION_MODAL_STATE",
                customId: i,
            }),
            c.Z.removeFiles(
                e.channelId,
                k(e.channelId, i).map((e) => e.id),
                g.d.InteractionModal,
            ),
            t()),
            b === C.i.ERRORED && _(P.intl.string(P.t.uJgdEh));
    }, [p, b, t, i, e.channelId]);
    let { applicationIconURL: v, applicationName: I } = x(n);
    return {
        components: a,
        applicationIconURL: v,
        applicationName: I,
        submissionState: b,
        error: u,
        validators: y,
        validationErrors: m,
        setValidationErrors: E,
        onSubmit: O,
    };
}
function j(e) {
    let { application: t, customId: n } = e,
        { applicationIconURL: r, applicationName: i, applicationBaseUrl: o } = x(t),
        s = m.Z.getChannel(e.channelId);
    a()(null != s, "channel should not be null");
    let l = {
        instance_id: "".concat(e.channelId, ":").concat(t.id, ":").concat(n),
        custom_id: n,
        channel_id: e.channelId,
    };
    null != s.guild_id && "" !== s.guild_id && (l.guild_id = s.guild_id);
    let c = new URL(null != o ? o : "");
    return (
        (c.pathname = e.iframePath),
        {
            applicationIconURL: r,
            applicationName: i,
            applicationBaseUrl: o,
            queryParams: l,
            iframeUrl: c.toString(),
        }
    );
}
let M = (e, t, n) =>
    t.map((t) => {
        switch (t.type) {
            case u.re.ACTION_ROW:
                return {
                    type: t.type,
                    components: M(e, t.components, n),
                };
            case u.re.TEXT_INPUT: {
                let n = N.Z.getInteractionComponentState(e, t.id);
                return {
                    type: t.type,
                    custom_id: t.customId,
                    value: (null == n ? void 0 : n.type) === t.type ? n.value : null,
                };
            }
            case u.re.FILE_UPLOAD: {
                var r;
                let i = N.Z.getInteractionComponentState(e, t.id),
                    a = (null == i ? void 0 : i.type) === t.type ? i.uploadIds : null;
                return {
                    type: t.type,
                    custom_id: t.customId,
                    values:
                        null != (r = null == a ? void 0 : a.map((e) => n.uploads.findIndex((t) => t.id === e)))
                            ? r
                            : null,
                };
            }
            case u.re.STRING_SELECT: {
                let n = N.Z.getInteractionComponentState(e, t.id);
                return {
                    type: t.type,
                    custom_id: t.customId,
                    values: (null == n ? void 0 : n.type) === t.type ? n.values : null,
                };
            }
            case u.re.USER_SELECT:
            case u.re.ROLE_SELECT:
            case u.re.MENTIONABLE_SELECT:
            case u.re.CHANNEL_SELECT: {
                let n = N.Z.getInteractionComponentState(e, t.id);
                return {
                    type: t.type,
                    custom_id: t.customId,
                    values: (null == n ? void 0 : n.type) === t.type ? n.selectedOptions.map((e) => e.value) : null,
                };
            }
            case u.re.TEXT_DISPLAY:
                return { type: t.type };
            case u.re.LABEL:
                return {
                    type: t.type,
                    component: M(e, [t.component], n)[0],
                };
            default:
                a()(!1, "unreachable");
        }
    });
function k(e, t) {
    return y.Z.getUploads(e, g.d.InteractionModal).filter((e) => {
        var n;
        return (null == (n = (0, A.yw)(e.id)) ? void 0 : n.containerId) === t;
    });
}
function U(e, t) {
    let n = I.default.fromTimestamp(Date.now()),
        r = e.channelId,
        i = m.Z.getChannel(r);
    a()(null != i, "expected channel");
    let o = k(r, e.customId),
        l = o.map((e, t) => (0, T.B)(e, t)),
        c = M(e.customId, e.components, { uploads: o });
    (0, p.kz)(n, {
        data: {
            interactionType: u.B8.MODAL_SUBMIT,
            applicationId: e.application.id,
        },
    });
    let d = () => {
        (null != t && t.aborted) ||
            s.tn
                .post({
                    url: R.ANM.INTERACTIONS,
                    body: {
                        type: u.B8.MODAL_SUBMIT,
                        application_id: e.application.id,
                        channel_id: i.id,
                        guild_id: i.guild_id,
                        data: {
                            id: e.id,
                            custom_id: e.customId,
                            components: c,
                            attachments: l.length > 0 ? l : void 0,
                        },
                        session_id: h.default.getSessionId(),
                        nonce: n,
                    },
                    signal: t,
                    rejectWithError: !1,
                })
                .catch((e) => {
                    429 === e.status ? setTimeout(d, e.body.retry_after * v.Z.Millis.SECOND) : (0, p.yr)(n);
                });
    };
    return d(), n;
}
