n.d(t, { A: () => j });
var i = n(627968),
    l = n(64700),
    s = n(735438),
    a = n.n(s),
    r = n(311907),
    o = n(73153),
    d = n(442433),
    c = n(738876),
    u = n(58149),
    h = n(332456),
    A = n(973854),
    _ = n(47167),
    m = n(698718),
    g = n(355622),
    p = n(58736),
    f = n(353428),
    E = n(378570),
    x = n(734057),
    I = n(31717),
    C = n(71393),
    b = n(977997),
    N = n(823471),
    S = n(37411),
    v = n(652215),
    T = n(985018),
    y = n(248537);
function j(e) {
    var t;
    let s,
        { channelId: j, baseChannelId: R, channelViewSource: L = "Split View" } = e,
        O = (0, r.bG)([x.A], () => x.A.getChannel(j)),
        G = (0, r.bG)([C.A], () => C.A.getGuild(O?.getGuildId())),
        M = (0, _.Ay)(O);
    (t = O),
        (s = (0, r.bG)([b.A], () => null != t && !a().isEmpty(b.A.getVoiceStatesForChannel(t.id)))),
        l.useEffect(() => {
            s &&
                null != t &&
                (o.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: t.parent_id }),
                (0, E.N9)(t, { source: S.H9.VOICE_AUTO_OPEN }));
        }, [s, t]);
    let D = l.useRef(!1);
    if (
        (l.useEffect(() => {
            if (null == O || D.current) return;
            D.current = !0;
            let e = (0, h.C)(x.A.getChannel(O.id), !0);
            (0, u.zV)(v.HAw.CHANNEL_OPENED, { ...e, ...(0, u.qL)(O.id), channel_view: L }),
                (0, A.A)({ channelId: O.id });
        }, [O, L]),
        null == O || null == G)
    )
        return null;
    let U = (0, i.jsx)(N.A, { channel: O, baseChannelId: R });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(c.A, { channel: O, draftType: I.C.ChannelMessage }),
            (0, i.jsx)(p.Ay, {
                toolbar: U,
                "aria-label": T.intl.string(T.t.Pwe8tN),
                children: (0, f.zF)({
                    channel: O,
                    channelName: M,
                    guild: G,
                    inSidebar: !0,
                    handleContextMenu: function (e) {
                        (0, d.L3)(e, async () => {
                            let { default: e } = await n.e("22414").then(n.bind(n, 44536));
                            return (t) => (0, i.jsx)(e, { ...t, channel: O });
                        });
                    },
                    handleClick: function () {
                        null != O && (0, E.iN)(O.id);
                    },
                }),
            }),
            (0, i.jsx)("div", {
                className: y.T,
                children: (0, i.jsx)(m.A, { channel: O, guild: G, chatInputType: g.oU.SIDEBAR }, j),
            }),
        ],
    });
}
