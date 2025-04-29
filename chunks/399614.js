n.d(t, { Z: () => x });
var r = n(255367),
    i = n(73800),
    l = n(399606),
    s = n(481060),
    a = n(710344),
    o = n(734893),
    c = n(8426),
    u = n(969632),
    d = n(922112),
    m = n(388032),
    g = n(773100);
function p(e) {
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
}
function h(e, t) {
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
let f = [],
    x = function (e) {
        let { guildId: t } = e,
            x = (0, l.Wu)([u.Z], () => {
                var e;
                return null != (e = u.Z.getSettings().resourceChannels) ? e : f;
            }),
            b = i.useMemo(() => x.map((e) => h(p({}, e), { id: e.channelId })), [x]),
            { handleDragStart: j, handleDragReset: _, handleDragComplete: v } = (0, a.Z)(b, c.lq),
            O = i.useCallback(
                (e, n) => {
                    let r = u.Z.getSettings();
                    null != r &&
                        ((0, c.r2)(e),
                        (0, c.oo)(t, r).then(() => {
                            (0, c.mM)(t, e.channelId, n);
                        }));
                },
                [t]
            ),
            C = i.useCallback(() => {
                if (null != t)
                    return (0, s.ZDy)(async () => {
                        let { default: e } = await n.e('84725').then(n.bind(n, 462499));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                h(p({}, n), {
                                    guildId: t,
                                    onSave: c.r2,
                                    onIconUpload: O
                                })
                            );
                    });
            }, [t, O]);
        return (0, r.jsxs)('div', {
            className: g.editResources,
            children: [
                x.map((e, n) =>
                    (0, r.jsx)(
                        d.Z,
                        {
                            guildId: t,
                            resourceChannel: e,
                            index: n,
                            onDragStart: j,
                            onDragReset: _,
                            onDragComplete: v
                        },
                        e.channelId
                    )
                ),
                x.length < o.x3 &&
                    (0, r.jsxs)(s.P3F, {
                        className: g.addActionItem,
                        onClick: C,
                        children: [
                            (0, r.jsx)(s.oFk, {
                                size: 'xs',
                                color: 'currentColor'
                            }),
                            (0, r.jsx)(s.Text, {
                                variant: 'text-md/normal',
                                color: 'none',
                                children: m.intl.string(m.t['w9/qGR'])
                            })
                        ]
                    })
            ]
        });
    };
