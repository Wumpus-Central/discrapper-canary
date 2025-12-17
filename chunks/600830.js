n.d(e, { default: () => O });
var r = n(54381);
n(473749);
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
function O(t) {
    let { channel: e, onSelect: n, onInteraction: O } = t,
        g = (0, p.Z)(),
        h = d.Fg.useSetting(),
        v = (function (t) {
            let e = (0, l.e7)([a.Z], () => a.Z.getWindow(f.KJ3.CHANNEL_CALL_POPOUT));
            return null == t || null != e
                ? null
                : (0, r.jsx)(i.sNh, {
                      id: "popout-call",
                      label: j.intl.string(j.t.JzWezz),
                      icon: i.rgF,
                      action: () => s.openChannelCallPopout(t),
                  });
        })(null != e ? e : void 0),
        y = (function (t) {
            let e = (0, l.e7)([b.Z], () => b.Z.getGuild(null == t ? void 0 : t.guild_id)),
                n = (0, c.Z)(null != t ? t : null, null != e ? e : null),
                o = (0, u.Z)(null != t ? t : null);
            return null != t && t.isGuildVocal()
                ? (0, r.jsxs)(i.kSQ, {
                      children: [n, o],
                  })
                : null;
        })(e);
    return (0, r.jsxs)(i.v2r, {
        navId: "rtc-channel",
        "aria-label": j.intl.string(j.t.ogxXGq),
        onClose: o.Zy,
        onSelect: n,
        onInteraction: O,
        children: [
            g,
            y,
            (0, r.jsxs)(i.kSQ, {
                children: [
                    v,
                    (0, r.jsx)(i.S89, {
                        id: "show-voice-states",
                        checked: h,
                        action: () => d.Fg.updateSetting(!h),
                        label: j.intl.string(j.t.vkbSB0),
                    }),
                ],
            }),
        ],
    });
}
