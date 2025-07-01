t.d(n, { r: () => b });
var r = t(255367),
    l = t(73800),
    i = t(481060),
    c = t(239091),
    o = t(794295),
    u = t(782568),
    a = t(364640),
    s = t(124072),
    d = t(198620),
    f = t(823379),
    _ = t(312539),
    h = t(606629);
function b(e) {
    let { type: n, value: t, children: l } = e;
    switch (n) {
        case 'normal':
            return (0, r.jsx)(o.Z, {
                title: t.title,
                href: t.url,
                children: l
            });
        case 'mention':
            switch (t.type) {
                case 'channel':
                case 'message':
                    let {
                            value: { guild_id: i, channel_id: c }
                        } = t,
                        u = 'message_id' in t.value ? t.value.message_id : void 0;
                    return (0, r.jsx)(_.d, {
                        channelId: c,
                        guildId: i,
                        messageId: u
                    });
                case 'attachment':
                    let {
                        value: { domain: a, ephemeral: s, channel_id: d, attachment_id: h, name: b }
                    } = t;
                    return (0, r.jsx)(g, {
                        domain: a,
                        ephemeral: s,
                        channelId: d,
                        attachmentId: h,
                        name: b
                    });
                default:
                    (0, f.vE)(t);
            }
            break;
        default:
            (0, f.vE)(n);
    }
}
function g(e) {
    let { domain: n, ephemeral: o, channelId: f, attachmentId: _, name: b } = e,
        g = 'https://'
            .concat(n, '/')
            .concat(o ? 'ephemeral-attachments' : 'attachments', '/')
            .concat(f, '/')
            .concat(_, '/')
            .concat(b),
        m = l.useCallback(async () => {
            let e = await (0, d.B_)(g);
            (a.Z.trackLinkClicked(e), (0, u.Z)(e));
        }, [g]),
        y = l.useCallback(
            (e) => {
                (0, c.jW)(e, async () => {
                    let { default: e } = await t.e('98466').then(t.bind(t, 151578));
                    return (n) => {
                        var t, l;
                        return (0, r.jsx)(
                            e,
                            ((t = (function (e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = null != arguments[n] ? arguments[n] : {},
                                        r = Object.keys(t);
                                    ('function' == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(t).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                            })
                                        )),
                                        r.forEach(function (n) {
                                            var r;
                                            ((r = t[n]),
                                                n in e
                                                    ? Object.defineProperty(e, n, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[n] = r));
                                        }));
                                }
                                return e;
                            })({}, n)),
                            (l = l =
                                {
                                    attachmentUrl: g,
                                    attachmentName: b
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l))
                                : (function (e, n) {
                                      var t = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          t.push.apply(t, r);
                                      }
                                      return t;
                                  })(Object(l)).forEach(function (e) {
                                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e));
                                  }),
                            t)
                        );
                    };
                });
            },
            [b, g]
        );
    return (0, r.jsxs)(s.Z, {
        role: 'link',
        href: g,
        onClick: m,
        onContextMenu: y,
        className: 'attachmentLink',
        children: [
            (0, r.jsx)(i.Ujz, {
                size: 'xs',
                className: h.icon,
                color: 'currentColor'
            }),
            b
        ]
    });
}
