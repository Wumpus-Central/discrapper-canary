"use strict";
n.d(t, { CI: () => m, UP: () => E, eN: () => A, uY: () => p, v8: () => g, vk: () => T }), n(321073);
var i,
    r = n(636537),
    s = n(462887),
    a = n(736653),
    o = n(573648),
    l = n(874490),
    u = n(652215),
    c = n(375708);
let d = {};
function _(e, t) {
    return t.map((t) => e + t);
}
function f(e) {
    return e.split("-")[1];
}
function h(e, t) {
    e.forEach((e) => {
        d[e] = t;
    });
}
function p(e, t) {
    t.forEach((t) => {
        d[e + t] = 3;
    });
}
var E =
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
let m = function (e) {
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
    g = (e) => {
        switch (e) {
            case "twitch":
                return c.intl.string(c.t.AVGAkw);
            case "youtube":
                return c.intl.string(c.t.PHSAsn);
            default:
                return c.intl.string(c.t.gmCUFw);
        }
    },
    A = (e) => {
        let t = o.A.get((0, l.ML)(e)),
            n = (0, a.Ay)();
        return null != t && ["twitch", "youtube"].includes(e)
            ? `url('${((0, s.M))(n) ? t.icon.darkSVG : t.icon.lightSVG}')`
            : null;
    };
function I(e) {
    return {
        userId: e.user_id,
        sourceInviteCode: e.source_invite_code,
        joinSourceType: e.join_source_type,
        inviterId: e.inviter_id,
        integrationType: e.integration_type,
    };
}
async function T(e, t) {
    let n = _(e, t),
        i = n.filter((e) => d[e] <= 1).map(f);
    if (0 === i.length) return [];
    h(n, 2);
    try {
        let t = await r.Bo.post({
            url: u.Rsh.MEMBER_SAFETY_SUPPLEMENTAL(e),
            body: { user_ids: i },
            rejectWithError: !0,
        });
        if (!Array.isArray(t.body)) return h(n, 0), [];
        let s = t.body.map(I),
            a = [];
        s.forEach((e) => {
            let { userId: t } = e;
            return a.push(t);
        });
        let o = _(e, a),
            l = i.filter((e) => !a.includes(e)),
            c = _(e, l);
        return h(o, 3), h(c, 0), s;
    } catch (e) {
        h(n, 0);
    }
    return [];
}
