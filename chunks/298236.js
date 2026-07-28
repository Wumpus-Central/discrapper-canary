n.d(e, { bO: () => P, At: () => b, f5: () => U, jc: () => D }), n(938796);
var l = n(477900),
    i = n(582128),
    a = n(17928),
    u = n(228366),
    o = n(155718),
    r = n(964486),
    d = n(870136),
    s = n(436283),
    c = n(337591),
    p = n(743738),
    I = n(857071),
    E = n(406704),
    m = n(734057),
    T = n(696451),
    g = n(834942),
    A = n(287809),
    C = n(489414),
    S = n(814890),
    _ = n(138321),
    f = n(284009),
    h = n.n(f),
    y = n(375708);
function O(t) {
    switch (t.type) {
        case o.I5.BUTTON:
            return t.style !== o.in.LINK;
        case o.I5.STRING_SELECT:
        case o.I5.USER_SELECT:
        case o.I5.ROLE_SELECT:
        case o.I5.MENTIONABLE_SELECT:
        case o.I5.CHANNEL_SELECT:
            return !0;
        case o.I5.ACTION_ROW:
        case o.I5.TEXT_INPUT:
        default:
            return !1;
    }
}
function L(t, e) {
    let n = i.useContext(R),
        l = i.useCallback(
            (e) => {
                let l = (function (t, e, n) {
                    switch ((null != e && h()(e.type === t.type, "component type matches state"), t.type)) {
                        case o.I5.BUTTON:
                            return null;
                        case o.I5.STRING_SELECT:
                        case o.I5.USER_SELECT:
                        case o.I5.ROLE_SELECT:
                        case o.I5.MENTIONABLE_SELECT:
                        case o.I5.CHANNEL_SELECT:
                            return (function (t, e, n) {
                                let { minValues: l, maxValues: i, required: a } = t,
                                    u =
                                        null == e
                                            ? 0
                                            : e.type === o.I5.STRING_SELECT
                                              ? e.values.length
                                              : e.selectedOptions.length;
                                return 0 === u
                                    ? (0, S.Lr)({ minValues: l, required: a }, n)
                                        ? null
                                        : y.intl.string(y.t.eJEUvD)
                                    : u < l
                                      ? y.intl.formatToPlainString(y.t.Jmwzdx, { count: l })
                                      : u > i
                                        ? y.intl.formatToPlainString(y.t.LDvfRP, { count: i })
                                        : null;
                            })(t, e, n);
                        case o.I5.TEXT_INPUT:
                            return (function (t, e) {
                                let { minLength: n, maxLength: l, required: i } = t;
                                return null == e || 0 === e.value.length
                                    ? i
                                        ? y.intl.string(y.t.eJEUvD)
                                        : null
                                    : e.value.length < n || e.value.length > l
                                      ? y.intl.formatToPlainString(y.t.ONSqYd, { min: n, max: l })
                                      : null;
                            })(t, e);
                        case o.I5.FILE_UPLOAD:
                            return (function (t, e) {
                                let { minValues: n, maxValues: l, required: i } = t,
                                    a = e?.uploadIds.length ?? 0;
                                return 0 === a
                                    ? i
                                        ? y.intl.string(y.t.eJEUvD)
                                        : null
                                    : a < n
                                      ? y.intl.formatToPlainString(y.t.pmAt62, { minValues: n })
                                      : a > l
                                        ? y.intl.formatToPlainString(y.t.dy6viJ, { maxValues: l })
                                        : null;
                            })(t, e);
                        case o.I5.RADIO_GROUP:
                            return (function (t, e) {
                                let { required: n } = t;
                                return null == e || null == e.value ? (n ? y.intl.string(y.t.eJEUvD) : null) : null;
                            })(t, e);
                        case o.I5.CHECKBOX_GROUP:
                            return (function (t, e) {
                                let { minValues: n, maxValues: l, required: i } = t,
                                    a = e?.values.length ?? 0;
                                return 0 === a
                                    ? i
                                        ? y.intl.string(y.t.eJEUvD)
                                        : null
                                    : a < n
                                      ? y.intl.formatToPlainString(y.t.Jmwzdx, { count: n })
                                      : a > l
                                        ? y.intl.formatToPlainString(y.t.LDvfRP, { count: l })
                                        : null;
                            })(t, e);
                        case o.I5.CHECKBOX:
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
function N(t, e, n, l) {
    let u = (0, a.bG)([_.A], () => _.A.getInteractionComponentState(t.id, n.id)),
        r = (0, a.bG)([s.Ay], () => s.Ay.getInteraction(t), [t]),
        S =
            (function (t) {
                let e = m.A.getChannel(t),
                    n = (0, a.bG)([g.A], () => e?.guild_id == null || g.A.canChatInGuild(e.guild_id), [e]),
                    l = (0, a.bG)([I.A], () => e?.guild_id != null && I.A.isLurking(e.guild_id), [e]),
                    i = (0, a.bG)([T.Ay, A.default], () => {
                        let t = A.default.getCurrentUser();
                        return (
                            (e?.guild_id != null && null != t ? T.Ay.getMember(e?.guild_id, t.id)?.isPending : null) ??
                            !1
                        );
                    }),
                    [, u] = (0, d.c)(e?.guild_id),
                    o = (0, E.H_)(e),
                    r = (0, E.lK)(e);
                return !!(!n || l || i || (e?.isLockedThread() && !o) || (e?.isArchivedThread() && !r)) || !!u;
            })(t.channel_id) || e,
        { error: f, validate: h } = L(n, u),
        y = t.applicationId ?? t.author.id;
    return {
        state: u,
        executeStateUpdate: i.useCallback(
            (e) => {
                if (!h(e)) return !1;
                let l = m.A.getChannel(t.channel_id);
                return (
                    null != l &&
                        null != n.customId &&
                        (0, p.Gv)({
                            componentType: n.type,
                            messageId: t.id,
                            messageFlags: t.flags,
                            customId: n.customId,
                            componentId: n.id,
                            applicationId: y,
                            channelId: l.id,
                            guildId: l.guild_id,
                            localState: e,
                        }),
                    !0
                );
            },
            [t.channel_id, t.flags, t.id, n.customId, n.type, n.id, y, h],
        ),
        isDisabled: S && O(n),
        visualState: (function (t, e) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                l = C.BB.NORMAL;
            return (
                null != t &&
                    t.state !== c.m.FAILED &&
                    (t.data.interactionType === o.G4.MESSAGE_COMPONENT && t.data.componentId === e.id
                        ? (l = C.BB.LOADING)
                        : O(e) && (l = C.BB.DISABLED)),
                n && O(e) && (l = C.BB.DISABLED),
                l
            );
        })(r, n, S),
        error: f,
    };
}
function v(t, e, n) {
    let l = (0, a.bG)([_.A], () => _.A.getInteractionComponentState(t.customId, e.id)),
        [o] = i.useState(n),
        { error: d, validate: s } = L(e, l),
        c = i.useCallback(
            (n) =>
                null == n ||
                (u.h.dispatch({
                    type: "SET_INTERACTION_COMPONENT_STATE",
                    rootContainerId: t.customId,
                    componentId: e.id,
                    state: n,
                }),
                !!s(n)),
            [t.customId, e.id, s],
        );
    return (
        (0, r.Ay)(() => {
            null == l && c(n);
        }),
        { state: l ?? o ?? null, executeStateUpdate: c, isDisabled: !1, visualState: C.BB.NORMAL, error: d }
    );
}
let R = i.createContext(null);
function U(t) {
    let {
            children: e,
            message: n,
            modal: a,
            applicationWidget: u,
            validators: o,
            validationErrors: r,
            setValidationErrors: d,
            shouldDisableInteractiveComponents: s = !1,
        } = t,
        c = i.useMemo(() => {
            if (null != n)
                return {
                    useComponentState: N.bind(null, n, s),
                    channelId: n.channel_id,
                    containerId: n.id,
                    message: n,
                    validators: o,
                    getParents: (t) => (0, S.wT)(n.components, t),
                };
            if (null != a)
                return {
                    useComponentState: v.bind(null, a),
                    channelId: a.channelId,
                    containerId: a.customId,
                    modal: a,
                    validators: o,
                    validationErrors: r,
                    setValidationErrors: d,
                    getParents: (t) => (0, S.wT)(a.components, t),
                };
            if (null != u)
                return {
                    useComponentState: () => {
                        throw Error("ApplicationWidget does not support state");
                    },
                    containerId: `app-widget-${u.applicationId}`,
                    applicationWidget: u,
                    validators: o,
                    validationErrors: r,
                    setValidationErrors: d,
                    getParents: () => {
                        throw Error("ApplicationWidget does not support parents");
                    },
                };
            throw Error("ComponentStateContextProvider requires at least one of message, modal, or applicationWidget");
        }, [n, a, u, s, o, r, d]);
    return (0, l.jsx)(R.Provider, { value: c, children: e });
}
function b(t, e) {
    return i.useContext(R).useComponentState(t, e);
}
function D() {
    return i.useContext(R);
}
function P(t) {
    let e = i.useContext(R);
    return e.validationErrors?.[t.id] ?? null;
}
