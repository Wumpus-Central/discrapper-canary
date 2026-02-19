"use strict";
n.d(t, { A: () => j });
var i = n(627968),
    s = n(64700),
    l = n(735438),
    r = n.n(l),
    a = n(311907),
    o = n(73153),
    c = n(442433),
    d = n(738876),
    u = n(58149),
    h = n(332456),
    A = n(973854),
    p = n(47167),
    g = n(698718),
    m = n(355622),
    _ = n(58736),
    f = n(353428),
    x = n(378570),
    C = n(734057),
    E = n(31717),
    I = n(71393),
    b = n(977997),
    N = n(823471),
    S = n(37411),
    T = n(652215),
    v = n(985018),
    y = n(266920);
function j(e) {
    var t;
    let l,
        { channelId: j, baseChannelId: R, channelViewSource: O = "Split View" } = e,
        L = (0, a.bG)([C.A], () => C.A.getChannel(j)),
        M = (0, a.bG)([I.A], () => I.A.getGuild(L?.getGuildId())),
        D = (0, p.Ay)(L);
    (t = L),
        (l = (0, a.bG)([b.A], () => null != t && !r().isEmpty(b.A.getVoiceStatesForChannel(t.id)))),
        s.useEffect(() => {
            l &&
                null != t &&
                (o.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: t.parent_id }),
                (0, x.N9)(t, { source: S.H9.VOICE_AUTO_OPEN }));
        }, [l, t]);
    let G = s.useRef(!1);
    if (
        (s.useEffect(() => {
            if (null == L || G.current) return;
            G.current = !0;
            let e = (0, h.C)(C.A.getChannel(L.id), !0);
            (0, u.zV)(T.HAw.CHANNEL_OPENED, { ...e, ...(0, u.qL)(L.id), channel_view: O }),
                (0, A.A)({ channelId: L.id });
        }, [L, O]),
        null == L || null == M)
    )
        return null;
    let U = (0, i.jsx)(N.A, { channel: L, baseChannelId: R });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(d.A, { channel: L, draftType: E.C.ChannelMessage }),
            (0, i.jsx)(_.Ay, {
                toolbar: U,
                "aria-label": v.intl.string(v.t.Pwe8tN),
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
                className: y.T,
                children: (0, i.jsx)(g.A, { channel: L, guild: M, chatInputType: m.oU.SIDEBAR }, j),
            }),
        ],
    });
}
