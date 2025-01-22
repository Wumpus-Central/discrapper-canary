r.d(n, {
    MS: function () {
        return S;
    },
    Ph: function () {
        return A;
    },
    _2: function () {
        return N;
    },
    bE: function () {
        return T;
    },
    gq: function () {
        return a;
    },
    nf: function () {
        return I;
    }
});
var i,
    a,
    o,
    s = r(653041);
var l = r(544891),
    u = r(780384),
    c = r(410030),
    d = r(726542),
    f = r(122021),
    p = r(981631),
    h = r(388032);
let _ = {};
function m(e, n) {
    return e + n;
}
function g(e, n) {
    return n.map((n) => m(e, n));
}
function E(e) {
    return e.split('-')[1];
}
function v(e) {
    return e.filter((e) => _[e] <= 1).map(E);
}
function y(e, n) {
    e.forEach((e) => {
        _[e] = n;
    });
}
function b(e, n, r) {
    _[m(e, n)] = r;
}
function I(e, n) {
    n.forEach((n) => b(e, n, 3));
}
!(function (e) {
    (e[(e.FAILED = 0)] = 'FAILED'), (e[(e.UNFETCHED = 1)] = 'UNFETCHED'), (e[(e.PENDING = 2)] = 'PENDING'), (e[(e.SUCCEEDED = 3)] = 'SUCCEEDED'), (e[(e.FAILED_NO_RETRY = 4)] = 'FAILED_NO_RETRY');
})(i || (i = {})),
    !(function (e) {
        (e[(e.UNSPECIFIED = 0)] = 'UNSPECIFIED'), (e[(e.BOT = 1)] = 'BOT'), (e[(e.INTEGRATION = 2)] = 'INTEGRATION'), (e[(e.DISCOVERY = 3)] = 'DISCOVERY'), (e[(e.HUB = 4)] = 'HUB'), (e[(e.INVITE = 5)] = 'INVITE'), (e[(e.VANITY_URL = 6)] = 'VANITY_URL'), (e[(e.MANUAL_MEMBER_VERIFICATION = 7)] = 'MANUAL_MEMBER_VERIFICATION');
    })(a || (a = {}));
let T = function (e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    switch (e) {
        case 1:
            return h.intl.string(h.t.HumZAg);
        case 2:
            return h.intl.string(h.t.gmCUFx);
        case 3:
            return h.intl.string(h.t['Ql/e9f']);
        case 4:
            return h.intl.string(h.t.Op8B3N);
        case 5:
            return h.intl.string(h.t['/3vIRU']);
        case 6:
            if (null != n && !r) return h.intl.formatToPlainString(h.t.EIUjR0, { vanityUrl: n });
            return h.intl.string(h.t.dGiD1N);
        case 7:
            return h.intl.string(h.t.vdu7oa);
        default:
            return h.intl.string(h.t.DvMBkZ);
    }
};
!(function (e) {
    (e.DISCORD = 'discord'), (e.TWITCH = 'twitch'), (e.YOUTUBE = 'youtube'), (e.GUILD_SUBSCRIPTION = 'guild_subscription');
})(o || (o = {}));
let S = (e) => {
        switch (e) {
            case 'twitch':
                return h.intl.string(h.t.AVGAk5);
            case 'youtube':
                return h.intl.string(h.t.PHSAsr);
            default:
                return h.intl.string(h.t.gmCUFx);
        }
    },
    A = (e) => {
        let n = d.Z.get((0, f.rR)(e)),
            r = (0, c.ZP)();
        return null != n && ['twitch', 'youtube'].includes(e) ? "url('".concat((0, u.wj)(r) ? n.icon.darkSVG : n.icon.lightSVG, "')") : null;
    };
function C(e) {
    return {
        userId: e.user_id,
        sourceInviteCode: e.source_invite_code,
        joinSourceType: e.join_source_type,
        inviterId: e.inviter_id,
        integrationType: e.integration_type
    };
}
async function N(e, n) {
    let r = g(e, n),
        i = v(r);
    if (0 === i.length) return [];
    y(r, 2);
    try {
        let n = await l.tn.post({
            url: p.ANM.MEMBER_SAFETY_SUPPLEMENTAL(e),
            body: { user_ids: i },
            rejectWithError: !0
        });
        if (!Array.isArray(n.body)) return y(r, 0), [];
        let a = n.body.map(C),
            o = [];
        a.forEach((e) => {
            let { userId: n } = e;
            return o.push(n);
        });
        let s = g(e, o),
            u = i.filter((e) => !o.includes(e)),
            c = g(e, u);
        return y(s, 3), y(c, 0), a;
    } catch (e) {
        y(r, 0);
    }
    return [];
}
