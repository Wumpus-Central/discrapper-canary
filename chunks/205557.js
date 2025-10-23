n.r(t), n.d(t, { default: () => T });
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
    y = n(944486),
    I = n(358221),
    m = n(598006),
    C = n(768864),
    O = n(354459),
    b = n(981631),
    g = n(388032),
    P = n(542123);
let j = [s._];
function T(e) {
    let { windowKey: t, channelId: n, participantId: s } = e,
        T = (0, l.e7)([w.Z], () => w.Z.getChannel(n)),
        E = (0, l.e7)([I.Z], () => I.Z.getParticipant(n, s), [n, s]),
        M = null != T && null != E,
        v = (0, l.e7)([y.Z], () => y.Z.getVoiceChannelId() === n);
    i.useEffect(() => {
        (M && v) || d.xv(t);
    }, [M, v, t]);
    let U = i.useCallback(
            (e) => {
                let { unmountWindow: t } = e;
                a.Z.returnParticipant(n, s), t();
            },
            [n, s],
        ),
        x = (0, C.B)({
            channel: T,
            appContext: b.IlC.POPOUT,
        }),
        D = i.useCallback(() => {
            (0, O._5)(E) && (0, o.rn)(E.stream, { forceMultiple: !0 });
        }, [E]),
        S = i.useMemo(
            () =>
                null == E
                    ? g.intl.string(g.t.lfzt24)
                    : E.type === O.fO.USER
                      ? E.user.username
                      : E.type === O.fO.STREAM
                        ? g.intl.formatToPlainString(g.t["/DC1y9"], { username: E.user.username })
                        : g.intl.string(g.t["8vlBo7"]),
            [E],
        ),
        R = (0, h.Z)();
    return (0, r.jsx)(c.Z, {
        withTitleBar: !0,
        keybinds: j,
        windowKey: t,
        title: S,
        channelId: n,
        onBeforeUnload: U,
        hideModals: !0,
        children: M
            ? (0, r.jsx)(u.Z.Provider, {
                  value: T.guild_id,
                  children: (0, r.jsx)(p.ZP, {
                      timeout: 2000,
                      children: () =>
                          (0, r.jsx)(f.ZP, {
                              className: P.tile,
                              participant: E,
                              channel: T,
                              width: R.width,
                              inCall: !0,
                              popoutType: m.P.CALL_TILE,
                              focused: !0,
                              noBorder: !0,
                              onContextMenu: x,
                              onClick: D,
                          }),
                  }),
              })
            : null,
    });
}
