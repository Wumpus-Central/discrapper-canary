n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(616780),
    o = n(905405),
    s = n(937889),
    c = n(267128),
    u = n(123145),
    d = n(699516),
    m = n(217702),
    h = n(507304);
function f(e) {
    let { message: t, channel: n } = e,
        { isBlocked: f, isIgnored: p } = (0, l.cj)(
            [d.Z],
            () => ({
                isBlocked: d.Z.isBlockedForMessage(t),
                isIgnored: d.Z.isIgnoredForMessage(t)
            }),
            [t]
        ),
        _ = (0, o.p)(),
        g = r.useMemo(() => ({ [n.guild_id]: [t.author.id] }), [n.guild_id, t.author.id]);
    (0, a.$)(g);
    let E = r.useMemo(
        () =>
            null != t.content && '' !== t.content
                ? (0, s.ZP)(t, {
                      formatInline: !0,
                      shouldFilterKeywords: _
                  }).content
                : null,
        [t, _]
    );
    return (0, i.jsxs)('div', {
        className: h.threadMessageAccessory,
        children: [
            (0, i.jsx)('img', {
                alt: '',
                src: t.author.getAvatarURL(n.guild_id, 16),
                className: h.threadMessageAccessoryAvatar
            }),
            (0, i.jsx)(u.Z, {
                message: t,
                channel: n,
                compact: !0
            }),
            (0, i.jsx)('div', {
                className: h.threadMessageAccessoryPreview,
                children: (function (e, t, n, r) {
                    let {
                        contentPlaceholder: l,
                        renderedContent: a,
                        leadingIcon: o,
                        trailingIcon: s
                    } = (0, c.f)(e, t, n, r, h.threadMessageAccessoryContent, {
                        trailingIconClass: h.threadMessageAccessoryContentTrailingIcon,
                        leadingIconClass: h.threadMessageAccessoryContentLeadingIcon,
                        iconSize: m.WW
                    });
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            o,
                            null != a
                                ? a
                                : (0, i.jsx)('span', {
                                      className: h.threadMessageAccessoryPlaceholder,
                                      children: l
                                  }),
                            s
                        ]
                    });
                })(t, E, f, p)
            })
        ]
    });
}
