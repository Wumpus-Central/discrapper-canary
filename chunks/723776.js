t.d(n, { F: () => h });
var l = t(200651),
    i = t(192379),
    a = t(442837),
    r = t(481060),
    o = t(596454),
    s = t(727637),
    c = t(607070),
    d = t(176354),
    u = t(514445);
function m(e) {
    let { emoji: n, shouldAnimate: t } = e;
    if (null == n) return null;
    let i = d.ZP.isCustomEmoji(n) ? n.name : n.surrogates;
    return (0, l.jsx)(o.Z, {
        className: u.traitEmoji,
        emojiId: n.id,
        emojiName: i,
        animated: n.animated,
        shouldAnimate: t
    });
}
function _(e) {
    let { trait: n } = e,
        t = i.useRef(null),
        o = (0, s.Z)(t),
        d = (0, a.e7)([c.Z], () => c.Z.useReducedMotion);
    return (null == n ? void 0 : n.label) == null || n.label.length <= 0
        ? null
        : (0, l.jsxs)('div', {
              ref: t,
              className: u.trait,
              children: [
                  (0, l.jsx)(m, {
                      emoji: n.emoji,
                      shouldAnimate: !d && o
                  }),
                  (0, l.jsx)(r.Text, {
                      tag: 'span',
                      className: u.traitLabel,
                      variant: 'text-sm/normal',
                      color: 'text-normal',
                      children: n.label
                  })
              ]
          });
}
function h(e) {
    let { profile: n } = e,
        t = i.useMemo(
            () =>
                n.traits
                    .map((e, n) => ({
                        key: 'trait-'.concat(n),
                        ...e
                    }))
                    .filter((e) => e.label.length > 0),
            [n]
        ),
        a = i.useCallback(
            (e) =>
                'string' == typeof e
                    ? (0, l.jsx)('div', {
                          className: u.trait,
                          children: (0, l.jsx)(r.Text, {
                              tag: 'span',
                              variant: 'text-sm/normal',
                              color: 'text-normal',
                              children: e
                          })
                      })
                    : (0, l.jsx)(_, { trait: e }),
            []
        );
    return (0, l.jsx)(r.Epb, {
        className: u.container,
        items: t,
        renderItem: a,
        maxLines: 2,
        itemGapPx: 4
    });
}
