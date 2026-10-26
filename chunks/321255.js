(t.d(n, { A: () => q }), t(321073));
var l = t(477900),
    i = t(582128),
    a = t(17928),
    s = t(789645),
    r = t(442433),
    c = t(738876),
    o = t(323073),
    u = t(666860),
    d = t(806411),
    h = t(973854),
    g = t(265872),
    A = t(980707),
    m = t(477782),
    p = t(365199),
    j = t(58736),
    f = t(287074),
    x = t(976860),
    N = t(494208),
    C = t(964167),
    b = t(105292);
function E() {
    let [e, n] = i.useState(!1),
        t = i.useRef(null),
        a = b.intl.string(b.t["UKOtz+"]);
    return (0, l.jsx)(g.Y, {
        targetElementRef: t,
        shouldShow: e,
        animation: g.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => n(!1),
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, l.jsx)(A.W, {
                "data-menu-migrated": !0,
                navId: "app-channel-chat-panel-overflow",
                onClose: n,
                onSelect: n,
                "aria-label": b.intl.string(b.t.Xm41aV),
                children: (0, l.jsx)(m.rX, {
                    children: (0, l.jsx)(m.Dr, {
                        id: "app-channel-open-in-full-view",
                        label: b.intl.string(b.t.IxVmZi),
                        action: () => (0, x.pX)((0, C.gu)((0, x.JK)().location.pathname)),
                    }),
                }),
            });
        },
        children: (e, i) => {
            let { isShown: s } = i;
            return (0, l.jsx)(j.Ay.Icon, {
                ...e,
                ref: t,
                onClick: () => n((e) => !e),
                tooltip: s ? null : a,
                icon: p.MoreHorizontalIcon,
                "aria-label": a,
                selected: s,
            });
        },
    });
}
function I(e) {
    let { channel: n } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(N.A, { channel: n }), (0, l.jsx)(f.A, { channel: n }), (0, l.jsx)(E, {})],
    });
}
var _ = t(355622),
    T = t(225142),
    y = t(701785),
    S = t(429933),
    v = t(187360),
    k = t(353428),
    R = t(857071),
    G = t(138298),
    L = t(288254),
    P = t(873614),
    O = t(522556),
    w = t(734057),
    D = t(31717),
    B = t(71393),
    H = t(232835),
    F = t(625494),
    U = t(47167),
    V = t(688606),
    Y = t(652215),
    M = t(172039);
function q(e) {
    let { channelId: n, baseChannelId: g, channelViewSource: A = "Split View", isResourceChannelView: m } = e,
        p = (0, a.bG)([w.A], () => w.A.getChannel(n)),
        f = (0, a.bG)([B.A], () => B.A.getGuild(p?.getGuildId())),
        N = (0, U.Ay)(p),
        C = (0, a.bG)([R.A], () => f?.id != null && R.A.isLurking(f.id), [f]),
        E = (0, S.A)(n),
        q = (0, a.bG)([y.h], () => y.h.getResourceForChannel(f?.id, n)?.title),
        z = (0, o.vL)(p),
        X = (0, L.Uf)(p),
        K = i.useRef(!1);
    if (
        (i.useEffect(() => {
            null == p ||
                K.current ||
                ((K.current = !0),
                (0, u.zV)(Y.HAw.CHANNEL_OPENED, { ...(0, d.q)(p.id), channel_view: A }),
                (0, h.A)({ channelId: p.id }));
        }, [p, A]),
        null == p || (null == f && !p.isPrivate()))
    )
        return null;
    let W = n === g,
        $ = [];
    C || W || $.push((0, l.jsx)(v.A, { channel: p }, "notifications"));
    let J = W && p.type === Y.rbe.GUILD_APP;
    return (J && $.push((0, l.jsx)(I, { channel: p }, "app-channel")),
    $.push(
        (0, l.jsx)(
            j.Ay.Icon,
            {
                icon: s.P,
                tooltip: b.intl.string(b.t.cpT0Cq),
                onClick: () => {
                    (G.A.closeChannelSidebar(g), J && F._.dispatch(Y.jej.FOCUS_CHAT_BUTTON));
                },
            },
            "close",
        ),
    ),
    z)
        ? (0, l.jsx)(O.A, { guild: f, channelId: p.id })
        : null != X
          ? (0, l.jsx)(P.A, { guild: f, channelId: X })
          : (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(c.A, { channel: p, draftType: D.C.ChannelMessage }),
                    (0, l.jsx)(j.Ay, {
                        toolbar: $,
                        "aria-label": b.intl.string(b.t.BIYAqa),
                        children: (0, k.zF)({
                            channel: p,
                            channelName: E ? q : N,
                            guild: f,
                            inSidebar: !0,
                            handleContextMenu: function (e) {
                                null != p &&
                                    null != f &&
                                    (0, r.L3)(e, async () => {
                                        let { default: e } = await Promise.all([
                                            t.e("926132"),
                                            t.e("368358"),
                                            t.e("947502"),
                                            t.e("343266"),
                                            t.e("309004"),
                                            t.e("412255"),
                                            t.e("63340"),
                                            t.e("430997"),
                                            t.e("379995"),
                                            t.e("544058"),
                                            t.e("591377"),
                                            t.e("35723"),
                                            t.e("256372"),
                                            t.e("29542"),
                                            t.e("359545"),
                                        ]).then(t.bind(t, 22496));
                                        return (n) => (0, l.jsx)(e, { ...n, channel: p, guild: f });
                                    });
                            },
                            handleClick: W
                                ? void 0
                                : function () {
                                      if (null == p) return;
                                      let e = H.A.getMessages(p.id);
                                      if (m) {
                                          ((0, x.pX)(Y.BVt.CHANNEL(p.guild_id, p.id)), (0, T.bN)(p.guild_id, null));
                                          return;
                                      }
                                      (0, x.uh)(p.guild_id, p.id, e.jumpTargetId);
                                  },
                        }),
                    }),
                    (0, l.jsx)("div", {
                        className: M.T,
                        children: (0, l.jsx)(V.A, { channel: p, guild: f, chatInputType: _.oU.SIDEBAR }, n),
                    }),
                ],
            });
}
