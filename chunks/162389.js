n.d(t, { Z: () => y });
var i = n(54381),
    l = n(473749),
    r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(692547),
    c = n(481060),
    d = n(787014),
    u = n(603211),
    h = n(710344),
    g = n(496675),
    m = n(479099),
    f = n(710352),
    p = n(981631),
    b = n(388032),
    x = n(101453);
function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function y(e) {
    let { channel: t } = e,
        r = (0, s.e7)([g.Z], () => g.Z.can(p.Plq.MANAGE_CHANNELS, t), [t]),
        u = t.availableTags.length >= f.pC,
        m = t.availableTags.length > 0,
        y = l.useCallback(() => {
            let e = t.availableTags.length >= f.pC;
            r &&
                !e &&
                (0, c.ZDy)(async () => {
                    let { default: e } = await n.e("21971").then(n.bind(n, 201049));
                    return (n) =>
                        (0, i.jsx)(
                            e,
                            v(j({}, n), {
                                channelId: t.id,
                                guildId: t.guild_id,
                            }),
                        );
                });
        }, [t, r]),
        O = l.useCallback(
            (e) => {
                r &&
                    (0, c.ZDy)(async () => {
                        let { default: l } = await n.e("21971").then(n.bind(n, 201049));
                        return (n) =>
                            (0, i.jsx)(
                                l,
                                v(j({}, n), {
                                    channelId: t.id,
                                    guildId: t.guild_id,
                                    tag: e,
                                }),
                            );
                    });
            },
            [r, t],
        ),
        {
            handleDragStart: Z,
            handleDragReset: S,
            handleDragComplete: N,
        } = (0, h.Z)(t.availableTags, (e) => {
            (0, d.pW)({ availableTags: e });
        });
    return (0, i.jsxs)("div", {
        className: x.tags,
        children: [
            m
                ? t.availableTags.map((e) =>
                      (0, i.jsx)(
                          C,
                          {
                              tag: e,
                              availableTags: t.availableTags,
                              canManageChannels: r,
                              onTagClick: O,
                              onDragComplete: N,
                              onDragReset: S,
                              onDragStart: Z,
                          },
                          e.id,
                      ),
                  )
                : null,
            m
                ? (0, i.jsx)(c.P3F, {
                      onClick: y,
                      className: a()(x.addTags, { [x.disabled]: !r || u }),
                      children: (0, i.jsx)(c.qJs, {
                          size: "custom",
                          "aria-label": b.intl.string(b.t["/jubeD"]),
                          color: o.Z.unsafe_rawColors.WHITE_500.css,
                          width: 20,
                          height: 20,
                      }),
                  })
                : (0, i.jsx)(c.Button, {
                      variant: "primary",
                      text: b.intl.string(b.t["/jubeD"]),
                      disabled: !r,
                      onClick: y,
                  }),
        ],
    });
}
function C(e) {
    let {
            tag: t,
            availableTags: n,
            canManageChannels: l,
            onTagClick: r,
            onDragComplete: s,
            onDragStart: o,
            onDragReset: c,
        } = e,
        d = n.findIndex((e) => e.id === t.id),
        {
            drag: h,
            dragSourcePosition: g,
            drop: f,
            setIsDraggable: p,
        } = (0, u.Z)({
            type: "CHANNEL_SETTINGS_FORUM_TAGS",
            index: d,
            optionId: t.id,
            onDragStart: o,
            onDragComplete: s,
            onDragReset: c,
        });
    return (0, i.jsx)("div", {
        className: a()(x.container, {
            [x.dropIndicatorBefore]: null != g && d < g,
            [x.dropIndicatorAfter]: null != g && d > g,
        }),
        ref: (e) => {
            h(f(e));
        },
        onMouseEnter: () => p(l),
        onMouseLeave: () => p(!1),
        children: (0, i.jsx)(m.Z, {
            tag: t,
            disabled: !l,
            ariaLabel: b.intl.formatToPlainString(b.t.jhSvB9, { name: t.name }),
            onClick: l ? () => r(t) : void 0,
        }),
    });
}
