t.d(n, { E: () => b, A: () => E });
var l = t(627968),
    r = t(64700),
    i = t(503698),
    a = t.n(i),
    s = t(834730),
    o = t(140735),
    d = t(707554),
    u = t(349288),
    c = t(954571),
    m = t(559868),
    f = t(652215),
    p = t(985018);
let g = () => {
    c.default.track(f.HAw.CHANGE_LOG_CTA_CLICKED, { cta_type: "profile_bio", target: m.Do });
};
function h() {
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("span", { children: p.intl.string(p.t.OJmNR9) }),
            (0, l.jsx)("br", {}),
            (0, l.jsx)("br", {}),
            (0, l.jsx)("span", {
                children: p.intl.format(p.t.RCYeBL, {
                    blogHook: (e, n) =>
                        (0, l.jsx)(
                            u.Anchor,
                            { onClick: g, target: "_blank", rel: "noreferrer noopener", href: m.Do, children: e },
                            n,
                        ),
                }),
            }),
        ],
    });
}
var x = t(311016),
    j = t(692051),
    v = t(713804),
    C = t(992595);
function E(e) {
    let {
            userBio: n,
            className: t,
            animateOnHoverOrFocusOnly: i = !1,
            isHoveringOrFocusing: o = !1,
            lineClamp: d = 6,
            setLineClamp: u = !0,
            textColor: c,
            userId: m,
        } = e,
        f = r.useMemo(
            () => ((0, x.A)(m) ? (0, l.jsx)(h, {}) : null == n || "" === n ? null : (0, v.parseBioReact)(n)),
            [m, n],
        );
    return null == f
        ? null
        : (0, l.jsx)("div", {
              className: a()(t, C.PT),
              children: (0, l.jsx)(s.E, {
                  variant: "text-sm/normal",
                  lineClamp: u ? d : void 0,
                  color: void 0 !== c ? c : void 0,
                  children: (0, l.jsx)(j.Y.Provider, {
                      value: { disableAnimations: i && !o, disableInteractions: !1 },
                      children: f,
                  }),
              }),
          });
}
function b(e) {
    let n = r.useId(),
        { userBio: t, userId: i } = e;
    return (0, x.A)(i) || (null != t && "" !== t)
        ? (0, l.jsxs)("section", {
              "aria-labelledby": n,
              children: [
                  (0, l.jsx)(o.A, { children: (0, l.jsx)(d.H, { id: n, children: p.intl.string(p.t.ZzAR2Y) }) }),
                  (0, l.jsx)(E, { ...e }),
              ],
          })
        : null;
}
