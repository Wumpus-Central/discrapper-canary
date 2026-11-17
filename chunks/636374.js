var r = n(698253),
    i = n(662349);
n.d(
    e,
    {},
    {
        P: function (t) {
            let { wishlistOwner: e, isOwned: n, shortText: o, onDetailsClick: u, onPurchaseClick: a } = t,
                c = (0, r.b)(),
                {
                    label: d,
                    icon: s,
                    isPromptingPurchase: l,
                } = (0, i.h)({ wishlistOwner: e, isOwned: n, shortText: o }),
                v = c && l;
            return {
                onBodyClick: v ? a : u,
                onOverlayClick: l ? a : u,
                showOverlayButton: !l || !c,
                routesToGift: v,
                label: d,
                icon: s,
            };
        },
    },
);
