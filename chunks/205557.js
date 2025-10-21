n.r(e), n.d(e, { default: () => j });
var i = n(951288),
    l = n(647438),
    o = n(120356),
    r = n.n(o),
    a = n(512722),
    d = n.n(a),
    s = n(399606),
    u = n(475179),
    c = n(721383),
    p = n(372900),
    h = n(238246),
    P = n(788983),
    f = n(27457),
    x = n(937995),
    w = n(592125),
    Z = n(358221),
    g = n(354459),
    m = n(388032),
    y = n(702511);
let b = [c._];
function j(t) {
    let { windowKey: e, channelId: n, participantId: o } = t,
        a = (0, s.e7)([w.Z], () => w.Z.getChannel(n));
    d()(null != a, "channel cannot be null for tile popout");
    let c = (0, s.e7)([Z.Z], () => Z.Z.getParticipant(n, o), [n, o]);
    l.useEffect(() => {
        null == c && P.xv(e);
    }, [c, e]);
    let j = (t) => {
        let { unmountWindow: e } = t;
        u.Z.returnParticipant(n, o), e();
    };
    if (null == c)
        return (0, i.jsx)(h.Z, {
            withTitleBar: !0,
            keybinds: b,
            windowKey: e,
            title: m.intl.string(m.t.lfzt24),
            channelId: n,
            onBeforeUnload: j,
            hideModals: !0,
            children: (0, i.jsx)("div", {
                className: r()("root", y.rootPopout, y.tilePopout),
                children: (0, i.jsx)("div", {
                    className: y.tileContainer,
                    children: m.intl.string(m.t.PmKUHq),
                }),
            }),
        });
    let v =
        c.type === g.fO.USER
            ? c.user.username
            : c.type === g.fO.STREAM
              ? m.intl.formatToPlainString(m.t["/DC1y9"], { username: c.user.username })
              : m.intl.string(m.t["8vlBo7"]);
    return (0, i.jsx)(h.Z, {
        withTitleBar: !0,
        keybinds: b,
        windowKey: e,
        title: v,
        channelId: a.id,
        onBeforeUnload: j,
        hideModals: !0,
        children: (0, i.jsx)("div", {
            className: r()("root", y.rootPopout, y.tilePopout),
            children: (0, i.jsx)(p.Z.Provider, {
                value: a.guild_id,
                children: (0, i.jsx)(x.ZP, {
                    timeout: 2000,
                    children: () =>
                        (0, i.jsx)(f.ZP, {
                            participant: c,
                            channel: a,
                            inCall: !0,
                            width: 854,
                            inPopout: !0,
                            containerStyle: {
                                width: "100%",
                                height: "100%",
                            },
                            style: { padding: "8px" },
                        }),
                }),
            }),
        }),
    });
}
