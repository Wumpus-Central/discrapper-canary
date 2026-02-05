n.d(t, { Q: () => _, T: () => f });
var a = n(627968);
n(64700);
var s = n(397927),
    i = n(970931),
    l = n(341967),
    r = n(253932),
    o = n(927813),
    d = n(427262),
    c = n(146901),
    u = n(827827),
    m = n(652215),
    h = n(985018);
let x = [
        { duration: 15 * o.A.Millis.MINUTE, label: () => h.intl.string(h.t["8ot6gv"]) },
        { duration: o.A.Millis.HOUR, label: () => h.intl.string(h.t.UMWBZr) },
        { duration: 8 * o.A.Millis.HOUR, label: () => h.intl.string(h.t.EpAXPC) },
        { duration: o.A.Millis.DAY, label: () => h.intl.string(h.t["755t4q"]) },
        { duration: 3 * o.A.Millis.DAY, label: () => h.intl.string(h.t["f3/1ch"]) },
        { duration: void 0, label: () => h.intl.string(h.t["46dqJY"]) },
    ],
    p = "forever";
function g(e) {
    let { status: t, currentStatus: n, description: i } = e,
        l = t !== m.clD.ONLINE,
        r = (0, a.jsx)(a.Fragment, {
            children: x.map((e) => {
                let { duration: i, label: l } = e;
                return (0, a.jsx)(
                    s.Drp,
                    {
                        id: `${t}-${i}`,
                        label: l(),
                        action: () => (0, u.A)({ nextStatus: t, prevStatus: n, durationMillis: i }),
                        dontCloseOnAction: !0,
                    },
                    i ?? p,
                );
            }),
        });
    return (0, a.jsx)(s.Drp, {
        id: t,
        keepItemStyles: !0,
        hasSubmenu: l,
        label: (0, d.MU)(t),
        subtext: i,
        iconLeft: () => (0, a.jsx)(s.nW6, { status: t, size: 10 }),
        leadingAccessory: { type: "status", status: t },
        action: () => {
            (0, u.A)({ nextStatus: t, prevStatus: n });
        },
        dontCloseOnAction: !0,
        children: l ? r : void 0,
    });
}
function _(e) {
    if (null == e || "0" === e) return;
    let { kind: t, dateString: n, timeString: a } = (0, c._)(e);
    return "today" === t
        ? h.intl.formatToPlainString(h.t.ZxxHIO, { timeString: a })
        : h.intl.formatToPlainString(h.t["9OFjSe"], { dateString: n, timeString: a });
}
function f(e) {
    let t = r.CY.useSetting(),
        n = (0, i.kB)(),
        o = l.P.useExperiment({ location: "UserProfileAccountPopout" }).allowQuietMode || n,
        d = r.Jr.useSetting(),
        c = e === m.clD.DND,
        u = (n) => {
            let a = _(t);
            if (e === n && null != a) return a;
            switch (n) {
                case m.clD.DND:
                    return o ? h.intl.string(h.t.day5A6) : h.intl.string(h.t["tq/fMK"]);
                case m.clD.INVISIBLE:
                    return h.intl.string(h.t.zPc6Mc);
                default:
                    return;
            }
        },
        f = (0, a.jsx)(a.Fragment, {
            children: x.map((t) => {
                let { duration: n, label: l } = t;
                return (0, a.jsx)(
                    s.Drp,
                    {
                        id: `${e}-${n}`,
                        label: l(),
                        action: () => {
                            (0, i.ES)(!0, n);
                        },
                        dontCloseOnAction: !0,
                    },
                    n ?? p,
                );
            }),
        }),
        v = g({ status: m.clD.ONLINE, currentStatus: e }),
        b = g({ status: m.clD.IDLE, currentStatus: e, description: u(m.clD.IDLE) }),
        j = g({ status: m.clD.DND, currentStatus: e, description: u(m.clD.DND) }),
        A = g({ status: m.clD.INVISIBLE, currentStatus: e, description: u(m.clD.INVISIBLE) });
    return (0, a.jsxs)(a.Fragment, {
        children: [
            v,
            (0, a.jsx)(s.bXX, {}, "menu-separator-statuses"),
            b,
            j,
            A,
            o || n
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(s.bXX, {}, "menu-separator-statuses"),
                          (0, a.jsx)(
                              s.Drp,
                              {
                                  id: "quiet-mode",
                                  "aria-label": "focus mode",
                                  keepItemStyles: !0,
                                  hasSubmenu: !0,
                                  label: h.intl.string(h.t.gJRnwK),
                                  iconLeft: s.a_I,
                                  leadingAccessory: { type: "icon", icon: s.a_I },
                                  badge: {
                                      text: n
                                          ? h.intl.string(h.t.ApAu9f)
                                          : c
                                            ? h.intl.string(h.t.gH3Frd)
                                            : h.intl.string(h.t["64pl82"]),
                                  },
                                  subtext:
                                      n && null != d && "0" !== d
                                          ? h.intl.format(h.t.BWD8fs, {
                                                endTime: new Date(Number(d)).toLocaleString(h.intl.currentLocale, {
                                                    month: "numeric",
                                                    day: "numeric",
                                                    hour: "numeric",
                                                    minute: "2-digit",
                                                }),
                                            })
                                          : h.intl.string(h.t["Br1q+x"]),
                                  action: () => {
                                      (0, i.ES)(!n);
                                  },
                                  dontCloseOnAction: !0,
                                  children: f,
                              },
                              "quiet-mode",
                          ),
                      ],
                  })
                : null,
        ],
    });
}
