n.d(t, { A: () => _ });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    s = n(80682),
    r = n(465364),
    o = n(448368),
    d = n(943220),
    c = n(994500),
    u = n(838541),
    m = n(334211);
function _(e) {
    let { message: t, channel: n } = e,
        { isBlocked: _, isIgnored: h } = (0, a.cf)(
            [c.A],
            () => ({ isBlocked: c.A.isBlockedForMessage(t), isIgnored: c.A.isIgnoredForMessage(t) }),
            [t],
        ),
        p = l.useMemo(() => ({ [n.guild_id]: [t.author.id] }), [n.guild_id, t.author.id]);
    (0, s.Eq)(p, "ThreadMessageAccessoryMessage");
    let g = l.useMemo(
        () => (null != t.content && "" !== t.content ? (0, r.Ay)(t, { formatInline: !0 }).content : null),
        [t],
    );
    return (0, i.jsxs)("div", {
        className: m.up,
        children: [
            (0, i.jsx)("img", { alt: "", src: t.author.getAvatarURL(n.guild_id, 16), className: m.FJ }),
            (0, i.jsx)(d.A, { message: t, channel: n, compact: !0 }),
            (0, i.jsx)("div", {
                className: m.Au,
                children: (function (e, t, n, l) {
                    let {
                        contentPlaceholder: a,
                        renderedContent: s,
                        leadingIcon: r,
                        trailingIcon: d,
                    } = (0, o.o)(e, t, n, l, m.tP, { trailingIconClass: m._v, leadingIconClass: m.a5, iconSize: u.eJ });
                    return (0, i.jsxs)(i.Fragment, {
                        children: [r, s ?? (0, i.jsx)("span", { className: m.dp, children: a }), d],
                    });
                })(t, g, _, h),
            }),
        ],
    });
}
