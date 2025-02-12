n.d(t, {
    Z: () => v,
    f: () => y
}),
    n(47120);
var a,
    i = n(200651),
    l = n(192379),
    s = n(120356),
    o = n.n(s),
    r = n(91192),
    c = n(442837),
    d = n(481060),
    u = n(239091),
    m = n(596454),
    p = n(607070),
    g = n(339085),
    _ = n(695346),
    h = n(572004),
    f = n(388032),
    C = n(750340),
    E = (((a = E || {})[(a.SMALL = 0)] = 'SMALL'), (a[(a.MEDIUM = 1)] = 'MEDIUM'), a);
function v(e) {
    let { tag: t, size: a = 1, disabled: s, className: E, onClick: v, onRemove: y, selected: x, ariaLabel: T } = e,
        { name: I, emojiId: b, emojiName: M } = t,
        A = null != y,
        [S, P] = l.useState(!1),
        D = (0, c.e7)([g.ZP], () => (null != b ? g.ZP.getUsableCustomEmojiById(b) : null)),
        L = A || null != v,
        Z = (!A || !S) && (null != b || null != M),
        U = 0 === a,
        R = l.useRef(null),
        w = (0, c.e7)([p.Z], () => p.Z.keyboardModeEnabled),
        j = (e) => {
            let a = _.Sb.getSetting();
            h.wS &&
                a &&
                (0, u.jW)(e, async () => {
                    let { default: e } = await n.e('29646').then(n.bind(n, 955116));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            tag: t
                        });
                });
        },
        O = (0, i.jsxs)(i.Fragment, {
            children: [
                Z
                    ? (0, i.jsx)(m.Z, {
                          className: o()(C.emoji, { [C.small]: U }),
                          emojiId: b,
                          emojiName: M,
                          animated: !!(null == D ? void 0 : D.animated),
                          size: 'reaction'
                      })
                    : null,
                S &&
                    A &&
                    (0, i.jsx)('div', {
                        className: C.closeCircle,
                        children: (0, i.jsx)(d.Dio, {
                            size: 'md',
                            color: 'currentColor',
                            className: C.close
                        })
                    }),
                (0, i.jsx)(d.Text, {
                    variant: U ? 'text-xs/semibold' : 'text-sm/semibold',
                    lineClamp: 1,
                    color: 'currentColor',
                    children: I
                })
            ]
        }),
        N = {
            key: t.id,
            className: o()(
                C.pill,
                {
                    [C.disabled]: s,
                    [C.clickable]: L,
                    [C.small]: U,
                    [C.selected]: x
                },
                E
            ),
            onClick: (e) => {
                null == v || v(e), null == y || y(t), w || null == R.current || R.current.blur();
            },
            onContextMenu: (e) => j(e),
            onMouseEnter: () => A && P(!0),
            onMouseLeave: () => A && P(!1)
        },
        z = (0, r.JA)('forum-tag-'.concat(t.id));
    return L
        ? (0, i.jsx)(d.P3F, {
              ...z,
              innerRef: R,
              focusProps: { ringTarget: R },
              'aria-label': null != T ? T : f.intl.formatToPlainString(f.t.iyRTLi, { tagName: I }),
              role: 'button',
              'aria-pressed': x,
              ...N,
              children: O
          })
        : (0, i.jsx)('div', {
              ...N,
              children: O
          });
}
function y(e) {
    let { tags: t, count: n, size: a = 1 } = e,
        l = 0 === a;
    return (0, i.jsx)(d.ua7, {
        'aria-label': f.intl.string(f.t['P/y+sr']),
        text: (0, i.jsx)(i.Fragment, {
            children: t.map((e) =>
                (0, i.jsx)(
                    v,
                    {
                        tag: e,
                        className: C.tooltipPill,
                        size: v.Sizes.SMALL
                    },
                    e.id
                )
            )
        }),
        children: (e) =>
            (0, i.jsx)('div', {
                ...e,
                className: o()(C.pill, { [C.small]: l }),
                children: (0, i.jsxs)(d.Text, {
                    variant: l ? 'text-xs/semibold' : 'text-sm/semibold',
                    children: ['+', n]
                })
            })
    });
}
v.Sizes = E;
