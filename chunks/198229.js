n.d(t, { A: () => x });
var l = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    r = n(157559),
    d = n(827343),
    o = n(209932),
    s = n(430452),
    u = n(383501),
    c = n(967198),
    A = n(287809),
    g = n(954571),
    m = n(652215),
    b = n(731854),
    f = n(985018),
    E = n(946818);
function x(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b.x.DEFAULT,
        n = (0, i.bG)([A.default], () => A.default.getCurrentUser()?.id === e),
        x = (0, i.bG)([o.A], () => o.A.isLocalSoundboardMuted(e)),
        {
            muted: h,
            deafened: C = !1,
            localVideoDisabled: M = !1,
            localVideoAutoDisabled: p = !1,
        } = (0, i.cf)(
            [s.Ay],
            () =>
                n
                    ? { muted: s.Ay.isSelfMute(t), deafened: s.Ay.isSelfDeaf(t) }
                    : {
                          muted: s.Ay.isLocalMute(e, t),
                          localVideoDisabled: s.Ay.isLocalVideoDisabled(e, t),
                          localVideoAutoDisabled: s.Ay.isLocalVideoAutoDisabled(e, t),
                      },
            [n, t, e],
        ),
        j =
            s.Ay.supports(b.O5.DISABLE_VIDEO) && !n
                ? (0, l.jsx)(
                      a.sLh,
                      {
                          id: "disable-video",
                          label: f.intl.string(f.t["4MMsWF"]),
                          action: () => {
                              if (p)
                                  return void r.A.show({
                                      title: f.intl.string(f.t.m2Hyj0),
                                      body: f.intl.string(f.t.EhaK6B),
                                      confirmText: f.intl.string(f.t.ND1my3),
                                      cancelText: f.intl.string(f.t.jEqEhy),
                                      onConfirm: () => d.A.setDisableLocalVideo(e, m.bb8.MANUAL_ENABLED),
                                  });
                              let n = M ? m.bb8.MANUAL_ENABLED : m.bb8.DISABLED;
                              d.A.setDisableLocalVideo(e, n, t);
                          },
                          checked: M,
                          subtext: p
                              ? (0, l.jsxs)("div", {
                                    className: E.Y,
                                    children: [
                                        (0, l.jsx)(a.EpV, {
                                            size: "custom",
                                            color: "currentColor",
                                            width: 12,
                                            className: E.p,
                                        }),
                                        f.intl.string(f.t.m2Hyj0),
                                    ],
                                })
                              : null,
                      },
                      "disable-video",
                  )
                : null,
        v = n
            ? null
            : (0, l.jsx)(
                  a.sLh,
                  {
                      id: "soundboard-sound-mute",
                      label: f.intl.string(f.t.LxhEuG),
                      action: () => {
                          let n = u.A.getRTCConnection();
                          g.default.track(m.HAw.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
                              guild_id: c.A.getGuildId(),
                              target_user_id: e,
                              media_session_id: n?.getMediaSessionId(),
                              parent_media_session_id: n?.parentMediaSessionId,
                              mute_soundboard: !x,
                          }),
                              d.A.toggleLocalSoundboardMute(e, t);
                      },
                      checked: x,
                  },
                  "soundboard-sound-mute",
              );
    return n
        ? [
              (0, l.jsx)(
                  a.sLh,
                  {
                      id: "mute",
                      label: f.intl.string(f.t.sWmtI6),
                      action: () => d.A.toggleSelfMute({ context: t, location: "User Context Menu" }),
                      checked: h,
                  },
                  "self-mute",
              ),
              (0, l.jsx)(
                  a.sLh,
                  {
                      id: "deafen",
                      label: f.intl.string(f.t.wjcRFX),
                      action: () => d.A.toggleSelfDeaf({ context: t, location: "User Context Menu" }),
                      checked: C,
                  },
                  "self-deafen",
              ),
              j,
          ]
        : [
              (0, l.jsx)(
                  a.sLh,
                  { id: "mute", label: f.intl.string(f.t.sWmtI6), action: () => d.A.toggleLocalMute(e, t), checked: h },
                  "self-mute",
              ),
              v,
              j,
          ];
}
