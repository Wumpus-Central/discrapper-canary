n.d(t, { Z: () => x });
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
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
    y = n(857651);
function C(e) {
    let { guild: t, channelId: n } = e,
        l = (0, a.e7)([f.default], () => {
            var e;
            return (null == (e = f.default.getCurrentUser()) ? void 0 : e.nsfwAllowed) === !1;
        }),
        o = (0, p.Kt)(),
        { verifyAgreementButtonText: C, verifyGateDescription: x } = (0, p.a1)(b.L0.NSFW_CHANNEL),
        v = i.useCallback(() => {
            null != t && c.Z.nsfwReturnToSafety(t.id);
        }, [t]),
        j = i.useCallback(() => {
            null != t && c.Z.nsfwAgree(t.id);
        }, [t]),
        O = i.useCallback(() => {
            u.Z.showAgeVerificationGetStartedModal(d.cU.NSFW_GUILD);
        }, []);
    return o
        ? (0, r.jsx)(h.Z, {
              guildId: null == t ? void 0 : t.id,
              channelId: n,
              modalType: d.it.NSFW_CHANNEL_AGE_VERIFY,
              onAgree: O,
              onDisagree: v,
              title: _.intl.string(_.t.ZmwvDQ),
              description: x,
              agreement: C,
              agreementButtonColor: s.zxk.Colors.BRAND,
              disagreement: _.intl.string(_.t['/g10LC']),
              imageClassName: y.ageGatedImage
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
                imageClassName: y.ageGatedImage
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
let x = function (e) {
    let { guild: t, channelId: n, className: l } = e,
        a = i.useRef(null);
    return (
        i.useEffect(() => {
            let { current: e } = a;
            null == e || e.scrollToBottom();
        }, []),
        (0, r.jsx)(s.Den, {
            ref: a,
            className: y.scroller,
            children: (0, r.jsx)('div', {
                className: o()(l, y.wrapper),
                children: (0, r.jsx)(C, {
                    guild: t,
                    channelId: n
                })
            })
        })
    );
};
