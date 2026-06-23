n.d(e, { bO: () => G, At: () => y, f5: () => U, jc: () => D }), n(938796);
var l = n(627968),
    i = n(64700),
    r = n(17928),
    u = n(228366),
    a = n(155718),
    o = n(964486),
    s = n(870136),
    d = n(436283),
    c = n(337591),
    E = n(743738),
    I = n(857071),
    T = n(406704),
    p = n(734057),
    g = n(696451),
    S = n(834942),
    f = n(287809),
    C = n(489414),
    m = n(814890),
    A = n(138321),
    _ = n(284009),
    h = n.n(_),
    N = n(375708);
function L(t) {
    switch (t.type) {
        case a.I5.BUTTON:
            return t.style !== a.in.LINK;
        case a.I5.STRING_SELECT:
        case a.I5.USER_SELECT:
        case a.I5.ROLE_SELECT:
        case a.I5.MENTIONABLE_SELECT:
        case a.I5.CHANNEL_SELECT:
            return !0;
        case a.I5.ACTION_ROW:
        case a.I5.TEXT_INPUT:
        default:
            return !1;
    }
}
function O(t, e) {
    let n = i.useContext(R),
        l = i.useCallback(
            (e) => {
                let l = (function (t, e, n) {
                    switch ((null != e && h()(e.type === t.type, "component type matches state"), t.type)) {
                        case a.I5.BUTTON:
                            return null;
                        case a.I5.STRING_SELECT:
                        case a.I5.USER_SELECT:
                        case a.I5.ROLE_SELECT:
                        case a.I5.MENTIONABLE_SELECT:
                        case a.I5.CHANNEL_SELECT:
                            return (function (t, e, n) {
                                let { minValues: l, maxValues: i, required: r } = t,
                                    u =
                                        null == e
                                            ? 0
                                            : e.type === a.I5.STRING_SELECT
                                              ? e.values.length
                                              : e.selectedOptions.length;
                                return 0 === u
                                    ? (0, m.Lr)({ minValues: l, required: r }, n)
                                        ? null
                                        : N.intl.string(N.t.eJEUvD)
                                    : u < l
                                      ? N.intl.formatToPlainString(N.t.Jmwzdx, { count: l })
                                      : u > i
                                        ? N.intl.formatToPlainString(N.t.LDvfRP, { count: i })
                                        : null;
                            })(t, e, n);
                        case a.I5.TEXT_INPUT:
                            return (function (t, e) {
                                let { minLength: n, maxLength: l, required: i } = t;
                                return null == e || 0 === e.value.length
                                    ? i
                                        ? N.intl.string(N.t.eJEUvD)
                                        : null
                                    : e.value.length < n || e.value.length > l
                                      ? N.intl.formatToPlainString(N.t.ONSqYd, { min: n, max: l })
                                      : null;
                            })(t, e);
                        case a.I5.FILE_UPLOAD:
                            return (function (t, e) {
                                let { minValues: n, maxValues: l, required: i } = t,
                                    r = e?.uploadIds.length ?? 0;
                                return 0 === r
                                    ? i
                                        ? N.intl.string(N.t.eJEUvD)
                                        : null
                                    : r < n
                                      ? N.intl.formatToPlainString(N.t.pmAt62, { minValues: n })
                                      : r > l
                                        ? N.intl.formatToPlainString(N.t.dy6viJ, { maxValues: l })
                                        : null;
                            })(t, e);
                        case a.I5.RADIO_GROUP:
                            return (function (t, e) {
                                let { required: n } = t;
                                return null == e || null == e.value ? (n ? N.intl.string(N.t.eJEUvD) : null) : null;
                            })(t, e);
                        case a.I5.CHECKBOX_GROUP:
                            return (function (t, e) {
                                let { minValues: n, maxValues: l, required: i } = t,
                                    r = e?.values.length ?? 0;
                                return 0 === r
                                    ? i
                                        ? N.intl.string(N.t.eJEUvD)
                                        : null
                                    : r < n
                                      ? N.intl.formatToPlainString(N.t.Jmwzdx, { count: n })
                                      : r > l
                                        ? N.intl.formatToPlainString(N.t.LDvfRP, { count: l })
                                        : null;
                            })(t, e);
                        case a.I5.CHECKBOX:
                            return null;
                        default:
                            h()(!1, "missing validator for this component");
                    }
                })(t, e, null != n.modal ? "modal" : "message");
                return n.setValidationErrors?.((e) => ({ ...e, [t.id]: l })), null == l;
            },
            [t, n],
        );
    return (
        i.useEffect(() => {
            function t() {
                return l(e);
            }
            return (
                n.validators?.add(t),
                () => {
                    n.validators?.delete(t);
                }
            );
        }, [n.validators, l, e, t.id]),
        { error: n.validationErrors?.[t.id] ?? null, validate: l }
    );
}
function v(t, e, n, l) {
    let u = (0, r.bG)([A.A], () => A.A.getInteractionComponentState(t.id, n.id)),
        o = (0, r.bG)([d.Ay], () => d.Ay.getInteraction(t), [t]),
        m =
            (function (t) {
                let e = p.A.getChannel(t),
                    n = (0, r.bG)([S.A], () => e?.guild_id == null || S.A.canChatInGuild(e.guild_id), [e]),
                    l = (0, r.bG)([I.A], () => e?.guild_id != null && I.A.isLurking(e.guild_id), [e]),
                    i = (0, r.bG)([g.Ay, f.default], () => {
                        let t = f.default.getCurrentUser();
                        return (
                            (e?.guild_id != null && null != t ? g.Ay.getMember(e?.guild_id, t.id)?.isPending : null) ??
                            !1
                        );
                    }),
                    [, u] = (0, s.c)(e?.guild_id),
                    a = (0, T.H_)(e),
                    o = (0, T.lK)(e);
                return !!(!n || l || i || (e?.isLockedThread() && !a) || (e?.isArchivedThread() && !o)) || !!u;
            })(t.channel_id) || e,
        { error: _, validate: h } = O(n, u),
        N = t.applicationId ?? t.author.id;
    return {
        state: u,
        executeStateUpdate: i.useCallback(
            (e) => {
                if (!h(e)) return !1;
                let l = p.A.getChannel(t.channel_id);
                return (
                    null != l &&
                        null != n.customId &&
                        (0, E.Gv)({
                            componentType: n.type,
                            messageId: t.id,
                            messageFlags: t.flags,
                            customId: n.customId,
                            componentId: n.id,
                            applicationId: N,
                            channelId: l.id,
                            guildId: l.guild_id,
                            localState: e,
                        }),
                    !0
                );
            },
            [t.channel_id, t.flags, t.id, n.customId, n.type, n.id, N, h],
        ),
        isDisabled: m && L(n),
        visualState: (function (t, e) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                l = C.BB.NORMAL;
            return (
                null != t &&
                    t.state !== c.m.FAILED &&
                    (t.data.interactionType === a.G4.MESSAGE_COMPONENT && t.data.componentId === e.id
                        ? (l = C.BB.LOADING)
                        : L(e) && (l = C.BB.DISABLED)),
                n && L(e) && (l = C.BB.DISABLED),
                l
            );
        })(o, n, m),
        error: _,
    };
}
function P(t, e, n) {
    let l = (0, r.bG)([A.A], () => A.A.getInteractionComponentState(t.customId, e.id)),
        [a] = i.useState(n),
        { error: s, validate: d } = O(e, l),
        c = i.useCallback(
            (n) =>
                null == n ||
                (u.h.dispatch({
                    type: "SET_INTERACTION_COMPONENT_STATE",
                    rootContainerId: t.customId,
                    componentId: e.id,
                    state: n,
                }),
                !!d(n)),
            [t.customId, e.id, d],
        );
    return (
        (0, o.Ay)(() => {
            null == l && c(n);
        }),
        { state: l ?? a ?? null, executeStateUpdate: c, isDisabled: !1, visualState: C.BB.NORMAL, error: s }
    );
}
let R = i.createContext(null);
function U(t) {
    let {
            children: e,
            message: n,
            modal: r,
            applicationWidget: u,
            validators: a,
            validationErrors: o,
            setValidationErrors: s,
            shouldDisableInteractiveComponents: d = !1,
        } = t,
        c = i.useMemo(() => {
            if (null != n)
                return {
                    useComponentState: v.bind(null, n, d),
                    channelId: n.channel_id,
                    containerId: n.id,
                    message: n,
                    validators: a,
                    getParents: (t) => (0, m.wT)(n.components, t),
                };
            if (null != r)
                return {
                    useComponentState: P.bind(null, r),
                    channelId: r.channelId,
                    containerId: r.customId,
                    modal: r,
                    validators: a,
                    validationErrors: o,
                    setValidationErrors: s,
                    getParents: (t) => (0, m.wT)(r.components, t),
                };
            if (null != u)
                return {
                    useComponentState: () => {
                        throw Error("ApplicationWidget does not support state");
                    },
                    containerId: `app-widget-${u.applicationId}`,
                    applicationWidget: u,
                    validators: a,
                    validationErrors: o,
                    setValidationErrors: s,
                    getParents: () => {
                        throw Error("ApplicationWidget does not support parents");
                    },
                };
            throw Error("ComponentStateContextProvider requires at least one of message, modal, or applicationWidget");
        }, [n, r, u, d, a, o, s]);
    return (0, l.jsx)(R.Provider, { value: c, children: e });
}
function y(t, e) {
    return i.useContext(R).useComponentState(t, e);
}
function D() {
    return i.useContext(R);
}
function G(t) {
    let e = i.useContext(R);
    return e.validationErrors?.[t.id] ?? null;
}
