n.d(t, { A: () => d });
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(47167),
    o = n(734057),
    l = n(864436),
    c = n(200041),
    u = n(985018);
function d(e) {
    let {
            stream: t,
            game: n,
            textVariant: d,
            textClassName: f,
            iconClassName: p,
            hideIcon: _ = !1,
            hideText: h = !1,
            hideTooltip: m = !1,
            canTruncate: g = !0,
            showChannelName: E = !1,
        } = e,
        b = (0, i.bG)([o.A], () => o.A.getChannel(t.channelId)),
        y = (0, s.Ay)(b),
        O = (null == n ? void 0 : n.name) === "" ? null : null == n ? void 0 : n.name,
        A = null != O ? O : u.intl.string(u.t.eXan7B),
        v = null != y ? "".concat(A, " (").concat(y, ")") : A,
        S = E ? v : A,
        I = v;
    return (0, r.jsx)(c.A, {
        icon: _
            ? void 0
            : (0, r.jsx)(l.A, {
                  icon: a.Uk3,
                  className: p,
              }),
        text: S,
        tooltipText: m ? void 0 : v,
        textVariant: d,
        className: f,
        canTruncate: g,
        hideTooltip: m,
        "aria-label": I,
        hideText: h,
    });
}
