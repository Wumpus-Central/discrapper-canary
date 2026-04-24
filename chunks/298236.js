n.d(e, { bO: () => B, At: () => D, f5: () => y, jc: () => G }), n(938796);
var l = n(627968),
    i = n(64700),
    r = n(17928),
    a = n(228366),
    u = n(155718),
    o = n(964486),
    s = n(870136),
    d = n(436283),
    c = n(337591),
    E = n(296043),
    I = n(857071),
    T = n(406704),
    p = n(734057),
    g = n(696451),
    S = n(834942),
    C = n(287809),
    m = n(489414),
    A = n(814890),
    f = n(138321),
    _ = n(284009),
    h = n.n(_),
    N = n(985018);
let L = (t) => {
        switch (t.type) {
            case u.I5.BUTTON:
                return t.style !== u.in.LINK;
            case u.I5.STRING_SELECT:
            case u.I5.USER_SELECT:
            case u.I5.ROLE_SELECT:
            case u.I5.MENTIONABLE_SELECT:
            case u.I5.CHANNEL_SELECT:
                return !0;
            case u.I5.ACTION_ROW:
            case u.I5.TEXT_INPUT:
            default:
                return !1;
        }
    },
    O = function (t, e) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            l = m.BB.NORMAL;
        return (
            null != t &&
                t.state !== c.m.FAILED &&
                (t.data.interactionType === u.G4.MESSAGE_COMPONENT && t.data.componentId === e.id
                    ? (l = m.BB.LOADING)
                    : L(e) && (l = m.BB.DISABLED)),
            n && L(e) && (l = m.BB.DISABLED),
            l
        );
    };
