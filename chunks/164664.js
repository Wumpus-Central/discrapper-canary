n.d(t, { A: () => d });
var i,
    l = n(477900);
n(582128);
var s = n(39623),
    a =
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
    r = n(375708),
    o = n(652215),
    c = n(872252);
function d(e) {
    let t,
        { message: n, onDeleteMessage: i, children: d } = e,
        u = n.interactionMetadata?.ephemerality_reason;
    function m() {
        return i(n, !0);
    }
    if (null != u) {
        let e = (function (e) {
            switch (e) {
                case a.FEATURE_LIMITED:
                    return r.intl.string(r.t.WCvmrR);
                case a.GUILD_FEATURE_LIMITED:
                    return r.intl.string(r.t["0QUDYf"]);
                case a.USER_FEATURE_LIMITED:
                    return r.intl.string(r.t.gs1sxd);
                case a.SLOWMODE:
                    return r.intl.string(r.t["9UAXh4"]);
                case a.RATE_LIMIT:
                    return r.intl.string(r.t.zBB9xD);
                case a.CANNOT_MESSAGE_USER:
                    return r.intl.string(r.t.w7sHnP);
                case a.USER_VERIFICATION_LEVEL:
                    return r.intl.string(r.t.SLAkFX);
                case a.CANNOT_UNARCHIVE_THREAD:
                    return r.intl.string(r.t.AIqS3n);
                case a.CANNOT_JOIN_THREAD:
                    return r.intl.string(r.t.BqKxlT);
                case a.MISSING_PERMISSIONS:
                    return r.intl.string(r.t.LLF2DJ);
                case a.CANNOT_SEND_ATTACHMENTS:
                    return r.intl.string(r.t.Htl7W1);
                case a.CANNOT_SEND_EMBEDS:
                    return r.intl.string(r.t.vGgPMH);
                case a.CANNOT_SEND_STICKERS:
                    return r.intl.string(r.t.byrr7l);
                case a.AUTOMOD_BLOCKED:
                    return r.intl.string(r.t["24PAJ+"]);
                case a.HARMFUL_LINK:
                    return r.intl.string(r.t.zeqgmP);
                case a.CANNOT_USE_COMMAND:
                    return r.intl.string(r.t.kzMhhk);
                case a.BETA_GUILD_SIZE:
                    return r.intl.string(r.t.Af3rGY);
                case a.CANNOT_USE_EXTERNAL_APPS:
                    return r.intl.string(r.t.Ji4l7E);
                default:
                    return r.intl.string(r.t["v/OAcs"]);
            }
        })(u);
        t = (0, l.jsx)("div", { className: c.rd, children: r.intl.format(r.t.wx1tLQ, { handleDelete: m, reason: e }) });
    } else
        t =
            n.type === o.lAJ.STAGE_RAISE_HAND
                ? r.intl.format(r.t["qDAX++"], { handleDelete: m })
                : r.intl.format(r.t.uX3ecL, { count: 1, countMessages: 1, handleDelete: m });
    return (0, l.jsxs)("div", {
        className: c.XO,
        onClick: (e) => e.stopPropagation(),
        children: [(0, l.jsx)(s.b, { size: "xs", color: "currentColor", className: c.Kk }), t, d],
    });
}
