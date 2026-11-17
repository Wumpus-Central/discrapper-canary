n.d(t, { hE: () => i.h, hm: () => m, Wt: () => r.Wt, LH: () => r.LH });
var i = n(483456),
    r = n(766586),
    s = n(477900),
    l = n(582128);
if (588245 != n.j) var a = n(43105);
var o = n(780964),
    c = n(766075),
    d = n(975571),
    u = n(871309),
    h = n(171576),
    C = n(36149),
    E = n(961943),
    A = n(652215),
    _ = n(49999),
    p = n(124616),
    g = n(792996);
function m(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        i = (0, C.yM)(),
        r = l.useCallback(() => {
            (t(_.i.TAKE_ACTION), u.A.showAgeVerificationGetStartedModal({ entryPoint: h.q1.AGE_NOTICE_POPOVER }));
        }, [t]),
        m = l.useCallback(() => {
            (t(_.i.TAKE_ACTION), u.A.openUrl(d.A.getArticleURL(A.MVz.AGE_VERIFICATION_LEARN_MORE)));
        }, [t]),
        T = l.useCallback(() => {
            (t(_.i.TAKE_ACTION), (0, c.openUserSettings)(o.X.ACCOUNT_STANDING_CATEGORY));
        }, [t]),
        N = l.useCallback(() => {
            t(_.i.USER_DISMISS);
        }, [t]),
        f = i ? g.intl.string(p.default.f7c7qE) : g.intl.string(p.default.jssaTD),
        I = i
            ? { text: g.intl.string(p.default.ZzcLhc), onClick: r, external: !1 }
            : { text: g.intl.string(p.default["Bp/1dq"]), link: E.M1, external: !0 },
        x = i
            ? { text: g.intl.string(p.default["+7NlgO"]), variant: "primary", onClick: m }
            : { text: g.intl.string(p.default.jjpcno), variant: "primary", onClick: T };
    return (0, s.jsx)(a.A, {
        targetElementRef: n,
        shouldShow: !0,
        onRequestClose: N,
        position: "top",
        caretConfig: { align: "end" },
        size: "md",
        graphic: { type: "image", src: "/assets/397709a27ee3c251.svg", aspectRatio: "6/4" },
        title: g.intl.string(p.default.GdTVPF),
        body: f,
        textLink: I,
        actions: [x],
    });
}
