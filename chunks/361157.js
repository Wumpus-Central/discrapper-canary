n.d(
    e,
    {},
    {
        Ky: function (t, e) {
            return (
                (null == t && null == e) ||
                (null != t && null != e && t.amount === e.amount && t.currency === e.currency)
            );
        },
        Qn: function (t) {
            try {
                let e = new Intl.NumberFormat(void 0, { style: "currency", currency: t.toUpperCase() }).formatToParts(
                    0,
                );
                return e.find((t) => "currency" === t.type)?.value ?? t.toUpperCase();
            } catch {
                return t.toUpperCase();
            }
        },
        cU: function (t, e) {
            if (0 === e) return t.replace(/[^0-9]/g, "");
            let n = t.replace(/[^0-9.]/g, ""),
                i = n.split(".");
            return 1 === i.length ? n : `${i[0]}.${i.slice(1).join("").slice(0, e)}`;
        },
        o3: function () {
            let t = new Date(),
                e = new Date(Date.UTC(t.getUTCFullYear(), t.getUTCMonth() + 1, 1));
            return new Intl.DateTimeFormat(void 0, { dateStyle: "short", timeZone: "UTC" }).format(e);
        },
    },
);
