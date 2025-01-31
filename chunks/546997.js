n.d(t, { Z: () => m });
var i = n(200651);
n(192379);
var s = n(442837),
    r = n(481060),
    l = n(846027),
    a = n(921801),
    o = n(131951),
    c = n(726985),
    d = n(388032),
    u = n(232186);
function m(e) {
    let { refreshStyles: t = !1 } = e,
        {
            videoHook: n,
            experimentalSoundshare: m,
            useSystemScreensharePicker: h
        } = (0, s.cj)([o.Z], () => ({
            videoHook: o.Z.getVideoHook(),
            experimentalSoundshare: o.Z.getExperimentalSoundshare(),
            useSystemScreensharePicker: o.Z.getUseSystemScreensharePicker()
        })),
        g = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(a.F, {
                    setting: c.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_VIDEO_HOOK,
                    children: (0, i.jsx)(r.j7V, {
                        value: n,
                        onChange: (e) => l.Z.setVideoHook(e),
                        note: d.intl.string(d.t['Fj/xn5']),
                        hideBorder: t,
                        children: d.intl.string(d.t.GmWk2N)
                    })
                }),
                (0, i.jsx)(a.F, {
                    setting: c.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_EXPERIMENTAL_SOUNDSHARE,
                    children: (0, i.jsx)(r.j7V, {
                        value: m,
                        onChange: (e) => l.Z.setExperimentalSoundshare(e),
                        hideBorder: t,
                        children: d.intl.string(d.t['4I0qzc'])
                    })
                }),
                (0, i.jsx)(a.F, {
                    setting: c.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_SYSTEM_PICKER,
                    children: (0, i.jsx)(r.j7V, {
                        value: h,
                        onChange: (e) => l.Z.setUseSystemScreensharePicker(e),
                        hideBorder: t,
                        children: d.intl.string(d.t.ie1mgY)
                    })
                })
            ]
        });
    return (0, i.jsx)(a.F, {
        setting: c.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
        children: t
            ? g
            : (0, i.jsx)(r.hjN, {
                  className: u.marginBottom20,
                  title: d.intl.string(d.t.NMCIf3),
                  children: g
              })
    });
}
