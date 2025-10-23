n.r(t), n.d(t, { default: () => j });
var r = n(951288),
    i = n(647438),
    l = n(399606),
    a = n(475179),
    o = n(872810),
    s = n(721383),
    u = n(372900),
    c = n(238246),
    d = n(788983),
    h = n(885006),
    f = n(27457),
    p = n(937995),
    w = n(592125),
    y = n(358221),
    m = n(598006),
    I = n(768864),
    C = n(354459),
    O = n(981631),
    b = n(388032),
    g = n(11830);
let P = [s._];
function j(e) {
    let { windowKey: t, channelId: n, participantId: s } = e,
        j = (0, l.e7)([w.Z], () => w.Z.getChannel(n)),
        T = (0, l.e7)([y.Z], () => y.Z.getParticipant(n, s), [n, s]),
        E = null != j && null != T;
    i.useEffect(() => {
        E || d.xv(t);
    }, [E, t]);
    let M = i.useCallback(
            (e) => {
                let { unmountWindow: t } = e;
                a.Z.returnParticipant(n, s), t();
            },
            [n, s],
        ),
        v = (0, I.B)({
            channel: j,
            appContext: O.IlC.POPOUT,
        }),
        U = i.useCallback(() => {
            (0, C._5)(T) && (0, o.rn)(T.stream, { forceMultiple: !0 });
        }, [T]),
        x = i.useMemo(
            () =>
                null == T
                    ? b.intl.string(b.t.lfzt24)
                    : T.type === C.fO.USER
                      ? T.user.username
                      : T.type === C.fO.STREAM
                        ? b.intl.formatToPlainString(b.t["/DC1y9"], { username: T.user.username })
                        : b.intl.string(b.t["8vlBo7"]),
            [T],
        ),
        D = (0, h.Z)();
    return (0, r.jsx)(c.Z, {
        withTitleBar: !0,
        keybinds: P,
        windowKey: t,
        title: x,
        channelId: n,
        onBeforeUnload: M,
        hideModals: !0,
        children: E
            ? (0, r.jsx)(u.Z.Provider, {
                  value: j.guild_id,
                  children: (0, r.jsx)(p.ZP, {
                      timeout: 2000,
                      children: () =>
                          (0, r.jsx)(f.ZP, {
                              className: g.tile,
                              participant: T,
                              channel: j,
                              width: D.width,
                              inCall: !0,
                              popoutType: m.P.CALL_TILE,
                              focused: !0,
                              noBorder: !0,
                              onContextMenu: v,
                              onClick: U,
                          }),
                  }),
              })
            : null,
    });
}
