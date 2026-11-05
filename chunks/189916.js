(n(508425), n(559949));
var i = n(76573),
    r = n(948325),
    a = n(474090),
    s = n(211824);
function l(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
    return n >= (null != t && (0, a.CC)(t, s.PC[e]) ? s.zv : s.Fg);
}
n.d(
    t,
    {},
    {
        Jy: function (e) {
            return e?.fontId === s.vl;
        },
        Rd: function (e, t) {
            let n = (0, r.kQ)(e?.perks, s.Sp[t]);
            return null != n && n.includes(i.g$.SOURCE_HEXAGON_CAMPAIGN);
        },
        U5: function (e) {
            let { perk: t, premiumType: n, isCampaignEnabled: i, now: r = Date.now() } = e;
            return !i ||
                (function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
                    return e >= s.zv;
                })(r)
                ? s.S9.HIDDEN
                : l(t, n, r)
                  ? s.S9.LOCKED
                  : s.S9.SELECTABLE;
        },
        YY: l,
        oB: function (e) {
            return null != e && s.xG.has(e);
        },
    },
);
