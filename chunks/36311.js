n.d(t, { Z: () => v });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(749210),
    u = n(168107),
    d = n(480916),
    p = n(622822),
    h = n(986035),
    f = n(601964),
    m = n(594174),
    g = n(63063),
    b = n(981631),
    _ = n(723359),
    y = n(388032),
    C = n(857651);
function x(e) {
    let { guild: t, channelId: n } = e,
        l = (0, a.e7)([m.default], () => {
            var e;
            return (null == (e = m.default.getCurrentUser()) ? void 0 : e.nsfwAllowed) === !1;
        }),
        o = (0, p.Kt)(),
        { verifyAgreementButtonText: x, verifyGateDescription: v } = (0, p.a1)(null != t && (0, f.Y2)(t) ? _.L0.NSFW_SERVER : _.L0.NSFW_CHANNEL),
        O = i.useCallback(() => {
            null != t && c.Z.nsfwReturnToSafety(t.id);
        }, [t]),
        j = i.useCallback(() => {
            null != t && c.Z.nsfwAgree(t.id);
        }, [t]),
        E = i.useCallback(() => {
            u.Z.showAgeVerificationGetStartedModal(d.cU.NSFW_GUILD);
        }, []);
    return o
        ? (0, r.jsx)(h.Z, {
              guildId: null == t ? void 0 : t.id,
              channelId: n,
              modalType: d.it.NSFW_CHANNEL_AGE_VERIFY,
              onAgree: E,
              onDisagree: O,
              title: y.intl.string(y.t.ZmwvDQ),
              description: v,
              agreement: x,
              agreementButtonColor: s.zxk.Colors.BRAND,
              disagreement: y.intl.string(y.t['/g10LC']),
              imageClassName: C.ageGatedImage
          })
        : l
          ? (0, r.jsx)(h.Z, {
                guildId: null == t ? void 0 : t.id,
                channelId: n,
                modalType: d.it.NSFW_CHANNEL_UNDERAGE,
                onAgree: j,
                onDisagree: O,
                title: y.intl.string(y.t.NEabBQ),
                description: y.intl.format(y.t['2kHZen'], { helpURL: g.Z.getArticleURL(b.BhN.NSFW_AGE_GATING) }),
                agreement: null,
                disagreement: y.intl.string(y.t['/g10LC']),
                imageClassName: C.ageGatedImage
            })
          : (0, r.jsx)(h.Z, {
                guildId: null == t ? void 0 : t.id,
                channelId: n,
                modalType: d.it.NSFW_CHANNEL_VERIFIED,
                onAgree: j,
                onDisagree: O,
                title: y.intl.string(y.t.ZmwvDQ),
                description: y.intl.string(y.t.E4Cd5O),
                agreement: y.intl.string(y.t.wVq7ur),
                disagreement: y.intl.string(y.t['/g10LC'])
            });
}
let v = function (e) {
    let { guild: t, channelId: n, className: l } = e,
        a = i.useRef(null);
    return (
        i.useEffect(() => {
            let { current: e } = a;
            null == e || e.scrollToBottom();
        }, []),
        (0, r.jsx)(s.Den, {
            ref: a,
            className: C.scroller,
            children: (0, r.jsx)('div', {
                className: o()(l, C.wrapper),
                children: (0, r.jsx)(x, {
                    guild: t,
                    channelId: n
                })
            })
        })
    );
};
