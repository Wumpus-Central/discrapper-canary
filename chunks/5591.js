n.d(t, {
    A: () => c,
});
var r = n(397927),
    i = n(73153),
    l = n(272355),
    a = n(480900),
    s = n(293260);
class o extends l.A {
    _initialize() {
        i.h.subscribe("GUILD_ROLE_CONNECTIONS_MODAL_SHOW", this.handleShow);
    }
    _terminate() {
        i.h.unsubscribe("GUILD_ROLE_CONNECTIONS_MODAL_SHOW", this.handleShow);
    }
    handleShow(e) {
        let { role: t, guildId: n } = e;
        if (!(0, r.kBI)("GUILD_ROLE_CONNECTIONS_MODAL_KEY")) {
            var i;
            null != t && (null == (i = t.tags) ? void 0 : i.guild_connections) === null ? (0, a.b)(t, n) : (0, s.c0)(n);
        }
    }
}
let c = new o();
