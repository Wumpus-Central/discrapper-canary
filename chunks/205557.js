n.r(t), n.d(t, { default: () => E });
var r = n(54381),
    i = n(473749),
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
    O = n(944486),
    I = n(358221),
    C = n(598006),
    T = n(768864),
    P = n(354459),
    y = n(981631),
    m = n(388032),
    b = n(149399);
let g = [s._];
function E(e) {
    let { windowKey: t, channelId: n, participantId: s } = e,
        E = (0, l.e7)([w.Z], () => w.Z.getChannel(n)),
        L = (0, l.e7)([I.Z], () => I.Z.getParticipant(n, s), [n, s]),
        _ = null != E && null != L,
        U = (0, l.e7)([O.Z], () => O.Z.getVoiceChannelId() === n);
    i.useEffect(() => {
        (_ && U) || d.close(t);
    }, [_, U, t]);
    let j = i.useCallback(
            (e) => {
                let { unmountWindow: t } = e;
                a.Z.returnParticipant(n, s), t();
            },
            [n, s],
        ),
        M = (0, T.B)({ channel: E }),
        v = i.useCallback(() => {
            (0, P._5)(L) && (0, o.rn)(L.stream, { forceMultiple: !0 });
        }, [L]),
        x = i.useMemo(
            () =>
                null == L
                    ? m.intl.string(m.t.lfzt24)
                    : L.type === P.fO.USER
                      ? L.user.username
                      : L.type === P.fO.STREAM
                        ? m.intl.formatToPlainString(m.t["/DC1y9"], { username: L.user.username })
                        : m.intl.string(m.t["8vlBo7"]),
            [L],
        ),
        A = (0, h.Z)();
    return (0, r.jsx)(c.Z, {
        withTitleBar: !0,
        keybinds: g,
        windowKey: t,
        title: x,
        channelId: n,
        onBeforeUnload: j,
        appContext: y.IlC.CALL_TILE_POPOUT,
        hideModals: !0,
        children: _
            ? (0, r.jsx)(u.Z.Provider, {
                  value: E.guild_id,
                  children: (0, r.jsx)(p.ZP, {
                      timeout: 2000,
                      children: () =>
                          (0, r.jsx)(f.ZP, {
                              className: b.tile,
                              participant: L,
                              channel: E,
                              width: A.width,
                              inCall: !0,
                              popoutType: C.P.CALL_TILE,
                              focused: !0,
                              noBorder: !0,
                              onContextMenu: M,
                              onClick: v,
                          }),
                  }),
              })
            : null,
    });
}
