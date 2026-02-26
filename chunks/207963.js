n.d(e, { At: () => U, bO: () => D, f5: () => R, jc: () => y }), n(938796);
var l = n(627968),
    i = n(64700),
    r = n(311907),
    a = n(73153),
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
    A = n(287809),
    C = n(489414),
    m = n(814890),
    f = n(322980),
    _ = n(270761);
let h = (t) => {
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
    N = function (t, e) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            l = C.BB.NORMAL;
        return (
            null != t &&
                t.state !== c.m.FAILED &&
                (t.data.interactionType === u.G4.MESSAGE_COMPONENT && t.data.componentId === e.id
                    ? (l = C.BB.LOADING)
                    : h(e) && (l = C.BB.DISABLED)),
            n && h(e) && (l = C.BB.DISABLED),
            l
        );
    };
function O(t, e) {
    let n = i.useContext(P),
        l = i.useCallback(
            (e) => {
                let l = (0, _.A)(t, e, null != n.modal ? "modal" : "message");
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
function L(t, e, n, l) {
    let a = (0, r.bG)([f.A], () => f.A.getInteractionComponentState(t.id, n.id)),
        u = (0, r.bG)([d.Ay], () => d.Ay.getInteraction(t), [t]),
        o =
            ((t) => {
                let e = p.A.getChannel(t),
                    n = (0, r.bG)([S.A], () => e?.guild_id == null || S.A.canChatInGuild(e.guild_id), [e]),
                    l = (0, r.bG)([I.A], () => e?.guild_id != null && I.A.isLurking(e.guild_id), [e]),
                    i = (0, r.bG)([g.Ay, A.default], () => {
                        let t = A.default.getCurrentUser();
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
        { error: c, validate: C } = O(n, a),
        m = t.applicationId ?? t.author.id;
    return {
        state: a,
        executeStateUpdate: i.useCallback(
            (e) => {
                if (!C(e)) return !1;
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
                            applicationId: m,
                            channelId: l.id,
                            guildId: l.guild_id,
                            localState: e,
                        }),
                    !0
                );
            },
            [t.channel_id, t.flags, t.id, n.customId, n.type, n.id, m, C],
        ),
        isDisabled: o && h(n),
        visualState: N(u, n, o),
        error: c,
    };
}
function v(t, e, n) {
    let l = (0, r.bG)([f.A], () => f.A.getInteractionComponentState(t.customId, e.id)),
        [u] = i.useState(n),
        { error: s, validate: d } = O(e, l),
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
        { state: l ?? u ?? null, executeStateUpdate: c, isDisabled: !1, visualState: C.BB.NORMAL, error: s }
    );
}
let P = i.createContext(null);
function R(t) {
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
                    useComponentState: L.bind(null, n, d),
                    channelId: n.channel_id,
                    containerId: n.id,
                    message: n,
                    validators: u,
                    getParents: (t) => (0, m.wT)(n.components, t),
                };
            if (null != r)
                return {
                    useComponentState: v.bind(null, r),
                    channelId: r.channelId,
                    containerId: r.customId,
                    modal: r,
                    validators: u,
                    validationErrors: o,
                    setValidationErrors: s,
                    getParents: (t) => (0, m.wT)(r.components, t),
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
    return (0, l.jsx)(P.Provider, { value: c, children: e });
}
function U(t, e) {
    return i.useContext(P).useComponentState(t, e);
}
function y() {
    return i.useContext(P);
}
function D(t) {
    let e = i.useContext(P);
    return e.validationErrors?.[t.id] ?? null;
}
