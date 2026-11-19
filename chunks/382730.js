var i = n(7584),
    r = n(486020),
    l = n(673375);
n.d(
    t,
    {},
    {
        W: function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 32;
            if (null == e) return null;
            if ("id" in e) return r.Ay.getEmojiURL({ id: e.id, animated: t && e.animated, size: n });
            if (null == i.Ay.convertSurrogateToBase(e.unicode)) return null;
            let s = l.A.getURL(e.unicode);
            return "" === s ? null : s;
        },
    },
);
