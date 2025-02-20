e.d(n, { default: () => p });
var i = e(200651);
e(192379);
var l = e(442837),
    s = e(481060),
    c = e(239091),
    r = e(522474),
    u = e(788983),
    o = e(695346),
    a = e(393431),
    d = e(981631),
    h = e(388032);
function p(t) {
    let { channel: n, onSelect: e } = t,
        p = (0, a.Z)(),
        g = o.Fg.useSetting(),
        k = (function (t) {
            let n = (0, l.e7)([r.Z], () => r.Z.getWindow(d.KJ3.CHANNEL_CALL_POPOUT));
            return null == t || null != n
                ? null
                : (0, i.jsx)(s.sNh, {
                      id: 'popout-call',
                      label: h.NW.string(h.t.JzWez8),
                      icon: s.rgF,
                      action: () => u.hP(t)
                  });
        })(null != n ? n : void 0);
    return (0, i.jsxs)(s.v2r, {
        navId: 'rtc-channel',
        'aria-label': h.NW.string(h.t.ogxXGh),
        onClose: c.Zy,
        onSelect: e,
        children: [
            p,
            (0, i.jsxs)(s.kSQ, {
                children: [
                    k,
                    (0, i.jsx)(s.S89, {
                        id: 'show-voice-states',
                        checked: g,
                        action: () => o.Fg.updateSetting(!g),
                        label: h.NW.string(h.t.vkbSBw)
                    })
                ]
            })
        ]
    });
}
