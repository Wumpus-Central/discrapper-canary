n.d(t, { Z: () => _ }), n(627341);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(278074),
    s = n(442837),
    c = n(481060),
    u = n(749210),
    d = n(191237),
    p = n(986035),
    h = n(594174),
    f = n(63063),
    m = n(981631),
    g = n(388032),
    b = n(975743);
let _ = function (e) {
    let { guild: t, className: n } = e,
        l = (0, s.e7)([h.default], () => {
            var e;
            return (null === (e = h.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed) === !1;
        }),
        _ = i.useRef(null),
        C = d.Z.useShouldShowTiggerPawtect(),
        v = i.useCallback(() => {
            null != t && u.Z.nsfwReturnToSafety(t.id);
        }, [t]),
        y = i.useCallback(() => {
            null != t && u.Z.nsfwAgree(t.id);
        }, [t]),
        x = i.useCallback(() => {}, []);
    i.useEffect(() => {
        let { current: e } = _;
        null == e || e.scrollToBottom();
    }, []);
    let j = (0, a.EQ)({
        nsfwDisallowed: l,
        shouldPawtect: C
    })
        .with({ shouldPawtect: !0 }, () =>
            (0, r.jsx)(p.Z, {
                onAgree: x,
                onDisagree: v,
                title: g.NW.string(g.t.ZmwvDQ),
                description: g.NW.string(g.t['u/xqhY']),
                agreement: g.NW.string(g.t['5B+npK']),
                agreementButtonColor: c.zxk.Colors.BRAND,
                disagreement: g.NW.string(g.t.f3Pet7),
                imageClassName: b.ageGatedImage
            })
        )
        .with(
            {
                nsfwDisallowed: !0,
                shouldPawtect: !1
            },
            () =>
                (0, r.jsx)(p.Z, {
                    onAgree: y,
                    onDisagree: v,
                    title: g.NW.string(g.t.NEabBQ),
                    description: g.NW.format(g.t['2kHZen'], { helpURL: f.Z.getArticleURL(m.BhN.NSFW_AGE_GATING) }),
                    agreement: null,
                    disagreement: g.NW.string(g.t['13/7kZ']),
                    imageClassName: b.ageGatedImage
                })
        )
        .otherwise(() =>
            (0, r.jsx)(p.Z, {
                onAgree: y,
                onDisagree: v,
                title: g.NW.string(g.t.ZmwvDQ),
                description: g.NW.string(g.t.E4Cd5O),
                agreement: g.NW.string(g.t.wVq7ur),
                disagreement: g.NW.string(g.t.hg1uxs)
            })
        );
    return (0, r.jsx)(c.Den, {
        ref: _,
        className: b.scroller,
        children: (0, r.jsx)('div', {
            className: o()(n, b.wrapper),
            children: j
        })
    });
};
