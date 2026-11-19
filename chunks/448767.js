var u = r(486889),
    e = r(659674),
    i = r(581619);
r.d(
    t,
    {},
    {
        c_: function (n, t) {
            let { onlyLinkContent: r, stripGameServerShareLinks: e } = t;
            return (!!r && null != (0, u.ts)(n)) || (e && null != (0, u.$9)(n));
        },
        dn: function (n, t) {
            let r = 0;
            for (let u of n) {
                if (!t(u)) return { linkCount: r, onlyLinks: !1 };
                r += 1;
            }
            return { linkCount: r, onlyLinks: !0 };
        },
        iz: function (n) {
            let { linkCount: t, onlyLinks: r } = n;
            return r && 1 === t;
        },
        k5: function (n) {
            if (1 !== n.length) return !1;
            let t = n[0];
            return i.h5.has(t.type) && (0, e.NV)(t);
        },
        tq: { linkCount: 0, onlyLinks: !1 },
    },
);
