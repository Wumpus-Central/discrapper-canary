i.d(t, { A: () => D });
var l = i(477900);
i(582128);
var s = i(17928),
    d = i(477782),
    o = i(695366),
    a = i(157559),
    n = i(827343),
    u = i(209932),
    c = i(999926),
    r = i(763827),
    b = i(287809),
    A = i(174459),
    f = i(652215),
    g = i(731854),
    L = i(105292),
    m = i(695052);
function D(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g.x.DEFAULT,
        i = (0, s.bG)([b.default], () => b.default.getCurrentUser()?.id === e),
        D = (0, s.bG)([u.A], () => u.A.isLocalSoundboardMuted(e)),
        {
            muted: _,
            deafened: h = !1,
            localVideoDisabled: x = !1,
            localVideoAutoDisabled: E = !1,
        } = (0, s.cf)(
            [c.Ay],
            () =>
                i
                    ? { muted: c.Ay.isSelfMute(t), deafened: c.Ay.isSelfDeaf(t) }
                    : {
                          muted: c.Ay.isLocalMute(e, t),
                          localVideoDisabled: c.Ay.isLocalVideoDisabled(e, t),
                          localVideoAutoDisabled: c.Ay.isLocalVideoAutoDisabled(e, t),
                      },
            [i, t, e],
        ),
        M =
            c.Ay.supports(g.O5.DISABLE_VIDEO) && !i
                ? (0, l.jsx)(
                      d.sL,
                      {
                          id: "disable-video",
                          label: L.intl.string(L.t["4MMsWF"]),
                          action: () => {
                              if (E)
                                  return void a.A.show({
                                      title: L.intl.string(L.t.m2Hyj0),
                                      body: L.intl.string(L.t.EhaK6B),
                                      confirmText: L.intl.string(L.t.ND1my3),
                                      cancelText: L.intl.string(L.t.jEqEhy),
                                      onConfirm: () => n.default.setDisableLocalVideo(e, f.bb8.MANUAL_ENABLED),
                                  });
                              let i = x ? f.bb8.MANUAL_ENABLED : f.bb8.DISABLED;
                              n.default.setDisableLocalVideo(e, i, t);
                          },
                          checked: x,
                          subtext: E
                              ? (0, l.jsxs)("div", {
                                    className: m.Y,
                                    children: [
                                        (0, l.jsx)(o.E, {
                                            size: "custom",
                                            color: "currentColor",
                                            width: 12,
                                            className: m.p,
                                        }),
                                        L.intl.string(L.t.m2Hyj0),
                                    ],
                                })
                              : null,
                      },
                      "disable-video",
                  )
                : null,
        p = i
            ? null
            : (0, l.jsx)(
                  d.sL,
                  {
                      id: "soundboard-sound-mute",
                      label: L.intl.string(L.t.LxhEuG),
                      action: () => {
                          let i = r.A.getRTCConnection();
                          (A.default.track(f.HAw.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
                              guild_id: r.A.getGuildId(),
                              target_user_id: e,
                              media_session_id: i?.getMediaSessionId(),
                              parent_media_session_id: i?.parentMediaSessionId,
                              mute_soundboard: !D,
                          }),
                              n.default.toggleLocalSoundboardMute(e, t));
                      },
                      checked: D,
                  },
                  "soundboard-sound-mute",
              );
    return i
        ? [
              (0, l.jsx)(
                  d.sL,
                  {
                      id: "mute",
                      label: L.intl.string(L.t.sWmtI6),
                      action: () => n.default.toggleSelfMute({ context: t, location: "User Context Menu" }),
                      checked: _,
                  },
                  "self-mute",
              ),
              (0, l.jsx)(
                  d.sL,
                  {
                      id: "deafen",
                      label: L.intl.string(L.t.wjcRFX),
                      action: () => n.default.toggleSelfDeaf({ context: t, location: "User Context Menu" }),
                      checked: h,
                  },
                  "self-deafen",
              ),
              M,
          ]
        : [
              (0, l.jsx)(
                  d.sL,
                  {
                      id: "mute",
                      label: L.intl.string(L.t.sWmtI6),
                      action: () => n.default.toggleLocalMute(e, t),
                      checked: _,
                  },
                  "self-mute",
              ),
              p,
              M,
          ];
}
