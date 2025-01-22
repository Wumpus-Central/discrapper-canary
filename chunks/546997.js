n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(200651);
n(192379);
var r = n(442837),
    s = n(481060),
    a = n(846027),
    l = n(921801),
    o = n(131951),
    c = n(726985),
    d = n(388032),
    u = n(232186);
function m(e) {
    let { refreshStyles: t = !1 } = e,
        {
            videoHook: n,
            experimentalSoundshare: m,
            useSystemScreensharePicker: g
        } = (0, r.cj)([o.Z], () => ({
            videoHook: o.Z.getVideoHook(),
            experimentalSoundshare: o.Z.getExperimentalSoundshare(),
            useSystemScreensharePicker: o.Z.getUseSystemScreensharePicker()
        })),
        h = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(l.F, {
                    setting: c.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_VIDEO_HOOK,
                    children: (0, i.jsx)(s.FormSwitch, {
                        value: n,
                        onChange: (e) => a.Z.setVideoHook(e),
                        note: d.intl.string(d.t['Fj/xn5']),
                        hideBorder: t,
                        children: d.intl.string(d.t.GmWk2N)
                    })
                }),
                (0, i.jsx)(l.F, {
                    setting: c.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_EXPERIMENTAL_SOUNDSHARE,
                    children: (0, i.jsx)(s.FormSwitch, {
                        value: m,
                        onChange: (e) => a.Z.setExperimentalSoundshare(e),
                        hideBorder: t,
                        children: d.intl.string(d.t['4I0qzc'])
                    })
                }),
                (0, i.jsx)(l.F, {
                    setting: c.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_SYSTEM_PICKER,
                    children: (0, i.jsx)(s.FormSwitch, {
                        value: g,
                        onChange: (e) => a.Z.setUseSystemScreensharePicker(e),
                        hideBorder: t,
                        children: d.intl.string(d.t.ie1mgY)
                    })
                })
            ]
        });
    return (0, i.jsx)(l.F, {
        setting: c.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
        children: t
            ? h
            : (0, i.jsx)(s.FormSection, {
                  className: u.marginBottom20,
                  title: d.intl.string(d.t.NMCIf3),
                  children: h
              })
    });
}
