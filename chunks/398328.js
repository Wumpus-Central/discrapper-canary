n.d(t, {
    Vq: () => y,
}),
    n(321073),
    n(228524),
    n(747238),
    n(812715),
    n(866193),
    n(284009);
var r = n(989349),
    i = n.n(r),
    a = n(379834);
n(587895);
var s = n(491533);
n(654107);
var o = n(583954),
    l = n(816334);
n(773669), n(287809);
var c = n(927813);
n(562153);
var u = n(661191),
    d = n(583846);
n(176563);
var f = n(365170),
    p = n(241678),
    _ = n(985018);

function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            });
    }
    return e;
}
let g = (e, t) =>
        m(
            {
                AvatarImage1: e[0],
            },
            null != e[1] && {
                AvatarImage2: e[1],
            },
            null != e[2] && {
                AvatarImage3: e[2],
            },
            null != t && {
                ApplicationImage: t,
            },
        ),
    E = (e, t) => {
        let n = [
                {
                    iconPath: p.AS,
                    text: t,
                },
            ],
            r = u.default.extractTimestamp(e.extra.application_id);
        if (
            (7 >= i()().diff(i()(r), "days") &&
                n.push({
                    iconPath: p.fB,
                    text: _.intl.string(_.t.vYuyWf),
                }),
            (0, d.Rf)(e) &&
                n.push({
                    iconPath: p._P,
                    text: _.intl.string(_.t.keY6mW),
                }),
            (0, d.BZ)(e))
        ) {
            let t = (0, d.iy)(e);
            n.push({
                iconPath: p.Jd,
                text: _.intl.formatToPlainString(_.t["Klie/P"], {
                    days: t,
                }),
            });
        }
        (0, d.CZ)(e) === a.m.GLOBAL &&
            n.push({
                iconPath: p.Cv,
                text: _.intl.string(_.t.kAlUsy),
            });
        let s = (0, d.KH)(e);
        if (
            (null != s &&
                n.push({
                    iconPath: p.$S,
                    text: (0, d.us)(s),
                }),
            (0, d.L7)(e))
        ) {
            let { text: t } = (0, d.Pj)(e);
            null != t &&
                n.push({
                    iconPath: p.iI,
                    text: t,
                });
        }
        if ((0, d.uw)(e)) {
            let t = (0, d.ty)(e);
            if (null != t) {
                let e = _.intl.formatToPlainString(_.t.C0AxoR, {
                    hours: Math.round(t / c.A.Seconds.HOUR),
                });
                return [
                    {
                        iconPath: p.pc,
                        text: "".concat(_.intl.string(_.t["/50eHi"]), " — ").concat(e),
                    },
                ];
            }
        }
        return n;
    },
    b = (e, t) => {
        let { timestamp: n, colors: r, description: i, entry: a, numAvatars: l } = t,
            c = r.map((e, t) => ({
                color: e,
                stop: t,
            }));
        e.setSize(
            {
                w: 400,
                h: 120,
            },
            4,
        ),
            e.drawRoundedGradientRect(
                c,
                {
                    x: 0,
                    y: 120,
                },
                {
                    x: 400,
                    y: 0,
                },
                {
                    x: 0,
                    y: 0,
                    h: 120,
                    w: 400,
                },
                8,
            ),
            e.setColor("white"),
            e.drawRoundedImage(
                "ApplicationImage",
                {
                    x: 12,
                    y: 12,
                },
                {
                    w: 96,
                    h: 96,
                },
                8,
            ) === o.uS.Failure &&
                e.drawPath(
                    s.f,
                    {
                        x: 12,
                        y: 12,
                    },
                    !0,
                    2 + 2 / 3,
                );
        let u = ["AvatarImage1", "AvatarImage2", "AvatarImage3"];
        (0, f.v)({
            canvas: e,
            avatarSrcs: u.slice(0, l),
            position: {
                x: 120,
                y: 12,
            },
            avatarImageSize: 32,
        }),
            e.setColor("white"),
            e.setFont({
                size: 16,
                family: p.mw,
                weight: 500,
                truncate: o.Kq.Wrap,
            }),
            e.drawText(
                i,
                {
                    x: 120,
                    y: 64,
                    h: 32,
                    w: 260,
                },
                !0,
            );
        let d = E(a, n);
        (0, f.$)({
            canvas: e,
            badges: d,
            startPosition: 120,
            maxWidth: 260,
        });
    },
    y = async (e) => {
        let {
                applicationImageSrc: t,
                entry: n,
                avatarSrcs: r,
                description: i,
                timestamp: a,
                colors: s,
                channelId: c,
            } = e,
            u = n.extra.activity_name,
            d = g(r, t);
        return await (0, l.r)({
            assetsToLoad: d,
            drawImage: (e) =>
                b(e, {
                    timestamp: a,
                    colors: s,
                    description: i,
                    entry: n,
                    numAvatars: r.length,
                }),
            exportConfigs: {
                format: o.z5.CloudUpload,
                quality: 1,
                fileName: "user-reacting-to-".concat(u, ".png").toLowerCase(),
                fileType: "png",
                channelId: c,
            },
        });
    };
