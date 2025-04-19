n.d(t, { Z: () => v });
var r = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(442837),
    o = n(692547),
    c = n(481060),
    d = n(787014),
    u = n(603211),
    h = n(710344),
    g = n(496675),
    m = n(479099),
    p = n(710352),
    f = n(981631),
    x = n(388032),
    j = n(628961);
function b(e) {
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
function N(e, t) {
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
function v(e) {
    let { channel: t } = e,
        l = (0, a.e7)([g.Z], () => g.Z.can(f.Plq.MANAGE_CHANNELS, t), [t]),
        u = t.availableTags.length >= p.pC,
        m = t.availableTags.length > 0,
        v = i.useCallback(() => {
            let e = t.availableTags.length >= p.pC;
            l &&
                !e &&
                (0, c.ZDy)(async () => {
                    let { default: e } = await n.e('21971').then(n.bind(n, 201049));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            N(b({}, n), {
                                channelId: t.id,
                                guildId: t.guild_id
                            })
                        );
                });
        }, [t, l]),
        C = i.useCallback(
            (e) => {
                l &&
                    (0, c.ZDy)(async () => {
                        let { default: i } = await n.e('21971').then(n.bind(n, 201049));
                        return (n) =>
                            (0, r.jsx)(
                                i,
                                N(b({}, n), {
                                    channelId: t.id,
                                    guildId: t.guild_id,
                                    tag: e
                                })
                            );
                    });
            },
            [l, t]
        ),
        {
            handleDragStart: S,
            handleDragReset: w,
            handleDragComplete: Z
        } = (0, h.Z)(t.availableTags, (e) => {
            (0, d.pW)({ availableTags: e });
        });
    return (0, r.jsxs)('div', {
        className: j.tags,
        children: [
            m
                ? t.availableTags.map((e) =>
                      (0, r.jsx)(
                          y,
                          {
                              tag: e,
                              availableTags: t.availableTags,
                              canManageChannels: l,
                              onTagClick: C,
                              onDragComplete: Z,
                              onDragReset: w,
                              onDragStart: S
                          },
                          e.id
                      )
                  )
                : null,
            m
                ? (0, r.jsx)(c.P3F, {
                      onClick: v,
                      className: s()(j.addTags, { [j.disabled]: !l || u }),
                      children: (0, r.jsx)(c.qJs, {
                          size: 'custom',
                          'aria-label': x.NW.string(x.t['/jubeH']),
                          color: o.Z.unsafe_rawColors.WHITE_500.css,
                          width: 20,
                          height: 20
                      })
                  })
                : (0, r.jsx)(c.zxk, {
                      disabled: !l,
                      onClick: v,
                      children: x.NW.string(x.t['/jubeH'])
                  })
        ]
    });
}
function y(e) {
    let { tag: t, availableTags: n, canManageChannels: i, onTagClick: l, onDragComplete: a, onDragStart: o, onDragReset: c } = e,
        d = n.findIndex((e) => e.id === t.id),
        {
            drag: h,
            dragSourcePosition: g,
            drop: p,
            setIsDraggable: f
        } = (0, u.Z)({
            type: 'CHANNEL_SETTINGS_FORUM_TAGS',
            index: d,
            optionId: t.id,
            onDragStart: o,
            onDragComplete: a,
            onDragReset: c
        });
    return (0, r.jsx)('div', {
        className: s()(j.container, {
            [j.dropIndicatorBefore]: null != g && d < g,
            [j.dropIndicatorAfter]: null != g && d > g
        }),
        ref: (e) => {
            h(p(e));
        },
        onMouseEnter: () => f(i),
        onMouseLeave: () => f(!1),
        children: (0, r.jsx)(m.Z, {
            tag: t,
            disabled: !i,
            ariaLabel: x.NW.formatToPlainString(x.t.jhSvBw, { name: t.name }),
            onClick: i ? () => l(t) : void 0
        })
    });
}
