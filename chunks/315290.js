n.d(t, { Ot: () => s, do: () => _, hc: () => c, jC: () => p, jK: () => E, ju: () => d });
var r,
    l,
    o,
    a,
    u,
    i,
    _ =
        (((r = {}).UNKNOWN = "unknown"),
        (r.ANY = "any"),
        (r.INVITE = "invite"),
        (r.ORGANIC = "organic_registration"),
        (r.ORGANIC_MARKETING = "organic_marketing"),
        (r.ORGANIC_GUILD_TEMPLATES = "organic_guild_template"),
        (r.CREATE_GUILD = "create_guild"),
        r),
    s = (((l = {}).AGE_GATE = "age_gate"), (l.AGE_GATE_UNDERAGE = "age_gate_underage"), l),
    c = (((o = {}).CLAIM_ACCOUNT = "claim_account"), (o.CLAIM_ACCOUNT_SUCCESS = "claim_account_success"), o),
    p =
        (((a = {}).GUILD_TEMPLATES = "guild_templates"),
        (a.GUILD_CREATE = "guild_create"),
        (a.CREATION_INTENT = "creation_intent"),
        (a.CHANNEL_PROMPT = "channel_prompt"),
        (a.JOIN_GUILD = "join_guild"),
        (a.SUCCESS = "create_success"),
        a),
    d = /^(2155|7706)2$/.test(n.j)
        ? (((u = {}).NUF_STARTED = "nuf_started"),
          (u.AGE_GATE = "age_gate"),
          (u.NUF_COMPLETE = "nuf_complete"),
          (u.HUB_CONNECTION = "hub_connection"),
          u)
        : null,
    E =
        88245 != n.j
            ? (((i = {}).WELCOME = "onboarding_welcome"),
              (i.APPEARANCE = "onboarding_appearance"),
              (i.DOWNLOAD_DESKTOP = "onboarding_download_desktop"),
              (i.PROFILE = "onboarding_profile"),
              (i.NEXT_STEPS = "onboarding_next_steps"),
              (i.JOIN_SERVER = "onboarding_join_server"),
              (i.ADD_FRIEND = "onboarding_add_friend"),
              (i.EXPLORE = "onboarding_explore"),
              (i.CREATE_SERVER = "onboarding_create_server"),
              (i.DISMISSED = "onboarding_dismissed"),
              i)
            : null;
