n.d(t, {
    F: () => v,
    I: () => j,
}),
    n(953529);
var a = n(54381);
n(473749);
var l = n(722770),
    r = n(481060),
    i = n(734934),
    s = n(158238),
    o = n(695346),
    c = n(70956),
    d = n(51144),
    u = n(246133),
    m = n(981631),
    p = n(388032),
    h = n(54482);
let x = [
        {
            duration: 15 * c.Z.Millis.MINUTE,
            label: () => p.intl.string(p.t["8ot6gv"]),
        },
        {
            duration: c.Z.Millis.HOUR,
            label: () => p.intl.string(p.t.UMWBZr),
        },
        {
            duration: 8 * c.Z.Millis.HOUR,
            label: () => p.intl.string(p.t.EpAXPC),
        },
        {
            duration: c.Z.Millis.DAY,
            label: () => p.intl.string(p.t["755t4q"]),
        },
        {
            duration: 3 * c.Z.Millis.DAY,
            label: () => p.intl.string(p.t["f3/1ch"]),
        },
        {
            duration: void 0,
            label: () => p.intl.string(p.t["46dqJY"]),
        },
    ],
    g = "forever";
function f(e, t) {
    return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate();
}
function b(e) {
    let { status: t, currentStatus: n, description: l } = e,
        i = t !== m.Skl.ONLINE,
        s = (0, a.jsx)(a.Fragment, {
            children: x.map((e) => {
                let { duration: l, label: i } = e;
                return (0, a.jsx)(
                    r.sNh,
                    {
                        id: "".concat(t, "-").concat(l),
                        label: i(),
                        action: () =>
                            (0, u.Z)({
                                nextStatus: t,
                                prevStatus: n,
                                durationMillis: l,
                            }),
                        dontCloseOnAction: !0,
                    },
                    null != l ? l : g,
                );
            }),
        });
    return (0, a.jsx)(r.sNh, {
        id: t,
        className: h.expiringStatusMenuItem,
        keepItemStyles: !0,
        hasSubmenu: i,
        label: (e) => {
            let { isFocused: n } = e;
            return (0, a.jsxs)("div", {
                className: h.statusItem,
                children: [
                    (0, a.jsx)(r.qbd, {
                        status: t,
                        className: h.icon,
                        size: 10,
                        color: n ? "currentColor" : void 0,
                    }),
                    (0, a.jsx)("div", {
                        className: h.status,
                        children: (0, d.u5)(t),
                    }),
                    null != l &&
                        (0, a.jsx)("div", {
                            className: h.description,
                            children: l,
                        }),
                ],
            });
        },
        action: () => {
            (0, u.Z)({
                nextStatus: t,
                prevStatus: n,
            });
        },
        dontCloseOnAction: !0,
        children: i ? s : void 0,
    });
}
function v(e) {
    if (null == e || "0" === e) return;
    let t = new Date(Number(e)),
        n = f(t, new Date()),
        a = new Date();
    a.setDate(a.getDate() + 1);
    let l = f(t, a);
    return n
        ? p.intl.formatToPlainString(p.t.ZxxHIO, { timeString: p.intl.data.formatTime(t, { format: "short" }) })
        : p.intl.formatToPlainString(p.t["9OFjSe"], {
              dateString: l
                  ? p.intl.data.formatRelativeTime(1, "day", { numeric: "auto" })
                  : p.intl.data.formatDate(t, { dateStyle: "short" }),
              timeString: p.intl.data.formatTime(t, { format: "short" }),
          });
}
function j(e) {
    let t = o.Cr.useSetting(),
        n = (0, i.p)(),
        c = s.e.useExperiment({ location: "UserProfileAccountPopout" }).allowQuietMode || n,
        d = o.fv.useSetting(),
        u = e === m.Skl.DND,
        f = (n) => {
            let a = v(t);
            if (e === n && null != a) return a;
            switch (n) {
                case m.Skl.DND:
                    return c ? p.intl.string(p.t.day5A6) : p.intl.string(p.t["tq/fMK"]);
                case m.Skl.INVISIBLE:
                    return p.intl.string(p.t.zPc6Mc);
                default:
                    return;
            }
        },
        j = (0, a.jsx)(a.Fragment, {
            children: x.map((t) => {
                let { duration: n, label: l } = t;
                return (0, a.jsx)(
                    r.sNh,
                    {
                        id: "".concat(e, "-").concat(n),
                        label: l(),
                        action: () => {
                            (0, i.oW)(!0, n);
                        },
                        dontCloseOnAction: !0,
                    },
                    null != n ? n : g,
                );
            }),
        }),
        _ = b({
            status: m.Skl.ONLINE,
            currentStatus: e,
        }),
        y = b({
            status: m.Skl.IDLE,
            currentStatus: e,
            description: f(m.Skl.IDLE),
        }),
        C = b({
            status: m.Skl.DND,
            currentStatus: e,
            description: f(m.Skl.DND),
        }),
        S = b({
            status: m.Skl.INVISIBLE,
            currentStatus: e,
            description: f(m.Skl.INVISIBLE),
        });
    return (0, a.jsxs)(a.Fragment, {
        children: [
            _,
            (0, a.jsx)(r.Clw, {}, "menu-separator-statuses"),
            y,
            C,
            S,
            c || n
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(r.Clw, {}, "menu-separator-statuses"),
                          (0, a.jsx)(
                              r.sNh,
                              {
                                  id: "quiet-mode",
                                  "aria-label": "focus mode",
                                  className: h.expiringStatusMenuItem,
                                  keepItemStyles: !0,
                                  hasSubmenu: !0,
                                  label: () =>
                                      (0, a.jsxs)("div", {
                                          className: h.statusItem,
                                          children: [
                                              (0, a.jsx)(r.owu, {
                                                  size: "xxs",
                                                  className: h.icon,
                                              }),
                                              (0, a.jsxs)("div", {
                                                  className: h.focusModeTitle,
                                                  children: [
                                                      p.intl.string(p.t.gJRnwK),
                                                      (0, a.jsx)(r.IGR, {
                                                          text: n
                                                              ? p.intl.string(p.t.ApAu9f)
                                                              : u
                                                                ? p.intl.string(p.t.gH3Frd)
                                                                : p.intl.string(p.t["64pl82"]),
                                                          color: n ? l.Z.BRAND_500 : u ? l.Z.RED_400 : l.Z.PRIMARY_500,
                                                      }),
                                                  ],
                                              }),
                                              (0, a.jsx)("div", {
                                                  className: h.description,
                                                  children:
                                                      n && null != d && "0" !== d
                                                          ? p.intl.formatToPlainString(p.t.BWD8fs, {
                                                                endTime: new Date(Number(d)).toLocaleString(
                                                                    p.intl.currentLocale,
                                                                    {
                                                                        month: "numeric",
                                                                        day: "numeric",
                                                                        hour: "numeric",
                                                                        minute: "2-digit",
                                                                    },
                                                                ),
                                                            })
                                                          : p.intl.string(p.t["Br1q+x"]),
                                              }),
                                          ],
                                      }),
                                  action: () => {
                                      (0, i.oW)(!n);
                                  },
                                  dontCloseOnAction: !0,
                                  children: j,
                              },
                              "quiet-mode",
                          ),
                      ],
                  })
                : null,
        ],
    });
}
