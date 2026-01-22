n.d(t, {
    At: () => U,
    bO: () => V,
    f5: () => k,
    jc: () => G,
}),
    n(896048),
    n(938796),
    n(65821);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(73153),
    o = n(155718),
    l = n(964486),
    c = n(870136),
    u = n(436283),
    d = n(337591),
    f = n(296043),
    p = n(857071),
    _ = n(406704),
    h = n(734057),
    m = n(696451),
    g = n(834942),
    E = n(287809),
    b = n(489414),
    y = n(814890),
    O = n(322980),
    A = n(270761);

function v(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                v(e, t, n[t]);
            });
    }
    return e;
}

function I(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let C = (e) => {
        switch (e.type) {
            case o.I5.BUTTON:
                return e.style !== o.in.LINK;
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
    },
    N = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = b.BB.NORMAL;
        return (
            null != e &&
                e.state !== d.m.FAILED &&
                (e.data.interactionType === o.G4.MESSAGE_COMPONENT && e.data.componentId === t.id
                    ? (r = b.BB.LOADING)
                    : C(t) && (r = b.BB.DISABLED)),
            n && C(t) && (r = b.BB.DISABLED),
            r
        );
    };

function R(e) {
    return "app-widget-".concat(e.applicationId);
}
let w = (e) => {
    let t = h.A.getChannel(e),
        n = (0, a.bG)([g.A], () => (null == t ? void 0 : t.guild_id) == null || g.A.canChatInGuild(t.guild_id), [t]),
        r = (0, a.bG)([p.A], () => (null == t ? void 0 : t.guild_id) != null && p.A.isLurking(t.guild_id), [t]),
        i = (0, a.bG)([m.Ay, E.default], () => {
            var e, n;
            let r = E.default.getCurrentUser();
            return (
                null !=
                    (e =
                        (null == t ? void 0 : t.guild_id) != null && null != r
                            ? null == (n = m.Ay.getMember(null == t ? void 0 : t.guild_id, r.id))
                                ? void 0
                                : n.isPending
                            : null) && e
            );
        }),
        [, s] = (0, c.c)(null == t ? void 0 : t.guild_id),
        o = (0, _.H_)(t),
        l = (0, _.lK)(t);
    return (
        !!(
            !n ||
            r ||
            i ||
            ((null == t ? void 0 : t.isLockedThread()) && !o) ||
            ((null == t ? void 0 : t.isArchivedThread()) && !l)
        ) || !!s
    );
};

function P(e, t) {
    var n, r;
    let a = i.useContext(M),
        s = i.useCallback(
            (t) => {
                var n;
                let r = (0, A.A)(e, t, null != a.modal ? "modal" : "message");
                return (
                    null == (n = a.setValidationErrors) ||
                        n.call(a, (t) =>
                            T(S({}, t), {
                                [e.id]: r,
                            }),
                        ),
                    null == r
                );
            },
            [e, a],
        );
    return (
        i.useEffect(() => {
            var e;
            let n = () => s(t);
            return (
                null == (e = a.validators) || e.add(n),
                () => {
                    var e;
                    null == (e = a.validators) || e.delete(n);
                }
            );
        }, [a.validators, s, t, e.id]),
        {
            error: null != (n = null == (r = a.validationErrors) ? void 0 : r[e.id]) ? n : null,
            validate: s,
        }
    );
}

function D(e, t, n, r) {
    var s;
    let o = (0, a.bG)([O.A], () => O.A.getInteractionComponentState(e.id, n.id)),
        l = (0, a.bG)([u.Ay], () => u.Ay.getInteraction(e), [e]),
        c = w(e.channel_id) || t,
        { error: d, validate: p } = P(n, o),
        _ = null != (s = e.applicationId) ? s : e.author.id;
    return {
        state: o,
        executeStateUpdate: i.useCallback(
            (t) => {
                if (!p(t)) return !1;
                let r = h.A.getChannel(e.channel_id);
                return (
                    null != r &&
                        null != n.customId &&
                        (0, f.Gv)({
                            componentType: n.type,
                            messageId: e.id,
                            messageFlags: e.flags,
                            customId: n.customId,
                            componentId: n.id,
                            applicationId: _,
                            channelId: r.id,
                            guildId: r.guild_id,
                            localState: t,
                        }),
                    !0
                );
            },
            [e.channel_id, e.flags, e.id, n.customId, n.type, n.id, _, p],
        ),
        isDisabled: c && C(n),
        visualState: N(l, n, c),
        error: d,
    };
}

function x(e, t, n) {
    let r = (0, a.bG)([O.A], () => O.A.getInteractionComponentState(e.customId, t.id)),
        { error: o, validate: c } = P(t, r),
        u = i.useCallback(
            (n) =>
                null == n ||
                (s.h.dispatch({
                    type: "SET_INTERACTION_COMPONENT_STATE",
                    rootContainerId: e.customId,
                    componentId: t.id,
                    state: n,
                }),
                !!c(n)),
            [e.customId, t.id, c],
        );
    return (
        (0, l.Ay)(() => {
            u(n);
        }),
        {
            state: r,
            executeStateUpdate: u,
            isDisabled: !1,
            visualState: b.BB.NORMAL,
            error: o,
        }
    );
}

function L(e) {
    return () => {
        throw Error("".concat(e, " does not support state"));
    };
}

function j(e) {
    return () => {
        throw Error("".concat(e, " does not support parents"));
    };
}
let M = i.createContext(null);

function k(e) {
    let {
            children: t,
            message: n,
            modal: a,
            applicationWidget: s,
            validators: o,
            validationErrors: l,
            setValidationErrors: c,
            shouldDisableInteractiveComponents: u = !1,
        } = e,
        d = i.useMemo(() => {
            if (null != n)
                return {
                    useComponentState: D.bind(null, n, u),
                    channelId: n.channel_id,
                    containerId: n.id,
                    message: n,
                    validators: o,
                    getParents: (e) => (0, y.wT)(n.components, e),
                };
            if (null != a)
                return {
                    useComponentState: x.bind(null, a),
                    channelId: a.channelId,
                    containerId: a.customId,
                    modal: a,
                    validators: o,
                    validationErrors: l,
                    setValidationErrors: c,
                    getParents: (e) => (0, y.wT)(a.components, e),
                };
            if (null != s)
                return {
                    useComponentState: L("ApplicationWidget"),
                    containerId: R(s),
                    applicationWidget: s,
                    validators: o,
                    validationErrors: l,
                    setValidationErrors: c,
                    getParents: j("ApplicationWidget"),
                };
            throw Error("ComponentStateContextProvider requires at least one of message, modal, or applicationWidget");
        }, [n, a, s, u, o, l, c]);
    return (0, r.jsx)(M.Provider, {
        value: d,
        children: t,
    });
}

function U(e, t) {
    return i.useContext(M).useComponentState(e, t);
}

function G() {
    return i.useContext(M);
}

function V(e) {
    var t, n;
    return null != (t = null == (n = i.useContext(M).validationErrors) ? void 0 : n[e.id]) ? t : null;
}
