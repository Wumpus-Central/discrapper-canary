"use strict";
n.d(t, { sI: () => p });
var r = n(627968);
n(64700);
var i = n(311907),
    s = n(397927),
    a = n(15285),
    o = n(523527),
    l = n(942405),
    u = n(780964),
    c = n(858897),
    d = n(22802),
    _ = n(985018),
    f = n(214164);
function p(e, t) {
    let {
        highlightAdminWarningIfElevated: n,
        useFlexboxLayout: i,
        keybindClassName: s,
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return (0, r.jsx)(h, {
        keybind: e,
        message: t,
        highlightAdminWarningIfElevated: n,
        useFlexboxLayout: i,
        keybindClassName: s,
    });
}
function h(e) {
    let {
            keybind: t,
            message: n,
            highlightAdminWarningIfElevated: p = !1,
            useFlexboxLayout: h = !1,
            keybindClassName: m,
        } = e,
        E = (0, i.bG)([a.Ay], () => {
            let e = a.Ay.getVisibleGame();
            return null != e && e.elevated && a.Ay.canShowAdminWarning;
        }),
        g = (0, l.NP)();
    return E
        ? (0, r.jsx)(s.Text, {
              variant: "text-xxs/semibold",
              color: p ? "text-feedback-warning" : "text-muted",
              children: g
                  ? _.intl.format(_.t.MVS9pV, {
                        onSettingsClick: (e) => {
                            e.stopPropagation(), (0, o.A)(void 0, !0), (0, c.openUserSettings)(u.X.OVERLAY_PANEL);
                        },
                    })
                  : _.intl.string(_.t.PIeSHF),
          })
        : h
          ? (0, r.jsx)("div", {
                className: f.FH,
                children: _.intl.format(n, {
                    keybind: t,
                    keybindHook: (e) => (0, r.jsx)(d.G, { keybind: t, className: m }, t.join("+")),
                }),
            })
          : (0, r.jsx)(r.Fragment, {
                children: _.intl.format(n, {
                    keybind: t,
                    keybindHook: (e) => (0, r.jsx)(d.b, { keybind: t }, t.join("+")),
                }),
            });
}
