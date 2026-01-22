n.d(t, { A: () => p });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(80682),
    o = n(465364),
    l = n(448368),
    c = n(943220),
    u = n(994500),
    d = n(838541),
    f = n(679740);
function p(e) {
    let { message: t, channel: n } = e,
        { isBlocked: l, isIgnored: d } = (0, a.cf)(
            [u.A],
            () => ({
                isBlocked: u.A.isBlockedForMessage(t),
                isIgnored: u.A.isIgnoredForMessage(t),
            }),
            [t],
        ),
        p = i.useMemo(() => ({ [n.guild_id]: [t.author.id] }), [n.guild_id, t.author.id]);
    (0, s.E)(p, "ThreadMessageAccessoryMessage");
    let h = i.useMemo(
        () => (null != t.content && "" !== t.content ? (0, o.Ay)(t, { formatInline: !0 }).content : null),
        [t],
    );
    return (0, r.jsxs)("div", {
        className: f.up,
        children: [
            (0, r.jsx)("img", {
                alt: "",
                src: t.author.getAvatarURL(n.guild_id, 16),
                className: f.FJ,
            }),
            (0, r.jsx)(c.A, {
                message: t,
                channel: n,
                compact: !0,
            }),
            (0, r.jsx)("div", {
                className: f.Au,
                children: _(t, h, l, d),
            }),
        ],
    });
}
function _(e, t, n, i) {
    let {
        contentPlaceholder: a,
        renderedContent: s,
        leadingIcon: o,
        trailingIcon: c,
    } = (0, l.o)(e, t, n, i, f.tP, {
        trailingIconClass: f._v,
        leadingIconClass: f.a5,
        iconSize: d.eJ,
    });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            o,
            null != s
                ? s
                : (0, r.jsx)("span", {
                      className: f.dp,
                      children: a,
                  }),
            c,
        ],
    });
}
