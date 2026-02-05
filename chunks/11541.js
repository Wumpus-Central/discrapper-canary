"use strict";
n.d(t, { CI: () => A, UP: () => E, eN: () => T, uY: () => g, v8: () => I, vk: () => S }), n(321073);
var r = n(562465),
    i = n(582754),
    a = n(736653),
    s = n(573648),
    o = n(681819),
    l = n(652215),
    u = n(985018);
let c = {};
function d(e, t) {
    return e + t;
}
function _(e, t) {
    return t.map((t) => d(e, t));
}
function f(e) {
    return e.split("-")[1];
}
function p(e) {
    return e.filter((e) => c[e] <= 1).map(f);
}
function h(e, t) {
    e.forEach((e) => {
        c[e] = t;
    });
}
function m(e, t, n) {
    c[d(e, t)] = n;
}
function g(e, t) {
    t.forEach((t) => m(e, t, 3));
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
let A = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        switch (e) {
            case 1:
                return u.intl.string(u.t.HumZAi);
            case 2:
                return u.intl.string(u.t.gmCUFw);
            case 3:
                return u.intl.string(u.t["Ql/e9Y"]);
            case 4:
                return u.intl.string(u.t.Op8B3O);
            case 5:
                return u.intl.string(u.t["/3vIRd"]);
            case 6:
                if (null != t && !n) return u.intl.formatToPlainString(u.t.EIUjRy, { vanityUrl: t });
                return u.intl.string(u.t.dGiD1O);
            case 7:
                return u.intl.string(u.t.vdu7oS);
            case 8:
                return u.intl.string(u.t["9/ZreX"]);
            default:
                return u.intl.string(u.t.DvMBkS);
        }
    },
    I = (e) => {
        switch (e) {
            case "twitch":
                return u.intl.string(u.t.AVGAkw);
            case "youtube":
                return u.intl.string(u.t.PHSAsn);
            default:
                return u.intl.string(u.t.gmCUFw);
        }
    },
    T = (e) => {
        let t = s.A.get((0, o.ML)(e)),
            n = (0, a.Ay)();
        return null != t && ["twitch", "youtube"].includes(e)
            ? `url('${((0, i.Mw))(n) ? t.icon.darkSVG : t.icon.lightSVG}')`
            : null;
    };
function y(e) {
    return {
        userId: e.user_id,
        sourceInviteCode: e.source_invite_code,
        joinSourceType: e.join_source_type,
        inviterId: e.inviter_id,
        integrationType: e.integration_type,
    };
}
async function S(e, t) {
    let n = _(e, t),
        i = p(n);
    if (0 === i.length) return [];
    h(n, 2);
    try {
        let t = await r.Bo.post({
            url: l.Rsh.MEMBER_SAFETY_SUPPLEMENTAL(e),
            body: { user_ids: i },
            rejectWithError: !0,
        });
        if (!Array.isArray(t.body)) return h(n, 0), [];
        let a = t.body.map(y),
            s = [];
        a.forEach((e) => {
            let { userId: t } = e;
            return s.push(t);
        });
        let o = _(e, s),
            u = i.filter((e) => !s.includes(e)),
            c = _(e, u);
        return h(o, 3), h(c, 0), a;
    } catch (e) {
        h(n, 0);
    }
    return [];
}
