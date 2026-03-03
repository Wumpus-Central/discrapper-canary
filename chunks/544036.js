e.d(i, { default: () => E });
var r = e(627968),
    n = e(64700),
    s = e(877227),
    a = e(311907),
    l = e(397927),
    o = e(166403),
    c = e(954571),
    u = e(580630),
    d = e(652215),
    p = e(985018),
    _ = e(592498),
    C = e(495995);
function E(t) {
    let { transitionState: i, onClose: e, amountRedeemed: E, currencyCode: f, loadId: D } = t,
        g = (0, u.$g)(E, f),
        h = null != (0, a.bG)([o.A], () => o.A.getPremiumTypeSubscription()),
        k = n.useRef(!1);
    n.useEffect(() => {
        k.current ||
            ((k.current = !0),
            c.default.track(d.HAw.IMPRESSION_GIFT_CARD_REDEMPTION_SUCCEEDED_MODAL, { is_nitro_user: h, load_id: D }));
    }, [h, D]);
    let A = n.useCallback(() => {
            c.default.track(d.HAw.GIFT_CARD_REDEMPTION_SUCCEEDED_MODAL_CTA_CLICKED, { is_nitro_user: h, load_id: D }),
                h ? (0, s.pX)(d.BVt.COLLECTIBLES_SHOP) : (0, s.pX)(d.BVt.NITRO_HOME),
                e();
        }, [h, D, e]),
        I = [
            { variant: "secondary", size: "md", text: p.intl.string(p.t["ETE/oC"]), onClick: e },
            {
                variant: "expressive",
                size: "md",
                text: h ? p.intl.string(p.t.wEQi1r) : p.intl.string(p.t["8x0jKT"]),
                onClick: A,
            },
        ];
    return (0, r.jsx)("div", {
        className: _.A,
        children: (0, r.jsx)(l.kpP, {
            transitionState: i,
            onClose: e,
            title: p.intl.string(p.t.D5lKY1),
            subtitle: p.intl.format(p.t.f3YCs1, { price: g, link: "https://discord.com/nitro" }),
            graphic: { type: "image", src: C },
            gradientColor: "purple",
            actions: I,
        }),
    });
}
