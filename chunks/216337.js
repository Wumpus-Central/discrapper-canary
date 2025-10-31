n.d(t, { Z: () => m });
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(481060),
    o = n(607070),
    s = n(665906),
    c = n(314897),
    u = n(496675),
    d = n(981631),
    p = n(388032),
    f = n(456645);
let h = () =>
        n
            .e("43841")
            .then(n.t.bind(n, 737848, 19))
            .then((e) => {
                let { default: t } = e;
                return t;
            }),
    m = i.memo(function (e) {
        let { channel: t, isLastItem: n } = e,
            i = (0, l.e7)([o.Z], () => o.Z.useReducedMotion),
            m = (0, l.e7)([u.Z], () => u.Z.can(d.Plq.SEND_MESSAGES_IN_THREADS, t)),
            g = (0, s.Gu)(t),
            b = (0, l.e7)([c.default], () => c.default.getId());
        return n
            ? m && !g && t.ownerId !== b
                ? (0, r.jsxs)("div", {
                      className: f.box,
                      children: [
                          (0, r.jsx)(a.Fmz, {
                              importData: h,
                              shouldAnimate: !i,
                              className: f.animation,
                          }),
                          (0, r.jsxs)("div", {
                              className: f.textContainer,
                              children: [
                                  (0, r.jsx)(a.Heading, {
                                      variant: "heading-md/semibold",
                                      children: p.intl.string(p.t.OmBThA),
                                  }),
                                  (0, r.jsx)(a.Text, {
                                      variant: "text-sm/normal",
                                      color: "header-secondary",
                                      children: p.intl.string(p.t.zcs5ko),
                                  }),
                              ],
                          }),
                      ],
                  })
                : null
            : (0, r.jsx)("div", { className: f.divider });
    });
