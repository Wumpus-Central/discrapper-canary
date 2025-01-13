n.d(t, {
    B: function () {
        return c;
    }
}),
    n(653041);
var l = n(55000),
    a = n(693824),
    i = n(690725),
    r = n(737583),
    o = n(169040);
let s = (e, t, n) => ({
        AvatarImage: e,
        ...(null != t && { MediaImage: t }),
        ...(null != n && { ApplicationImage: n })
    }),
    u = (e, t) => {
        let n = [
            {
                iconPath: o.i6,
                text: e
            }
        ];
        return (
            null != t &&
                n.push({
                    iconPath: o.fj,
                    text: t
                }),
            n
        );
    },
    c = async (e) => {
        let { mediaImageSrc: t, entry: n, avatarSrc: c, description: d, timestamp: m, episodeDescription: x, colors: h, channelId: p } = e,
            C = n.extra.media_title,
            v = s(c, t);
        return await (0, i.f)({
            assetsToLoad: v,
            drawImage: (e) => {
                let t = h.map((e, t) => ({
                    color: e,
                    stop: t
                }));
                e.setSize(
                    {
                        w: o.nx,
                        h: o.bg
                    },
                    4
                ),
                    e.drawRoundedGradientRect(
                        t,
                        {
                            x: 0,
                            y: o.bg
                        },
                        {
                            x: o.nx,
                            y: 0
                        },
                        {
                            x: 0,
                            y: 0,
                            h: o.bg,
                            w: o.nx
                        },
                        8
                    ),
                    e.setColor('white');
                let n = e.drawRoundedImage(
                    'MediaImage',
                    {
                        x: o.sB,
                        y: o.sB
                    },
                    {
                        w: o.Pu,
                        h: o.Pu
                    },
                    8,
                    { fillMode: a.JU.Contain }
                );
                n === a.vP.Failure &&
                    (n = e.drawRoundedImage(
                        'ApplicationImage',
                        {
                            x: o.sB,
                            y: o.sB
                        },
                        {
                            w: o.Pu,
                            h: o.Pu
                        },
                        8
                    )),
                    n === a.vP.Failure &&
                        e.drawPath(
                            l.Cv,
                            {
                                x: o.sB,
                                y: o.sB
                            },
                            !0,
                            2 + 2 / 3
                        ),
                    e.drawRoundedImage(
                        'AvatarImage',
                        {
                            x: o.Iq,
                            y: o.sB
                        },
                        {
                            w: o.$S,
                            h: o.$S
                        },
                        50
                    ),
                    e.setFont({
                        size: 16,
                        family: o.I8,
                        weight: o.Ue,
                        truncate: a.GX.Wrap
                    }),
                    e.drawText(
                        d,
                        {
                            x: o.Iq,
                            y: 64,
                            h: 32,
                            w: o.kC
                        },
                        !0
                    );
                let i = u(m, x);
                (0, r.J)({
                    canvas: e,
                    badges: i,
                    startPosition: o.Iq,
                    maxWidth: o.kC
                });
            },
            exportConfigs: {
                format: a.kH.CloudUpload,
                quality: 1,
                fileName: 'user-reacting-to-'.concat(C, '.png').toLowerCase(),
                fileType: 'png',
                channelId: p
            }
        });
    };
