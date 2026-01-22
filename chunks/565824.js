n.d(t, {
    A: () => h,
    I: () => _,
});
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(314116),
    s = n(397927),
    o = n(827343),
    l = n(77729),
    c = n(195043),
    u = n(430452),
    d = n(723702),
    f = n(531525),
    p = n(985018);

function _(e) {
    (0, d.isMac)() && e
        ? (0, a.A)({
              title: p.intl.string(p.t["9jf31O"]),
              subtitle: p.intl.string(p.t.uBd6JW),
              variant: "primary",
              onConfirm: () => {
                  o.A.setUseSystemScreensharePicker(e), l.A.app.relaunch();
              },
              confirmText: p.intl.string(p.t.BddRzS),
          })
        : o.A.setUseSystemScreensharePicker(e);
}

function h() {
    let {
        videoHook: e,
        experimentalSoundshare: t,
        supportsExperimentalSoundshare: n,
        supportsHookSoundshare: a,
        useSystemScreensharePicker: l,
    } = (0, i.cf)([u.A], () => ({
        videoHook: u.A.getVideoHook(),
        experimentalSoundshare: u.A.getExperimentalSoundshare(),
        supportsExperimentalSoundshare: u.A.supportsExperimentalSoundshare(),
        supportsHookSoundshare: u.A.supportsHookSoundshare(),
        useSystemScreensharePicker: u.A.getUseSystemScreensharePicker(),
    }));
    return (0, r.jsxs)(c.x, {
        setting: f.H.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
        children: [
            (0, r.jsx)(c.x, {
                setting: f.H.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_VIDEO_HOOK,
                children: (0, r.jsx)(s.dOG, {
                    label: p.intl.string(p.t.GmWk2E),
                    description: p.intl.string(p.t["Fj/xn1"]),
                    checked: e,
                    onChange: (e) => o.A.setVideoHook(e),
                }),
            }),
            n &&
                a &&
                (0, r.jsx)(c.x, {
                    setting: f.H.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_EXPERIMENTAL_SOUNDSHARE,
                    children: (0, r.jsx)(s.dOG, {
                        label: p.intl.string(p.t["4I0qzZ"]),
                        checked: t,
                        onChange: (e) => o.A.setExperimentalSoundshare(e),
                    }),
                }),
            (0, r.jsx)(c.x, {
                setting: f.H.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_SYSTEM_PICKER,
                children: (0, r.jsx)(s.dOG, {
                    label: p.intl.string(p.t.ie1mgY),
                    checked: l,
                    onChange: _,
                }),
            }),
        ],
    });
}
