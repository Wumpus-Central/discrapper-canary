n.d(t, {
    MS: () => y,
    Ph: () => v,
    _2: () => I,
    bE: () => b,
    gq: () => E,
    nf: () => g
}),
    n(301563),
    n(653041);
var r = n(544891),
    i = n(780384),
    o = n(410030),
    a = n(726542),
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
function _(e) {
    return e.split('-')[1];
}
function p(e) {
    return e.filter((e) => u[e] <= 1).map(_);
}
function h(e, t) {
    e.forEach((e) => {
        u[e] = t;
    });
}
function m(e, t, n) {
    u[d(e, t)] = n;
}
function g(e, t) {
    t.forEach((t) => m(e, t, 3));
}
var E = (function (e) {
    return (e[(e.UNSPECIFIED = 0)] = 'UNSPECIFIED'), (e[(e.BOT = 1)] = 'BOT'), (e[(e.INTEGRATION = 2)] = 'INTEGRATION'), (e[(e.DISCOVERY = 3)] = 'DISCOVERY'), (e[(e.HUB = 4)] = 'HUB'), (e[(e.INVITE = 5)] = 'INVITE'), (e[(e.VANITY_URL = 6)] = 'VANITY_URL'), (e[(e.MANUAL_MEMBER_VERIFICATION = 7)] = 'MANUAL_MEMBER_VERIFICATION'), e;
})({});
let b = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        switch (e) {
            case 1:
                return c.NW.string(c.t.HumZAg);
            case 2:
                return c.NW.string(c.t.gmCUFx);
            case 3:
                return c.NW.string(c.t['Ql/e9f']);
            case 4:
                return c.NW.string(c.t.Op8B3N);
            case 5:
                return c.NW.string(c.t['/3vIRU']);
            case 6:
                if (null != t && !n) return c.NW.formatToPlainString(c.t.EIUjR0, { vanityUrl: t });
                return c.NW.string(c.t.dGiD1N);
            case 7:
                return c.NW.string(c.t.vdu7oa);
            default:
                return c.NW.string(c.t.DvMBkZ);
        }
    },
    y = (e) => {
        switch (e) {
            case 'twitch':
                return c.NW.string(c.t.AVGAk5);
            case 'youtube':
                return c.NW.string(c.t.PHSAsr);
            default:
                return c.NW.string(c.t.gmCUFx);
        }
    },
    v = (e) => {
        let t = a.Z.get((0, s.rR)(e)),
            n = (0, o.ZP)();
        return null != t && ['twitch', 'youtube'].includes(e) ? "url('".concat((0, i.wj)(n) ? t.icon.darkSVG : t.icon.lightSVG, "')") : null;
    };
function O(e) {
    return {
        userId: e.user_id,
        sourceInviteCode: e.source_invite_code,
        joinSourceType: e.join_source_type,
        inviterId: e.inviter_id,
        integrationType: e.integration_type
    };
}
async function I(e, t) {
    let n = f(e, t),
        i = p(n);
    if (0 === i.length) return [];
    h(n, 2);
    try {
        let t = await r.tn.post({
            url: l.ANM.MEMBER_SAFETY_SUPPLEMENTAL(e),
            body: { user_ids: i },
            rejectWithError: !0
        });
        if (!Array.isArray(t.body)) return h(n, 0), [];
        let o = t.body.map(O),
            a = [];
        o.forEach((e) => {
            let { userId: t } = e;
            return a.push(t);
        });
        let s = f(e, a),
            c = i.filter((e) => !a.includes(e)),
            u = f(e, c);
        return h(s, 3), h(u, 0), o;
    } catch (e) {
        h(n, 0);
    }
    return [];
}
