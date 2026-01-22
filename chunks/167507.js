t.d(n, {
    N: () => p,
});
var r = t(627968),
    l = t(64700),
    c = t(397927),
    a = t(442433),
    i = t(9578),
    s = t(975807),
    o = t(235393),
    u = t(332173),
    d = t(202803),
    h = t(403362),
    m = t(62849),
    j = t(800344);

function p(e) {
    let { type: n, value: t, children: l } = e;
    switch (n) {
        case "normal":
            return (0, r.jsx)(i.A, {
                title: t.title,
                href: t.url,
                children: (0, r.jsx)("span", {
                    children: l,
                }),
            });
        case "mention":
            switch (t.type) {
                case "channel":
                case "message":
                    let {
                            value: { guild_id: c, channel_id: a },
                        } = t,
                        s = "message_id" in t.value ? t.value.message_id : void 0;
                    return (0, r.jsx)(m.A, {
                        channelId: a,
                        guildId: c,
                        messageId: s,
                    });
                case "attachment":
                    let {
                        value: { domain: o, ephemeral: u, channel_id: d, attachment_id: j, name: p },
                    } = t;
                    return (0, r.jsx)(f, {
                        domain: o,
                        ephemeral: u,
                        channelId: d,
                        attachmentId: j,
                        name: p,
                    });
                default:
                    (0, h.xb)(t);
            }
            break;
        default:
            (0, h.xb)(n);
    }
}

function f(e) {
    let { domain: n, ephemeral: i, channelId: h, attachmentId: m, name: p } = e,
        f = "https://"
            .concat(n, "/")
            .concat(i ? "ephemeral-attachments" : "attachments", "/")
            .concat(h, "/")
            .concat(m, "/")
            .concat(p),
        x = l.useCallback(async () => {
            let e = await (0, d.AN)(f);
            o.A.trackLinkClicked(e), (0, s.A)(e);
        }, [f]),
        g = l.useCallback(
            (e) => {
                (0, a.L3)(e, async () => {
                    let { default: e } = await t.e("62529").then(t.bind(t, 740024));
                    return (n) => {
                        var t, l;
                        return (0, r.jsx)(
                            e,
                            ((t = (function (e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = null != arguments[n] ? arguments[n] : {},
                                        r = Object.keys(t);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(t).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                            }),
                                        )),
                                        r.forEach(function (n) {
                                            var r;
                                            (r = t[n]),
                                                n in e
                                                    ? Object.defineProperty(e, n, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (e[n] = r);
                                        });
                                }
                                return e;
                            })({}, n)),
                            (l = l =
                                {
                                    attachmentUrl: f,
                                    attachmentName: p,
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
                            t),
                        );
                    };
                });
            },
            [p, f],
        );
    return (0, r.jsxs)(u.A, {
        role: "link",
        href: f,
        onClick: x,
        onContextMenu: g,
        className: "attachmentLink",
        children: [
            (0, r.jsx)(c.PtA, {
                size: "xs",
                className: j.Kk,
                color: "currentColor",
            }),
            p,
        ],
    });
}
