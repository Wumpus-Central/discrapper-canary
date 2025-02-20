n.d(t, { Z: () => f });
var r = n(200651),
    i = n(192379),
    a = n(442837),
    o = n(616780),
    l = n(905405),
    s = n(937889),
    c = n(267128),
    d = n(123145),
    u = n(699516),
    p = n(217702),
    m = n(456536);
function f(e) {
    let { message: t, channel: n } = e,
        { isBlocked: f, isIgnored: h } = (0, a.cj)(
            [u.Z],
            () => ({
                isBlocked: u.Z.isBlockedForMessage(t),
                isIgnored: u.Z.isIgnoredForMessage(t)
            }),
            [t]
        ),
        g = (0, l.p)(),
        _ = i.useMemo(() => ({ [n.guild_id]: [t.author.id] }), [n.guild_id, t.author.id]);
    (0, o.$)(_);
    let b = i.useMemo(
        () =>
            null != t.content && '' !== t.content
                ? (0, s.ZP)(t, {
                      formatInline: !0,
                      shouldFilterKeywords: g
                  }).content
                : null,
        [t, g]
    );
    return (0, r.jsxs)('div', {
        className: m.threadMessageAccessory,
        children: [
            (0, r.jsx)('img', {
                alt: '',
                src: t.author.getAvatarURL(n.guild_id, 16),
                className: m.threadMessageAccessoryAvatar
            }),
            (0, r.jsx)(d.Z, {
                message: t,
                channel: n,
                compact: !0
            }),
            (0, r.jsx)('div', {
                className: m.threadMessageAccessoryPreview,
                children: (function (e, t, n, i) {
                    let {
                        contentPlaceholder: a,
                        renderedContent: o,
                        leadingIcon: l,
                        trailingIcon: s
                    } = (0, c.f)(e, t, n, i, m.threadMessageAccessoryContent, {
                        trailingIconClass: m.threadMessageAccessoryContentTrailingIcon,
                        leadingIconClass: m.threadMessageAccessoryContentLeadingIcon,
                        iconSize: p.WW
                    });
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            l,
                            null != o
                                ? o
                                : (0, r.jsx)('span', {
                                      className: m.threadMessageAccessoryPlaceholder,
                                      children: a
                                  }),
                            s
                        ]
                    });
                })(t, b, f, h)
            })
        ]
    });
}
