t.d(n, { F: () => m });
var l = t(200651),
    i = t(192379),
    a = t(442837),
    r = t(481060),
    s = t(596454),
    o = t(727637),
    c = t(607070),
    d = t(25815);
function u(e) {
    let { trait: n } = e,
        t = i.useRef(null),
        u = (0, o.Z)(t),
        m = (0, a.e7)([c.Z], () => c.Z.useReducedMotion);
    return (null == n ? void 0 : n.label) == null || n.label.length <= 0
        ? null
        : (0, l.jsxs)('div', {
              ref: t,
              className: d.trait,
              children: [
                  null != n.emoji
                      ? (0, l.jsx)(s.Z, {
                            className: d.traitEmoji,
                            emojiId: n.emoji.id,
                            emojiName: n.emoji.name,
                            animated: n.emoji.animated,
                            shouldAnimate: !m && u
                        })
                      : null,
                  (0, l.jsx)(r.Text, {
                      tag: 'span',
                      className: d.traitLabel,
                      variant: 'text-sm/normal',
                      color: 'text-normal',
                      children: n.label
                  })
              ]
          });
}
function m(e) {
    let { profile: n } = e,
        t = i.useMemo(
            () =>
                n.traits.map((e, n) => ({
                    key: 'trait-'.concat(n),
                    label: e.label,
                    emoji: e.emoji
                })),
            [n]
        ),
        a = i.useCallback(
            (e) =>
                'string' == typeof e
                    ? (0, l.jsx)('div', {
                          className: d.trait,
                          children: (0, l.jsx)(r.Text, {
                              tag: 'span',
                              variant: 'text-sm/normal',
                              color: 'text-normal',
                              children: e
                          })
                      })
                    : (0, l.jsx)(u, { trait: e }),
            []
        );
    return (0, l.jsx)(r.Epb, {
        className: d.container,
        items: t,
        renderItem: a,
        maxLines: 2,
        itemGapPx: 4
    });
}
