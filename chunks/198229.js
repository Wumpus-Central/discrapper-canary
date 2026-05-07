i.d(t, { A: () => _ });
var s = i(627968);
i(64700);
var l = i(17928),
    d = i(477782),
    o = i(695366),
    n = i(157559),
    a = i(827343),
    c = i(209932),
    u = i(235058),
    r = i(763827),
    A = i(967198),
    b = i(287809),
    g = i(174459),
    L = i(652215),
    m = i(731854),
    f = i(375708),
    D = i(502717);
function _(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m.x.DEFAULT,
        i = (0, l.bG)([b.default], () => b.default.getCurrentUser()?.id === e),
        _ = (0, l.bG)([c.A], () => c.A.isLocalSoundboardMuted(e)),
        {
            muted: h,
            deafened: x = !1,
            localVideoDisabled: E = !1,
            localVideoAutoDisabled: M = !1,
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
        p =
            u.Ay.supports(m.O5.DISABLE_VIDEO) && !i
                ? (0, s.jsx)(
                      d.sL,
                      {
                          id: "disable-video",
                          label: f.intl.string(f.t["4MMsWF"]),
                          action: () => {
                              if (M)
                                  return void n.A.show({
                                      title: f.intl.string(f.t.m2Hyj0),
                                      body: f.intl.string(f.t.EhaK6B),
                                      confirmText: f.intl.string(f.t.ND1my3),
                                      cancelText: f.intl.string(f.t.jEqEhy),
                                      onConfirm: () => a.A.setDisableLocalVideo(e, L.bb8.MANUAL_ENABLED),
                                  });
                              let i = E ? L.bb8.MANUAL_ENABLED : L.bb8.DISABLED;
                              a.A.setDisableLocalVideo(e, i, t);
                          },
                          checked: E,
                          subtext: M
                              ? (0, s.jsxs)("div", {
                                    className: D.Y,
                                    children: [
                                        (0, s.jsx)(o.E, {
                                            size: "custom",
                                            color: "currentColor",
                                            width: 12,
                                            className: D.p,
                                        }),
                                        f.intl.string(f.t.m2Hyj0),
                                    ],
                                })
                              : null,
                      },
                      "disable-video",
                  )
                : null,
        y = i
            ? null
            : (0, s.jsx)(
                  d.sL,
                  {
                      id: "soundboard-sound-mute",
                      label: f.intl.string(f.t.LxhEuG),
                      action: () => {
                          let i = r.A.getRTCConnection();
                          g.default.track(L.HAw.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
                              guild_id: A.A.getGuildId(),
                              target_user_id: e,
                              media_session_id: i?.getMediaSessionId(),
                              parent_media_session_id: i?.parentMediaSessionId,
                              mute_soundboard: !_,
                          }),
                              a.A.toggleLocalSoundboardMute(e, t);
                      },
                      checked: _,
                  },
                  "soundboard-sound-mute",
              );
    return i
        ? [
              (0, s.jsx)(
                  d.sL,
                  {
                      id: "mute",
                      label: f.intl.string(f.t.sWmtI6),
                      action: () => a.A.toggleSelfMute({ context: t, location: "User Context Menu" }),
                      checked: h,
                  },
                  "self-mute",
              ),
              (0, s.jsx)(
                  d.sL,
                  {
                      id: "deafen",
                      label: f.intl.string(f.t.wjcRFX),
                      action: () => a.A.toggleSelfDeaf({ context: t, location: "User Context Menu" }),
                      checked: x,
                  },
                  "self-deafen",
              ),
              p,
          ]
        : [
              (0, s.jsx)(
                  d.sL,
                  { id: "mute", label: f.intl.string(f.t.sWmtI6), action: () => a.A.toggleLocalMute(e, t), checked: h },
                  "self-mute",
              ),
              y,
              p,
          ];
}
