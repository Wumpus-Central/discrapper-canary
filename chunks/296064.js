n.d(t, { r: () => U });
var l = n(627968),
    i = n(64700),
    r = n(6161),
    s = n(681154),
    a = n(974690),
    u = n(311907),
    o = n(990078),
    d = n(820081),
    c = n(297152),
    h = n(241541),
    g = n(559647),
    m = n(173054),
    I = n(408278),
    E = n(933958),
    A = n(776677),
    f = n(206589),
    p = n(833349),
    S = n(672979),
    N = n(734057),
    x = n(498642),
    T = n(71393),
    _ = n(375492),
    y = n(576705),
    v = n(994500),
    C = n(309010),
    R = n(461213),
    D = n(287809),
    b = n(977997),
    j = n(689168),
    M = n(661191),
    k = n(243612),
    O = n(67103),
    w = n(652215),
    L = n(985018);
function F(e) {
    return e.find((e) => (0, p.A)(e, w.jUm.JOIN));
}
function G(e, t) {
    return null == t ? F(e) : (e.find((e) => (0, p.A)(e, w.jUm.JOIN) && e.application_id === t) ?? F(e));
}
function U(e) {
    let { user: t, friendActivities: n, currentUserPlayingActivities: p, gameProfileEntry: F, onPrimaryAction: U } = e,
        [P, V] = i.useState(!1),
        H = i.useRef(null);
    i.useEffect(
        () => () => {
            null != H.current && clearTimeout(H.current);
        },
        [],
    );
    let Y = (0, u.bG)([D.default, N.A, T.A, x.A, v.A, C.A, b.A, y.A, _.A, R.A, E.Ay, j.A], () => {
            let e = D.default.getCurrentUser(),
                l = (0, k.qv)(),
                i = l?.altId ?? l?.id,
                u = G(n, i),
                o = G(p, i);
            if (null != u && null != u.application_id) {
                if (j.A.getState(u.application_id, w.xL.JOIN) === w.eAD.LOADING)
                    return { kind: "joining", activity: u };
                let n = (0, A.A)({
                    user: t,
                    activity: u,
                    application: null,
                    channelId: null,
                    currentUser: e,
                    isEmbedded: !1,
                    ChannelStore: N.A,
                    GuildStore: T.A,
                    GuildMemberCountStore: x.A,
                    RelationshipStore: v.A,
                    SelectedChannelStore: C.A,
                    VoiceStateStore: b.A,
                    PermissionStore: y.A,
                    LocalActivityStore: _.A,
                    SelfPresenceStore: R.A,
                    EmbeddedActivitiesStore: E.Ay,
                });
                if (n === A.o.JOINED) return { kind: "joined", activity: u };
                if (n === A.o.CAN_JOIN) return { kind: "join", activity: u };
                if (null == o) return { kind: "ask_to_join", activity: u };
            }
            if (null != o)
                return {
                    kind: n.some((e) => e.application_id === o.application_id && (0, f.w)(e, o))
                        ? "joined"
                        : "invite_to_activity",
                    activity: o,
                };
            if (null != F) return { kind: "send_game_invite_message", gameEntry: F };
            let d = p.find(S.A);
            if (null != d) {
                var c;
                let e;
                return {
                    kind: "send_game_invite_message",
                    gameEntry:
                        ((c = t.id),
                        (e = d.timestamps?.start ?? Date.now()),
                        {
                            id: M.default.fromTimestamp(e),
                            author_id: c,
                            extra: {
                                type: "played_game_extra",
                                game_name: d.name,
                                application_id: d.application_id ?? "",
                                fake_inventory_item: !0,
                            },
                            content_type: s.ContentInventoryEntryType.PLAYED_GAME,
                            author_type: r.ContentInventoryAuthorType.USER,
                            participants: [],
                            traits: [{ type: a.K.IS_LIVE, is_live: !0 }],
                        }),
                };
            }
            return null;
        }, [n, p, F, t]),
        K = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    P ||
                        null == Y ||
                        "joined" === Y.kind ||
                        "joining" === Y.kind ||
                        (V(!0),
                        null != H.current && clearTimeout(H.current),
                        (H.current = setTimeout(() => {
                            V(!1), (H.current = null);
                        }, 2e3)),
                        U?.({
                            type: (function (e) {
                                switch (e) {
                                    case "ask_to_join":
                                        return O.c.ASK_TO_JOIN;
                                    case "invite_to_activity":
                                        return O.c.SEND_ACTIVITY_INVITE;
                                    case "send_game_invite_message":
                                        return O.c.SEND_GAME_INVITE_MESSAGE;
                                    case "join":
                                    case "joining":
                                    case "joined":
                                        return O.c.JOIN;
                                }
                            })(Y.kind),
                            userId: t.id,
                            activity: Y.activity,
                            gameEntry: Y.gameEntry,
                        }));
            },
            [P, Y, t.id, U],
        );
    if (null == Y || "joined" === Y.kind) return null;
    let z = (function (e, t) {
            if (t) return d.B;
            switch (e) {
                case "ask_to_join":
                    return c.E;
                case "invite_to_activity":
                    return h.D;
                case "send_game_invite_message":
                    return g.l;
                case "join":
                case "joining":
                case "joined":
                    return m.M;
            }
        })(Y.kind, P),
        X = (function (e) {
            switch (e) {
                case "ask_to_join":
                    return L.intl.string(L.t.OKsSCR);
                case "invite_to_activity":
                    return L.intl.string(L.t["3fRySx"]);
                case "send_game_invite_message":
                    return L.intl.string(L.t.XHxDIV);
                case "join":
                    return L.intl.string(L.t.VJlc0S);
                case "joining":
                    return L.intl.string(L.t.bf6Ci7);
                case "joined":
                    return L.intl.string(L.t.KC26NR);
            }
        })(Y.kind);
    return (0, l.jsx)(o.m, {
        text: X,
        "aria-label": X,
        children: (0, l.jsx)(I.K, {
            icon: z,
            "aria-label": X,
            size: "sm",
            variant: "icon-only",
            onClick: K,
            disabled: P || "joining" === Y.kind,
        }),
    });
}
