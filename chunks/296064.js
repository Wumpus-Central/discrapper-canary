n.d(t, { r: () => E });
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
    g = n(67103),
    I = n(652215),
    A = n(985018);
function f(e) {
    return e.find((e) => (0, d.A)(e, I.jUm.JOIN));
}
function E(e) {
    let {
            userId: t,
            friendActivities: n,
            currentUserPlayingActivities: d,
            gameProfileEntry: I,
            onPrimaryAction: E,
        } = e,
        [m, S] = i.useState(!1),
        _ = i.useRef(null);
    i.useEffect(
        () => () => {
            null != _.current && clearTimeout(_.current);
        },
        [],
    );
    let p = (function (e, t, n, l) {
            let i = f(t);
            if (null != i) return { kind: "ask_to_join", activity: i };
            let u = f(n);
            if (null != u) return { kind: "invite_to_activity", activity: u };
            if (null != l) return { kind: "send_game_invite_message", gameEntry: l };
            let o = n.find(c.A);
            if (null != o) {
                let t;
                return {
                    kind: "send_game_invite_message",
                    gameEntry:
                        ((t = o.timestamps?.start ?? Date.now()),
                        {
                            id: h.default.fromTimestamp(t),
                            author_id: e,
                            extra: {
                                type: "played_game_extra",
                                game_name: o.name,
                                application_id: o.application_id ?? "",
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
        })(t, n, d, I),
        N = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    m ||
                        null == p ||
                        (S(!0),
                        null != _.current && clearTimeout(_.current),
                        (_.current = setTimeout(() => {
                            S(!1), (_.current = null);
                        }, 2e3)),
                        E?.({
                            type: (function (e) {
                                switch (e) {
                                    case "ask_to_join":
                                        return g.c.ASK_TO_JOIN;
                                    case "invite_to_activity":
                                        return g.c.SEND_ACTIVITY_INVITE;
                                    case "send_game_invite_message":
                                        return g.c.SEND_GAME_INVITE_MESSAGE;
                                }
                            })(p.kind),
                            userId: t,
                            activity: p.activity,
                            gameEntry: p.gameEntry,
                        }));
            },
            [m, p, t, E],
        );
    if (null == p) return null;
    let T = (function (e, t) {
            if (t) return o.BNr;
            switch (e) {
                case "ask_to_join":
                    return o.E7M;
                case "invite_to_activity":
                    return o.DpX;
                case "send_game_invite_message":
                    return o.lX7;
            }
        })(p.kind, m),
        y = (function (e) {
            switch (e) {
                case "ask_to_join":
                    return A.intl.string(A.t.OKsSCR);
                case "invite_to_activity":
                    return A.intl.string(A.t["3fRySx"]);
                case "send_game_invite_message":
                    return A.intl.string(A.t.XHxDIV);
            }
        })(p.kind);
    return (0, l.jsx)(u.m_, {
        text: y,
        "aria-label": y,
        children: (0, l.jsx)(o.K0, {
            icon: T,
            "aria-label": y,
            size: "sm",
            variant: "icon-only",
            onClick: N,
            disabled: m,
        }),
    });
}
