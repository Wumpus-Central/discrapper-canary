n.d(t, { Z: () => p });
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(616780),
    s = n(937889),
    l = n(267128),
    c = n(123145),
    u = n(699516),
    d = n(217702),
    f = n(724913);
function p(e) {
    let { message: t, channel: n } = e,
        { isBlocked: l, isIgnored: d } = (0, a.cj)(
            [u.Z],
            () => ({
                isBlocked: u.Z.isBlockedForMessage(t),
                isIgnored: u.Z.isIgnoredForMessage(t),
            }),
            [t],
        ),
        p = i.useMemo(() => ({ [n.guild_id]: [t.author.id] }), [n.guild_id, t.author.id]);
    (0, o.$)(p, "ThreadMessageAccessoryMessage");
    let m = i.useMemo(
        () => (null != t.content && "" !== t.content ? (0, s.ZP)(t, { formatInline: !0 }).content : null),
        [t],
    );
    return (0, r.jsxs)("div", {
        className: f.threadMessageAccessory,
        children: [
            (0, r.jsx)("img", {
                alt: "",
                src: t.author.getAvatarURL(n.guild_id, 16),
                className: f.threadMessageAccessoryAvatar,
            }),
            (0, r.jsx)(c.Z, {
                message: t,
                channel: n,
                compact: !0,
            }),
            (0, r.jsx)("div", {
                className: f.threadMessageAccessoryPreview,
                children: _(t, m, l, d),
            }),
        ],
    });
}
function _(e, t, n, i) {
    let {
        contentPlaceholder: a,
        renderedContent: o,
        leadingIcon: s,
        trailingIcon: c,
    } = (0, l.f)(e, t, n, i, f.threadMessageAccessoryContent, {
        trailingIconClass: f.threadMessageAccessoryContentTrailingIcon,
        leadingIconClass: f.threadMessageAccessoryContentLeadingIcon,
        iconSize: d.WW,
    });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            s,
            null != o
                ? o
                : (0, r.jsx)("span", {
                      className: f.threadMessageAccessoryPlaceholder,
                      children: a,
                  }),
            c,
        ],
    });
}
