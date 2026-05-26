n.d(t, { E: () => b, A: () => R });
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(834730),
    o = n(140735),
    d = n(707554),
    u = n(349288),
    c = n(174459),
    g = n(559868),
    m = n(652215),
    p = n(375708);
let f = () => {
    c.default.track(m.HAw.CHANGE_LOG_CTA_CLICKED, { cta_type: "profile_bio", target: g.Do });
};
function _() {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("span", { children: p.intl.string(p.t.OJmNR9) }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("span", {
                children: p.intl.format(p.t.RCYeBL, {
                    blogHook: (e, t) =>
                        (0, r.jsx)(
                            u.Anchor,
                            { onClick: f, target: "_blank", rel: "noreferrer noopener", href: g.Do, children: e },
                            t,
                        ),
                }),
            }),
        ],
    });
}
var h = n(311016),
    E = n(692051),
    x = n(713804),
    v = n(992595);
function R(e) {
    let {
            userBio: t,
            className: n,
            animateOnHoverOrFocusOnly: i = !1,
            isHoveringOrFocusing: o = !1,
            lineClamp: d = 6,
            setLineClamp: u = !0,
            textColor: c,
            userId: g,
        } = e,
        m = l.useMemo(
            () => ((0, h.A)(g) ? (0, r.jsx)(_, {}) : null == t || "" === t ? null : (0, x.parseBioReact)(t)),
            [g, t],
        );
    return null == m
        ? null
        : (0, r.jsx)("div", {
              className: a()(n, v.PT),
              children: (0, r.jsx)(s.E, {
                  variant: "text-sm/normal",
                  lineClamp: u ? d : void 0,
                  color: void 0 !== c ? c : void 0,
                  children: (0, r.jsx)(E.Y.Provider, {
                      value: { disableAnimations: i && !o, disableInteractions: !1 },
                      children: m,
                  }),
              }),
          });
}
function b(e) {
    let t = l.useId(),
        { userBio: n, userId: i } = e;
    return (0, h.A)(i) || (null != n && "" !== n)
        ? (0, r.jsxs)("section", {
              "aria-labelledby": t,
              children: [
                  (0, r.jsx)(o.A, { children: (0, r.jsx)(d.H, { id: t, children: p.intl.string(p.t.ZzAR2Y) }) }),
                  (0, r.jsx)(R, { ...e }),
              ],
          })
        : null;
}
