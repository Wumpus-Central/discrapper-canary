n.d(t, {
    A: () => j,
});
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    a = n(157559),
    o = n(827343),
    s = n(209932),
    d = n(430452),
    c = n(383501),
    u = n(967198),
    A = n(287809),
    f = n(954571),
    b = n(652215),
    g = n(731854),
    p = n(985018),
    h = n(946818);

function j(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g.x.DEFAULT,
        n = (0, i.bG)([A.default], () => {
            var t;
            return (null == (t = A.default.getCurrentUser()) ? void 0 : t.id) === e;
        }),
        j = (0, i.bG)([s.A], () => s.A.isLocalSoundboardMuted(e)),
        {
            muted: O,
            deafened: y = !1,
            localVideoDisabled: v = !1,
            localVideoAutoDisabled: m = !1,
        } = (0, i.cf)(
            [d.A],
            () =>
                n
                    ? {
                          muted: d.A.isSelfMute(t),
                          deafened: d.A.isSelfDeaf(t),
                      }
                    : {
                          muted: d.A.isLocalMute(e, t),
                          localVideoDisabled: d.A.isLocalVideoDisabled(e, t),
                          localVideoAutoDisabled: d.A.isLocalVideoAutoDisabled(e, t),
                      },
            [n, t, e],
        ),
        _ =
            d.A.supports(g.O5.DISABLE_VIDEO) && !n
                ? (0, r.jsx)(
                      l.sLh,
                      {
                          id: "disable-video",
                          label: p.intl.string(p.t["4MMsWF"]),
                          action: () => {
                              if (m)
                                  return void a.A.show({
                                      title: p.intl.string(p.t.m2Hyj0),
                                      body: p.intl.string(p.t.EhaK6B),
                                      confirmText: p.intl.string(p.t.ND1my3),
                                      cancelText: p.intl.string(p.t.jEqEhy),
                                      onConfirm: () => o.A.setDisableLocalVideo(e, b.bb8.MANUAL_ENABLED),
                                  });
                              let n = v ? b.bb8.MANUAL_ENABLED : b.bb8.DISABLED;
                              o.A.setDisableLocalVideo(e, n, t);
                          },
                          checked: v,
                          subtext: m
                              ? (0, r.jsxs)("div", {
                                    className: h.Y,
                                    children: [
                                        (0, r.jsx)(l.EpV, {
                                            size: "custom",
                                            color: "currentColor",
                                            width: 12,
                                            className: h.p,
                                        }),
                                        p.intl.string(p.t.m2Hyj0),
                                    ],
                                })
                              : null,
                      },
                      "disable-video",
                  )
                : null,
        x = n
            ? null
            : (0, r.jsx)(
                  l.sLh,
                  {
                      id: "soundboard-sound-mute",
                      label: p.intl.string(p.t.LxhEuG),
                      action: () => {
                          let n = c.A.getRTCConnection();
                          f.default.track(b.HAw.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
                              guild_id: u.A.getGuildId(),
                              target_user_id: e,
                              media_session_id: null == n ? void 0 : n.getMediaSessionId(),
                              parent_media_session_id: null == n ? void 0 : n.parentMediaSessionId,
                              mute_soundboard: !j,
                          }),
                              o.A.toggleLocalSoundboardMute(e, t);
                      },
                      checked: j,
                  },
                  "soundboard-sound-mute",
              );
    return n
        ? [
              (0, r.jsx)(
                  l.sLh,
                  {
                      id: "mute",
                      label: p.intl.string(p.t.sWmtI6),
                      action: () =>
                          o.A.toggleSelfMute({
                              context: t,
                              location: "User Context Menu",
                          }),
                      checked: O,
                  },
                  "self-mute",
              ),
              (0, r.jsx)(
                  l.sLh,
                  {
                      id: "deafen",
                      label: p.intl.string(p.t.wjcRFX),
                      action: () =>
                          o.A.toggleSelfDeaf({
                              context: t,
                              location: "User Context Menu",
                          }),
                      checked: y,
                  },
                  "self-deafen",
              ),
              _,
          ]
        : [
              (0, r.jsx)(
                  l.sLh,
                  {
                      id: "mute",
                      label: p.intl.string(p.t.sWmtI6),
                      action: () => o.A.toggleLocalMute(e, t),
                      checked: O,
                  },
                  "self-mute",
              ),
              x,
              _,
          ];
}
