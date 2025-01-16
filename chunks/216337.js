var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(481060),
    s = n(607070),
    o = n(665906),
    c = n(314897),
    d = n(496675),
    u = n(981631),
    h = n(388032),
    p = n(276204);
let m = () =>
    n
        .e('26176')
        .then(n.t.bind(n, 737848, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
t.Z = l.memo(function (e) {
    let { channel: t, isLastItem: n } = e,
        l = (0, r.e7)([s.Z], () => s.Z.useReducedMotion),
        f = (0, r.e7)([d.Z], () => d.Z.can(u.Plq.SEND_MESSAGES_IN_THREADS, t)),
        g = (0, o.Gu)(t),
        C = (0, r.e7)([c.default], () => c.default.getId());
    return n
        ? f && !g && t.ownerId !== C
            ? (0, i.jsxs)('div', {
                  className: p.box,
                  children: [
                      (0, i.jsx)(a.LottieAnimation, {
                          importData: m,
                          shouldAnimate: !l,
                          className: p.animation
                      }),
                      (0, i.jsxs)('div', {
                          className: p.textContainer,
                          children: [
                              (0, i.jsx)(a.Heading, {
                                  variant: 'heading-md/semibold',
                                  children: h.intl.string(h.t.OmBThI)
                              }),
                              (0, i.jsx)(a.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'header-secondary',
                                  children: h.intl.string(h.t.zcs5kp)
                              })
                          ]
                      })
                  ]
              })
            : null
        : (0, i.jsx)('div', { className: p.divider });
});
