n.d(t, { A: () => o });
var a = n(627968),
    l = n(701363),
    i = n(331884),
    r = n(95701),
    s = n(652215);
function o(e) {
    let { selected: t, nameplate: n } = e,
        o = (0, i.i)(),
        c = new r.cq({
            id: "0",
            type: s.rbe.DM,
            name: "self",
            guild_id: "0",
            recipients: [o.id],
        });
    return (0, a.jsx)(l.th, {
        selected: t,
        channel: c,
        user: o,
        nameplate: n,
    });
}
