e.d(t, { default: () => g });
var l = e(54381);
e(473749);
var i = e(442837),
    r = e(481060),
    o = e(239091),
    u = e(109764),
    c = e(367722),
    a = e(522474),
    s = e(788983),
    d = e(695346),
    p = e(393431),
    b = e(430824),
    f = e(981631),
    E = e(388032);
function g(n) {
    let { channel: t, onSelect: e, onInteraction: g } = n,
        y = (0, p.Z)(),
        h = d.Fg.useSetting(),
        j = (function (n) {
            let t = (0, i.e7)([a.Z], () => a.Z.getWindow(f.KJ3.CHANNEL_CALL_POPOUT));
            return null == n || null != t
                ? null
                : (0, l.jsx)(r.sNh, {
                      id: "popout-call",
                      label: E.intl.string(E.t.JzWezz),
                      icon: r.rgF,
                      action: () => s.openChannelCallPopout(n),
                  });
        })(null != t ? t : void 0),
        O = (function (n) {
            let t = (0, i.e7)([b.Z], () => b.Z.getGuild(null == n ? void 0 : n.guild_id)),
                e = (0, c.Z)(null != n ? n : null, null != t ? t : null),
                o = (0, u.Z)(null != n ? n : null);
            return null != n && n.isGuildVocal()
                ? (0, l.jsxs)(r.kSQ, {
                      children: [e, o],
                  })
                : null;
        })(t);
    return (0, l.jsxs)(r.v2r, {
        navId: "rtc-channel",
        "aria-label": E.intl.string(E.t.ogxXGq),
        onClose: o.Zy,
        onSelect: e,
        onInteraction: g,
        children: [
            y,
            O,
            (0, l.jsxs)(r.kSQ, {
                children: [
                    j,
                    (0, l.jsx)(r.S89, {
                        id: "show-voice-states",
                        checked: h,
                        action: () => d.Fg.updateSetting(!h),
                        label: E.intl.string(E.t.vkbSB0),
                    }),
                ],
            }),
        ],
    });
}
