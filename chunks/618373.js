n.d(t, {
    Ae: () => g,
    QR: () => m,
});
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(481060),
    o = n(594190),
    s = n(174609),
    l = n(865066),
    c = n(313789),
    u = n(518596),
    d = n(809357),
    f = n(44359),
    _ = n(981631),
    p = n(388032),
    h = n(8280);
function m(e, t, n) {
    let {
        highlightAdminWarningIfElevated: i,
        useFlexboxLayout: a,
        keybindClassName: o,
    } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    return (0, r.jsx)(E, {
        keybind: e,
        message: t,
        messageWithoutKeybind: n,
        highlightAdminWarningIfElevated: i,
        useFlexboxLayout: a,
        keybindClassName: o,
    });
}
let g = (e, t) =>
    (0, r.jsx)(r.Fragment, {
        children: p.intl.format(t, {
            keybind: e,
            keybindHook: (t, n) =>
                (0, r.jsx)(
                    a.M2$,
                    {
                        shortcut: e,
                        className: h.keyCombo,
                        keyClassName: h.keyComboKey,
                    },
                    n,
                ),
        }),
    });
function E(e) {
    let {
            keybind: t,
            message: n,
            messageWithoutKeybind: m,
            highlightAdminWarningIfElevated: g = !1,
            useFlexboxLayout: E = !1,
            keybindClassName: b,
        } = e,
        y = (0, d.o)(),
        O = (0, i.e7)([o.ZP], () => {
            let e = o.ZP.getVisibleGame();
            return null != e && e.elevated && o.ZP.canShowAdminWarning;
        }),
        v = (0, l.hi)();
    return O
        ? (0, r.jsx)(a.Text, {
              variant: "text-xxs/semibold",
              color: g ? "text-feedback-warning" : "text-muted",
              children: v
                  ? p.intl.format(p.t.MVS9pV, {
                        onSettingsClick: (e) => {
                            e.stopPropagation(),
                                (0, s.Z)(void 0, !0),
                                (0, u.openUserSettings)(c.n.OVERLAY_PANEL, { section: _.oAB.OVERLAY });
                        },
                    })
                  : p.intl.string(p.t.PIeSHF),
          })
        : y
          ? E
              ? (0, r.jsx)("div", {
                    className: h.keybindFlexboxLayout,
                    children: p.intl.format(n, {
                        keybind: t,
                        keybindHook: (e) =>
                            (0, r.jsx)(
                                f.l,
                                {
                                    keybind: t,
                                    className: b,
                                },
                                t.join("+"),
                            ),
                    }),
                })
              : (0, r.jsx)(r.Fragment, {
                    children: p.intl.format(n, {
                        keybind: t,
                        keybindHook: (e) => (0, r.jsx)(f.t, { keybind: t }, t.join("+")),
                    }),
                })
          : m;
}