function v(t, e) {
    let n = i.useContext(U),
        l = i.useCallback(
            (e) => {
                let l = (function (t, e, n) {
                    switch ((null != e && h()(e.type === t.type, "component type matches state"), t.type)) {
                        case u.I5.BUTTON:
                            return null;
                        case u.I5.STRING_SELECT:
                        case u.I5.USER_SELECT:
                        case u.I5.ROLE_SELECT:
                        case u.I5.MENTIONABLE_SELECT:
                        case u.I5.CHANNEL_SELECT:
                            return ((t, e, n) => {
                                let { minValues: l, maxValues: i, required: r } = t,
                                    a =
                                        null == e
                                            ? 0
                                            : e.type === u.I5.STRING_SELECT
                                              ? e.values.length
                                              : e.selectedOptions.length;
                                return 0 === a
                                    ? (0, A.Lr)({ minValues: l, required: r }, n)
                                        ? null
                                        : N.intl.string(N.t.eJEUvD)
                                    : a < l
                                      ? N.intl.formatToPlainString(N.t.Jmwzdx, { count: l })
                                      : a > i
                                        ? N.intl.formatToPlainString(N.t.LDvfRP, { count: i })
                                        : null;
                            })(t, e, n);
                        case u.I5.TEXT_INPUT:
                            return ((t, e) => {
                                let { minLength: n, maxLength: l, required: i } = t;
                                return null == e || 0 === e.value.length
                                    ? i
                                        ? N.intl.string(N.t.eJEUvD)
                                        : null
                                    : e.value.length < n || e.value.length > l
                                      ? N.intl.formatToPlainString(N.t.ONSqYd, { min: n, max: l })
                                      : null;
                            })(t, e);
                        case u.I5.FILE_UPLOAD:
                            return ((t, e) => {
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
                        case u.I5.RADIO_GROUP:
                            return ((t, e) => {
                                let { required: n } = t;
                                return null == e || null == e.value ? (n ? N.intl.string(N.t.eJEUvD) : null) : null;
                            })(t, e);
                        case u.I5.CHECKBOX_GROUP:
                            return ((t, e) => {
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
                        case u.I5.CHECKBOX:
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
            let t = () => l(e);
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
function P(t, e, n, l) {
    let a = (0, r.bG)([f.A], () => f.A.getInteractionComponentState(t.id, n.id)),
        u = (0, r.bG)([d.Ay], () => d.Ay.getInteraction(t), [t]),
        o =
            ((t) => {
                let e = p.A.getChannel(t),
                    n = (0, r.bG)([S.A], () => e?.guild_id == null || S.A.canChatInGuild(e.guild_id), [e]),
                    l = (0, r.bG)([I.A], () => e?.guild_id != null && I.A.isLurking(e.guild_id), [e]),
                    i = (0, r.bG)([g.Ay, C.default], () => {
                        let t = C.default.getCurrentUser();
                        return (
                            (e?.guild_id != null && null != t ? g.Ay.getMember(e?.guild_id, t.id)?.isPending : null) ??
                            !1
                        );
                    }),
                    [, a] = (0, s.c)(e?.guild_id),
                    u = (0, T.H_)(e),
                    o = (0, T.lK)(e);
                return !!(!n || l || i || (e?.isLockedThread() && !u) || (e?.isArchivedThread() && !o)) || !!a;
            })(t.channel_id) || e,
        { error: c, validate: m } = v(n, a),
        A = t.applicationId ?? t.author.id;
    return {
        state: a,
        executeStateUpdate: i.useCallback(
            (e) => {
                if (!m(e)) return !1;
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
                            applicationId: A,
                            channelId: l.id,
                            guildId: l.guild_id,
                            localState: e,
                        }),
                    !0
                );
            },
            [t.channel_id, t.flags, t.id, n.customId, n.type, n.id, A, m],
        ),
        isDisabled: o && L(n),
        visualState: O(u, n, o),
        error: c,
    };
}
function R(t, e, n) {
    let l = (0, r.bG)([f.A], () => f.A.getInteractionComponentState(t.customId, e.id)),
        [u] = i.useState(n),
        { error: s, validate: d } = v(e, l),
        c = i.useCallback(
            (n) =>
                null == n ||
                (a.h.dispatch({
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
        { state: l ?? u ?? null, executeStateUpdate: c, isDisabled: !1, visualState: m.BB.NORMAL, error: s }
    );
}
let U = i.createContext(null);
function y(t) {
    let {
            children: e,
            message: n,
            modal: r,
            applicationWidget: a,
            validators: u,
            validationErrors: o,
            setValidationErrors: s,
            shouldDisableInteractiveComponents: d = !1,
        } = t,
        c = i.useMemo(() => {
            if (null != n)
                return {
                    useComponentState: P.bind(null, n, d),
                    channelId: n.channel_id,
                    containerId: n.id,
                    message: n,
                    validators: u,
                    getParents: (t) => (0, A.wT)(n.components, t),
                };
            if (null != r)
                return {
                    useComponentState: R.bind(null, r),
                    channelId: r.channelId,
                    containerId: r.customId,
                    modal: r,
                    validators: u,
                    validationErrors: o,
                    setValidationErrors: s,
                    getParents: (t) => (0, A.wT)(r.components, t),
                };
            if (null != a)
                return {
                    useComponentState: () => {
                        throw Error("ApplicationWidget does not support state");
                    },
                    containerId: `app-widget-${a.applicationId}`,
                    applicationWidget: a,
                    validators: u,
                    validationErrors: o,
                    setValidationErrors: s,
                    getParents: () => {
                        throw Error("ApplicationWidget does not support parents");
                    },
                };
            throw Error("ComponentStateContextProvider requires at least one of message, modal, or applicationWidget");
        }, [n, r, a, d, u, o, s]);
    return (0, l.jsx)(U.Provider, { value: c, children: e });
}
function D(t, e) {
    return i.useContext(U).useComponentState(t, e);
}
function G() {
    return i.useContext(U);
}
function B(t) {
    let e = i.useContext(U);
    return e.validationErrors?.[t.id] ?? null;
}
