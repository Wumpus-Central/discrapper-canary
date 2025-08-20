n.d(t, { Z: () => _ }), n(388685);
var r = n(951288),
    o = n(647438),
    l = n(120356),
    a = n.n(l),
    i = n(754700),
    s = n(481060),
    c = n(497505),
    u = n(720293),
    d = n(602667),
    f = n(524953);
function m(e) {
    let { asset: t } = e;
    return null == t
        ? null
        : (0, r.jsx)("img", {
              src: t.url,
              alt: "",
              className: f.endScreenImageBackground,
          });
}
function p(e) {
    let { quest: t, asset: n, sourceQuestContent: o } = e;
    return null == n
        ? null
        : (0, r.jsx)(d.A, {
              questOrQuests: t,
              questContent: c.jn.VIDEO_MODAL_END_CARD,
              sourceQuestContent: o,
              children: (e) =>
                  (0, r.jsx)("img", {
                      ref: (t) => {
                          e.current = t;
                      },
                      src: n.url,
                      alt: "Video thumbnail",
                      className: f.endScreenCard,
                  }),
          });
}
function v(e) {
    let { ctaBtnLabel: t, title: n, subtitle: o, onCTAClick: l } = e;
    return (0, r.jsxs)("div", {
        className: f.endScreenCtaContainer,
        children: [
            (0, r.jsx)(C, {
                title: n,
                subtitle: o,
            }),
            (0, r.jsx)(E, {
                label: t,
                icon: s.d4D,
                onClick: l,
            }),
        ],
    });
}
function C(e) {
    let { title: t, subtitle: n } = e;
    return (0, r.jsxs)("div", {
        className: f.endScreenCtaTitleContainer,
        children: [
            (0, r.jsx)(s.X6q, {
                variant: "heading-md/semibold",
                className: f.endScreenCtaTitle,
                children: t,
            }),
            (0, r.jsx)(s.X6q, {
                variant: "heading-sm/normal",
                className: f.endScreenCtaSubtitle,
                children: n,
            }),
        ],
    });
}
function E(e) {
    let { label: t, icon: n, onClick: l, className: i } = e,
        [c, u] = o.useState(!1),
        d = () => {
            u(!0);
        },
        m = () => {
            u(!1);
        };
    return (0, r.jsxs)(s.P3F, {
        className: a()(f.endScreenCtaBtn, f.accentOnHover, i),
        onMouseEnter: d,
        onMouseLeave: m,
        onFocus: d,
        onBlur: m,
        onClick: l,
        children: [
            (0, r.jsx)(s.X6q, {
                variant: "heading-md/semibold",
                className: f.endScreenCtaBtnTitle,
                children: t,
            }),
            (0, r.jsx)(n, {
                size: "md",
                color: c ? s.TVs.colors.WHITE : "#B5BAC1",
                className: f.endScreenIcon,
            }),
        ],
    });
}
let _ = function (e) {
    let { quest: t, ctaBtnLabel: n, title: l, subtitle: a, onCTAClick: s, sourceQuestContent: c } = e,
        d = o.useMemo(() => (0, u.z0)(t, i.X.WATCH_VIDEO, u.n1.VIDEO, u.O.THUMBNAIL), [t]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(m, { asset: d }),
            (0, r.jsx)("div", { className: f.endScreenOverlay }),
            (0, r.jsxs)("div", {
                className: f.endScreenContainer,
                children: [
                    (0, r.jsx)(p, {
                        quest: t,
                        asset: d,
                        sourceQuestContent: c,
                    }),
                    (0, r.jsx)(v, {
                        title: l,
                        subtitle: a,
                        ctaBtnLabel: n,
                        onCTAClick: s,
                    }),
                ],
            }),
        ],
    });
};
