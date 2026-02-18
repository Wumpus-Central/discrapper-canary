n.d(t, { A: () => r });
var i = n(455207),
    l = n(943667);
function r(e) {
    return (
        !((0, i.MZ)(e) || ((0, l.A)(e) && e.messageReference?.guild_id != null)) &&
        (null == e.interaction || "SENDING" !== e.state)
    );
}
