e.d(n, {
    Z: function () {
        return I;
    },
    f: function () {
        return T;
    }
}),
    e(47120);
var i,
    r,
    l = e(200651),
    u = e(192379),
    o = e(120356),
    a = e.n(o),
    s = e(91192),
    c = e(442837),
    d = e(481060),
    f = e(239091),
    _ = e(596454),
    E = e(607070),
    p = e(339085),
    g = e(695346),
    S = e(572004),
    m = e(388032),
    C = e(680475);
function I(t) {
    let { tag: n, size: i = 1, disabled: r, className: o, onClick: I, onRemove: T, selected: h, ariaLabel: v } = t,
        { name: N, emojiId: A, emojiName: O } = n,
        P = null != T,
        [L, b] = u.useState(!1),
        M = (0, c.e7)([p.ZP], () => (null != A ? p.ZP.getUsableCustomEmojiById(A) : null)),
        R = P || null != I,
        y = (!P || !L) && (null != A || null != O),
        Z = 0 === i,
        D = u.useRef(null),
        U = (0, c.e7)([E.Z], () => E.Z.keyboardModeEnabled),
        j = (t) => {
            let i = g.Sb.getSetting();
            S.wS &&
                i &&
                (0, f.jW)(t, async () => {
                    let { default: t } = await e.e('29646').then(e.bind(e, 955116));
                    return (e) =>
                        (0, l.jsx)(t, {
                            ...e,
                            tag: n
                        });
                });
        },
        x = (0, l.jsxs)(l.Fragment, {
            children: [
                y
                    ? (0, l.jsx)(_.Z, {
                          className: a()(C.emoji, { [C.small]: Z }),
                          emojiId: A,
                          emojiName: O,
                          animated: !!(null == M ? void 0 : M.animated),
                          size: 'reaction'
                      })
                    : null,
                L &&
                    P &&
                    (0, l.jsx)('div', {
                        className: C.closeCircle,
                        children: (0, l.jsx)(d.XSmallIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: C.close
                        })
                    }),
                (0, l.jsx)(d.Text, {
                    variant: Z ? 'text-xs/semibold' : 'text-sm/semibold',
                    lineClamp: 1,
                    children: N
                })
            ]
        }),
        G = {
            key: n.id,
            className: a()(
                C.pill,
                {
                    [C.disabled]: r,
                    [C.clickable]: R,
                    [C.small]: Z,
                    [C.selected]: h
                },
                o
            ),
            onClick: (t) => {
                null == I || I(t), null == T || T(n), !U && null != D.current && D.current.blur();
            },
            onContextMenu: (t) => j(t),
            onMouseEnter: () => P && b(!0),
            onMouseLeave: () => P && b(!1)
        },
        F = (0, s.JA)('forum-tag-'.concat(n.id));
    return R
        ? (0, l.jsx)(d.Clickable, {
              ...F,
              innerRef: D,
              focusProps: { ringTarget: D },
              'aria-label': null != v ? v : m.intl.formatToPlainString(m.t.iyRTLi, { tagName: N }),
              role: 'button',
              'aria-pressed': h,
              ...G,
              children: x
          })
        : (0, l.jsx)('div', {
              ...G,
              children: x
          });
}
function T(t) {
    let { tags: n, count: e, size: i = 1 } = t,
        r = 0 === i;
    return (0, l.jsx)(d.Tooltip, {
        'aria-label': m.intl.string(m.t['P/y+sr']),
        text: (0, l.jsx)(l.Fragment, {
            children: n.map((t) =>
                (0, l.jsx)(
                    I,
                    {
                        tag: t,
                        className: C.tooltipPill,
                        size: I.Sizes.SMALL
                    },
                    t.id
                )
            )
        }),
        children: (t) =>
            (0, l.jsx)('div', {
                ...t,
                className: a()(C.pill, { [C.small]: r }),
                children: (0, l.jsxs)(d.Text, {
                    variant: r ? 'text-xs/semibold' : 'text-sm/semibold',
                    children: ['+', e]
                })
            })
    });
}
((r = i || (i = {}))[(r.SMALL = 0)] = 'SMALL'), (r[(r.MEDIUM = 1)] = 'MEDIUM'), (I.Sizes = i);
