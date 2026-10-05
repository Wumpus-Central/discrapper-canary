(n.d(e, { bO: () => M, At: () => D, f5: () => b, jc: () => P }), n(938796));
var l = n(477900),
    i = n(582128),
    a = n(127258),
    u = n(17928),
    o = n(73153),
    r = n(155718),
    d = n(964486),
    s = n(870136),
    c = n(436283),
    p = n(337591),
    I = n(743738),
    E = n(857071),
    m = n(406704),
    T = n(734057),
    g = n(696451),
    A = n(834942),
    C = n(287809),
    S = n(489414),
    _ = n(437517),
    f = n(138321),
    h = n(284009),
    y = n.n(h),
    L = n(375708);
function O(t) {
    switch (t.type) {
        case r.I5.BUTTON:
            return t.style !== r.in.LINK;
        case r.I5.STRING_SELECT:
        case r.I5.USER_SELECT:
        case r.I5.ROLE_SELECT:
        case r.I5.MENTIONABLE_SELECT:
        case r.I5.CHANNEL_SELECT:
            return !0;
        case r.I5.ACTION_ROW:
        case r.I5.TEXT_INPUT:
        default:
            return !1;
    }
}
function N(t, e) {
    let n = i.useContext(U),
        l = i.useCallback(
            (e) => {
                let l = (function (t, e, n) {
                    switch ((null != e && y()(e.type === t.type, "component type matches state"), t.type)) {
                        case r.I5.BUTTON:
                            return null;
                        case r.I5.STRING_SELECT:
                        case r.I5.USER_SELECT:
                        case r.I5.ROLE_SELECT:
                        case r.I5.MENTIONABLE_SELECT:
                        case r.I5.CHANNEL_SELECT:
                            return (function (t, e, n) {
                                let { minValues: l, maxValues: i, required: a } = t,
                                    u =
                                        null == e
                                            ? 0
                                            : e.type === r.I5.STRING_SELECT
                                              ? e.values.length
                                              : e.selectedOptions.length;
                                return 0 === u
                                    ? (0, _.Lr)({ minValues: l, required: a }, n)
                                        ? null
                                        : L.intl.string(L.t.eJEUvD)
                                    : u < l
                                      ? L.intl.formatToPlainString(L.t.Jmwzdx, { count: l })
                                      : u > i
                                        ? L.intl.formatToPlainString(L.t.LDvfRP, { count: i })
                                        : null;
                            })(t, e, n);
                        case r.I5.TEXT_INPUT:
                            return (function (t, e) {
                                let { minLength: n, maxLength: l, required: i } = t;
                                return null == e || 0 === e.value.length
                                    ? i
                                        ? L.intl.string(L.t.eJEUvD)
                                        : null
                                    : e.value.length < n || e.value.length > l
                                      ? L.intl.formatToPlainString(L.t.ONSqYd, { min: n, max: l })
                                      : null;
                            })(t, e);
                        case r.I5.FILE_UPLOAD:
                            return (function (t, e) {
                                let { minValues: n, maxValues: l, required: i } = t,
                                    a = e?.uploadIds.length ?? 0;
                                return 0 === a
                                    ? i
                                        ? L.intl.string(L.t.eJEUvD)
                                        : null
                                    : a < n
                                      ? L.intl.formatToPlainString(L.t.pmAt62, { minValues: n })
                                      : a > l
                                        ? L.intl.formatToPlainString(L.t.dy6viJ, { maxValues: l })
                                        : null;
                            })(t, e);
                        case r.I5.RADIO_GROUP:
                            return (function (t, e) {
                                let { required: n } = t;
                                return null == e || null == e.value ? (n ? L.intl.string(L.t.eJEUvD) : null) : null;
                            })(t, e);
                        case r.I5.CHECKBOX_GROUP:
                            return (function (t, e) {
                                let { minValues: n, maxValues: l, required: i } = t,
                                    a = e?.values.length ?? 0;
                                return 0 === a
                                    ? i
                                        ? L.intl.string(L.t.eJEUvD)
                                        : null
                                    : a < n
                                      ? L.intl.formatToPlainString(L.t.Jmwzdx, { count: n })
                                      : a > l
                                        ? L.intl.formatToPlainString(L.t.LDvfRP, { count: l })
                                        : null;
                            })(t, e);
                        case r.I5.CHECKBOX:
                            return null;
                        default:
                            y()(!1, "missing validator for this component");
                    }
                })(t, e, null != n.modal ? "modal" : "message");
                return (n.setValidationErrors?.((e) => ({ ...e, [t.id]: l })), null == l);
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
    let o = (0, u.bG)([f.A], () => f.A.getInteractionComponentState(t.id, n.id)),
        r = (0, u.bG)([c.Ay], () => c.Ay.getInteraction(t), [t]),
        d =
            (function (t) {
                let e = T.A.getChannel(t),
                    n = (0, u.bG)([A.A], () => e?.guild_id == null || A.A.canChatInGuild(e.guild_id), [e]),
                    l = (0, u.bG)([E.A], () => e?.guild_id != null && E.A.isLurking(e.guild_id), [e]),
                    i = (0, u.bG)([g.Ay, C.default], () => {
                        let t = C.default.getCurrentUser();
                        return (
                            (e?.guild_id != null && null != t ? g.Ay.getMember(e?.guild_id, t.id)?.isPending : null) ??
                            !1
                        );
                    }),
                    [, a] = (0, s.c)(e?.guild_id),
                    o = (0, m.H_)(e),
                    r = (0, m.lK)(e);
                return !!(!n || l || i || (e?.isLockedThread() && !o) || (e?.isArchivedThread() && !r)) || !!a;
            })(t.channel_id) || e,
        { error: _, validate: h } = N(n, o),
        y = t.applicationId ?? t.author.id;
    return {
        state: o,
        executeStateUpdate: i.useCallback(
            (e) => {
                if (!h(e)) return !1;
                let l = T.A.getChannel(t.channel_id);
                return (
                    null != l &&
                        null != n.customId &&
                        (0, I.Gv)({
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
        isDisabled: d && O(n),
        visualState: (function (t, e) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                l = S.BB.NORMAL;
            return (
                null != t &&
                    t.state !== p.m.FAILED &&
                    (t.data.interactionType === a.G.MESSAGE_COMPONENT && t.data.componentId === e.id
                        ? (l = S.BB.LOADING)
                        : O(e) && (l = S.BB.DISABLED)),
                n && O(e) && (l = S.BB.DISABLED),
                l
            );
        })(r, n, d),
        error: _,
    };
}
function R(t, e, n) {
    let l = (0, u.bG)([f.A], () => f.A.getInteractionComponentState(t.customId, e.id)),
        [a] = i.useState(n),
        { error: r, validate: s } = N(e, l),
        c = i.useCallback(
            (n) =>
                null == n ||
                (o.h.dispatch({
                    type: "SET_INTERACTION_COMPONENT_STATE",
                    rootContainerId: t.customId,
                    componentId: e.id,
                    state: n,
                }),
                !!s(n)),
            [t.customId, e.id, s],
        );
    return (
        (0, d.Ay)(() => {
            null == l && c(n);
        }),
        { state: l ?? a ?? null, executeStateUpdate: c, isDisabled: !1, visualState: S.BB.NORMAL, error: r }
    );
}
let U = i.createContext(null);
function b(t) {
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
                    useComponentState: v.bind(null, n, s),
                    channelId: n.channel_id,
                    containerId: n.id,
                    message: n,
                    validators: o,
                    getParents: (t) => (0, _.wT)(n.components, t),
                };
            if (null != a)
                return {
                    useComponentState: R.bind(null, a),
                    channelId: a.channelId,
                    containerId: a.customId,
                    modal: a,
                    validators: o,
                    validationErrors: r,
                    setValidationErrors: d,
                    getParents: (t) => (0, _.wT)(a.components, t),
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
    return (0, l.jsx)(U.Provider, { value: c, children: e });
}
function D(t, e) {
    return i.useContext(U).useComponentState(t, e);
}
function P() {
    return i.useContext(U);
}
function M(t) {
    let e = i.useContext(U);
    return e.validationErrors?.[t.id] ?? null;
}
