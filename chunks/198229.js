n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(397927),
    r = n(157559),
    d = n(827343),
    s = n(209932),
    o = n(430452),
    u = n(383501),
    c = n(967198),
    A = n(287809),
    g = n(954571),
    E = n(652215),
    _ = n(731854),
    b = n(985018),
    f = n(946818);
function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _.x.DEFAULT,
        n = (0, l.bG)([A.default], () => A.default.getCurrentUser()?.id === e),
        m = (0, l.bG)([s.A], () => s.A.isLocalSoundboardMuted(e)),
        {
            muted: C,
            deafened: h = !1,
            localVideoDisabled: M = !1,
            localVideoAutoDisabled: S = !1,
        } = (0, l.cf)(
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
        x =
            o.Ay.supports(_.O5.DISABLE_VIDEO) && !n
                ? (0, i.jsx)(
                      a.sLh,
                      {
                          id: "disable-video",
                          label: b.intl.string(b.t["4MMsWF"]),
                          action: () => {
                              if (S)
                                  return void r.A.show({
                                      title: b.intl.string(b.t.m2Hyj0),
                                      body: b.intl.string(b.t.EhaK6B),
                                      confirmText: b.intl.string(b.t.ND1my3),
                                      cancelText: b.intl.string(b.t.jEqEhy),
                                      onConfirm: () => d.A.setDisableLocalVideo(e, E.bb8.MANUAL_ENABLED),
                                  });
                              let n = M ? E.bb8.MANUAL_ENABLED : E.bb8.DISABLED;
                              d.A.setDisableLocalVideo(e, n, t);
                          },
                          checked: M,
                          subtext: S
                              ? (0, i.jsxs)("div", {
                                    className: f.Y,
                                    children: [
                                        (0, i.jsx)(a.EpV, {
                                            size: "custom",
                                            color: "currentColor",
                                            width: 12,
                                            className: f.p,
                                        }),
                                        b.intl.string(b.t.m2Hyj0),
                                    ],
                                })
                              : null,
                      },
                      "disable-video",
                  )
                : null,
        I = n
            ? null
            : (0, i.jsx)(
                  a.sLh,
                  {
                      id: "soundboard-sound-mute",
                      label: b.intl.string(b.t.LxhEuG),
                      action: () => {
                          let n = u.A.getRTCConnection();
                          g.default.track(E.HAw.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
                              guild_id: c.A.getGuildId(),
                              target_user_id: e,
                              media_session_id: n?.getMediaSessionId(),
                              parent_media_session_id: n?.parentMediaSessionId,
                              mute_soundboard: !m,
                          }),
                              d.A.toggleLocalSoundboardMute(e, t);
                      },
                      checked: m,
                  },
                  "soundboard-sound-mute",
              );
    return n
        ? [
              (0, i.jsx)(
                  a.sLh,
                  {
                      id: "mute",
                      label: b.intl.string(b.t.sWmtI6),
                      action: () => d.A.toggleSelfMute({ context: t, location: "User Context Menu" }),
                      checked: C,
                  },
                  "self-mute",
              ),
              (0, i.jsx)(
                  a.sLh,
                  {
                      id: "deafen",
                      label: b.intl.string(b.t.wjcRFX),
                      action: () => d.A.toggleSelfDeaf({ context: t, location: "User Context Menu" }),
                      checked: h,
                  },
                  "self-deafen",
              ),
              x,
          ]
        : [
              (0, i.jsx)(
                  a.sLh,
                  { id: "mute", label: b.intl.string(b.t.sWmtI6), action: () => d.A.toggleLocalMute(e, t), checked: C },
                  "self-mute",
              ),
              I,
              x,
          ];
}
