n.d(t, { Z: () => v });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(755721),
    c = n(481060),
    u = n(749210),
    d = n(168107),
    h = n(480916),
    p = n(622822),
    f = n(986035),
    g = n(601964),
    m = n(594174),
    b = n(63063),
    y = n(981631),
    x = n(723359),
    j = n(388032),
    _ = n(351651);
function O(e) {
    let { guild: t, channelId: n } = e,
        l = (0, s.e7)([m.default], () => {
            var e;
            return (null == (e = m.default.getCurrentUser()) ? void 0 : e.nsfwAllowed) === !1;
        }),
        a = (0, p.Kt)(),
        { verifyAgreementButtonText: c, verifyGateDescription: O } = (0, p.a1)(
            (0, g.Y2)(t) ? x.L0.NSFW_SERVER : x.L0.NSFW_CHANNEL,
        ),
        v = i.useCallback(() => {
            null != t && u.Z.nsfwReturnToSafety(t.id);
        }, [t]),
        C = i.useCallback(() => {
            null != t && u.Z.nsfwAgree(t.id);
        }, [t]),
        E = i.useCallback(() => {
            d.Z.showAgeVerificationGetStartedModal(h.cU.NSFW_GUILD);
        }, []),
        S = (0, g.Y2)(t),
        I = j.intl.string(S ? j.t.xi46lp : j.t.ZmwvDQ);
    return a
        ? (0, r.jsx)(f.Z, {
              guildId: null == t ? void 0 : t.id,
              channelId: n,
              modalType: h.it.NSFW_CHANNEL_AGE_VERIFY,
              onAgree: E,
              onDisagree: v,
              title: I,
              description: O,
              agreement: c,
              agreementButtonColor: o.zx.Colors.BRAND,
              disagreement: j.intl.string(j.t["/g10LC"]),
              imageClassName: _.ageGatedImage,
          })
        : l
          ? (0, r.jsx)(f.Z, {
                guildId: null == t ? void 0 : t.id,
                channelId: n,
                modalType: h.it.NSFW_CHANNEL_UNDERAGE,
                onAgree: C,
                onDisagree: v,
                title: j.intl.string(S ? j.t["H0SG/v"] : j.t.NEabBQ),
                description: j.intl.format(S ? j.t["6++3cX"] : j.t["2kHZen"], {
                    helpURL: b.Z.getArticleURL(y.BhN.NSFW_AGE_GATING),
                }),
                agreement: null,
                disagreement: j.intl.string(j.t["/g10LC"]),
                imageClassName: _.ageGatedImage,
            })
          : (0, r.jsx)(f.Z, {
                guildId: null == t ? void 0 : t.id,
                channelId: n,
                modalType: h.it.NSFW_CHANNEL_VERIFIED,
                onAgree: C,
                onDisagree: v,
                title: I,
                description: j.intl.string(S ? j.t.ZtuRtr : j.t.E4Cd5O),
                agreement: j.intl.string(j.t.wVq7ur),
                disagreement: j.intl.string(j.t["/g10LC"]),
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
            className: _.scroller,
            children: (0, r.jsx)("div", {
                className: a()(l, _.wrapper),
                children: (0, r.jsx)(O, {
                    guild: t,
                    channelId: n,
                }),
            }),
        })
    );
};
