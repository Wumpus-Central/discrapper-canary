n.d(l, { A: () => i });
var a = n(455207),
    s = n(943667);
function i(e) {
    return (
        !((0, a.MZ)(e) || ((0, s.A)(e) && e.messageReference?.guild_id != null)) &&
        (null == e.interaction || "SENDING" !== e.state)
    );
}
