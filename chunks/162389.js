n.d(t, { Z: () => v });
var i = n(200651),
    l = n(192379),
    s = n(120356),
    a = n.n(s),
    r = n(442837),
    o = n(692547),
    d = n(481060),
    c = n(787014),
    u = n(603211),
    h = n(710344),
    m = n(496675),
    g = n(479099),
    p = n(710352),
    x = n(981631),
    f = n(388032),
    j = n(28772);
function v(e) {
    let { channel: t } = e,
        s = (0, r.e7)([m.Z], () => m.Z.can(x.Plq.MANAGE_CHANNELS, t), [t]),
        u = t.availableTags.length >= p.pC,
        g = t.availableTags.length > 0,
        v = l.useCallback(() => {
            let e = t.availableTags.length >= p.pC;
            s &&
                !e &&
                (0, d.ZDy)(async () => {
                    let { default: e } = await n.e('21971').then(n.bind(n, 201049));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            channelId: t.id,
                            guildId: t.guild_id
                        });
                });
        }, [t, s]),
        N = l.useCallback(
            (e) => {
                s &&
                    (0, d.ZDy)(async () => {
                        let { default: l } = await n.e('21971').then(n.bind(n, 201049));
                        return (n) =>
                            (0, i.jsx)(l, {
                                ...n,
                                channelId: t.id,
                                guildId: t.guild_id,
                                tag: e
                            });
                    });
            },
            [s, t]
        ),
        {
            handleDragStart: b,
            handleDragReset: Z,
            handleDragComplete: T
        } = (0, h.Z)(t.availableTags, (e) => {
            (0, c.pW)({ availableTags: e });
        });
    return (0, i.jsxs)('div', {
        className: j.tags,
        children: [
            g
                ? t.availableTags.map((e) =>
                      (0, i.jsx)(
                          C,
                          {
                              tag: e,
                              availableTags: t.availableTags,
                              canManageChannels: s,
                              onTagClick: N,
                              onDragComplete: T,
                              onDragReset: Z,
                              onDragStart: b
                          },
                          e.id
                      )
                  )
                : null,
            g
                ? (0, i.jsx)(d.P3F, {
                      onClick: v,
                      className: a()(j.addTags, { [j.disabled]: !s || u }),
                      children: (0, i.jsx)(d.qJs, {
                          size: 'custom',
                          'aria-label': f.intl.string(f.t['/jubeH']),
                          color: o.Z.unsafe_rawColors.WHITE_500.css,
                          width: 20,
                          height: 20
                      })
                  })
                : (0, i.jsx)(d.zxk, {
                      disabled: !s,
                      onClick: v,
                      children: f.intl.string(f.t['/jubeH'])
                  })
        ]
    });
}
function C(e) {
    let { tag: t, availableTags: n, canManageChannels: l, onTagClick: s, onDragComplete: r, onDragStart: o, onDragReset: d } = e,
        c = n.findIndex((e) => e.id === t.id),
        {
            drag: h,
            dragSourcePosition: m,
            drop: p,
            setIsDraggable: x
        } = (0, u.Z)({
            type: 'CHANNEL_SETTINGS_FORUM_TAGS',
            index: c,
            optionId: t.id,
            onDragStart: o,
            onDragComplete: r,
            onDragReset: d
        });
    return (0, i.jsx)('div', {
        className: a()(j.container, {
            [j.dropIndicatorBefore]: null != m && c < m,
            [j.dropIndicatorAfter]: null != m && c > m
        }),
        ref: (e) => h(p(e)),
        onMouseEnter: () => x(l),
        onMouseLeave: () => x(!1),
        children: (0, i.jsx)(g.Z, {
            tag: t,
            disabled: !l,
            ariaLabel: f.intl.formatToPlainString(f.t.jhSvBw, { name: t.name }),
            onClick: l ? () => s(t) : void 0
        })
    });
}
