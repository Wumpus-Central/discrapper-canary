n.r(e), n.d(e, { default: () => w });
var i = n(951288),
    l = n(647438),
    o = n(120356),
    a = n.n(o),
    r = n(512722),
    u = n.n(r),
    s = n(399606),
    d = n(475179),
    c = n(721383),
    p = n(372900),
    h = n(238246),
    P = n(788983),
    f = n(27457),
    g = n(937995),
    m = n(592125),
    x = n(358221),
    C = n(354459),
    Z = n(388032),
    b = n(702511);
let v = [c._];
function w(t) {
    let { windowKey: e, channelId: n, participantId: o } = t,
        r = (0, s.e7)([m.Z], () => m.Z.getChannel(n));
    u()(null != r, "channel cannot be null for tile popout");
    let c = (0, s.e7)([x.Z], () => x.Z.getParticipant(n, o), [n, o]);
    l.useEffect(() => {
        null == c && P.xv(e);
    }, [c, e]);
    let w = l.useCallback(
            (t) => {
                let { unmountWindow: e } = t;
                d.Z.returnParticipant(n, o), e();
            },
            [n, o],
        ),
        y = l.useMemo(
            () =>
                null == c
                    ? Z.intl.string(Z.t.lfzt24)
                    : c.type === C.fO.USER
                      ? c.user.username
                      : c.type === C.fO.STREAM
                        ? Z.intl.formatToPlainString(Z.t["/DC1y9"], { username: c.user.username })
                        : Z.intl.string(Z.t["8vlBo7"]),
            [c],
        );
    return (0, i.jsx)(h.Z, {
        withTitleBar: !0,
        keybinds: v,
        windowKey: e,
        title: y,
        channelId: n,
        onBeforeUnload: w,
        hideModals: !0,
        children: (0, i.jsx)("div", {
            className: a()("root", b.rootPopout, b.tilePopout),
            children:
                null == c
                    ? (0, i.jsx)("div", {
                          className: b.tileContainer,
                          children: Z.intl.string(Z.t.PmKUHq),
                      })
                    : (0, i.jsx)(p.Z.Provider, {
                          value: r.guild_id,
                          children: (0, i.jsx)(g.ZP, {
                              timeout: 2000,
                              children: () =>
                                  (0, i.jsx)(f.ZP, {
                                      participant: c,
                                      channel: r,
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
