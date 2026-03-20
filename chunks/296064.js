n.d(t, { r: () => S });
var l = n(627968),
    i = n(64700),
    r = n(6161),
    s = n(681154),
    a = n(974690),
    u = n(435371),
    o = n(397927),
    d = n(833349),
    c = n(672979),
    h = n(661191),
    g = n(243612),
    I = n(67103),
    A = n(652215),
    f = n(985018);
function E(e) {
    return e.find((e) => (0, d.A)(e, A.jUm.JOIN));
}
function m(e, t) {
    return null == t ? E(e) : (e.find((e) => (0, d.A)(e, A.jUm.JOIN) && e.application_id === t) ?? E(e));
}
function S(e) {
    let {
            userId: t,
            friendActivities: n,
            currentUserPlayingActivities: d,
            gameProfileEntry: A,
            onPrimaryAction: E,
        } = e,
        [S, _] = i.useState(!1),
        p = i.useRef(null);
    i.useEffect(
        () => () => {
            null != p.current && clearTimeout(p.current);
        },
        [],
    );
    let N = (function (e, t, n, l) {
            let i = (0, g.qv)(),
                u = i?.altId ?? i?.id,
                o = m(t, u);
            if (null != o) return { kind: "ask_to_join", activity: o };
            let d = m(n, u);
            if (null != d) return { kind: "invite_to_activity", activity: d };
            if (null != l) return { kind: "send_game_invite_message", gameEntry: l };
            let I = n.find(c.A);
            if (null != I) {
                let t;
                return {
                    kind: "send_game_invite_message",
                    gameEntry:
                        ((t = I.timestamps?.start ?? Date.now()),
                        {
                            id: h.default.fromTimestamp(t),
                            author_id: e,
                            extra: {
                                type: "played_game_extra",
                                game_name: I.name,
                                application_id: I.application_id ?? "",
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
        })(t, n, d, A),
        T = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    S ||
                        null == N ||
                        (_(!0),
                        null != p.current && clearTimeout(p.current),
                        (p.current = setTimeout(() => {
                            _(!1), (p.current = null);
                        }, 2e3)),
                        E?.({
                            type: (function (e) {
                                switch (e) {
                                    case "ask_to_join":
                                        return I.c.ASK_TO_JOIN;
                                    case "invite_to_activity":
                                        return I.c.SEND_ACTIVITY_INVITE;
                                    case "send_game_invite_message":
                                        return I.c.SEND_GAME_INVITE_MESSAGE;
                                }
                            })(N.kind),
                            userId: t,
                            activity: N.activity,
                            gameEntry: N.gameEntry,
                        }));
            },
            [S, N, t, E],
        );
    if (null == N) return null;
    let y = (function (e, t) {
            if (t) return o.BNr;
            switch (e) {
                case "ask_to_join":
                    return o.E7M;
                case "invite_to_activity":
                    return o.DpX;
                case "send_game_invite_message":
                    return o.lX7;
            }
        })(N.kind, S),
        C = (function (e) {
            switch (e) {
                case "ask_to_join":
                    return f.intl.string(f.t.OKsSCR);
                case "invite_to_activity":
                    return f.intl.string(f.t["3fRySx"]);
                case "send_game_invite_message":
                    return f.intl.string(f.t.XHxDIV);
            }
        })(N.kind);
    return (0, l.jsx)(u.m_, {
        text: C,
        "aria-label": C,
        children: (0, l.jsx)(o.K0, {
            icon: y,
            "aria-label": C,
            size: "sm",
            variant: "icon-only",
            onClick: T,
            disabled: S,
        }),
    });
}
