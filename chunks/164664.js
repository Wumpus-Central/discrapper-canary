n.d(t, { A: () => d });
var i,
    l = n(627968);
n(64700);
var a = n(39623),
    r =
        (((i = {})[(i.NONE = 0)] = "NONE"),
        (i[(i.FEATURE_LIMITED = 1)] = "FEATURE_LIMITED"),
        (i[(i.GUILD_FEATURE_LIMITED = 2)] = "GUILD_FEATURE_LIMITED"),
        (i[(i.USER_FEATURE_LIMITED = 3)] = "USER_FEATURE_LIMITED"),
        (i[(i.SLOWMODE = 4)] = "SLOWMODE"),
        (i[(i.RATE_LIMIT = 5)] = "RATE_LIMIT"),
        (i[(i.CANNOT_MESSAGE_USER = 6)] = "CANNOT_MESSAGE_USER"),
        (i[(i.USER_VERIFICATION_LEVEL = 7)] = "USER_VERIFICATION_LEVEL"),
        (i[(i.CANNOT_UNARCHIVE_THREAD = 8)] = "CANNOT_UNARCHIVE_THREAD"),
        (i[(i.CANNOT_JOIN_THREAD = 9)] = "CANNOT_JOIN_THREAD"),
        (i[(i.MISSING_PERMISSIONS = 10)] = "MISSING_PERMISSIONS"),
        (i[(i.CANNOT_SEND_ATTACHMENTS = 11)] = "CANNOT_SEND_ATTACHMENTS"),
        (i[(i.CANNOT_SEND_EMBEDS = 12)] = "CANNOT_SEND_EMBEDS"),
        (i[(i.CANNOT_SEND_STICKERS = 13)] = "CANNOT_SEND_STICKERS"),
        (i[(i.AUTOMOD_BLOCKED = 14)] = "AUTOMOD_BLOCKED"),
        (i[(i.HARMFUL_LINK = 15)] = "HARMFUL_LINK"),
        (i[(i.CANNOT_USE_COMMAND = 16)] = "CANNOT_USE_COMMAND"),
        (i[(i.BETA_GUILD_SIZE = 17)] = "BETA_GUILD_SIZE"),
        (i[(i.CANNOT_USE_EXTERNAL_APPS = 18)] = "CANNOT_USE_EXTERNAL_APPS"),
        i),
    s = n(985018),
    o = n(652215),
    c = n(473988);
function d(e) {
    let t,
        { message: n, onDeleteMessage: i, children: d } = e,
        u = n.interactionMetadata?.ephemerality_reason,
        _ = () => i(n, !0);
    if (null != u) {
        let e = (function (e) {
            switch (e) {
                case r.FEATURE_LIMITED:
                    return s.intl.string(s.t.WCvmrR);
                case r.GUILD_FEATURE_LIMITED:
                    return s.intl.string(s.t["0QUDYf"]);
                case r.USER_FEATURE_LIMITED:
                    return s.intl.string(s.t.gs1sxd);
                case r.SLOWMODE:
                    return s.intl.string(s.t["9UAXh4"]);
                case r.RATE_LIMIT:
                    return s.intl.string(s.t.zBB9xD);
                case r.CANNOT_MESSAGE_USER:
                    return s.intl.string(s.t.w7sHnP);
                case r.USER_VERIFICATION_LEVEL:
                    return s.intl.string(s.t.SLAkFX);
                case r.CANNOT_UNARCHIVE_THREAD:
                    return s.intl.string(s.t.AIqS3n);
                case r.CANNOT_JOIN_THREAD:
                    return s.intl.string(s.t.BqKxlT);
                case r.MISSING_PERMISSIONS:
                    return s.intl.string(s.t.LLF2DJ);
                case r.CANNOT_SEND_ATTACHMENTS:
                    return s.intl.string(s.t.Htl7W1);
                case r.CANNOT_SEND_EMBEDS:
                    return s.intl.string(s.t.vGgPMH);
                case r.CANNOT_SEND_STICKERS:
                    return s.intl.string(s.t.byrr7l);
                case r.AUTOMOD_BLOCKED:
                    return s.intl.string(s.t["24PAJ+"]);
                case r.HARMFUL_LINK:
                    return s.intl.string(s.t.zeqgmP);
                case r.CANNOT_USE_COMMAND:
                    return s.intl.string(s.t.kzMhhk);
                case r.BETA_GUILD_SIZE:
                    return s.intl.string(s.t.Af3rGY);
                case r.CANNOT_USE_EXTERNAL_APPS:
                    return s.intl.string(s.t.Ji4l7E);
                default:
                    return s.intl.string(s.t["v/OAcs"]);
            }
        })(u);
        t = (0, l.jsx)("div", { className: c.rd, children: s.intl.format(s.t.wx1tLQ, { handleDelete: _, reason: e }) });
    } else
        t =
            n.type === o.lAJ.STAGE_RAISE_HAND
                ? s.intl.format(s.t["qDAX++"], { handleDelete: _ })
                : s.intl.format(s.t.uX3ecL, { count: 1, countMessages: 1, handleDelete: _ });
    return (0, l.jsxs)("div", {
        className: c.XO,
        onClick: (e) => e.stopPropagation(),
        children: [(0, l.jsx)(a.b, { size: "xs", color: "currentColor", className: c.Kk }), t, d],
    });
}
