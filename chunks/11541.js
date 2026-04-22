"use strict";
n.d(t, { CI: () => m, UP: () => p, eN: () => A, uY: () => h, v8: () => g, vk: () => T }), n(321073);
var r,
    i = n(562465),
    s = n(462887),
    a = n(736653),
    o = n(573648),
    l = n(681819),
    u = n(652215),
    d = n(985018);
let c = {};
function _(e, t) {
    return t.map((t) => e + t);
}
function f(e) {
    return e.split("-")[1];
}
function E(e, t) {
    e.forEach((e) => {
        c[e] = t;
    });
}
function h(e, t) {
    t.forEach((t) => {
        c[e + t] = 3;
    });
}
var p =
    (((r = {})[(r.UNSPECIFIED = 0)] = "UNSPECIFIED"),
    (r[(r.BOT = 1)] = "BOT"),
    (r[(r.INTEGRATION = 2)] = "INTEGRATION"),
    (r[(r.DISCOVERY = 3)] = "DISCOVERY"),
    (r[(r.HUB = 4)] = "HUB"),
    (r[(r.INVITE = 5)] = "INVITE"),
    (r[(r.VANITY_URL = 6)] = "VANITY_URL"),
    (r[(r.MANUAL_MEMBER_VERIFICATION = 7)] = "MANUAL_MEMBER_VERIFICATION"),
    (r[(r.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL = 8)] = "SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL"),
    r);
let m = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        switch (e) {
            case 1:
                return d.intl.string(d.t.HumZAi);
            case 2:
                return d.intl.string(d.t.gmCUFw);
            case 3:
                return d.intl.string(d.t["Ql/e9Y"]);
            case 4:
                return d.intl.string(d.t.Op8B3O);
            case 5:
                return d.intl.string(d.t["/3vIRd"]);
            case 6:
                if (null != t && !n) return d.intl.formatToPlainString(d.t.EIUjRy, { vanityUrl: t });
                return d.intl.string(d.t.dGiD1O);
            case 7:
                return d.intl.string(d.t.vdu7oS);
            case 8:
                return d.intl.string(d.t["9/ZreX"]);
            default:
                return d.intl.string(d.t.DvMBkS);
        }
    },
    g = (e) => {
        switch (e) {
            case "twitch":
                return d.intl.string(d.t.AVGAkw);
            case "youtube":
                return d.intl.string(d.t.PHSAsn);
            default:
                return d.intl.string(d.t.gmCUFw);
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
        r = n.filter((e) => c[e] <= 1).map(f);
    if (0 === r.length) return [];
    E(n, 2);
    try {
        let t = await i.Bo.post({
            url: u.Rsh.MEMBER_SAFETY_SUPPLEMENTAL(e),
            body: { user_ids: r },
            rejectWithError: !0,
        });
        if (!Array.isArray(t.body)) return E(n, 0), [];
        let s = t.body.map(I),
            a = [];
        s.forEach((e) => {
            let { userId: t } = e;
            return a.push(t);
        });
        let o = _(e, a),
            l = r.filter((e) => !a.includes(e)),
            d = _(e, l);
        return E(o, 3), E(d, 0), s;
    } catch (e) {
        E(n, 0);
    }
    return [];
}
