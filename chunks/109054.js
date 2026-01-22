n.d(t, { A: () => a });
var r = n(455207),
    i = n(943667);
function a(e) {
    var t;
    return (
        !((0, r.MZ)(e) || ((0, i.A)(e) && (null == (t = e.messageReference) ? void 0 : t.guild_id) != null)) &&
        (null == e.interaction || "SENDING" !== e.state)
    );
}
