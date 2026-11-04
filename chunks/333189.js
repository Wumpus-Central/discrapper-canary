var n = s(477900),
    r = s(582128),
    i = s(855986),
    a = s(189213),
    l = s(834730),
    c = s(778712),
    d = s(821609),
    u = s(939249),
    o = s(683438),
    h = s(298990),
    m = s(966327),
    x = s(775602),
    j = s(662090),
    b = s(47167),
    A = s(598104),
    E = s(255266),
    f = s(72563),
    g = s(921955),
    y = s(71393),
    p = s(994500),
    _ = s(188567),
    v = s(427262),
    N = s(652215),
    D = s(792996),
    C = s(915822);
function R(e) {
    let { channel: t, guildName: s } = e,
        r = (0, i.bG)([y.A], () => y.A.getGuild(t.guild_id)),
        a = (0, b.Ay)(t);
    return (0, n.jsxs)("div", {
        className: C.Ke,
        children: [
            (0, n.jsx)(E.A, { size: E.q.SMALL_32, guild: r, channel: t }),
            (0, n.jsxs)("div", {
                className: C.D6,
                children: [
                    (0, n.jsx)(l.E, { variant: "body-md/medium", children: a }),
                    (0, n.jsx)(l.E, { variant: "body-xs/normal", children: s }),
                ],
            }),
        ],
    });
}
function S(e) {
    let { channel: t } = e,
        s = (0, b.Ay)(t),
        r = (0, f.i)(t);
    return (0, n.jsxs)("div", {
        className: C.Ke,
        children: [
            (0, n.jsx)(A.A, { "aria-hidden": !0, size: c._3.SIZE_32, channel: t }),
            (0, n.jsxs)("div", {
                className: C.D6,
                children: [
                    (0, n.jsx)(l.E, { variant: "body-md/medium", children: s }),
                    (0, n.jsx)(l.E, { variant: "body-xs/normal", children: r }),
                ],
            }),
        ],
    });
}
function k(e) {
    let { user: t, status: s } = e,
        r = (0, i.bG)([p.A], () => p.A.getNickname(t.id)),
        a = v.Ay.useName(t),
        d = v.Ay.useUserTag(t);
    return (0, n.jsxs)("div", {
        className: C.Ke,
        children: [
            (0, n.jsx)(m.A, { "aria-hidden": !0, size: c._3.SIZE_32, user: t, status: s }),
            (0, n.jsxs)("div", {
                className: C.D6,
                children: [
                    (0, n.jsx)(l.E, { variant: "body-md/medium", children: r ?? a }),
                    (0, n.jsx)(l.E, { variant: "body-xs/normal", children: d }),
                ],
            }),
        ],
    });
}
function P(e) {
    let { text: t } = e;
    return (0, n.jsx)("div", {
        className: C.bV,
        children: (0, n.jsx)(l.E, { variant: "body-xs/semibold", color: "text-muted", children: t }),
    });
}
class L extends r.Component {
    handleClick = () => {
        let { onInvite: e, row: t } = this.props;
        e(t);
    };
    render() {
        let e,
            t,
            { result: s, sending: r } = this.props;
        switch (s.type) {
            case j.rD.GROUP_DM:
                e = (0, n.jsx)(S, { channel: s.data.record });
                break;
            case j.rD.TEXT_CHANNEL: {
                let { categoryName: t, guildName: r } = s;
                e = (0, n.jsx)(R, { channel: s.data.record, categoryName: t, guildName: r });
                break;
            }
            case j.rD.USER: {
                let {
                    data: { comparator: t, record: r },
                    status: i,
                } = s;
                e = (0, n.jsx)(k, { comparator: t, user: r, status: i });
            }
        }
        return (
            (t = s.sent
                ? (0, n.jsx)(d.$, { variant: "secondary", text: D.intl.string(D.t.i6A1Xw), size: "sm", disabled: !0 })
                : (0, n.jsx)(d.$, {
                      variant: "secondary",
                      text: D.intl.string(D.t["6F9ivu"]),
                      size: "sm",
                      loading: r,
                  })),
            (0, n.jsxs)(u.D, { className: C.Nn, onClick: this.handleClick, children: [e, t] })
        );
    }
}
s.d(
    t,
    {},
    {
        default: function (e) {
            let { transitionState: t, onClose: s } = e,
                {
                    results: l,
                    query: c,
                    activity: d,
                } = (0, i.cf)(
                    [g.A],
                    () => ({ results: g.A.getResults(), query: g.A.getQuery(), activity: g.A.getActivity() }),
                    [],
                ),
                [u, m] = r.useState(c),
                [b, A] = r.useState([]),
                [E, f] = r.useState(!1),
                y = r.useRef(null),
                p = r.useCallback(() => {
                    y.current?.scrollPageUp({ animate: !x.Ay.useReducedMotion });
                }, [y]),
                v = r.useCallback(() => {
                    y.current?.scrollPageDown({ animate: !x.Ay.useReducedMotion });
                }, [y]);
            (r.useEffect(
                () => (
                    _._.subscribe(N.jej.SCROLL_PAGE_UP, p),
                    () => {
                        _._.unsubscribe(N.jej.SCROLL_PAGE_UP, p);
                    }
                ),
                [p],
            ),
                r.useEffect(
                    () => (
                        _._.subscribe(N.jej.SCROLL_PAGE_DOWN, v),
                        () => {
                            _._.unsubscribe(N.jej.SCROLL_PAGE_DOWN, v);
                        }
                    ),
                    [v],
                ),
                r.useEffect(() => {
                    null == d && s();
                }, [s, d]),
                r.useEffect(() => {
                    y.current?.scrollToTop();
                }, [y, c]));
            let R = r.useCallback(
                (e) => {
                    let t = l[e];
                    if (null == t || t.type === j.rD.HEADER) return;
                    let {
                        data: s,
                        data: {
                            record: { id: n },
                        },
                    } = t;
                    if (!(null == n || b.includes(n)))
                        switch ((A([...b, n]), s.type)) {
                            case j.rD.GROUP_DM:
                            case j.rD.TEXT_CHANNEL:
                                (0, h.b4)(s.record.id);
                                break;
                            case j.rD.USER:
                                (0, h.Jb)(s.record.id);
                        }
                },
                [l, b],
            );
            function S(e) {
                (m(e), (0, h.oR)(e));
            }
            return null == d
                ? null
                : (0, n.jsx)(a.a, {
                      transitionState: t,
                      title: D.intl.formatToPlainString(D.t["2tN7ih"], { name: d.name }),
                      onClose: s,
                      actions: [],
                      input: (0, n.jsx)(o.I, {
                          query: u,
                          onChange: S,
                          placeholder: D.intl.string(D.t["5h0QOP"]),
                          autoFocus: !0,
                          onClear: function () {
                              S("");
                          },
                      }),
                      size: "md",
                      "aria-label": D.intl.formatToPlainString(D.t["2tN7ih"], { name: d.name }),
                      listProps:
                          l.length > 0
                              ? {
                                    ref: y,
                                    paddingBottom: 12,
                                    sections: [l.length],
                                    sectionHeight: 0,
                                    renderSection: N.FXj,
                                    rowHeight: function (e, t) {
                                        if (e > 0) return 0;
                                        let s = l[t];
                                        return null == s ? 0 : s.type === j.rD.HEADER ? 32 : 48;
                                    },
                                    renderRow: function (e) {
                                        let { section: t, row: s } = e;
                                        if (t > 0) return null;
                                        let r = l[s];
                                        return null == r
                                            ? null
                                            : r.type === j.rD.HEADER
                                              ? (0, n.jsx)(P, { text: r.data.record.text }, r.data.record.id)
                                              : (0, n.jsx)(
                                                    L,
                                                    {
                                                        row: s,
                                                        result: r,
                                                        sending:
                                                            null != r.data.record.id && b.includes(r.data.record.id),
                                                        onInvite: R,
                                                    },
                                                    r.data.record.id,
                                                );
                                    },
                                    onScroll: function (e) {
                                        let t = e.currentTarget.scrollTop > 0;
                                        E !== t && f(t);
                                    },
                                }
                              : void 0,
                      children: 0 === l.length && (0, n.jsx)("div", { className: C.wV }),
                  });
        },
    },
);
