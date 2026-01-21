n.d(e, {
    EW: () => m,
    FF: () => c,
    MK: () => s,
    X2: () => f,
    mx: () => u,
});
var r,
    l,
    o,
    i,
    a,
    s =
        (((r = {}).UNKNOWN = "unknown"),
        (r.ANY = "any"),
        (r.INVITE = "invite"),
        (r.ORGANIC = "organic_registration"),
        (r.ORGANIC_MARKETING = "organic_marketing"),
        (r.ORGANIC_GUILD_TEMPLATES = "organic_guild_template"),
        (r.CREATE_GUILD = "create_guild"),
        r),
    c = (((l = {}).AGE_GATE = "age_gate"), (l.AGE_GATE_UNDERAGE = "age_gate_underage"), l),
    u = (((o = {}).CLAIM_ACCOUNT = "claim_account"), (o.CLAIM_ACCOUNT_SUCCESS = "claim_account_success"), o),
    f =
        (((i = {}).GUILD_TEMPLATES = "guild_templates"),
        (i.GUILD_CREATE = "guild_create"),
        (i.CREATION_INTENT = "creation_intent"),
        (i.CHANNEL_PROMPT = "channel_prompt"),
        (i.JOIN_GUILD = "join_guild"),
        (i.SUCCESS = "create_success"),
        i),
    m = /^(12633|75255)$/.test(n.j)
        ? (((a = {}).NUF_STARTED = "nuf_started"),
          (a.AGE_GATE = "age_gate"),
          (a.NUF_COMPLETE = "nuf_complete"),
          (a.HUB_CONNECTION = "hub_connection"),
          a)
        : null;
