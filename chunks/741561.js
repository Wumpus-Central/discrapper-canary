n.d(e, { y: () => N });
var r = n(477900),
    l = n(582128),
    s = n(503698),
    i = n.n(s),
    a = n(194261),
    c = n(847374),
    d = n(900797),
    u = n(785007),
    o = n(866665),
    b = n(939249),
    g = n(140735),
    f = n(834730),
    m = n(403362),
    x = n(743981),
    h = n(375708),
    E = n(620757),
    A = n(342490),
    S = n(545067),
    p = n(572430),
    O = n(383702);
function j(t) {
    let { badge: e, isSelected: n, onClick: l } = t,
        s = (0, u.Gx)({
            isSelected: n,
            label: (function (t) {
                switch (t) {
                    case x.bl.SWORD:
                        return h.intl.string(h.t["+4RpVO"]);
                    case x.bl.WATER_DROP:
                        return h.intl.string(h.t["08tAb0"]);
                    case x.bl.SKULL:
                        return h.intl.string(h.t["0opW02"]);
                    case x.bl.TOADSTOOL:
                        return h.intl.string(h.t.M90TUl);
                    case x.bl.MOON:
                        return h.intl.string(h.t.G8H5XZ);
                    case x.bl.LIGHTNING:
                        return h.intl.string(h.t.hcPaJA);
                    case x.bl.LEAF:
                        return h.intl.string(h.t.Zg3hHZ);
                    case x.bl.HEART:
                        return h.intl.string(h.t.WjcnZD);
                    case x.bl.FIRE:
                        return h.intl.string(h.t.OLVr2Z);
                    case x.bl.COMPASS:
                        return h.intl.string(h.t.fSU0qj);
                    case x.bl.CROSSHAIRS:
                        return h.intl.string(h.t.FImC7X);
                    case x.bl.FLOWER:
                        return h.intl.string(h.t.Kswg0Y);
                    case x.bl.FORCE:
                        return h.intl.string(h.t.ALJkb2);
                    case x.bl.GEM:
                        return h.intl.string(h.t.Xpb5FV);
                    case x.bl.LAVA:
                        return h.intl.string(h.t.Q9Mv1c);
                    case x.bl.PSYCHIC:
                        return h.intl.string(h.t.qCL3jX);
                    case x.bl.SMOKE:
                        return h.intl.string(h.t.HWyuRl);
                    case x.bl.SNOW:
                        return h.intl.string(h.t["YTpD+b"]);
                    case x.bl.SOUND:
                        return h.intl.string(h.t["8MDV4p"]);
                    case x.bl.SUN:
                        return h.intl.string(h.t.q4KKjI);
                    case x.bl.WIND:
                        return h.intl.string(h.t.jTxbHc);
                    case x.bl.BUNNY:
                        return h.intl.string(h.t.s0jeu5);
                    case x.bl.DOG:
                        return h.intl.string(h.t.teQDPB);
                    case x.bl.FROG:
                        return h.intl.string(h.t.SAUCGD);
                    case x.bl.GOAT:
                        return h.intl.string(h.t.Mpxtar);
                    case x.bl.CAT:
                        return h.intl.string(h.t.qCpIw3);
                    case x.bl.DIAMOND:
                        return h.intl.string(h.t["zE/nMU"]);
                    case x.bl.CROWN:
                        return h.intl.string(h.t.Rp2AbV);
                    case x.bl.TROPHY:
                        return h.intl.string(h.t.Jw25U0);
                    case x.bl.MONEY_BAG:
                        return h.intl.string(h.t.s2U0Nw);
                    case x.bl.DOLLAR_SIGN:
                        return h.intl.string(h.t.AWIIQw);
                    case x.bl.CLOVER:
                        return h.intl.string(h.t.ZzsbQp);
                    case x.bl.BLOSSOM:
                        return h.intl.string(h.t.uGSJSU);
                    case x.bl.POTTED_PLANT:
                        return h.intl.string(h.t.BGZKO9);
                    case x.bl.MAPLE:
                        return h.intl.string(h.t.Rqq6To);
                    case x.bl.WILTED_FLOWER:
                        return h.intl.string(h.t.o1OjGD);
                    case x.bl.BUTTERFLY:
                        return h.intl.string(h.t["76qj8a"]);
                    case x.bl.SNAIL:
                        return h.intl.string(h.t.mFQo1S);
                    case x.bl.CATERPILLAR:
                        return h.intl.string(h.t.fTwuEi);
                    case x.bl.SPIDER:
                        return h.intl.string(h.t.TzZYZM);
                    case x.bl.BEE:
                        return h.intl.string(h.t["6euAa8"]);
                    default:
                        (0, m.xb)(t);
                }
            })(e.kind),
        });
    return (0, r.jsx)(k, { badge: e, selected: n, onClick: l, radioProps: s });
}
function k(t) {
    let { badge: e, locked: n = !1, preview: l = !1, selected: s = !1, onClick: c, radioProps: d } = t,
        u = i()(O.Uh, { [O.fT]: s, [p.av]: n, [p.WZ]: l }),
        g = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(E.J, { badge: e.kind, width: x.Sl.SIZE_32, height: x.Sl.SIZE_32, className: p.n2 }),
                n && !l && (0, r.jsx)("div", { className: p.py, children: (0, r.jsx)(a.LockIcon, { size: "md" }) }),
            ],
        });
    if (l) return (0, r.jsx)("div", { className: u, children: g });
    if (n && null != e.packName && "" !== e.packName) {
        let t = h.intl.formatToPlainString(S.default.ECl8SQ, { packName: e.packName });
        return (0, r.jsx)(o.m, {
            delay: 100,
            text: t,
            "aria-label": t,
            children: (0, r.jsx)(b.D, {
                className: u,
                onClick: () => {
                    c?.();
                },
                children: g,
            }),
        });
    }
    return (0, r.jsx)(b.D, { ...d, className: u, onClick: c, children: g });
}
function N(t) {
    let { badgeCollection: e, handleBoostUpsellClick: n, selectedBadge: s, onBadgeClicked: a, headingId: o } = t,
        [m, x] = l.useState(!1),
        E = l.useId(),
        N = (0, u._u)({ orientation: "horizontal", isDisabled: !1, labelledBy: o }),
        I = !m && e.lockedBadges.length > 0;
    return (0, r.jsxs)("div", {
        className: p.zr,
        children: [
            (0, r.jsx)(g.A, { id: E, children: h.intl.string(h.t["5AQGuZ"]) }),
            (0, r.jsx)("div", {
                ...N,
                "aria-describedby": E,
                className: O.p3,
                children: e.unlockedBadges.map((t) =>
                    (0, r.jsx)(j, { badge: t, isSelected: t.kind === s, onClick: () => a(t.kind) }, t.kind),
                ),
            }),
            m &&
                (0, r.jsx)("ul", {
                    className: i()(O.p3, p.wA),
                    children: e.lockedBadges.map((t) =>
                        (0, r.jsx)(
                            "li",
                            { children: (0, r.jsx)(k, { locked: !0, badge: t, onClick: () => n?.() }) },
                            t.kind,
                        ),
                    ),
                }),
            I &&
                (0, r.jsxs)("div", {
                    className: p.WC,
                    children: [
                        (0, r.jsx)("div", {
                            className: O.p3,
                            children: e.lockedBadges
                                .slice(0, 5)
                                .map((t) => (0, r.jsx)(k, { locked: !0, preview: !0, badge: t }, t.kind)),
                        }),
                        (0, r.jsxs)(b.D, {
                            className: i()(p.ZN, p.n7),
                            onClick: () => x(!0),
                            children: [
                                (0, r.jsx)(f.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-subtle",
                                    children: h.intl.string(S.default["2tkPDy"]),
                                }),
                                (0, r.jsx)(c.a, { size: "sm" }),
                            ],
                        }),
                    ],
                }),
            m &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        null != n &&
                            (0, r.jsxs)("div", {
                                className: p.B7,
                                children: [
                                    (0, r.jsx)(f.E, {
                                        variant: "text-sm/normal",
                                        color: "text-default",
                                        className: p.XY,
                                        children: h.intl.string(S.default.G3qiHu),
                                    }),
                                    (0, r.jsx)("div", {
                                        className: p.WM,
                                        children: (0, r.jsx)(A.u, { onClick: n, size: "sm" }),
                                    }),
                                ],
                            }),
                        (0, r.jsxs)(b.D, {
                            className: p.eO,
                            onClick: () => x(!1),
                            children: [
                                (0, r.jsx)(f.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-subtle",
                                    children: h.intl.string(S.default.idxnf7),
                                }),
                                (0, r.jsx)(d.t, { size: "sm" }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
