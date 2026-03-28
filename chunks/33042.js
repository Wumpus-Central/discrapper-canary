n.d(t, { Q: () => g, T: () => _ });
var a = n(627968);
n(64700);
var i = n(397927),
    s = n(970931),
    l = n(253932),
    r = n(927813),
    o = n(427262),
    d = n(146901),
    c = n(827827),
    u = n(652215),
    m = n(985018);
let h = [
        { duration: 15 * r.A.Millis.MINUTE, label: () => m.intl.string(m.t["8ot6gv"]) },
        { duration: r.A.Millis.HOUR, label: () => m.intl.string(m.t.UMWBZr) },
        { duration: 8 * r.A.Millis.HOUR, label: () => m.intl.string(m.t.EpAXPC) },
        { duration: r.A.Millis.DAY, label: () => m.intl.string(m.t["755t4q"]) },
        { duration: 3 * r.A.Millis.DAY, label: () => m.intl.string(m.t["f3/1ch"]) },
        { duration: void 0, label: () => m.intl.string(m.t["46dqJY"]) },
    ],
    x = "forever";
function p(e) {
    let { status: t, currentStatus: n, description: s } = e,
        l = t !== u.clD.ONLINE,
        r = (0, a.jsx)(a.Fragment, {
            children: h.map((e) => {
                let { duration: s, label: l } = e;
                return (0, a.jsx)(
                    i.Drp,
                    {
                        id: `${t}-${s}`,
                        label: l(),
                        action: () => (0, c.A)({ nextStatus: t, prevStatus: n, durationMillis: s }),
                        dontCloseOnAction: !0,
                    },
                    s ?? x,
                );
            }),
        });
    return (0, a.jsx)(i.Drp, {
        id: t,
        keepItemStyles: !0,
        hasSubmenu: l,
        label: (0, o.MU)(t),
        subtext: s,
        iconLeft: () => (0, a.jsx)(i.nW6, { status: t, size: 10 }),
        leadingAccessory: { type: "status", status: t },
        action: () => {
            (0, c.A)({ nextStatus: t, prevStatus: n });
        },
        dontCloseOnAction: !0,
        children: l ? r : void 0,
    });
}
function g(e) {
    if (null == e || "0" === e) return;
    let { kind: t, dateString: n, timeString: a } = (0, d._)(e);
    return "today" === t
        ? m.intl.formatToPlainString(m.t.ZxxHIO, { timeString: a })
        : m.intl.formatToPlainString(m.t["9OFjSe"], { dateString: n, timeString: a });
}
function _(e) {
    let t = l.CY.useSetting(),
        n = (0, s.kB)(),
        r = l.Jr.useSetting(),
        o = (a) => {
            let i = g(t);
            if (e === a && null != i) return i;
            switch (a) {
                case u.clD.DND:
                    return n ? m.intl.string(m.t.day5A6) : m.intl.string(m.t["tq/fMK"]);
                case u.clD.INVISIBLE:
                    return m.intl.string(m.t.zPc6Mc);
                default:
                    return;
            }
        },
        d = (0, a.jsx)(a.Fragment, {
            children: h.map((t) => {
                let { duration: n, label: l } = t;
                return (0, a.jsx)(
                    i.Drp,
                    {
                        id: `${e}-${n}`,
                        label: l(),
                        action: () => {
                            (0, s.ES)(!0, n);
                        },
                        dontCloseOnAction: !0,
                    },
                    n ?? x,
                );
            }),
        }),
        c = p({ status: u.clD.ONLINE, currentStatus: e }),
        _ = p({ status: u.clD.IDLE, currentStatus: e, description: o(u.clD.IDLE) }),
        f = p({ status: u.clD.DND, currentStatus: e, description: o(u.clD.DND) }),
        v = p({ status: u.clD.INVISIBLE, currentStatus: e, description: o(u.clD.INVISIBLE) });
    return (0, a.jsxs)(a.Fragment, {
        children: [
            c,
            (0, a.jsx)(i.bXX, {}, "menu-separator-statuses"),
            _,
            f,
            v,
            n
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(i.bXX, {}, "menu-separator-statuses"),
                          (0, a.jsx)(
                              i.Drp,
                              {
                                  id: "quiet-mode",
                                  "aria-label": "focus mode",
                                  keepItemStyles: !0,
                                  hasSubmenu: !0,
                                  label: m.intl.string(m.t.gJRnwK),
                                  iconLeft: i.a_I,
                                  leadingAccessory: { type: "icon", icon: i.a_I },
                                  badge: { text: m.intl.string(m.t.ApAu9f) },
                                  subtext:
                                      null != r && "0" !== r
                                          ? m.intl.format(m.t.BWD8fs, {
                                                endTime: new Date(Number(r)).toLocaleString(m.intl.currentLocale, {
                                                    month: "numeric",
                                                    day: "numeric",
                                                    hour: "numeric",
                                                    minute: "2-digit",
                                                }),
                                            })
                                          : m.intl.string(m.t["Br1q+x"]),
                                  action: () => {
                                      (0, s.ES)(!n);
                                  },
                                  dontCloseOnAction: !0,
                                  children: d,
                              },
                              "quiet-mode",
                          ),
                      ],
                  })
                : null,
        ],
    });
}
