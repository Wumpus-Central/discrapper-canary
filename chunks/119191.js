"use strict";
n.d(t, { sI: () => h });
var r = n(627968);
n(64700);
var i = n(311907),
    s = n(397927),
    a = n(15285),
    o = n(523527),
    l = n(942405),
    u = n(780964),
    c = n(858897),
    d = n(994322),
    _ = n(22802),
    f = n(985018),
    p = n(214164);
function h(e, t, n) {
    let {
        highlightAdminWarningIfElevated: i,
        useFlexboxLayout: s,
        keybindClassName: a,
    } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    return (0, r.jsx)(m, {
        keybind: e,
        message: t,
        messageWithoutKeybind: n,
        highlightAdminWarningIfElevated: i,
        useFlexboxLayout: s,
        keybindClassName: a,
    });
}
function m(e) {
    let {
            keybind: t,
            message: n,
            messageWithoutKeybind: h,
            highlightAdminWarningIfElevated: m = !1,
            useFlexboxLayout: E = !1,
            keybindClassName: g,
        } = e,
        A = (0, d.F)(),
        I = (0, i.bG)([a.Ay], () => {
            let e = a.Ay.getVisibleGame();
            return null != e && e.elevated && a.Ay.canShowAdminWarning;
        }),
        T = (0, l.NP)();
    return I
        ? (0, r.jsx)(s.Text, {
              variant: "text-xxs/semibold",
              color: m ? "text-feedback-warning" : "text-muted",
              children: T
                  ? f.intl.format(f.t.MVS9pV, {
                        onSettingsClick: (e) => {
                            e.stopPropagation(), (0, o.A)(void 0, !0), (0, c.openUserSettings)(u.X.OVERLAY_PANEL);
                        },
                    })
                  : f.intl.string(f.t.PIeSHF),
          })
        : A
          ? E
              ? (0, r.jsx)("div", {
                    className: p.FH,
                    children: f.intl.format(n, {
                        keybind: t,
                        keybindHook: (e) => (0, r.jsx)(_.G, { keybind: t, className: g }, t.join("+")),
                    }),
                })
              : (0, r.jsx)(r.Fragment, {
                    children: f.intl.format(n, {
                        keybind: t,
                        keybindHook: (e) => (0, r.jsx)(_.b, { keybind: t }, t.join("+")),
                    }),
                })
          : h;
}
