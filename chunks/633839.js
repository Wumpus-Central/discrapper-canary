"use strict";
n.d(t, { A: () => C });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(827734),
    d = n(192308),
    c = n(939249),
    u = n(307301),
    h = n(821609),
    g = n(435183),
    m = n(599119),
    x = n(219504),
    p = n(576705),
    A = n(376310);
n(253913);
var f = n(652215),
    b = n(985018),
    _ = n(231935);
function C(e) {
    let { channel: t } = e,
        s = (0, r.bG)([p.A], () => p.A.can(f.xBc.MANAGE_CHANNELS, t), [t]),
        m = t.availableTags.length >= 20,
        A = t.availableTags.length > 0,
        C = i.useCallback(() => {
            let e = t.availableTags.length >= 20;
            s &&
                !e &&
                (0, d.openModalLazy)(async () => {
                    let { default: e } = await n.e("47326").then(n.bind(n, 950989));
                    return (n) => (0, l.jsx)(e, { ...n, channelId: t.id, guildId: t.guild_id });
                });
        }, [t, s]),
        v = i.useCallback(
            (e) => {
                s &&
                    (0, d.openModalLazy)(async () => {
                        let { default: i } = await n.e("47326").then(n.bind(n, 950989));
                        return (n) => (0, l.jsx)(i, { ...n, channelId: t.id, guildId: t.guild_id, tag: e });
                    });
            },
            [s, t],
        ),
        {
            handleDragStart: N,
            handleDragReset: S,
            handleDragComplete: E,
        } = (0, x.A)(t.availableTags, (e) => {
            (0, g.fy)({ availableTags: e });
        });
    return (0, l.jsxs)("div", {
        className: _._A,
        children: [
            A
                ? t.availableTags.map((e) =>
                      (0, l.jsx)(
                          j,
                          {
                              tag: e,
                              availableTags: t.availableTags,
                              canManageChannels: s,
                              onTagClick: v,
                              onDragComplete: E,
                              onDragReset: S,
                              onDragStart: N,
                          },
                          e.id,
                      ),
                  )
                : null,
            A
                ? (0, l.jsx)(c.D, {
                      onClick: C,
                      className: a()(_.JE, { [_.r9]: !s || m }),
                      children: (0, l.jsx)(u.j, {
                          size: "custom",
                          "aria-label": b.intl.string(b.t["/jubeD"]),
                          color: o.A.unsafe_rawColors.WHITE.css,
                          width: 20,
                          height: 20,
                      }),
                  })
                : (0, l.jsx)(h.$, { variant: "primary", text: b.intl.string(b.t["/jubeD"]), disabled: !s, onClick: C }),
        ],
    });
}
function j(e) {
    let {
            tag: t,
            availableTags: n,
            canManageChannels: i,
            onTagClick: s,
            onDragComplete: r,
            onDragStart: o,
            onDragReset: d,
        } = e,
        c = n.findIndex((e) => e.id === t.id),
        {
            drag: u,
            dragSourcePosition: h,
            drop: g,
            setIsDraggable: x,
        } = (0, m.A)({
            type: "CHANNEL_SETTINGS_FORUM_TAGS",
            index: c,
            optionId: t.id,
            onDragStart: o,
            onDragComplete: r,
            onDragReset: d,
        });
    return (0, l.jsx)("div", {
        className: a()(_.kL, { [_.A]: null != h && c < h, [_.Ze]: null != h && c > h }),
        ref: (e) => {
            u(g(e));
        },
        onMouseEnter: () => x(i),
        onMouseLeave: () => x(!1),
        children: (0, l.jsx)(A.A, {
            tag: t,
            disabled: !i,
            ariaLabel: b.intl.formatToPlainString(b.t.jhSvB9, { name: t.name }),
            onClick: i ? () => s(t) : void 0,
        }),
    });
}
