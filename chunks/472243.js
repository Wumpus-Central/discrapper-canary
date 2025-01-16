r.d(n, {
    Z: function () {
        return I;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    s = r.n(a),
    o = r(442837),
    l = r(481060),
    u = r(100527),
    c = r(906732),
    d = r(849522),
    f = r(639119),
    _ = r(594174),
    h = r(74538),
    p = r(694320),
    m = r(981631),
    g = r(474936),
    E = r(388032),
    v = r(454816);
function I(e) {
    var n, r, a, I;
    let { type: T, textValue: b, maxCharacterCount: y, showRemainingCharsAfterCount: S, className: A } = e,
        N = (0, o.e7)([_.default], () => h.ZP.canUseIncreasedMessageLength(_.default.getCurrentUser())),
        C = (0, d.Z)(),
        R = null != y ? y : C,
        O = null !== (I = null != S ? S : y) && void 0 !== I ? I : C / 10,
        D = b.length,
        L = null != T.upsellLongMessages && (null != D ? D : 0) > m.J6R && N,
        x = null != T.upsellLongMessages && !N,
        w = (null === (r = (0, f.N)()) || void 0 === r ? void 0 : null === (n = r.subscription_trial) || void 0 === n ? void 0 : n.sku_id) === g.Si.TIER_2,
        P = R - D,
        M = P > O,
        k = P < 0 && w,
        U = 0 === P ? E.intl.string(E.t.tU6YQ0) : P > 0 ? E.intl.formatToPlainString(E.t.qH8uFR, { count: P }) : E.intl.string(E.t.YSRIqa),
        { analyticsLocations: B } = (0, c.ZP)(u.Z.CHARACTER_COUNT);
    if (!((L && P >= 0) || !M || (x && !M))) return null;
    let G = P >= 0;
    return (0, i.jsx)(c.Gt, {
        value: B,
        children: (0, i.jsxs)('div', {
            className: s()(A, v.characterCount),
            children: [
                (0, i.jsxs)('div', {
                    className: v.flairContainer,
                    children: [
                        L && G
                            ? (0, i.jsx)(l.Tooltip, {
                                  text: E.intl.formatToPlainString(E.t.vcvHa2, { maxLength: R }),
                                  position: 'top',
                                  children: (e) =>
                                      (0, i.jsx)(l.NitroWheelIcon, {
                                          size: 'md',
                                          color: 'currentColor',
                                          className: v.premiumFlair,
                                          ...e
                                      })
                              })
                            : null,
                        M || k
                            ? null
                            : (0, i.jsx)(l.Tooltip, {
                                  text: U,
                                  position: 'top',
                                  children: (e) =>
                                      (0, i.jsx)(l.Text, {
                                          variant: 'text-sm/semibold',
                                          tabularNumbers: !0,
                                          'aria-hidden': !0,
                                          ...e,
                                          color: G ? 'text-normal' : 'text-danger',
                                          children: P
                                      })
                              })
                    ]
                }),
                (0, i.jsx)(l.HiddenVisually, { children: E.intl.format(E.t.qH8uFR, { count: P }) }),
                x && !M
                    ? (0, i.jsx)(p.Z, {
                          className: v.upsell,
                          iconOnly: (null === (a = T.upsellLongMessages) || void 0 === a ? void 0 : a.iconOnly) || !1,
                          remaining: P
                      })
                    : null
            ]
        })
    });
}
