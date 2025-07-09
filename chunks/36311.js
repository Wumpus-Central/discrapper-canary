n.d(t, { Z: () => O });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(755721),
    c = n(481060),
    u = n(749210),
    d = n(168107),
    p = n(480916),
    h = n(622822),
    f = n(986035),
    m = n(601964),
    g = n(594174),
    b = n(63063),
    _ = n(981631),
    y = n(723359),
    C = n(388032),
    x = n(857651);
function v(e) {
    let { guild: t, channelId: n } = e,
        l = (0, o.e7)([g.default], () => {
            var e;
            return (null == (e = g.default.getCurrentUser()) ? void 0 : e.nsfwAllowed) === !1;
        }),
        a = (0, h.Kt)(),
        { verifyAgreementButtonText: c, verifyGateDescription: v } = (0, h.a1)(null != t && (0, m.Y2)(t) ? y.L0.NSFW_SERVER : y.L0.NSFW_CHANNEL),
        O = i.useCallback(() => {
            null != t && u.Z.nsfwReturnToSafety(t.id);
        }, [t]),
        j = i.useCallback(() => {
            null != t && u.Z.nsfwAgree(t.id);
        }, [t]),
        E = i.useCallback(() => {
            d.Z.showAgeVerificationGetStartedModal(p.cU.NSFW_GUILD);
        }, []);
    return a
        ? (0, r.jsx)(f.Z, {
              guildId: null == t ? void 0 : t.id,
              channelId: n,
              modalType: p.it.NSFW_CHANNEL_AGE_VERIFY,
              onAgree: E,
              onDisagree: O,
              title: C.intl.string(C.t.ZmwvDQ),
              description: v,
              agreement: c,
              agreementButtonColor: s.zx.Colors.BRAND,
              disagreement: C.intl.string(C.t['/g10LC']),
              imageClassName: x.ageGatedImage
          })
        : l
          ? (0, r.jsx)(f.Z, {
                guildId: null == t ? void 0 : t.id,
                channelId: n,
                modalType: p.it.NSFW_CHANNEL_UNDERAGE,
                onAgree: j,
                onDisagree: O,
                title: C.intl.string(C.t.NEabBQ),
                description: C.intl.format(C.t['2kHZen'], { helpURL: b.Z.getArticleURL(_.BhN.NSFW_AGE_GATING) }),
                agreement: null,
                disagreement: C.intl.string(C.t['/g10LC']),
                imageClassName: x.ageGatedImage
            })
          : (0, r.jsx)(f.Z, {
                guildId: null == t ? void 0 : t.id,
                channelId: n,
                modalType: p.it.NSFW_CHANNEL_VERIFIED,
                onAgree: j,
                onDisagree: O,
                title: C.intl.string(C.t.ZmwvDQ),
                description: C.intl.string(C.t.E4Cd5O),
                agreement: C.intl.string(C.t.wVq7ur),
                disagreement: C.intl.string(C.t['/g10LC'])
            });
}
let O = function (e) {
    let { guild: t, channelId: n, className: l } = e,
        o = i.useRef(null);
    return (
        i.useEffect(() => {
            let { current: e } = o;
            null == e || e.scrollToBottom();
        }, []),
        (0, r.jsx)(c.Den, {
            ref: o,
            className: x.scroller,
            children: (0, r.jsx)('div', {
                className: a()(l, x.wrapper),
                children: (0, r.jsx)(v, {
                    guild: t,
                    channelId: n
                })
            })
        })
    );
};
