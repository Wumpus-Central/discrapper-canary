n.d(t, {
    A: () => h,
});
var r = n(627968),
    i = n(64700),
    l = n(342494),
    a = n(397927),
    s = n(58149),
    o = n(954571),
    c = n(975571),
    u = n(652215),
    d = n(49999),
    p = n(985018);

function f(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function h(e) {
    let { guildId: t, markAsDismissed: h, renderTargetElement: A } = e,
        g = {
            text: p.intl.string(p.t.JzJpg4),
            onClick: () => {
                o.default.track(u.HAw.MEDIA_CHANNEL_UPSELL_CLICKED, f({}, (0, s.H$)(t))),
                    h(d.i.PRIMARY),
                    (0, a.mMO)(async () => {
                        let { default: e } = await Promise.all([n.e("64233"), n.e("9743")]).then(n.bind(n, 409200));
                        return (n) => {
                            var i, l;
                            return (0, r.jsx)(
                                e,
                                ((i = f({}, n)),
                                (l = l =
                                    {
                                        channelType: u.rbe.GUILD_MEDIA,
                                        guildId: t,
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(l)).forEach(function (e) {
                                          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                                      }),
                                i),
                            );
                        };
                    });
            },
            variant: "primary",
        },
        m = i.useRef(null);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                ref: m,
                children: A(),
            }),
            (0, r.jsx)(l.HZ, {
                title: p.intl.string(p.t.fW7UqM),
                body: p.intl.string(p.t["yQ0X+T"]),
                position: "bottom",
                caretConfig: {
                    align: "center",
                },
                assetUrl: "https://cdn.discordapp.com/assets/media_channel/media_channel_upsell_demo.mp4",
                action: g,
                textLink: {
                    link: c.A.getCreatorSupportArticleURL(u.MVz.MEDIA_CHANNEL),
                    text: p.intl.string(p.t.w4DutA),
                },
                targetElementRef: m,
                onRequestClose: () => h(d.i.DISMISS),
            }),
        ],
    });
}
