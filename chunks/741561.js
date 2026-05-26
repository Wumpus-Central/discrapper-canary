n.d(e, { y: () => E });
var r = n(627968),
    s = n(64700),
    l = n(503698),
    i = n.n(l),
    a = n(194261),
    c = n(847374),
    d = n(900797),
    u = n(990078),
    b = n(785007),
    o = n(939249),
    g = n(140735),
    f = n(834730),
    x = n(403362),
    m = n(743981),
    h = n(375708),
    p = n(659512),
    S = n(342490),
    j = n(661023),
    O = n(851889),
    k = n(644961);
function N(t) {
    let { badge: e, isSelected: n, onClick: s } = t,
        l = (0, b.Gx)({
            isSelected: n,
            label: (function (t) {
                switch (t) {
                    case m.bl.SWORD:
                        return h.intl.string(h.t["+4RpVO"]);
                    case m.bl.WATER_DROP:
                        return h.intl.string(h.t["08tAb0"]);
                    case m.bl.SKULL:
                        return h.intl.string(h.t["0opW02"]);
                    case m.bl.TOADSTOOL:
                        return h.intl.string(h.t.M90TUl);
                    case m.bl.MOON:
                        return h.intl.string(h.t.G8H5XZ);
                    case m.bl.LIGHTNING:
                        return h.intl.string(h.t.hcPaJA);
                    case m.bl.LEAF:
                        return h.intl.string(h.t.Zg3hHZ);
                    case m.bl.HEART:
                        return h.intl.string(h.t.WjcnZD);
                    case m.bl.FIRE:
                        return h.intl.string(h.t.OLVr2Z);
                    case m.bl.COMPASS:
                        return h.intl.string(h.t.fSU0qj);
                    case m.bl.CROSSHAIRS:
                        return h.intl.string(h.t.FImC7X);
                    case m.bl.FLOWER:
                        return h.intl.string(h.t.Kswg0Y);
                    case m.bl.FORCE:
                        return h.intl.string(h.t.ALJkb2);
                    case m.bl.GEM:
                        return h.intl.string(h.t.Xpb5FV);
                    case m.bl.LAVA:
                        return h.intl.string(h.t.Q9Mv1c);
                    case m.bl.PSYCHIC:
                        return h.intl.string(h.t.qCL3jX);
                    case m.bl.SMOKE:
                        return h.intl.string(h.t.HWyuRl);
                    case m.bl.SNOW:
                        return h.intl.string(h.t["YTpD+b"]);
                    case m.bl.SOUND:
                        return h.intl.string(h.t["8MDV4p"]);
                    case m.bl.SUN:
                        return h.intl.string(h.t.q4KKjI);
                    case m.bl.WIND:
                        return h.intl.string(h.t.jTxbHc);
                    case m.bl.BUNNY:
                        return h.intl.string(h.t.s0jeu5);
                    case m.bl.DOG:
                        return h.intl.string(h.t.teQDPB);
                    case m.bl.FROG:
                        return h.intl.string(h.t.SAUCGD);
                    case m.bl.GOAT:
                        return h.intl.string(h.t.Mpxtar);
                    case m.bl.CAT:
                        return h.intl.string(h.t.qCpIw3);
                    case m.bl.DIAMOND:
                        return h.intl.string(h.t["zE/nMU"]);
                    case m.bl.CROWN:
                        return h.intl.string(h.t.Rp2AbV);
                    case m.bl.TROPHY:
                        return h.intl.string(h.t.Jw25U0);
                    case m.bl.MONEY_BAG:
                        return h.intl.string(h.t.s2U0Nw);
                    case m.bl.DOLLAR_SIGN:
                        return h.intl.string(h.t.AWIIQw);
                    case m.bl.CLOVER:
                        return h.intl.string(h.t.ZzsbQp);
                    case m.bl.BLOSSOM:
                        return h.intl.string(h.t.uGSJSU);
                    case m.bl.POTTED_PLANT:
                        return h.intl.string(h.t.BGZKO9);
                    case m.bl.MAPLE:
                        return h.intl.string(h.t.Rqq6To);
                    case m.bl.WILTED_FLOWER:
                        return h.intl.string(h.t.o1OjGD);
                    case m.bl.BUTTERFLY:
                        return h.intl.string(h.t["76qj8a"]);
                    case m.bl.SNAIL:
                        return h.intl.string(h.t.mFQo1S);
                    case m.bl.CATERPILLAR:
                        return h.intl.string(h.t.fTwuEi);
                    case m.bl.SPIDER:
                        return h.intl.string(h.t.TzZYZM);
                    case m.bl.BEE:
                        return h.intl.string(h.t["6euAa8"]);
                    default:
                        (0, x.xb)(t);
                }
            })(e.kind),
        });
    return (0, r.jsx)(A, { badge: e, selected: n, onClick: s, radioProps: l });
}
function A(t) {
    let { badge: e, locked: n = !1, preview: s = !1, selected: l = !1, onClick: c, radioProps: d } = t,
        b = i()(k.Uh, { [k.fT]: l, [O.av]: n, [O.WZ]: s }),
        g = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(p.J, { badge: e.kind, width: m.Sl.SIZE_32, height: m.Sl.SIZE_32, className: O.n2 }),
                n && !s && (0, r.jsx)("div", { className: O.py, children: (0, r.jsx)(a.X, { size: "md" }) }),
            ],
        });
    if (s) return (0, r.jsx)("div", { className: b, children: g });
    if (n && null != e.packName && "" !== e.packName) {
        let t = h.intl.formatToPlainString(j.default.ECl8SQ, { packName: e.packName });
        return (0, r.jsx)(u.m, {
            delay: 100,
            text: t,
            "aria-label": t,
            children: (0, r.jsx)(o.D, {
                className: b,
                onClick: () => {
                    c?.();
                },
                children: g,
            }),
        });
    }
    return (0, r.jsx)(o.D, { ...d, className: b, onClick: c, children: g });
}
function E(t) {
    let { badgeCollection: e, handleBoostUpsellClick: n, selectedBadge: l, onBadgeClicked: a, headingId: u } = t,
        [x, m] = s.useState(!1),
        p = s.useId(),
        E = (0, b._u)({ orientation: "horizontal", isDisabled: !1, labelledBy: u }),
        I = !x && e.lockedBadges.length > 0;
    return (0, r.jsxs)("div", {
        className: O.zr,
        children: [
            (0, r.jsx)(g.A, { id: p, children: h.intl.string(h.t["5AQGuZ"]) }),
            (0, r.jsx)("div", {
                ...E,
                "aria-describedby": p,
                className: k.p3,
                children: e.unlockedBadges.map((t) =>
                    (0, r.jsx)(N, { badge: t, isSelected: t.kind === l, onClick: () => a(t.kind) }, t.kind),
                ),
            }),
            x &&
                (0, r.jsx)("ul", {
                    className: i()(k.p3, O.wA),
                    children: e.lockedBadges.map((t) =>
                        (0, r.jsx)(
                            "li",
                            { children: (0, r.jsx)(A, { locked: !0, badge: t, onClick: () => n?.() }) },
                            t.kind,
                        ),
                    ),
                }),
            I &&
                (0, r.jsxs)("div", {
                    className: O.WC,
                    children: [
                        (0, r.jsx)("div", {
                            className: k.p3,
                            children: e.lockedBadges
                                .slice(0, 5)
                                .map((t) => (0, r.jsx)(A, { locked: !0, preview: !0, badge: t }, t.kind)),
                        }),
                        (0, r.jsxs)(o.D, {
                            className: i()(O.ZN, O.n7),
                            onClick: () => m(!0),
                            children: [
                                (0, r.jsx)(f.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-subtle",
                                    children: h.intl.string(j.default["2tkPDy"]),
                                }),
                                (0, r.jsx)(c.a, { size: "sm" }),
                            ],
                        }),
                    ],
                }),
            x &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        null != n &&
                            (0, r.jsxs)("div", {
                                className: O.B7,
                                children: [
                                    (0, r.jsx)(f.E, {
                                        variant: "text-sm/normal",
                                        color: "text-default",
                                        className: O.XY,
                                        children: h.intl.string(j.default.G3qiHu),
                                    }),
                                    (0, r.jsx)("div", {
                                        className: O.WM,
                                        children: (0, r.jsx)(S.u, { onClick: n, size: "sm" }),
                                    }),
                                ],
                            }),
                        (0, r.jsxs)(o.D, {
                            className: O.eO,
                            onClick: () => m(!1),
                            children: [
                                (0, r.jsx)(f.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-subtle",
                                    children: h.intl.string(j.default.idxnf7),
                                }),
                                (0, r.jsx)(d.t, { size: "sm" }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
