n.d(t, { CI: () => f, UP: () => I, eN: () => T, uY: () => h, v8: () => p, vk: () => g }), n(321073);
var i,
    r = n(636537),
    a = n(462887),
    s = n(736653),
    l = n(573648),
    o = n(874490),
    d = n(652215),
    c = n(375708);
let u = {};
function _(e, t) {
    return t.map((t) => e + t);
}
function E(e) {
    return e.split("-")[1];
}
function A(e, t) {
    e.forEach((e) => {
        u[e] = t;
    });
}
function h(e, t) {
    t.forEach((t) => {
        u[e + t] = 3;
    });
}
var I =
    (((i = {})[(i.UNSPECIFIED = 0)] = "UNSPECIFIED"),
    (i[(i.BOT = 1)] = "BOT"),
    (i[(i.INTEGRATION = 2)] = "INTEGRATION"),
    (i[(i.DISCOVERY = 3)] = "DISCOVERY"),
    (i[(i.HUB = 4)] = "HUB"),
    (i[(i.INVITE = 5)] = "INVITE"),
    (i[(i.VANITY_URL = 6)] = "VANITY_URL"),
    (i[(i.MANUAL_MEMBER_VERIFICATION = 7)] = "MANUAL_MEMBER_VERIFICATION"),
    (i[(i.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL = 8)] = "SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL"),
    i);
function f(e) {
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
}
function p(e) {
    switch (e) {
        case "twitch":
            return c.intl.string(c.t.AVGAkw);
        case "youtube":
            return c.intl.string(c.t.PHSAsn);
        default:
            return c.intl.string(c.t.gmCUFw);
    }
}
function T(e) {
    let t = l.A.get((0, o.ML)(e)),
        n = (0, s.Ay)();
    return null != t && ["twitch", "youtube"].includes(e)
        ? `url('${((0, a.M))(n) ? t.icon.darkSVG : t.icon.lightSVG}')`
        : null;
}
function m(e) {
    return {
        userId: e.user_id,
        sourceInviteCode: e.source_invite_code,
        joinSourceType: e.join_source_type,
        inviterId: e.inviter_id,
        integrationType: e.integration_type,
    };
}
async function g(e, t) {
    let n = _(e, t),
        i = n.filter((e) => u[e] <= 1).map(E);
    if (0 === i.length) return [];
    A(n, 2);
    try {
        let t = await r.Bo.post({
            url: d.Rsh.MEMBER_SAFETY_SUPPLEMENTAL(e),
            body: { user_ids: i },
            rejectWithError: !0,
        });
        if (!Array.isArray(t.body)) return A(n, 0), [];
        let a = t.body.map(m),
            s = [];
        a.forEach((e) => {
            let { userId: t } = e;
            return s.push(t);
        });
        let l = _(e, s),
            o = i.filter((e) => !s.includes(e)),
            c = _(e, o);
        return A(l, 3), A(c, 0), a;
    } catch (e) {
        A(n, 0);
    }
    return [];
}
