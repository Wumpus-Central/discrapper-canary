n.d(e, { A: () => u });
var r = n(455207),
    a = n(943667);
function u(l) {
    return (
        !((0, r.MZ)(l) || ((0, a.A)(l) && l.messageReference?.guild_id != null)) &&
        (null == l.interaction || "SENDING" !== l.state)
    );
}
