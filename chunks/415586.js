n.d(t, { A: () => j });
var i = n(627968),
    l = n(64700),
    s = n(735438),
    a = n.n(s),
    r = n(311907),
    o = n(73153),
    c = n(442433),
    d = n(738876),
    u = n(58149),
    h = n(332456),
    A = n(973854),
    _ = n(47167),
    m = n(698718),
    g = n(355622),
    p = n(58736),
    f = n(353428),
    x = n(378570),
    E = n(734057),
    I = n(31717),
    C = n(71393),
    N = n(977997),
    T = n(823471),
    S = n(37411),
    b = n(652215),
    y = n(985018),
    v = n(200393);
function j(e) {
    var t;
    let s,
        { channelId: j, baseChannelId: R, channelViewSource: O = "Split View" } = e,
        L = (0, r.bG)([E.A], () => E.A.getChannel(j)),
        M = (0, r.bG)([C.A], () => C.A.getGuild(L?.getGuildId())),
        D = (0, _.Ay)(L);
    (t = L),
        (s = (0, r.bG)([N.A], () => null != t && !a().isEmpty(N.A.getVoiceStatesForChannel(t.id)))),
        l.useEffect(() => {
            s &&
                null != t &&
                (o.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: t.parent_id }),
                (0, x.N9)(t, { source: S.H9.VOICE_AUTO_OPEN }));
        }, [s, t]);
    let U = l.useRef(!1);
    if (
        (l.useEffect(() => {
            if (null == L || U.current) return;
            U.current = !0;
            let e = (0, h.C)(E.A.getChannel(L.id), !0);
            (0, u.zV)(b.HAw.CHANNEL_OPENED, { ...e, ...(0, u.qL)(L.id), channel_view: O }),
                (0, A.A)({ channelId: L.id });
        }, [L, O]),
        null == L || null == M)
    )
        return null;
    let G = (0, i.jsx)(T.A, { channel: L, baseChannelId: R });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(d.A, { channel: L, draftType: I.C.ChannelMessage }),
            (0, i.jsx)(p.Ay, {
                toolbar: G,
                "aria-label": y.intl.string(y.t.Pwe8tN),
                children: (0, f.zF)({
                    channel: L,
                    channelName: D,
                    guild: M,
                    inSidebar: !0,
                    handleContextMenu: function (e) {
                        (0, c.L3)(e, async () => {
                            let { default: e } = await n.e("33").then(n.bind(n, 44536));
                            return (t) => (0, i.jsx)(e, { ...t, channel: L });
                        });
                    },
                    handleClick: function () {
                        null != L && (0, x.iN)(L.id);
                    },
                }),
            }),
            (0, i.jsx)("div", {
                className: v.T,
                children: (0, i.jsx)(m.A, { channel: L, guild: M, chatInputType: g.oU.SIDEBAR }, j),
            }),
        ],
    });
}
