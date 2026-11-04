var i = n(284009),
    r = n.n(i),
    a = n(945810),
    s = n(459830);
n(652215);
let l = { enabled: !1, ladder: s.t0, maxUpscale: 1.1, minSnapDownDpr: 2 },
    o = (0, a.mj)({
        name: "2026-07-attachment-image-ladder",
        kind: "user",
        defaultConfig: l,
        variations: {
            0: l,
            1: function (e) {
                let t = JSON.parse(e),
                    n = t.maxUpscale ?? l.maxUpscale;
                r()(
                    "number" == typeof n && Number.isFinite(n) && n >= 1 && n <= 1.5,
                    "maxUpscale must be a number in [1, %s]",
                    1.5,
                );
                let i = t.minSnapDownDpr ?? l.minSnapDownDpr;
                r()(
                    "number" == typeof i && Number.isFinite(i) && i >= 1 && i <= 4,
                    "minSnapDownDpr must be a number in [1, %s]",
                    4,
                );
                let a = t.ladder ?? l.ladder;
                for (let e of (r()(
                    Array.isArray(a) && a.length > 0 && a.length <= 32,
                    "ladder must be a non-empty array of at most %s rungs",
                    32,
                ),
                a))
                    r()(
                        Number.isInteger(e) && e >= 16 && e <= 4096,
                        "ladder rungs must be integers in [%s, %s]",
                        16,
                        4096,
                    );
                return { enabled: !0, ladder: [...a].sort((e, t) => e - t), maxUpscale: n, minSnapDownDpr: i };
            },
        },
    });
n.d(
    t,
    {},
    {
        getAttachmentImageLadderConfig: function (e) {
            let { location: t } = e;
            return o.getConfig({ location: t });
        },
    },
);
