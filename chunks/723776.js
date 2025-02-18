n.d(t, { F: () => h });
var a = n(200651),
    i = n(192379),
    l = n(442837),
    r = n(481060),
    s = n(596454),
    o = n(727637),
    c = n(607070),
    d = n(176354),
    m = n(300694);
function u(e) {
    let { emoji: t, shouldAnimate: n } = e;
    if (null == t) return null;
    let i = d.ZP.isCustomEmoji(t) ? t.name : t.surrogates;
    return (0, a.jsx)(s.Z, {
        className: m.traitEmoji,
        emojiId: t.id,
        emojiName: i,
        animated: t.animated,
        shouldAnimate: n
    });
}
function x(e) {
    let { trait: t } = e,
        n = i.useRef(null),
        s = (0, o.Z)(n),
        d = (0, l.e7)([c.Z], () => c.Z.useReducedMotion);
    return (null == t ? void 0 : t.label) == null || t.label.length <= 0
        ? null
        : (0, a.jsxs)('div', {
              ref: n,
              className: m.trait,
              children: [
                  (0, a.jsx)(u, {
                      emoji: t.emoji,
                      shouldAnimate: !d && s
                  }),
                  (0, a.jsx)(r.Text, {
                      tag: 'span',
                      className: m.traitLabel,
                      variant: 'text-sm/normal',
                      color: 'text-normal',
                      children: t.label
                  })
              ]
          });
}
function h(e) {
    let { profile: t } = e,
        n = i.useMemo(
            () =>
                t.traits
                    .map((e, t) => ({
                        key: 'trait-'.concat(t),
                        ...e
                    }))
                    .filter((e) => e.label.length > 0),
            [t]
        ),
        l = i.useCallback(
            (e) =>
                'string' == typeof e
                    ? (0, a.jsx)(
                          'div',
                          {
                              className: m.trait,
                              children: (0, a.jsx)(r.Text, {
                                  tag: 'span',
                                  variant: 'text-sm/normal',
                                  color: 'text-normal',
                                  children: e
                              })
                          },
                          'overflow'
                      )
                    : (0, a.jsx)(x, { trait: e }, e.label),
            []
        );
    return (0, a.jsx)(r.Epb, {
        className: m.container,
        items: n,
        renderItem: l,
        maxLines: 2,
        itemGapPx: 4
    });
}
