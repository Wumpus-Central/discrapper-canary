n.d(t, {
    MS: () => y,
    Ph: () => I,
    _2: () => T,
    bE: () => v,
    gq: () => E,
    nf: () => g
}),
    n(653041);
var i = n(544891),
    r = n(780384),
    a = n(410030),
    s = n(726542),
    o = n(122021),
    l = n(981631),
    u = n(388032);
let c = {};
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
    return e.filter((e) => c[e] <= 1).map(_);
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
    return (e[(e.UNSPECIFIED = 0)] = 'UNSPECIFIED'), (e[(e.BOT = 1)] = 'BOT'), (e[(e.INTEGRATION = 2)] = 'INTEGRATION'), (e[(e.DISCOVERY = 3)] = 'DISCOVERY'), (e[(e.HUB = 4)] = 'HUB'), (e[(e.INVITE = 5)] = 'INVITE'), (e[(e.VANITY_URL = 6)] = 'VANITY_URL'), (e[(e.MANUAL_MEMBER_VERIFICATION = 7)] = 'MANUAL_MEMBER_VERIFICATION'), e;
})({});
let v = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        switch (e) {
            case 1:
                return u.intl.string(u.t.HumZAg);
            case 2:
                return u.intl.string(u.t.gmCUFx);
            case 3:
                return u.intl.string(u.t['Ql/e9f']);
            case 4:
                return u.intl.string(u.t.Op8B3N);
            case 5:
                return u.intl.string(u.t['/3vIRU']);
            case 6:
                if (null != t && !n) return u.intl.formatToPlainString(u.t.EIUjR0, { vanityUrl: t });
                return u.intl.string(u.t.dGiD1N);
            case 7:
                return u.intl.string(u.t.vdu7oa);
            default:
                return u.intl.string(u.t.DvMBkZ);
        }
    },
    y = (e) => {
        switch (e) {
            case 'twitch':
                return u.intl.string(u.t.AVGAk5);
            case 'youtube':
                return u.intl.string(u.t.PHSAsr);
            default:
                return u.intl.string(u.t.gmCUFx);
        }
    },
    I = (e) => {
        let t = s.Z.get((0, o.rR)(e)),
            n = (0, a.ZP)();
        return null != t && ['twitch', 'youtube'].includes(e) ? "url('".concat((0, r.wj)(n) ? t.icon.darkSVG : t.icon.lightSVG, "')") : null;
    };
function b(e) {
    return {
        userId: e.user_id,
        sourceInviteCode: e.source_invite_code,
        joinSourceType: e.join_source_type,
        inviterId: e.inviter_id,
        integrationType: e.integration_type
    };
}
async function T(e, t) {
    let n = f(e, t),
        r = p(n);
    if (0 === r.length) return [];
    h(n, 2);
    try {
        let t = await i.tn.post({
            url: l.ANM.MEMBER_SAFETY_SUPPLEMENTAL(e),
            body: { user_ids: r },
            rejectWithError: !0
        });
        if (!Array.isArray(t.body)) return h(n, 0), [];
        let a = t.body.map(b),
            s = [];
        a.forEach((e) => {
            let { userId: t } = e;
            return s.push(t);
        });
        let o = f(e, s),
            u = r.filter((e) => !s.includes(e)),
            c = f(e, u);
        return h(o, 3), h(c, 0), a;
    } catch (e) {
        h(n, 0);
    }
    return [];
}
