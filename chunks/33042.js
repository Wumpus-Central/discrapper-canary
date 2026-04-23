n.d(t, { Q: () => g, T: () => x });
var i = n(627968);
n(64700);
var s = n(477782),
    l = n(935154),
    a = n(780338),
    r = n(970931),
    o = n(253932),
    d = n(927813),
    c = n(427262),
    u = n(146901),
    p = n(827827),
    h = n(652215),
    m = n(985018);
let _ = [
        { duration: 15 * d.A.Millis.MINUTE, label: () => m.intl.string(m.t["8ot6gv"]) },
        { duration: d.A.Millis.HOUR, label: () => m.intl.string(m.t.UMWBZr) },
        { duration: 8 * d.A.Millis.HOUR, label: () => m.intl.string(m.t.EpAXPC) },
        { duration: d.A.Millis.DAY, label: () => m.intl.string(m.t["755t4q"]) },
        { duration: 3 * d.A.Millis.DAY, label: () => m.intl.string(m.t["f3/1ch"]) },
        { duration: void 0, label: () => m.intl.string(m.t["46dqJY"]) },
    ],
    A = "forever";
function f(e) {
    let { status: t, currentStatus: n, description: a } = e,
        r = t !== h.clD.ONLINE,
        o = (0, i.jsx)(i.Fragment, {
            children: _.map((e) => {
                let { duration: l, label: a } = e;
                return (0, i.jsx)(
                    s.Dr,
                    {
                        id: `${t}-${l}`,
                        label: a(),
                        action: () => (0, p.A)({ nextStatus: t, prevStatus: n, durationMillis: l }),
                        dontCloseOnAction: !0,
                    },
                    l ?? A,
                );
            }),
        });
    return (0, i.jsx)(s.Dr, {
        id: t,
        keepItemStyles: !0,
        hasSubmenu: r,
        label: (0, c.MU)(t),
        subtext: a,
        iconLeft: () => (0, i.jsx)(l.nW, { status: t, size: 10 }),
        leadingAccessory: { type: "status", status: t },
        action: () => {
            (0, p.A)({ nextStatus: t, prevStatus: n });
        },
        dontCloseOnAction: !0,
        children: r ? o : void 0,
    });
}
function g(e) {
    if (null == e || "0" === e) return;
    let { kind: t, dateString: n, timeString: i } = (0, u._)(e);
    return "today" === t
        ? m.intl.formatToPlainString(m.t.ZxxHIO, { timeString: i })
        : m.intl.formatToPlainString(m.t["9OFjSe"], { dateString: n, timeString: i });
}
function x(e) {
    let t = o.CY.useSetting(),
        n = (0, r.kB)(),
        l = o.Jr.useSetting(),
        d = (i) => {
            let s = g(t);
            if (e === i && null != s) return s;
            switch (i) {
                case h.clD.DND:
                    return n ? m.intl.string(m.t.day5A6) : m.intl.string(m.t["tq/fMK"]);
                case h.clD.INVISIBLE:
                    return m.intl.string(m.t.zPc6Mc);
                default:
                    return;
            }
        },
        c = (0, i.jsx)(i.Fragment, {
            children: _.map((t) => {
                let { duration: n, label: l } = t;
                return (0, i.jsx)(
                    s.Dr,
                    {
                        id: `${e}-${n}`,
                        label: l(),
                        action: () => {
                            (0, r.ES)(!0, n);
                        },
                        dontCloseOnAction: !0,
                    },
                    n ?? A,
                );
            }),
        }),
        u = f({ status: h.clD.ONLINE, currentStatus: e }),
        p = f({ status: h.clD.IDLE, currentStatus: e, description: d(h.clD.IDLE) }),
        x = f({ status: h.clD.DND, currentStatus: e, description: d(h.clD.DND) }),
        E = f({ status: h.clD.INVISIBLE, currentStatus: e, description: d(h.clD.INVISIBLE) });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            u,
            (0, i.jsx)(s.bX, {}, "menu-separator-statuses"),
            p,
            x,
            E,
            n
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(s.bX, {}, "menu-separator-statuses"),
                          (0, i.jsx)(
                              s.Dr,
                              {
                                  id: "quiet-mode",
                                  "aria-label": "focus mode",
                                  keepItemStyles: !0,
                                  hasSubmenu: !0,
                                  label: m.intl.string(m.t.gJRnwK),
                                  iconLeft: a.a,
                                  leadingAccessory: { type: "icon", icon: a.a },
                                  badge: { text: m.intl.string(m.t.ApAu9f) },
                                  subtext:
                                      null != l && "0" !== l
                                          ? m.intl.format(m.t.BWD8fs, {
                                                endTime: new Date(Number(l)).toLocaleString(m.intl.currentLocale, {
                                                    month: "numeric",
                                                    day: "numeric",
                                                    hour: "numeric",
                                                    minute: "2-digit",
                                                }),
                                            })
                                          : m.intl.string(m.t["Br1q+x"]),
                                  action: () => {
                                      (0, r.ES)(!n);
                                  },
                                  dontCloseOnAction: !0,
                                  children: c,
                              },
                              "quiet-mode",
                          ),
                      ],
                  })
                : null,
        ],
    });
}
