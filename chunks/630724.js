n.d(t, {
    EW: () => f,
    FF: () => s,
    MK: () => c,
    X2: () => d,
    mx: () => u,
});
var r,
    o,
    a,
    i,
    l,
    c =
        (((r = {}).UNKNOWN = "unknown"),
        (r.ANY = "any"),
        (r.INVITE = "invite"),
        (r.ORGANIC = "organic_registration"),
        (r.ORGANIC_MARKETING = "organic_marketing"),
        (r.ORGANIC_GUILD_TEMPLATES = "organic_guild_template"),
        (r.CREATE_GUILD = "create_guild"),
        r),
    s = (((o = {}).AGE_GATE = "age_gate"), (o.AGE_GATE_UNDERAGE = "age_gate_underage"), o),
    u = (((a = {}).CLAIM_ACCOUNT = "claim_account"), (a.CLAIM_ACCOUNT_SUCCESS = "claim_account_success"), a),
    d =
        (((i = {}).GUILD_TEMPLATES = "guild_templates"),
        (i.GUILD_CREATE = "guild_create"),
        (i.CREATION_INTENT = "creation_intent"),
        (i.CHANNEL_PROMPT = "channel_prompt"),
        (i.JOIN_GUILD = "join_guild"),
        (i.SUCCESS = "create_success"),
        i),
    f = /^(12633|75255)$/.test(n.j)
        ? (((l = {}).NUF_STARTED = "nuf_started"),
          (l.AGE_GATE = "age_gate"),
          (l.NUF_COMPLETE = "nuf_complete"),
          (l.HUB_CONNECTION = "hub_connection"),
          l)
        : null;
