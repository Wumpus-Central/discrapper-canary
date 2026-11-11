var i = n(202512),
    r = n(596720);
n.d(
    t,
    {},
    {
        t: function (e) {
            return "waterwheelsItem" === e.data.kind ? e.data.card.id : e.id;
        },
        v: function (e) {
            if (e.type !== r.Mm.DISCOVER_ITEM) return e.id;
            let t = e.data?.item;
            if (null == t || "object" != typeof t || !("id" in t) || !("type" in t)) return null;
            let { id: n, type: a } = t;
            return "string" == typeof n && "string" == typeof a && (0, i.l)(n, a) ? n : null;
        },
    },
);
