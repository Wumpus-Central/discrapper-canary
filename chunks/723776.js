n.d(t, { F: () => f });
var i = n(200651),
    r = n(192379),
    a = n(442837),
    l = n(481060),
    s = n(596454),
    o = n(727637),
    d = n(607070),
    c = n(176354),
    u = n(300694);
function m(e) {
    let { emoji: t, shouldAnimate: n } = e;
    if (null == t) return null;
    let r = c.ZP.isCustomEmoji(t) ? t.name : t.surrogates;
    return (0, i.jsx)(s.Z, {
        className: u.traitEmoji,
        emojiId: t.id,
        emojiName: r,
        animated: t.animated,
        shouldAnimate: n
    });
}
function _(e) {
    let { trait: t } = e,
        n = r.useRef(null),
        s = (0, o.Z)(n),
        c = (0, a.e7)([d.Z], () => d.Z.useReducedMotion);
    return (null == t ? void 0 : t.label) == null || t.label.length <= 0
        ? null
        : (0, i.jsxs)('div', {
              ref: n,
              className: u.trait,
              children: [
                  (0, i.jsx)(m, {
                      emoji: t.emoji,
                      shouldAnimate: !c && s
                  }),
                  (0, i.jsx)(l.Text, {
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
        n = r.useMemo(
            () =>
                t.traits
                    .map((e, t) => ({
                        key: 'trait-'.concat(t),
                        ...e
                    }))
                    .filter((e) => e.label.length > 0),
            [t]
        ),
        a = r.useCallback(
            (e) =>
                'string' == typeof e
                    ? (0, i.jsx)('div', {
                          className: u.trait,
                          children: (0, i.jsx)(l.Text, {
                              tag: 'span',
                              variant: 'text-sm/normal',
                              color: 'text-normal',
                              children: e
                          })
                      })
                    : (0, i.jsx)(_, { trait: e }),
            []
        );
    return (0, i.jsx)(l.Epb, {
        className: u.container,
        items: n,
        renderItem: a,
        maxLines: 2,
        itemGapPx: 4
    });
}
