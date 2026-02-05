n.d(t, { A: () => y });
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
    A = n(237774),
    g = n(47167),
    m = n(698718),
    p = n(355622),
    _ = n(58736),
    x = n(353428),
    f = n(378570),
    E = n(734057),
    C = n(31717),
    I = n(71393),
    S = n(977997),
    b = n(823471),
    N = n(37411),
    T = n(652215),
    j = n(985018),
    v = n(266920);
function y(e) {
    var t;
    let s,
        { channelId: y, baseChannelId: R, channelViewSource: O = "Split View" } = e,
        L = (0, r.bG)([E.A], () => E.A.getChannel(y)),
        D = (0, r.bG)([I.A], () => I.A.getGuild(L?.getGuildId())),
        M = (0, g.Ay)(L);
    (t = L),
        (s = (0, r.bG)([S.A], () => null != t && !a().isEmpty(S.A.getVoiceStatesForChannel(t.id)))),
        l.useEffect(() => {
            s &&
                null != t &&
                (o.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: t.parent_id }),
                (0, f.N9)(t, { source: N.H9.VOICE_AUTO_OPEN }));
        }, [s, t]);
    let G = l.useRef(!1);
    if (
        (l.useEffect(() => {
            if (null == L || G.current) return;
            G.current = !0;
            let e = (0, h.C)(E.A.getChannel(L.id), !0);
            (0, u.zV)(T.HAw.CHANNEL_OPENED, { ...e, ...(0, u.qL)(L.id), channel_view: O }),
                (0, A.k)(T.HAw.CHANNEL_OPENED_CLICKSTREAM, { channelId: L.id });
        }, [L, O]),
        null == L || null == D)
    )
        return null;
    let U = (0, i.jsx)(b.A, { channel: L, baseChannelId: R });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(c.A, { channel: L, draftType: C.C.ChannelMessage }),
            (0, i.jsx)(_.Ay, {
                toolbar: U,
                "aria-label": j.intl.string(j.t.Pwe8tN),
                children: (0, x.zF)({
                    channel: L,
                    channelName: M,
                    guild: D,
                    inSidebar: !0,
                    handleContextMenu: function (e) {
                        (0, d.L3)(e, async () => {
                            let { default: e } = await n.e("33").then(n.bind(n, 44536));
                            return (t) => (0, i.jsx)(e, { ...t, channel: L });
                        });
                    },
                    handleClick: function () {
                        null != L && (0, f.iN)(L.id);
                    },
                }),
            }),
            (0, i.jsx)("div", {
                className: v.T,
                children: (0, i.jsx)(m.A, { channel: L, guild: D, chatInputType: p.oU.SIDEBAR }, y),
            }),
        ],
    });
}
