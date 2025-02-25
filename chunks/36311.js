n.d(t, { Z: () => C }), n(627341);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(278074),
    s = n(442837),
    c = n(481060),
    u = n(749210),
    d = n(191237),
    p = n(622822),
    h = n(986035),
    f = n(594174),
    m = n(63063),
    g = n(981631),
    b = n(388032),
    _ = n(975743);
let C = function (e) {
    let { guild: t, className: n } = e,
        l = (0, s.e7)([f.default], () => {
            var e;
            return (null === (e = f.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed) === !1;
        }),
        C = i.useRef(null),
        v = (0, p.Kt)(),
        y = i.useCallback(() => {
            null != t && u.Z.nsfwReturnToSafety(t.id);
        }, [t]),
        x = i.useCallback(() => {
            null != t && u.Z.nsfwAgree(t.id);
        }, [t]),
        j = i.useCallback(() => {
            d.Z.showAgeVerificationGetStartedModal();
        }, []);
    i.useEffect(() => {
        let { current: e } = C;
        null == e || e.scrollToBottom();
    }, []);
    let O = (0, a.EQ)({
        nsfwDisallowed: l,
        shouldPawtect: v
    })
        .with({ shouldPawtect: !0 }, () =>
            (0, r.jsx)(h.Z, {
                onAgree: j,
                onDisagree: y,
                title: b.NW.string(b.t.ZmwvDQ),
                description: b.NW.string(b.t['u/xqhY']),
                agreement: b.NW.string(b.t['5B+npK']),
                agreementButtonColor: c.zxk.Colors.BRAND,
                disagreement: b.NW.string(b.t.f3Pet7),
                imageClassName: _.ageGatedImage
            })
        )
        .with(
            {
                nsfwDisallowed: !0,
                shouldPawtect: !1
            },
            () =>
                (0, r.jsx)(h.Z, {
                    onAgree: x,
                    onDisagree: y,
                    title: b.NW.string(b.t.NEabBQ),
                    description: b.NW.format(b.t['2kHZen'], { helpURL: m.Z.getArticleURL(g.BhN.NSFW_AGE_GATING) }),
                    agreement: null,
                    disagreement: b.NW.string(b.t['13/7kZ']),
                    imageClassName: _.ageGatedImage
                })
        )
        .otherwise(() =>
            (0, r.jsx)(h.Z, {
                onAgree: x,
                onDisagree: y,
                title: b.NW.string(b.t.ZmwvDQ),
                description: b.NW.string(b.t.E4Cd5O),
                agreement: b.NW.string(b.t.wVq7ur),
                disagreement: b.NW.string(b.t.hg1uxs)
            })
        );
    return (0, r.jsx)(c.Den, {
        ref: C,
        className: _.scroller,
        children: (0, r.jsx)('div', {
            className: o()(n, _.wrapper),
            children: O
        })
    });
};
