var l = n(855986),
    r = n(918467),
    s = n(65238),
    a = n(181170),
    i = n(652215);
n.d(
    t,
    {},
    {
        A: function (e) {
            let t = (0, l.bG)([r.A], () => r.A.getPromotionsForApplication(i.FYj)),
                n = new Date().getTime();
            for (let l of t ?? []) {
                let t = (0, s.d3)(l);
                if (null != t && t.collectionId === e && (0, a.us)(l, n)) return t.position;
            }
            return null;
        },
    },
);
