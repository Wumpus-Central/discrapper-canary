n.d(t, { A: () => l });
var a = n(715138),
    i = n(943667);
function l(e) {
    return (
        !((0, a.MZ)(e) || ((0, i.A)(e) && e.messageReference?.guild_id != null)) &&
        (null == e.interaction || "SENDING" !== e.state)
    );
}
