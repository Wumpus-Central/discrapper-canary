n.d(t, {
    A: () => E,
}),
    n(896048);
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(990078),
    s = n(397927),
    o = n(630054),
    l = n(956793),
    c = n(401843),
    u = n(315606),
    d = n(279250),
    f = n(267102),
    p = n(616356),
    _ = n(734057),
    h = n(203982),
    m = n(652215),
    g = n(985018);

function E(e) {
    let { isCurrentUser: t, applicationStream: n, onAction: E } = e,
        { defaultWatchMultipleStreams: b } = (0, u.W)({
            location: "WatchStreamButton",
        }),
        { activeStream: y, watchingOtherStream: O } = (0, i.cf)([p.A], () => ({
            activeStream: p.A.getActiveStreamForApplicationStream(n),
            watchingOtherStream:
                null != n &&
                p.A.getAllActiveStreamsForChannel(n.channelId).filter((e) => {
                    let { ownerId: t } = e;
                    return t !== n.ownerId;
                }).length > 0,
        })),
        A = (0, i.bG)([_.A], () => _.A.getChannel(null == n ? void 0 : n.channelId)),
        [v, S] = (0, d.zP)(A),
        I = (0, f.aL)(),
        T = null != y && null != n && y.state !== m.XYD.ENDED && y.ownerId === n.ownerId,
        C = (e) => {
            null != n &&
                (null == E || E(),
                l.default.selectVoiceChannel(n.channelId),
                T ||
                    (0, c.Nl)(n, {
                        forceMultiple: e,
                    }),
                I.dispatch(m.jej.POPOUT_CLOSE),
                h._.dispatch(m.jej.MODAL_CLOSE),
                o.A.popAll());
        };
    if (null == n) return null;
    let N = (0, d.CT)(S);
    return (
        t ? (N = g.intl.string(g.t.XvBdeT)) : T && (N = g.intl.string(g.t["JH1SJ+"])),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(s.Button, {
                    size: "sm",
                    variant: T ? "secondary" : "active",
                    icon: s.Fzq,
                    text: N,
                    disabled: t || T || !v,
                    onClick: () => C(!1),
                    fullWidth: !0,
                }),
                !O || T || b
                    ? null
                    : (0, r.jsx)(a.m, {
                          text: g.intl.string(g.t.wCrzut),
                          children: (0, r.jsx)(s.K0, {
                              variant: "secondary",
                              size: "sm",
                              icon: s.vAm,
                              "aria-label": g.intl.string(g.t.wCrzut),
                              onClick: () => {
                                  C(!0);
                              },
                          }),
                      }),
            ],
        })
    );
}
