n.d(t, { A: () => h });
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
    E = n(985018),
    f = n(16992);
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b.x.DEFAULT,
        n = (0, i.bG)([A.default], () => A.default.getCurrentUser()?.id === e),
        h = (0, i.bG)([o.A], () => o.A.isLocalSoundboardMuted(e)),
        {
            muted: x,
            deafened: M = !1,
            localVideoDisabled: p = !1,
            localVideoAutoDisabled: C = !1,
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
        y =
            s.Ay.supports(b.O5.DISABLE_VIDEO) && !n
                ? (0, l.jsx)(
                      a.sLh,
                      {
                          id: "disable-video",
                          label: E.intl.string(E.t["4MMsWF"]),
                          action: () => {
                              if (C)
                                  return void r.A.show({
                                      title: E.intl.string(E.t.m2Hyj0),
                                      body: E.intl.string(E.t.EhaK6B),
                                      confirmText: E.intl.string(E.t.ND1my3),
                                      cancelText: E.intl.string(E.t.jEqEhy),
                                      onConfirm: () => d.A.setDisableLocalVideo(e, m.bb8.MANUAL_ENABLED),
                                  });
                              let n = p ? m.bb8.MANUAL_ENABLED : m.bb8.DISABLED;
                              d.A.setDisableLocalVideo(e, n, t);
                          },
                          checked: p,
                          subtext: C
                              ? (0, l.jsxs)("div", {
                                    className: f.Y,
                                    children: [
                                        (0, l.jsx)(a.EpV, {
                                            size: "custom",
                                            color: "currentColor",
                                            width: 12,
                                            className: f.p,
                                        }),
                                        E.intl.string(E.t.m2Hyj0),
                                    ],
                                })
                              : null,
                      },
                      "disable-video",
                  )
                : null,
        S = n
            ? null
            : (0, l.jsx)(
                  a.sLh,
                  {
                      id: "soundboard-sound-mute",
                      label: E.intl.string(E.t.LxhEuG),
                      action: () => {
                          let n = u.A.getRTCConnection();
                          g.default.track(m.HAw.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
                              guild_id: c.A.getGuildId(),
                              target_user_id: e,
                              media_session_id: n?.getMediaSessionId(),
                              parent_media_session_id: n?.parentMediaSessionId,
                              mute_soundboard: !h,
                          }),
                              d.A.toggleLocalSoundboardMute(e, t);
                      },
                      checked: h,
                  },
                  "soundboard-sound-mute",
              );
    return n
        ? [
              (0, l.jsx)(
                  a.sLh,
                  {
                      id: "mute",
                      label: E.intl.string(E.t.sWmtI6),
                      action: () => d.A.toggleSelfMute({ context: t, location: "User Context Menu" }),
                      checked: x,
                  },
                  "self-mute",
              ),
              (0, l.jsx)(
                  a.sLh,
                  {
                      id: "deafen",
                      label: E.intl.string(E.t.wjcRFX),
                      action: () => d.A.toggleSelfDeaf({ context: t, location: "User Context Menu" }),
                      checked: M,
                  },
                  "self-deafen",
              ),
              y,
          ]
        : [
              (0, l.jsx)(
                  a.sLh,
                  { id: "mute", label: E.intl.string(E.t.sWmtI6), action: () => d.A.toggleLocalMute(e, t), checked: x },
                  "self-mute",
              ),
              S,
              y,
          ];
}
