n.d(t, { A: () => C });
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(990078),
    s = n(821609),
    r = n(183623),
    o = n(408278),
    c = n(622631),
    d = n(630054),
    u = n(956793),
    h = n(401843),
    m = n(279250),
    A = n(267102),
    g = n(616356),
    p = n(734057),
    _ = n(203982),
    f = n(652215),
    E = n(985018);
function C(e) {
    let { isCurrentUser: t, applicationStream: n, onAction: C } = e,
        { activeStream: x, watchingOtherStream: S } = (0, l.cf)([g.A], () => ({
            activeStream: g.A.getActiveStreamForApplicationStream(n),
            watchingOtherStream:
                null != n &&
                g.A.getAllActiveStreamsForChannel(n.channelId).filter((e) => {
                    let { ownerId: t } = e;
                    return t !== n.ownerId;
                }).length > 0,
        })),
        I = (0, l.bG)([p.A], () => p.A.getChannel(n?.channelId)),
        [N, v] = (0, m.zP)(I),
        T = (0, A.aL)(),
        y = null != x && null != n && x.state !== f.XYD.ENDED && x.ownerId === n.ownerId,
        b = (e) => {
            null != n &&
                (C?.(),
                u.default.selectVoiceChannel(n.channelId),
                y || (0, h.Nl)(n, { forceMultiple: e }),
                T.dispatch(f.jej.POPOUT_CLOSE),
                _._.dispatch(f.jej.MODAL_CLOSE),
                d.A.popAll());
        };
    if (null == n) return null;
    let j = (0, m.CT)(v);
    return (
        t ? (j = E.intl.string(E.t.XvBdeT)) : y && (j = E.intl.string(E.t["JH1SJ+"])),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(s.$, {
                    size: "sm",
                    variant: y ? "secondary" : "active",
                    icon: r.F,
                    text: j,
                    disabled: t || y || !N,
                    onClick: () => b(!1),
                    fullWidth: !0,
                }),
                S && !y
                    ? (0, i.jsx)(a.m, {
                          text: E.intl.string(E.t.wCrzut),
                          children: (0, i.jsx)(o.K, {
                              variant: "secondary",
                              size: "sm",
                              icon: c.v,
                              "aria-label": E.intl.string(E.t.wCrzut),
                              onClick: () => {
                                  b(!0);
                              },
                          }),
                      })
                    : null,
            ],
        })
    );
}
