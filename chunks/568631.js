var l = n(604913),
    r = n(65238),
    s = n(5377),
    a = n(181170),
    i = n(248180);
n.d(
    t,
    {},
    {
        Ty: function (e) {
            return (0, s.Tf)(Date.now(), e);
        },
        lF: function (e) {
            let { days: t, hours: n, minutes: l, seconds: r } = e;
            return 0 === t && 0 === n && 0 === l && 0 === r;
        },
        rX: function (e, t) {
            let n = (0, r.NN)(e),
                s = (0, i.S)(e),
                o = e?.endsAt;
            return null == e ||
                null == t ||
                null == n ||
                n.collectionId !== t ||
                null == s ||
                s <= 0 ||
                null == o ||
                !(0, a.us)(e, Date.now())
                ? null
                : {
                      type: l.hE.COLLECTION_SALE,
                      percentOff: s,
                      endsAt: o,
                      countdownStyle: n.countdownStyle,
                      showCountdownCta: n.showCountdownCta,
                      countdownPosition: n.countdownPosition,
                  };
        },
        z0: function (e) {
            let { days: t, hours: n, minutes: l, seconds: r } = e;
            return (t > 0 ? [t, n, l, r] : [n, l, r]).map((e) => e.toString().padStart(2, "0"));
        },
    },
);
