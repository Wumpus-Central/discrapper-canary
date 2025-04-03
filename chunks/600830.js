e.d(t, { default: () => p });
var i = e(200651);
e(192379);
var l = e(442837),
    s = e(481060),
    c = e(239091),
    r = e(522474),
    o = e(788983),
    u = e(695346),
    a = e(393431),
    d = e(981631),
    h = e(388032);
function p(n) {
    let { channel: t, onSelect: e, onInteraction: p } = n,
        g = (0, a.Z)(),
        k = u.Fg.useSetting(),
        v = (function (n) {
            let t = (0, l.e7)([r.Z], () => r.Z.getWindow(d.KJ3.CHANNEL_CALL_POPOUT));
            return null == n || null != t
                ? null
                : (0, i.jsx)(s.sNh, {
                      id: 'popout-call',
                      label: h.NW.string(h.t.JzWez8),
                      icon: s.rgF,
                      action: () => o.hP(n)
                  });
        })(null != t ? t : void 0);
    return (0, i.jsxs)(s.v2r, {
        navId: 'rtc-channel',
        'aria-label': h.NW.string(h.t.ogxXGh),
        onClose: c.Zy,
        onSelect: e,
        onInteraction: p,
        children: [
            g,
            (0, i.jsxs)(s.kSQ, {
                children: [
                    v,
                    (0, i.jsx)(s.S89, {
                        id: 'show-voice-states',
                        checked: k,
                        action: () => u.Fg.updateSetting(!k),
                        label: h.NW.string(h.t.vkbSBw)
                    })
                ]
            })
        ]
    });
}
