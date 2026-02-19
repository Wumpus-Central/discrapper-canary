"use strict";
n.d(t, { bi: () => E, sI: () => m });
var r = n(627968);
n(64700);
var i = n(311907),
    s = n(397927),
    a = n(15285),
    o = n(523527),
    l = n(942405),
    u = n(780964),
    c = n(840065),
    d = n(994322),
    _ = n(22802),
    f = n(652215),
    p = n(985018),
    h = n(352143);
function m(e, t, n) {
    let {
        highlightAdminWarningIfElevated: i,
        useFlexboxLayout: s,
        keybindClassName: a,
    } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    return (0, r.jsx)(g, {
        keybind: e,
        message: t,
        messageWithoutKeybind: n,
        highlightAdminWarningIfElevated: i,
        useFlexboxLayout: s,
        keybindClassName: a,
    });
}
let E = (e, t) =>
    (0, r.jsx)(r.Fragment, {
        children: p.intl.format(t, {
            keybind: e,
            keybindHook: (t, n) => (0, r.jsx)(s.e7I, { shortcut: e, className: h.w, keyClassName: h.bx }, n),
        }),
    });
function g(e) {
    let {
            keybind: t,
            message: n,
            messageWithoutKeybind: m,
            highlightAdminWarningIfElevated: E = !1,
            useFlexboxLayout: g = !1,
            keybindClassName: A,
        } = e,
        I = (0, d.F)(),
        T = (0, i.bG)([a.Ay], () => {
            let e = a.Ay.getVisibleGame();
            return null != e && e.elevated && a.Ay.canShowAdminWarning;
        }),
        S = (0, l.NP)();
    return T
        ? (0, r.jsx)(s.Text, {
              variant: "text-xxs/semibold",
              color: E ? "text-feedback-warning" : "text-muted",
              children: S
                  ? p.intl.format(p.t.MVS9pV, {
                        onSettingsClick: (e) => {
                            e.stopPropagation(),
                                (0, o.A)(void 0, !0),
                                (0, c.openUserSettings)(u.X.OVERLAY_PANEL, { section: f.nc_.OVERLAY });
                        },
                    })
                  : p.intl.string(p.t.PIeSHF),
          })
        : I
          ? g
              ? (0, r.jsx)("div", {
                    className: h.FH,
                    children: p.intl.format(n, {
                        keybind: t,
                        keybindHook: (e) => (0, r.jsx)(_.G, { keybind: t, className: A }, t.join("+")),
                    }),
                })
              : (0, r.jsx)(r.Fragment, {
                    children: p.intl.format(n, {
                        keybind: t,
                        keybindHook: (e) => (0, r.jsx)(_.b, { keybind: t }, t.join("+")),
                    }),
                })
          : m;
}
