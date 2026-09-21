n.d(t, { c: () => x, O: () => A });
var i,
    l = n(477900),
    s = n(582128),
    a = n(822963),
    r = n(381438),
    o = n(17928),
    c = n(287809),
    d =
        (((i = {}).DISPLAY = "display"),
        (i.BLOCK_UNDERAGE = "block_underage"),
        (i.BLOCK_CHANNEL_RESTRICTION = "block_channel_restriction"),
        i),
    u = n(627363),
    m = n(834730),
    h = n(375708),
    g = n(311408);
function p(e) {
    let { visibility: t, variant: n } = e,
        i = s.useMemo(
            () =>
                (function (e) {
                    switch (e) {
                        case "game_invite":
                            return h.intl.string(h.t.pkq6Vq);
                        case "app_embed":
                            return h.intl.string(h.t.bZBN64);
                        default:
                            return "";
                    }
                })(n),
            [n],
        ),
        a = s.useMemo(
            () =>
                (function (e, t) {
                    switch (e) {
                        case "game_invite":
                            return t === d.BLOCK_UNDERAGE ? h.intl.string(h.t.GhU4yl) : h.intl.string(h.t.B99UMJ);
                        case "app_embed":
                            return t === d.BLOCK_UNDERAGE ? h.intl.string(h.t.LPOzxB) : h.intl.string(h.t.NIZyKq);
                        default:
                            return "";
                    }
                })(n, t),
            [n, t],
        );
    return (0, l.jsxs)("div", {
        className: g.E,
        children: [
            (0, l.jsx)(m.E, { variant: "text-xs/semibold", color: "text-default", children: i }),
            (0, l.jsx)(m.E, { variant: "text-sm/normal", color: "text-muted", children: a }),
        ],
    });
}
function A(e) {
    let { applicationId: t, channel: n, variant: i, children: s } = e,
        { data: a } = (0, u.YY)(t);
    return null == a
        ? null
        : (0, l.jsx)(x, { contentClassification: a?.contentClassification, channel: n, variant: i, children: s(a) });
}
function x(e) {
    let t,
        { contentClassification: n, channel: i, variant: s, children: u } = e,
        m =
            ((t = (0, o.bG)([c.default], () => c.default.getCurrentUser()?.nsfwAllowed)),
            null == n || (0, a.U1)({ type: a.fS.MINIMAL, data: n }) !== r.Y.ADULT
                ? "display"
                : !0 !== t
                  ? "block_underage"
                  : i.isPrivate() || i.nsfw
                    ? "display"
                    : "block_channel_restriction");
    switch (m) {
        case d.DISPLAY:
            return u;
        case d.BLOCK_UNDERAGE:
        case d.BLOCK_CHANNEL_RESTRICTION:
            return (0, l.jsx)(p, { visibility: m, variant: s });
        default:
            return null;
    }
}
