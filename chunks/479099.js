n.d(t, {
    Z: () => I,
    f: () => S
}),
    n(47120);
var i,
    l = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    o = n(91192),
    d = n(442837),
    u = n(481060),
    c = n(239091),
    h = n(596454),
    g = n(607070),
    C = n(339085),
    f = n(695346),
    p = n(572004),
    E = n(388032),
    v = n(680475),
    _ = (((i = _ || {})[(i.SMALL = 0)] = 'SMALL'), (i[(i.MEDIUM = 1)] = 'MEDIUM'), i);
function I(e) {
    let { tag: t, size: i = 1, disabled: s, className: _, onClick: I, onRemove: S, selected: m, ariaLabel: T } = e,
        { name: N, emojiId: O, emojiName: A } = t,
        y = null != S,
        [P, b] = r.useState(!1),
        L = (0, d.e7)([C.ZP], () => (null != O ? C.ZP.getUsableCustomEmojiById(O) : null)),
        R = y || null != I,
        Z = (!y || !P) && (null != O || null != A),
        w = 0 === i,
        D = r.useRef(null),
        M = (0, d.e7)([g.Z], () => g.Z.keyboardModeEnabled),
        U = (e) => {
            let i = f.Sb.getSetting();
            p.wS &&
                i &&
                (0, c.jW)(e, async () => {
                    let { default: e } = await n.e('29646').then(n.bind(n, 955116));
                    return (n) =>
                        (0, l.jsx)(e, {
                            ...n,
                            tag: t
                        });
                });
        },
        x = (0, l.jsxs)(l.Fragment, {
            children: [
                Z
                    ? (0, l.jsx)(h.Z, {
                          className: a()(v.emoji, { [v.small]: w }),
                          emojiId: O,
                          emojiName: A,
                          animated: !!(null == L ? void 0 : L.animated),
                          size: 'reaction'
                      })
                    : null,
                P &&
                    y &&
                    (0, l.jsx)('div', {
                        className: v.closeCircle,
                        children: (0, l.jsx)(u.Dio, {
                            size: 'md',
                            color: 'currentColor',
                            className: v.close
                        })
                    }),
                (0, l.jsx)(u.Text, {
                    variant: w ? 'text-xs/semibold' : 'text-sm/semibold',
                    lineClamp: 1,
                    color: 'currentColor',
                    children: N
                })
            ]
        }),
        G = {
            key: t.id,
            className: a()(
                v.pill,
                {
                    [v.disabled]: s,
                    [v.clickable]: R,
                    [v.small]: w,
                    [v.selected]: m
                },
                _
            ),
            onClick: (e) => {
                null == I || I(e), null == S || S(t), M || null == D.current || D.current.blur();
            },
            onContextMenu: (e) => U(e),
            onMouseEnter: () => y && b(!0),
            onMouseLeave: () => y && b(!1)
        },
        F = (0, o.JA)('forum-tag-'.concat(t.id));
    return R
        ? (0, l.jsx)(u.P3F, {
              ...F,
              innerRef: D,
              focusProps: { ringTarget: D },
              'aria-label': null != T ? T : E.intl.formatToPlainString(E.t.iyRTLi, { tagName: N }),
              role: 'button',
              'aria-pressed': m,
              ...G,
              children: x
          })
        : (0, l.jsx)('div', {
              ...G,
              children: x
          });
}
function S(e) {
    let { tags: t, count: n, size: i = 1 } = e,
        r = 0 === i;
    return (0, l.jsx)(u.ua7, {
        'aria-label': E.intl.string(E.t['P/y+sr']),
        text: (0, l.jsx)(l.Fragment, {
            children: t.map((e) =>
                (0, l.jsx)(
                    I,
                    {
                        tag: e,
                        className: v.tooltipPill,
                        size: I.Sizes.SMALL
                    },
                    e.id
                )
            )
        }),
        children: (e) =>
            (0, l.jsx)('div', {
                ...e,
                className: a()(v.pill, { [v.small]: r }),
                children: (0, l.jsxs)(u.Text, {
                    variant: r ? 'text-xs/semibold' : 'text-sm/semibold',
                    children: ['+', n]
                })
            })
    });
}
I.Sizes = _;
