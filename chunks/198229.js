n.d(t, { A: () => h });
var l = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    r = n(157559),
    d = n(827343),
    s = n(209932),
    o = n(430452),
    u = n(383501),
    c = n(967198),
    A = n(287809),
    g = n(954571),
    b = n(652215),
    m = n(731854),
    E = n(985018),
    f = n(16992);
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m.x.DEFAULT,
        n = (0, i.bG)([A.default], () => A.default.getCurrentUser()?.id === e),
        h = (0, i.bG)([s.A], () => s.A.isLocalSoundboardMuted(e)),
        {
            muted: x,
            deafened: C = !1,
            localVideoDisabled: M = !1,
            localVideoAutoDisabled: p = !1,
        } = (0, i.cf)(
            [o.Ay],
            () =>
                n
                    ? { muted: o.Ay.isSelfMute(t), deafened: o.Ay.isSelfDeaf(t) }
                    : {
                          muted: o.Ay.isLocalMute(e, t),
                          localVideoDisabled: o.Ay.isLocalVideoDisabled(e, t),
                          localVideoAutoDisabled: o.Ay.isLocalVideoAutoDisabled(e, t),
                      },
            [n, t, e],
        ),
        j =
            o.Ay.supports(m.O5.DISABLE_VIDEO) && !n
                ? (0, l.jsx)(
                      a.sLh,
                      {
                          id: "disable-video",
                          label: E.intl.string(E.t["4MMsWF"]),
                          action: () => {
                              if (p)
                                  return void r.A.show({
                                      title: E.intl.string(E.t.m2Hyj0),
                                      body: E.intl.string(E.t.EhaK6B),
                                      confirmText: E.intl.string(E.t.ND1my3),
                                      cancelText: E.intl.string(E.t.jEqEhy),
                                      onConfirm: () => d.A.setDisableLocalVideo(e, b.bb8.MANUAL_ENABLED),
                                  });
                              let n = M ? b.bb8.MANUAL_ENABLED : b.bb8.DISABLED;
                              d.A.setDisableLocalVideo(e, n, t);
                          },
                          checked: M,
                          subtext: p
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
        v = n
            ? null
            : (0, l.jsx)(
                  a.sLh,
                  {
                      id: "soundboard-sound-mute",
                      label: E.intl.string(E.t.LxhEuG),
                      action: () => {
                          let n = u.A.getRTCConnection();
                          g.default.track(b.HAw.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
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
                      checked: C,
                  },
                  "self-deafen",
              ),
              j,
          ]
        : [
              (0, l.jsx)(
                  a.sLh,
                  { id: "mute", label: E.intl.string(E.t.sWmtI6), action: () => d.A.toggleLocalMute(e, t), checked: x },
                  "self-mute",
              ),
              v,
              j,
          ];
}
