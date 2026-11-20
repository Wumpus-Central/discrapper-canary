n.d(t, { A: () => o });
var i = n(477900),
    l = n(582128),
    s = n(693879),
    a = n(661191);
let r = (0, n(945810).mj)({
    name: "2026-10-gdm-duration-timer",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function o(e) {
    let { callMessageId: t, className: n } = e,
        o = r.useConfig({ location: "PrivateChannelCallDuration" }).enabled,
        u = l.useMemo(() => ({ start: a.default.extractTimestamp(t) }), [t]);
    return o
        ? (0, i.jsx)("div", {
              className: n,
              children: (0, i.jsx)(s.z, { textColor: "text-feedback-positive", entry: u }),
          })
        : null;
}
