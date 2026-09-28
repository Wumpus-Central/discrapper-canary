l.d(t, { H: () => a, w: () => r });
var n = l(948230);
function a(e, t, l) {
    return t?.integration_installed === !0 && e?.guild_id != null ? e.guild_id : l;
}
async function r(e, t) {
    (e.guild_id !== t || e.preview_guild_id !== t) && (await (0, n.M7)(e.id, { guild_id: t, preview_guild_id: t }));
}
