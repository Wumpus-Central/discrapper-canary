n.d(t, { Z: () => d });
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(481060),
    o = n(933557),
    s = n(592125),
    l = n(473919),
    c = n(532657),
    u = n(388032);
function d(e) {
    let {
            stream: t,
            game: n,
            textVariant: d,
            textClassName: f,
            iconClassName: p,
            hideIcon: _ = !1,
            hideText: m = !1,
            hideTooltip: h = !1,
            canTruncate: g = !0,
            showChannelName: E = !1,
        } = e,
        b = (0, i.e7)([s.Z], () => s.Z.getChannel(t.channelId)),
        y = (0, o.ZP)(b),
        O = (null == n ? void 0 : n.name) === "" ? null : null == n ? void 0 : n.name,
        v = null != O ? O : u.intl.string(u.t.eXan7B),
        S = null != y ? "".concat(v, " (").concat(y, ")") : v,
        I = E ? S : v,
        T = S;
    return (0, r.jsx)(c.Z, {
        icon: _
            ? void 0
            : (0, r.jsx)(l.Z, {
                  icon: a.ARS,
                  className: p,
              }),
        text: I,
        tooltipText: h ? void 0 : S,
        textVariant: d,
        className: f,
        canTruncate: g,
        hideTooltip: h,
        "aria-label": T,
        hideText: m,
    });
}
