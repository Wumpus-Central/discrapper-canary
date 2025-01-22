n.d(t, {
    Z: function () {
        return S;
    },
    f: function () {
        return v;
    }
}),
    n(47120);
var i,
    r,
    l = n(200651),
    o = n(192379),
    s = n(120356),
    a = n.n(s),
    u = n(91192),
    d = n(442837),
    c = n(481060),
    h = n(239091),
    f = n(596454),
    g = n(607070),
    C = n(339085),
    p = n(695346),
    E = n(572004),
    _ = n(388032),
    I = n(680475);
function S(e) {
    let { tag: t, size: i = 1, disabled: r, className: s, onClick: S, onRemove: v, selected: m, ariaLabel: T } = e,
        { name: N, emojiId: A, emojiName: y } = t,
        O = null != v,
        [L, P] = o.useState(!1),
        b = (0, d.e7)([C.ZP], () => (null != A ? C.ZP.getUsableCustomEmojiById(A) : null)),
        R = O || null != S,
        Z = (!O || !L) && (null != A || null != y),
        w = 0 === i,
        M = o.useRef(null),
        D = (0, d.e7)([g.Z], () => g.Z.keyboardModeEnabled),
        U = (e) => {
            let i = p.Sb.getSetting();
            E.wS &&
                i &&
                (0, h.jW)(e, async () => {
                    let { default: e } = await n.e('29646').then(n.bind(n, 955116));
                    return (n) =>
                        (0, l.jsx)(e, {
                            ...n,
                            tag: t
                        });
                });
        },
        G = (0, l.jsxs)(l.Fragment, {
            children: [
                Z
                    ? (0, l.jsx)(f.Z, {
                          className: a()(I.emoji, { [I.small]: w }),
                          emojiId: A,
                          emojiName: y,
                          animated: !!(null == b ? void 0 : b.animated),
                          size: 'reaction'
                      })
                    : null,
                L &&
                    O &&
                    (0, l.jsx)('div', {
                        className: I.closeCircle,
                        children: (0, l.jsx)(c.XSmallIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: I.close
                        })
                    }),
                (0, l.jsx)(c.Text, {
                    variant: w ? 'text-xs/semibold' : 'text-sm/semibold',
                    lineClamp: 1,
                    children: N
                })
            ]
        }),
        F = {
            key: t.id,
            className: a()(
                I.pill,
                {
                    [I.disabled]: r,
                    [I.clickable]: R,
                    [I.small]: w,
                    [I.selected]: m
                },
                s
            ),
            onClick: (e) => {
                null == S || S(e), null == v || v(t), !D && null != M.current && M.current.blur();
            },
            onContextMenu: (e) => U(e),
            onMouseEnter: () => O && P(!0),
            onMouseLeave: () => O && P(!1)
        },
        x = (0, u.JA)('forum-tag-'.concat(t.id));
    return R
        ? (0, l.jsx)(c.Clickable, {
              ...x,
              innerRef: M,
              focusProps: { ringTarget: M },
              'aria-label': null != T ? T : _.intl.formatToPlainString(_.t.iyRTLi, { tagName: N }),
              role: 'button',
              'aria-pressed': m,
              ...F,
              children: G
          })
        : (0, l.jsx)('div', {
              ...F,
              children: G
          });
}
function v(e) {
    let { tags: t, count: n, size: i = 1 } = e,
        r = 0 === i;
    return (0, l.jsx)(c.Tooltip, {
        'aria-label': _.intl.string(_.t['P/y+sr']),
        text: (0, l.jsx)(l.Fragment, {
            children: t.map((e) =>
                (0, l.jsx)(
                    S,
                    {
                        tag: e,
                        className: I.tooltipPill,
                        size: S.Sizes.SMALL
                    },
                    e.id
                )
            )
        }),
        children: (e) =>
            (0, l.jsx)('div', {
                ...e,
                className: a()(I.pill, { [I.small]: r }),
                children: (0, l.jsxs)(c.Text, {
                    variant: r ? 'text-xs/semibold' : 'text-sm/semibold',
                    children: ['+', n]
                })
            })
    });
}
((r = i || (i = {}))[(r.SMALL = 0)] = 'SMALL'), (r[(r.MEDIUM = 1)] = 'MEDIUM'), (S.Sizes = i);
