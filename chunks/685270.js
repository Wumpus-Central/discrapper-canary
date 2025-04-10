n.d(t, { B: () => f }), n(539854), n(953529);
var r = n(55000),
    i = n(693824),
    o = n(690725),
    a = n(737583),
    s = n(169040);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            });
    }
    return e;
}
let u = (e, t, n) => c({ AvatarImage: e }, null != t && { MediaImage: t }, null != n && { ApplicationImage: n }),
    d = (e, t) => {
        let n = [
            {
                iconPath: s.i6,
                text: e
            }
        ];
        return (
            null != t &&
                n.push({
                    iconPath: s.fj,
                    text: t
                }),
            n
        );
    },
    f = async (e) => {
        let { mediaImageSrc: t, entry: n, avatarSrc: l, description: c, timestamp: f, episodeDescription: _, colors: p, channelId: h } = e,
            m = n.extra.media_title,
            g = u(l, t),
            E = (e) => {
                let t = p.map((e, t) => ({
                    color: e,
                    stop: t
                }));
                e.setSize(
                    {
                        w: s.nx,
                        h: s.bg
                    },
                    4
                ),
                    e.drawRoundedGradientRect(
                        t,
                        {
                            x: 0,
                            y: s.bg
                        },
                        {
                            x: s.nx,
                            y: 0
                        },
                        {
                            x: 0,
                            y: 0,
                            h: s.bg,
                            w: s.nx
                        },
                        8
                    ),
                    e.setColor('white');
                let n = e.drawRoundedImage(
                    'MediaImage',
                    {
                        x: s.sB,
                        y: s.sB
                    },
                    {
                        w: s.Pu,
                        h: s.Pu
                    },
                    8,
                    { fillMode: i.JU.Contain }
                );
                n === i.vP.Failure &&
                    (n = e.drawRoundedImage(
                        'ApplicationImage',
                        {
                            x: s.sB,
                            y: s.sB
                        },
                        {
                            w: s.Pu,
                            h: s.Pu
                        },
                        8
                    )),
                    n === i.vP.Failure &&
                        e.drawPath(
                            r.Cv,
                            {
                                x: s.sB,
                                y: s.sB
                            },
                            !0,
                            2 + 2 / 3
                        ),
                    e.drawRoundedImage(
                        'AvatarImage',
                        {
                            x: s.Iq,
                            y: s.sB
                        },
                        {
                            w: s.$S,
                            h: s.$S
                        },
                        50
                    ),
                    e.setFont({
                        size: 16,
                        family: s.I8,
                        weight: s.Ue,
                        truncate: i.GX.Wrap
                    }),
                    e.drawText(
                        c,
                        {
                            x: s.Iq,
                            y: 64,
                            h: 32,
                            w: s.kC
                        },
                        !0
                    );
                let o = d(f, _);
                (0, a.J)({
                    canvas: e,
                    badges: o,
                    startPosition: s.Iq,
                    maxWidth: s.kC
                });
            };
        return await (0, o.f)({
            assetsToLoad: g,
            drawImage: E,
            exportConfigs: {
                format: i.kH.CloudUpload,
                quality: 1,
                fileName: 'user-reacting-to-'.concat(m, '.png').toLowerCase(),
                fileType: 'png',
                channelId: h
            }
        });
    };
