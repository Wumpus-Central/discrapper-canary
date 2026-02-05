r.d(t, { A: () => a }), r(321073);
var s = r(64700),
    n = r(954571),
    l = r(401755),
    i = r(652215);
function a(e) {
    let t = s.useRef([]);
    s.useEffect(() => {
        null == e ||
            e.state === l.QB.RESOLVING ||
            t.current.includes(e.code) ||
            (t.current.push(e.code),
            n.default.track(i.HAw.CREATE_GUILD_VIEWED, {
                guild_template_code: e.code,
                guild_template_name: e.name,
                guild_template_description: e.description,
                guild_template_guild_id: e.sourceGuildId,
            }));
    });
}
