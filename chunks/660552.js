_.d(E, { Wx: () => a, g0: () => C, qC: () => D });
var t,
    u = _(374063),
    i = _(484051),
    c = _(961943),
    e = _(612200),
    o = _(323073),
    r = _(398884),
    A = _(772366),
    S = _(207560),
    l = _(652215),
    O = _(204925),
    a =
        (((t = {}).PROCEED = "PROCEED"),
        (t.AGE_GATE_SHOWN = "AGE_GATE_SHOWN"),
        (t.GUILD_CAP_SHOWN = "GUILD_CAP_SHOWN"),
        t);
function D(n) {
    let { guild: E, isMember: _, onConfirm: t } = n;
    return (
        null != E &&
        !_ &&
        !!(0, o.zS)(E) &&
        !!(0, S.u0)() &&
        (function (n) {
            let { onConfirm: E } = n;
            return !!(0, i.n)(c.sR) && ((0, u.DO)({ onConfirm: E }), !0);
        })({ onConfirm: t })
    );
}
function G(n) {
    return null != n && (0, r.Sn)();
}
function s(n) {
    (0, A.A)({
        analyticsSource: { page: l.liQ.INVITE_EMBED },
        analyticsLocation: { page: l.liQ.INVITE_EMBED, section: l.JJy.GUILD_CAP_UPSELL_MODAL },
        analyticsLocations: n,
    });
}
function C(n) {
    let { guildId: E, guild: _, isMember: t, analyticsLocations: u, onGateConfirm: i } = n;
    return D({
        guild: _,
        isMember: t,
        onConfirm: function () {
            G(E) ? s(u) : i();
        },
    })
        ? "AGE_GATE_SHOWN"
        : null != _ && !t && (0, o.xq)() && (0, o.zS)(_)
          ? ((0, e.yO)(O.w_.NSFW_SERVER_INVITE_EMBED), "AGE_GATE_SHOWN")
          : G(E)
            ? (s(u), "GUILD_CAP_SHOWN")
            : "PROCEED";
}
