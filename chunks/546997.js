n.d(t, { Z: () => m });
var r = n(200651);
n(192379);
var i = n(442837),
    s = n(481060),
    a = n(846027),
    l = n(921801),
    o = n(131951),
    c = n(726985),
    d = n(388032),
    u = n(455812);
function m(e) {
    let { refreshStyles: t = !1 } = e,
        {
            videoHook: n,
            experimentalSoundshare: m,
            useSystemScreensharePicker: g
        } = (0, i.cj)([o.Z], () => ({
            videoHook: o.Z.getVideoHook(),
            experimentalSoundshare: o.Z.getExperimentalSoundshare(),
            useSystemScreensharePicker: o.Z.getUseSystemScreensharePicker()
        })),
        p = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(l.F, {
                    setting: c.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_VIDEO_HOOK,
                    children: (0, r.jsx)(s.j7V, {
                        value: n,
                        onChange: (e) => a.Z.setVideoHook(e),
                        note: d.NW.string(d.t['Fj/xn5']),
                        hideBorder: t,
                        children: d.NW.string(d.t.GmWk2N)
                    })
                }),
                (0, r.jsx)(l.F, {
                    setting: c.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_EXPERIMENTAL_SOUNDSHARE,
                    children: (0, r.jsx)(s.j7V, {
                        value: m,
                        onChange: (e) => a.Z.setExperimentalSoundshare(e),
                        hideBorder: t,
                        children: d.NW.string(d.t['4I0qzc'])
                    })
                }),
                (0, r.jsx)(l.F, {
                    setting: c.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_SYSTEM_PICKER,
                    children: (0, r.jsx)(s.j7V, {
                        value: g,
                        onChange: (e) => a.Z.setUseSystemScreensharePicker(e),
                        hideBorder: t,
                        children: d.NW.string(d.t.ie1mgY)
                    })
                })
            ]
        });
    return (0, r.jsx)(l.F, {
        setting: c.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
        children: t
            ? p
            : (0, r.jsx)(s.hjN, {
                  className: u.marginBottom20,
                  title: d.NW.string(d.t.NMCIf3),
                  children: p
              })
    });
}
