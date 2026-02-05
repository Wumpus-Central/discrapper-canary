i.d(t, { A: () => p });
var n = i(627968);
i(64700);
var a = i(311907),
    l = i(990078),
    r = i(397927),
    s = i(630054),
    o = i(956793),
    d = i(401843),
    c = i(315606),
    u = i(279250),
    m = i(267102),
    _ = i(616356),
    A = i(734057),
    g = i(203982),
    h = i(652215),
    f = i(985018);
function p(e) {
    let { isCurrentUser: t, applicationStream: i, onAction: p } = e,
        { defaultWatchMultipleStreams: S } = (0, c.W)({ location: "WatchStreamButton" }),
        { activeStream: I, watchingOtherStream: x } = (0, a.cf)([_.A], () => ({
            activeStream: _.A.getActiveStreamForApplicationStream(i),
            watchingOtherStream:
                null != i &&
                _.A.getAllActiveStreamsForChannel(i.channelId).filter((e) => {
                    let { ownerId: t } = e;
                    return t !== i.ownerId;
                }).length > 0,
        })),
        v = (0, a.bG)([A.A], () => A.A.getChannel(i?.channelId)),
        [C, E] = (0, u.zP)(v),
        y = (0, m.aL)(),
        T = null != I && null != i && I.state !== h.XYD.ENDED && I.ownerId === i.ownerId,
        N = (e) => {
            null != i &&
                (p?.(),
                o.default.selectVoiceChannel(i.channelId),
                T || (0, d.Nl)(i, { forceMultiple: e }),
                y.dispatch(h.jej.POPOUT_CLOSE),
                g._.dispatch(h.jej.MODAL_CLOSE),
                s.A.popAll());
        };
    if (null == i) return null;
    let b = (0, u.CT)(E);
    return (
        t ? (b = f.intl.string(f.t.XvBdeT)) : T && (b = f.intl.string(f.t["JH1SJ+"])),
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(r.Button, {
                    size: "sm",
                    variant: T ? "secondary" : "active",
                    icon: r.Fzq,
                    text: b,
                    disabled: t || T || !C,
                    onClick: () => N(!1),
                    fullWidth: !0,
                }),
                !x || T || S
                    ? null
                    : (0, n.jsx)(l.m, {
                          text: f.intl.string(f.t.wCrzut),
                          children: (0, n.jsx)(r.K0, {
                              variant: "secondary",
                              size: "sm",
                              icon: r.vAm,
                              "aria-label": f.intl.string(f.t.wCrzut),
                              onClick: () => {
                                  N(!0);
                              },
                          }),
                      }),
            ],
        })
    );
}
