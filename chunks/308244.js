"use strict";
n.d(t, { E: () => S, A: () => T });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(834730),
    l = n(140735),
    u = n(707554),
    c = n(349288),
    d = n(174459),
    _ = n(559868),
    f = n(652215),
    h = n(375708);
let p = () => {
    d.default.track(f.HAw.CHANGE_LOG_CTA_CLICKED, { cta_type: "profile_bio", target: _.Do });
};
function E() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("span", { children: h.intl.string(h.t.OJmNR9) }),
            (0, i.jsx)("br", {}),
            (0, i.jsx)("br", {}),
            (0, i.jsx)("span", {
                children: h.intl.format(h.t.RCYeBL, {
                    blogHook: (e, t) =>
                        (0, i.jsx)(
                            c.Anchor,
                            { onClick: p, target: "_blank", rel: "noreferrer noopener", href: _.Do, children: e },
                            t,
                        ),
                }),
            }),
        ],
    });
}
var m = n(311016),
    g = n(692051),
    A = n(713804),
    I = n(992595);
function T(e) {
    let {
            userBio: t,
            className: n,
            animateOnHoverOrFocusOnly: s = !1,
            isHoveringOrFocusing: l = !1,
            lineClamp: u = 6,
            setLineClamp: c = !0,
            textColor: d,
            userId: _,
        } = e,
        f = r.useMemo(
            () => ((0, m.A)(_) ? (0, i.jsx)(E, {}) : null == t || "" === t ? null : (0, A.parseBioReact)(t)),
            [_, t],
        );
    return null == f
        ? null
        : (0, i.jsx)("div", {
              className: a()(n, I.PT),
              children: (0, i.jsx)(o.E, {
                  variant: "text-sm/normal",
                  lineClamp: c ? u : void 0,
                  color: void 0 !== d ? d : void 0,
                  children: (0, i.jsx)(g.Y.Provider, {
                      value: { disableAnimations: s && !l, disableInteractions: !1 },
                      children: f,
                  }),
              }),
          });
}
function S(e) {
    let t = r.useId(),
        { userBio: n, userId: s } = e;
    return (0, m.A)(s) || (null != n && "" !== n)
        ? (0, i.jsxs)("section", {
              "aria-labelledby": t,
              children: [
                  (0, i.jsx)(l.A, { children: (0, i.jsx)(u.H, { id: t, children: h.intl.string(h.t.ZzAR2Y) }) }),
                  (0, i.jsx)(T, { ...e }),
              ],
          })
        : null;
}
