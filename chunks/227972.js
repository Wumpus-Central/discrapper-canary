n.d(t, { A: () => d });
var i = n(192308),
    r = n(73153),
    a = n(272355),
    l = n(480900),
    s = n(293260);
class o extends a.A {
    _initialize() {
        r.h.subscribe("GUILD_ROLE_CONNECTIONS_MODAL_SHOW", this.handleShow);
    }
    _terminate() {
        r.h.unsubscribe("GUILD_ROLE_CONNECTIONS_MODAL_SHOW", this.handleShow);
    }
    handleShow(e) {
        let { role: t, guildId: n } = e;
        (0, i.hasModalOpen)("GUILD_ROLE_CONNECTIONS_MODAL_KEY") ||
            (null != t && t.tags?.guild_connections === null ? (0, l.b)(t, n) : (0, s.c0)(n));
    }
}
let d = new o();
