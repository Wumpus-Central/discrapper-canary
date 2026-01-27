n.d(t, {
    A: () => m,
});
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(80682),
    s = n(465364),
    o = n(448368),
    c = n(943220),
    u = n(994500),
    d = n(838541),
    p = n(679740);

function m(e) {
    let { message: t, channel: n } = e,
        { isBlocked: m, isIgnored: f } = (0, l.cf)(
            [u.A],
            () => ({
                isBlocked: u.A.isBlockedForMessage(t),
                isIgnored: u.A.isIgnoredForMessage(t),
            }),
            [t],
        ),
        g = i.useMemo(
            () => ({
                [n.guild_id]: [t.author.id],
            }),
            [n.guild_id, t.author.id],
        );
    (0, a.E)(g, "ThreadMessageAccessoryMessage");
    let h = i.useMemo(
        () =>
            null != t.content && "" !== t.content
                ? (0, s.Ay)(t, {
                      formatInline: !0,
                  }).content
                : null,
        [t],
    );
    return (0, r.jsxs)("div", {
        className: p.up,
        children: [
            (0, r.jsx)("img", {
                alt: "",
                src: t.author.getAvatarURL(n.guild_id, 16),
                className: p.FJ,
            }),
            (0, r.jsx)(c.A, {
                message: t,
                channel: n,
                compact: !0,
            }),
            (0, r.jsx)("div", {
                className: p.Au,
                children: (function (e, t, n, i) {
                    let {
                        contentPlaceholder: l,
                        renderedContent: a,
                        leadingIcon: s,
                        trailingIcon: c,
                    } = (0, o.o)(e, t, n, i, p.tP, {
                        trailingIconClass: p._v,
                        leadingIconClass: p.a5,
                        iconSize: d.eJ,
                    });
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            s,
                            null != a
                                ? a
                                : (0, r.jsx)("span", {
                                      className: p.dp,
                                      children: l,
                                  }),
                            c,
                        ],
                    });
                })(t, h, m, f),
            }),
        ],
    });
}
