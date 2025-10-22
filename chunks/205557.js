t.r(n), t.d(n, { default: () => P });
var i = t(951288),
    r = t(647438),
    l = t(399606),
    u = t(475179),
    d = t(721383),
    o = t(372900),
    a = t(238246),
    s = t(788983),
    h = t(885006),
    c = t(27457),
    w = t(937995),
    f = t(592125),
    p = t(358221),
    g = t(354459),
    v = t(388032),
    Z = t(11830);
let m = [d._];
function P(e) {
    let { windowKey: n, channelId: t, participantId: d } = e,
        P = (0, l.e7)([f.Z], () => f.Z.getChannel(t)),
        k = (0, l.e7)([p.Z], () => p.Z.getParticipant(t, d), [t, d]),
        x = null != P && null != k;
    r.useEffect(() => {
        x || s.xv(n);
    }, [x, n]);
    let y = r.useCallback(
            (e) => {
                let { unmountWindow: n } = e;
                u.Z.returnParticipant(t, d), n();
            },
            [t, d],
        ),
        C = r.useMemo(
            () =>
                null == k
                    ? v.intl.string(v.t.lfzt24)
                    : k.type === g.fO.USER
                      ? k.user.username
                      : k.type === g.fO.STREAM
                        ? v.intl.formatToPlainString(v.t["/DC1y9"], { username: k.user.username })
                        : v.intl.string(v.t["8vlBo7"]),
            [k],
        ),
        E = (0, h.Z)();
    return (0, i.jsx)(a.Z, {
        withTitleBar: !0,
        keybinds: m,
        windowKey: n,
        title: C,
        channelId: t,
        onBeforeUnload: y,
        hideModals: !0,
        children: x
            ? (0, i.jsx)(o.Z.Provider, {
                  value: P.guild_id,
                  children: (0, i.jsx)(w.ZP, {
                      timeout: 2000,
                      children: () =>
                          (0, i.jsx)(c.ZP, {
                              className: Z.tile,
                              participant: k,
                              channel: P,
                              width: E.width,
                              inCall: !0,
                              inPopout: !0,
                              focused: !0,
                              noBorder: !0,
                          }),
                  }),
              })
            : null,
    });
}
