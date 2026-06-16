n.d(t, { E: () => j, A: () => E });
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(834730),
    o = n(140735),
    d = n(707554),
    u = n(349288),
    c = n(174459),
    m = n(559868),
    g = n(652215),
    f = n(375708);
let p = () => {
    c.default.track(g.HAw.CHANGE_LOG_CTA_CLICKED, { cta_type: "profile_bio", target: m.Do });
};
function h() {
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("span", { children: f.intl.string(f.t.OJmNR9) }),
            (0, l.jsx)("br", {}),
            (0, l.jsx)("br", {}),
            (0, l.jsx)("span", {
                children: f.intl.format(f.t.RCYeBL, {
                    blogHook: (e, t) =>
                        (0, l.jsx)(
                            u.Anchor,
                            { onClick: p, target: "_blank", rel: "noreferrer noopener", href: m.Do, children: e },
                            t,
                        ),
                }),
            }),
        ],
    });
}
var _ = n(311016),
    x = n(692051),
    v = n(713804),
    b = n(992595);
function E(e) {
    let {
            userBio: t,
            className: n,
            animateOnHoverOrFocusOnly: i = !1,
            isHoveringOrFocusing: o = !1,
            lineClamp: d = 6,
            setLineClamp: u = !0,
            textColor: c,
            userId: m,
        } = e,
        g = r.useMemo(
            () => ((0, _.A)(m) ? (0, l.jsx)(h, {}) : null == t || "" === t ? null : (0, v.parseBioReact)(t)),
            [m, t],
        );
    return null == g
        ? null
        : (0, l.jsx)("div", {
              className: a()(n, b.PT),
              children: (0, l.jsx)(s.E, {
                  variant: "text-sm/normal",
                  lineClamp: u ? d : void 0,
                  color: void 0 !== c ? c : void 0,
                  children: (0, l.jsx)(x.Y.Provider, {
                      value: { disableAnimations: i && !o, disableInteractions: !1 },
                      children: g,
                  }),
              }),
          });
}
function j(e) {
    let t = r.useId(),
        { userBio: n, userId: i } = e;
    return (0, _.A)(i) || (null != n && "" !== n)
        ? (0, l.jsxs)("section", {
              "aria-labelledby": t,
              children: [
                  (0, l.jsx)(o.A, { children: (0, l.jsx)(d.H, { id: t, children: f.intl.string(f.t.ZzAR2Y) }) }),
                  (0, l.jsx)(E, { ...e }),
              ],
          })
        : null;
}
