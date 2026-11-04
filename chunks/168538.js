var n = r(677654);
let i = new Map();
r.d(
    t,
    {},
    {
        Q: function (e) {
            let { locale: t } = (0, n.Y)(),
                r =
                    t +
                    (e
                        ? Object.entries(e)
                              .sort((e, t) => (e[0] < t[0] ? -1 : 1))
                              .join()
                        : "");
            if (i.has(r)) return i.get(r);
            let o = new Intl.Collator(t, e);
            return (i.set(r, o), o);
        },
    },
);
