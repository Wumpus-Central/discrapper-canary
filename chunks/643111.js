e.d(n, { A: () => C });
var a = e(627968);
e(64700);
var t = e(17928),
    r = e(554146),
    l = e(477782),
    d = e(131607),
    s = e(816662),
    u = e(543465),
    c = e(945810),
    o = e(395504);
let N = (0, c.mj)({
    name: "2026-04-channel-pinning",
    kind: "user",
    defaultConfig: { canPinEverywhere: !1 },
    variations: { 1: { canPinEverywhere: !0 } },
});
var _ = e(652215),
    g = e(49999),
    h = e(375708);
function C(i) {
    let n = (0, t.bG)([u.Ay], () => u.Ay.isFavorite(i.guild_id, i.id)),
        { canPin: e, pinningNewlyAvailable: c } = (function (i) {
            let n = (0, o.jN)(i),
                { canPinEverywhere: e } = N.useConfig({ location: "useCanPinChannelsInGuild" });
            return { canPin: n || e, pinningNewlyAvailable: !n && e };
        })(i.guild_id),
        C = n || !c || i.isThread() || i.isCategory() ? [] : [r.M.PIN_CHANNEL_NEW_BADGE],
        [p, A] = (0, d.kn)(C),
        E = p === r.M.PIN_CHANNEL_NEW_BADGE;
    if (i.isThread() || i.isCategory() || (!n && !e)) return null;
    let v = n ? h.intl.string(h.t.M5PWSf) : h.intl.string(h.t.RMpwZu);
    return (0, a.jsx)(l.Dr, {
        id: "pin-channel",
        label: v,
        action: () => {
            E && A(g.i.TAKE_ACTION), (0, s.jA)(i.guild_id, i.id, !n, { section: _.JJy.CONTEXT_MENU });
        },
        badge: E ? "new" : void 0,
    });
}
