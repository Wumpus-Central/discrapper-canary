var i = n(5377),
    s = n(792996);
n.d(
    t,
    {},
    {
        A: function (e, t) {
            if (null == e || "" === e.trim()) return null;
            let n = Number(e);
            if (!Number.isFinite(n)) return null;
            let r = new Date(n);
            if (Number.isNaN(r.getTime())) return null;
            if (t) return (0, i.mk)(r, !0);
            let l = { dateStyle: "short", timeStyle: "short" };
            try {
                return r.toLocaleString(s.intl.currentLocale, l);
            } catch {
                return r.toLocaleString(void 0, l);
            }
        },
    },
);
