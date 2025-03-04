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
    let { guild: t, className: n } = e,
        l = (0, s.e7)([m.default], () => {
            var e;
            return (null === (e = m.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed) === !1;
        }),
        v = i.useRef(null),
        y = (0, h.Kt)(),
        x = i.useCallback(() => {
            null != t && u.Z.nsfwReturnToSafety(t.id);
        }, [t]),
        j = i.useCallback(() => {
            null != t && u.Z.nsfwAgree(t.id);
        }, [t]),
        O = i.useCallback(() => {
            d.Z.showAgeVerificationGetStartedModal(p.cU.NSFW_GUILD);
        }, []);
    i.useEffect(() => {
        let { current: e } = v;
        null == e || e.scrollToBottom();
    }, []);
    let E = (0, a.EQ)({
        nsfwDisallowed: l,
        shouldPawtect: y
    })
        .with({ shouldPawtect: !0 }, () =>
            (0, r.jsx)(f.Z, {
                onAgree: O,
                onDisagree: x,
                title: _.NW.string(_.t.ZmwvDQ),
                description: _.NW.string(_.t['NjO/s7']),
                agreement: _.NW.string(_.t.SFWVER),
                agreementButtonColor: c.zxk.Colors.BRAND,
                disagreement: _.NW.string(_.t.f3Pet7),
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
                    onAgree: j,
                    onDisagree: x,
                    title: _.NW.string(_.t.NEabBQ),
                    description: _.NW.format(_.t['2kHZen'], { helpURL: g.Z.getArticleURL(b.BhN.NSFW_AGE_GATING) }),
                    agreement: null,
                    disagreement: _.NW.string(_.t['13/7kZ']),
                    imageClassName: C.ageGatedImage
                })
        )
        .otherwise(() =>
            (0, r.jsx)(f.Z, {
                onAgree: j,
                onDisagree: x,
                title: _.NW.string(_.t.ZmwvDQ),
                description: _.NW.string(_.t.E4Cd5O),
                agreement: _.NW.string(_.t.wVq7ur),
                disagreement: _.NW.string(_.t.hg1uxs)
            })
        );
    return (0, r.jsx)(c.Den, {
        ref: v,
        className: C.scroller,
        children: (0, r.jsx)('div', {
            className: o()(n, C.wrapper),
            children: E
        })
    });
};
