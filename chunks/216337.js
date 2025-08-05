n.d(t, { Z: () => m });
var r = n(255367),
    i = n(73800),
    a = n(442837),
    o = n(481060),
    s = n(607070),
    l = n(665906),
    c = n(314897),
    u = n(496675),
    d = n(981631),
    f = n(388032),
    _ = n(465762);
let p = () =>
    n
        .e('43841')
        .then(n.t.bind(n, 737848, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
function h(e) {
    let { channel: t, isLastItem: n } = e,
        i = (0, a.e7)([s.Z], () => s.Z.useReducedMotion),
        h = (0, a.e7)([u.Z], () => u.Z.can(d.Plq.SEND_MESSAGES_IN_THREADS, t)),
        m = (0, l.Gu)(t),
        g = (0, a.e7)([c.default], () => c.default.getId());
    return n
        ? h && !m && t.ownerId !== g
            ? (0, r.jsxs)('div', {
                  className: _.box,
                  children: [
                      (0, r.jsx)(o.Fmz, {
                          importData: p,
                          shouldAnimate: !i,
                          className: _.animation
                      }),
                      (0, r.jsxs)('div', {
                          className: _.textContainer,
                          children: [
                              (0, r.jsx)(o.X6q, {
                                  variant: 'heading-md/semibold',
                                  children: f.intl.string(f.t.OmBThI)
                              }),
                              (0, r.jsx)(o.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'header-secondary',
                                  children: f.intl.string(f.t.zcs5kp)
                              })
                          ]
                      })
                  ]
              })
            : null
        : (0, r.jsx)('div', { className: _.divider });
}
let m = i.memo(h);
