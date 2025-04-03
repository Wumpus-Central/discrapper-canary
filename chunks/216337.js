n.d(t, { Z: () => m });
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(481060),
    a = n(607070),
    s = n(665906),
    c = n(314897),
    u = n(496675),
    d = n(981631),
    p = n(388032),
    h = n(465762);
let f = () =>
        n
            .e('43841')
            .then(n.t.bind(n, 737848, 19))
            .then((e) => {
                let { default: t } = e;
                return t;
            }),
    m = i.memo(function (e) {
        let { channel: t, isLastItem: n } = e,
            i = (0, l.e7)([a.Z], () => a.Z.useReducedMotion),
            m = (0, l.e7)([u.Z], () => u.Z.can(d.Plq.SEND_MESSAGES_IN_THREADS, t)),
            g = (0, s.Gu)(t),
            b = (0, l.e7)([c.default], () => c.default.getId());
        return n
            ? m && !g && t.ownerId !== b
                ? (0, r.jsxs)('div', {
                      className: h.box,
                      children: [
                          (0, r.jsx)(o.Fmz, {
                              importData: f,
                              shouldAnimate: !i,
                              className: h.animation
                          }),
                          (0, r.jsxs)('div', {
                              className: h.textContainer,
                              children: [
                                  (0, r.jsx)(o.X6q, {
                                      variant: 'heading-md/semibold',
                                      children: p.NW.string(p.t.OmBThI)
                                  }),
                                  (0, r.jsx)(o.Text, {
                                      variant: 'text-sm/normal',
                                      color: 'header-secondary',
                                      children: p.NW.string(p.t.zcs5kp)
                                  })
                              ]
                          })
                      ]
                  })
                : null
            : (0, r.jsx)('div', { className: h.divider });
    });
