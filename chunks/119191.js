i.d(t, { bi: () => f, sI: () => h });
var n = i(627968);
i(64700);
var a = i(311907),
    l = i(397927),
    r = i(15285),
    s = i(523527),
    o = i(942405),
    d = i(780964),
    c = i(840065),
    u = i(994322),
    m = i(22802),
    _ = i(652215),
    A = i(985018),
    g = i(352143);
function h(e, t, i) {
    let {
        highlightAdminWarningIfElevated: a,
        useFlexboxLayout: l,
        keybindClassName: r,
    } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    return (0, n.jsx)(p, {
        keybind: e,
        message: t,
        messageWithoutKeybind: i,
        highlightAdminWarningIfElevated: a,
        useFlexboxLayout: l,
        keybindClassName: r,
    });
}
let f = (e, t) =>
    (0, n.jsx)(n.Fragment, {
        children: A.intl.format(t, {
            keybind: e,
            keybindHook: (t, i) => (0, n.jsx)(l.e7I, { shortcut: e, className: g.w, keyClassName: g.bx }, i),
        }),
    });
function p(e) {
    let {
            keybind: t,
            message: i,
            messageWithoutKeybind: h,
            highlightAdminWarningIfElevated: f = !1,
            useFlexboxLayout: p = !1,
            keybindClassName: S,
        } = e,
        I = (0, u.F)(),
        x = (0, a.bG)([r.Ay], () => {
            let e = r.Ay.getVisibleGame();
            return null != e && e.elevated && r.Ay.canShowAdminWarning;
        }),
        v = (0, o.NP)();
    return x
        ? (0, n.jsx)(l.Text, {
              variant: "text-xxs/semibold",
              color: f ? "text-feedback-warning" : "text-muted",
              children: v
                  ? A.intl.format(A.t.MVS9pV, {
                        onSettingsClick: (e) => {
                            e.stopPropagation(),
                                (0, s.A)(void 0, !0),
                                (0, c.openUserSettings)(d.X.OVERLAY_PANEL, { section: _.nc_.OVERLAY });
                        },
                    })
                  : A.intl.string(A.t.PIeSHF),
          })
        : I
          ? p
              ? (0, n.jsx)("div", {
                    className: g.FH,
                    children: A.intl.format(i, {
                        keybind: t,
                        keybindHook: (e) => (0, n.jsx)(m.G, { keybind: t, className: S }, t.join("+")),
                    }),
                })
              : (0, n.jsx)(n.Fragment, {
                    children: A.intl.format(i, {
                        keybind: t,
                        keybindHook: (e) => (0, n.jsx)(m.b, { keybind: t }, t.join("+")),
                    }),
                })
          : h;
}
