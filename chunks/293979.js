n.d(t, {
    X9: () => M,
    b8: () => j,
    hz: () => x,
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
    _ = n(237992),
    p = n(155268),
    h = n(603721),
    m = n(314897),
    g = n(592125),
    E = n(703558),
    b = n(271383),
    y = n(914010),
    O = n(117530),
    v = n(768581),
    I = n(70956),
    T = n(709054),
    S = n(861990),
    A = n(970184),
    C = n(292419),
    N = n(471073),
    R = n(892902),
    P = n(981631),
    D = n(388032);
let w = (e) => {
    let t = !0;
    return (
        e.forEach((e) => {
            e() || (t = !1);
        }),
        t
    );
};
function x(e) {
    var t;
    let n = (0, A.CJ)(),
        r = null == n || null == (t = n.modal) ? void 0 : t.components[0];
    return (null == r ? void 0 : r.type) === u.re.ACTION_ROW && r.components[0].id === e;
}
function L(e) {
    return r.useMemo(() => {
        let t = y.Z.getGuildId(),
            n = null != t && null != e.bot ? b.ZP.getMember(t, e.bot.id) : void 0,
            r = v.ZP.getApplicationIconURL({
                id: e.id,
                icon: e.icon,
                botIconFirst: !0,
                bot: null != n ? e.bot : void 0,
            });
        return {
            applicationIconURL: r,
            applicationName: null != n && null != e.bot ? e.bot.username : e.name,
            applicationBaseUrl: (0, p.ZP)(e.id),
        };
    }, [e.id, e.icon, e.name, e.bot]);
}
function M(e, t) {
    let { application: n, customId: i, components: a } = e,
        s = (0, f.Z)(),
        [u, _] = r.useState(null),
        [p, h] = r.useState(null),
        [m, g] = r.useState({}),
        b = (0, o.e7)([N.Z], () => N.Z.getModalState(p), [p]),
        y = (0, d.Z)(() => new Set()),
        O = r.useCallback(async () => {
            if ((_(null), h(null), w(y))) {
                let t = T.default.fromTimestamp(Date.now());
                h(t), await G(e, s, t);
            }
        }, [s, e, y]);
    r.useEffect(() => {
        b === N.i.SUCCEEDED &&
            (l.Z.dispatch({
                type: "CLEAR_INTERACTION_MODAL_STATE",
                customId: i,
            }),
            c.Z.removeFiles(
                e.channelId,
                U(e.channelId, i).map((e) => e.id),
                E.d.InteractionModal,
            ),
            t()),
            b === N.i.ERRORED && _(D.intl.string(D.t.uJgdEu));
    }, [p, b, t, i, e.channelId]);
    let { applicationIconURL: v, applicationName: I } = L(n);
    return {
        components: a,
        applicationIconURL: v,
        applicationName: I,
        submissionState: b,
        error: u,
        validators: y,
        validationErrors: m,
        setValidationErrors: g,
        onSubmit: O,
    };
}
function j(e) {
    let { application: t, customId: n } = e,
        { applicationIconURL: r, applicationName: i, applicationBaseUrl: o } = L(t),
        s = g.Z.getChannel(e.channelId);
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
let k = (e, t, n) =>
    t.map((t) => {
        switch (t.type) {
            case u.re.ACTION_ROW:
                return {
                    type: t.type,
                    components: k(e, t.components, n),
                };
            case u.re.TEXT_INPUT: {
                let n = R.Z.getInteractionComponentState(e, t.id);
                return {
                    type: t.type,
                    custom_id: t.customId,
                    value: (null == n ? void 0 : n.type) === t.type ? n.value : null,
                };
            }
            case u.re.FILE_UPLOAD: {
                var r;
                let i = R.Z.getInteractionComponentState(e, t.id),
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
                let n = R.Z.getInteractionComponentState(e, t.id);
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
                let n = R.Z.getInteractionComponentState(e, t.id);
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
                    component: k(e, [t.component], n)[0],
                };
            default:
                a()(!1, "unreachable");
        }
    });
function U(e, t) {
    return O.Z.getUploads(e, E.d.InteractionModal).filter((e) => {
        var n;
        return (null == (n = (0, C.yw)(e.id)) ? void 0 : n.containerId) === t;
    });
}
async function G(e, t, n) {
    let r = e.channelId,
        i = g.Z.getChannel(r);
    a()(null != i, "expected channel");
    let o = U(r, e.customId),
        l = o.length > 0 ? (0, _.Z)(o) : void 0;
    (0, h.kz)(n, {
        data: {
            interactionType: u.B8.MODAL_SUBMIT,
            applicationId: e.application.id,
        },
        preflight: l,
    }),
        await l;
    let c = o.map((e, t) => (0, S.B)(e, t)),
        d = k(e.customId, e.components, { uploads: o }),
        f = () => {
            (null != t && t.aborted) ||
                s.tn
                    .post({
                        url: P.ANM.INTERACTIONS,
                        body: {
                            type: u.B8.MODAL_SUBMIT,
                            application_id: e.application.id,
                            channel_id: i.id,
                            guild_id: i.guild_id,
                            data: {
                                id: e.id,
                                custom_id: e.customId,
                                components: d,
                                attachments: c.length > 0 ? c : void 0,
                            },
                            session_id: m.default.getSessionId(),
                            nonce: n,
                        },
                        signal: t,
                        rejectWithError: !1,
                    })
                    .catch((e) => {
                        429 === e.status ? setTimeout(f, e.body.retry_after * I.Z.Millis.SECOND) : (0, h.yr)(n);
                    });
        };
    f();
}
