n.r(t), n.d(t, { default: () => P });
var r = n(951288),
    i = n(647438),
    l = n(399606),
    a = n(475179),
    o = n(721383),
    s = n(372900),
    u = n(238246),
    c = n(788983),
    d = n(885006),
    h = n(27457),
    f = n(937995),
    p = n(592125),
    w = n(358221),
    y = n(598006),
    I = n(768864),
    m = n(354459),
    O = n(981631),
    b = n(388032),
    g = n(11830);
let C = [o._];
function P(e) {
    let { windowKey: t, channelId: n, participantId: o } = e,
        P = (0, l.e7)([p.Z], () => p.Z.getChannel(n)),
        j = (0, l.e7)([w.Z], () => w.Z.getParticipant(n, o), [n, o]),
        T = null != P && null != j;
    i.useEffect(() => {
        T || c.xv(t);
    }, [T, t]);
    let E = i.useCallback(
            (e) => {
                let { unmountWindow: t } = e;
                a.Z.returnParticipant(n, o), t();
            },
            [n, o],
        ),
        M = (0, I.B)({
            channel: P,
            appContext: O.IlC.POPOUT,
        }),
        v = i.useMemo(
            () =>
                null == j
                    ? b.intl.string(b.t.lfzt24)
                    : j.type === m.fO.USER
                      ? j.user.username
                      : j.type === m.fO.STREAM
                        ? b.intl.formatToPlainString(b.t["/DC1y9"], { username: j.user.username })
                        : b.intl.string(b.t["8vlBo7"]),
            [j],
        ),
        U = (0, d.Z)();
    return (0, r.jsx)(u.Z, {
        withTitleBar: !0,
        keybinds: C,
        windowKey: t,
        title: v,
        channelId: n,
        onBeforeUnload: E,
        hideModals: !0,
        children: T
            ? (0, r.jsx)(s.Z.Provider, {
                  value: P.guild_id,
                  children: (0, r.jsx)(f.ZP, {
                      timeout: 2000,
                      children: () =>
                          (0, r.jsx)(h.ZP, {
                              className: g.tile,
                              participant: j,
                              channel: P,
                              width: U.width,
                              inCall: !0,
                              popoutType: y.P.CALL_TILE,
                              focused: !0,
                              noBorder: !0,
                              onContextMenu: M,
                          }),
                  }),
              })
            : null,
    });
}
