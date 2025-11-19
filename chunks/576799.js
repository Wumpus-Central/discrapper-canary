n.d(t, { Z: () => p });
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(616780),
    s = n(905405),
    l = n(937889),
    c = n(267128),
    u = n(123145),
    d = n(699516),
    f = n(217702),
    _ = n(136907);
function p(e) {
    let { message: t, channel: n } = e,
        { isBlocked: c, isIgnored: f } = (0, a.cj)(
            [d.Z],
            () => ({
                isBlocked: d.Z.isBlockedForMessage(t),
                isIgnored: d.Z.isIgnoredForMessage(t),
            }),
            [t],
        ),
        p = (0, s.p)(),
        m = i.useMemo(() => ({ [n.guild_id]: [t.author.id] }), [n.guild_id, t.author.id]);
    (0, o.$)(m, "ThreadMessageAccessoryMessage");
    let g = i.useMemo(
        () =>
            null != t.content && "" !== t.content
                ? (0, l.ZP)(t, {
                      formatInline: !0,
                      shouldFilterKeywords: p,
                  }).content
                : null,
        [t, p],
    );
    return (0, r.jsxs)("div", {
        className: _.threadMessageAccessory,
        children: [
            (0, r.jsx)("img", {
                alt: "",
                src: t.author.getAvatarURL(n.guild_id, 16),
                className: _.threadMessageAccessoryAvatar,
            }),
            (0, r.jsx)(u.Z, {
                message: t,
                channel: n,
                compact: !0,
            }),
            (0, r.jsx)("div", {
                className: _.threadMessageAccessoryPreview,
                children: h(t, g, c, f),
            }),
        ],
    });
}
function h(e, t, n, i) {
    let {
        contentPlaceholder: a,
        renderedContent: o,
        leadingIcon: s,
        trailingIcon: l,
    } = (0, c.f)(e, t, n, i, _.threadMessageAccessoryContent, {
        trailingIconClass: _.threadMessageAccessoryContentTrailingIcon,
        leadingIconClass: _.threadMessageAccessoryContentLeadingIcon,
        iconSize: f.WW,
    });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            s,
            null != o
                ? o
                : (0, r.jsx)("span", {
                      className: _.threadMessageAccessoryPlaceholder,
                      children: a,
                  }),
            l,
        ],
    });
}
