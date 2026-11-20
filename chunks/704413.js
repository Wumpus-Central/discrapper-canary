var s = n(582128),
    i = n(736653),
    a = n(253932),
    r = n(862780),
    l = n(21878),
    o = n(951727),
    c = n(708676);
n.d(
    t,
    {},
    {
        A: function (e, t) {
            let n = (0, l.M)(e),
                d = (0, r.d$)(n.getChannelId())[n.id],
                u = (0, c.A)(n.poll?.expiry),
                m = a.Sf.useSetting(),
                h = (0, i.Ay)(),
                x = t ?? h;
            return s.useMemo(
                () => (0, o.Ay)(n, d, { animateEmoji: m, theme: x, formattedExpirationLabel: u }),
                [m, n, d, u, x],
            );
        },
    },
);
