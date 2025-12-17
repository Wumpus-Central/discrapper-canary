n.d(t, { Z: () => s }), n(583741);
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(386661);
function s(e) {
    let { thumbnails: t, variant: n = "gallery", className: i } = e;
    if ("stacked" === n) {
        let e = Math.min(t.length, 2);
        return (0, r.jsx)("div", {
            className: a()(o.thumbnailStackStacked, i, {
                [o["stacked-1"]]: 1 === e,
                [o["stacked-2"]]: 2 === e,
            }),
            children: t.slice(0, 2).map((e, t) =>
                (0, r.jsx)(
                    "img",
                    {
                        alt: "Clip preview",
                        className: o.thumbnailStacked,
                        src: e,
                        "data-index": t,
                    },
                    "".concat(e, "-").concat(t),
                ),
            ),
        });
    }
    let s = Math.min(t.length, 4);
    return (0, r.jsx)("div", {
        className: a()(o.thumbnailStackGallery, i, {
            [o["gallery-height-1"]]: 1 === s,
            [o["gallery-height-2"]]: 2 === s,
            [o["gallery-height-3"]]: 3 === s,
            [o["gallery-height-max"]]: s >= 4,
        }),
        children: t
            .slice(0, 4)
            .map((e, t) =>
                (0, r.jsx)(
                    "img",
                    {
                        alt: "Clip preview",
                        className: o.thumbnailGallery,
                        src: e,
                        "data-index": t,
                    },
                    "".concat(e, "-").concat(t),
                ),
            )
            .reverse(),
    });
}
