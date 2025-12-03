n.d(t, { Z: () => m });
var i = n(54381),
    r = n(473749),
    l = n(442837),
    a = n(481060),
    o = n(607070),
    s = n(665906),
    c = n(314897),
    u = n(496675),
    d = n(981631),
    p = n(388032),
    h = n(456645);
let f = () =>
        n
            .e("43841")
            .then(n.t.bind(n, 737848, 19))
            .then((e) => {
                let { default: t } = e;
                return t;
            }),
    m = r.memo(function (e) {
        let { channel: t, isLastItem: n } = e,
            r = (0, l.e7)([o.Z], () => o.Z.useReducedMotion),
            m = (0, l.e7)([u.Z], () => u.Z.can(d.Plq.SEND_MESSAGES_IN_THREADS, t)),
            g = (0, s.Gu)(t),
            b = (0, l.e7)([c.default], () => c.default.getId());
        return n
            ? m && !g && t.ownerId !== b
                ? (0, i.jsxs)("div", {
                      className: h.box,
                      children: [
                          (0, i.jsx)(a.Fmz, {
                              importData: f,
                              shouldAnimate: !r,
                              className: h.animation,
                          }),
                          (0, i.jsxs)("div", {
                              className: h.textContainer,
                              children: [
                                  (0, i.jsx)(a.Heading, {
                                      variant: "heading-md/semibold",
                                      children: p.intl.string(p.t.OmBThA),
                                  }),
                                  (0, i.jsx)(a.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: p.intl.string(p.t.zcs5ko),
                                  }),
                              ],
                          }),
                      ],
                  })
                : null
            : (0, i.jsx)("div", { className: h.divider });
    });
