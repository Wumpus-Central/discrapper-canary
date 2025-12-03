n.d(t, {
    E: () => _,
    Z: () => m,
});
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(248514),
    o = n(481060),
    s = n(846027),
    l = n(579806),
    c = n(921801),
    u = n(131951),
    d = n(358085),
    f = n(726985),
    p = n(388032);
function _(e) {
    (0, d.isMac)() && e
        ? (0, a.Z)({
              title: p.intl.string(p.t["9jf31O"]),
              subtitle: p.intl.string(p.t.uBd6JW),
              variant: "primary",
              onConfirm: () => {
                  s.Z.setUseSystemScreensharePicker(e), l.Z.app.relaunch();
              },
              confirmText: p.intl.string(p.t.BddRzS),
          })
        : s.Z.setUseSystemScreensharePicker(e);
}
function m() {
    let {
        videoHook: e,
        experimentalSoundshare: t,
        supportsExperimentalSoundshare: n,
        supportsHookSoundshare: a,
        useSystemScreensharePicker: l,
    } = (0, i.cj)([u.Z], () => ({
        videoHook: u.Z.getVideoHook(),
        experimentalSoundshare: u.Z.getExperimentalSoundshare(),
        supportsExperimentalSoundshare: u.Z.supportsExperimentalSoundshare(),
        supportsHookSoundshare: u.Z.supportsHookSoundshare(),
        useSystemScreensharePicker: u.Z.getUseSystemScreensharePicker(),
    }));
    return (0, r.jsxs)(c.F, {
        setting: f.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
        children: [
            (0, r.jsx)(c.F, {
                setting: f.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_VIDEO_HOOK,
                children: (0, r.jsx)(o.rsf, {
                    label: p.intl.string(p.t.GmWk2E),
                    description: p.intl.string(p.t["Fj/xn1"]),
                    checked: e,
                    onChange: (e) => s.Z.setVideoHook(e),
                }),
            }),
            n &&
                a &&
                (0, r.jsx)(c.F, {
                    setting: f.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_EXPERIMENTAL_SOUNDSHARE,
                    children: (0, r.jsx)(o.rsf, {
                        label: p.intl.string(p.t["4I0qzZ"]),
                        checked: t,
                        onChange: (e) => s.Z.setExperimentalSoundshare(e),
                    }),
                }),
            (0, r.jsx)(c.F, {
                setting: f.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_SYSTEM_PICKER,
                children: (0, r.jsx)(o.rsf, {
                    label: p.intl.string(p.t.ie1mgY),
                    checked: l,
                    onChange: _,
                }),
            }),
        ],
    });
}
