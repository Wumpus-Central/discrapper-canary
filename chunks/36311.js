n.d(t, { Z: () => C });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(749210),
    u = n(168107),
    d = n(480916),
    p = n(622822),
    h = n(986035),
    f = n(594174),
    m = n(63063),
    g = n(981631),
    b = n(723359),
    _ = n(388032),
    x = n(857651);
function y(e) {
    let { guild: t, channelId: n } = e,
        l = (0, o.e7)([f.default], () => {
            var e;
            return (null == (e = f.default.getCurrentUser()) ? void 0 : e.nsfwAllowed) === !1;
        }),
        a = (0, p.Kt)(),
        { verifyAgreementButtonText: y, verifyGateDescription: C } = (0, p.a1)(b.L0.NSFW_CHANNEL),
        v = i.useCallback(() => {
            null != t && c.Z.nsfwReturnToSafety(t.id);
        }, [t]),
        j = i.useCallback(() => {
            null != t && c.Z.nsfwAgree(t.id);
        }, [t]),
        O = i.useCallback(() => {
            u.Z.showAgeVerificationGetStartedModal(d.cU.NSFW_GUILD);
        }, []);
    return a
        ? (0, r.jsx)(h.Z, {
              guildId: null == t ? void 0 : t.id,
              channelId: n,
              modalType: d.it.NSFW_CHANNEL_AGE_VERIFY,
              onAgree: O,
              onDisagree: v,
              title: _.intl.string(_.t.ZmwvDQ),
              description: C,
              agreement: y,
              agreementButtonColor: s.zxk.Colors.BRAND,
              disagreement: _.intl.string(_.t['/g10LC']),
              imageClassName: x.ageGatedImage
          })
        : l
          ? (0, r.jsx)(h.Z, {
                guildId: null == t ? void 0 : t.id,
                channelId: n,
                modalType: d.it.NSFW_CHANNEL_UNDERAGE,
                onAgree: j,
                onDisagree: v,
                title: _.intl.string(_.t.NEabBQ),
                description: _.intl.format(_.t['2kHZen'], { helpURL: m.Z.getArticleURL(g.BhN.NSFW_AGE_GATING) }),
                agreement: null,
                disagreement: _.intl.string(_.t['/g10LC']),
                imageClassName: x.ageGatedImage
            })
          : (0, r.jsx)(h.Z, {
                guildId: null == t ? void 0 : t.id,
                channelId: n,
                modalType: d.it.NSFW_CHANNEL_VERIFIED,
                onAgree: j,
                onDisagree: v,
                title: _.intl.string(_.t.ZmwvDQ),
                description: _.intl.string(_.t.E4Cd5O),
                agreement: _.intl.string(_.t.wVq7ur),
                disagreement: _.intl.string(_.t['/g10LC'])
            });
}
let C = function (e) {
    let { guild: t, channelId: n, className: l } = e,
        o = i.useRef(null);
    return (
        i.useEffect(() => {
            let { current: e } = o;
            null == e || e.scrollToBottom();
        }, []),
        (0, r.jsx)(s.Den, {
            ref: o,
            className: x.scroller,
            children: (0, r.jsx)('div', {
                className: a()(l, x.wrapper),
                children: (0, r.jsx)(y, {
                    guild: t,
                    channelId: n
                })
            })
        })
    );
};
