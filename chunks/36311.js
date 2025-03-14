n.d(t, { Z: () => v }), n(627341);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(278074),
    s = n(442837),
    c = n(481060),
    u = n(749210),
    d = n(168107),
    p = n(480916),
    h = n(622822),
    f = n(986035),
    m = n(594174),
    g = n(63063),
    b = n(981631),
    _ = n(388032),
    C = n(288280);
let v = function (e) {
    let { guild: t, channelId: n, className: l } = e,
        v = (0, s.e7)([m.default], () => {
            var e;
            return (null === (e = m.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed) === !1;
        }),
        y = i.useRef(null),
        x = (0, h.Kt)(),
        { verifyAgreementButtonText: j, verifyGateDescription: O } = (0, h.a1)(),
        E = i.useCallback(() => {
            null != t && u.Z.nsfwReturnToSafety(t.id);
        }, [t]),
        N = i.useCallback(() => {
            null != t && u.Z.nsfwAgree(t.id);
        }, [t]),
        I = i.useCallback(() => {
            d.Z.showAgeVerificationGetStartedModal(p.cU.NSFW_GUILD);
        }, []);
    i.useEffect(() => {
        let { current: e } = y;
        null == e || e.scrollToBottom();
    }, []);
    let P = (0, a.EQ)({
        nsfwDisallowed: v,
        shouldPawtect: x
    })
        .with({ shouldPawtect: !0 }, () =>
            (0, r.jsx)(f.Z, {
                guildId: null == t ? void 0 : t.id,
                channelId: n,
                modalType: p.it.NSFW_CHANNEL_AGE_VERIFY,
                onAgree: I,
                onDisagree: E,
                title: _.NW.string(_.t.ZmwvDQ),
                description: O,
                agreement: j,
                agreementButtonColor: c.zxk.Colors.BRAND,
                disagreement: _.NW.string(_.t['/g10LC']),
                imageClassName: C.ageGatedImage
            })
        )
        .with(
            {
                nsfwDisallowed: !0,
                shouldPawtect: !1
            },
            () =>
                (0, r.jsx)(f.Z, {
                    guildId: null == t ? void 0 : t.id,
                    channelId: n,
                    modalType: p.it.NSFW_CHANNEL_UNDERAGE,
                    onAgree: N,
                    onDisagree: E,
                    title: _.NW.string(_.t.NEabBQ),
                    description: _.NW.format(_.t['2kHZen'], { helpURL: g.Z.getArticleURL(b.BhN.NSFW_AGE_GATING) }),
                    agreement: null,
                    disagreement: _.NW.string(_.t['/g10LC']),
                    imageClassName: C.ageGatedImage
                })
        )
        .otherwise(() =>
            (0, r.jsx)(f.Z, {
                guildId: null == t ? void 0 : t.id,
                channelId: n,
                modalType: p.it.NSFW_CHANNEL_VERIFIED,
                onAgree: N,
                onDisagree: E,
                title: _.NW.string(_.t.ZmwvDQ),
                description: _.NW.string(_.t.E4Cd5O),
                agreement: _.NW.string(_.t.wVq7ur),
                disagreement: _.NW.string(_.t['/g10LC'])
            })
        );
    return (0, r.jsx)(c.Den, {
        ref: y,
        className: C.scroller,
        children: (0, r.jsx)('div', {
            className: o()(l, C.wrapper),
            children: P
        })
    });
};
