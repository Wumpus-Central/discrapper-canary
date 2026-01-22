n.d(t, {
    A: () => A,
});
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(554146),
    a = n(397927),
    s = n(442433),
    o = n(826673),
    c = n(508654),
    u = n(222823),
    d = n(543465),
    f = n(652793),
    p = n(790782),
    h = n(985018),
    b = n(811094);

function g(e) {
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

function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function A(e) {
    let { guild: t, selected: A } = e,
        { hasUnread: y, mentionCount: O } = (0, l.cf)(
            [u.Ay],
            () => ({
                hasUnread: u.Ay.hasUnread(t.id, p.P.GUILD_EVENT),
                mentionCount: u.Ay.getMentionCount(t.id, p.P.GUILD_EVENT),
            }),
            [t.id],
        ),
        j = (0, l.bG)([d.Ay], () => d.Ay.isMuteScheduledEventsEnabled(t.id));
    async function v() {
        await (0, a.mMO)(async () => {
            let { default: e } = await Promise.all([n.e("26589"), n.e("7453"), n.e("90041")]).then(n.bind(n, 926956));
            return (n) =>
                (0, r.jsx)(
                    e,
                    m(g({}, n), {
                        guildId: t.id,
                    }),
                );
        }),
            (0, o.Dr)(i.M.GUILD_HEADER_EVENT_UPSELL);
    }
    let x = (0, c.Ay)(t.id),
        E =
            x.length > 0
                ? h.intl.formatToPlainString(h.t.IBdqSu, {
                      number: x.length,
                  })
                : h.intl.string(h.t.tlopTM);
    return (0, r.jsx)(f.G, {
        id: "upcoming-events-".concat(t.id),
        renderIcon: (e) =>
            (0, r.jsx)(a.CTc, {
                size: "md",
                color: "currentColor",
                className: e,
            }),
        text: E,
        selected: A,
        onClick: v,
        onContextMenu: (e) => {
            (0, s.L3)(e, async () => {
                let { default: e } = await n.e("71742").then(n.bind(n, 502029));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        m(g({}, n), {
                            guildId: t.id,
                        }),
                    );
            });
        },
        showUnread: y && !j,
        trailing:
            !j && O > 0
                ? (0, r.jsx)(a.hVq, {
                      className: b.Do,
                      disableColor: !0,
                      count: O,
                  })
                : null,
    });
}
