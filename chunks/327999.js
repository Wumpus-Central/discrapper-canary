n.d(t, {
    MS: () => y,
    Ph: () => O,
    _2: () => S,
    bE: () => b,
    gq: () => E,
    nf: () => g,
}),
    n(35282),
    n(539854);
var r = n(544891),
    i = n(780384),
    a = n(410030),
    o = n(726542),
    s = n(122021),
    l = n(981631),
    c = n(388032);
let u = {};
function d(e, t) {
    return e + t;
}
function f(e, t) {
    return t.map((t) => d(e, t));
}
function p(e) {
    return e.split("-")[1];
}
function _(e) {
    return e.filter((e) => u[e] <= 1).map(p);
}
function m(e, t) {
    e.forEach((e) => {
        u[e] = t;
    });
}
function h(e, t, n) {
    u[d(e, t)] = n;
}
function g(e, t) {
    t.forEach((t) => h(e, t, 3));
}
var E = (function (e) {
    return (
        (e[(e.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (e[(e.BOT = 1)] = "BOT"),
        (e[(e.INTEGRATION = 2)] = "INTEGRATION"),
        (e[(e.DISCOVERY = 3)] = "DISCOVERY"),
        (e[(e.HUB = 4)] = "HUB"),
        (e[(e.INVITE = 5)] = "INVITE"),
        (e[(e.VANITY_URL = 6)] = "VANITY_URL"),
        (e[(e.MANUAL_MEMBER_VERIFICATION = 7)] = "MANUAL_MEMBER_VERIFICATION"),
        (e[(e.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL = 8)] = "SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL"),
        e
    );
})({});
let b = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        switch (e) {
            case 1:
                return c.intl.string(c.t.HumZAi);
            case 2:
                return c.intl.string(c.t.gmCUFw);
            case 3:
                return c.intl.string(c.t["Ql/e9Y"]);
            case 4:
                return c.intl.string(c.t.Op8B3O);
            case 5:
                return c.intl.string(c.t["/3vIRd"]);
            case 6:
                if (null != t && !n) return c.intl.formatToPlainString(c.t.EIUjRy, { vanityUrl: t });
                return c.intl.string(c.t.dGiD1O);
            case 7:
                return c.intl.string(c.t.vdu7oS);
            case 8:
                return c.intl.string(c.t["9/ZreX"]);
            default:
                return c.intl.string(c.t.DvMBkS);
        }
    },
    y = (e) => {
        switch (e) {
            case "twitch":
                return c.intl.string(c.t.AVGAkw);
            case "youtube":
                return c.intl.string(c.t.PHSAsn);
            default:
                return c.intl.string(c.t.gmCUFw);
        }
    },
    O = (e) => {
        let t = o.Z.get((0, s.rR)(e)),
            n = (0, a.ZP)();
        return null != t && ["twitch", "youtube"].includes(e)
            ? "url('".concat((0, i.wj)(n) ? t.icon.darkSVG : t.icon.lightSVG, "')")
            : null;
    };
function v(e) {
    return {
        userId: e.user_id,
        sourceInviteCode: e.source_invite_code,
        joinSourceType: e.join_source_type,
        inviterId: e.inviter_id,
        integrationType: e.integration_type,
    };
}
async function S(e, t) {
    let n = f(e, t),
        i = _(n);
    if (0 === i.length) return [];
    m(n, 2);
    try {
        let t = await r.tn.post({
            url: l.ANM.MEMBER_SAFETY_SUPPLEMENTAL(e),
            body: { user_ids: i },
            rejectWithError: !0,
        });
        if (!Array.isArray(t.body)) return m(n, 0), [];
        let a = t.body.map(v),
            o = [];
        a.forEach((e) => {
            let { userId: t } = e;
            return o.push(t);
        });
        let s = f(e, o),
            c = i.filter((e) => !o.includes(e)),
            u = f(e, c);
        return m(s, 3), m(u, 0), a;
    } catch (e) {
        m(n, 0);
    }
    return [];
}
