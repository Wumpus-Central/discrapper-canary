n.d(t, { Z: () => v });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(755721),
    c = n(481060),
    d = n(749210),
    u = n(168107),
    h = n(480916),
    p = n(622822),
    f = n(986035),
    g = n(601964),
    m = n(594174),
    b = n(63063),
    _ = n(981631),
    y = n(723359),
    j = n(388032),
    O = n(857651);
function x(e) {
    let { guild: t, channelId: n } = e,
        l = (0, s.e7)([m.default], () => {
            var e;
            return (null == (e = m.default.getCurrentUser()) ? void 0 : e.nsfwAllowed) === !1;
        }),
        a = (0, p.Kt)(),
        { verifyAgreementButtonText: c, verifyGateDescription: x } = (0, p.a1)((0, g.Y2)(t) ? y.L0.NSFW_SERVER : y.L0.NSFW_CHANNEL),
        v = i.useCallback(() => {
            null != t && d.Z.nsfwReturnToSafety(t.id);
        }, [t]),
        C = i.useCallback(() => {
            null != t && d.Z.nsfwAgree(t.id);
        }, [t]),
        E = i.useCallback(() => {
            u.Z.showAgeVerificationGetStartedModal(h.cU.NSFW_GUILD);
        }, []),
        Z = (0, g.Y2)(t),
        I = j.intl.string(Z ? j.t.xi46lp : j.t.ZmwvDQ);
    return a
        ? (0, r.jsx)(f.Z, {
              guildId: null == t ? void 0 : t.id,
              channelId: n,
              modalType: h.it.NSFW_CHANNEL_AGE_VERIFY,
              onAgree: E,
              onDisagree: v,
              title: I,
              description: x,
              agreement: c,
              agreementButtonColor: o.zx.Colors.BRAND,
              disagreement: j.intl.string(j.t['/g10LC']),
              imageClassName: O.ageGatedImage
          })
        : l
          ? (0, r.jsx)(f.Z, {
                guildId: null == t ? void 0 : t.id,
                channelId: n,
                modalType: h.it.NSFW_CHANNEL_UNDERAGE,
                onAgree: C,
                onDisagree: v,
                title: j.intl.string(j.t.NEabBQ),
                description: j.intl.format(j.t['2kHZen'], { helpURL: b.Z.getArticleURL(_.BhN.NSFW_AGE_GATING) }),
                agreement: null,
                disagreement: j.intl.string(j.t['/g10LC']),
                imageClassName: O.ageGatedImage
            })
          : (0, r.jsx)(f.Z, {
                guildId: null == t ? void 0 : t.id,
                channelId: n,
                modalType: h.it.NSFW_CHANNEL_VERIFIED,
                onAgree: C,
                onDisagree: v,
                title: I,
                description: j.intl.string(Z ? j.t.ZtuRtr : j.t.E4Cd5O),
                agreement: j.intl.string(j.t.wVq7ur),
                disagreement: j.intl.string(j.t['/g10LC'])
            });
}
let v = function (e) {
    let { guild: t, channelId: n, className: l } = e,
        s = i.useRef(null);
    return (
        i.useEffect(() => {
            let { current: e } = s;
            null == e || e.scrollToBottom();
        }, []),
        (0, r.jsx)(c.Den, {
            ref: s,
            className: O.scroller,
            children: (0, r.jsx)('div', {
                className: a()(l, O.wrapper),
                children: (0, r.jsx)(x, {
                    guild: t,
                    channelId: n
                })
            })
        })
    );
};
