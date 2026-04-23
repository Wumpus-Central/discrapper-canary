"use strict";
n.d(t, { E: () => S, A: () => T });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(834730),
    l = n(140735),
    d = n(707554),
    _ = n(349288),
    u = n(954571),
    c = n(559868),
    E = n(652215),
    h = n(985018);
let m = () => {
    u.default.track(E.HAw.CHANGE_LOG_CTA_CLICKED, { cta_type: "profile_bio", target: c.Do });
};
function f() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("span", { children: h.intl.string(h.t.OJmNR9) }),
            (0, i.jsx)("br", {}),
            (0, i.jsx)("br", {}),
            (0, i.jsx)("span", {
                children: h.intl.format(h.t.RCYeBL, {
                    blogHook: (e, t) =>
                        (0, i.jsx)(
                            _.Anchor,
                            { onClick: m, target: "_blank", rel: "noreferrer noopener", href: c.Do, children: e },
                            t,
                        ),
                }),
            }),
        ],
    });
}
var g = n(311016),
    p = n(692051),
    A = n(713804),
    I = n(992595);
function T(e) {
    let {
            userBio: t,
            className: n,
            animateOnHoverOrFocusOnly: s = !1,
            isHoveringOrFocusing: l = !1,
            lineClamp: d = 6,
            setLineClamp: _ = !0,
            textColor: u,
            userId: c,
        } = e,
        E = r.useMemo(
            () => ((0, g.A)(c) ? (0, i.jsx)(f, {}) : null == t || "" === t ? null : (0, A.parseBioReact)(t)),
            [c, t],
        );
    return null == E
        ? null
        : (0, i.jsx)("div", {
              className: a()(n, I.PT),
              children: (0, i.jsx)(o.E, {
                  variant: "text-sm/normal",
                  lineClamp: _ ? d : void 0,
                  color: void 0 !== u ? u : void 0,
                  children: (0, i.jsx)(p.Y.Provider, {
                      value: { disableAnimations: s && !l, disableInteractions: !1 },
                      children: E,
                  }),
              }),
          });
}
function S(e) {
    let t = r.useId(),
        { userBio: n, userId: s } = e;
    return (0, g.A)(s) || (null != n && "" !== n)
        ? (0, i.jsxs)("section", {
              "aria-labelledby": t,
              children: [
                  (0, i.jsx)(l.A, { children: (0, i.jsx)(d.H, { id: t, children: h.intl.string(h.t.ZzAR2Y) }) }),
                  (0, i.jsx)(T, { ...e }),
              ],
          })
        : null;
}
