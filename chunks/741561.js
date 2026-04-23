n.d(e, { y: () => E });
var s = n(627968),
    l = n(64700),
    r = n(503698),
    i = n.n(r),
    a = n(194261),
    c = n(847374),
    d = n(900797),
    o = n(990078),
    u = n(785007),
    b = n(939249),
    g = n(140735),
    x = n(834730),
    f = n(403362),
    h = n(743981),
    m = n(985018),
    j = n(659512),
    p = n(342490),
    C = n(661023),
    S = n(851889),
    N = n(644961);
function k(t) {
    let { badge: e, isSelected: n, onClick: l } = t,
        r = (0, u.Gx)({
            isSelected: n,
            label: (function (t) {
                switch (t) {
                    case h.bl.SWORD:
                        return m.intl.string(m.t["+4RpVO"]);
                    case h.bl.WATER_DROP:
                        return m.intl.string(m.t["08tAb0"]);
                    case h.bl.SKULL:
                        return m.intl.string(m.t["0opW02"]);
                    case h.bl.TOADSTOOL:
                        return m.intl.string(m.t.M90TUl);
                    case h.bl.MOON:
                        return m.intl.string(m.t.G8H5XZ);
                    case h.bl.LIGHTNING:
                        return m.intl.string(m.t.hcPaJA);
                    case h.bl.LEAF:
                        return m.intl.string(m.t.Zg3hHZ);
                    case h.bl.HEART:
                        return m.intl.string(m.t.WjcnZD);
                    case h.bl.FIRE:
                        return m.intl.string(m.t.OLVr2Z);
                    case h.bl.COMPASS:
                        return m.intl.string(m.t.fSU0qj);
                    case h.bl.CROSSHAIRS:
                        return m.intl.string(m.t.FImC7X);
                    case h.bl.FLOWER:
                        return m.intl.string(m.t.Kswg0Y);
                    case h.bl.FORCE:
                        return m.intl.string(m.t.ALJkb2);
                    case h.bl.GEM:
                        return m.intl.string(m.t.Xpb5FV);
                    case h.bl.LAVA:
                        return m.intl.string(m.t.Q9Mv1c);
                    case h.bl.PSYCHIC:
                        return m.intl.string(m.t.qCL3jX);
                    case h.bl.SMOKE:
                        return m.intl.string(m.t.HWyuRl);
                    case h.bl.SNOW:
                        return m.intl.string(m.t["YTpD+b"]);
                    case h.bl.SOUND:
                        return m.intl.string(m.t["8MDV4p"]);
                    case h.bl.SUN:
                        return m.intl.string(m.t.q4KKjI);
                    case h.bl.WIND:
                        return m.intl.string(m.t.jTxbHc);
                    case h.bl.BUNNY:
                        return m.intl.string(m.t.s0jeu5);
                    case h.bl.DOG:
                        return m.intl.string(m.t.teQDPB);
                    case h.bl.FROG:
                        return m.intl.string(m.t.SAUCGD);
                    case h.bl.GOAT:
                        return m.intl.string(m.t.Mpxtar);
                    case h.bl.CAT:
                        return m.intl.string(m.t.qCpIw3);
                    case h.bl.DIAMOND:
                        return m.intl.string(m.t["zE/nMU"]);
                    case h.bl.CROWN:
                        return m.intl.string(m.t.Rp2AbV);
                    case h.bl.TROPHY:
                        return m.intl.string(m.t.Jw25U0);
                    case h.bl.MONEY_BAG:
                        return m.intl.string(m.t.s2U0Nw);
                    case h.bl.DOLLAR_SIGN:
                        return m.intl.string(m.t.AWIIQw);
                    case h.bl.CLOVER:
                        return m.intl.string(m.t.ZzsbQp);
                    case h.bl.BLOSSOM:
                        return m.intl.string(m.t.uGSJSU);
                    case h.bl.POTTED_PLANT:
                        return m.intl.string(m.t.BGZKO9);
                    case h.bl.MAPLE:
                        return m.intl.string(m.t.Rqq6To);
                    case h.bl.WILTED_FLOWER:
                        return m.intl.string(m.t.o1OjGD);
                    case h.bl.BUTTERFLY:
                        return m.intl.string(m.t["76qj8a"]);
                    case h.bl.SNAIL:
                        return m.intl.string(m.t.mFQo1S);
                    case h.bl.CATERPILLAR:
                        return m.intl.string(m.t.fTwuEi);
                    case h.bl.SPIDER:
                        return m.intl.string(m.t.TzZYZM);
                    case h.bl.BEE:
                        return m.intl.string(m.t["6euAa8"]);
                    default:
                        (0, f.xb)(t);
                }
            })(e.kind),
        });
    return (0, s.jsx)(v, { badge: e, selected: n, onClick: l, radioProps: r });
}
function v(t) {
    let { badge: e, locked: n = !1, preview: l = !1, selected: r = !1, onClick: c, radioProps: d } = t,
        u = i()(N.Uh, { [N.fT]: r, [S.av]: n, [S.WZ]: l }),
        g = (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(j.J, { badge: e.kind, width: h.Sl.SIZE_32, height: h.Sl.SIZE_32, className: S.n2 }),
                n && !l && (0, s.jsx)("div", { className: S.py, children: (0, s.jsx)(a.X, { size: "md" }) }),
            ],
        });
    if (l) return (0, s.jsx)("div", { className: u, children: g });
    if (n && null != e.packName && "" !== e.packName) {
        let t = m.intl.formatToPlainString(C.default.ECl8SQ, { packName: e.packName });
        return (0, s.jsx)(o.m, {
            delay: 100,
            text: t,
            "aria-label": t,
            children: (0, s.jsx)(b.D, {
                className: u,
                onClick: () => {
                    c?.();
                },
                children: g,
            }),
        });
    }
    return (0, s.jsx)(b.D, { ...d, className: u, onClick: c, children: g });
}
function E(t) {
    let { badgeCollection: e, handleBoostUpsellClick: n, selectedBadge: r, onBadgeClicked: a, headingId: o } = t,
        [f, h] = l.useState(!1),
        j = l.useId(),
        E = (0, u._u)({ orientation: "horizontal", isDisabled: !1, labelledBy: o }),
        A = !f && e.lockedBadges.length > 0;
    return (0, s.jsxs)("div", {
        className: S.zr,
        children: [
            (0, s.jsx)(g.A, { id: j, children: m.intl.string(m.t["5AQGuZ"]) }),
            (0, s.jsx)("div", {
                ...E,
                "aria-describedby": j,
                className: N.p3,
                children: e.unlockedBadges.map((t) =>
                    (0, s.jsx)(k, { badge: t, isSelected: t.kind === r, onClick: () => a(t.kind) }, t.kind),
                ),
            }),
            f &&
                (0, s.jsx)("ul", {
                    className: i()(N.p3, S.wA),
                    children: e.lockedBadges.map((t) =>
                        (0, s.jsx)(
                            "li",
                            { children: (0, s.jsx)(v, { locked: !0, badge: t, onClick: () => n?.() }) },
                            t.kind,
                        ),
                    ),
                }),
            A &&
                (0, s.jsxs)("div", {
                    className: S.WC,
                    children: [
                        (0, s.jsx)("div", {
                            className: N.p3,
                            children: e.lockedBadges
                                .slice(0, 5)
                                .map((t) => (0, s.jsx)(v, { locked: !0, preview: !0, badge: t }, t.kind)),
                        }),
                        (0, s.jsxs)(b.D, {
                            className: i()(S.ZN, S.n7),
                            onClick: () => h(!0),
                            children: [
                                (0, s.jsx)(x.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-subtle",
                                    children: m.intl.string(C.default["2tkPDy"]),
                                }),
                                (0, s.jsx)(c.a, { size: "sm" }),
                            ],
                        }),
                    ],
                }),
            f &&
                (0, s.jsxs)(s.Fragment, {
                    children: [
                        null != n &&
                            (0, s.jsxs)("div", {
                                className: S.B7,
                                children: [
                                    (0, s.jsx)(x.E, {
                                        variant: "text-sm/normal",
                                        color: "text-default",
                                        className: S.XY,
                                        children: m.intl.string(C.default.G3qiHu),
                                    }),
                                    (0, s.jsx)("div", {
                                        className: S.WM,
                                        children: (0, s.jsx)(p.u, { onClick: n, size: "sm" }),
                                    }),
                                ],
                            }),
                        (0, s.jsxs)(b.D, {
                            className: S.eO,
                            onClick: () => h(!1),
                            children: [
                                (0, s.jsx)(x.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-subtle",
                                    children: m.intl.string(C.default.idxnf7),
                                }),
                                (0, s.jsx)(d.t, { size: "sm" }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
