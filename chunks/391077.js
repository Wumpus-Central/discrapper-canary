n.d(t, { Z: () => p });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(927359),
    l = n(74538),
    c = n(474936),
    u = n(388032),
    d = n(764810);
function f(e) {
    return (0, r.jsxs)("div", {
        className: d.accountCreditRow,
        children: [
            (0, r.jsx)("div", {
                className: d.iconBackgroundFractional,
                children: (0, r.jsx)(o.SrA, {
                    size: "md",
                    color: "white",
                    className: d.iconFractional,
                }),
            }),
            (0, r.jsx)("div", {
                className: d.rowDetails,
                children: (0, r.jsx)(o.Heading, {
                    variant: "heading-md/semibold",
                    children: u.intl.string(u.t.DFMPWS),
                }),
            }),
            (0, r.jsx)(o.Text, {
                className: d.rowCreditCount,
                variant: "text-md/semibold",
                children: e.length > 0 ? e : u.intl.string(u.t["B66Z+f"]),
            }),
        ],
    });
}
function _(e) {
    let { showChargingUpState: t, rowValueText: n, endsAt: i, fractionalState: s, activationDate: l } = e,
        f = t ? u.intl.string(u.t["hT6i/0"]) : u.intl.string(u.t["3G0CTC"]),
        _ = t
            ? void 0 === l
                ? null
                : u.intl.format(u.t["0Vwb/l"], { activateDate: l })
            : s === c.a$.FP_SUB_PAUSED
              ? u.intl.format(u.t.MMvaIG, { resumeDate: i.toDate() })
              : null,
        p = a()({
            [d.fractionalUnactivatedPill]: t,
            [d.fractionalTimeRemainingPill]: !t,
        }),
        h = a()({
            [d.fractionalUnactivatedPillText]: t,
            [d.fractionalTimeRemainingPillText]: !t,
        }),
        m = a()({ [d.fractionalTimeRemainingRowHeader]: !t });
    return (0, r.jsxs)("div", {
        className: d.fractionalTimeRemainingRow,
        children: [
            (0, r.jsxs)("div", {
                className: d.fractionalTimeRemainingRowDetails,
                children: [
                    (0, r.jsx)(o.Heading, {
                        variant: "heading-md/semibold",
                        className: m,
                        children: f,
                    }),
                    null !== _ &&
                        (0, r.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            children: _,
                        }),
                ],
            }),
            (0, r.jsx)("div", {
                className: d.fractionalTimeRemainingPillWrapper,
                children: (0, r.jsx)("div", {
                    className: p,
                    children: (0, r.jsx)(o.Text, {
                        variant: "text-sm/semibold",
                        className: h,
                        children: n,
                    }),
                }),
            }),
        ],
    });
}
let p = function (e) {
    let { fractionalPremiumInfo: t, className: n, activationDate: i } = e,
        o = (0, l.jp)(t),
        c = o.length > 0,
        u = (0, s.ZP)(t.endsAt, s.aj.SHORT_TIME),
        p = c ? o : u;
    return (0, r.jsx)("div", {
        children: (0, r.jsxs)("div", {
            className: a()(n, d.fractionalPremiumAccountCredit),
            children: [
                (0, r.jsx)("div", {
                    className: d.accountCreditsContainer,
                    children: f(o),
                }),
                (0, r.jsx)(_, {
                    showChargingUpState: c,
                    rowValueText: p,
                    endsAt: t.endsAt,
                    fractionalState: t.fractionalState,
                    activationDate: i,
                }),
            ],
        }),
    });
};
