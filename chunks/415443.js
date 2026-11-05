var i = n(5377),
    r = n(792996);
n.d(
    t,
    {},
    {
        A: function (e, t) {
            if (null == e || "" === e.trim()) return null;
            let n = Number(e);
            if (!Number.isFinite(n)) return null;
            let s = new Date(n);
            if (Number.isNaN(s.getTime())) return null;
            if (t) return (0, i.mk)(s, !0);
            let l = { dateStyle: "short", timeStyle: "short" };
            try {
                return s.toLocaleString(r.intl.currentLocale, l);
            } catch {
                return s.toLocaleString(void 0, l);
            }
        },
    },
);
