e.d(t, { default: () => E });
var l = e(951288);
e(647438);
var i = e(442837),
    r = e(481060),
    o = e(239091),
    u = e(109764),
    c = e(367722),
    s = e(522474),
    a = e(788983),
    d = e(695346),
    p = e(393431),
    b = e(430824),
    f = e(981631),
    v = e(388032);
function E(n) {
    let { channel: t, onSelect: e, onInteraction: E } = n,
        g = (0, p.Z)(),
        y = d.Fg.useSetting(),
        h = (function (n) {
            let t = (0, i.e7)([s.Z], () => s.Z.getWindow(f.KJ3.CHANNEL_CALL_POPOUT));
            return null == n || null != t
                ? null
                : (0, l.jsx)(r.sNh, {
                      id: "popout-call",
                      label: v.intl.string(v.t.JzWez8),
                      icon: r.rgF,
                      action: () => a.hP(n),
                  });
        })(null != t ? t : void 0),
        j = (function (n) {
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
        "aria-label": v.intl.string(v.t.ogxXGh),
        onClose: o.Zy,
        onSelect: e,
        onInteraction: E,
        children: [
            g,
            j,
            (0, l.jsxs)(r.kSQ, {
                children: [
                    h,
                    (0, l.jsx)(r.S89, {
                        id: "show-voice-states",
                        checked: y,
                        action: () => d.Fg.updateSetting(!y),
                        label: v.intl.string(v.t.vkbSBw),
                    }),
                ],
            }),
        ],
    });
}
