n.d(t, {
    EW: () => p,
    FF: () => c,
    MK: () => u,
    X2: () => f,
    mx: () => s,
});
var r,
    l,
    o,
    a,
    i,
    u =
        (((r = {}).UNKNOWN = "unknown"),
        (r.ANY = "any"),
        (r.INVITE = "invite"),
        (r.ORGANIC = "organic_registration"),
        (r.ORGANIC_MARKETING = "organic_marketing"),
        (r.ORGANIC_GUILD_TEMPLATES = "organic_guild_template"),
        (r.CREATE_GUILD = "create_guild"),
        r),
    c = (((l = {}).AGE_GATE = "age_gate"), (l.AGE_GATE_UNDERAGE = "age_gate_underage"), l),
    s = (((o = {}).CLAIM_ACCOUNT = "claim_account"), (o.CLAIM_ACCOUNT_SUCCESS = "claim_account_success"), o),
    f =
        (((a = {}).GUILD_TEMPLATES = "guild_templates"),
        (a.GUILD_CREATE = "guild_create"),
        (a.CREATION_INTENT = "creation_intent"),
        (a.CHANNEL_PROMPT = "channel_prompt"),
        (a.JOIN_GUILD = "join_guild"),
        (a.SUCCESS = "create_success"),
        a),
    p = /^(12633|75255)$/.test(n.j)
        ? (((i = {}).NUF_STARTED = "nuf_started"),
          (i.AGE_GATE = "age_gate"),
          (i.NUF_COMPLETE = "nuf_complete"),
          (i.HUB_CONNECTION = "hub_connection"),
          i)
        : null;
