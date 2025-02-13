n.d(t, { F: () => f });
var r = n(200651),
    i = n(192379),
    a = n(442837),
    l = n(481060),
    o = n(596454),
    s = n(727637),
    d = n(607070),
    c = n(176354),
    u = n(300694);
function m(e) {
    let { emoji: t, shouldAnimate: n } = e;
    if (null == t) return null;
    let i = c.ZP.isCustomEmoji(t) ? t.name : t.surrogates;
    return (0, r.jsx)(o.Z, {
        className: u.traitEmoji,
        emojiId: t.id,
        emojiName: i,
        animated: t.animated,
        shouldAnimate: n
    });
}
function _(e) {
    let { trait: t } = e,
        n = i.useRef(null),
        o = (0, s.Z)(n),
        c = (0, a.e7)([d.Z], () => d.Z.useReducedMotion);
    return (null == t ? void 0 : t.label) == null || t.label.length <= 0
        ? null
        : (0, r.jsxs)('div', {
              ref: n,
              className: u.trait,
              children: [
                  (0, r.jsx)(m, {
                      emoji: t.emoji,
                      shouldAnimate: !c && o
                  }),
                  (0, r.jsx)(l.Text, {
                      tag: 'span',
                      className: u.traitLabel,
                      variant: 'text-sm/normal',
                      color: 'text-normal',
                      children: t.label
                  })
              ]
          });
}
function f(e) {
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
        a = i.useCallback(
            (e) =>
                'string' == typeof e
                    ? (0, r.jsx)('div', {
                          className: u.trait,
                          children: (0, r.jsx)(l.Text, {
                              tag: 'span',
                              variant: 'text-sm/normal',
                              color: 'text-normal',
                              children: e
                          })
                      })
                    : (0, r.jsx)(_, { trait: e }),
            []
        );
    return (0, r.jsx)(l.Epb, {
        className: u.container,
        items: n,
        renderItem: a,
        maxLines: 2,
        itemGapPx: 4
    });
}
