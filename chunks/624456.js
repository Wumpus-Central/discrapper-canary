var l = n(284009),
    i = n.n(l);
n.d(
    t,
    {},
    {
        M: function (e) {
            let t = e.items;
            return (i()(1 === t.length, "more than 1 subscription item for role subscription"), t[0].planId);
        },
        l: function (e) {
            let t = e?.renewalMutations?.items;
            if (null != t)
                return (i()(t.length <= 1, "more than 1 renewal mutation for role subscription"), t?.[0].planId);
        },
    },
);
