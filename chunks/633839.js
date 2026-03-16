"use strict";
n.d(t, { A: () => f });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(827734),
    d = n(397927),
    c = n(435183),
    u = n(599119),
    h = n(219504),
    g = n(576705),
    m = n(376310);
n(253913);
var x = n(652215),
    A = n(985018),
    p = n(57046);
function f(e) {
    let { channel: t } = e,
        s = (0, r.bG)([g.A], () => g.A.can(x.xBc.MANAGE_CHANNELS, t), [t]),
        u = t.availableTags.length >= 20,
        m = t.availableTags.length > 0,
        f = i.useCallback(() => {
            let e = t.availableTags.length >= 20;
            s &&
                !e &&
                (0, d.mMO)(async () => {
                    let { default: e } = await n.e("47326").then(n.bind(n, 950989));
                    return (n) => (0, l.jsx)(e, { ...n, channelId: t.id, guildId: t.guild_id });
                });
        }, [t, s]),
        C = i.useCallback(
            (e) => {
                s &&
                    (0, d.mMO)(async () => {
                        let { default: i } = await n.e("47326").then(n.bind(n, 950989));
                        return (n) => (0, l.jsx)(i, { ...n, channelId: t.id, guildId: t.guild_id, tag: e });
                    });
            },
            [s, t],
        ),
        {
            handleDragStart: j,
            handleDragReset: v,
            handleDragComplete: N,
        } = (0, h.A)(t.availableTags, (e) => {
            (0, c.fy)({ availableTags: e });
        });
    return (0, l.jsxs)("div", {
        className: p._A,
        children: [
            m
                ? t.availableTags.map((e) =>
                      (0, l.jsx)(
                          b,
                          {
                              tag: e,
                              availableTags: t.availableTags,
                              canManageChannels: s,
                              onTagClick: C,
                              onDragComplete: N,
                              onDragReset: v,
                              onDragStart: j,
                          },
                          e.id,
                      ),
                  )
                : null,
            m
                ? (0, l.jsx)(d.DUT, {
                      onClick: f,
                      className: a()(p.JE, { [p.r9]: !s || u }),
                      children: (0, l.jsx)(d.j96, {
                          size: "custom",
                          "aria-label": A.intl.string(A.t["/jubeD"]),
                          color: o.A.unsafe_rawColors.WHITE.css,
                          width: 20,
                          height: 20,
                      }),
                  })
                : (0, l.jsx)(d.Button, {
                      variant: "primary",
                      text: A.intl.string(A.t["/jubeD"]),
                      disabled: !s,
                      onClick: f,
                  }),
        ],
    });
}
function b(e) {
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
            drag: h,
            dragSourcePosition: g,
            drop: x,
            setIsDraggable: f,
        } = (0, u.A)({
            type: "CHANNEL_SETTINGS_FORUM_TAGS",
            index: c,
            optionId: t.id,
            onDragStart: o,
            onDragComplete: r,
            onDragReset: d,
        });
    return (0, l.jsx)("div", {
        className: a()(p.kL, { [p.A]: null != g && c < g, [p.Ze]: null != g && c > g }),
        ref: (e) => {
            h(x(e));
        },
        onMouseEnter: () => f(i),
        onMouseLeave: () => f(!1),
        children: (0, l.jsx)(m.A, {
            tag: t,
            disabled: !i,
            ariaLabel: A.intl.formatToPlainString(A.t.jhSvB9, { name: t.name }),
            onClick: i ? () => s(t) : void 0,
        }),
    });
}
