n.d(t, { c: () => x, O: () => A });
var i,
    l = n(627968),
    s = n(64700),
    r = n(822963),
    a = n(381438),
    o = n(17928),
    d = n(287809),
    c =
        (((i = {}).DISPLAY = "display"),
        (i.BLOCK_UNDERAGE = "block_underage"),
        (i.BLOCK_CHANNEL_RESTRICTION = "block_channel_restriction"),
        i),
    u = n(627363),
    m = n(834730),
    h = n(375708),
    g = n(130951);
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
        r = s.useMemo(
            () =>
                (function (e, t) {
                    switch (e) {
                        case "game_invite":
                            return t === c.BLOCK_UNDERAGE ? h.intl.string(h.t.GhU4yl) : h.intl.string(h.t.B99UMJ);
                        case "app_embed":
                            return t === c.BLOCK_UNDERAGE ? h.intl.string(h.t.LPOzxB) : h.intl.string(h.t.NIZyKq);
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
            (0, l.jsx)(m.E, { variant: "text-sm/normal", color: "text-muted", children: r }),
        ],
    });
}
function A(e) {
    let { applicationId: t, channel: n, variant: i, children: s } = e,
        { data: r } = (0, u.YY)(t);
    return null == r
        ? null
        : (0, l.jsx)(x, { contentClassification: r?.contentClassification, channel: n, variant: i, children: s(r) });
}
function x(e) {
    let t,
        { contentClassification: n, channel: i, variant: s, children: u } = e,
        m =
            ((t = (0, o.bG)([d.default], () => d.default.getCurrentUser()?.nsfwAllowed)),
            null == n || (0, r.U1)({ type: r.fS.MINIMAL, data: n }) !== a.Y.ADULT
                ? "display"
                : !0 !== t
                  ? "block_underage"
                  : i.isPrivate() || i.nsfw
                    ? "display"
                    : "block_channel_restriction");
    switch (m) {
        case c.DISPLAY:
            return u;
        case c.BLOCK_UNDERAGE:
        case c.BLOCK_CHANNEL_RESTRICTION:
            return (0, l.jsx)(p, { visibility: m, variant: s });
        default:
            return null;
    }
}
