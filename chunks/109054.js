n.d(l, { A: () => r });
var s = n(455207),
    t = n(943667);
function r(e) {
    return (
        !((0, s.MZ)(e) || ((0, t.A)(e) && e.messageReference?.guild_id != null)) &&
        (null == e.interaction || "SENDING" !== e.state)
    );
}
