n.d(t, { Z: () => p });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(933557),
    l = n(482798),
    c = n(788858),
    u = n(532657),
    d = n(388032),
    f = n(175996);
function p(e) {
    let {
            channel: t,
            textVariant: n,
            textClassName: i,
            iconClassName: p,
            hideText: _ = !1,
            hideTooltip: m = !1,
            canTruncate: h = !0,
            showChannelName: g = !1,
        } = e,
        E = (0, o.vjg)(o.Skl.ONLINE),
        b = (0, s.ZP)(t),
        y = t.isDM() || t.isGroupDM(),
        { enableTopNavButton: O } = (0, l.Cq)({ location: "VoiceActivityStatusWithCombinedTooltip" }),
        v =
            O && null != b
                ? b
                : y
                  ? d.intl.string(d.t["9FaEzi"])
                  : t.isGuildStageVoice()
                    ? d.intl.string(d.t.QygGCN)
                    : d.intl.string(d.t.msxteM),
        S = null == b || O ? v : "".concat(v, " (").concat(b, ")"),
        I = g ? S : v;
    return (0, r.jsx)(u.Z, {
        icon: (0, r.jsx)(c.Z, {
            size: "custom",
            color: E,
            channel: t,
            className: a()(f.icon, p),
        }),
        text: I,
        tooltipText: m ? void 0 : S,
        textVariant: n,
        textClassName: i,
        hideTooltip: m,
        canTruncate: h,
        "aria-label": S,
        hideText: _,
    });
}
