i.d(e, { A: () => g });
var t = i(627968);
i(64700);
var l = i(17928),
    a = i(554146),
    r = i(477782),
    d = i(932001),
    c = i(816662),
    o = i(543465),
    u = i(945810),
    s = i(395504);
let A = (0, u.mj)({
    name: "2026-04-channel-pinning",
    kind: "user",
    defaultConfig: { canPinEverywhere: !1 },
    variations: { 1: { canPinEverywhere: !0 } },
});
var _ = i(652215),
    E = i(49999),
    h = i(985018);
function g(n) {
    let e = (0, l.bG)([o.Ay], () => o.Ay.isFavorite(n.guild_id, n.id)),
        { canPin: i, pinningNewlyAvailable: u } = (function (n) {
            let e = (0, s.jN)(n),
                { canPinEverywhere: i } = A.useConfig({ location: "useCanPinChannelsInGuild" });
            return { canPin: e || i, pinningNewlyAvailable: !e && i };
        })(n.guild_id),
        g = e || !u || n.isThread() || n.isCategory() ? [] : [a.M.PIN_CHANNEL_NEW_BADGE],
        [y, b] = (0, d.kn)(g),
        f = y === a.M.PIN_CHANNEL_NEW_BADGE;
    if (n.isThread() || n.isCategory() || (!e && !i)) return null;
    let p = e ? h.intl.string(h.t.M5PWSf) : h.intl.string(h.t.RMpwZu);
    return (0, t.jsx)(r.Dr, {
        id: "pin-channel",
        label: p,
        action: () => {
            f && b(E.i.TAKE_ACTION), (0, c.jA)(n.guild_id, n.id, !e, { section: _.JJy.CONTEXT_MENU });
        },
        badge: f ? "new" : void 0,
    });
}
