s.d(t, { A: () => a }), s(321073);
var r = s(64700),
    n = s(954571),
    l = s(401755),
    i = s(652215);
function a(e) {
    let t = r.useRef([]);
    r.useEffect(() => {
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
