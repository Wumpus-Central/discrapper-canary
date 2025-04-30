n.d(t, {
    CR: () => m,
    UU: () => p,
    jE: () => _
}),
    n(953529),
    n(804061),
    n(704826),
    n(35282);
var r = n(884439),
    i = n(55000),
    a = n(693824),
    o = n(690725),
    s = n(561308),
    l = n(737583),
    c = n(169040),
    u = n(388032);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
let _ = (e) => {
        let { timestamp: t } = e;
        return [
            {
                iconPath: c.mb,
                text: t
            }
        ];
    },
    p = (e) => {
        var t;
        let n = null == (t = (0, s.PJ)(e, r.N.AGGREGATE_COUNT)) ? void 0 : t.count;
        return null == n
            ? []
            : [
                  {
                      iconPath: c.eF,
                      text: u.intl.formatToPlainString(u.t.HtifnJ, { count: n })
                  }
              ];
    },
    h = (e) => {
        let { avatarSrc: t, mediaImageSrc: n } = e;
        return f({ AvatarImage: t }, null != n && { MediaImage: n });
    },
    m = async (e) => {
        let { user: t, channel: n, mediaImageSrc: r, artist: i, description: s, colors: u, badges: d } = e,
            f = h({
                avatarSrc: t.getAvatarURL(n.guild_id, 128),
                mediaImageSrc: r
            }),
            _ = i.replaceAll(/[^a-zA-Z0-9 ]/g, '').replaceAll(' ', '-');
        return await (0, o.f)({
            assetsToLoad: f,
            drawImage: (e) => {
                y(e, u),
                    b(e),
                    E(e),
                    g(e, s),
                    (0, l.J)({
                        canvas: e,
                        badges: d,
                        startPosition: c.Iq,
                        maxWidth: c.kC
                    });
            },
            exportConfigs: {
                format: a.kH.CloudUpload,
                quality: 1,
                fileName: 'user-reacting-to-'.concat(_, '.png').toLowerCase(),
                fileType: 'png',
                channelId: n.id
            }
        });
    };
function g(e, t) {
    e.setColor('white'),
        e.setFont({
            size: 16,
            family: c.I8,
            weight: c.Ue,
            truncate: a.GX.Wrap
        }),
        e.drawText(
            t,
            {
                x: c.Iq,
                y: 64,
                h: 32,
                w: c.kC
            },
            !0
        );
}
function E(e) {
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
}
function b(e) {
    e.drawRoundedImage(
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
        { fillMode: a.JU.Contain }
    ) === a.vP.Failure &&
        e.drawPath(
            i.Cv,
            {
                x: c.sB,
                y: c.sB
            },
            !0,
            2 + 2 / 3
        );
}
function y(e, t) {
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
}
