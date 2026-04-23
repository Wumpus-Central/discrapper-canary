n.d(t, { A: () => C });
var i = n(627968);
n(64700);
var l = n(17928),
    a = n(477782),
    r = n(695366),
    d = n(157559),
    o = n(827343),
    s = n(209932),
    u = n(969341),
    c = n(763827),
    A = n(967198),
    g = n(287809),
    f = n(954571),
    E = n(652215),
    b = n(731854),
    x = n(985018),
    m = n(502717);
function C(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b.x.DEFAULT,
        n = (0, l.bG)([g.default], () => g.default.getCurrentUser()?.id === e),
        C = (0, l.bG)([s.A], () => s.A.isLocalSoundboardMuted(e)),
        {
            muted: I,
            deafened: h = !1,
            localVideoDisabled: S = !1,
            localVideoAutoDisabled: v = !1,
        } = (0, l.cf)(
            [u.Ay],
            () =>
                n
                    ? { muted: u.Ay.isSelfMute(t), deafened: u.Ay.isSelfDeaf(t) }
                    : {
                          muted: u.Ay.isLocalMute(e, t),
                          localVideoDisabled: u.Ay.isLocalVideoDisabled(e, t),
                          localVideoAutoDisabled: u.Ay.isLocalVideoAutoDisabled(e, t),
                      },
            [n, t, e],
        ),
        _ =
            u.Ay.supports(b.O5.DISABLE_VIDEO) && !n
                ? (0, i.jsx)(
                      a.sL,
                      {
                          id: "disable-video",
                          label: x.intl.string(x.t["4MMsWF"]),
                          action: () => {
                              if (v)
                                  return void d.A.show({
                                      title: x.intl.string(x.t.m2Hyj0),
                                      body: x.intl.string(x.t.EhaK6B),
                                      confirmText: x.intl.string(x.t.ND1my3),
                                      cancelText: x.intl.string(x.t.jEqEhy),
                                      onConfirm: () => o.A.setDisableLocalVideo(e, E.bb8.MANUAL_ENABLED),
                                  });
                              let n = S ? E.bb8.MANUAL_ENABLED : E.bb8.DISABLED;
                              o.A.setDisableLocalVideo(e, n, t);
                          },
                          checked: S,
                          subtext: v
                              ? (0, i.jsxs)("div", {
                                    className: m.Y,
                                    children: [
                                        (0, i.jsx)(r.E, {
                                            size: "custom",
                                            color: "currentColor",
                                            width: 12,
                                            className: m.p,
                                        }),
                                        x.intl.string(x.t.m2Hyj0),
                                    ],
                                })
                              : null,
                      },
                      "disable-video",
                  )
                : null,
        M = n
            ? null
            : (0, i.jsx)(
                  a.sL,
                  {
                      id: "soundboard-sound-mute",
                      label: x.intl.string(x.t.LxhEuG),
                      action: () => {
                          let n = c.A.getRTCConnection();
                          f.default.track(E.HAw.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
                              guild_id: A.A.getGuildId(),
                              target_user_id: e,
                              media_session_id: n?.getMediaSessionId(),
                              parent_media_session_id: n?.parentMediaSessionId,
                              mute_soundboard: !C,
                          }),
                              o.A.toggleLocalSoundboardMute(e, t);
                      },
                      checked: C,
                  },
                  "soundboard-sound-mute",
              );
    return n
        ? [
              (0, i.jsx)(
                  a.sL,
                  {
                      id: "mute",
                      label: x.intl.string(x.t.sWmtI6),
                      action: () => o.A.toggleSelfMute({ context: t, location: "User Context Menu" }),
                      checked: I,
                  },
                  "self-mute",
              ),
              (0, i.jsx)(
                  a.sL,
                  {
                      id: "deafen",
                      label: x.intl.string(x.t.wjcRFX),
                      action: () => o.A.toggleSelfDeaf({ context: t, location: "User Context Menu" }),
                      checked: h,
                  },
                  "self-deafen",
              ),
              _,
          ]
        : [
              (0, i.jsx)(
                  a.sL,
                  { id: "mute", label: x.intl.string(x.t.sWmtI6), action: () => o.A.toggleLocalMute(e, t), checked: I },
                  "self-mute",
              ),
              M,
              _,
          ];
}
