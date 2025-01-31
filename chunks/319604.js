n.d(t, {
    CR: () => h,
    UU: () => m,
    jE: () => u
}),
    n(627494),
    n(757143);
var l = n(884439),
    a = n(55000),
    i = n(693824),
    r = n(690725),
    o = n(561308),
    s = n(737583),
    c = n(169040),
    d = n(388032);
let u = (e) => {
        let { timestamp: t } = e;
        return [
            {
                iconPath: c.mb,
                text: t
            }
        ];
    },
    m = (e) => {
        var t;
        let n = null === (t = (0, o.PJ)(e, l.N.AGGREGATE_COUNT)) || void 0 === t ? void 0 : t.count;
        return null == n
            ? []
            : [
                  {
                      iconPath: c.eF,
                      text: d.intl.formatToPlainString(d.t.HtifnJ, { count: n })
                  }
              ];
    },
    x = (e) => {
        let { avatarSrc: t, mediaImageSrc: n } = e;
        return {
            AvatarImage: t,
            ...(null != n && { MediaImage: n })
        };
    },
    h = async (e) => {
        let { user: t, channel: n, mediaImageSrc: l, artist: o, description: d, colors: u, badges: m } = e,
            h = x({
                avatarSrc: t.getAvatarURL(n.guild_id, 128),
                mediaImageSrc: l
            }),
            p = o.replaceAll(/[^a-zA-Z0-9 ]/g, '').replaceAll(' ', '-');
        return await (0, r.f)({
            assetsToLoad: h,
            drawImage: (e) => {
                var t, n, l;
                (function (e, t) {
                    let n = t.map((e, t) => ({
                        color: e,
                        stop: t
                    }));
                    e.setSize(
                        {
                            w: c.nx,
                            h: c.bg
                        },
                        4
                    ),
                        e.drawRoundedGradientRect(
                            n,
                            {
                                x: 0,
                                y: c.bg
                            },
                            {
                                x: c.nx,
                                y: 0
                            },
                            {
                                x: 0,
                                y: 0,
                                h: c.bg,
                                w: c.nx
                            },
                            8
                        );
                })(e, u),
                    (t = e).drawRoundedImage(
                        'MediaImage',
                        {
                            x: c.sB,
                            y: c.sB
                        },
                        {
                            w: c.Pu,
                            h: c.Pu
                        },
                        8,
                        { fillMode: i.JU.Contain }
                    ) === i.vP.Failure &&
                        t.drawPath(
                            a.Cv,
                            {
                                x: c.sB,
                                y: c.sB
                            },
                            !0,
                            2 + 2 / 3
                        ),
                    (function (e) {
                        e.drawRoundedImage(
                            'AvatarImage',
                            {
                                x: c.Iq,
                                y: c.sB
                            },
                            {
                                w: c.$S,
                                h: c.$S
                            },
                            50
                        );
                    })(e),
                    (n = e),
                    (l = d),
                    n.setColor('white'),
                    n.setFont({
                        size: 16,
                        family: c.I8,
                        weight: c.Ue,
                        truncate: i.GX.Wrap
                    }),
                    n.drawText(
                        l,
                        {
                            x: c.Iq,
                            y: 64,
                            h: 32,
                            w: c.kC
                        },
                        !0
                    ),
                    (0, s.J)({
                        canvas: e,
                        badges: m,
                        startPosition: c.Iq,
                        maxWidth: c.kC
                    });
            },
            exportConfigs: {
                format: i.kH.CloudUpload,
                quality: 1,
                fileName: 'user-reacting-to-'.concat(p, '.png').toLowerCase(),
                fileType: 'png',
                channelId: n.id
            }
        });
    };
