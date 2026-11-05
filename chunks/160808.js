n.d(t, { hE: () => i.h, hm: () => _, Wt: () => s.Wt, LH: () => s.LH });
var i = n(483456),
    s = n(766586),
    r = n(477900),
    l = n(582128);
if (588245 != n.j) var a = n(43105);
var o = n(780964),
    c = n(766075),
    d = n(975571),
    u = n(871309),
    h = n(171576),
    C = n(36149),
    A = n(961943),
    g = n(652215),
    E = n(49999),
    p = n(124616),
    m = n(792996);
function _(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        i = (0, C.yM)(),
        s = l.useCallback(() => {
            (t(E.i.TAKE_ACTION), u.A.showAgeVerificationGetStartedModal({ entryPoint: h.q1.AGE_NOTICE_POPOVER }));
        }, [t]),
        _ = l.useCallback(() => {
            (t(E.i.TAKE_ACTION), u.A.openUrl(d.A.getArticleURL(g.MVz.AGE_VERIFICATION_LEARN_MORE)));
        }, [t]),
        f = l.useCallback(() => {
            (t(E.i.TAKE_ACTION), (0, c.openUserSettings)(o.X.ACCOUNT_STANDING_CATEGORY));
        }, [t]),
        T = l.useCallback(() => {
            t(E.i.USER_DISMISS);
        }, [t]),
        v = i ? m.intl.string(p.default.f7c7qE) : m.intl.string(p.default.jssaTD),
        N = i
            ? { text: m.intl.string(p.default.ZzcLhc), onClick: s, external: !1 }
            : { text: m.intl.string(p.default["Bp/1dq"]), link: A.M1, external: !0 },
        x = i
            ? { text: m.intl.string(p.default["+7NlgO"]), variant: "primary", onClick: _ }
            : { text: m.intl.string(p.default.jjpcno), variant: "primary", onClick: f };
    return (0, r.jsx)(a.A, {
        targetElementRef: n,
        shouldShow: !0,
        onRequestClose: T,
        position: "top",
        caretConfig: { align: "end" },
        size: "md",
        graphic: { type: "image", src: "/assets/397709a27ee3c251.svg", aspectRatio: "6/4" },
        title: m.intl.string(p.default.GdTVPF),
        body: v,
        textLink: N,
        actions: [x],
    });
}
