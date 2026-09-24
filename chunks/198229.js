i.d(t, { A: () => D });
var s = i(477900);
i(582128);
var l = i(17928),
    d = i(477782),
    o = i(695366),
    n = i(157559),
    a = i(827343),
    c = i(209932),
    u = i(25578),
    r = i(763827),
    A = i(287809),
    b = i(174459),
    g = i(652215),
    L = i(731854),
    m = i(375708),
    f = i(695052);
function D(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : L.x.DEFAULT,
        i = (0, l.bG)([A.default], () => A.default.getCurrentUser()?.id === e),
        D = (0, l.bG)([c.A], () => c.A.isLocalSoundboardMuted(e)),
        {
            muted: _,
            deafened: h = !1,
            localVideoDisabled: x = !1,
            localVideoAutoDisabled: E = !1,
        } = (0, l.cf)(
            [u.Ay],
            () =>
                i
                    ? { muted: u.Ay.isSelfMute(t), deafened: u.Ay.isSelfDeaf(t) }
                    : {
                          muted: u.Ay.isLocalMute(e, t),
                          localVideoDisabled: u.Ay.isLocalVideoDisabled(e, t),
                          localVideoAutoDisabled: u.Ay.isLocalVideoAutoDisabled(e, t),
                      },
            [i, t, e],
        ),
        M =
            u.Ay.supports(L.O5.DISABLE_VIDEO) && !i
                ? (0, s.jsx)(
                      d.sL,
                      {
                          id: "disable-video",
                          label: m.intl.string(m.t["4MMsWF"]),
                          action: () => {
                              if (E)
                                  return void n.A.show({
                                      title: m.intl.string(m.t.m2Hyj0),
                                      body: m.intl.string(m.t.EhaK6B),
                                      confirmText: m.intl.string(m.t.ND1my3),
                                      cancelText: m.intl.string(m.t.jEqEhy),
                                      onConfirm: () => a.A.setDisableLocalVideo(e, g.bb8.MANUAL_ENABLED),
                                  });
                              let i = x ? g.bb8.MANUAL_ENABLED : g.bb8.DISABLED;
                              a.A.setDisableLocalVideo(e, i, t);
                          },
                          checked: x,
                          subtext: E
                              ? (0, s.jsxs)("div", {
                                    className: f.Y,
                                    children: [
                                        (0, s.jsx)(o.E, {
                                            size: "custom",
                                            color: "currentColor",
                                            width: 12,
                                            className: f.p,
                                        }),
                                        m.intl.string(m.t.m2Hyj0),
                                    ],
                                })
                              : null,
                      },
                      "disable-video",
                  )
                : null,
        p = i
            ? null
            : (0, s.jsx)(
                  d.sL,
                  {
                      id: "soundboard-sound-mute",
                      label: m.intl.string(m.t.LxhEuG),
                      action: () => {
                          let i = r.A.getRTCConnection();
                          (b.default.track(g.HAw.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
                              guild_id: r.A.getGuildId(),
                              target_user_id: e,
                              media_session_id: i?.getMediaSessionId(),
                              parent_media_session_id: i?.parentMediaSessionId,
                              mute_soundboard: !D,
                          }),
                              a.A.toggleLocalSoundboardMute(e, t));
                      },
                      checked: D,
                  },
                  "soundboard-sound-mute",
              );
    return i
        ? [
              (0, s.jsx)(
                  d.sL,
                  {
                      id: "mute",
                      label: m.intl.string(m.t.sWmtI6),
                      action: () => a.A.toggleSelfMute({ context: t, location: "User Context Menu" }),
                      checked: _,
                  },
                  "self-mute",
              ),
              (0, s.jsx)(
                  d.sL,
                  {
                      id: "deafen",
                      label: m.intl.string(m.t.wjcRFX),
                      action: () => a.A.toggleSelfDeaf({ context: t, location: "User Context Menu" }),
                      checked: h,
                  },
                  "self-deafen",
              ),
              M,
          ]
        : [
              (0, s.jsx)(
                  d.sL,
                  { id: "mute", label: m.intl.string(m.t.sWmtI6), action: () => a.A.toggleLocalMute(e, t), checked: _ },
                  "self-mute",
              ),
              p,
              M,
          ];
}
