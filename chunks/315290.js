n.d(t, { Ot: () => s, do: () => o, hc: () => i, jC: () => _, ju: () => p });
var l,
    r,
    u,
    a,
    c,
    o =
        (((l = {}).UNKNOWN = "unknown"),
        (l.ANY = "any"),
        (l.INVITE = "invite"),
        (l.ORGANIC = "organic_registration"),
        (l.ORGANIC_MARKETING = "organic_marketing"),
        (l.ORGANIC_GUILD_TEMPLATES = "organic_guild_template"),
        (l.CREATE_GUILD = "create_guild"),
        l),
    s = (((r = {}).AGE_GATE = "age_gate"), (r.AGE_GATE_UNDERAGE = "age_gate_underage"), r),
    i = (((u = {}).CLAIM_ACCOUNT = "claim_account"), (u.CLAIM_ACCOUNT_SUCCESS = "claim_account_success"), u),
    _ =
        (((a = {}).GUILD_TEMPLATES = "guild_templates"),
        (a.GUILD_CREATE = "guild_create"),
        (a.CREATION_INTENT = "creation_intent"),
        (a.CHANNEL_PROMPT = "channel_prompt"),
        (a.JOIN_GUILD = "join_guild"),
        (a.SUCCESS = "create_success"),
        a),
    p = /^(2155|7706)2$/.test(n.j)
        ? (((c = {}).NUF_STARTED = "nuf_started"),
          (c.AGE_GATE = "age_gate"),
          (c.NUF_COMPLETE = "nuf_complete"),
          (c.HUB_CONNECTION = "hub_connection"),
          c)
        : null;
