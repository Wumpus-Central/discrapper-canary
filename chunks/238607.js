n.d(t, { Z: () => v });
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(481060),
    s = n(40851),
    o = n(841784),
    l = n(906732),
    u = n(499254),
    c = n(827498),
    d = n(397698),
    f = n(541716),
    _ = n(103450),
    p = n(592125),
    h = n(944486),
    m = n(475413),
    g = n(981631),
    E = n(388032);
function v(e) {
    let { user: t, activity: n, onAction: v, onClose: y } = e,
        { newestAnalyticsLocation: I } = (0, l.ZP)(),
        T = (0, s.bp)() === g.IlC.POPOUT,
        b = (0, r.e7)([p.Z, h.Z], () => p.Z.getChannel(h.Z.getChannelId())),
        S = (0, _.e)({
            activity: null != n ? n : void 0,
            embeddedActivity: void 0,
            user: t,
            onClose: y
        });
    if (null == S && null != n && (0, o.Z)(n))
        return (0, i.jsx)(m.tG, {
            icon: a.jje,
            text: E.intl.string(E.t.RscU7O),
            color: a.Ttl.BRAND,
            themeColor: 'none',
            fullWidth: !0,
            onClick: (e) => {
                e.stopPropagation(),
                    null == y || y(),
                    null == v || v({ action: 'PRESS_PLAY_BUTTON' }),
                    (null == b ? void 0 : b.isVocal())
                        ? (0, d.Z)({
                              context: {
                                  type: 'channel',
                                  channel: b
                              },
                              analyticsLocation: I,
                              openInPopout: T
                          })
                        : (0, u.__)(c._b.TEXT, f.Ie.NORMAL, { applicationId: n.application_id });
            }
        });
    if (null == S) return null;
    let { isJoining: A, handleJoinRequest: N, buttonCTA: C, tooltip: R, isEnabled: O, isEmbedded: D } = S;
    return D
        ? (0, i.jsx)(a.ua7, {
              text: R,
              children: (e) =>
                  (0, i.jsx)(m.tG, {
                      ...e,
                      icon: a.YVR,
                      text: C,
                      disabled: !O,
                      submitting: A,
                      fullWidth: !0,
                      onClick: (e) => {
                          e.stopPropagation(), null == v || v({ action: 'PRESS_JOIN_BUTTON' }), N();
                      }
                  })
          })
        : (0, i.jsx)(a.ua7, {
              text: R,
              children: (e) =>
                  (0, i.jsx)(m.tG, {
                      ...e,
                      icon: a.iWm,
                      text: C,
                      disabled: !O,
                      submitting: A,
                      fullWidth: !0,
                      onClick: (e) => {
                          e.stopPropagation(), null == v || v({ action: 'PRESS_ASK_TO_JOIN_BUTTON' }), N();
                      }
                  })
          });
}
