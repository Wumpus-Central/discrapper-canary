n.d(e, { A: () => i });
var a = n(455207),
    s = n(943667);
function i(l) {
    return (
        !((0, a.MZ)(l) || ((0, s.A)(l) && l.messageReference?.guild_id != null)) &&
        (null == l.interaction || "SENDING" !== l.state)
    );
}
