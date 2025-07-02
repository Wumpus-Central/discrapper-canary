t.d(n, { r: () => m });
var r = t(255367),
    l = t(73800),
    c = t(481060),
    i = t(239091),
    o = t(794295),
    a = t(782568),
    s = t(364640),
    u = t(124072),
    d = t(198620),
    h = t(823379),
    f = t(312539),
    j = t(606629);
function m(e) {
    let { type: n, value: t, children: l } = e;
    switch (n) {
        case 'normal':
            return (0, r.jsx)(o.Z, {
                title: t.title,
                href: t.url,
                children: (0, r.jsx)('span', { children: l })
            });
        case 'mention':
            switch (t.type) {
                case 'channel':
                case 'message':
                    let {
                            value: { guild_id: c, channel_id: i }
                        } = t,
                        a = 'message_id' in t.value ? t.value.message_id : void 0;
                    return (0, r.jsx)(f.d, {
                        channelId: i,
                        guildId: c,
                        messageId: a
                    });
                case 'attachment':
                    let {
                        value: { domain: s, ephemeral: u, channel_id: d, attachment_id: j, name: m }
                    } = t;
                    return (0, r.jsx)(p, {
                        domain: s,
                        ephemeral: u,
                        channelId: d,
                        attachmentId: j,
                        name: m
                    });
                default:
                    (0, h.vE)(t);
            }
            break;
        default:
            (0, h.vE)(n);
    }
}
function p(e) {
    let { domain: n, ephemeral: o, channelId: h, attachmentId: f, name: m } = e,
        p = 'https://'
            .concat(n, '/')
            .concat(o ? 'ephemeral-attachments' : 'attachments', '/')
            .concat(h, '/')
            .concat(f, '/')
            .concat(m),
        g = l.useCallback(async () => {
            let e = await (0, d.B_)(p);
            (s.Z.trackLinkClicked(e), (0, a.Z)(e));
        }, [p]),
        v = l.useCallback(
            (e) => {
                (0, i.jW)(e, async () => {
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
                                    attachmentUrl: p,
                                    attachmentName: m
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
            [m, p]
        );
    return (0, r.jsxs)(u.Z, {
        role: 'link',
        href: p,
        onClick: g,
        onContextMenu: v,
        className: 'attachmentLink',
        children: [
            (0, r.jsx)(c.Ujz, {
                size: 'xs',
                className: j.icon,
                color: 'currentColor'
            }),
            m
        ]
    });
}
