n.d(t, { CI: () => S, UP: () => T, eN: () => O, uY: () => A, v8: () => N, vk: () => f }), n(321073);
var i,
    r = n(636537),
    a = n(462887),
    s = n(736653),
    _ = n(573648),
    l = n(681819),
    o = n(652215),
    E = n(985018);
let d = {};
function c(e, t) {
    return t.map((t) => e + t);
}
function u(e) {
    return e.split("-")[1];
}
function I(e, t) {
    e.forEach((e) => {
        d[e] = t;
    });
}
function A(e, t) {
    t.forEach((t) => {
        d[e + t] = 3;
    });
}
var T =
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
let S = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        switch (e) {
            case 1:
                return E.intl.string(E.t.HumZAi);
            case 2:
                return E.intl.string(E.t.gmCUFw);
            case 3:
                return E.intl.string(E.t["Ql/e9Y"]);
            case 4:
                return E.intl.string(E.t.Op8B3O);
            case 5:
                return E.intl.string(E.t["/3vIRd"]);
            case 6:
                if (null != t && !n) return E.intl.formatToPlainString(E.t.EIUjRy, { vanityUrl: t });
                return E.intl.string(E.t.dGiD1O);
            case 7:
                return E.intl.string(E.t.vdu7oS);
            case 8:
                return E.intl.string(E.t["9/ZreX"]);
            default:
                return E.intl.string(E.t.DvMBkS);
        }
    },
    N = (e) => {
        switch (e) {
            case "twitch":
                return E.intl.string(E.t.AVGAkw);
            case "youtube":
                return E.intl.string(E.t.PHSAsn);
            default:
                return E.intl.string(E.t.gmCUFw);
        }
    },
    O = (e) => {
        let t = _.A.get((0, l.ML)(e)),
            n = (0, s.Ay)();
        return null != t && ["twitch", "youtube"].includes(e)
            ? `url('${((0, a.M))(n) ? t.icon.darkSVG : t.icon.lightSVG}')`
            : null;
    };
function R(e) {
    return {
        userId: e.user_id,
        sourceInviteCode: e.source_invite_code,
        joinSourceType: e.join_source_type,
        inviterId: e.inviter_id,
        integrationType: e.integration_type,
    };
}
async function f(e, t) {
    let n = c(e, t),
        i = n.filter((e) => d[e] <= 1).map(u);
    if (0 === i.length) return [];
    I(n, 2);
    try {
        let t = await r.Bo.post({
            url: o.Rsh.MEMBER_SAFETY_SUPPLEMENTAL(e),
            body: { user_ids: i },
            rejectWithError: !0,
        });
        if (!Array.isArray(t.body)) return I(n, 0), [];
        let a = t.body.map(R),
            s = [];
        a.forEach((e) => {
            let { userId: t } = e;
            return s.push(t);
        });
        let _ = c(e, s),
            l = i.filter((e) => !s.includes(e)),
            E = c(e, l);
        return I(_, 3), I(E, 0), a;
    } catch (e) {
        I(n, 0);
    }
    return [];
}
