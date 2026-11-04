var o = t(486889),
    l = t(659674),
    i = t(581619);
t.d(
    e,
    {},
    {
        c_: function (n, e) {
            let { onlyLinkContent: t, stripGameServerShareLinks: l } = e;
            return (!!t && null != (0, o.ts)(n)) || (l && null != (0, o.$9)(n));
        },
        dn: function (n, e) {
            let t = 0;
            for (let o of n) {
                if (!e(o)) return { linkCount: t, onlyLinks: !1 };
                t += 1;
            }
            return { linkCount: t, onlyLinks: !0 };
        },
        iz: function (n) {
            let { linkCount: e, onlyLinks: t } = n;
            return t && 1 === e;
        },
        k5: function (n) {
            if (1 !== n.length) return !1;
            let e = n[0];
            return i.h5.has(e.type) && (0, l.NV)(e);
        },
        tq: { linkCount: 0, onlyLinks: !1 },
    },
);
