n.d(l, { A: () => t });
var r = n(455207),
    u = n(943667);
function t(e) {
    return (
        !((0, r.MZ)(e) || ((0, u.A)(e) && e.messageReference?.guild_id != null)) &&
        (null == e.interaction || "SENDING" !== e.state)
    );
}
