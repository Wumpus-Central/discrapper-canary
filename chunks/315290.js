n.d(e, { Ot: () => _, do: () => o, hc: () => c, jC: () => u, ju: () => d });
var l,
    r,
    a,
    i,
    s,
    o =
        (((l = {}).UNKNOWN = "unknown"),
        (l.ANY = "any"),
        (l.INVITE = "invite"),
        (l.ORGANIC = "organic_registration"),
        (l.ORGANIC_MARKETING = "organic_marketing"),
        (l.ORGANIC_GUILD_TEMPLATES = "organic_guild_template"),
        (l.CREATE_GUILD = "create_guild"),
        l),
    _ = (((r = {}).AGE_GATE = "age_gate"), (r.AGE_GATE_UNDERAGE = "age_gate_underage"), r),
    c = (((a = {}).CLAIM_ACCOUNT = "claim_account"), (a.CLAIM_ACCOUNT_SUCCESS = "claim_account_success"), a),
    u =
        (((i = {}).GUILD_TEMPLATES = "guild_templates"),
        (i.GUILD_CREATE = "guild_create"),
        (i.CREATION_INTENT = "creation_intent"),
        (i.CHANNEL_PROMPT = "channel_prompt"),
        (i.JOIN_GUILD = "join_guild"),
        (i.SUCCESS = "create_success"),
        i),
    d = /^(2155|7706)2$/.test(n.j)
        ? (((s = {}).NUF_STARTED = "nuf_started"),
          (s.AGE_GATE = "age_gate"),
          (s.NUF_COMPLETE = "nuf_complete"),
          (s.HUB_CONNECTION = "hub_connection"),
          s)
        : null;
