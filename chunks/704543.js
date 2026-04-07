t.d(n, { A: () => g });
var i = t(627968);
t(64700);
var r = t(311907),
    l = t(554146),
    a = t(397927),
    d = t(932001),
    s = t(816662),
    u = t(543465),
    o = t(127877),
    c = t(652215),
    A = t(49999),
    E = t(985018);
function g(e) {
    let n = (0, r.bG)([u.Ay], () => u.Ay.isFavorite(e.guild_id, e.id)),
        { canPin: t, pinningNewlyAvailable: g } = (0, o.p)(e.guild_id),
        N = n || !g || e.isThread() || e.isCategory() ? [] : [l.M.PIN_CHANNEL_NEW_BADGE],
        [_, y] = (0, d.kn)(N),
        v = _ === l.M.PIN_CHANNEL_NEW_BADGE;
    if (e.isThread() || e.isCategory() || (!n && !t)) return null;
    let h = n ? E.intl.string(E.t.M5PWSf) : E.intl.string(E.t.RMpwZu);
    return (0, i.jsx)(a.Drp, {
        id: "pin-channel",
        label: h,
        action: () => {
            v && y(A.i.TAKE_ACTION), (0, s.jA)(e.guild_id, e.id, !n, { section: c.JJy.CONTEXT_MENU });
        },
        badge: v ? "new" : void 0,
    });
}
