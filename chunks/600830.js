n.d(t, { default: () => g });
var r = n(200651);
n(192379);
var l = n(442837),
    i = n(481060),
    o = n(239091),
    u = n(109764),
    c = n(367722),
    a = n(522474),
    s = n(788983),
    d = n(695346),
    p = n(393431),
    b = n(430824),
    f = n(981631),
    j = n(388032);
function g(e) {
    let { channel: t, onSelect: n, onInteraction: g } = e,
        O = (0, p.Z)(),
        h = d.Fg.useSetting(),
        v = (function (e) {
            let t = (0, l.e7)([a.Z], () => a.Z.getWindow(f.KJ3.CHANNEL_CALL_POPOUT));
            return null == e || null != t
                ? null
                : (0, r.jsx)(i.sNh, {
                      id: 'popout-call',
                      label: j.NW.string(j.t.JzWez8),
                      icon: i.rgF,
                      action: () => s.hP(e)
                  });
        })(null != t ? t : void 0),
        y = (function (e) {
            let t = (0, l.e7)([b.Z], () => b.Z.getGuild(null == e ? void 0 : e.guild_id)),
                n = (0, c.Z)(null != e ? e : null, null != t ? t : null),
                o = (0, u.Z)(null != e ? e : null);
            return null != e && e.isGuildVocal()
                ? (0, r.jsxs)(i.kSQ, {
                      children: [n, o]
                  })
                : null;
        })(t);
    return (0, r.jsxs)(i.v2r, {
        navId: 'rtc-channel',
        'aria-label': j.NW.string(j.t.ogxXGh),
        onClose: o.Zy,
        onSelect: n,
        onInteraction: g,
        children: [
            O,
            y,
            (0, r.jsxs)(i.kSQ, {
                children: [
                    v,
                    (0, r.jsx)(i.S89, {
                        id: 'show-voice-states',
                        checked: h,
                        action: () => d.Fg.updateSetting(!h),
                        label: j.NW.string(j.t.vkbSBw)
                    })
                ]
            })
        ]
    });
}
