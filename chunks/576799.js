n.d(t, { Z: () => _ });
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(616780),
    s = n(905405),
    o = n(937889),
    c = n(267128),
    d = n(123145),
    u = n(699516),
    m = n(217702),
    h = n(507304);
function _(e) {
    let { message: t, channel: n } = e,
        { isBlocked: _, isIgnored: p } = (0, a.cj)(
            [u.Z],
            () => ({
                isBlocked: u.Z.isBlockedForMessage(t),
                isIgnored: u.Z.isIgnoredForMessage(t)
            }),
            [t]
        ),
        g = (0, s.p)(),
        f = l.useMemo(() => ({ [n.guild_id]: [t.author.id] }), [n.guild_id, t.author.id]);
    (0, r.$)(f);
    let x = l.useMemo(
        () =>
            null != t.content && '' !== t.content
                ? (0, o.ZP)(t, {
                      formatInline: !0,
                      shouldFilterKeywords: g
                  }).content
                : null,
        [t, g]
    );
    return (0, i.jsxs)('div', {
        className: h.threadMessageAccessory,
        children: [
            (0, i.jsx)('img', {
                alt: '',
                src: t.author.getAvatarURL(n.guild_id, 16),
                className: h.threadMessageAccessoryAvatar
            }),
            (0, i.jsx)(d.Z, {
                message: t,
                channel: n,
                compact: !0
            }),
            (0, i.jsx)('div', {
                className: h.threadMessageAccessoryPreview,
                children: (function (e, t, n, l) {
                    let {
                        contentPlaceholder: a,
                        renderedContent: r,
                        leadingIcon: s,
                        trailingIcon: o
                    } = (0, c.f)(e, t, n, l, h.threadMessageAccessoryContent, {
                        trailingIconClass: h.threadMessageAccessoryContentTrailingIcon,
                        leadingIconClass: h.threadMessageAccessoryContentLeadingIcon,
                        iconSize: m.WW
                    });
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            s,
                            null != r
                                ? r
                                : (0, i.jsx)('span', {
                                      className: h.threadMessageAccessoryPlaceholder,
                                      children: a
                                  }),
                            o
                        ]
                    });
                })(t, x, _, p)
            })
        ]
    });
}
