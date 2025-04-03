n.d(t, {
    CR: () => h,
    UU: () => m,
    jE: () => d
}),
    n(266796),
    n(627494),
    n(757143),
    n(301563);
var r = n(884439),
    a = n(55000),
    l = n(693824),
    i = n(690725),
    o = n(561308),
    s = n(737583),
    c = n(169040),
    u = n(388032);
let d = (e) => {
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
        let n = null == (t = (0, o.PJ)(e, r.N.AGGREGATE_COUNT)) ? void 0 : t.count;
        return null == n
            ? []
            : [
                  {
                      iconPath: c.eF,
                      text: u.NW.formatToPlainString(u.t.HtifnJ, { count: n })
                  }
              ];
    },
    p = (e) => {
        let { avatarSrc: t, mediaImageSrc: n } = e;
        return (function (e) {
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
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })({ AvatarImage: t }, null != n && { MediaImage: n });
    },
    h = async (e) => {
        let { user: t, channel: n, mediaImageSrc: r, artist: o, description: u, colors: d, badges: m } = e,
            h = p({
                avatarSrc: t.getAvatarURL(n.guild_id, 128),
                mediaImageSrc: r
            }),
            f = o.replaceAll(/[^a-zA-Z0-9 ]/g, '').replaceAll(' ', '-');
        return await (0, i.f)({
            assetsToLoad: h,
            drawImage: (e) => {
                var t, n, r;
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
                })(e, d),
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
                        { fillMode: l.JU.Contain }
                    ) === l.vP.Failure &&
                        t.drawPath(
                            a.Cv,
                            {
                                x: c.sB,
                                y: c.sB
                            },
                            !0,
                            2 + 2 / 3
                        ),
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
                    ),
                    (n = e),
                    (r = u),
                    n.setColor('white'),
                    n.setFont({
                        size: 16,
                        family: c.I8,
                        weight: c.Ue,
                        truncate: l.GX.Wrap
                    }),
                    n.drawText(
                        r,
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
                format: l.kH.CloudUpload,
                quality: 1,
                fileName: 'user-reacting-to-'.concat(f, '.png').toLowerCase(),
                fileType: 'png',
                channelId: n.id
            }
        });
    };
